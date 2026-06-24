# Speakeasy — Layer ① Generate client (commercial, the Stainless replacement)

**Job:** turn the spec into **idiomatic, typed SDKs with inline docs** — the closest like-for-like
to (the now-defunct) Stainless. Hosted SaaS + a standalone CLI.

**Why this slot:** Stainless was acquired by Anthropic and its hosted generator shut down
(2026-05). Speakeasy is the leading open-signup replacement — **free tier = 1 language + 250
endpoints** (our subset is 6, trivially covered), and it treats **OpenAPI as the single source of
truth** (no proprietary config layer that drifts).

## Fast path (once signed up)
1. Sign up at **speakeasy.com** (free tier) → or install the CLI: `brew install speakeasy-api/tap/speakeasy`.
2. **Quickstart:** `speakeasy quickstart` → point it at `../shared/openapi-subset.json` → pick
   Python or TypeScript → it generates an idiomatic SDK.
3. (CI/repeatable) `speakeasy run` with a `.speakeasy/workflow.yaml` referencing the spec.
4. Swap the spec to `openapi.json` / `openapi-auth.json` to compare — *try all & compare*.

> The CLI ships as a standalone binary with no hard cloud dependency, so most of this can run
> locally — a point of contrast with Stainless's fully-hosted model.

## What to capture (for the showcase)
A generated method showing **typed params + an inline docstring** (e.g. `client.spells.list(...)`),
the generated repo URL, and — for the sharpest finding — **diff Speakeasy's output against the
committed OpenAPI Generator SDK** (`../openapi-generator/python`): commercial-curated vs OSS-verbose.

## For the write-up
The commercial-polished end of layer ①. Against OpenAPI Generator it shows what curation buys
(ergonomic `client.spells.list()`, trimmed signatures, idiomatic pagination); against Stainless
it's the available successor now that Stainless is gone.

*Verify current CLI commands + free-tier limits — Speakeasy iterates quickly.*
