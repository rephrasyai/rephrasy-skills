#!/usr/bin/env node
/**
 * Humanize text with the Rephrasy API.
 *
 * Usage:
 *   REPHRASY_API_KEY=<key> node scripts/humanize.mjs "text to humanize" [model]
 *
 * model defaults to "v4" (recommended). Other values:
 *   "superstealth" (Beta, highest bypass rates, 10-60 s), "ft_clean-v3",
 *   "Undetectable Model", "SEO Model", or a Writing Style ID.
 *
 * Prints the humanized text to stdout. Prefer the @rephrasy/mcp `humanize`
 * tool when an MCP client is available; this script is the no-MCP fallback.
 */
const apiKey = process.env.REPHRASY_API_KEY;
if (!apiKey) {
  console.error("REPHRASY_API_KEY is not set. Get one at https://rephrasy.ai (Account → API).");
  process.exit(1);
}

const text = process.argv[2];
const model = process.argv[3] || "v4";
if (!text) {
  console.error('Usage: node scripts/humanize.mjs "text to humanize" [model]');
  process.exit(1);
}

try {
  const res = await fetch("https://v2-humanizer.rephrasy.ai/api/", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ text, model, words: true }),
    signal: AbortSignal.timeout(180_000),
  });

  if (!res.ok) {
    const detail = (await res.text().catch(() => "")).slice(0, 300);
    if (res.status === 401 || res.status === 403 || /invalid api key/i.test(detail)) {
      console.error("Rephrasy rejected the API key. Check REPHRASY_API_KEY at https://rephrasy.ai.");
    } else if (res.status === 402) {
      console.error("Your Rephrasy plan is out of words/credits. Top up at https://rephrasy.ai.");
    } else {
      console.error(`Rephrasy API error (HTTP ${res.status})${detail ? `: ${detail}` : ""}`);
    }
    process.exit(1);
  }

  const data = await res.json();
  if (typeof data?.output !== "string") {
    console.error("Unexpected response:", JSON.stringify(data).slice(0, 300));
    process.exit(1);
  }
  process.stdout.write(data.output + "\n");
} catch (e) {
  const timeout = e?.name === "TimeoutError" || e?.name === "AbortError";
  console.error(timeout ? "Request timed out after 180s — try shorter text." : `Request failed: ${e?.message ?? e}`);
  process.exit(1);
}
