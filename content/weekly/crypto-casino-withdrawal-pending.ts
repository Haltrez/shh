import type { Guide } from "../types";

export const guide: Guide = {
  slug: "crypto-casino-withdrawal-pending",
  title: "Why Is My Crypto Casino Withdrawal Pending?",
  h1: "Why is my crypto casino withdrawal pending?",
  description:
    "A pending crypto casino withdrawal is usually a review, a bonus condition or a queue, not a network problem. How to tell which, and what to send support.",
  updated: "2026-11-17",
  category: "Casino know-how",
  howTo: true,
  relatedGuides: ["how-to-withdraw-crypto", "what-is-kyc-at-casinos", "usdt-trc20-vs-erc20"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "\"Pending\" almost always means the casino hasn't sent your coins yet. The delay is on its side: a manual review, an unmet bonus condition, a batch queue or a verification check. It is rarely the blockchain. Work out which stage you're stuck at before you contact support, because the fix is different for each.",
    },
    { type: "h2", text: "Pending at the casino vs pending on the network" },
    {
      type: "p",
      text: "These look similar in your account but are very different problems. A withdrawal is only on the network once it has a transaction ID (TXID). Until then, it's in the casino's internal process.",
    },
    {
      type: "table",
      head: ["What you see", "Where it's stuck", "Who can move it"],
      rows: [
        ["Status says pending or processing, no TXID", "Casino-side: queue, review or verification", "The casino's payments or support team"],
        ["A TXID exists, explorer shows 0 confirmations", "On the network, waiting to be included in a block", "Nobody; time, and sometimes network congestion"],
        ["A TXID exists, confirmed, but your wallet shows nothing", "Wrong wallet, wrong network or a display delay", "You: check the explorer and your wallet's network settings"],
        ["Status says approved or sent, no TXID shown", "Casino has queued it for its wallet to broadcast", "Support can usually fetch the TXID"],
      ],
      note: "Every casino handles this differently. Read the withdrawal section of the casino's own terms rather than relying on a general rule of thumb.",
    },
    { type: "h2", text: "The usual reasons it stays pending" },
    {
      type: "list",
      items: [
        "Manual review: many casinos check withdrawals above a certain size, or from new accounts, before releasing them.",
        "Bonus conditions: if you took a bonus, the casino may hold the withdrawal until the wagering requirement is met, or cancel the bonus when you withdraw.",
        "Verification: a casino may ask for identity or source-of-funds information at some threshold. See our guide to what KYC means at casinos.",
        "Batching: some operators send withdrawals in scheduled batches instead of instantly.",
        "Address or network mismatch: a withdrawal to an address that doesn't match the coin and network you chose can be held for correction.",
        "Account flags: unusual activity, a changed email or a very quick deposit-then-withdraw pattern can trigger a security hold.",
      ],
    },
    { type: "h2", text: "What to do, step by step" },
    {
      type: "steps",
      steps: [
        {
          name: "Check the withdrawal details",
          need: "Your cashier history",
          text: "Confirm the coin, the network and the destination address. If anything is wrong, look for a cancel option while it's still pending, then resubmit correctly.",
        },
        {
          name: "Look for a TXID",
          need: "The cashier or your email",
          text: "If there's a TXID, paste it into the block explorer for that network. Confirmations rising means it's on its way. No TXID means it hasn't been sent.",
        },
        {
          name: "Read the casino's terms on withdrawals",
          need: "The terms and conditions page",
          text: "Find the stated processing time, any review thresholds and the bonus rules. Check whether your case falls inside the stated window before you escalate.",
        },
        {
          name: "Check for bonus conditions",
          need: "Your active bonuses list",
          text: "An unfinished wagering requirement is one of the most common holds. If you don't want the bonus, ask support what cancelling it does to your balance first.",
        },
        {
          name: "Contact support once, with details",
          need: "Live chat or email",
          text: "Send your username, the amount, coin, network, destination address, the time you requested it and a screenshot of the status. One clear message beats five short ones.",
        },
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: don't cancel and resubmit repeatedly, and don't open several support tickets. It can reset your place in the queue and make the account look suspicious. Never share your seed phrase or wallet password with anyone claiming to help release your funds.",
    },
    { type: "h2", text: "How long is too long?" },
    {
      type: "p",
      text: "Use the casino's own stated window as your yardstick, not a number from a forum. If the terms give a processing time and you're inside it, wait. If you're well beyond it with no explanation, ask support for a specific reason and a timeframe, in writing, so you have a record.",
    },
    {
      type: "p",
      text: "If a casino stalls for weeks, keeps asking for new documents after you've sent them, or stops replying, treat that as a warning sign and stop depositing. Withdraw anything you can and keep screenshots of every message.",
    },
    { type: "h2", text: "Cut the chance of delays next time" },
    {
      type: "list",
      ordered: true,
      items: [
        "Read the withdrawal and bonus terms before you deposit, not after you win.",
        "Withdraw to a wallet you control, on the network the casino lists.",
        "Do a small test withdrawal early so any verification step happens when the stakes are low.",
        "Avoid taking a bonus if you may want to withdraw soon, since conditions can hold your balance.",
        "Keep your account details consistent: same email, no sudden changes before a withdrawal.",
      ],
    },
    {
      type: "p",
      text: "A withdrawal queue is also a useful pause. Only gamble with money you can afford to lose, set limits before you play, and if gambling stops being fun, step back and use the support tools in your region.",
    },
  ],
  faq: [
    {
      q: "Does pending mean my money is gone?",
      a: "No. Pending means the casino hasn't released it yet. Your balance is normally held until the withdrawal is approved, rejected or cancelled.",
    },
    {
      q: "Why is my withdrawal pending after I added a bonus?",
      a: "Many casinos hold withdrawals until wagering requirements are met. Check your active bonuses and the bonus terms for what happens to your balance if you withdraw early.",
    },
    {
      q: "Can I cancel a pending withdrawal?",
      a: "Often yes, from the cashier, while it's still pending and before a TXID exists. The funds usually return to your casino balance. Check how your casino handles it.",
    },
    {
      q: "My withdrawal has a TXID but nothing arrived. Why?",
      a: "Paste the TXID into the block explorer for the right network. If it has confirmations, check that your wallet has that network enabled and that you're looking at the right address.",
    },
    {
      q: "Will a VPN or a new wallet speed it up?",
      a: "No. Delays come from the casino's process, not your connection or wallet. Changing either mid-withdrawal can trigger extra checks.",
    },
  ],
};
