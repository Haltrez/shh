import type { Guide } from "../types";

export const guide: Guide = {
  slug: "wagering-requirements-explained",
  title: "Wagering Requirements Explained, With Examples",
  h1: "Wagering requirements explained, with examples",
  description:
    "35x wagering on a $100 bonus means $3,500 in bets before you can withdraw. How to work it out, what it really costs, and the rules that catch people.",
  updated: "2026-11-26",
  publishAt: "2026-11-26",
  category: "Casino know-how",
  relatedGuides: ["crypto-casino-withdrawal-pending", "what-is-kyc-at-casinos", "how-to-withdraw-crypto"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "A wagering requirement is how many times you must bet a bonus (or bonus plus deposit) before winnings from it can be withdrawn. A $100 bonus with 35x wagering means $3,500 in total bets. Until you've done that, the bonus and anything won with it usually stays locked.",
    },
    { type: "h2", text: "How to calculate it" },
    {
      type: "table",
      head: ["Offer", "Wagering applies to", "Total bets needed"],
      rows: [
        ["$100 bonus, 35x", "Bonus only", "$100 × 35 = $3,500"],
        ["$100 deposit + $100 bonus, 35x", "Deposit + bonus", "$200 × 35 = $7,000"],
        ["50 free spins, winnings $20, 40x", "Free spin winnings", "$20 × 40 = $800"],
      ],
      note: "Always check whether the multiplier applies to the bonus alone or to deposit plus bonus. It doubles the work.",
    },
    { type: "h2", text: "What it really costs you" },
    {
      type: "p",
      text: "Every bet carries the game's house edge, so wagering has an expected cost. A rough estimate is total wagering multiplied by the house edge. On a slot with a 96% return to player (a 4% edge), $3,500 of wagering costs about $140 on average. If the bonus was $100, the expected value of taking it is negative before you've won anything.",
    },
    {
      type: "caveat",
      text: "Heads-up: these are averages. Individual sessions swing a lot, which is exactly why bonuses feel better than the maths says they are.",
    },
    { type: "h2", text: "The rules that catch people out" },
    {
      type: "list",
      items: [
        "Game weighting: slots often count 100% toward wagering, while table games and live casino may count 10% or nothing.",
        "Maximum bet: many bonuses cap your bet size while wagering. Going over it can void the bonus and its winnings.",
        "Time limits: unfinished wagering can expire, taking the bonus with it.",
        "Maximum cashout: some bonuses cap how much you can withdraw from bonus winnings.",
        "Withdrawing early: requesting a withdrawal before wagering is done often cancels the bonus.",
      ],
    },
    { type: "h2", text: "When a bonus is worth taking" },
    {
      type: "list",
      ordered: true,
      items: [
        "Low multiplier (under about 20x) on the bonus only.",
        "Slots count 100% and you were going to play slots anyway.",
        "No tight maximum bet or short expiry.",
        "You're not planning to withdraw soon.",
      ],
    },
    {
      type: "p",
      text: "If any of those fail, playing without a bonus is often the better deal. It also removes the most common reason withdrawals get held. Our bonus code pages list each casino's offer; the full wagering terms are always on the casino's own site.",
    },
  ],
  faq: [
    { q: "What does 35x wagering mean?", a: "You must place bets totalling 35 times the bonus amount (or bonus plus deposit, depending on the terms) before bonus winnings can be withdrawn." },
    { q: "Do all games count toward wagering?", a: "No. Slots usually count fully; table and live games often count partly or not at all. The bonus terms list the weightings." },
    { q: "Can I withdraw before finishing wagering?", a: "Usually only by forfeiting the bonus and its winnings. Some casinos let you withdraw your own deposit balance first; check the terms." },
    { q: "Is a no-wagering bonus better?", a: "Usually, because winnings are withdrawable straight away. They tend to be smaller offers." },
  ],
};
