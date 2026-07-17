# One spec, three layers — what each documentation tool actually produces

**The deliverable.** One OpenAPI spec (the open **Open5e** D&D 5e API), run through the modern
documentation toolchain to see what each tool produces, where they overlap, and where the
"obvious" winner isn't. The point isn't any single docs site — it's the comparison.

> **Status:** 6 of 7 tools captured (OpenAPI Generator, Speakeasy, Stainless, Mintlify,
> Docusaurus, GitBook). **Promptless** is wired up; its capture is in progress and marked _pending_ below.

## TL;DR thesis

These tools **aren't competitors — they're three layers of one toolchain:**

1. **Generate the client** — turn the spec into a typed SDK. *(OpenAPI Generator · Speakeasy · Stainless)*
2. **Publish the site** — render the spec + guides into docs, three different ways. *(Docusaurus · Mintlify · GitBook)*
3. **Maintain the docs** — draft doc updates as the code changes. *(Promptless)*

The sharpest through-line: **the same messy auto-generated spec is treated completely
differently at each layer** — and the free/OSS tools ship it verbatim while the commercial tools
*curate* it.

## Setup

- **Subject:** the **Open5e** API (`api.open5e.com`) — an open, CC-BY-4.0 D&D 5e content API with
  a real, publicly published OpenAPI 3.0.3 spec. Chosen because one open spec can feed every tool.
- **Three spec variants** drive the comparison:
  - `openapi.json` — full (69 paths) — the scale/noise case.
  - `openapi-subset.json` — spells + creatures + classes (6 paths) — the clean demo (dodges free-tier caps).
  - `openapi-auth.json` — subset + one fake authenticated `POST` — to exercise request-body/auth rendering the read-only API lacks.
- **The spec is auto-generated** by drf-spectacular (Django) — so it's realistic and *noisy*:
  every endpoint carries ~30 Django-style filter params (`name__icontains`, `level__gte`, …).
  How each tool handles that noise is a recurring finding.

---

## Layer ① — Generate the client (SDK)

| | **OpenAPI Generator** | **Speakeasy** | **Stainless** |
|---|---|---|---|
| Kind | free / OSS CLI (Java) | commercial SaaS + CLI | commercial *(discontinued)* |
| Output | full installable package | idiomatic SDK | idiomatic SDK (benchmark) |
| Method naming | `SpellsApi.spells_list()` | `sdk.spells.list()` (via overlay) | `client.spells.list()` |
| The param noise | **exploded into a ~30-arg signature** | **curated** (overlay) | curated |
| Config | CLI flags | OpenAPI-as-source + overlays | `stainless.yml` (LLM-drafted) |
| Cost | $0, no account | free tier (1 lang / 250 endpoints) | n/a — service shut down |
| Languages here | **Python + TypeScript** generated | Python generated | documented from public SDKs |

**OpenAPI Generator (the OSS baseline).** Produced a *complete* installable package — client,
models, per-model docs, tests, `pyproject.toml`, `tox.ini` — for both Python and TypeScript. But
it's **faithful-and-verbose**: it turned every drf-spectacular query param into a typed kwarg, so
`spells_list` has a ~30-argument signature, and names are API-class-scoped (`SpellsApi.spells_list()`).
Zero cost, zero curation — you get exactly what the spec says, noise included.

**Speakeasy (the commercial replacement).** Generated an idiomatic SDK, and its **Studio
*diagnosed* what the OSS generator shipped silently** — 6 spec-quality categories (~29 instances):
method-name curation, `response.description` required (12), missing error responses (6), pagination
via `x-speakeasy-pagination` (3), retries via `x-speakeasy-retries` (1), duplicate schemas (1). The
headline: `sdk.spells.spells_list()` → **`sdk.spells.list()`**, applied via a
**`speakeasy-modifications-overlay.yaml`** — an overlay that leaves the shared source spec
untouched. This *is* the layer-① thesis, made literal: **same spec → OSS ships it verbose;
Speakeasy curates and extends.**

**Stainless (the benchmark that left the market).** A real-world plot twist: mid-project,
**Anthropic acquired Stainless and shut down the hosted generator** — no signups, no workaround.
Since it powered the official OpenAI/Anthropic/Cloudflare SDKs, it's documented here **from its
public output** (ergonomic `client.resource.method()`, `Literal`-typed params, full docstrings,
typed pagination) as the quality bar the others are measured against. *(Finding in itself: the
leading SDK tool being absorbed by an LLM company.)*

---

## Layer ② — Publish the site

| | **Docusaurus** | **Mintlify** | **GitBook** |
|---|---|---|---|
| Hosting | self-host (Netlify) | SaaS | SaaS |
| Input | MDX + spec (plugin) | spec + MDX | Markdown (git-sync) + spec |
| Callout dialect | `:::note` admonitions | `<Info>` / `<Card>` | `{% hint %}` |
| API reference | plugin — uses `operationId` | auto — uses method+path | via OpenAPI feature (separate step) |
| Live "Try It" | ✅ | ✅ (verified live 200) | via OpenAPI feature |
| Authoring | files + sidebar config | files + web editor | **WYSIWYG drag-drop + bidirectional git-sync** |
| i18n | ✅ en / en-GB built-in | localization | variants |
| Setup effort | **highest** (most wiring) | **lowest** | medium (git-sync plumbing) |

