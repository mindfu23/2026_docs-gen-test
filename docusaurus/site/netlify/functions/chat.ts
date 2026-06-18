// Pre-staged Netlify Function: RAG-chatbot LLM proxy for the Docusaurus site.
//
// Why this exists: the Docusaurus site is static, so the browser must NOT hold the model
// endpoint or token. The client POSTs here; this function injects the server-side config and
// forwards to whichever OpenAI-compatible provider is configured. Swapping vLLM <-> Hugging
// Face <-> Cloudflare, or Mistral <-> Qwen, is then env-only — see ../../shared/MODEL_LAYER.md.
//
// Set these in the Netlify dashboard (NOT VITE_-prefixed — they stay server-side):
//   LLM_BASE_URL   e.g. http://localhost:8000/v1  |  https://router.huggingface.co/v1
//   LLM_API_KEY    provider token ("not-needed" for local vLLM)
//   LLM_MODEL      e.g. mistralai/Mistral-7B-Instruct-v0.2
//   LLM_LORA       (optional) adapter ref — leave empty for base-only (default until LoRA is safe)
//
// RAG note: do retrieval BEFORE calling the model — fetch grounding context (Open5e content
// or its /v2/search/?vector=true endpoint), then pass it in `messages` as system/context.
// This stub does the proxy half; wire retrieval where marked.

import type { Config, Context } from "@netlify/functions";

export default async (req: Request, _ctx: Context): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const baseUrl = process.env.LLM_BASE_URL;
  const apiKey = process.env.LLM_API_KEY ?? "not-needed";
  const model = process.env.LLM_MODEL ?? "mistralai/Mistral-7B-Instruct-v0.2";
  const lora = process.env.LLM_LORA?.trim() || undefined;

  if (!baseUrl) {
    return Response.json({ error: "LLM_BASE_URL not configured" }, { status: 500 });
  }

  const { messages } = await req.json().catch(() => ({ messages: [] }));

  // TODO(RAG): retrieve grounding context here (Open5e /v2/search/?vector=true or a local
  // index) and prepend it as a system message before forwarding.

  const upstream = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      // For vLLM, the served LoRA is selected by passing its adapter name as `model`.
      model: lora ?? model,
      messages,
      temperature: 0.4,
    }),
  });

  // Pass the provider response straight through (stream-friendly upgrade later).
  return new Response(upstream.body, {
    status: upstream.status,
    headers: { "Content-Type": "application/json" },
  });
};

export const config: Config = {
  path: "/api/chat",
};
