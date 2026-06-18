# Model & serving layer — provider- and base-model-swappable

**Design goal:** the RAG chatbot (and any drafting loop) must **not** hard-code a provider or
a model. Switching **vLLM ↔ Hugging Face ↔ Cloudflare** for serving, or **Llama ↔ Mistral ↔
Qwen** for the base model, should be a **config change, not a code change.**

## The seam: one OpenAI-compatible endpoint + a few env vars

All three providers expose an OpenAI-compatible `/v1/chat/completions`. So downstream code uses
**one** client (OpenAI SDK or Vercel AI SDK) pointed at a configurable base URL — only env
changes when you swap:

| Env var | Meaning | vLLM (self-host) | Hugging Face | Cloudflare Workers AI |
|---|---|---|---|---|
| `LLM_BASE_URL` | endpoint | `http://localhost:8000/v1` | `https://router.huggingface.co/v1` ✅ | `https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/ai/v1` ✅ |
| `LLM_API_KEY` | token | `not-needed` | `$HF_TOKEN` | CF API token (AI permission) |
| `LLM_MODEL` | base model id | `mistralai/Mistral-7B-Instruct-v0.2` | same HF id (router may need a `:provider` suffix) | `@cf/mistral/mistral-7b-instruct-v0.2-lora` |
| `LLM_LORA` | optional adapter | HF repo id / local path | dedicated Inference Endpoint w/ adapter (see note) | uploaded adapter id (BYO LoRA) |

**Confirmed endpoints (2026-06-18):**
- **HF** unified OpenAI-compatible router: `https://router.huggingface.co/v1` (Inference Providers).
  ⚠️ The router serves *provider-hosted* models — it does **not** auto-serve your private
  custom LoRA. To serve your own adapter on HF, deploy a **dedicated Inference Endpoint**
  (TGI/vLLM with the adapter loaded); that endpoint exposes its own OpenAI-compatible `/v1`.
  The router is the path for swapping the *base* model (Mistral/Qwen/etc.).
- **Cloudflare** OpenAI-compatible chat: `…/accounts/<ACCOUNT_ID>/ai/v1/chat/completions`;
  Workers AI model ids use the `@cf/` prefix.

## vLLM stays the reference engine — and makes the swaps trivial

vLLM is the canonical local path *because* it loads any HF model id and any HF LoRA directly:

```bash
vllm serve mistralai/Mistral-7B-Instruct-v0.2 \      # the base your LoRAs were trained on
  --enable-lora \
  --lora-modules american=mindfu/humor-lora-american-1929 \   # private HF repos (see status)
                 british=mindfu/humor-lora-british-1929
```

- **Switch base model** → change the HF id (Llama → Mistral → Qwen are all just ids).
- **Switch to HF serving** → point `LLM_BASE_URL` at HF's hosted inference; same config keys.
- **Reference LoRAs on HF** → pass the HF repo id as the lora module (vLLM) or `LLM_LORA` (others).

### Two roles vLLM plays in this project — kept distinct
- **(subject)** We *document* the **Open5e API**, not vLLM — Open5e's spec feeds the 5 doc tools.
- **(engine)** vLLM *serves* the base+LoRA model behind the **RAG chatbot / drafting loop**.

Both can coexist; don't conflate them.

## Hard constraint: LoRA ↔ base must match

A LoRA only works on the base family it was trained on. So swapping the base model means
swapping (or dropping) the LoRA. Track it explicitly:

| Base model (HF id) | Compatible LoRA | Notes |
|---|---|---|
| **`mistralai/Mistral-7B-Instruct-v0.2`** ← your base | `mindfu/humor-lora-american-1929`, `mindfu/humor-lora-british-1929` | r=32, alpha=64, targets q/k/v/o_proj; 109 MB each. **Private until safe** (below). |
| `mistralai/Mistral-7B-Instruct-v0.3` | needs a v0.3-trained LoRA, else base-only | a base swap, even minor version, breaks the adapter |
| `Qwen/Qwen2.5-7B-Instruct` | needs a Qwen-trained LoRA, else base-only | |

**Base-only (`LLM_LORA` empty) always works** — the fallback when no matching LoRA exists,
and the **default state of this project** until the LoRAs pass the safety screen.

## Status: LoRA repos are PRIVATE pre-release

`mindfu/humor-lora-american-1929` and `mindfu/humor-lora-british-1929` (HF Collection *"Two
LoRA voices — US and British humor up to 1929"*) are **private** by design — their model cards
carry a `PRIVATE PRE-RELEASE` banner and state Phase 3.5 has not run, so outputs are
preliminary. **Do not wire them into a public artifact until they pass the content-safety
screen and you flip them public.** Until then this pipeline runs **base-only Mistral v0.2**.

## Cloudflare LoRA specifics (from `llm-training-free/CLOUDFLARE-TEST.md`)

Good news — your LoRAs *fit* CF's constraints, but there are three procedural gotchas:
- **Base is supported:** CF serves `@cf/mistral/mistral-7b-instruct-v0.2-lora` — matches your v0.2.
- **Rank limit ≤ 32:** yours are exactly r=32 (at the ceiling, OK). File ≤ 300 MB: yours are 109 MB, OK.
- **Must add `model_type: "mistral"`** to `adapter_config.json` before upload (PEFT omits it).
- Upload `adapter_config.json` + `adapter_model.safetensors` via the CF API, then call the
  `@cf/mistral/mistral-7b-instruct-v0.2-lora` model.

So all three serving paths (vLLM, HF dedicated endpoint, Cloudflare) can host these specific
adapters — no rank/base blockers, only the per-provider plumbing above.

## Gate: LoRA content-safety screen (separate but linked project)

Before any LoRA is wired into the pipeline it must pass a **content-safety screen** — run it
over a battery of prompts and confirm outputs are "clean enough to be safe." Tracked as a
**separate project**; until a LoRA passes, this pipeline runs **base-only**. See `PLAN.md`
→ "Related projects."
