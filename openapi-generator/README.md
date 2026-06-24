# OpenAPI Generator — Layer ① Generate client (free / OSS)

**Job:** turn the spec into a typed SDK — the **free, self-hosted** alternative to Stainless.
No account, runs locally (Java). The OSS-tier baseline for the SDK-generation comparison.

**Status: generated ✅** — a real Python client is in [`python/`](python/) (OpenAPI Generator 7.23.0,
148 files: client, models, per-model docs, tests, `pyproject.toml`).

## Reproduce / regenerate
```bash
# Python (urllib3) — what's committed here:
npx --yes @openapitools/openapi-generator-cli generate \
  -i ../shared/openapi-subset.json -g python -o python \
  --additional-properties=packageName=open5e,projectName=open5e-python,library=urllib3

# TypeScript (fetch) — same one-liner, different generator:
npx --yes @openapitools/openapi-generator-cli generate \
  -i ../shared/openapi-subset.json -g typescript-fetch -o typescript
```
Swap `-i` to `openapi.json` (full) or `openapi-auth.json` (mutation) to compare — *try all & compare*.

## What it produced (the finding)
- A **complete, installable package** — not just a client: models, `docs/*.md` per model, a test
  scaffold, `pyproject.toml`/`setup.py`, `tox.ini`. More boilerplate than the commercial tools.
- **Faithful but verbose.** Every drf-spectacular query param became a typed kwarg, so
  `SpellsApi.spells_list(...)` has a **~30-argument signature** (`key__in`, `name__icontains`,
  `level__range`, `level__gt`, …). The spec's param noise is reproduced uncurated.
- **Less ergonomic naming:** methods are API-class-scoped — `SpellsApi(client).spells_list()` —
  vs Stainless/Speakeasy's `client.spells.list()`.
- Typed with Pydantic (`StrictStr`, `Annotated[..., Field(description=...)]`); three method
  variants each (`_with_http_info`, `_without_preload_content`).

## For the write-up
The **free/OSS tier**: zero cost, zero account, runs anywhere — paid for in polish and ergonomics.
The commercial tools (Stainless/Speakeasy) earn their price by *curating* exactly the noise you see
here. This is the honest "what you get for free vs what you pay for" data point in layer ①.
