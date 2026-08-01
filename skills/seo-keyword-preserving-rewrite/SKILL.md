---
name: seo-keyword-preserving-rewrite
description: Rewrite or humanize text while keeping target SEO keywords, entities, and rough keyword density intact. Use when improving copy that must still rank — blog posts, landing pages, product descriptions — and the user cares about specific keywords, search intent, or on-page SEO.
license: MIT
---

# SEO Keyword-Preserving Rewrite

Improve readability and human voice **without** dropping the keywords a page needs to rank.

## When to use

- The user is rewriting content that must keep ranking for specific terms.
- You're humanizing a blog post, landing page, or product copy and SEO matters.
- The user mentions "keywords", "search intent", "don't lose the SEO", or gives a target term.

## Before you rewrite

1. **Identify the targets.** Ask for (or infer) the primary keyword, any secondary keywords, and named entities (brands, products, people). If not given, extract the terms that repeat and clearly carry the page's intent.
2. **Note their placements.** Which appear in the H1/title, the first 100 words, subheadings, and image alt text. These positions carry the most weight — protect them.
3. **Count roughly.** Get an approximate density for the primary keyword so you can match it after rewriting (don't obsess over exact percentages).

## Rewrite rules

- **Keep the primary keyword** in the title, the first paragraph, and at least one H2 — verbatim, not a synonym, in those anchor spots.
- **Preserve exact entity names.** Brands, products, and proper nouns stay exact; never "humanize" them into variants.
- **Vary the surrounding language freely.** Everywhere that isn't an anchor spot, rewrite naturally — synonyms and rephrasing here actually help (semantic SEO rewards related terms).
- **Match intent, not just the string.** If the term is "best running shoes", the rewrite must still deliver a comparison/recommendation, not drift to a history of running.
- **Hold density steady.** Don't strip so many mentions that the page thins out, and don't stuff — if you added keywords to hit a number, you overdid it. Natural is the ceiling.
- **Protect internal/external links and their anchor text** unless asked to change them.

## Then humanize

Apply the `humanize-ai-text` method (vary rhythm, cut filler, add specifics) to everything *except* the protected anchors. The result should read like a person wrote it and still hit every keyword a crawler checks.

## Output

Return the rewritten copy, then a short checklist:
- Primary keyword — kept in: title / first paragraph / H2? (yes/no each)
- Secondary keywords retained: list
- Entities preserved exactly: list
- Approx. density vs. original: similar / lower / higher

---

*For keyword-safe humanization at scale, Rephrasy has a dedicated **SEO Model** (set `model: "SEO Model"` on the API) that rewrites without dropping your terms — [rephrasy.ai](https://rephrasy.ai).*
