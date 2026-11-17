# Weekly article playbook

Two new guides a week. Every article follows these rules. The scheduled task reads this file before writing.

## Pick the topic

1. Open `docs/BACKLOG.md` and take the **first unchecked** topic.
2. Check `content/` for an existing guide with the same slug or intent (`grep -rn "slug:" content/`). If one exists, skip that topic, tick it with a note, and take the next.
3. If the backlog is empty, pick a long-tail question a crypto-casino reader would search, in one of the four categories, that no existing guide answers. Add it to the backlog first.

## Write it

Create `content/weekly/<slug>.ts` exporting one `Guide` (see `content/types.ts`), then import it in `content/weekly/index.ts` and append it to `weeklyGuides`.

```ts
import type { Guide } from "../types";

export const guide: Guide = {
  slug: "kebab-case-search-phrase",
  title: "≤ 54 chars (\" | shh\" is added, total ≤ 60)",
  h1: "The search phrase in natural wording",
  description: "≤ 155 chars. Lead with the answer and one concrete detail.",
  updated: "YYYY-MM-DD",          // today
  category: "Crypto basics" | "Privacy" | "Casino know-how" | "Money",
  howTo: true,                    // only if the body has a steps block
  relatedGuides: ["3 existing guide slugs"],
  relatedReviews: [],
  body: [ /* blocks */ ],
  faq: [ /* 4–6 real questions */ ],
};
```

Body blocks: `p`, `h2`, `list` (optionally `ordered`), `steps` (`name`, `need`, `text`), `table` (`head`, `rows`, optional `note`), `caveat` (start with `"Heads-up: "`).

**Shape:** first paragraph answers the question in 1–3 sentences. Then 3–6 `h2` sections. Aim for 900–1,500 words. Use a `steps` block for any how-to, a `table` for comparisons, and at least one `caveat` with an honest warning.

**Voice:** calm, technical, direct. Short sentences. "You", not "players". No hype, no emoji, no "🔥", no countdowns, no exclamation marks.

## Hard rules

Never publish:
- How to use a VPN to get around a casino's or country's restrictions, or "casinos that work with VPN".
- Anything aimed at people who self-excluded ("not on GamStop", etc.).
- "100% anonymous", "untraceable", or any claim that crypto gambling hides you from the law.
- Invented facts about a specific casino. Casino facts come only from `data/casinos.ts`. Don't name a casino's KYC rules, limits or bonuses unless they're in that file.
- Specific numbers you can't stand behind (exact network fees, tax rates for a country, prices). Use ranges or "check before you send" wording.
- Content aimed at under-18s.

Always:
- Tax and legal topics: say it's general information and to check local rules.
- Mention responsible gambling where money or bonuses come up.
- A VPN may be recommended for general privacy (ISP, public Wi-Fi, trackers). No VPN referral links.

## Check and ship

```bash
npm run build && npm run check
```

Both must pass (0 errors). The check enforces title/description length, one H1, valid schema, no broken internal links and banned phrases. Then:

1. Tick the topic in `docs/BACKLOG.md` with the date: `- [x] slug (2026-11-20)`.
2. Commit: `Add guide: <h1>`.
3. Push to `main`. Vercel deploys it; the guide is added to `/sitemap/guides.xml` automatically.