**The same 3 guide pages exist in all three, in three callout dialects** — a concrete demonstration
that the "same MDX" doesn't port cleanly (Docusaurus `:::`, Mintlify components, GitBook blocks).

**Docusaurus (own-your-stack).** The most wiring of the three — Docusaurus-3 bracket admonitions,
`gen-api-docs` ordering, sidebar/navbar wiring — but it pays off in total control, zero recurring
cost, and no lock-in. All 6 endpoints render with a live Try-It + multi-language samples, and
en/en-GB i18n works. It renders the param noise and rough auto-descriptions **verbatim** — a vivid
"messy auto-spec" data point. It also **surfaced the upstream spec bug** (below).

**Mintlify (polished SaaS default).** Fastest to a site, near-zero config via `docs.json`, live
Try-It (a real `200` from `api.open5e.com`), multi-language samples, ⌘K + AI search. **But the
polished tool wasn't strictly better:** it auto-titled operations `Get v2spells` from *method+path*,
ignoring the `operationId`, so `list` and `retrieve` **collide into duplicate sidebar labels** —
where Docusaurus's `spells_list` / `spells_retrieve` was clearer.

**GitBook (WYSIWYG + git-sync).** The mixed-audience / content-platform option. Connected via
**bidirectional Git Sync** (repo-root `.gitbook.yaml` → `root: ./gitbook/content/`) — the fiddliest
setup of the publishers, but then the **smoothest authoring**: the whole battery ran in the WYSIWYG
editor (create page, nest, drag-drop an inline image) with no files or config. **The differentiator,
confirmed:** a GUI edit became a change request, and merging it pushed a **Verified `gitbook-bot`
commit back to `main`** (new page + image + auto-updated `SUMMARY.md`) — *GUI-edit → GitHub commit*,
which no other tool here does. Markup is `{% hint %}` (the 3rd callout dialect). The API reference is
a separate OpenAPI-import step (Git Sync brings the guides, not auto-generated API pages).

---

## Layer ③ — Maintain the docs

**Promptless.** _Pending capture._ The maintenance layer — it watches a repo and **drafts
doc-update PRs** (with citations) in response to code changes, via a GitHub PR or a Slack
`@mention`. **Key finding: this layer can't be demoed on a static spec** — it needs a *living
codebase*, so it deliberately runs on a different substrate (the **vLLM v2 fork**, with real churn
and a real Sphinx `docs/` tree) rather than the Open5e API the other tools document. Overlaps, but
isn't replaced by, Mintlify's "outdated docs" PR check and GitBook AI — Promptless is the dedicated,
PR-first version.

---

## Cross-cutting observations

- **Same spec, radically different artifacts.** Layer ① emits *code you import*; layer ② emits
  *sites you read*; layer ③ emits *PRs that maintain them*. Calling these "competitors" misses the point.
- **Free ships the mess; paid curates it.** The clearest axis: OpenAPI Generator's ~30-arg
  signatures and `Get v2spells` collisions are what the raw spec produces. Speakeasy (overlay) and
  Stainless (config) *earn their price* precisely by cleaning that up — and Speakeasy does it
  **without touching the source spec** (overlays), so the shared input stays intact for every other tool.
- **"Polished" ≠ "correct."** Mintlify (paid) produced *worse* API-reference naming than the
  Docusaurus OSS plugin, because it derived names from paths instead of `operationId`. A good
  reminder that curation quality is per-feature, not per-price-tier.
- **Callout-format portability is a myth.** The same three pages needed three different markup
  dialects across the publishers — a real cost when "just move the Markdown" is assumed.
- **Who owns hosting is a first-class trade.** Docusaurus (you host, Netlify) vs Mintlify/GitBook
  (they host, their URL) — the SaaS tools take deployment off your plate *and* out of your control.
- **The layers are blurring.** Mintlify ships its own **Slack "update your docs" agent** — seen
  live *in the same Slack workspace as Promptless* — and GitBook has GitBook AI. So the layer-②
  publishers are growing into layer-③ maintenance, directly overlapping the dedicated tool
  (Promptless). The three-layer split is real, but the market is converging: the publisher you pick
  may already do "docs keep pace with changes" in-house.
- **Docs tooling is a correctness check on the API.** Running Docusaurus's `gen-api-docs` surfaced
  a **live, unreported dangling `$ref`** in Open5e's published spec (`SearchResult.oneOf` → a `Race`
  schema removed in a v2 rename). A spec that "works" in a browser can still be invalid to a `$ref`
  resolver. Fix drafted in `open5e-contribution/` (a one-line source change; PR-ready).
- **What a spec can't model well.** Auth/mutation (the read-only Open5e API needed a fabricated
  `POST` variant to exercise it) and streaming surfaces — the boundaries of the OpenAPI model itself.

## The hook

> "I ran one open API through the whole documentation toolchain — three SDK generators, three
> docs-site publishers, and an AI maintenance bot — to see what each layer actually produces. It
> found a bug in the API's own spec, proved the free tools ship the mess the paid ones curate, and
> caught the 'polished' SaaS tool naming things *worse* than the open-source plugin."

---

### Provenance
Full method + per-tool setup: `PLAN.md`. Per-tool next steps: `NEXT_STEPS.md`. Live artifacts:
`openapi-generator/` (Python + TS SDKs), `speakeasy/` (SDK + overlay), `docusaurus/site/`,
`mintlify/`, `gitbook/`. Content derives from the D&D 5e SRD under CC-BY-4.0 (`NOTICE.md`).
