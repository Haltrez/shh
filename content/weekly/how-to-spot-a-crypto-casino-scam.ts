import type { Guide } from "../types";

export const guide: Guide = {
  slug: "how-to-spot-a-crypto-casino-scam",
  title: "How to Spot a Crypto Casino Scam: 9 Red Flags",
  h1: "How to spot a crypto casino scam",
  description:
    "Fake licences, \"pay a fee to withdraw\", clone sites and Telegram impersonators. Nine red flags that a crypto casino or someone using its name is a scam.",
  updated: "2026-12-10",
  publishAt: "2026-12-10",
  category: "Privacy",
  relatedGuides: ["crypto-casino-licensing-shift-2026", "sent-crypto-wrong-network", "seed-phrase-safety"],
  relatedReviews: [],
  body: [
    {
      type: "p",
      text: "The most reliable sign of a scam is being asked to pay before you can withdraw. Legitimate casinos deduct fees from the withdrawal itself; scams invent a \"tax\", \"verification fee\" or \"unlock deposit\" that you must send first, and then another, and another.",
    },
    { type: "h2", text: "Nine red flags" },
    {
      type: "list",
      ordered: true,
      items: [
        "You must pay to withdraw: a fee, tax or \"anti-money-laundering deposit\" sent before payout.",
        "No checkable licence: no licence number in the terms, or a number that isn't on the regulator's own register.",
        "A seal that only links to the casino's own page, or to a look-alike regulator site.",
        "Withdrawals that are always \"processing\", with new excuses each time.",
        "Bonuses that are too good: huge no-deposit bonuses that can only be cashed out after a payment.",
        "Contact through Telegram or WhatsApp from \"support agents\" or \"VIP managers\" you didn't contact first.",
        "A domain that's almost right: an extra letter, a different ending, or a link from an ad or DM.",
        "Requests for your seed phrase or private key, for any reason.",
        "No terms and conditions, or terms copied from another site with the name swapped.",
      ],
    },
    {
      type: "caveat",
      text: "Heads-up: \"recovery services\" that promise to get your money back from a scam are almost always a second scam. Report the scam to the platform where you found it and to your local police or fraud authority instead.",
    },
    { type: "h2", text: "How to check a casino in five minutes" },
    {
      type: "steps",
      steps: [
        { name: "Type the address yourself", need: "The casino's real domain", text: "Don't follow links from ads, DMs or comments. Bookmark the real site once you've found it." },
        { name: "Find the licence in the terms", need: "The terms and conditions page", text: "Note the regulator, company name and licence number." },
        { name: "Check the regulator's register", need: "The regulator's own website", text: "Search for the licence number and check the company and domain match." },
        { name: "Read the withdrawal section", need: "The terms", text: "Look for limits, fees and KYC triggers. Fees should come out of withdrawals, not be paid in advance." },
        { name: "Test small", need: "A small deposit", text: "Deposit a little, play briefly, and withdraw before you commit more." },
      ],
    },
    { type: "h2", text: "Impersonators of real casinos" },
    {
      type: "p",
      text: "Scammers also pretend to be well-known casinos: fake support accounts, clone sites and \"exclusive bonus\" DMs. Real casino support won't message you first, won't ask for your seed phrase, and won't ask you to send crypto to unlock anything.",
    },
  ],
  faq: [
    { q: "How do I know if a crypto casino is legit?", a: "Check that its licence number appears on the regulator's own register with matching company details, read its withdrawal terms, and test with a small deposit and withdrawal first." },
    { q: "Is paying a fee to withdraw normal?", a: "Fees deducted from a withdrawal can be normal. Being asked to send money before you can withdraw is a classic scam." },
    { q: "Can scammed crypto be recovered?", a: "Rarely. Report it to the platform and to your local police or fraud authority, and ignore anyone offering paid recovery." },
    { q: "Do real casinos contact you on Telegram?", a: "Not usually first. Treat unsolicited messages from \"support\" or \"VIP managers\" as suspicious." },
  ],
};
