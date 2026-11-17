import type { Casino } from "@/lib/types";

/**
 * FICTIONAL fixtures for local design work only (SHH_DEMO=1 npm run dev).
 * Never loaded in a production build – see lib/data.ts.
 */
const src = "https://example.com/terms";

const demo = (
  slug: string,
  name: string,
  level: "none" | "on-request" | "full",
  scores: NonNullable<Casino["scores"]>,
  coins: NonNullable<Casino["coins"]>["value"],
  payout: number,
  minDep: number,
  freeSpins: boolean,
): Casino => ({
  slug,
  name,
  affiliateUrl: "",
  geos: ["!US"],
  lastChecked: "2026-11-01",
  licence: { value: "Example licence (demo)", source: src },
  kyc: {
    level,
    signup: { value: level === "full" ? "ID before first deposit" : "Email only", source: src },
    withdrawal: { value: level === "none" ? "No ID for normal withdrawals" : "ID may be asked above a threshold", source: src },
    triggers: { value: ["Large or unusual withdrawals", "AML review", "Source-of-funds request"], source: src },
  },
  vpnRule: { value: "Terms forbid using a VPN to access the site from a restricted country.", source: src },
  restrictedCountries: { value: ["US", "GB", "FR", "NL"], source: src },
  coins: { value: coins, source: src },
  minDepositUsd: { value: minDep, source: src },
  withdrawalLimits: { value: "Example: 10,000 USDT per day", source: src },
  payoutMinutes: { value: payout, note: "Demo value" },
  offer: { text: "Example welcome offer", code: "DEMO", freeSpins, source: src },
  games: { summary: "Slots, live dealer, originals.", providers: ["Provider A", "Provider B"] },
  responsibleTools: { value: ["Deposit limits", "Cool-off", "Self-exclusion"], source: src },
  verdict: `${name} is a fictional casino used to preview the design. None of this is real.`,
  kycInPractice: ["Demo paragraph about sign-up.", "Demo paragraph about withdrawal checks."],
  depositsWithdrawals: ["Demo paragraph about networks and minimums."],
  pros: ["Demo pro one", "Demo pro two"],
  cons: ["Demo con one", "Demo con two"],
  faq: [{ q: "Is this real?", a: "No. This is demo data." }],
  scores,
});

export const demoCasinos: Casino[] = [
  demo("demo-alpha", "Demo Alpha", "none", { kycSignup: 5, kycTriggers: 4, payoutSpeed: 5, coinChoice: 4, termsClarity: 4 }, ["BTC", "ETH", "USDT", "SOL", "LTC"], 10, 10, true),
  demo("demo-bravo", "Demo Bravo", "on-request", { kycSignup: 5, kycTriggers: 2, payoutSpeed: 3, coinChoice: 5, termsClarity: 3 }, ["BTC", "ETH", "USDT", "LTC", "DOGE", "XRP"], 45, 20, false),
  demo("demo-charlie", "Demo Charlie", "full", { kycSignup: 1, kycTriggers: 1, payoutSpeed: 4, coinChoice: 2, termsClarity: 5 }, ["BTC", "USDT"], 20, 30, true),
];
