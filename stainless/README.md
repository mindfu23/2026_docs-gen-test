# Stainless — Layer ① Generate client

**Job:** turn `shared/openapi.json` into typed, multi-language SDKs with inline docstrings.
Not a docs site — an SDK generator. (Stainless powers the SDKs for OpenAI, Anthropic, etc.)

**Input:** a spec variant + `stainless.yml`  →  **Output:** Python / TypeScript SDK (code).

## Config prepped ✅
[`stainless.yml`](stainless.yml) is ready — it defines clean `spells` / `creatures` / `classes`
resources with `list` + `retrieve` methods, so the SDK reads `client.spells.retrieve(key)` instead
of the drf-spectacular auto names (`spells_retrieve`). **That curation is the finding.**

Config **verified against the fixed subset spec** (all 3 resources / 6 methods / 3 models resolve).

## Fast path (once logged in)
1. Sign in at **app.stainless.com** with **GitHub** → create an org. (Free tier — *verify limits*.)
2. **New project → provide the spec:** upload **`shared/openapi-subset.json`** (or paste a hosted
   URL). On first generation Stainless **auto-drafts a config with an LLM.**
3. **Replace that draft with our hand-tuned [`stainless.yml`](stainless.yml)** in the Studio's
   config editor (clean `spells`/`creatures`/`classes` resources, Python + TS, publish off).
   → *Try-all-and-compare bonus:* keep Stainless's auto-drafted config too and diff it against
   ours — "LLM-drafted vs hand-tuned SDK config" is a sharp finding.
4. **Save & build main branch** → the Python + TS SDKs generate into a repo.
5. (Alt) the **Stainless CLI** does the same headlessly with the spec + config.

Swap the spec to `openapi.json` (noisy-full) or `openapi-auth.json` (adds a mutation method +
request body) to compare — *try all & compare*.

## What to capture
A generated method showing **typed params + an inline `Args` docstring** (e.g.
`client.spells.list(...)`). Screenshot it; drop the generated-repo URL + snippet into the showcase
tab. This is the "generate the client" layer.

## For the write-up
Stainless is the odd one out: it produces *code a developer imports*, not *docs a developer reads*.
Note that some publishing tools (e.g. Mintlify) have added their own SDK generation — a direct
overlap worth verifying and flagging.

## What to capture
A generated method showing **typed params + an inline `Args` docstring** — the same shape as
a Stainless-generated client like `client.chat.completions.create(...)` with `Literal`-typed
args. Screenshot it. This is the "generate the client" layer.

## For the write-up
Stainless is the odd one out: it's the only tool here that produces *code a developer imports*
rather than *docs a developer reads*. Note that some publishing tools (e.g. Mintlify) have
added their own SDK-generation features — a direct overlap worth verifying and flagging.
