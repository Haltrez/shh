import type { Guide } from "../types";

export const guide: Guide = {
  slug: "crypto-casino-data-breaches",
  title: "Casino Data Breaches: What Leaked and How to Stay Safe",
  h1: "Casino data breaches: what leaked, and how to protect your ID",
  description:
    "Passport scans and selfies have leaked from casinos and a regulator. What recent breaches exposed, and how to keep your ID out of the next one.",
  updated: "2026-12-17",
  publishAt: "2026-12-17",
  category: "Trends & news",
  relatedGuides: ["no-kyc-casino-trends-2026", "is-crypto-gambling-anonymous", "what-is-kyc-at-casinos"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "Every ID document you upload to a casino is a document that can leak. Recent incidents exposed passport and licence scans, selfies and proof-of-address documents, sometimes through the casino's software suppliers rather than the casino itself. The best protection is uploading as little as possible, to as few places as possible.",
    },
    { type: "h2", text: "What leaked" },
    {
      type: "table",
      head: ["Incident", "What was reported"],
      rows: [
        ["Shuffle (crypto casino), October 2025", "Breach through a third-party CRM provider; reports say KYC files including passport and driving licence scans were taken"],
        ["Merkur (German operator), 2025", "A flaw in a verification integration exposed more than 70,000 ID photos, selfies and address documents, per the researcher who found it"],
        ["Curaçao Gaming Authority", "A researcher accessed the regulator's licensee portal and downloaded documents on operators' owners; the portal was taken offline"],
      ],
      note: "Details as reported by the sources below. Numbers come from researchers and reporters, not always the companies involved.",
    },
    { type: "h2", text: "The pattern: suppliers leak, not just casinos" },
    {
      type: "p",
      text: "Two of the three incidents came through third parties: a marketing CRM and an identity-verification integration. When you upload ID, it often passes through several companies you've never heard of. Each one is another place it can leak from.",
    },
    { type: "h2", text: "How to protect yourself" },
    {
      type: "list",
      ordered: true,
      items: [
        "Prefer casinos that don't ask for ID up front, or have a clear threshold, so you only verify if you have to.",
        "Use a separate email address for gambling accounts.",
        "Use unique passwords and app-based two-factor authentication.",
        "If you must upload ID, watermark the copy with the casino's name and date where the casino accepts it.",
        "Watch for phishing that uses leaked details: messages that know your name and casino but ask you to \"re-verify\".",
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: a no-KYC casino reduces how many places hold your ID, but your exchange still has it. Privacy is about reducing exposure, not reaching zero.",
    },
    { type: "h2", text: "What this means for casino players" },
    {
      type: "p",
      text: "Data minimisation is the strongest argument for no-KYC and low-KYC casinos: a document you never uploaded can't be stolen from a casino. Choose casinos whose KYC rules you understand before you deposit, and treat any unexpected verification request with suspicion until you've confirmed it in your account.",
    },
  ],
  faq: [
    { q: "Have crypto casinos leaked ID documents?", a: "Yes. In October 2025, Shuffle confirmed a breach through a third-party CRM in which KYC files were reportedly taken." },
    { q: "How can I protect my ID when gambling online?", a: "Upload ID only when required, use a separate email, enable app-based 2FA, and prefer casinos that verify only above a clear threshold." },
    { q: "What should I do if my casino had a breach?", a: "Change your password, enable 2FA, watch for phishing using your details, and consider fraud alerts with your bank or credit agency." },
    { q: "Are no-KYC casinos safer for data?", a: "They hold less of it. If a casino never had your ID, it can't leak it, though your exchange still holds your identity." },
  ],
  sources: [
    { name: "Brave New Coin: Shuffle data breach via third-party CRM", url: "https://bravenewcoin.com/insights/shuffle-data-breach-major-crypto-casino-hit-by-third-party-crm-attack" },
    { name: "Beyond Machines: Merkur Group casino data breach", url: "https://beyondmachines.net/event_details/merkur-group-casino-data-breach-exposes-information-of-over-800000-users-x-d-4-f-7" },
    { name: "iGaming Expert: Curaçao Gaming Authority after data breach", url: "https://igamingexpert.com/news/regulation/curacao-damage-limitation-mode-data-breach/" },
    { name: "iGaming Business: Player data leaks, inside iGaming's cyber crisis", url: "https://igamingbusiness.com/tech-innovation/player-data-leaks-inside-igamings-cyber-crisis" },
  ],
};
