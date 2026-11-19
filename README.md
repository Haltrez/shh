# shh: private crypto casinos

A privacy-first guide to no-KYC and low-KYC crypto casinos. Next.js App Router, static pages, deployed on Vercel.

```bash
npm install
npm run dev                 # http://localhost:3000
SHH_DEMO=1 npm run dev      # adds 3 FICTIONAL casinos to preview the full design
npm run build && npm run check   # post-build SEO/link/content checks
```

## Where things live

| Path | What |
|---|---|
| `data/casinos.ts` | Partner casinos. **All facts start empty.** |
| `data/lists.ts` | `/best/[list]` pages: criteria (filter), copy, FAQ |
| `content/guides-*.ts` | Guides as structured blocks (p, h2, list, steps, table, caveat) |
| `lib/score.ts` | Privacy score weights (keep in sync with `/how-we-rate`) |
| `lib/geo.ts` | Scatter Drop-style `geos` rules (`["!US"]`, `["CA"]`) |
| `app/go/[casino]/route.ts` | Outbound 302, geo check, JSON click log |
| `scripts/check-build.mjs` | Title ≤ 60, description ≤ 155, one H1, canonical, JSON-LD valid, no Review stars, no broken internal links, no banned phrases |

## Publishing a casino (the "no invented facts" rule)

A casino with `lastChecked: null` shows as **Being checked**: no score, no Visit button, review page `noindex`, left out of sitemaps and ItemList schema. Lists only show verified casinos; an empty list is `noindex`.

To publish one, fill in `data/casinos.ts`:

1. Every fact is `{ value, source }`, and `source` is the casino's own T&Cs, FAQ or cashier URL. Leave a field out rather than guess.
2. `payoutMinutes` only from your own timed test withdrawal.
3. `scores` (0–5 each) per `/how-we-rate`; `verdict`, `pros` **and** `cons` are mandatory.
4. `affiliateUrl` and `offer.code` from the existing tracking sheet.
5. Set `lastChecked` to today. Re-check monthly.

`SHH_DEMO=1` is ignored when `VERCEL_ENV=production`.

## Deploy on Vercel

1. vercel.com → **Add New… → Project** → import `haltrez/shh`. Framework is detected as Next.js; keep the default build settings.
2. Production branch: `main` (Project → Settings → Git).
3. Environment variables (Project → Settings → Environment Variables), all optional at first:
   - `NEXT_PUBLIC_SITE_URL`: optional. Vercel builds already use `https://www.shhcasinos.com`; set this only to override it.
   - `NEXT_PUBLIC_CONTACT_EMAIL`: shown on /contact and /privacy.
   - `INDEXNOW_KEY`: any 32+ char hex string; served at `/indexnow.txt`.
4. Domains → add your domain and follow the DNS instructions.
5. After launch: Search Console → submit `/sitemap/pages.xml`, `/sitemap/reviews.xml`, `/sitemap/lists.xml`, `/sitemap/guides.xml`; then `SITE_URL=https://yourdomain INDEXNOW_KEY=… npm run indexnow`.

Preview deployments are automatically `noindex` and disallowed in robots.txt. Click logs from `/go/` appear in Vercel → Logs (search `outbound_click`).

## Weekly articles

Two guides a week, written by a scheduled Claude task. It reads `docs/CONTENT.md` (rules), takes the next topic from `docs/BACKLOG.md`, writes `content/weekly/<slug>.ts`, runs `npm run build && npm run check`, and pushes to `main`. Reorder or add topics in the backlog to steer it.

## Content rules (plan §2)

Don't add VPN-bypass guides, "not on GamStop" pages, "100% anonymous" claims, fake reviews or invented bonus terms. `npm run check` catches the obvious phrases.

## Still to do before launch

- Fact-check and fill all 7 casinos (+ logos in `public/logos/`, light versions, SVG/WebP)
- Real author bio on `/about`; legal review of `/privacy`
- `/guides/best-vpn-for-privacy` (needs verified VPN facts + referral links)
- Search Console verification
