import type { Guide } from "../types";

export const guide: Guide = {
  slug: "seed-phrase-safety",
  title: "Seed Phrase Safety: The Rules That Actually Matter",
  h1: "Seed phrase safety: the rules that actually matter",
  description:
    "Anyone with your seed phrase owns your crypto. Where to store it, what never to do with it, and how to spot the scams designed to make you type it in.",
  updated: "2026-12-14",
  publishAt: "2026-12-14",
  category: "Privacy",
  relatedGuides: ["crypto-wallet-for-gambling", "how-to-spot-a-crypto-casino-scam", "private-browsing-setup"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "Your seed phrase (the 12 or 24 words your wallet showed you) is the wallet. Anyone who has it can take everything in it, from anywhere, and you can't reverse that. The rules are simple: keep it offline, never type it anywhere except your own wallet when restoring, and never share it with anyone.",
    },
    { type: "h2", text: "The rules" },
    {
      type: "list",
      ordered: true,
      items: [
        "Write it on paper, or stamp it on metal. Not in a photo, cloud note, email, password manager you share, or chat.",
        "Store it where you'd keep a passport, out of sight.",
        "Make one backup, kept in a different safe place.",
        "Never type it into a website. No casino, exchange or support agent will ever need it.",
        "Only enter it when restoring your own wallet, in the official app you downloaded yourself.",
        "If you think anyone has seen it, create a new wallet and move everything immediately.",
      ],
    },
    { type: "h2", text: "Scams designed to get your seed phrase" },
    {
      type: "table",
      head: ["Scam", "What it looks like"],
      rows: [
        ["Fake support", "\"Support\" messages you on Telegram or Discord and asks you to \"verify\" or \"sync\" your wallet"],
        ["Fake wallet app", "A look-alike app in an app store or from an ad that asks you to import your phrase"],
        ["Fake airdrop or bonus", "A site asks for your phrase to \"claim\" tokens or a casino bonus"],
        ["Phishing pop-up", "A pop-up claims your wallet is compromised and asks you to re-enter the phrase"],
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: a casino never needs your seed phrase, not for deposits, withdrawals, KYC or bonuses. Anyone asking is trying to empty your wallet.",
    },
    { type: "h2", text: "A simple setup for gambling funds" },
    {
      type: "p",
      text: "Keep a separate wallet for gambling with only what you plan to play with. Your savings stay in another wallet (ideally a hardware wallet) whose phrase never goes near a casino-connected device. If something goes wrong with the gambling wallet, the damage is limited.",
    },
  ],
  faq: [
    { q: "Can I store my seed phrase in a password manager?", a: "It's safer offline on paper or metal. If you use a password manager, it must be strongly protected and never shared." },
    { q: "Will a casino ever ask for my seed phrase?", a: "No. Any request for it is a scam." },
    { q: "What if I lose my seed phrase?", a: "If you still have access to the wallet, create a new wallet with a new phrase and move your funds. If you've lost both, the funds can't be recovered." },
    { q: "Is a screenshot of my seed phrase safe?", a: "No. Photos sync to cloud services and can be exposed in a breach." },
  ],
};
