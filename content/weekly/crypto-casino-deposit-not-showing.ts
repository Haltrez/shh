import type { Guide } from "../types";

export const guide: Guide = {
  slug: "crypto-casino-deposit-not-showing",
  title: "Crypto Casino Deposit Not Showing? Check These 6",
  h1: "Crypto casino deposit not showing? Check these 6 things",
  description:
    "Most missing deposits are still confirming, under the minimum, on the wrong network or missing a memo. How to check each, and what to send support.",
  updated: "2026-11-30",
  publishAt: "2026-11-30",
  category: "Casino know-how",
  howTo: true,
  relatedGuides: ["sent-crypto-wrong-network", "how-to-deposit-crypto", "crypto-casino-withdrawal-pending"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "Most deposits that haven't shown up are simply still confirming. The rest are usually one of five fixable problems: below the minimum, wrong network, missing memo, an old deposit address, or a deposit the casino flagged for review. Work through these in order before contacting support.",
    },
    {
      type: "steps",
      steps: [
        {
          name: "Check confirmations",
          need: "The transaction ID (TXID) from your wallet",
          text: "Paste the TXID into the block explorer for that network. If confirmations are still rising, wait. Bitcoin can take 10–30 minutes or more when busy; faster chains take seconds to minutes.",
        },
        {
          name: "Check the amount against the minimum",
          need: "The casino's cashier page",
          text: "Deposits under the minimum are often not credited automatically. If yours was below it, contact support; some casinos credit it manually or ask you to top up.",
        },
        {
          name: "Check the network",
          need: "The explorer and the deposit page",
          text: "The network you sent on must match the one on the deposit page. If they differ, see our guide to crypto sent on the wrong network.",
        },
        {
          name: "Check the memo or tag",
          need: "The deposit page",
          text: "Some coins (XRP and others) need a memo or destination tag. Without it, the funds arrive but can't be matched to your account. Support can fix this with proof.",
        },
        {
          name: "Check the address",
          need: "Your wallet history",
          text: "Compare the address you sent to with the one shown in the cashier now. If you reused an old address, tell support; most can still credit it.",
        },
        {
          name: "Contact support with proof",
          need: "TXID, amount, coin, network, time",
          text: "Send one clear message with all five details and a screenshot from your wallet. Never share your seed phrase; no casino needs it.",
        },
      ],
    },
    { type: "h2", text: "Typical waiting times" },
    {
      type: "table",
      head: ["Network", "Usual time to credit"],
      rows: [
        ["Bitcoin", "10–30+ minutes (1–3 confirmations)"],
        ["Litecoin", "A few minutes"],
        ["Tron (TRC20)", "About a minute"],
        ["Solana", "Seconds"],
        ["Ethereum mainnet", "A few minutes"],
      ],
      note: "Each casino sets its own confirmation requirement, so times vary. Busy networks take longer.",
    },
    {
      type: "caveat",
      text: "Heads-up: anyone who contacts you offering to \"recover\" a missing deposit for a fee is running a scam. Only the casino can credit it.",
    },
    { type: "h2", text: "Avoid it next time" },
    {
      type: "list",
      ordered: true,
      items: [
        "Copy a fresh deposit address every time.",
        "Match coin and network on both screens.",
        "Include the memo or tag if the deposit page shows one.",
        "Send a small test first when using a new coin or network.",
      ],
    },
  ],
  faq: [
    { q: "How long should a crypto casino deposit take?", a: "From seconds to about half an hour depending on the network and how many confirmations the casino requires. Bitcoin is usually the slowest." },
    { q: "My deposit is confirmed but not in my balance. Why?", a: "Usually a missing memo, a deposit below the minimum, or a wrong network. Contact support with the TXID." },
    { q: "Can a casino refuse a deposit?", a: "Yes, for example if it's flagged by wallet screening (such as funds from a mixer). Deposit from your own wallet funded by an exchange to avoid this." },
    { q: "Should I send the deposit again?", a: "No. Find out what happened to the first one before sending more." },
  ],
};
