# Stainless — Layer ① Generate client

**Job:** turn `shared/openapi.json` into typed, multi-language SDKs with inline docstrings.
Not a docs site — an SDK generator. (Stainless powers the SDKs for OpenAI, Anthropic, etc.)

**Input:** `../shared/openapi.json`  →  **Output:** Python / TypeScript SDK (code).

## Steps
1. Sign up at app.stainless.com (free tier exists — *verify current limits*).
2. New project → upload `shared/openapi.json` (or point at this repo).
3. Pick Python and/or TypeScript; set the package name.
4. Generate → it produces the SDK and can open a PR to a GitHub repo, or you download the code.

## What to capture
A generated method showing **typed params + an inline `Args` docstring** — the same shape as
a Stainless-generated client like `client.chat.completions.create(...)` with `Literal`-typed
args. Screenshot it. This is the "generate the client" layer.

## For the write-up
Stainless is the odd one out: it's the only tool here that produces *code a developer imports*
rather than *docs a developer reads*. Note that some publishing tools (e.g. Mintlify) have
added their own SDK-generation features — a direct overlap worth verifying and flagging.
