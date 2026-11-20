import type { Guide } from "../types";

export const guide: Guide = {
  slug: "how-to-buy-usdt-trc20",
  title: "How to Buy USDT on TRC20 (Tron), Step by Step",
  h1: "How to buy USDT on TRC20 (Tron), step by step",
  description:
    "Buy USDT on an exchange, withdraw it on Tron (TRC20) to your own wallet, keep some TRX for fees, then deposit. Every step and the usual mistakes.",
  updated: "2026-11-23",
  publishAt: "2026-11-23",
  category: "Crypto basics",
  howTo: true,
  relatedGuides: ["usdt-trc20-vs-erc20", "crypto-wallet-for-gambling", "how-to-deposit-crypto"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "Buy USDT on a regulated exchange, withdraw it to your own wallet choosing the TRON (TRC20) network, keep a small amount of TRX in that wallet for network fees, then send it to the casino's TRC20 deposit address. The single most important check: the network on every screen must say TRC20 or TRON.",
    },
    {
      type: "steps",
      steps: [
        {
          name: "Open an exchange account",
          need: "Photo ID and a selfie",
          text: "Regulated exchanges must verify you. This is the exchange's requirement, not the casino's, and it doesn't share your ID with any casino.",
        },
        {
          name: "Buy USDT",
          need: "Bank transfer or card",
          text: "Buy slightly more USDT than you plan to deposit, because the exchange's withdrawal fee comes out of your balance.",
        },
        {
          name: "Set up a wallet that supports Tron",
          need: "A self-custody wallet with TRON support",
          text: "Your TRC20 receiving address starts with a capital T. Write down the seed phrase on paper and keep it offline.",
        },
        {
          name: "Withdraw USDT on the TRON network",
          need: "Your wallet's T... address",
          text: "On the exchange's withdrawal screen, choose USDT, then the TRON (TRC20) network, paste your address and send a small test amount first.",
        },
        {
          name: "Add a little TRX",
          need: "A small amount of TRX",
          text: "Sending USDT from your own wallet on Tron costs network resources paid in TRX (or energy). Without TRX in the wallet, the transfer to the casino will fail.",
        },
        {
          name: "Deposit at the casino",
          need: "The casino's TRC20 deposit address",
          text: "Copy a fresh address from the cashier, confirm it starts with T, send a small test, wait for it to be credited, then send the rest.",
        },
      ],
    },
    { type: "h2", text: "Why people use TRC20 for casino deposits" },
    {
      type: "list",
      items: [
        "Stable value: USDT tracks the US dollar, so your balance doesn't move while you play.",
        "Speed: Tron transfers usually confirm in about a minute.",
        "Cost: usually cheaper than USDT on Ethereum mainnet, though Tron fees depend on whether you have energy or need to burn TRX.",
        "Support: most crypto casinos list USDT on TRC20.",
      ],
    },
    { type: "h2", text: "The mistakes that lose deposits" },
    {
      type: "table",
      head: ["Mistake", "What happens", "How to avoid it"],
      rows: [
        ["Choosing ERC20 or BEP20 instead of TRC20", "The deposit goes to the wrong network and may never arrive", "Match the network name on every screen"],
        ["No TRX in your wallet", "The send fails or can't be signed", "Keep a small TRX balance"],
        ["Below the casino's minimum", "The deposit may not be credited", "Check the minimum in the cashier first"],
        ["Reusing an old deposit address", "Funds can go to an address the casino no longer monitors", "Copy a fresh address each time"],
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: buying through an exchange links your identity to the address you withdraw to. That's normal and legal, but it means crypto gambling is private, not anonymous.",
    },
  ],
  faq: [
    { q: "Where can I buy USDT on TRC20?", a: "Most large exchanges let you buy USDT and withdraw it on the TRON (TRC20) network. Check that the withdrawal screen lists TRON or TRC20 before you buy." },
    { q: "Why do I need TRX to send USDT?", a: "Tron charges network fees in TRX or energy. A wallet holding only USDT can't pay for the transfer." },
    { q: "How long does a TRC20 transfer take?", a: "Usually about a minute on the network. The exchange or casino may add its own processing time." },
    { q: "Can I send TRC20 USDT to an ERC20 address?", a: "No. They're different networks. Always match the network the casino's deposit page shows." },
  ],
};
