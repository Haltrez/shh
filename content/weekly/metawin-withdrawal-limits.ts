import type { Guide } from "../types";

export const guide: Guide = {
  slug: "metawin-withdrawal-limits",
  title: "MetaWin Withdrawal Limits, Fees and Times",
  h1: "MetaWin withdrawal limits, fees and times",
  description:
    "MetaWin allows $10,000 net per 24 hours at the entry tier, more at higher tiers. The $2.50 fee, the 1x deposit rule, win caps and payout times.",
  updated: "2026-11-20",
  category: "Casino know-how",
  casino: "metawin",
  relatedGuides: ["metawin-kyc", "is-metawin-legit", "how-to-withdraw-crypto"],
  relatedReviews: ["metawin"],
  body: [
    {
      type: "p",
      text: "MetaWin caps withdrawals at $10,000 net every 24 hours at the entry level, rising with its MetaMax loyalty tiers. Withdrawals are approved instantly in normal cases and, per MetaWin, can take up to 24 hours. Every withdrawal costs a $2.50 fee, and deposits must be wagered once before you can withdraw them.",
    },
    { type: "h2", text: "Daily withdrawal limits by tier" },
    {
      type: "table",
      head: ["MetaMax tier", "Net withdrawal per 24h (general)", "Web3 wallet"],
      rows: [
        ["Unranked", "$10,000", "$10,000"],
        ["Bronze", "$50,000", "$25,000"],
        ["Silver", "$75,000", "$50,000"],
        ["Gold", "$100,000", "$100,000"],
        ["Platinum", "$125,000", "$125,000"],
        ["Red Room", "$200,000", "$500,000"],
      ],
      note: "MetaWin's FAQ lists both tables and they differ for some tiers. Check the limit shown in your cashier before a large withdrawal.",
    },
    {
      type: "p",
      text: "\"Net\" means your deposits in the last 24 hours are added on top. MetaWin's example: deposit $2,000 at Gold tier and your limit for the next 24 hours is $102,000.",
    },
    { type: "h2", text: "Fees" },
    {
      type: "list",
      items: [
        "A $2.50 fee applies to every withdrawal, per MetaWin's FAQ.",
        "Deposits pay the normal network gas fee.",
        "MetaWin's terms also mention a 0.005 ETH fee for gas on swaps out of the Web3 wallet, and a 5 ETH per 24 hours limit on swaps out (§8.5–8.6).",
      ],
    },
    { type: "h2", text: "Rules that can hold a withdrawal" },
    {
      type: "list",
      items: [
        "1x turnover: every deposit must be wagered once before you can withdraw it (§5.4).",
        "Checks: MetaWin can hold withdrawals during identity, source-of-funds or anti-fraud checks (§5.3).",
        "Win caps: the maximum win from one casino wager is $1,500,000; in-house Originals cap at $500,000 per round and zero-house-edge Originals at $25,000 (§10.3).",
        "Sportsbook: net sportsbook winnings are capped at $100,000 per customer per day (§10.3.2).",
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: a withdrawal cap is also a useful brake. If you hit a big win, withdraw in steps to your own wallet rather than leaving it on the site.",
    },
    { type: "h2", text: "How to withdraw" },
    {
      type: "list",
      ordered: true,
      items: [
        "Make sure your deposits have been wagered at least once.",
        "Choose the coin and network your wallet supports.",
        "Paste your own wallet address, check the first and last characters, and confirm.",
        "Expect it in minutes in normal cases; allow up to 24 hours.",
      ],
    },
  ],
  faq: [
    { q: "What is MetaWin's withdrawal limit?", a: "From $10,000 net per 24 hours at the entry tier, rising with MetaMax loyalty tiers. Check your cashier for your exact limit." },
    { q: "How long do MetaWin withdrawals take?", a: "MetaWin says typically instant, and up to 24 hours in some cases." },
    { q: "Does MetaWin charge withdrawal fees?", a: "Yes. MetaWin's FAQ lists a $2.50 fee on all withdrawals, plus network fees on deposits." },
    { q: "Why can't I withdraw my MetaWin deposit?", a: "Deposits must be wagered once before withdrawal. A pending identity or anti-fraud check can also hold a withdrawal." },
  ],
  sources: [
    { name: "MetaWin: FAQ (withdrawals, limits, fees)", url: "https://metawin.com/faq" },
    { name: "MetaWin: Terms and Conditions (§5, §8, §10.3)", url: "https://metawin.com/terms-and-conditions" },
  ],
};
