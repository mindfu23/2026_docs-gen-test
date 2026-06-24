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
    tagline: "Spec → typed SDKs with inline docstrings.",
    input: "OpenAPI spec",
    output: "Python / TypeScript SDK (code)",
    hosting: "CI tool (no site)",
    artifact: { kind: "code", note: "A generated method showing typed params + an Args docstring." },
    operations: "No page CRUD — configure SDK (package, languages, method naming) + regenerate.",
    ...pending({}),
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
    ...pending({}),
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
