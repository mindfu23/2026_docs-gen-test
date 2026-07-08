// Netlify Function: RAG chatbot for the Docusaurus site ("Ask the Docs").
//
// Architecture (see ../../shared/MODEL_LAYER.md):
//   base LLM  — answers, via an OpenAI-compatible endpoint (LLM_BASE_URL)
//   RAG       — grounds the answer in real Open5e content, retrieved here at request time
//   LoRA      — house voice, OPTIONAL (LLM_LORA); base-only until the adapter clears safety
//
// The browser never holds the endpoint/token — this server-side function does. Swapping
// vLLM <-> Hugging Face <-> Cloudflare, or Mistral <-> Qwen, is env-only.
//
// Env (set in the Netlify dashboard, NOT VITE_-prefixed):
//   LLM_BASE_URL   e.g. http://localhost:8000/v1  |  https://router.huggingface.co/v1
//   LLM_API_KEY    provider token ("not-needed" for a local vLLM)
//   LLM_MODEL      e.g. mistralai/Mistral-7B-Instruct-v0.2
//   LLM_LORA       (optional) adapter ref — empty = base-only (default)

import type { Config, Context } from "@netlify/functions";

const OPEN5E = "https://api.open5e.com";

type Msg = { role: "system" | "user" | "assistant"; content: string };
type Source = { name: string; type: string; snippet: string; url: string };

// --- RAG: retrieve grounding context from Open5e for the user's question ---
async function retrieve(query: string): Promise<Source[]> {
  // Open5e ships its own semantic search — we lean on it as the retriever (vector=true).
  const url = `${OPEN5E}/v2/search/?query=${encodeURIComponent(query)}&vector=true&limit=5`;
  try {
    const r = await fetch(url);
    if (!r.ok) return [];
    const data: any = await r.json();
    return (data.results ?? []).slice(0, 5).map((it: any): Source => ({
      name: it.name ?? it.object_name ?? "(unnamed)",
      type: it.object_model ?? it.type ?? "content",
      snippet: (it.text ?? it.desc ?? "").toString().slice(0, 400),
      url: it.route ? `${OPEN5E}${it.route}` : OPEN5E,
    }));
  } catch {
    return [];
  }
}

function buildSystemPrompt(sources: Source[]): string {
  const context = sources.length
    ? sources.map((s, i) => `[${i + 1}] ${s.name} (${s.type}): ${s.snippet}`).join("\n\n")
    : "(no relevant Open5e content found)";
  return [
    "You are a helpful assistant for the Open5e D&D 5e API documentation.",
    "Answer ONLY from the retrieved context below. If the context doesn't contain the answer,",
    "say you don't have that information — do not invent rules or numbers. Cite sources as [n].",
    "",
    "Retrieved context:",
    context,
  ].join("\n");
}

export default async (req: Request, _ctx: Context): Promise<Response> => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const baseUrl = process.env.LLM_BASE_URL;
  const apiKey = process.env.LLM_API_KEY ?? "not-needed";
  const model = process.env.LLM_MODEL ?? "mistralai/Mistral-7B-Instruct-v0.2";
  const lora = process.env.LLM_LORA?.trim() || undefined;

  const { messages = [] } = (await req.json().catch(() => ({}))) as { messages?: Msg[] };
  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  // 1) Retrieve (works even before a model is wired — useful for testing the RAG half).
  const sources = await retrieve(lastUser);

  // 2) If no model endpoint is configured, return the retrieval so the UI still works.
  if (!baseUrl) {
    return Response.json({
      reply:
        "⚠️ No model endpoint configured (set LLM_BASE_URL). Retrieval works — here's what I found:\n\n" +
        sources.map((s, i) => `[${i + 1}] ${s.name} — ${s.snippet.slice(0, 120)}…`).join("\n"),
      sources,
    });
  }

  // 3) Generate a grounded answer (base + RAG; LoRA optional via `model`).
  const grounded: Msg[] = [{ role: "system", content: buildSystemPrompt(sources) }, ...messages];
  const upstream = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model: lora ?? model, messages: grounded, temperature: 0.3 }),
  });

  if (!upstream.ok) {
    return Response.json({ error: `Model error ${upstream.status}`, sources }, { status: 502 });
  }
  const out: any = await upstream.json();
  const reply = out.choices?.[0]?.message?.content ?? "(no response)";
  return Response.json({ reply, sources });
};

export const config: Config = { path: "/api/chat" };
