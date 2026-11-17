# shh: notes for Claude

Privacy-first guide to no-KYC crypto casinos. Next.js App Router, static pages, deployed on Vercel from `main`.

- Casino facts live only in `data/casinos.ts`. Never invent KYC rules, limits, payout times or bonuses.
- Guides are structured TS in `content/`. New weekly articles go in `content/weekly/` — follow `docs/CONTENT.md` exactly; topics come from `docs/BACKLOG.md`.
- Before every push: `npm run build && npm run check` must pass with 0 errors.
- Content rules (no VPN-bypass, no self-exclusion targeting, no "100% anonymous") are in `docs/CONTENT.md` and enforced partly by `scripts/check-build.mjs`.
- Commit messages end with the attribution lines your session instructions give you.
