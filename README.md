# 2026_docs-gen-test

A hands-on comparison of five documentation / SDK tools — **Stainless, Mintlify, GitBook,
Docusaurus, and Promptless** — run against one shared open API (the **Open5e D&D 5e API**),
to show how the platforms differ in purpose, strengths, requirements, and overlaps.

The point isn't to produce one docs site; it's the **write-up** ([COMPARISON.md](COMPARISON.md))
articulating how the tools sit at three different layers: generate the client, publish the
site, maintain the docs.

## Start here
- **[PLAN.md](PLAN.md)** — the method, the 3-layer taxonomy, and the phased execution checklist.
- **[COMPARISON.md](COMPARISON.md)** — the deliverable (matrix + findings), filled in as you test.

## Layout
| Path | Role |
|---|---|
| `shared/openapi.json` | The single shared input — **Open5e** OpenAPI 3.0.3, 69 paths ([source](shared/openapi.SOURCE.md)) |
| [shared/content/](shared/content/) | The 3 seed pages (Overview/Endpoints/Concepts) — format templates, ⚠️ rework to D&D |
| [NOTICE.md](NOTICE.md) | Required CC-BY-4.0 attribution for the SRD content |
| [stainless/](stainless/) · [mintlify/](mintlify/) · [docusaurus/](docusaurus/) · [gitbook/](gitbook/) · [promptless/](promptless/) | One folder per tool, each with a README of role + steps |

## Status
Scaffold + plan + real spec obtained (Jun 18). The shared API is the **Open5e D&D 5e API**
(CC-BY-4.0) — no GPU needed. Next: rework the 3 seed pages to the D&D surface, then fan out to
the five tools. See [PLAN.md](PLAN.md) for the checklist.
