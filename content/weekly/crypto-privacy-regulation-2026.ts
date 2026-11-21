import type { Guide } from "../types";

export const guide: Guide = {
  slug: "crypto-privacy-regulation-2026",
  title: "Crypto Privacy Rules 2026: MiCA, Travel Rule, DAC8",
  h1: "Crypto privacy rules in 2026: what MiCA, the Travel Rule and DAC8 mean for you",
  description:
    "MiCA's transition ended, the Travel Rule covers self-hosted wallets over €1,000 and privacy coins face an EU ban in 2027. What changes for you.",
  updated: "2026-11-17",
  category: "Trends & news",
  relatedGuides: ["is-crypto-gambling-anonymous", "crypto-news-november-2026", "crypto-gambling-taxes"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "Self-custody is still legal, and nothing in the 2026 rules stops you holding your own wallet. What has changed is how much your exchange must know and report: who you send to, who sends to you, and what you earn. The privacy squeeze happens at the on-ramp, not in your wallet.",
    },
    { type: "h2", text: "The key dates" },
    {
      type: "table",
      head: ["Rule", "What it does", "When"],
      rows: [
        ["MiCA (EU)", "Licensing regime for crypto service providers; transition period for existing firms", "Transition ended 1 July 2026"],
        ["Travel Rule (EU Transfer of Funds Regulation)", "Sender and recipient data travels with every transfer between providers; no minimum amount", "In force since Dec 2024"],
        ["Self-hosted wallet checks", "Provider must check you own a self-hosted wallet for transfers above €1,000", "In force"],
        ["DAC8 (EU) / CARF (OECD)", "Exchanges collect and report users' crypto activity to tax authorities", "Phasing in from 2026"],
        ["EU AML Regulation", "No anonymous crypto accounts and no privacy coins on EU-regulated platforms", "From 10 July 2027"],
      ],
      note: "Dates as reported by compliance sources; national implementation can vary. Check official EU texts for anything you rely on.",
    },
    { type: "h2", text: "What the Travel Rule means when you withdraw" },
    {
      type: "p",
      text: "When you withdraw from an EU exchange to your own wallet, the exchange records where the funds went. For transfers above €1,000 it must also check that the self-hosted wallet is yours, typically with a signed message, a small test transfer or a screenshot. It's a one-time step per address on many platforms, but it does link your identity to that address in the exchange's records.",
    },
    {
      type: "steps",
      steps: [
        { name: "Expect the question", need: "Your wallet open", text: "When you add a new withdrawal address, the exchange may ask whether it's your own wallet or a third party's." },
        { name: "Prove ownership if asked", need: "Ability to sign a message or send a small test amount", text: "Follow the exchange's method. It usually only applies above €1,000 and only once per address." },
        { name: "Keep it simple", need: "One dedicated gambling wallet", text: "Using one verified wallet for gambling funds avoids repeat checks and keeps your records clean." },
      ],
    },
    { type: "h2", text: "Tax reporting is now automatic" },
    {
      type: "p",
      text: "DAC8 in the EU and the OECD's Crypto-Asset Reporting Framework mean exchanges send your identity and transaction data straight to tax authorities, much like banks already do. If you've been relying on \"they won't know\", that assumption no longer holds. Keep records of buys, deposits, withdrawals and sales; our tax guide lists what to keep.",
    },
    { type: "h2", text: "Privacy coins: the 2027 cut-off" },
    {
      type: "p",
      text: "From July 2027, EU-regulated platforms won't be able to offer anonymous accounts or privacy coins such as Monero and Zcash. Several exchanges have already delisted them. Few casinos accept them anyway, so for most casino players this changes little, but it ends the idea of buying privacy coins on a mainstream EU exchange.",
    },
    {
      type: "caveat",
      text: "Heads-up: none of these rules make it illegal to use a self-custody wallet, a VPN, or a crypto casino where gambling is legal for you. They make it harder to stay anonymous at the point where crypto meets your bank.",
    },
    { type: "h2", text: "Outside the EU" },
    {
      type: "list",
      items: [
        "US: stablecoins are governed by the GENIUS Act (July 2025). The broader CLARITY Act market-structure bill failed 49–50 in the Senate in November 2026.",
        "UK: Parliament is working through stablecoin rules; the House of Lords approved amendments on 11 November 2026 on how UK-issued stablecoins in payment chains are treated.",
        "Asia: Taiwan published draft rules in November 2026 that would limit stablecoin issuance to banks and bank-controlled firms; Thailand has proposed tighter stablecoin and exchange rules.",
      ],
    },
    { type: "h2", text: "Practical privacy in 2026" },
    {
      type: "list",
      ordered: true,
      items: [
        "Accept that your exchange knows who you are, and plan around it.",
        "Use one self-custody wallet for gambling, verified once with your exchange.",
        "Use a VPN on networks you don't control, to keep your activity away from ISPs and trackers.",
        "Choose casinos that don't hold your ID unless they have to, so a breach there can't leak your documents.",
        "Keep complete records for tax.",
      ],
    },
  ],
  faq: [
    { q: "Does MiCA ban self-custody wallets?", a: "No. MiCA regulates service providers like exchanges. You can still hold and use your own wallet." },
    { q: "What is the €1,000 Travel Rule threshold?", a: "For transfers above €1,000 between an exchange and a self-hosted wallet, the exchange must check that you own the wallet." },
    { q: "Are privacy coins banned in the EU?", a: "From 10 July 2027, EU-regulated platforms can't offer privacy coins or anonymous accounts. Holding them in your own wallet isn't the target of that rule." },
    { q: "Do exchanges report to tax authorities?", a: "Increasingly, yes. DAC8 and the OECD's CARF require exchanges to report users' crypto activity automatically." },
  ],
  sources: [
    { name: "Didit: MiCA regulation 2026 compliance guide", url: "https://didit.me/blog/mica-regulation-eu-crypto-compliance-guide/" },
    { name: "Bankera: MiCA and the Travel Rule in 2026", url: "https://blog.bankera.com/en/mi-ca-and-the-travel-rule-what-crypto-businesses-need-to-know-in-2026/" },
    { name: "Tangem: What MiCA means for self-custody", url: "https://tangem.com/en/learning-hub/post/mica-regulation-self-custody/" },
    { name: "Bitcoin Foundation: How global regulations are changing crypto privacy", url: "https://bitcoinfoundation.org/news/opinion/the-end-of-crypto-privacy-how-global-regulations-are-changing-everything-in-2026/" },
    { name: "Bitcoin.com News: This week in crypto law (15 Nov 2026)", url: "https://news.bitcoin.com/regulation-and-legal/this-week-in-crypto-law-november-15-2026/" },
    { name: "Crypto Briefing: Taiwan proposes bank-led stablecoin rules", url: "https://cryptobriefing.com/taiwan-stablecoin-rules-bank-controlled-issuers" },
  ],
};
