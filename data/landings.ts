import type { Block } from "@/content/types";
import type { Casino } from "@/lib/types";

/** Keyword landing pages at the site root (e.g. /best-crypto-casinos). */
export type Landing = {
  slug: string;
  title: string; // ≤ 54 chars ("{year}" is replaced; " | shh" is added)
  h1: string;
  description: string; // ≤ 155
  lead: string;
  /** Which casinos to rank on this page (default: all published). */
  filter?: (c: Casino) => boolean;
  /** Show the computed "Best for…" table. */
  bestFor?: boolean;
  /** Content shown after the ranking. */
  body: Block[];
  faq: { q: string; a: string }[];
  relatedGuides: string[];
};

export const landings: Landing[] = [
  {
    slug: "best-crypto-casinos",
    title: "Best Crypto Casinos {year}: Ranked and Tested",
    h1: "Best crypto casinos {year}",
    description:
      "The best crypto casinos ranked by privacy, payout speed and coins, with each casino's KYC rules checked against its own terms. Tested withdrawals.",
    lead:
      "These are the crypto casinos we rate highest: fast crypto payouts, little or no ID to start, and terms we've actually read. Every casino below takes crypto deposits and withdrawals, and every fact links to its source.",
    bestFor: true,
    body: [
      { type: "h2", text: "What makes a good crypto casino" },
      {
        type: "list",
        items: [
          "Fast, predictable withdrawals. The blockchain takes seconds to minutes; a good casino doesn't add days of manual review on top.",
          "Clear KYC rules. Most casinos can ask for ID at some point. The better ones tell you when, ideally with a threshold.",
          "Low-fee coins. Stablecoins on cheap networks, Litecoin and Solana make small deposits practical.",
          "A checkable licence. The licence number in the terms should appear on the regulator's own register.",
          "Readable terms. Withdrawal limits, bonus rules and VPN clauses should be easy to find.",
        ],
      },
      { type: "h2", text: "Crypto casinos vs regular online casinos" },
      {
        type: "table",
        head: ["", "Crypto casinos", "Regular online casinos"],
        rows: [
          ["Sign-up", "Email or wallet, often no ID to start", "Full ID check before you play"],
          ["Withdrawals", "Minutes, sometimes seconds", "Often 1–5 business days"],
          ["On your bank statement", "An exchange purchase", "A gambling merchant"],
          ["Licence", "Usually Curaçao, Anjouan or similar", "Often your country's regulator"],
          ["Player protection", "Weaker recourse in disputes", "Stronger local protections"],
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: crypto casinos are private, not anonymous, and they don't change where gambling is legal for you. Read each casino's country rules before you sign up.",
      },
    ],
    faq: [
      { q: "What is the best crypto casino in {year}?", a: "In our ranking, KoalaBet scores highest for privacy (no KYC until $5,000 in deposits or withdrawals), with MetaWin second and the fastest payout we've tested (about 10 seconds)." },
      { q: "Are crypto casinos legit?", a: "Many are licensed businesses with public terms. Check the licence on the regulator's own register and read the withdrawal terms before you deposit." },
      { q: "Which crypto casino pays out fastest?", a: "MetaWin's withdrawal arrived in about 10 seconds in our test; our other partners paid out in 3–5 minutes." },
      { q: "Do crypto casinos require KYC?", a: "Most don't at sign-up but keep the right to ask later. Our ranking shows exactly when each one can." },
      { q: "Which coin is best for crypto casino deposits?", a: "Usually a stablecoin on a low-fee network, Litecoin or Solana, depending on what the casino supports." },
    ],
    relatedGuides: ["how-to-buy-crypto", "how-to-deposit-crypto", "is-crypto-gambling-anonymous"],
  },
  {
    slug: "anonymous-casinos",
    title: "Anonymous Crypto Casinos {year}: What's Possible",
    h1: "Anonymous crypto casinos: the most private options in {year}",
    description:
      "No casino is fully anonymous, but some get close: wallet sign-up, no ID to start, clear KYC thresholds. The most private crypto casinos, ranked honestly.",
    lead:
      "Short answer: no licensed casino is fully anonymous. But some let you play with nothing more than a crypto wallet or an email, and only ask for ID in narrow cases. These are the most private crypto casinos we've checked, and exactly where each one draws the line.",
    body: [
      { type: "h2", text: "Levels of privacy at crypto casinos" },
      {
        type: "table",
        head: ["Level", "What you give the casino", "Examples on our list"],
        rows: [
          ["Wallet sign-up", "A public wallet address, no form", "MetaWin, Cashy"],
          ["Email only", "An email address", "Most no-KYC casinos"],
          ["ID above a threshold", "ID only past a stated amount", "KoalaBet ($5,000), 7Bit (0.03 BTC)"],
          ["ID on request", "ID whenever the casino decides", "Mirax, BitStarz"],
          ["Full KYC", "ID before you play", "Not on our list"],
        ],
      },
      { type: "h2", text: "Private casino vs anonymous casino" },
      {
        type: "p",
        text: "A private casino keeps your identity off its own systems: no ID uploads, no bank card, nothing on your bank statement but an exchange purchase. An anonymous casino would mean nobody could link the activity to you at all, which isn't possible when you bought your crypto on a verified exchange and the blockchain is public.",
      },
      { type: "h2", text: "How to play as privately as possible" },
      {
        type: "list",
        ordered: true,
        items: [
          "Choose a casino with wallet sign-up or a clear KYC threshold.",
          "Use a separate self-custody wallet just for gambling.",
          "Use a separate email address, and app-based two-factor authentication.",
          "Use a VPN for general privacy on networks you don't control.",
          "Keep your own records for tax, because privacy from data brokers isn't privacy from the tax office.",
        ],
      },
      {
        type: "caveat",
        text: "VPN notice: A VPN protects your privacy online, but it doesn't change where you're allowed to gamble. Most casinos' terms forbid using a VPN to access them from a restricted country, and they can close the account and keep the winnings if they detect it. Only play where online gambling is legal for you.",
      },
    ],
    faq: [
      { q: "Are there anonymous online casinos?", a: "Not fully. The closest are crypto casinos with wallet sign-up and no ID to start, like MetaWin. Your exchange still knows who bought the crypto." },
      { q: "Can I gamble with crypto without ID?", a: "Yes, at many crypto casinos, up to a point. KoalaBet asks for nothing until $5,000 in deposits or withdrawals; others can ask at their discretion." },
      { q: "What is a private casino?", a: "A casino that keeps your identity off its own systems: no ID uploads to start and crypto payments instead of cards." },
      { q: "Is anonymous gambling legal?", a: "Using crypto and privacy tools is legal in most places, but online gambling itself is only legal where your local law allows it." },
    ],
    relatedGuides: ["is-crypto-gambling-anonymous", "private-browsing-setup", "metawin-kyc"],
  },
];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);
export const withYear = (s: string) => s.replaceAll("{year}", String(new Date().getFullYear()));
