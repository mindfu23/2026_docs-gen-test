// The capture contract. Each tool's tab is driven entirely by one entry here, so filling in
// results after you run a tool = editing data, not writing components.
//
// Static fields (layer/input/output/hosting/tagline) are known now. The result fields
// (liveUrl, screenshot, artifact, setupNotes, findings, status) get filled per tool in Phase 1.

export type Layer = "① Generate client" | "② Publish site" | "③ Maintain";
export type ArtifactKind = "page" | "code" | "diff" | "link";

export interface Tool {
  id: string;
  name: string;
  layer: Layer;
  tagline: string;
  input: string;
  output: string;
  hosting: string;
  /** Live deployed URL — null until run. */
  liveUrl: string | null;
  /** Path under /public to a screenshot — null until captured. */
  screenshot: string | null;
  /** What the tab actually shows for this tool's heterogeneous output. */
  artifact: { kind: ArtifactKind; note: string };
  /** The authoring-operations battery (shared/AUTHORING_OPS.md) — how this tool does it. */
  operations: string;
  /** Setup time + friction, filled after the run. */
  setupNotes: string;
  /** The findings paragraph that also feeds the Summary. */
  findings: string;
  status: "pending" | "done";
}

const pending = (extra: Partial<Tool>): Pick<Tool, "liveUrl" | "screenshot" | "setupNotes" | "findings" | "status"> => ({
  liveUrl: null,
  screenshot: null,
  setupNotes: "",
  findings: "",
  status: "pending",
  ...extra,
});

