# `shared/openapi.json` — the single shared input  ✅ obtained

**Source:** the **Open5e API** (D&D 5e SRD content) — `https://api.open5e.com/schema/`
(drf-spectacular, OpenAPI 3.0.3). Captured 2026-06-18: **69 paths** (`/v2/spells/`,
`/v2/creatures/`, `/v2/classes/`, `/v2/magicitems/`, `/v2/weapons/`, `/v2/armor/`, …).

Stored here as both `openapi.json` (~352 KB, generated) and `openapi.yaml` (the raw fetch).
This is the **one artifact** every spec-consuming tool ingests — Stainless, Mintlify,
GitBook, and the Docusaurus OpenAPI plugin.

## Spec variants (Phase 0.5 — try all & compare)

| File | Paths | Purpose |
|---|---|---|
| `openapi.json` | 69 | full Open5e (read-only) — the scale/noise case |
| `openapi-subset.json` | 6 | spells + creatures + classes (list + detail) — clean demo, dodges free-tier caps |
| `openapi-auth.json` | 7 | subset + a fake authenticated `POST /v2/encounters/` (bearer security) — exercises request-body / auth / mutation rendering |

Regenerate the variants from `openapi.json` with the Phase 0.5 trim/augment script (inline in
that commit). Feed each tool whichever variant fits its demo; compare full-vs-subset and
read-only-vs-auth.

**CORS (checked 2026-06-18):** `api.open5e.com` returns `access-control-allow-origin: *`, so the
interactive "Try It" consoles can make **live in-browser calls** — no proxy needed for read GETs.

## Why this replaced the vLLM/Kaggle plan

The original plan ran a throwaway vLLM server to produce a spec. Open5e *publishes* a real
OpenAPI spec, openly licensed, so **no GPU / Kaggle run is needed** — and it unifies the
whole project under one fun theme:

- **Spec → doc tools:** this file feeds Stainless (SDK), Mintlify/GitBook/Docusaurus (reference).
- **Same API's data → RAG corpus:** the live `/v2/...` endpoints (spells, monsters, classes)
  are the retrieval corpus for the Docusaurus RAG chatbot.
- **LoRA → house voice** on the explanatory prose.

vLLM is now **optional** — only needed if you later want to *serve* the base+LoRA model for
the RAG/drafting layer (see `../promptless/README.md`).

## Refresh / re-fetch

```bash
curl -L "https://api.open5e.com/schema/?format=json" -o shared/openapi.json   # JSON
curl -L "https://api.open5e.com/schema/"             -o shared/openapi.yaml    # YAML
```

Alt spec source: **dnd5eapi.co** (REST + GraphQL, also catalogued on APIs.guru) — swap in if
you prefer its surface. Open5e is the pick here because it ships a clean, downloadable
OpenAPI 3.0 spec.

## License — REQUIRED attribution (CC-BY-4.0)

The SRD content is under **Creative Commons Attribution 4.0 (CC-BY-4.0)** — irrevocable. Any
published artifact (docs site, SDK, write-up) must carry the attribution in `../NOTICE.md`.
Open5e also aggregates other OGL/CC third-party content; keep attribution intact when you
reproduce descriptions.

## Note on the seed pages

The three pages in `shared/content/` are authored on the **Open5e D&D surface** (spells,
creatures, classes, items; pagination, Django-style filters, vector search, documents/
licensing) — real content, not placeholders. They are the canonical guides each site tool
adapts to its own MDX/Markdown flavor.
