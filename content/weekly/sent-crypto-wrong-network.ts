import type { Guide } from "../types";

export const guide: Guide = {
  slug: "sent-crypto-wrong-network",
  title: "Sent Crypto on the Wrong Network? What to Do Next",
  h1: "Sent crypto on the wrong network? What to do next",
  description:
    "Crypto sent on the wrong network is often recoverable, depending on who controls the receiving address. How to check, what to tell support, scams to avoid.",
  updated: "2026-11-17",
  category: "Casino know-how",
  howTo: true,
  relatedGuides: ["how-to-deposit-crypto", "usdt-trc20-vs-erc20", "crypto-wallet-for-gambling"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "Don't panic, and don't send more. Whether you get the funds back depends on one thing: who controls the private key for the address you sent to. If it's your own wallet, you can usually recover it yourself. If it's a casino or exchange deposit address, only they can, and it's at their discretion.",
    },
    { type: "h2", text: "First, find out what actually happened" },
    {
      type: "steps",
      steps: [
        {
          name: "Get the transaction ID",
          need: "Your wallet's transaction history",
          text: "Open the transaction in your wallet and copy its ID (also called the hash or TXID). Every later step needs it.",
        },
        {
          name: "Look it up on a block explorer",
          need: "The explorer for the network you actually sent on",
          text: "Your wallet usually links to it. Check three things: the transaction is confirmed, the receiving address is the one you meant, and which network it went over.",
        },
        {
          name: "Compare with the deposit page",
          need: "The casino's cashier or the destination wallet",
          text: "Note the network the deposit page asked for. The gap between what it asked for and what you sent tells you which situation below you're in.",
        },
      ],
    },
    { type: "h2", text: "The four common situations" },
    {
      type: "table",
      head: ["What happened", "Can it be recovered?", "Who can do it"],
      rows: [
        ["Sent to your own wallet on a different EVM network (e.g. BNB Smart Chain instead of Ethereum)", "Usually yes", "You: add that network in your wallet; the same address holds the funds there"],
        ["Sent to a casino or exchange address on a different EVM network", "Sometimes", "Only the casino or exchange, if it supports recovery for that network"],
        ["Missing or wrong memo / destination tag (XRP, some others)", "Usually yes", "The receiving platform, once you prove the transaction"],
        ["Sent a token the address doesn't support at all", "Rarely", "Only whoever controls the receiving key"],
      ],
      note: "EVM networks (Ethereum, BNB Smart Chain, Polygon, Arbitrum, Base and others) share the same address format, which is why these mix-ups happen and why they're often fixable.",
    },
    { type: "h2", text: "If you sent to your own wallet" },
    {
      type: "p",
      text: "On EVM networks your address is the same on every chain, and your seed phrase controls all of them. Add the network you actually sent on to your wallet (most wallets list it in network settings) and the balance appears. You'll need a little of that network's native coin to move it again, for example BNB on BNB Smart Chain.",
    },
    { type: "h2", text: "If you sent to a casino deposit address" },
    {
      type: "p",
      text: "Contact support straight away, in writing. Give them the transaction ID, the coin, the amount, the network you used, the network the deposit page asked for, and your account username. Keep it factual and short.",
    },
    {
      type: "list",
      items: [
        "Some casinos can recover funds sent on a supported EVM network and credit you, sometimes minus a fee.",
        "Some won't, because recovery needs manual work with their wallet keys.",
        "Missing memo or tag cases are the easiest: the funds arrived, they just weren't matched to your account.",
        "If support asks for proof, a screenshot of the transaction in your wallet plus the explorer link is usually enough.",
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: no legitimate support agent will ever ask for your seed phrase or private key. Anyone who does is trying to empty your wallet.",
    },
    { type: "h2", text: "Avoid \"recovery services\"" },
    {
      type: "p",
      text: "People who post about a lost deposit are quickly contacted by \"recovery experts\" offering to get the funds back for an upfront fee. These are scams. Nobody outside the casino or your own wallet can move funds sent to an address they don't control.",
    },
    { type: "h2", text: "How to stop it happening again" },
    {
      type: "list",
      ordered: true,
      items: [
        "Copy a fresh deposit address from the cashier every time.",
        "Pick the network on your send screen to match the deposit page exactly. If your wallet doesn't offer that network, don't send.",
        "Check the address format: TRC20 addresses start with T, EVM addresses with 0x.",
        "Send a small test amount first, wait for it to be credited, then send the rest.",
      ],
    },
  ],
  faq: [
    {
      q: "Is crypto sent on the wrong network lost forever?",
      a: "Not always. If you control the receiving wallet, you can usually recover it by switching networks. If a casino or exchange controls it, recovery is up to them.",
    },
    {
      q: "Can a casino refuse to recover my deposit?",
      a: "Yes. Recovery takes manual work, and many casinos' terms say deposits on unsupported networks may be lost. Contact support quickly and politely; some will help.",
    },
    {
      q: "Why did my wallet let me send on the wrong network?",
      a: "Many networks share the same address format, so the wallet can't tell the address was meant for a different chain.",
    },
    {
      q: "How long does a recovery take?",
      a: "Missing-memo cases are often fixed within days. Cross-network recoveries, when offered at all, can take longer.",
    },
    {
      q: "Should I pay someone who says they can recover it?",
      a: "No. Recovery services that contact you after a lost transfer are scams.",
    },
  ],
};
