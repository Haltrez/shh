import type { Guide } from "./types";

export const privacyGuides: Guide[] = [
  {
    slug: "is-crypto-gambling-anonymous",
    title: "Is Crypto Gambling Anonymous? The Honest Answer",
    h1: "Is crypto gambling anonymous?",
    description:
      "No. It's private, not anonymous. What a no-KYC casino does and doesn't hide, what the blockchain shows, and the habits that genuinely help.",
    updated: "2026-11-17",
    category: "Privacy",
    relatedGuides: ["what-is-kyc-at-casinos", "crypto-wallet-for-gambling", "private-browsing-setup"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "No. Crypto gambling can be private, but it isn't anonymous. A no-KYC casino means the casino doesn't hold your ID. It doesn't mean nobody can connect you to your deposits.",
      },
      { type: "h2", text: "What a no-KYC casino does keep private" },
      {
        type: "list",
        items: [
          "Your ID documents aren't stored in the casino's database, so a casino data breach can't leak them.",
          "Your bank statement shows a crypto exchange purchase, not a casino payment.",
          "Your bank's gambling blocks and card-merchant codes aren't involved.",
        ],
      },
      { type: "h2", text: "What isn't private" },
      {
        type: "list",
        items: [
          "The exchange you bought from has your ID and knows which addresses you withdrew to.",
          "Blockchains like Bitcoin, Ethereum, Tron and Solana are public. Anyone can follow funds from address to address.",
          "Analytics firms label known casino and exchange addresses. Exchanges use them to screen incoming funds.",
          "The casino sees your IP address, device, and email, and can still ask for ID later under its terms.",
          "Tax authorities in many countries can request records from exchanges.",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: any site that promises \"100% anonymous\" or \"untraceable\" crypto gambling is wrong or lying. Treat that claim as a red flag about everything else it says.",
      },
      { type: "h2", text: "Privacy habits that genuinely help" },
      {
        type: "list",
        items: [
          "Use a separate wallet for gambling, funded from one exchange. Cleaner records, smaller blast radius.",
          "Use a fresh receiving address for withdrawals where your wallet supports it.",
          "Use a separate email address for casino accounts.",
          "Turn on two-factor authentication everywhere: exchange, wallet, casino, email.",
          "Keep your own records of deposits and withdrawals. Privacy from data brokers isn't privacy from the taxman, and good records protect you.",
        ],
      },
      { type: "h2", text: "So who is this privacy for?" },
      {
        type: "p",
        text: "It's for keeping gambling out of marketing databases, data-broker profiles, and casino breach dumps, and off a shared bank statement. It isn't for hiding from the law, and it doesn't change where you're legally allowed to play.",
      },
    ],
    faq: [
      { q: "Do crypto casinos report to my bank?", a: "Casinos don't usually have a relationship with your bank at all. Your bank sees the exchange purchase, not the casino. The exchange, however, keeps full records." },
      { q: "Can a crypto casino deposit be traced to me?", a: "Yes, if someone links your wallet to your exchange account, which exchanges and authorities can do. The blockchain itself is public." },
      { q: "Does a VPN make crypto gambling anonymous?", a: "No. A VPN hides your browsing from your network and ISP. It doesn't change what's on the blockchain or what the exchange knows, and using one to get around a casino's country rules usually breaks its terms." },
      { q: "Are privacy coins the answer?", a: "Few casinos accept them, many exchanges have delisted them, and they don't change your legal obligations. We don't recommend building a plan around them." },
    ],
  },
  {
    slug: "what-is-kyc-at-casinos",
    title: "What Is KYC at Casinos? When ID Can Still Be Asked",
    h1: "What is KYC at a casino, and when can a no-KYC casino still ask?",
    description:
      "KYC means Know Your Customer: ID checks. What 'no KYC' really means, the triggers that bring checks back, and how to read the terms before you deposit.",
    updated: "2026-11-17",
    category: "Casino know-how",
    relatedGuides: ["how-to-withdraw-crypto", "is-crypto-gambling-anonymous", "crypto-gambling-taxes"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "KYC (Know Your Customer) is the process of proving who you are: ID, a selfie, sometimes proof of address. A \"no-KYC\" casino lets you sign up and play without it, but nearly all of them keep the right to ask later.",
      },
      { type: "h2", text: "The four levels we use" },
      {
        type: "table",
        head: ["Badge", "Means"],
        rows: [
          ["No KYC", "No ID at sign-up and none for normal withdrawals. The terms still allow checks in specific cases, which we list."],
          ["KYC on request", "No ID at sign-up, but the terms set thresholds or triggers where ID is routinely requested."],
          ["KYC at first withdrawal", "No ID to sign up or deposit, but ID before your first cash-out."],
          ["Full KYC", "ID required before you can play."],
        ],
      },
      { type: "h2", text: "Common triggers" },
      {
        type: "list",
        items: [
          "Withdrawals above a set amount, per transaction or in total.",
          "Anti-money-laundering (AML) checks, which the casino's licence obliges it to run.",
          "Source-of-funds or source-of-wealth requests on large balances.",
          "Suspected duplicate accounts, bonus abuse, or play from a restricted country.",
          "A request from the licensing authority or a payment partner.",
        ],
      },
      { type: "h2", text: "How to read a casino's terms in five minutes" },
      {
        type: "list",
        ordered: true,
        items: [
          "Search the terms page for \"verification\", \"KYC\", \"documents\" and \"identity\".",
          "Search for \"VPN\" and \"restricted\" to see the country rules.",
          "Look for withdrawal limits and any amount that mentions verification.",
          "Check the bonus terms for anything that blocks withdrawals.",
          "Note the date. Terms change, so screenshot the parts that matter to you.",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: if a casino asks for ID and you refuse, it can usually hold or refuse the withdrawal under its terms. Decide whether you'd provide ID before you deposit, not after you win.",
      },
    ],
    faq: [
      { q: "Why do no-KYC casinos ask for ID at all?", a: "Their licence and payment partners require anti-money-laundering checks. 'No KYC' describes the default, not a promise that you'll never be asked." },
      { q: "Is a no-KYC casino legal?", a: "That depends on the casino's licence and on the law where you live. Only play where online gambling is legal for you." },
      { q: "What documents do casinos usually ask for?", a: "Typically a photo ID, a selfie, and sometimes proof of address or source of funds. Our reviews list what each casino's terms mention." },
      { q: "Can I get verified in advance?", a: "Some casinos let you verify voluntarily, which can speed up a large withdrawal later." },
    ],
  },
  {
    slug: "provably-fair-explained",
    title: "Provably Fair Explained: How to Check a Crypto Game",
    h1: "Provably fair, explained",
    description:
      "How server seeds, client seeds and nonces let you check a game result yourself, what provably fair proves, and what it doesn't.",
    updated: "2026-11-17",
    category: "Casino know-how",
    relatedGuides: ["what-is-kyc-at-casinos", "is-crypto-gambling-anonymous", "how-to-deposit-crypto"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "Provably fair is a way for a casino to prove it didn't change a game's outcome after you placed your bet. You can check each result yourself with a hash. It proves the result wasn't tampered with. It doesn't make the game's odds any better.",
      },
      { type: "h2", text: "How it works" },
      {
        type: "steps",
        steps: [
          { name: "The casino commits", need: "Nothing from you", text: "Before you play, the casino picks a secret server seed and shows you its hash: a fingerprint that can't be reversed but will change if the seed changes." },
          { name: "You add randomness", need: "A client seed (often editable)", text: "Your browser supplies a client seed. You can usually set it yourself. Each bet also has a counter called a nonce." },
          { name: "The result is calculated", need: "Server seed + client seed + nonce", text: "The game combines the three to produce the outcome. The casino can't predict your client seed, and you can't see the server seed yet." },
          { name: "The casino reveals the seed", need: "Rotate or reveal the seed in game settings", text: "When you rotate seeds, the casino shows the old server seed. Hash it yourself and check it matches the hash you were shown at the start." },
          { name: "You verify", need: "A verifier tool or a few lines of code", text: "Re-run the calculation with the revealed seeds and nonce. If your result matches the game's, it wasn't altered." },
        ],
      },
      { type: "h2", text: "What provably fair doesn't tell you" },
      {
        type: "list",
        items: [
          "The house edge. A provably fair game still has one, and it's set by the game's rules.",
          "Anything about third-party slots. Most slots and live games use certified RNGs instead, which are audited, not provable by you.",
          "Whether the casino pays out. That's about its terms, licence and record, which our reviews cover.",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: \"provably fair\" is about honesty of each result, not your chances. Over time, the house edge wins.",
      },
    ],
    faq: [
      { q: "Are all crypto casino games provably fair?", a: "No. Usually only the casino's own 'originals' (dice, crash, plinko, mines). Third-party slots use audited random number generators." },
      { q: "Do I need to code to verify?", a: "No. Most casinos provide a verifier page, and independent verifiers exist. Coding it yourself is the most trustworthy option." },
      { q: "Why change my client seed?", a: "It guarantees the casino couldn't have pre-computed outcomes for a seed it chose." },
      { q: "Does provably fair mean I'll win?", a: "No. It only means the result wasn't changed after the bet." },
    ],
  },
  {
    slug: "crypto-gambling-taxes",
    title: "Crypto Gambling Taxes: What to Check in Your Country",
    h1: "Crypto gambling and tax: what to check",
    description:
      "Gambling winnings and crypto disposals can be taxed differently depending on where you live. The questions to ask, and the records to keep.",
    updated: "2026-11-17",
    category: "Money",
    relatedGuides: ["is-crypto-gambling-anonymous", "how-to-withdraw-crypto", "crypto-wallet-for-gambling"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "This isn't tax advice. Rules differ a lot by country. What's true almost everywhere: using crypto can create a tax event on its own, separate from whether gambling winnings are taxed. Keep records, and check with a local adviser or your tax authority's guidance.",
      },
      { type: "h2", text: "Two separate questions" },
      {
        type: "list",
        ordered: true,
        items: [
          "Are gambling winnings taxable where you live? Some countries tax them as income; others don't tax them at all; some tax only certain kinds of gambling.",
          "Is spending or selling crypto taxable? In many countries, swapping, spending or selling crypto counts as a disposal and can trigger capital gains tax, including when you deposit it at a casino or cash out winnings.",
        ],
      },
      { type: "h2", text: "Records to keep" },
      {
        type: "list",
        items: [
          "Every purchase: date, coin, amount, price, exchange.",
          "Every deposit and withdrawal: date, amount, transaction ID, casino.",
          "Every sale back to money: date, amount, price.",
          "Exports from your exchange account (most offer CSV downloads).",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: a no-KYC casino doesn't change your tax position. Exchanges keep records and, in many countries, share them with tax authorities.",
      },
      { type: "h2", text: "Why a separate gambling wallet helps" },
      {
        type: "p",
        text: "If one wallet only ever sends to and receives from casinos, your gambling history is a single, clean list of transactions. Mixed wallets turn tax season into forensic accounting.",
      },
    ],
    faq: [
      { q: "Are crypto gambling winnings taxed?", a: "It depends on your country. Check your tax authority's guidance on both gambling winnings and crypto disposals." },
      { q: "Is depositing crypto at a casino a taxable event?", a: "In many countries, spending crypto counts as a disposal, which can be taxable if its value rose since you bought it." },
      { q: "Do I need records if I lost money?", a: "Yes. Losses can matter for crypto capital gains calculations, and records protect you if you're ever asked." },
      { q: "Can tax authorities see my crypto?", a: "Many can request data from exchanges, and blockchains are public. Assume your activity can be reconstructed." },
    ],
  },
  {
    slug: "vpn-and-crypto-privacy",
    title: "VPNs and Crypto Privacy: What a VPN Actually Protects",
    h1: "VPNs and crypto privacy: what a VPN does and doesn't protect",
    description:
      "A VPN hides your browsing from your network and ISP and protects logins on public Wi-Fi. It doesn't change the blockchain or where you can legally gamble.",
    updated: "2026-11-17",
    category: "Privacy",
    relatedGuides: ["private-browsing-setup", "is-crypto-gambling-anonymous", "crypto-wallet-for-gambling"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "A VPN encrypts your traffic between your device and the VPN server. That hides what sites you visit from your ISP, your employer's network, or the café Wi-Fi. It's useful for protecting exchange and wallet logins. It does nothing for what's recorded on a blockchain.",
      },
      { type: "h2", text: "Where a VPN genuinely helps" },
      {
        type: "list",
        items: [
          "Logging into an exchange or wallet on hotel, airport or café Wi-Fi.",
          "Keeping your browsing history away from your ISP and anyone on your local network.",
          "Reducing how easily ad networks tie your IP address to your activity.",
        ],
      },
      { type: "h2", text: "Where it doesn't" },
      {
        type: "list",
        items: [
          "Blockchain transactions are public whatever network you use.",
          "The exchange still has your ID.",
          "It doesn't change where you're allowed to gamble.",
        ],
      },
      {
        type: "caveat",
        text: "VPN notice: A VPN protects your privacy online, but it doesn't change where you're allowed to gamble. Most casinos' terms forbid using a VPN to access them from a restricted country, and they can close the account and keep the winnings if they detect it. Only play where online gambling is legal for you.",
      },
      { type: "h2", text: "What to look for in a VPN" },
      {
        type: "list",
        items: [
          "An independent no-logs audit, published and recent.",
          "A jurisdiction you're comfortable with.",
          "A kill switch, so traffic stops if the VPN drops.",
          "Payment options you're comfortable with. Some accept crypto.",
          "Clear pricing without auto-renewal surprises.",
        ],
      },
    ],
    faq: [
      { q: "Do I need a VPN to buy crypto?", a: "No. It's useful on public Wi-Fi, but a reputable exchange over HTTPS on your home network is fine." },
      { q: "Can I pay for a VPN with crypto?", a: "Several providers accept it. It keeps the subscription off your card statement, though the provider still sees your account." },
      { q: "Will a VPN hide my casino deposits?", a: "No. Deposits are blockchain transactions, which are public regardless of your connection." },
      { q: "Is using a VPN legal?", a: "In most countries, yes. Using one to break a service's terms, such as a casino's country rules, is a different matter." },
    ],
  },
  {
    slug: "private-browsing-setup",
    title: "Private Browsing Setup: A Practical Privacy Stack",
    h1: "A practical privacy stack for crypto",
    description:
      "Browser, separate email, 2FA, wallet habits and VPN on public Wi-Fi. A simple setup that keeps your crypto activity out of data-broker profiles.",
    updated: "2026-11-17",
    category: "Privacy",
    howTo: true,
    relatedGuides: ["vpn-and-crypto-privacy", "is-crypto-gambling-anonymous", "crypto-wallet-for-gambling"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "Privacy is a set of small habits, not one tool. This setup takes an evening and covers the things that leak most: email, browser tracking, weak logins, and reused addresses.",
      },
      {
        type: "steps",
        steps: [
          { name: "Use a separate browser profile", need: "A privacy-respecting browser", text: "Create a profile used only for crypto and casino accounts. Block third-party cookies and trackers. Don't sign in to your main social or shopping accounts in it." },
          { name: "Make a separate email", need: "An email provider you trust", text: "Use a dedicated address for exchanges, wallets and casinos. It keeps marketing and breach exposure away from your main inbox." },
          { name: "Turn on app-based 2FA", need: "An authenticator app or hardware key", text: "Use an authenticator app or security key rather than SMS, which can be hijacked through SIM swaps. Back up your recovery codes offline." },
          { name: "Set up a dedicated wallet", need: "A self-custody wallet", text: "Keep gambling funds in their own wallet. Use fresh receiving addresses where your wallet supports it." },
          { name: "Use a VPN on networks you don't control", need: "A VPN with a kill switch", text: "Switch it on for public Wi-Fi when you log into exchanges or wallets." },
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: none of this makes you anonymous, and none of it changes where you can legally gamble. It reduces how much of your life ends up in other people's databases.",
      },
    ],
    faq: [
      { q: "Is incognito mode enough?", a: "No. It stops your own browser saving history but doesn't block tracking or hide traffic from your network." },
      { q: "Why not SMS 2FA?", a: "Attackers can move your number to their SIM. App-based codes or a hardware key avoid that." },
      { q: "Do I need all five steps?", a: "The separate email and 2FA matter most. Add the rest as you go." },
      { q: "Does this help with taxes?", a: "Indirectly: a dedicated wallet and email make your records far easier to pull together." },
    ],
  },
];
