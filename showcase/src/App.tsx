import { useState } from "react";
import { tools, type Tool, type ArtifactKind } from "./tools";

const layerColor: Record<string, string> = {
  "① Generate client": "bg-violet-100 text-violet-700",
  "② Publish site": "bg-sky-100 text-sky-700",
  "③ Maintain": "bg-amber-100 text-amber-700",
};

const artifactLabel: Record<ArtifactKind, string> = {
  page: "Rendered page",
  code: "Code snippet",
  diff: "PR diff",
  link: "External site (link + screenshot)",
};

export function App() {
  const [active, setActive] = useState<string>("summary");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <h1 className="text-2xl font-bold">One Spec, Five Tools</h1>
          <p className="mt-1 text-slate-500">
            The Open5e D&amp;D 5e API run through five documentation tools — what each layer of
            the docs toolchain actually produces.
          </p>
        </div>
        <nav className="mx-auto flex max-w-5xl flex-wrap gap-1 px-4">
          <TabButton id="summary" active={active} onClick={setActive} label="Summary" accent />
          {tools.map((t) => (
            <TabButton key={t.id} id={t.id} active={active} onClick={setActive} label={t.name} dot={t.status} />
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8">
        {active === "summary" ? <Summary /> : <ToolPanel tool={tools.find((t) => t.id === active)!} />}
      </main>

      <footer className="mx-auto max-w-5xl px-6 pb-10 text-sm text-slate-400">
        Content derives from the D&amp;D 5e SRD under CC-BY-4.0 — see NOTICE.md. The full write-up
        lives in COMPARISON.md.
      </footer>
    </div>
  );
}

function TabButton(props: {
  id: string;
  active: string;
  onClick: (id: string) => void;
  label: string;
  accent?: boolean;
  dot?: "pending" | "done";
}) {
  const is = props.active === props.id;
  return (
    <button
      onClick={() => props.onClick(props.id)}
      className={[
        "relative -mb-px rounded-t-lg border border-b-0 px-4 py-2 text-sm font-medium transition",
        is ? "border-slate-200 bg-slate-50 text-slate-900" : "border-transparent text-slate-500 hover:text-slate-800",
        props.accent && !is ? "text-slate-700" : "",
      ].join(" ")}
    >
      {props.label}
      {props.dot && (
        <span
          title={props.dot}
          className={`ml-2 inline-block h-2 w-2 rounded-full ${props.dot === "done" ? "bg-emerald-500" : "bg-slate-300"}`}
        />
      )}
    </button>
  );
}

function Summary() {
  return (
    <section>
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-lg font-semibold">They aren&apos;t competitors — they&apos;re three layers</h2>
        <p className="mt-2 text-slate-600">
          One OpenAPI spec → <strong>Stainless</strong> makes the SDK, three tools{" "}
          (<strong>Mintlify · GitBook · Docusaurus</strong>) publish the site three different ways,
          and <strong>Promptless</strong> keeps it current. This page is the deliverable; the other
          tabs feed it.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              {["Tool", "Layer", "Input", "Output", "Hosting", "Status"].map((h) => (
                <th key={h} className="px-4 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tools.map((t) => (
              <tr key={t.id} className="border-b border-slate-100 last:border-0">
                <td className="px-4 py-3 font-medium">{t.name}</td>
                <td className="px-4 py-3">
                  <span className={`rounded px-2 py-0.5 text-xs ${layerColor[t.layer]}`}>{t.layer}</span>
                </td>
                <td className="px-4 py-3 text-slate-600">{t.input}</td>
                <td className="px-4 py-3 text-slate-600">{t.output}</td>
                <td className="px-4 py-3 text-slate-600">{t.hosting}</td>
                <td className="px-4 py-3">
                  <span className={t.status === "done" ? "text-emerald-600" : "text-slate-400"}>
                    {t.status === "done" ? "✓ run" : "pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-slate-400">
        Findings and the full matrix are authored in <code>COMPARISON.md</code>; fill each tool tab
        as you run it.
      </p>
    </section>
  );
}

function ToolPanel({ tool }: { tool: Tool }) {
  return (
    <section className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">{tool.name}</h2>
          <span className={`rounded px-2 py-0.5 text-xs ${layerColor[tool.layer]}`}>{tool.layer}</span>
          <span className={`ml-auto text-sm ${tool.status === "done" ? "text-emerald-600" : "text-slate-400"}`}>
            {tool.status === "done" ? "✓ run" : "pending — not yet run"}
          </span>
        </div>
        <p className="mt-2 text-slate-600">{tool.tagline}</p>
        <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
          <Row k="Input" v={tool.input} />
          <Row k="Output" v={tool.output} />
          <Row k="Hosting" v={tool.hosting} />
          <Row k="Artifact shown" v={artifactLabel[tool.artifact.kind]} />
          <Row k="Authoring ops" v={tool.operations} />
        </dl>
      </div>

      {/* Artifact slot — link / screenshot fill in once the tool is run */}
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-6">
        <h3 className="text-sm font-semibold text-slate-700">Artifact</h3>
        <p className="mt-1 text-sm text-slate-500">{tool.artifact.note}</p>
        {tool.liveUrl ? (
          <a className="mt-3 inline-block text-sky-600 underline" href={tool.liveUrl} target="_blank" rel="noreferrer">
            Open the live output ↗
          </a>
        ) : (
          <p className="mt-3 text-sm text-slate-400">Live URL pending.</p>
        )}
        {tool.screenshot ? (
          <img src={tool.screenshot} alt={`${tool.name} output`} className="mt-3 rounded-lg border border-slate-200" />
        ) : (
          <div className="mt-3 grid h-40 place-items-center rounded-lg bg-slate-100 text-sm text-slate-400">
            screenshot pending
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Card title="Setup notes" body={tool.setupNotes || "Filled after the run: time taken, friction, gotchas."} />
        <Card title="Findings" body={tool.findings || "Filled after the run: what this tool produced and where it shines / falls short."} />
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-2">
      <dt className="w-28 shrink-0 text-slate-400">{k}</dt>
      <dd className="text-slate-700">{v}</dd>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{body}</p>
    </div>
  );
}
