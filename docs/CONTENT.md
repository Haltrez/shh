# Weekly article playbook

Two new guides a week, released Monday and Thursday. Every article follows these rules. The scheduled task reads this file before writing.

## The queue

Articles are written ahead and released automatically:

- Set `publishAt` (and `updated`) to the release date, ISO format. The guide stays hidden (404, not in lists or sitemaps) until that date (UTC); pages refresh hourly, so it appears that day without a deploy.
- Release days are Mondays and Thursdays. Keep **at least 4 scheduled articles** (two weeks) in the queue. To see the queue: `grep -n "publishAt" content/weekly/*.ts`.
- Each scheduled run: if fewer than 4 future-dated articles exist, write enough to get back to 4, dated on the next free Monday/Thursday slots.
- Trends & news pieces with prices or fast-moving facts: schedule them no more than a week ahead.

## Pick the topic

1. Open `docs/BACKLOG.md` and take the **first unchecked** topic.
   Exception: in the **first week of each month**, if no `crypto-news-<month>-<year>` guide exists for the previous month, write that roundup instead.
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

## Trends & news articles

Use `category: "Trends & news"` for market, trend, regulation and monthly news pieces.

- Research with web search **on the day you write**. Every number, date and claim needs a source.
- Add a `sources` array (`{ name, url }`), at least 3 sources, preferring primary or established outlets over affiliate review sites.
- Attribute uncertain figures in the text ("one on-chain tracker reported…", "according to Juniper Research…"). When sources disagree, say so and give the range.
- State the reporting window for prices ("as of 17 November 2026"). Never present a price as current without a date.
- Always end with a "What this means for casino players" section that is practical and responsible.
- Monthly roundup slug format: `crypto-news-<month>-<year>`, e.g. `crypto-news-december-2026`.

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

## Spanish guides (LatAm)

One Spanish guide a week, released on Mondays, for the `/es` section. Same hard rules as above.

- Add an entry to `allGuiasEs` in `content/es/guias.ts` (type `GuiaEs`): `slug` in Spanish kebab-case, `title` ≤ 54, `description` ≤ 155, `updated` and `publishAt` = the release Monday, `category` `"Cripto básico"` or `"Privacidad"`, `related` (2 existing Spanish slugs), optional `en` (slug of the English counterpart, if one exists) and `casino` (a review slug when the article is about one casino).
- Keep **at least 2 scheduled Spanish guides** in the queue (`grep -n "publishAt" content/es/guias.ts`).
- Topics: first unchecked item under "Spanish" in `docs/BACKLOG.md`. Prefer translating and adapting an existing English guide for LatAm readers (USDT, Litecoin, wallets, deposits, withdrawals, privacy). Native, neutral Latin-American Spanish ("tú"); amounts in $ unless the source says €.
- Casino facts only from `data/casinos.ts` / `data/casinos-es.ts`. KoalaBet and MetaWin are the LatAm-wide partners; the others restrict some LatAm countries.
- Caveats start with "Atención: ". VPN rule as in English: privacy yes, never to bypass a country block.

## Check and ship

```bash
SHH_PREVIEW_SCHEDULED=1 npm run build && npm run check   # checks scheduled articles too
npm run build && npm run check                           # the real build
```

Both must pass (0 errors). The check enforces title/description length, one H1, valid schema, no broken internal links and banned phrases. Then:

1. Tick the topic in `docs/BACKLOG.md` with the date: `- [x] slug (2026-11-20)`.
2. Commit: `Add guide: <h1>`.
3. Push to `main`. Vercel deploys it; the guide is added to `/sitemap/guides.xml` automatically.
