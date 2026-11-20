import type { Guide } from "../types";

export const guide: Guide = {
  slug: "is-metawin-legit",
  title: "Is MetaWin Legit? Licence, Terms and Payouts",
  h1: "Is MetaWin legit? Licence, terms and what to know first",
  description:
    "MetaWin is a licensed crypto casino run by Rivolo Limited under an Anjouan licence. What its terms say about KYC, VPNs, win caps and withdrawals.",
  updated: "2026-11-20",
  category: "Casino know-how",
  casino: "metawin",
  relatedGuides: ["metawin-kyc", "metawin-withdrawal-limits", "crypto-casino-licensing-shift-2026"],
  relatedReviews: ["metawin"],
  body: [
    {
      type: "p",
      text: "Yes, MetaWin is a licensed operator, not an anonymous offshore site. Its terms name the company (Rivolo Limited, registered in Nevis) and an Anjouan gaming licence, ALSI-202602025-FI1. Its terms are detailed and public. The main things to weigh are the licence's weaker recourse, KYC that can be requested at MetaWin's discretion, and win and withdrawal caps.",
    },
    { type: "h2", text: "Who runs MetaWin" },
    {
      type: "table",
      head: ["", "What MetaWin's terms say"],
      rows: [
        ["Operator", "Rivolo Limited, Charlestown, Nevis (company no. C62588)"],
        ["Licence", "Government of the Autonomous Island of Anjouan, Union of Comoros, licence ALSI-202602025-FI1"],
        ["Fiat payments", "Processed by Zoom Net Services Limited, Limassol, Cyprus, as payment agent"],
        ["Restricted countries", "Not available in the USA, UK, Germany, Netherlands, Australia and other listed jurisdictions"],
      ],
      note: "From MetaWin's terms and FAQ, checked 19–20 November 2026.",
    },
    { type: "h2", text: "What the Anjouan licence means for you" },
    {
      type: "p",
      text: "Anjouan is the licence many crypto casinos moved to after Curaçao tightened its rules. It's a real licence, but it gives you less recourse in a dispute than stricter regulators. Practically: read the terms before you deposit, keep screenshots of anything important, and don't leave a large balance sitting on the site.",
    },
    { type: "h2", text: "The terms that matter most" },
    {
      type: "list",
      items: [
        "KYC: MetaWin can ask for ID, proof of address and proof of funds at its sole discretion (§10.0.4). If you don't provide requested documents within 7 days, the account can be deactivated (§10.0.2).",
        "Holds: deposits, withdrawals or winnings can be held during identity, source-of-funds or anti-fraud checks (§5.3).",
        "Deposits must be wagered once before you can withdraw them (§5.4).",
        "Win caps: the maximum win from a single casino wager is $1,500,000, with lower caps on some in-house games (§10.3).",
        "VPNs: using a VPN or proxy to get around a restricted-jurisdiction block breaches the terms and can be treated as fraud (§2.1).",
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: a VPN is fine for general privacy, but MetaWin's terms are explicit that using one to play from a restricted country breaks the rules. Only play where online gambling is legal for you.",
    },
    { type: "h2", text: "Fairness and payouts" },
    {
      type: "p",
      text: "MetaWin says its competitions can be verified on-chain and that its game providers are independently tested. Our own test withdrawal arrived in about 10 seconds, the fastest we've recorded. MetaWin says some withdrawals can take up to 24 hours, and daily limits rise with its loyalty tiers.",
    },
    { type: "h2", text: "Our verdict" },
    {
      type: "p",
      text: "MetaWin is a legitimate, licensed crypto casino with unusually low friction: connect a wallet and play, no sign-up form. It isn't a \"no KYC, ever\" casino; its terms keep the right to verify you. If you're comfortable with an Anjouan licence and with verifying if asked, it's one of the smoothest options we've reviewed.",
    },
  ],
  faq: [
    { q: "Is MetaWin licensed?", a: "Yes. Its terms state it's licensed by the Autonomous Island of Anjouan, Union of Comoros, under licence ALSI-202602025-FI1, and operated by Rivolo Limited." },
    { q: "Is MetaWin safe?", a: "It's a licensed operator with public terms and on-chain verifiable competitions. As with any Anjouan-licensed casino, recourse in a dispute is weaker than with stricter regulators, so don't keep large balances on the site." },
    { q: "Can I use MetaWin in the US or UK?", a: "No. MetaWin lists the USA, UK, Germany, Netherlands and Australia among restricted jurisdictions, and its terms forbid using a VPN to get around that." },
    { q: "Does MetaWin pay out?", a: "Yes. Our test withdrawal arrived in about 10 seconds. MetaWin says some can take up to 24 hours, within daily limits set by your loyalty tier. Deposits must be wagered once before withdrawal." },
  ],
  sources: [
    { name: "MetaWin: Terms and Conditions", url: "https://metawin.com/terms-and-conditions" },
    { name: "MetaWin: FAQ", url: "https://metawin.com/faq" },
  ],
};
