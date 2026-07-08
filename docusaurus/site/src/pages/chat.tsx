import Layout from "@theme/Layout";
import RagChat from "@site/src/components/RagChat";

// The RAG-chatbot page at /chat. This is the Docusaurus-only differentiator — a docs site that
// also answers questions, grounded in retrieved Open5e content (base LLM + RAG; LoRA voice later).
export default function ChatPage(): JSX.Element {
  return (
    <Layout title="Ask the Docs" description="RAG chatbot grounded in Open5e content">
      <main className="container margin-vert--lg">
        <h1>Ask the Docs</h1>
        <p>
          A retrieval-augmented chatbot over the Open5e content. Your question is answered by a base
          LLM, grounded in content retrieved live from the Open5e API — so it cites real data instead
          of inventing rules. (Requires <code>netlify dev</code> or a deploy so the{" "}
          <code>/api/chat</code> function runs; configure <code>LLM_BASE_URL</code> per{" "}
          <code>shared/MODEL_LAYER.md</code>.)
        </p>
        <RagChat />
      </main>
    </Layout>
  );
}
