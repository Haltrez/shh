import type { Guide } from "../types";

export const guide: Guide = {
  slug: "koalabet-withdrawal-limits",
  title: "KoalaBet Withdrawal Limits, Fees and Times",
  h1: "KoalaBet withdrawal limits, fees and times",
  description:
    "KoalaBet caps withdrawals at €10,000 a month. The minimum, the 8% unwagered-deposit fee, payout times (3–5 min in our tests) and how to withdraw.",
  updated: "2026-11-21",
  category: "Casino know-how",
  casino: "koalabet",
  howTo: true,
  relatedGuides: ["is-koalabet-legit", "how-to-withdraw-crypto", "crypto-casino-withdrawal-pending"],
  relatedReviews: ["koalabet"],
  body: [
    {
      type: "p",
      text: "KoalaBet lets you withdraw up to €10,000 a month, or €5,000 if your balance is at least 10 times your total deposits. Our test withdrawals arrived in 3 to 5 minutes. Wager each deposit at least once before withdrawing it, or the terms allow an 8% fee.",
    },
    { type: "h2", text: "Limits at a glance" },
    {
      type: "table",
      head: ["Rule", "What KoalaBet says", "Where"],
      rows: [
        ["Monthly maximum", "€10,000 per month", "Terms §8.6"],
        ["Big-win maximum", "€5,000 per month if your balance is at least 10x your total deposits", "Terms §8.6"],
        ["Minimum withdrawal", "$15 (Withdrawal Policy) or €10 (Terms §8.1)", "Both"],
        ["Account closure", "You can withdraw the full balance, even below the minimum", "Terms §8.1"],
      ],
      note: "KoalaBet's two documents list different minimums. Plan on $15 to be safe.",
    },
    { type: "h2", text: "Fees" },
    {
      type: "list",
      items: [
        "Wager first: if you haven't wagered a deposit at least once, KoalaBet may deduct an 8% fee, minimum €4, when you withdraw it (Terms §8.2).",
        "Otherwise KoalaBet says it charges no withdrawal fee (Withdrawal Policy §6).",
        "The blockchain network fee is deducted from the amount you receive. It's charged by the network, not KoalaBet.",
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: the 8% fee is easy to trigger by accident. If you deposit and change your mind, wager the deposit once before withdrawing, or ask support first.",
    },
    { type: "h2", text: "How long withdrawals take" },
    {
      type: "p",
      text: "KoalaBet's Withdrawal Policy says crypto withdrawals are processed instantly once approved, and that arrival depends on the network: usually minutes. Our test withdrawals arrived in 3 to 5 minutes. You get a transaction hash to track it. If a withdrawal needs extra identity or security checks, KoalaBet pauses it until they're done (Withdrawal Policy §4).",
    },
    { type: "h2", text: "Rules that can hold a withdrawal" },
    {
      type: "list",
      items: [
        "Active bonus: withdrawals wait until the bonus's wagering requirements are met (Bonus Terms §5).",
        "Payment method: withdrawals go back to the method you deposited with unless KoalaBet agrees otherwise (Terms §8.4).",
        "Verification: KoalaBet can ask for ID, proof of address or a selfie before a withdrawal (Terms §8.3).",
        "Restricted use: withdrawals aren't guaranteed if you played from a restricted country or behind a VPN (Terms §8.7, §3.4).",
      ],
    },
    { type: "h2", text: "How to withdraw" },
    {
      type: "steps",
      steps: [
        { name: "Clear the basics", need: "A deposit wagered at least once", text: "Make sure each deposit has been wagered once and any active bonus is finished." },
        { name: "Pick the coin and network", need: "A wallet that supports it", text: "Choose the same coin you deposited, on a network your wallet supports. USDT on TRC20, LTC and SOL are cheap to receive." },
        { name: "Paste your address", need: "Your own wallet address", text: "Copy it from your wallet, then check the first and last characters before you confirm." },
        { name: "Track it", need: "The transaction hash", text: "Ours arrived in 3 to 5 minutes. If it hasn't arrived, send support@koalabet.io your withdrawal ID and the transaction hash." },
      ],
    },
  ],
  faq: [
    { q: "What is KoalaBet's withdrawal limit?", a: "€10,000 per month, or €5,000 per month if your balance is at least 10 times your total deposits." },
    { q: "How long do KoalaBet withdrawals take?", a: "Our test withdrawals arrived in 3 to 5 minutes. KoalaBet processes crypto withdrawals instantly once approved; arrival depends on the network." },
    { q: "Does KoalaBet charge withdrawal fees?", a: "Not normally. But if you withdraw a deposit you haven't wagered at least once, the terms allow an 8% fee (minimum €4). Network fees are deducted by the blockchain." },
    { q: "What is the minimum withdrawal at KoalaBet?", a: "The Withdrawal Policy says $15; the Terms say €10. Plan on $15." },
    { q: "Why is my KoalaBet withdrawal pending?", a: "Usually an unfinished bonus, an unwagered deposit, or an identity or security check. Contact support with your withdrawal ID." },
  ],
  sources: [
    { name: "KoalaBet: Withdrawal Policy", url: "https://koalabet.io/policy/withdrawal-policy" },
    { name: "KoalaBet: Terms of Service §8 (updated 25.08.2026)", url: "https://koalabet.io/policy/terms-of-service" },
    { name: "KoalaBet: Bonus & Promotional Terms §5", url: "https://koalabet.io/policy/bonus-promotional-terms" },
  ],
};