export const tools: Tool[] = [
  {
    id: "stainless",
    name: "Stainless",
    layer: "① Generate client",
    tagline: "Spec → idiomatic SDK (⚠️ service shut down — Anthropic acquisition).",
    input: "OpenAPI spec",
    output: "Polished SDK (code)",
    hosting: "SaaS (discontinued 2026)",
    artifact: { kind: "code", note: "Documented from public Stainless-generated SDKs (anthropic/openai)." },
    operations: "n/a — hosted generator wound down; documented from public output.",
    ...pending({
      status: "done",
      setupNotes:
        "Not runnable: Anthropic acquired Stainless (~2026-05) and shut the hosted generator. " +
        "Represented from public output; its slot is filled by Speakeasy + OpenAPI Generator.",
      findings:
        "The layer-① quality benchmark (powered OpenAI/Anthropic/Cloudflare SDKs): ergonomic " +
        "client.resource.method(), Literal-typed params, full Args docstrings, typed pagination. " +
        "Now off-market — a fitting footnote for a docs-tooling project.",
    }),
  },
  {
    id: "speakeasy",
    name: "Speakeasy",
    layer: "① Generate client",
    tagline: "Spec → idiomatic SDK + inline docs (commercial; the Stainless successor).",
    input: "OpenAPI spec",
    output: "Polished multi-language SDK (code)",
    hosting: "SaaS + standalone CLI",
    artifact: { kind: "code", note: "Idiomatic SDK — capture a method + docstring; diff vs the OSS SDK." },
    operations: "No page CRUD — OpenAPI-as-source (+ overlays); regenerate.",
    ...pending({
      status: "done",
      setupNotes:
        "speakeasy quickstart → Python SDK from openapi-subset.json (free tier). Registry-push 422 " +
        "(free-tier, non-fatal). Studio flagged 6 spec-quality improvements; auto-fixes land in " +
        "speakeasy-modifications-overlay.yaml — an OVERLAY, so the shared spec is untouched.",
      findings:
        "The commercial tool DIAGNOSES what the OSS generator ships silently. Studio surfaced 6 " +
        "categories (~29 instances): method-name curation (6) — sdk.spells.spells_list() → " +
        "sdk.spells.list() vs OpenAPI Generator's SpellsApi.spells_list(); response.description " +
        "required (12); missing error responses (6); pagination via x-speakeasy-pagination (3); " +
        "retries via x-speakeasy-retries (1); duplicate schemas (1). Headline: same spec, but " +
        "Speakeasy curates ergonomic naming + adds retry/pagination the OSS tool can't — applied " +
        "via overlay without editing the source spec. That IS the curated-vs-verbose thesis, proven.",
    }),
  },
  {
    id: "openapi-generator",
    name: "OpenAPI Generator",
    layer: "① Generate client",
    tagline: "Spec → typed SDK (free, self-hosted, no account).",
    input: "OpenAPI spec",
    output: "Multi-language SDK (code)",
    hosting: "Local CLI (free OSS)",
    artifact: { kind: "code", note: "Real Python package generated; browse openapi-generator/python/open5e/api/spells_api.py." },
    operations: "No page CRUD — config flags + regenerate (local CLI).",
    ...pending({
      status: "done",
      setupNotes:
        "Generated locally with OpenAPI Generator 7.23.0 (Java) from openapi-subset.json → " +
        "openapi-generator/python (148 files). No account, no SaaS.",
      findings:
        "Free/OSS tier: a complete installable package (client + models + per-model docs + tests + " +
        "pyproject), but faithful-and-verbose — every drf-spectacular query param becomes a typed " +
        "kwarg, so spells_list has a ~30-arg signature. API-class-scoped naming (SpellsApi.spells_list) " +
        "is less ergonomic than client.spells.list. Shows exactly what curation buys in the paid tools.",
    }),
  },
  {
    id: "mintlify",
    name: "Mintlify",
    layer: "② Publish site",
    tagline: "Spec + MDX → hosted interactive reference.",
    input: "OpenAPI spec + MDX",
    output: "Hosted reference + guides",
    hosting: "SaaS (self-deploys via GitHub App)",
    artifact: { kind: "link", note: "Externally hosted — link out + screenshot of the Try-It playground." },
    operations: "Full CRUD via MDX files + docs.json nav; web editor with live preview.",
    ...pending({
      status: "done",
      setupNotes:
        "Previewed via `mint dev` on the prepped mintlify/ folder. Near-zero config — docs.json " +
        "wires the Guides + the spec-driven API Reference. Gotchas: mint dev defaults to :3000 " +
        "(collides with Docusaurus — stop one), root needed a `/` → /overview redirect, and the " +
        "hosted dashboard shows Mintlify's starter (deploy = optional, point the GitHub App at the " +
        "mintlify/ subdir). Onboarding nudges toward a separate repo — declined.",
      findings:
        "Polished SaaS dev-docs default; fastest spec→site of the publishers. The 'Try It' playground " +
        "makes LIVE calls (real 200 from api.open5e.com, CORS *), with multi-language samples + ⌘K " +
        "search. Mintlify MDX dialect (<Info>/<Card>) = 2nd of 3 callout flavors. Renders the ~30 " +
        "drf-spectacular filter params as interactive input fields (verbose, uncurated — like " +
        "Docusaurus). Naming quirk: it auto-titled operations 'Get v2spells' from method+path, NOT " +
        "the operationId — so list AND retrieve collide into duplicate 'Get v2spells' labels, where " +
        "Docusaurus's spells_list/spells_retrieve was clearer. The '← Docs Hub' cross-link renders.",
    }),
  },
  {
    id: "gitbook",
    name: "GitBook",
    layer: "② Publish site",
    tagline: "Spec + Markdown (git-sync) → hosted docs/KB.",
    input: "OpenAPI spec + Markdown",
    output: "Hosted docs/KB + API ref",
    hosting: "SaaS (Git Sync)",
    artifact: { kind: "link", note: "Externally hosted — link out + screenshot of WYSIWYG + git-sync." },
    operations: "Full CRUD via WYSIWYG — create, drag-reorder, nest, inline image upload.",
    ...pending({}),
  },
  {
    id: "docusaurus",
    name: "Docusaurus",
    layer: "② Publish site",
    tagline: "MDX + OpenAPI plugin → self-hosted static site (+ RAG chatbot).",
    input: "MDX + spec (plugin)",
    output: "Self-hosted static site you deploy",
    hosting: "Self-host (GitHub → Netlify)",
    artifact: { kind: "page", note: "Native — the one output you host; also hosts the LoRA/RAG chatbot." },
    operations: "Full CRUD file-based — .md in docs/, _category_.json, static/img/, sidebars.js.",
    ...pending({
      status: "done",
      liveUrl: "https://docusaurus-test-docs.netlify.app/",
      setupNotes:
        "Built locally (Docusaurus 3.10.1 + openapi-docs v5). The most wiring of the five: " +
        "Docusaurus 3 needs :::type[Title] bracket admonitions; gen-api-docs must run before start; " +
        "navbar + sidebar must point at the generated apiSidebar; build = `gen-api-docs && build`. " +
        "Also surfaced (and fixed) a dangling $ref in Open5e's published spec.",
      findings:
        "Self-host = most control + zero recurring cost, paid for in setup. Reference renders all 6 " +
        "endpoints with an interactive, live Try-It (CORS *) and multi-language code samples. " +
        "drf-spectacular param noise on full display (~15+ filter params per list endpoint); " +
        "auto-descriptions are rough (combined list/retrieve text; 'subclass_of: Unique key for the Item'). " +
        "i18n en/en-GB works — dev serves one locale, the build serves both with a working dropdown.",
    }),
  },
  {
    id: "promptless",
    name: "Promptless",
    layer: "③ Maintain",
    tagline: "Repo changes → AI-drafted doc-update PRs.",
    input: "Repo changes + existing docs",
    output: "Doc-update PRs",
    hosting: "PR bot (no site)",
    artifact: { kind: "diff", note: "A drafted doc-update PR — screenshot/embed the diff + link." },
    operations: "No manual CRUD — drafts doc-update PRs from a GitHub PR or a Slack @mention; review/iterate via GitHub comments.",
    ...pending({}),
  },
];
