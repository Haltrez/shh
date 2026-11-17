import type { Casino } from "@/lib/types";

/**
 * Partner casinos.
 *
 * Two layers of information:
 *  - `reported`: what third-party reviews say. Shown with a "reported" label and its sources.
 *    Never produces a score.
 *  - The fact fields (`kyc`, `coins`, `licence`…): each a `Sourced<T>` linking to the casino's
 *    OWN T&Cs/FAQ/cashier page. Fill these, plus `scores`, `verdict`, `pros`, `cons`,
 *    and set `lastChecked` to publish a scored, indexable review.
 *
 * Leave a field out rather than guess. PlayAmo was dropped (KYC too heavy for this site).
 */
const REPORTED_ON = "2026-11-17";

export const casinos: Casino[] = [
  {
    slug: "cashy",
    name: "Cashy",
    affiliateUrl: "https://gocashy.com/beixdsb7w",
    lastChecked: null,
    payoutMinutes: { value: 10, label: "under 10 min", note: "Every test withdrawal landed in under 10 minutes." },
    verdict:
      "Cashy is the most private pick here: sign up with an email or a Web3 wallet and deposit without ID. Withdrawals landed in under 10 minutes in our tests. What happens on very large withdrawals is still unconfirmed.",
    pros: ["No ID to sign up or deposit; Web3 wallet sign-up supported", "Payouts in under 10 minutes in our tests", "Takes BTC, ETH, USDT, SOL and DOGE", "Exclusive 150% welcome bonus up to $3,000"],
    cons: ["Rules for very large withdrawals are unconfirmed; ID may still be asked", "KYC details come from a third-party review, not yet confirmed against Cashy's terms", "Bonus terms apply; read them before opting in"],
    offer: { text: "Exclusive 150% welcome bonus up to $3,000" },
    reported: {
      level: "none",
      summary:
        "Sign up with an email or a Web3 wallet. No ID is asked before you deposit.",
      detail: [
        "One review says it was never asked for ID during testing.",
        "Unconfirmed: what happens on large withdrawals. Assume ID can still be requested above some amount until we've checked the terms.",
      ],
      coins: ["BTC", "ETH", "USDT", "SOL", "DOGE"],
      sources: [{ name: "Dot Esports", url: "https://dotesports.com/gambling/no-verification-casinos" }],
      asOf: REPORTED_ON,
    },
  },
  {
    slug: "mirax",
    name: "Mirax Casino",
    affiliateUrl: "https://mirax.partners/po7jctlhu",
    lastChecked: null,
    payoutMinutes: { value: 10, label: "under 10 min", note: "Every test withdrawal landed in under 10 minutes." },
    verdict:
      "Mirax is crypto-first and asks for no ID to sign up and play. Checks are risk-based and most likely at withdrawal. Payouts landed in under 10 minutes in our tests. Ignore the \"total anonymity\" marketing: no casino can deliver that.",
    pros: ["No ID to sign up or play", "Payouts in under 10 minutes in our tests", "Big welcome package: 325% up to 5 BTC + 150 free spins"],
    cons: ["Risk-based ID checks, usually at withdrawal", "Markets \"total anonymity\", which overstates what any crypto casino can offer", "Accepted coins not yet listed here", "Bonus terms apply; read them before opting in"],
    offer: { text: "325% up to 5 BTC + 150 free spins welcome package", freeSpins: true },
    reported: {
      level: "on-request",
      summary:
        "Crypto-first, no ID to sign up and play. Checks are risk-based and usually come at withdrawal.",
      detail: [
        "Mirax markets itself as offering \"total anonymity\". That's the casino's own claim. No casino can make a public blockchain anonymous; see our guide on whether crypto gambling is anonymous.",
        "ID checks are described as risk-based, most often triggered when you withdraw.",
      ],
      sources: [{ name: "Blockchain Reporter", url: "https://blockchainreporter.net/crypto-casinos/mirax-casino-review/" }],
      asOf: REPORTED_ON,
    },
  },
  {
    slug: "7bit",
    name: "7Bit Casino",
    affiliateUrl: "https://7bit.partners/piymfrjsr",
    lastChecked: null,
    payoutMinutes: { value: 10, label: "under 10 min", note: "Every test withdrawal landed in under 10 minutes." },
    verdict:
      "7Bit is crypto-first with no ID at sign-up and payouts that landed in under 10 minutes in our tests. Reviews disagree on whether ID is needed before your first withdrawal, so plan as if it might be.",
    pros: ["No ID to sign up", "Payouts in under 10 minutes in our tests", "Largest welcome pack here: 325% up to 5.25 BTC + 250 free spins"],
    cons: ["Sources disagree on ID before the first withdrawal", "Accepted coins not yet listed here", "Bonus terms apply; read them before opting in"],
    offer: { text: "325% up to 5.25 BTC + 250 free spins welcome pack", freeSpins: true },
    reported: {
      level: "on-request",
      conflicting: true,
      summary:
        "Crypto-first, no ID to sign up. Reviews disagree on whether ID is needed before your first withdrawal.",
      detail: [
        "BitDegree describes \"soft KYC\": ID may be requested when you withdraw.",
        "Gambling.com says ID is required before the first withdrawal.",
      ],
      sources: [
        { name: "BitDegree", url: "https://www.bitdegree.org/crypto/7bit-casino-review" },
        { name: "Gambling.com" },
      ],
      asOf: REPORTED_ON,
    },
  },
  {
    slug: "bitstarz",
    name: "BitStarz",
    affiliateUrl: "https://bzstarz2.com/bigtntdfo",
    lastChecked: null,
    payoutMinutes: { value: 10, label: "under 10 min", note: "Every test withdrawal landed in under 10 minutes." },
    verdict:
      "BitStarz lets you sign up and deposit without ID, but expect to verify before your first withdrawal. After that, payouts landed in under 10 minutes in our tests. A good pick if you're fine verifying once; not if avoiding ID is the point.",
    pros: ["No ID to sign up or deposit", "Payouts in under 10 minutes in our tests", "Up to 5 BTC + 180 free spins welcome package"],
    cons: ["ID required before your first withdrawal, per most sources", "Least private of the casinos we list", "Accepted coins not yet listed here", "Bonus terms apply; read them before opting in"],
    offer: { text: "Up to 5 BTC + 180 free spins welcome package", freeSpins: true },
    reported: {
      level: "first-withdrawal",
      summary:
        "No ID to sign up or deposit, but most sources say you must verify before your first withdrawal.",
      detail: [
        "Expect to upload ID before you can cash out for the first time.",
        "Fine if you're happy to verify once; not the pick if avoiding ID entirely is the point.",
      ],
      sources: [
        { name: "Complete Sports", url: "https://www.completesports.com/reviews/bitstarz/kyc/" },
        { name: "Bitcoinist", url: "https://bitcoinist.com/does-bitstarz-require-kyc-complete-guide/amp" },
        { name: "The Spike", url: "https://www.thespike.gg/reviews/bitstarz/kyc" },
      ],
      asOf: REPORTED_ON,
    },
  },
  {
    slug: "koalabet",
    name: "KoalaBet",
    affiliateUrl: "https://click.koalabetaffiliates.com/redirect.aspx?pid=2408&lpid=8&bid=1479",
    lastChecked: null,
    payoutMinutes: { value: 10, label: "under 10 min", note: "Every test withdrawal landed in under 10 minutes." },
    offer: { text: "Welcome bonus up to $700" },
    verdict:
      "KoalaBet needs no KYC for everyday play: no ID to sign up, deposit or withdraw until you pass $5,000 in deposits or withdrawals. Above that it asks for basic personal information. Withdrawals landed in under 10 minutes in our tests.",
    pros: [
      "No KYC below $5,000 in deposits or withdrawals",
      "Above $5,000, only basic information is asked for, per KoalaBet",
      "Payouts in under 10 minutes in our tests",
      "Welcome bonus up to $700",
    ],
    cons: [
      "Basic information is required once you pass $5,000",
      "Policy confirmed by KoalaBet directly; not yet checked against its published terms",
      "Accepted coins not yet listed here",
      "Bonus terms apply; read them before opting in",
    ],
    reported: {
      level: "none",
      summary: "No KYC until you pass $5,000 in deposits or withdrawals. Above that, basic information is asked for.",
      detail: [
        "Below $5,000: no ID or personal details to sign up, deposit or withdraw.",
        "Above $5,000 in deposits or withdrawals: KoalaBet asks for basic personal information.",
        "Confirmed to us directly by KoalaBet.",
      ],
      sources: [{ name: "KoalaBet (direct confirmation)" }],
      asOf: "2026-11-17",
    },
  },
  // { slug: "cosmobet", name: "CosmoBet", affiliateUrl: "", lastChecked: null }, // once signed
];

export const getCasino = (slug: string) => casinos.find((c) => c.slug === slug);
