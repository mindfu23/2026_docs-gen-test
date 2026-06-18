# Concepts

> Synthesized from the spec's schemas into prose. More interpretive than
> [Endpoints](./endpoints.md), but every term below is anchored to a parameter or schema
> in `shared/openapi.json`. Because the API is OpenAI-compatible, the semantics are
> well-known conventions, so this layer is easy to keep accurate.

## Chat vs. completion vs. embeddings

- **Chat** (`/v1/chat/completions`) takes a structured `messages` array of
  `{role, content}` turns (`system`, `user`, `assistant`) and returns the next assistant
  message. This is the modern default and what instruction-tuned models expect.
- **Completion** (`/v1/completions`) takes a single raw `prompt` string and continues it.
  Lower-level; useful for base models or templating you control yourself.
- **Embeddings** (`/v1/embeddings`) returns a numeric vector representing the input text,
  for search/similarity/clustering — not generation. Requires an embedding model.

## Sampling parameters

These control *how* tokens are chosen and apply to both chat and completion requests:

- **`temperature`** — randomness. `0` is greedy/deterministic; higher (e.g. `0.7–1.0`)
  is more varied.
- **`top_p`** — nucleus sampling. Restrict choices to the smallest set of tokens whose
  cumulative probability reaches `p`. Usually tune `temperature` *or* `top_p`, not both.
- **`max_tokens`** — upper bound on tokens generated in the response.
- **`stop`** — string(s) that halt generation when produced.
- **`n`** — number of independent completions to return.
- **`stream`** — see below.

## Streaming

With `stream: true`, the server returns **Server-Sent Events (SSE)** — incremental
`data:` chunks each carrying a token delta — instead of one buffered JSON response,
terminated by `data: [DONE]`. This lets a UI render text as it is produced.

> **Demo relevance:** SSE streaming is exactly the kind of surface that spec-driven tools
> handle unevenly. An OpenAPI spec describes the request and the non-streaming response
> well, but the streaming event shape is harder to model — worth noting when you compare
> how Stainless (SDK), Mintlify/GitBook ("Try It" consoles), and Docusaurus render it.

## Tokenization

Models operate on **tokens**, not characters. `max_tokens`, context limits, and billing
(on commercial APIs) are all counted in tokens. vLLM exposes `/tokenize` and `/detokenize`
as extensions so you can inspect this mapping directly — handy when explaining why a prompt
"costs" more than its character count suggests.

## Request/response model (async on real vLLM, sync here)

For this demo the chat/completion calls are **synchronous request/response**: you POST and
block for the result (or stream it). This contrasts with batch/async-generation APIs (e.g.
Luma's video API, where you POST to create a job, get a `state`, then poll or receive a
webhook). Calling out that contrast — synchronous token streaming vs. async job polling —
is a strong analytical point for the write-up.
