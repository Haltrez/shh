/**
 * Dated changes to casinos' KYC rules (or to what we know about them).
 * Newest first. The monthly fact check appends here.
 */
export type KycLogEntry = { date: string; casino: string; change: string; source?: string };

export const kycLog: KycLogEntry[] = [
  {
    date: "2026-11-25",
    casino: "Duel",
    change: "Added. No ID or email to sign up; terms reserve the right to request KYC before processing a withdrawal, with no threshold stated.",
    source: "https://duel.com/policies/tos",
  },
  {
    date: "2026-11-20",
    casino: "MetaWin",
    change: "Our test withdrawal arrived in about 10 seconds.",
  },
  {
    date: "2026-11-20",
    casino: "Stake, BC.Game, Roobet",
    change: "Added to the tracker from their own terms, KYC policies and help centres.",
  },
  {
    date: "2026-11-19",
    casino: "MetaWin",
    change: "Added. No sign-up form (wallet connect); terms allow ID checks at MetaWin's sole discretion (§10.0.4).",
    source: "https://metawin.com/terms-and-conditions",
  },
  {
    date: "2026-11-17",
    casino: "7Bit Casino",
    change: "Terms checked: KYC mandatory once cumulative payments reach 30 mBTC (0.03 BTC) (§9.2). Resolves earlier conflicting reports.",
    source: "https://7bitcasino.com/terms-and-conditions",
  },
  {
    date: "2026-11-17",
    casino: "Cashy",
    change: "Changed from No KYC (reported) to KYC on request: terms block payouts without KYC documents if requested (§7.4).",
    source: "https://cashy.com/terms-and-conditions",
  },
  {
    date: "2026-11-17",
    casino: "BitStarz",
    change: "Terms checked: same operator and KYC wording as Cashy; rated KYC on request.",
    source: "https://www.bitstarz.com/terms",
  },
  {
    date: "2026-11-17",
    casino: "Mirax Casino",
    change: "Terms checked: may verify identity before any withdrawal, including video calls (§11.2, §9.4).",
    source: "https://www.miraxcasino.com/terms-and-conditions",
  },
  {
    date: "2026-11-17",
    casino: "KoalaBet",
    change: "Confirmed directly by KoalaBet: no KYC until $5,000 in deposits or withdrawals, then basic information.",
  },
];
