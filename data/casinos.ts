import type { Casino } from "@/lib/types";

/**
 * Partner casinos.
 *
 * Fact fields (`kyc`, `licence`, `vpnRule`…) are `Sourced<T>` and link to the casino's OWN
 * terms, with the section number in the text. `reported` holds third-party or casino-supplied
 * info that isn't in published terms (e.g. coins from a review, KoalaBet's direct confirmation).
 *
 * Re-check monthly and bump `lastChecked`. PlayAmo was dropped (KYC too heavy for this site).
 */
const CHECKED = "2026-11-17";
const PAYOUT = { value: 10, label: "under 10 min", note: "Every test withdrawal landed in under 10 minutes." };

const CASHY_TERMS = "https://cashy.com/terms-and-conditions";
const MIRAX_TERMS = "https://www.miraxcasino.com/terms-and-conditions";
const SEVENBIT_TERMS = "https://7bitcasino.com/terms-and-conditions";
const BITSTARZ_TERMS = "https://www.bitstarz.com/terms";
const METAWIN_TERMS = "https://metawin.com/terms-and-conditions";
const METAWIN_FAQ = "https://metawin.com/faq";

/** Cashy and BitStarz share an operator (Gareton B.V.) and near-identical restricted lists. */
const GARETON_RESTRICTED = ["US", "PR", "GB", "GR", "NL", "ES", "FR", "BE", "PT", "PL", "RU", "BR", "CW", "+ more"];

