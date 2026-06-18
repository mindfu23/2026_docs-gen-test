# Docs-generation platform comparison — PLAN

**What this is:** a hands-on comparison of five documentation/SDK tools, run against one
shared open-source API (vLLM), to demonstrate fluency in how the platforms differ — their
purposes, strengths, weaknesses, requirements, and overlaps.

**Origin:** began as interview-prep / proof-of-concept for a founding-technical-writer role
(uRun). That role fell through; the project continues as a portfolio piece and a personal
reference on the docs-tooling landscape.

**Deliverable:** not any single docs site — it's `COMPARISON.md` (the matrix + write-up).
The reframed goal is *"I can articulate how these layers differ,"* which is the senior signal.

---

## Organizing principle: 5 tools, 3 layers

These tools do **not** compete — they sit at different layers of the docs toolchain.

| Tool | Layer | Primary input | Primary output | Hosting |
|------|-------|---------------|----------------|---------|
| **Stainless**  | ① Generate client | OpenAPI spec | Typed multi-lang SDKs + inline docstrings | CI tool (no site) |
| **Mintlify**   | ② Publish site | OpenAPI spec + MDX | Hosted interactive reference + guides | SaaS |
| **GitBook**    | ② Publish site | OpenAPI spec + Markdown (git-sync) | Hosted docs/KB + API ref | SaaS |
| **Docusaurus** | ② Publish site | MDX + OpenAPI (plugin) | Self-hosted static site (you deploy) | Self-host |
| **Promptless** | ③ Maintain | Repo changes + existing docs | AI-drafted doc-update PRs | PR bot |

**Thesis line:** *one OpenAPI spec → Stainless makes the SDK, three tools publish the site
three different ways, Promptless keeps it current.* Layer ② is the real bake-off; ① and ③
frame it.

---

## Efficiency unlock: build 3 shared inputs once, fan out

| Shared input | Built once | Feeds |
|---|---|---|
| **A. `shared/openapi.json`** | **Open5e API** (`api.open5e.com/schema/`) ✅ obtained — OpenAPI 3.0.3, 69 paths | Stainless, Mintlify, GitBook, Docusaurus |
| **B. `shared/content/` (3 seed pages)** | Authored for vLLM ⚠️ rework to D&D surface | Mintlify, GitBook, Docusaurus |
| **C. This repo** | `git init` ✅ done | All five; Promptless reacts to *changes* here |

> **Theme pivot (2026-06-18):** the shared API is now the **Open5e D&D 5e API**, not vLLM.
> Open5e publishes a real, openly-licensed (CC-BY-4.0) OpenAPI spec, so **no GPU/Kaggle run
> is needed**, and one fun theme unifies the whole project: the spec feeds the doc tools, the
> same API's data (spells/creatures/classes) is the Docusaurus RAG corpus, and the LoRA gives
> it house voice. vLLM is now optional (only to *serve* the base+LoRA model). Attribution
> lives in `NOTICE.md`. Source details in `shared/openapi.SOURCE.md`.

The "same MDX" needs light per-tool adaptation (Mintlify components vs Docusaurus
admonitions vs GitBook blocks). **That portability gap is itself a finding** — document it.

---

## Repo layout

```
2026_docs-gen-test/
├── PLAN.md                    # this file
├── COMPARISON.md              # THE DELIVERABLE — matrix + write-up (fill as you go)
├── FURTHER_TESTING.md         # backlog of extra functionality axes, by category (explore after core)
├── NOTICE.md                  # CC-BY-4.0 attribution (required in published artifacts)
├── shared/
│   ├── openapi.json           # spec variant: full Open5e (69 paths, read-only) ✅
│   ├── openapi-subset.json    # spec variant: trimmed demo subset (6 paths) ✅
│   ├── openapi-auth.json      # spec variant: subset + 1 fake auth POST (7 paths) ✅
│   ├── content/               # input B — overview / endpoints / concepts (D&D) ✅
│   ├── AUTHORING_OPS.md        # the create/edit/move/image battery
│   └── MODEL_LAYER.md         # swappable base+RAG+LoRA serving design
├── stainless/                 # spec → typed SDK
├── mintlify/                  # docs.json + adapted MDX → hosted site
├── docusaurus/                # openapi plugin → self-hosted static site (+ RAG chatbot, netlify stubs)
├── gitbook/                   # git-sync target + adapted Markdown → hosted site
├── promptless/                # reacts to repo changes → doc-update PRs
└── showcase/                  # React+Vite+Tailwind hub — tabs per tool + Summary (PUBLIC ARTIFACT)
```

