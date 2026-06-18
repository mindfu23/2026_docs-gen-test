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
| **A. `shared/openapi.json`** | vLLM on Kaggle (see `shared/openapi.json.README.md`) | Stainless, Mintlify, GitBook, Docusaurus |
| **B. `shared/content/` (3 seed pages)** | Hand-authored from vLLM standard spec ✅ done | Mintlify, GitBook, Docusaurus |
| **C. This repo** | `git init` ✅ done | All five; Promptless reacts to *changes* here |

The "same MDX" needs light per-tool adaptation (Mintlify components vs Docusaurus
admonitions vs GitBook blocks). **That portability gap is itself a finding** — document it.

---

## Repo layout

```
2026_docs-gen-test/
├── PLAN.md                    # this file
├── COMPARISON.md              # THE DELIVERABLE — matrix + write-up (fill as you go)
├── shared/
│   ├── openapi.json           # input A — generate via Kaggle (README in this folder)
│   └── content/               # input B — overview.md, endpoints.md, concepts.md ✅
├── stainless/                 # spec → typed SDK
├── mintlify/                  # docs.json + adapted MDX → hosted site
├── docusaurus/                # scaffold + openapi plugin → self-hosted static site
├── gitbook/                   # git-sync target + adapted Markdown → hosted site
└── promptless/                # reacts to repo changes → doc-update PRs
```

---

## Phased execution (cheap-first; Phase 1 is parallel once Phase 0 lands)

### Phase 0 — Hub + inputs  ✅ partially done
- [x] `git init` hub (pre-existing repo)
- [x] Author 3 seed pages from vLLM standard spec (`shared/content/`)
- [ ] Generate real `shared/openapi.json` (Kaggle, ~30 min)
- [ ] Reconcile seed pages against the real spec (version, server URL, model name)

### Phase 1 — Fan out (per-tool steps in each folder's README)
- [ ] **Stainless** (~20–30 min): upload spec → generate Python/TS SDK → screenshot a
      typed method + docstring.
- [ ] **Mintlify** (~30–45 min): GitHub SSO → `docs.json` `openapi` source → live site + "Try It".
- [ ] **Docusaurus** (~30–45 min): `create-docusaurus` + `docusaurus-plugin-openapi-docs`
      → build → deploy (Netlify/GH Pages).
- [ ] **GitBook** (~30 min): create space → Git Sync → import OpenAPI → hosted site.
- [ ] **Promptless** (stretch — *check access first*): connect repo → edit spec/add a param
      → review the drafted doc-update PR.

### Phase 2 — Evaluate + write up (~45 min)
- [ ] Fill the matrix in `COMPARISON.md`
- [ ] Write the contrast + LinkedIn hook

**Trim rule:** Phases 0–1 with even two layer-② tools is already a complete, credible
artifact. Promptless is the only real access/time risk — describe it conceptually if blocked.

---

## Evaluation matrix — dimensions to score per tool

layer · primary input · primary output · hosting (SaaS/self/CI) · content format ·
OpenAPI ingestion quality · git model · AI features · pricing / OSS-free · setup time ·
lock-in / portability · primary audience

### Overlaps to call out explicitly (the senior signal)
- **Spec consumers:** Stainless, Mintlify, GitBook, Docusaurus all ingest OpenAPI but emit
  *different artifacts* (SDK vs 3× reference site).
- **Publishing trio:** Mintlify (dev-docs-native, best playground) vs GitBook (WYSIWYG +
  bidirectional git-sync, best for mixed technical/non-technical authors) vs Docusaurus
  (self-hosted, max control, zero per-seat cost, you own deploy + maintenance).
- **Maintenance overlap:** Promptless vs Mintlify's built-in "outdated docs" PR check vs
  GitBook AI. Promptless isn't unique — it's the most *dedicated*.
- **Format portability:** MDX ports between Mintlify/Docusaurus; GitBook uses its own blocks.

---

## Verify before relying (platform facts drift)
- Stainless free-tier limits
- Mintlify config is `docs.json` (was `mint.json`)
- Whether Mintlify now bundles its own SDK generation (would overlap Stainless)
- GitBook Git-Sync + OpenAPI specifics and OSS pricing
- Promptless OSS / trial access (the likely blocker)

## Two-line history
- **Jun 7 (Copilot chat):** architected the seeding approach (spec → structure + authored
  explanation → hand to a maintenance tool). Never executed; left at "draft the 3 pages?"
- **Jun 18 (this session):** scaffolded the hub, authored the 3 seed pages, added GitBook
  to the tool set, wrote this plan. Next: generate the real spec, then fan out.