export const casinos: Casino[] = [
  {
    slug: "koalabet",
    name: "KoalaBet",
    featured: true, // paid placement: shown with the "Featured" label
    priority: 2,
    logo: "/logos/koalabet.svg",
    logoIsMark: true,
    affiliateUrl: "https://click.koalabetaffiliates.com/redirect.aspx?pid=2408&lpid=8&bid=1479",
    lastChecked: null,
    payoutMinutes: PAYOUT,
    offer: { text: "Welcome bonus up to $700" },
    verdict:
      "KoalaBet needs no KYC for everyday play: no ID to sign up, deposit or withdraw until you pass $5,000 in deposits or withdrawals. Above that it asks for basic personal information. Withdrawals landed in under 10 minutes in our tests.",
    pros: [
      "No KYC below $5,000 in deposits or withdrawals",
      "Above $5,000, only basic information is asked for",
      "Payouts in under 10 minutes in our tests",
      "Welcome bonus up to $700",
    ],
    cons: [
      "Basic information is required once you pass $5,000",
      "Accepted coins not yet listed here",
      "Bonus terms apply; read them before opting in",
    ],
    reported: {
      level: "none",
      confirmed: true,
      summary: "No KYC until you pass $5,000 in deposits or withdrawals. Above that, basic information is asked for.",
      detail: [
        "Below $5,000: no ID or personal details to sign up, deposit or withdraw.",
        "Above $5,000 in deposits or withdrawals: KoalaBet asks for basic personal information.",
      ],
      sources: [{ name: "KoalaBet" }],
      asOf: CHECKED,
    },
  },
  {
    slug: "metawin",
    name: "MetaWin",
    priority: 1,
    logo: "/logos/metawin.svg",
    affiliateUrl: "https://affiliates-link.metawin.com/XWar0Wbz?campaign=Shh",
    lastChecked: "2026-11-20",
    payoutMinutes: {
      value: 1,
      label: "~10 seconds",
      note: "Our test withdrawal arrived in about 10 seconds. MetaWin says some withdrawals can take up to 24 hours.",
    },
    licence: {
      value: "Anjouan (Comoros), licence ALSI-202602025-FI1 (Rivolo Limited, Nevis)",
      source: METAWIN_TERMS,
    },
    kyc: {
      level: "on-request",
      summary: "No sign-up form: connect a crypto wallet and play. MetaWin can ask for ID at its discretion, with no amount stated.",
      signup: {
        value: "No registration form: connect a wallet (MetaMask, Phantom, WalletConnect and others), or sign up with email or Google.",
        source: METAWIN_FAQ,
      },
      withdrawal: {
        value: "Withdrawals are approved instantly in normal cases; MetaWin can hold them for identity, source-of-funds or anti-fraud checks (§5.3).",
        source: METAWIN_TERMS,
      },
      triggers: {
        value: [
          "KYC at MetaWin's sole discretion: ID, proof of address, proof of funds (§10.0.4)",
          "Identity, source-of-funds or anti-fraud checks on deposits and withdrawals (§5.3)",
          "Changing your registered personal details (§4.1)",
          "Enhanced checks for sportsbook users (§10.0.5)",
        ],
        source: METAWIN_TERMS,
      },
    },
    vpnRule: {
      value: "Using a VPN or proxy to hide your real location from a restricted jurisdiction breaches the terms (§2.1).",
      source: METAWIN_TERMS,
    },
    restrictedCountries: { value: ["US", "GB", "DE", "NL", "AU", "+ more"], source: METAWIN_FAQ },
    coins: {
      value: ["BTC", "ETH", "SOL", "USDT", "USDC", "LTC", "DOGE", "BNB", "TRX", "XRP"],
      source: METAWIN_FAQ,
    },
    minDepositUsd: { value: 5, source: METAWIN_FAQ },
    withdrawalLimits: {
      value: "From $10,000 net per 24 hours at the entry tier, higher for VIP tiers; $2.50 fee per withdrawal",
      source: METAWIN_FAQ,
    },
    verdict:
      "MetaWin is one of the most private ways to play: there's no sign-up form at all, you just connect a crypto wallet. It takes 14 coins across major chains, runs provably fair competitions on-chain, and our test withdrawal arrived in about 10 seconds. There's no welcome bonus, so there are no wagering conditions to clear. Like most casinos, its terms let it ask for ID at its discretion.",
    kycInPractice: [
      "There's no registration form. Connect MetaMask, Phantom or one of 300+ wallets via WalletConnect and you can play straight away; email and Google sign-up are optional.",
      "The terms reserve the right to request ID, proof of address and proof of funds at MetaWin's sole discretion, and to hold transactions during identity or source-of-funds checks. No threshold is published. MoonPay, the card on-ramp, has its own ID check, but only if you choose to buy crypto through it.",
    ],
    pros: [
      "No sign-up form: connect a wallet and play",
      "Provably fair: competitions verifiable on-chain, game providers independently tested",
      "14 coins, including BTC, ETH, SOL, USDT, USDC and LTC",
      "Fastest payout we've tested: about 10 seconds",
      "Low minimum deposit: 5 USDT",
      "No welcome bonus, so no bonus wagering conditions holding your withdrawals",
    ],
    cons: [
      "Terms allow ID checks at MetaWin's discretion, with no threshold stated",
      "Deposits must be wagered once before you can withdraw them",
      "$2.50 fee on every withdrawal",
      "Anjouan licence offers less recourse than stricter regulators",
    ],
    scores: { kycSignup: 5, kycTriggers: 2, payoutSpeed: 5, coinChoice: 5, termsClarity: 3 },
  },
  {
    slug: "7bit",
    name: "7Bit Casino",
    logo: "/logos/7bit.svg",
    affiliateUrl: "https://7bit.partners/piymfrjsr",
    lastChecked: CHECKED,
    payoutMinutes: PAYOUT,
    offer: { text: "325% up to 5.25 BTC + 250 free spins welcome pack", freeSpins: true },
    licence: { value: "Curaçao Gaming Authority, OGL/2023/147/0081 (Kika Technology B.V.)", source: SEVENBIT_TERMS },
    kyc: {
      level: "on-request",
      summary: "No ID to start. ID becomes mandatory once your total payments reach 0.03 BTC.",
      signup: {
        value: "No ID needed to start playing. The terms allow a KYC check at registration (§8.8), but it isn't routine.",
        source: SEVENBIT_TERMS,
      },
      withdrawal: {
        value: "ID is mandatory once your cumulative payments reach 30 mBTC (0.03 BTC) (§9.2).",
        source: SEVENBIT_TERMS,
      },
      triggers: {
        value: [
          "Cumulative payments of 0.03 BTC (§9.2)",
          "Legal or risk-based thresholds, or a change of payment method or withdrawal address (§8.8)",
          "Source of funds or wealth where required (§8.7)",
          "Possible video call (§8.12)",
        ],
        source: SEVENBIT_TERMS,
      },
    },
    vpnRule: {
      value: "Using a VPN to bypass a provider's block is prohibited and may lead to confiscation of winnings (§4.2).",
      source: SEVENBIT_TERMS,
    },
    restrictedCountries: {
      value: ["US", "GB", "NL", "FR", "ES", "PT", "IL", "HU", "PL", "CW", "CA", "AU", "GR", "RO", "SE", "BR", "CZ", "LV", "ZA", "PE", "+ more"],
      source: SEVENBIT_TERMS,
    },
    withdrawalLimits: {
      value: "Min 0.3 mBTC; 0.15 BTC per week, 0.6 BTC per month; bigger wins paid in monthly instalments (§9.9–9.11)",
      source: SEVENBIT_TERMS,
    },
    verdict:
      "7Bit lets you start without ID, and its terms are unusually clear about when that changes: KYC becomes mandatory once your total payments reach 0.03 BTC. Withdrawals landed in under 10 minutes in our tests, but weekly and monthly caps are low for big winners.",
    kycInPractice: [
      "You can sign up and play without uploading anything. The terms allow a check at registration, but it isn't part of the normal sign-up.",
      "Once your cumulative payments reach 30 mBTC (0.03 BTC), KYC is mandatory: photo ID, proof of address no older than 90 days, and proof of payment. Reviews can take up to 30 working days, and 7Bit may ask for a video call.",
    ],
    pros: [
      "No ID to start playing",
      "Clear KYC threshold written into the terms: 0.03 BTC in total payments",
      "Payouts in under 10 minutes in our tests",
      "Largest welcome pack here: 325% up to 5.25 BTC + 250 free spins",
    ],
    cons: [
      "ID is mandatory once you pass 0.03 BTC in payments",
      "Low withdrawal caps: 0.15 BTC a week, 0.6 BTC a month",
      "KYC reviews can take up to 30 working days",
      "Bonus terms apply; read them before opting in",
    ],
    scores: { kycSignup: 5, kycTriggers: 2, payoutSpeed: 5, termsClarity: 4 },
  },
  {
    slug: "cashy",
    name: "Cashy",
    logo: "/logos/cashy.svg",
    affiliateUrl: "https://gocashy.com/beixdsb7w",
    lastChecked: CHECKED,
    payoutMinutes: PAYOUT,
    offer: { text: "Exclusive 150% welcome bonus up to $3,000" },
    licence: { value: "Curaçao Gaming Control Board, OGL/2024/165/0185 (Gareton B.V.)", source: CASHY_TERMS },
    kyc: {
      level: "on-request",
      summary: "Sign up with an email or a Web3 wallet, no ID. Cashy can ask for ID before paying out, and the terms set no amount.",
      signup: {
        value: "Email or Web3 wallet, no ID. Cashy reserves the right to verify identity (§3.3).",
        source: CASHY_TERMS,
      },
      withdrawal: {
        value: "If asked, you must complete KYC to get paid: without the documents, payments are blocked (§7.4).",
        source: CASHY_TERMS,
      },
      triggers: {
        value: [
          "Any withdrawal (§8.7.4)",
          "Deposits (§8.6.3)",
          "USD e-wallet withdrawals (§8.7.9)",
          "Large wins, verified with the game provider (§8.7.8)",
        ],
        source: CASHY_TERMS,
      },
    },
    vpnRule: {
      value: "Using a VPN to bypass a provider's block is prohibited and may lead to confiscation of winnings (§4.3).",
      source: CASHY_TERMS,
    },
    restrictedCountries: { value: GARETON_RESTRICTED, source: CASHY_TERMS },
    withdrawalLimits: {
      value: "No fixed cap stated; substantial wins may be paid in monthly instalments (§8.7.3)",
      source: CASHY_TERMS,
    },
    verdict:
      "Cashy is easy to start: sign up with an email or a Web3 wallet, no ID. But its terms let it ask for ID before paying out, with no amount stated, so treat it as KYC on request. Withdrawals landed in under 10 minutes in our tests.",
    kycInPractice: [
      "Registration needs only an email or a Web3 wallet. One review reports never being asked for ID during testing.",
      "The terms are broader than that experience: Cashy can verify you on deposits and on any withdrawal, and without KYC documents it won't pay out. No threshold amount is given.",
    ],
    pros: [
      "No ID to sign up; Web3 wallet sign-up supported",
      "Payouts in under 10 minutes in our tests",
      "Takes BTC, ETH, USDT, SOL and DOGE",
      "No fixed withdrawal cap in the terms",
    ],
    cons: [
      "Terms allow an ID check on any withdrawal, with no threshold stated",
      "Large wins may be paid in monthly instalments",
      "Bonus terms apply; read them before opting in",
    ],
    reported: {
      level: "on-request",
      summary: "Sign up with an email or a Web3 wallet.",
      coins: ["BTC", "ETH", "USDT", "SOL", "DOGE"],
      sources: [{ name: "Dot Esports", url: "https://dotesports.com/gambling/no-verification-casinos" }],
      asOf: CHECKED,
    },
    scores: { kycSignup: 5, kycTriggers: 2, payoutSpeed: 5, coinChoice: 4, termsClarity: 3 },
  },
  {
    slug: "mirax",
    name: "Mirax Casino",
    logo: "/logos/mirax.svg",
    affiliateUrl: "https://mirax.partners/po7jctlhu",
    lastChecked: CHECKED,
    payoutMinutes: PAYOUT,
    offer: { text: "325% up to 5 BTC + 150 free spins welcome package", freeSpins: true },
    licence: { value: "Tobique Gaming Commission, licence 0000091 (Saphirix Solutions SRL)", source: MIRAX_TERMS },
    kyc: {
      level: "on-request",
      summary: "No ID to sign up and play. Mirax can verify you before any withdrawal.",
      signup: { value: "No verification step at registration in the terms.", source: MIRAX_TERMS },
      withdrawal: {
        value: "Mirax reserves the right to verify identity before any withdrawal; requests stay pending until it's done (§8.4, §11.2).",
        source: MIRAX_TERMS,
      },
      triggers: {
        value: [
          "Any withdrawal (§11.2)",
          "Photo ID, proof of address and proof of payment on request (§9.4)",
          "Possible phone or video verification (§8.4, §9.4)",
        ],
        source: MIRAX_TERMS,
      },
    },
    vpnRule: {
      value: "Using VPNs to bypass geographic restrictions is prohibited and may lead to confiscation of winnings (§3.2).",
      source: MIRAX_TERMS,
    },
    restrictedCountries: {
      value: ["US", "GB", "NL", "BE", "BG", "CY", "EE", "GR", "GI", "IL", "JP", "LV", "LT", "MT", "PL", "PR", "RO", "RU", "UA", "BY", "BR", "CN", "CU", "AF", "CA (ON, NB)", "+ more"],
      source: MIRAX_TERMS,
    },
    withdrawalLimits: {
      value: "Min €20; €10,000 per rolling week, €40,000 per month (§11.1, §11.8)",
      source: MIRAX_TERMS,
    },
    verdict:
      "Mirax asks for no ID to sign up and play, but its terms let it verify you before any withdrawal, including by video call. Withdrawals landed in under 10 minutes in our tests. Ignore the \"total anonymity\" marketing: its own terms don't promise it.",
    kycInPractice: [
      "There's no ID step at registration. Mirax markets \"total anonymity\", but its terms reserve the right to verify your identity before processing any withdrawal.",
      "If asked, you'll need photo ID, proof of address and proof of payment, and Mirax may want a phone or video call. Withdrawals stay pending until it's done, and failing to comply can mean account closure.",
    ],
    pros: [
      "No ID to sign up or play",
      "Payouts in under 10 minutes in our tests",
      "Generous weekly cap: €10,000",
      "Big welcome package: 325% up to 5 BTC + 150 free spins",
    ],
    cons: [
      "Can verify you before any withdrawal, including by video call",
      "\"Total anonymity\" marketing overstates what its own terms allow",
      "Accepted coins not yet listed here",
      "Bonus terms apply; read them before opting in",
    ],
    scores: { kycSignup: 5, kycTriggers: 2, payoutSpeed: 5, termsClarity: 3 },
  },
  {
    slug: "bitstarz",
    name: "BitStarz",
    logo: "/logos/bitstarz.svg",
    affiliateUrl: "https://bzstarz2.com/bigtntdfo",
    lastChecked: CHECKED,
    payoutMinutes: PAYOUT,
    offer: { text: "Up to 5 BTC + 180 free spins welcome package", freeSpins: true },
    licence: {
      value: "Curaçao Gaming Authority, OGL/2024/165/0185 (Gareton B.V., the same operator as Cashy)",
      source: BITSTARZ_TERMS,
    },
    kyc: {
      level: "on-request",
      summary: "No ID to sign up or deposit. BitStarz can ask for ID before paying out; the terms set no amount.",
      signup: {
        value: "No ID to register or deposit. BitStarz reserves the right to verify identity (§3.3, §8.6.3).",
        source: BITSTARZ_TERMS,
      },
      withdrawal: {
        value: "If asked, you must complete KYC to get paid: without the documents, payments are blocked (§7.4).",
        source: BITSTARZ_TERMS,
      },
      triggers: {
        value: [
          "Any withdrawal (§8.7.4)",
          "Deposits (§8.6.3)",
          "USD e-wallet withdrawals (§8.7.9)",
        ],
        source: BITSTARZ_TERMS,
      },
    },
    vpnRule: {
      value: "Using a VPN to bypass a provider's block is prohibited and may lead to confiscation of winnings (§4.3).",
      source: BITSTARZ_TERMS,
    },
    restrictedCountries: { value: GARETON_RESTRICTED, source: BITSTARZ_TERMS },
    withdrawalLimits: {
      value: "No fixed cap stated; substantial wins may be paid in monthly instalments (§8.7.3)",
      source: BITSTARZ_TERMS,
    },
    verdict:
      "BitStarz lets you sign up and deposit without ID. Like its sister site Cashy, its terms let it ask for ID before paying out, with no amount stated, so treat it as KYC on request. Withdrawals landed in under 10 minutes in our tests.",
    kycInPractice: [
      "Sign-up and deposits need no documents, just an email.",
      "The terms let BitStarz verify you on deposits or on any withdrawal, and if it asks, it won't pay out until you've provided the documents: photo ID, proof of address no older than 90 days, and proof of payment. No threshold amount is given.",
    ],
    pros: [
      "No ID to sign up or deposit",
      "Payouts in under 10 minutes in our tests",
      "No fixed withdrawal cap in the terms",
      "Up to 5 BTC + 180 free spins welcome package",
    ],
    cons: [
      "Terms allow an ID check on any withdrawal, with no threshold stated",
      "Large wins may be paid in monthly instalments",
      "Terms last updated June 2025",
      "Bonus terms apply; read them before opting in",
    ],
    scores: { kycSignup: 5, kycTriggers: 2, payoutSpeed: 5, termsClarity: 3 },
  },
  // { slug: "cosmobet", name: "CosmoBet", affiliateUrl: "", lastChecked: null }, // once signed
];

export const getCasino = (slug: string) => casinos.find((c) => c.slug === slug);
