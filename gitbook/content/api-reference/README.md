# About the reference

The OpenAPI spec for this reference is **`openapi.json`** in this folder (a copy of
`shared/openapi-subset.json`).

GitBook ingests OpenAPI in one of two ways — **verify the current method in GitBook's UI, as this
evolves:**

1. **UI import (simplest):** in the GitBook space, *Add content → OpenAPI / API reference* and
   point it at the spec (upload `openapi.json`, or give the live URL
   `https://api.open5e.com/schema/`). GitBook generates the endpoint pages and an interactive
   "Test it" panel. (CORS is `*`, so live calls work — see Phase 0.5.)
2. **OpenAPI blocks in Markdown:** insert GitBook OpenAPI blocks that reference the spec + an
   operation, e.g. `{% openapi-operation spec="open5e" path="/v2/spells/" method="get" %}` (syntax
   varies by GitBook version — confirm in their docs).

Swap the spec for `openapi.json` (full) or `openapi-auth.json` (adds an auth POST) to compare how
GitBook renders each — *try all & compare*.
