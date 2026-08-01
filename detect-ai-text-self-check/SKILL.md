---
name: detect-ai-text-self-check
description: Audit a draft for the tells that make AI detectors and human readers flag it as machine-written, and report what to fix — before publishing or submitting. Use when the user asks "does this sound AI", "will this get flagged", or wants to check a draft before it goes out.
license: MIT
---

# Detect AI Text — Self-Check

A pre-flight audit that scores a draft for AI tells and tells the user exactly what to fix. No external tool required — this is a structured read, not a detector.

## When to use

- The user asks whether a draft "sounds like AI" or "will get flagged".
- Before submitting or publishing anything that was drafted with AI help.
- As the final gate after the `humanize-ai-text` skill, to confirm the fixes landed.

## What real detectors key on

AI detectors (GPTZero, Turnitin, Pangram, Originality.ai, and others) mostly react to two statistical properties plus learned patterns:

- **Low perplexity** — the text is *too predictable*; every next word is the obvious one.
- **Low burstiness** — sentence length and complexity barely vary; humans spike and dip.
- **Learned fingerprints** — modern detectors (e.g. Pangram) are neural nets trained on millions of AI documents, so they also catch structural habits, not just statistics.

You can't compute perplexity by hand, but the *symptoms* are readable.

## The checklist

Score each 0–2 (0 = clean, 2 = strong tell):

1. **Sentence-length variance** — do lengths vary, or march in even lines? (even = tell)
2. **Filler openers** — "In today's…", "It's important to note", "When it comes to". (present = tell)
3. **Triads & lists of three** — overused parallel structures. (frequent = tell)
4. **Empty transitions** — "Moreover / Furthermore / Additionally / In conclusion". (frequent = tell)
5. **Abstraction density** — claims with no concrete number, name, or example. (high = tell)
6. **Vocabulary flags** — "delve, leverage, utilize, tapestry, myriad, realm, testament". (present = tell)
7. **Paragraph symmetry** — every paragraph the same length/shape. (uniform = tell)
8. **Over-explanation** — restating the premise before making the point. (present = tell)

## Report format

Return:
- **Risk read:** Low / Medium / High (sum the scores: 0–4 low, 5–9 medium, 10+ high).
- **Top 3 tells**, each with a quoted example line from the draft.
- **Concrete fixes** for each — the specific edit, not just "make it more human".
- Offer to apply them via the `humanize-ai-text` skill.

## Honest limits

- This is a heuristic read, not a detector score. A clean self-check reduces risk; it can't guarantee any specific tool passes.
- Detectors are known to produce **false positives**, especially on non-native English and terse technical writing — a "High" read doesn't prove AI wrote it, only that it *reads* that way.
- Very short text (< ~100 words) is unreliable for both detectors and this check.

---

*Want an actual detector score? Rephrasy's AI detector returns an overall and per-sentence score — [rephrasy.ai](https://rephrasy.ai), or via the [`@rephrasy/mcp`](https://www.npmjs.com/package/@rephrasy/mcp) `detect` tool.*
