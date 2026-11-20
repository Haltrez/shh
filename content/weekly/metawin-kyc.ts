import type { Guide } from "../types";

export const guide: Guide = {
  slug: "metawin-kyc",
  title: "Does MetaWin Require KYC? Wallet Sign-Up Explained",
  h1: "Does MetaWin require KYC?",
  description:
    "Not to sign up: MetaWin has no registration form, you connect a crypto wallet. Its terms still let it request ID at its discretion. When, and what to send.",
  updated: "2026-11-20",
  category: "Casino know-how",
  casino: "metawin",
  howTo: true,
  relatedGuides: ["is-metawin-legit", "what-is-kyc-at-casinos", "crypto-wallet-for-gambling"],
  relatedReviews: ["metawin"],
  body: [
    {
      type: "p",
      text: "Not to start. MetaWin has no registration form: you connect a crypto wallet and play. But its terms reserve the right to ask for ID, proof of address and proof of funds at its sole discretion, with no amount threshold published. So we rate it KYC on request.",
    },
    { type: "h2", text: "How sign-up works" },
    {
      type: "steps",
      steps: [
        { name: "Connect a wallet", need: "MetaMask, Phantom, Coinbase Wallet or a WalletConnect wallet", text: "Your wallet is your login. There are no forms and no ID upload to start playing." },
        { name: "Or use email or Google", need: "An email address", text: "Optional. A separate email for gambling accounts keeps things tidier." },
        { name: "Deposit", need: "A supported coin and network", text: "Use your wallet balance directly, or the custodial deposit address for coins like BTC and LTC. Match the network exactly." },
      ],
    },
    { type: "h2", text: "When MetaWin can ask for ID" },
    {
      type: "list",
      items: [
        "At its discretion: MetaWin may request ID, proof of address and proof of funds whenever it decides to (§10.0.4).",
        "During checks: deposits, withdrawals or winnings can be held while identity, source-of-funds or anti-fraud checks run (§5.3).",
        "When you change personal details: updating registered details can mean submitting ID to verify them (§4.1).",
        "Sportsbook: sports bettors can face enhanced verification before withdrawals are approved (§10.0.5).",
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: if MetaWin asks for documents, you have 7 days to provide them, or the account can be deactivated (§10.0.2). Decide before you deposit whether you'd be willing to verify.",
    },
    { type: "h2", text: "What about MoonPay?" },
    {
      type: "p",
      text: "MetaWin offers card purchases through MoonPay, which has its own identity check: typically email, phone number, a photo of your ID and a selfie. That's MoonPay's requirement, not MetaWin's, and it only applies if you buy crypto through it. Depositing crypto you already hold skips it.",
    },
    { type: "h2", text: "How to keep it low-friction" },
    {
      type: "list",
      ordered: true,
      items: [
        "Use a self-custody wallet you only use for gambling.",
        "Fund it from an exchange in your own name, so any source-of-funds question is easy to answer.",
        "Don't use mixers or third-party funds; both are red flags under most casinos' AML rules.",
        "Keep your account details consistent, since changes can trigger a check.",
      ],
    },
  ],
  faq: [
    { q: "Can I play MetaWin without KYC?", a: "Yes, to start. You connect a wallet and play with no sign-up form. MetaWin can still request ID later at its discretion." },
    { q: "What documents does MetaWin ask for?", a: "Its terms list proof of identity, proof of address and proof of funds." },
    { q: "Is there a KYC threshold at MetaWin?", a: "No threshold is published. Its terms say KYC can be requested at MetaWin's sole discretion." },
    { q: "Do I need ID to buy crypto on MetaWin?", a: "Only if you use the MoonPay card option, which runs its own ID check. Depositing crypto you already hold doesn't need it." },
  ],
  sources: [
    { name: "MetaWin: Terms and Conditions (§4.1, §5.3, §10.0)", url: "https://metawin.com/terms-and-conditions" },
    { name: "MetaWin: FAQ (account creation, MoonPay)", url: "https://metawin.com/faq" },
  ],
};
