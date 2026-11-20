import type { Guide } from "../types";

export const guide: Guide = {
  slug: "how-to-buy-litecoin",
  title: "How to Buy Litecoin (LTC) for Casino Deposits",
  h1: "How to buy Litecoin for casino deposits",
  description:
    "Litecoin is cheap and quick to send, a good default for casino deposits. How to buy LTC, move it to your own wallet and deposit it safely.",
  updated: "2026-12-07",
  publishAt: "2026-12-07",
  category: "Crypto basics",
  howTo: true,
  relatedGuides: ["cheapest-coin-to-deposit", "how-to-deposit-crypto", "crypto-wallet-for-gambling"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "Buy LTC on a regulated exchange, withdraw it to your own wallet on the Litecoin network, then send it to the casino's LTC deposit address. Litecoin blocks arrive about every 2.5 minutes and fees are usually low, so it's one of the easiest coins for everyday deposits.",
    },
    {
      type: "steps",
      steps: [
        { name: "Buy LTC on an exchange", need: "A verified exchange account", text: "Most large exchanges sell Litecoin. A bank transfer is usually cheaper than a card." },
        { name: "Set up a wallet that supports Litecoin", need: "A self-custody wallet", text: "Litecoin addresses usually start with L, M or ltc1. Back up the seed phrase on paper." },
        { name: "Withdraw to your wallet", need: "Your LTC address", text: "Choose the Litecoin network on the exchange's withdrawal screen, paste your address, and send a small test first." },
        { name: "Copy the casino's LTC deposit address", need: "The casino cashier", text: "Make sure it's the Litecoin address, not a Bitcoin one. They look similar to the eye; the starting characters differ." },
        { name: "Send and wait for confirmations", need: "A few minutes", text: "Most casinos credit LTC after a handful of confirmations, typically within minutes." },
      ],
    },
    { type: "h2", text: "Why Litecoin works well for casino deposits" },
    {
      type: "list",
      items: [
        "Speed: blocks about every 2.5 minutes, versus about 10 for Bitcoin.",
        "Low fees: usually a small fraction of Bitcoin's when the networks are busy.",
        "Wide support: almost every crypto casino accepts LTC.",
        "Simple: one network, no memo, no token standard to choose.",
      ],
    },
    { type: "h2", text: "Litecoin vs a stablecoin" },
    {
      type: "p",
      text: "LTC's price moves like any cryptocurrency, so your balance can change while you play. If you want your balance fixed in dollars, use a stablecoin. If you want the simplest, cheapest transfer and don't mind price movement, LTC is a good choice.",
    },
    {
      type: "caveat",
      text: "Heads-up: never send LTC to a Bitcoin address, or the other way round. Copy the address from the casino's Litecoin deposit page every time.",
    },
  ],
  faq: [
    { q: "Is Litecoin good for gambling deposits?", a: "Yes for most deposits: it's fast, cheap to send and widely accepted. Its price moves, so use a stablecoin if you want a fixed dollar balance." },
    { q: "How long does a Litecoin deposit take?", a: "Usually a few minutes, depending on how many confirmations the casino requires." },
    { q: "What does a Litecoin address look like?", a: "It usually starts with L, M or ltc1." },
    { q: "Do I need a memo for LTC deposits?", a: "No. Litecoin deposits don't use memos or tags." },
  ],
};