The **showcase/** hub is a curated presentation layer, not a co-host of the five live outputs
(they're heterogeneous and mostly externally hosted). Each tab is driven by data in
`showcase/src/tools.ts` — the **capture contract**: per tool you collect a live URL, a
screenshot, a representative artifact (page/code/diff), setup notes, and a findings paragraph.
Filling a tab after a run = editing data, not code. The Summary tab is the deliverable.

---

## Generation layer — RAG + LoRA + swappable serving (for the Docusaurus portion)

The Docusaurus RAG chatbot (and any drafting loop) runs on a **base LLM**, with **RAG** for
facts and an optional **LoRA** for house voice. The serving engine is **vLLM** by default
(also a project topic), but the layer is designed to be **swappable by config, not code**:

- **Switch serving** vLLM ↔ Hugging Face ↔ Cloudflare, and **switch base model**
  Llama ↔ Mistral ↔ Qwen, by changing env vars only (all talk OpenAI-compatible APIs).
- **Reference LoRAs by Hugging Face repo id** — vLLM loads an HF base model + HF LoRA directly
  (`vllm serve <hf-base> --enable-lora --lora-modules voice=<hf-lora-repo>`).
- **Constraint:** a LoRA only fits the base family it was trained on; base-only is the fallback.

Full design + the env-var seam + provider table: **`shared/MODEL_LAYER.md`**.

## Comparison principle — preserve every option

When a step has more than one viable approach, **try each and compare — never collapse to one.**
The whole project's value is the comparison, so divergent options are features, not forks to
resolve. Recurring multi-option points (each tagged *(try all & compare)* below and in
`FURTHER_TESTING.md`):
- **Spec variants:** full vs. subset vs. auth-augmented (Phase 0.5).
- **Serving providers:** vLLM vs. Hugging Face vs. Cloudflare (`MODEL_LAYER.md`).
- **Base models:** Mistral vs. Qwen vs. Llama (LoRA-compat permitting).
- **Voice LoRAs:** American vs. British.
- **RAG retrieval:** your own index vs. Open5e's built-in `vector=true`.
- **Search, i18n, review workflows:** across all three publishers.

## Phased execution (cheap-first; Phase 1 is parallel once Phase 0 lands)

### Phase 0 — Hub + inputs  ✅ mostly done
- [x] `git init` hub (pre-existing repo)
- [x] Obtain real `shared/openapi.json` — **Open5e**, OpenAPI 3.0.3, 69 paths (no GPU needed)
- [x] Add CC-BY-4.0 attribution (`NOTICE.md`)
- [x] Author the 3 seed pages on the **Open5e D&D surface** (spells / creatures / classes /
      items; pagination, Django-style filters, vector search, documents/licensing)

**Phase 0 complete.** Next: Phase 0.5 critical fixes, then fan out (Phase 1).

### Phase 0.5 — Critical fixes (from the plan review)  ✅ 3 of 4 done (2026-06-18)
The four highest-value fixes surfaced by the plan review. *Preserve every spec variant — they
exist to be compared, not replaced.*
- [x] **Auth + mutation coverage** *(spec)* — `shared/openapi-auth.json`: the subset **plus a fake
      authenticated `POST /v2/encounters/`** (bearer security, `EncounterRequest`/`Encounter`
      schemas, 201/401), to exercise request-body / auth / mutation rendering the read-only spec
      can't. Keep all three spec variants and compare.
- [x] **Demo-subset spec** — `shared/openapi-subset.json` (spells + creatures + classes, list +
      detail = 6 paths) to dodge free-tier caps and param noise. Run ≥1 tool against **both** full
      and subset to capture the scale/noise finding *(try all & compare)*.
- [x] **CORS check** *(verify)* — **DONE: `api.open5e.com` returns `access-control-allow-origin: *`**,
      so the interactive "Try It" consoles **can make live in-browser calls.** The "interactive"
      claim for Mintlify/GitBook/Docusaurus is unblocked.
- [~] **i18n + voice LoRAs** *(localization)* — **seam done:** Docusaurus configured for `en` +
      `en-GB` (the British-voice home). Voiced translations pending the LoRA safety screen. Original note:
      **British/American voice LoRAs** → "the same docs in two house voices." Mechanism first;
      *voiced* variants once the LoRAs clear the safety screen (`MODEL_LAYER.md`). Extend across
      publishers *(try all & compare)*.

**Three spec variants now exist** (all valid OpenAPI 3.0.3): `openapi.json` (full, 69 paths) ·
`openapi-subset.json` (6) · `openapi-auth.json` (7, +auth POST). Feed each tool whichever fits,
and compare full-vs-subset and read-only-vs-auth.

> **Compliance reminder (standing):** CC-BY-4.0 attribution (`NOTICE.md`) must appear in **every
> published output** — each docs site, the SDK, and the showcase — not just this repo.

### Phase 1 — Fan out (per-tool steps in each folder's README)
- [~] **Stainless** — **config prepped ✅** (`stainless/stainless.yml`: clean spells/creatures/
      classes resources). *Your run:* log in → upload `openapi-subset.json` + the config → generate
      Python/TS SDK → capture a typed method + docstring.
- [~] **Mintlify** — **config prepped ✅** (`mintlify/` is a ready docs root: `docs.json`, copied
      spec, 3 Mintlify-flavored MDX guides). *Your run:* GitHub SSO → install the App on this repo,
      point it at `mintlify/` → live site + "Try It" → capture URL/screenshot.
- [~] **Docusaurus** — **scaffolded ✅** in `docusaurus/site/` (3.10.1 + OpenAPI plugin v5 wired to
      `openapi-subset.json`; 3 D&D guides as admonition MDX; i18n en/en-GB seam; sample image as
      logo; netlify + RAG-proxy stubs moved in). *Your run:* `npm install` → `npm run gen-api-docs`
      → `npm run build` → deploy → fill the showcase tab.
- [~] **GitBook** — **prepped ✅** (`gitbook/content/` Git-Sync root: `.gitbook.yaml`, `SUMMARY.md`,
      3 `{% hint %}`-flavored guides, spec + import notes). *Your run:* create space → Git Sync to
      the `gitbook/` subdir → import OpenAPI → run the authoring battery → capture.
- [~] **Promptless** — **connected ✅** (vLLM v2 fork GitHub + Slack); demo recipe in
      `promptless/README.md`. Next: open a controlled PR → review the drafted doc-update PR.
- [ ] **Docusaurus RAG chatbot** (the LoRA/vLLM showcase): stand up the swappable model seam
      (`shared/MODEL_LAYER.md`) — base-only first, then attach an HF LoRA once it passes the
      safety screen. Default serving = vLLM; prove an HF/Cloudflare swap is config-only.

### Phase 1.5 — Showcase hub  ✅ scaffolded
- [x] Thin `showcase/` shell: tabs per tool + Summary, data-driven capture contract
- [ ] Per tool, fill its `showcase/src/tools.ts` entry as you complete it (URL, screenshot,
      artifact, setup notes, findings, status → `done`)
- [ ] Run the **authoring-operations battery** (`shared/AUTHORING_OPS.md`) in each layer-②
      tool — create/edit/move pages & folders, add `shared/assets/sample-d20.svg`, reorganize —
      and record *how* each does it in that tool's `operations` list

### Phase 2 — Evaluate + write up (~45 min)
- [ ] Fill the matrix in `COMPARISON.md`
- [ ] Write the contrast + LinkedIn hook

**Trim rule:** Phases 0–1 with even two layer-② tools is already a complete, credible
artifact. Promptless is the only real access/time risk — describe it conceptually if blocked.

---

## Evaluation matrix — dimensions to score per tool

layer · primary input · primary output · hosting (SaaS/self/CI) · content format ·
OpenAPI ingestion quality · git model · AI features · pricing / OSS-free · setup time ·
lock-in / portability · primary audience · **authoring operations** (create/edit/move pages &
folders, add images, reorganize — the battery in `shared/AUTHORING_OPS.md`)

### Overlaps to call out explicitly (the senior signal)
- **Spec consumers:** Stainless, Mintlify, GitBook, Docusaurus all ingest OpenAPI but emit
  *different artifacts* (SDK vs 3× reference site).
- **Publishing trio:** Mintlify (dev-docs-native, best playground) vs GitBook (WYSIWYG +
  bidirectional git-sync, best for mixed technical/non-technical authors) vs Docusaurus
  (self-hosted, max control, zero per-seat cost, you own deploy + maintenance).
- **Maintenance overlap:** Promptless vs Mintlify's built-in "outdated docs" PR check vs
  GitBook AI. Promptless isn't unique — it's the most *dedicated*.
- **Format portability:** MDX ports between Mintlify/Docusaurus; GitBook uses its own blocks.

## Further testing (backlog — explore after the core is done)

Once Phases 0.5–2 are set up and tested, work through **[`FURTHER_TESTING.md`](FURTHER_TESTING.md)**
— every remaining gotcha and functionality-testing opportunity from the plan review, grouped by
**testing category** (reference rendering · search · versioning/localization · authoring depth ·
maintenance/quality gates · hosting/portability/compliance · RAG & model layer). Items needing a
head-to-head are marked *(try all & compare)*. That file is the single place to recall and pick up
the optional tangents.

---

## Verify before relying (platform facts drift)
- Stainless free-tier limits
- Mintlify config is `docs.json` (was `mint.json`)
- Whether Mintlify now bundles its own SDK generation (would overlap Stainless)
- GitBook Git-Sync + OpenAPI specifics and OSS pricing
- Promptless OSS / trial access (the likely blocker)

## Staging / deployment

Staging splits by tool — and **who owns hosting is itself a comparison finding**. The standard
**GitHub → Netlify** pipeline covers the one site that's yours to host (Docusaurus); the SaaS
tools deploy themselves.

| Tool | Produces | Staging path | GitHub → Netlify? |
|---|---|---|---|
| **Docusaurus** | static site *you* build | `npm run build` → static output | ✅ **yes — standard pipeline** |
| **Mintlify** | hosted docs site | GitHub App → Mintlify infra → own URL | ❌ SaaS-hosted |
| **GitBook** | hosted docs site | Git Sync → GitBook infra → own URL | ❌ SaaS-hosted |
| **Stainless** | SDK package (code) | npm / PyPI / repo | ❌ not a site |
| **Promptless** | doc-update PRs | merge into repo | ❌ not a site |

### Docusaurus on Netlify — two specifics
1. **Monorepo:** set Netlify **base directory = `docusaurus/`** (root `netlify.toml` does this:
   `[build] base="docusaurus"`, build `npm run build`, publish `docusaurus/build`). Node 20 ok.
   A ready `netlify.toml` and proxy stub live in `docusaurus/` (see that folder's README).
2. **RAG chatbot needs a backend.** The site is static, so the chatbot calls the LLM through a
   **Netlify Function** (`client → /.netlify/functions/chat → model API`) — never client-side,
   per the no-`VITE_`-secrets rule. The function's env holds `LLM_BASE_URL` / `LLM_API_KEY` /
   `LLM_MODEL` / `LLM_LORA` (see `shared/MODEL_LAYER.md`), which is what makes the provider swap
   config-only.

> The `netlify.toml` + `netlify/functions/chat.ts` in `docusaurus/` are **pre-staged stubs** —
> they activate once Docusaurus is scaffolded in Phase 1.

## Related projects
- **LoRA content-safety screen** *(separate, linked)* — the humor LoRAs must be tested on a
  battery of text and judged "clean enough to be safe" before being wired into this pipeline.
  Until a LoRA passes, the generation layer runs **base-only**. See `shared/MODEL_LAYER.md`.
- **`llm-training-free`** — where the humor LoRAs were trained. **Base model:
  `mistralai/Mistral-7B-Instruct-v0.2`** (r=32, α=64). LoRA repos (HF, **private pre-release**):
  `mindfu/humor-lora-american-1929`, `mindfu/humor-lora-british-1929`. Stay base-only until
  they pass the safety screen and are flipped public.

## Two-line history
- **Jun 7 (Copilot chat):** architected the seeding approach (spec → structure + authored
  explanation → hand to a maintenance tool). Never executed; left at "draft the 3 pages?"
- **Jun 18 (this session):** scaffolded the hub, authored the 3 seed pages, added GitBook to
  the tool set, wrote this plan. Then pivoted the theme to the **Open5e D&D 5e API** —
  verified it ships a CC-BY-4.0 OpenAPI 3.0.3 spec (69 paths) and captured it to
  `shared/openapi.json` (no GPU needed). Kept vLLM as a topic + the reference serving engine,
  and added a **swappable model layer** (`shared/MODEL_LAYER.md`) so HF/Cloudflare serving and
  Mistral/Qwen base models are config swaps, with LoRAs referenced by HF repo id. Confirmed the
  base model (`mistralai/Mistral-7B-Instruct-v0.2`), the private LoRA repos, and the exact
  HF/Cloudflare endpoints. Reworked the 3 pages to the D&D surface, scaffolded the `showcase/`
  hub + capture contract, and added the authoring-ops battery + sample image. Finally ran a
  **plan review**: folded 4 critical fixes into **Phase 0.5** (auth/POST spec variant, demo
  subset, CORS check, i18n+voice LoRAs), added the "preserve every option" principle, and filed
  the rest in **`FURTHER_TESTING.md`** by category. Next: Phase 0.5, then fan out to the tools.
