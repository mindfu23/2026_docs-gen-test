# Stainless — Layer ① Generate client (⚠️ service shut down — documented from public output)

**Job (historical):** turn an OpenAPI spec into idiomatic, typed, multi-language SDKs with inline
docstrings. Stainless powered the official SDKs for **OpenAI, Anthropic, Cloudflare, Google**, etc.

## Status: no longer runnable
**Anthropic acquired Stainless (~2026-05) and wound down the hosted SDK generator** — new signups,
projects, and generations are all closed. There is no workaround. So in this comparison Stainless
is represented **from its public output**, not a fresh run, and its slot in layer ① is filled by
**Speakeasy** (commercial successor) + **OpenAPI Generator** (free/OSS) — see those folders.

## How to document it (from public, Stainless-generated SDKs)
Study real output — all public on GitHub, all Stainless-generated:
- `anthropic-sdk-python`, `openai-python` — note the hallmarks: ergonomic `client.resource.method()`
  naming, `Literal`-typed enum params, complete `Args` docstrings, typed pagination helpers,
  retries/streaming. This is the polish the OSS generator (`../openapi-generator`) doesn't do.

## Kept as a historical artifact
[`stainless.yml`](stainless.yml) — the hand-tuned config we'd have used (clean `spells`/`creatures`/
`classes` resources, verified against the fixed subset spec). Useful to show *intent* and to
contrast with how Speakeasy/OpenAPI-Generator name things, even though we can't run it.

## For the write-up
A fitting footnote for a docs-tooling project: **the layer-① gold standard was just absorbed by an
LLM company** and taken off the market. The comparison adapts — Speakeasy (paid-polished) and
OpenAPI Generator (free-verbose) now bracket what Stainless did, and Stainless's public SDKs remain
the quality benchmark to point at.
