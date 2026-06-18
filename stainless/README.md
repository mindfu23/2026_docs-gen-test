# Stainless — Layer ① Generate client

**Job:** turn `shared/openapi.json` into typed, multi-language SDKs with inline docstrings.
Not a docs site — an SDK generator. (Stainless powers the SDKs for OpenAI, Anthropic, etc.)

**Input:** a spec variant + `stainless.yml`  →  **Output:** Python / TypeScript SDK (code).

## Config prepped ✅
[`stainless.yml`](stainless.yml) is ready — it defines clean `spells` / `creatures` / `classes`
resources with `list` + `retrieve` methods, so the SDK reads `client.spells.retrieve(key)` instead
of the drf-spectacular auto names (`spells_retrieve`). **That curation is the finding.**

## Fast path (once logged in)
1. Sign up / log in at **app.stainless.com** (free tier — *verify current limits*).
2. New project → upload the spec **`shared/openapi-subset.json`** + the config **`stainless.yml`**.
   (Swap to `openapi.json` for the noisy-full case, or `openapi-auth.json` to add a mutation
   method — *try all & compare*.)
3. Pick Python and/or TypeScript (config sets both, package name `open5e`, publish off).
4. Generate → view/download the SDK, or let it open a PR to a repo.

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
