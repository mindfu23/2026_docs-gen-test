import { useState } from "react";

// "Ask the Docs" — a RAG chatbot over the Open5e content.
// Posts to /api/chat (the Netlify function), which retrieves grounding from Open5e and asks the
// configured base LLM. Needs `netlify dev` (or a deploy) to serve the function — plain
// `docusaurus start` won't run it. See ../../netlify/functions/chat.ts + ../../shared/MODEL_LAYER.md.

type Msg = { role: "user" | "assistant"; content: string };
type Source = { name: string; type: string; snippet: string; url: string };

export default function RagChat(): JSX.Element {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    const q = input.trim();
    if (!q || loading) return;
    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setInput("");
    setSources([]);
    setError(null);
    setLoading(true);
    try {
      const r = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await r.json();
      if (data.error) setError(data.error);
      setMessages([...next, { role: "assistant", content: data.reply ?? "(no reply)" }]);
      setSources(data.sources ?? []);
    } catch (e) {
      setError("Could not reach /api/chat — is `netlify dev` running (or the site deployed)?");
    } finally {
      setLoading(false);
    }
  }

  const box: React.CSSProperties = {
    border: "1px solid var(--ifm-color-emphasis-300)",
    borderRadius: 8,
    padding: 12,
  };

  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <div style={{ ...box, minHeight: 240, marginBottom: 12 }}>
        {messages.length === 0 && (
          <p style={{ color: "var(--ifm-color-emphasis-600)" }}>
            Ask about a spell, creature, or class — e.g. <em>“What does Fireball do?”</em> Answers are
            grounded in retrieved Open5e content.
          </p>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ margin: "10px 0" }}>
            <strong>{m.role === "user" ? "You" : "Docs"}:</strong>{" "}
            <span style={{ whiteSpace: "pre-wrap" }}>{m.content}</span>
          </div>
        ))}
        {loading && <p style={{ color: "var(--ifm-color-emphasis-600)" }}>Retrieving + answering…</p>}
        {error && <p style={{ color: "var(--ifm-color-danger)" }}>{error}</p>}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          style={{ flex: 1, padding: "8px 10px", borderRadius: 8, border: "1px solid var(--ifm-color-emphasis-300)" }}
          value={input}
          placeholder="Ask the Open5e docs…"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button className="button button--primary" onClick={send} disabled={loading}>
          Send
        </button>
      </div>

      {sources.length > 0 && (
        <div style={{ ...box, marginTop: 12 }}>
          <strong>Sources (retrieved from Open5e):</strong>
          <ol>
            {sources.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.name}</a> <em>({s.type})</em>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
