import type { Guide } from "./types";

export const cryptoGuides: Guide[] = [
  {
    slug: "how-to-buy-crypto",
    title: "How to Buy Crypto for Casino Deposits (Step by Step)",
    h1: "How to buy crypto for casino deposits",
    description:
      "Buy on a regulated exchange, move it to your own wallet, then deposit. Which coin to pick, what ID the exchange asks for, and the mistakes to avoid.",
    updated: "2026-11-17",
    category: "Crypto basics",
    howTo: true,
    relatedGuides: ["cheapest-coin-to-deposit", "crypto-wallet-for-gambling", "how-to-deposit-crypto"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "Short version: buy a low-fee coin on a regulated exchange, send it to a wallet you control, then deposit from that wallet. The exchange will ask for your ID. That's the exchange's rule, not the casino's.",
      },
      {
        type: "steps",
        steps: [
          {
            name: "Pick a coin",
            need: "The casino's cashier page open in another tab",
            text: "Check which coins and networks the casino accepts. For small and medium deposits, Litecoin or a stablecoin (USDT, USDC) on a low-fee network usually costs least. Use Bitcoin if the casino favours it or you're moving larger amounts.",
          },
          {
            name: "Open an account on a regulated exchange",
            need: "Photo ID, a selfie, sometimes proof of address",
            text: "Regulated exchanges and broker apps must verify who you are. Expect an ID upload and a selfie check. This is normal and doesn't tell the casino anything.",
          },
          {
            name: "Buy the coin",
            need: "Bank transfer or card",
            text: "Bank transfers are usually cheaper than cards. Buy a little more than you plan to deposit, because the network fee for withdrawing comes out of your balance.",
          },
          {
            name: "Withdraw to your own wallet",
            need: "A self-custody wallet that supports the coin and network",
            text: "Send the coin from the exchange to your own wallet. Pick the same network you'll use for the casino deposit. If it's your first time, send a small test amount first.",
          },
          {
            name: "Deposit at the casino",
            need: "The casino's deposit address for that exact coin and network",
            text: "Follow our deposit guide: copy the address, match coin and network, send a test amount, then the rest.",
          },
        ],
      },
      { type: "h2", text: "Why not deposit straight from the exchange?" },
      {
        type: "p",
        text: "You can, but there are three reasons not to. Many exchanges' terms restrict or flag transfers to gambling sites. Casino deposit addresses can change, and some exchanges can't send to every network. And if a withdrawal comes back, you want it landing in a wallet you control, not one that can freeze it while it asks questions.",
      },
      { type: "h2", text: "Other ways people buy crypto" },
      {
        type: "list",
        items: [
          "Card purchase inside a wallet app: convenient, but the provider behind it still verifies your ID, and fees are usually higher than an exchange.",
          "Peer-to-peer (P2P) marketplaces: you buy from another person. Prices can be worse, and scams are common: payment reversals, fake receipts, people asking you to move the chat off-platform. Only use a marketplace with escrow, and never release funds before the payment has cleared.",
          "Crypto ATMs: easy, but fees are high and most now ask for ID above small amounts.",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: buying crypto doesn't make it private. The exchange links your ID to the addresses you withdraw to. Read our guide on whether crypto gambling is anonymous before you assume otherwise.",
      },
      { type: "h2", text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Wrong network. USDT on ERC20 and USDT on TRC20 are different. Send on the wrong one and the deposit may never arrive.",
          "Below the minimum. Deposits under the casino's minimum are often not credited.",
          "Fees on small amounts. A $3 network fee on a $15 deposit costs you 20%. Choose a cheaper coin for small deposits.",
          "Forgetting the withdrawal fee. Exchanges charge to send. Check the fee before you buy the exact amount.",
        ],
      },
    ],
    faq: [
      { q: "Do I need ID to buy crypto?", a: "On a regulated exchange, yes. That's the exchange's legal requirement. It's separate from whether the casino asks for ID." },
      { q: "What's the cheapest coin to buy for a casino deposit?", a: "Usually Litecoin or a stablecoin on a low-fee network. It depends on what the casino accepts. See our fee comparison." },
      { q: "How long does buying crypto take?", a: "Account verification can take minutes to a day. Once you're verified, buying is near-instant. Bank transfers can take longer to arrive." },
      { q: "Can I buy crypto with a credit card?", a: "Many exchanges allow it, but fees are higher and some banks treat it as a cash advance. A bank transfer is usually cheaper." },
    ],
  },
  {
    slug: "crypto-wallet-for-gambling",
    title: "Best Crypto Wallet for Gambling: What to Look For",
    h1: "Choosing a crypto wallet for casino deposits",
    description:
      "Self-custody vs exchange wallets, which networks your wallet must support, seed phrase safety, and why a separate gambling wallet keeps records clean.",
    updated: "2026-11-17",
    category: "Crypto basics",
    relatedGuides: ["how-to-buy-crypto", "how-to-deposit-crypto", "is-crypto-gambling-anonymous"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "Use a self-custody wallet: one where you hold the seed phrase. Make sure it supports the exact networks your casino uses, and keep it separate from your savings.",
      },
      { type: "h2", text: "Self-custody vs exchange wallet" },
      {
        type: "table",
        head: ["", "Self-custody wallet", "Exchange wallet"],
        rows: [
          ["Who holds the keys", "You (seed phrase)", "The exchange"],
          ["Can it be frozen", "No, not by the wallet app", "Yes, under exchange rules"],
          ["Gambling transfers", "Your choice", "Often restricted or flagged"],
          ["If you lose access", "Seed phrase restores it; lose that and funds are gone", "Account recovery through support"],
        ],
      },
      { type: "h2", text: "What the wallet needs" },
      {
        type: "list",
        items: [
          "Support for your coin and network: for example TRC20 for USDT on Tron, Solana for SOL/USDC, Litecoin's own network for LTC.",
          "Clear network selection on the send screen, so you can't send on the wrong chain by accident.",
          "Network fee shown before you confirm.",
          "Address book or labels, so you can tell your deposit addresses apart.",
          "For Tron (TRC20): a small TRX balance to pay network fees. USDT alone isn't enough to send.",
        ],
      },
      { type: "h2", text: "Seed phrase safety" },
      {
        type: "list",
        items: [
          "Write it down on paper. Don't screenshot it, email it, or store it in cloud notes.",
          "Nobody legitimate will ever ask for it, including casino support, wallet support, or anyone in a chat.",
          "Store it somewhere you'd keep a passport.",
          "If you suspect someone has seen it, make a new wallet and move the funds.",
        ],
      },
      { type: "h2", text: "Why use a separate wallet just for gambling" },
      {
        type: "p",
        text: "One wallet for gambling, another for everything else. You'll see exactly what went in and out, which makes budgeting honest and tax records easier. It also means a casino or a scam link never touches your main holdings.",
      },
      {
        type: "caveat",
        text: "Heads-up: a separate wallet keeps your records tidy. It doesn't make you anonymous. If you funded it from an exchange, that link is on the blockchain.",
      },
    ],
    faq: [
      { q: "Do I need a hardware wallet for gambling?", a: "Not for small, active balances. A reputable mobile wallet is fine. Keep larger savings in a hardware wallet, separate from gambling funds." },
      { q: "Why does my USDT on Tron fail to send?", a: "Tron network fees are paid in TRX (or 'energy'). Keep a little TRX in the wallet." },
      { q: "Can I use one wallet for several casinos?", a: "Yes. Label each casino's deposit address so you don't mix them up." },
      { q: "Is a browser extension wallet safe?", a: "It can be, but extensions are a common phishing target. Install from the official source only and double-check every site you connect to." },
    ],
  },
  {
    slug: "how-to-deposit-crypto",
    title: "How to Deposit Crypto at a Casino (Step by Step)",
    h1: "How to deposit crypto at a casino",
    description:
      "Copy the address, match coin and network, send a test amount, wait for confirmations. The five steps that stop a deposit going missing.",
    updated: "2026-11-17",
    category: "Casino know-how",
    howTo: true,
    relatedGuides: ["usdt-trc20-vs-erc20", "cheapest-coin-to-deposit", "how-to-withdraw-crypto"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "Most lost deposits come down to one thing: the wrong network. Match the coin and the network exactly, send a small test first, and you'll avoid nearly every problem.",
      },
      {
        type: "steps",
        steps: [
          {
            name: "Open the casino's deposit page",
            need: "A casino account and its cashier",
            text: "Choose the coin. If the casino offers several networks for it (USDT is the usual one), choose the network too. The address shown is only valid for that coin on that network.",
          },
          {
            name: "Copy the deposit address",
            need: "The copy button, not manual typing",
            text: "Use the copy button or scan the QR code. Paste it into your wallet and check the first and last few characters against the casino page. Some clipboard malware swaps addresses.",
          },
          {
            name: "Match coin and network in your wallet",
            need: "A wallet that supports the same network",
            text: "On your wallet's send screen, pick the same network the casino showed. If the wallet doesn't offer that network, don't send. Use another coin or another wallet. If the casino asks for a memo or tag (some XRP and other deposits do), include it exactly.",
          },
          {
            name: "Send a small test amount",
            need: "A little above the casino's minimum deposit",
            text: "Send a small amount that's still over the minimum. Wait until it's credited. Then send the rest. The extra fee is cheap insurance.",
          },
          {
            name: "Wait for confirmations",
            need: "A few minutes, longer for Bitcoin",
            text: "The casino credits the deposit after a set number of network confirmations. Fast networks take seconds to minutes; Bitcoin can take 10–30 minutes or more when busy. Your wallet's transaction link lets you track it.",
          },
        ],
      },
      { type: "h2", text: "If the deposit doesn't show up" },
      {
        type: "list",
        ordered: true,
        items: [
          "Look up the transaction on a block explorer using the link in your wallet. Check it's confirmed and went to the right address.",
          "Check the network matches what the casino showed.",
          "Check the amount was above the minimum deposit.",
          "Contact casino support with the transaction ID (hash). Never share your seed phrase. Support will never need it.",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: deposit addresses can change. Copy a fresh one from the cashier each time rather than reusing an old one from your wallet history.",
      },
    ],
    faq: [
      { q: "How long does a crypto casino deposit take?", a: "From seconds to around half an hour, depending on the network and how many confirmations the casino wants. Bitcoin is usually the slowest." },
      { q: "What if I sent the wrong coin or network?", a: "Contact support right away with the transaction ID. Recovery is sometimes possible but is at the casino's discretion and may cost a fee." },
      { q: "Do I need a memo or tag?", a: "Only if the casino's deposit page shows one. If it does, the deposit won't be matched to your account without it." },
      { q: "Can I deposit from an exchange?", a: "Technically yes, but many exchanges restrict gambling transfers. Sending from your own wallet is more reliable." },
    ],
  },
  {
    slug: "how-to-withdraw-crypto",
    title: "How to Withdraw Crypto From a Casino",
    h1: "How to withdraw crypto from a casino",
    description:
      "Choose the network, check minimums and fees, know what can trigger an ID check, and withdraw to your own wallet first. What to expect at each step.",
    updated: "2026-11-17",
    category: "Casino know-how",
    howTo: true,
    relatedGuides: ["what-is-kyc-at-casinos", "how-to-deposit-crypto", "crypto-gambling-taxes"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "Withdraw to a wallet you control, on a network your wallet supports, above the casino's minimum. The network part is quick. Any wait is usually the casino's own review.",
      },
      {
        type: "steps",
        steps: [
          {
            name: "Check the withdrawal rules",
            need: "The casino's cashier and terms",
            text: "Look for the minimum withdrawal, the fee, any daily or monthly limits, and whether active bonus terms block withdrawals until conditions are met.",
          },
          {
            name: "Get a receiving address",
            need: "Your own wallet, on the right network",
            text: "In your wallet, open 'Receive' for the coin and network you'll withdraw on. Copy the address.",
          },
          {
            name: "Request the withdrawal",
            need: "The address and network",
            text: "Paste the address in the casino cashier, select the matching network, and check the first and last characters. Add a memo or tag if your wallet requires one.",
          },
          {
            name: "Wait for processing",
            need: "Patience on the first withdrawal",
            text: "Some casinos send automatically; others review every withdrawal or only the first one. After the casino sends, the network confirms it in seconds to minutes (longer for Bitcoin).",
          },
          {
            name: "Move it on if you want cash",
            need: "An exchange account",
            text: "To turn crypto back into money, send it from your wallet to an exchange and sell. Keep records of each step for tax purposes.",
          },
        ],
      },
      { type: "h2", text: "What can trigger an ID check on withdrawal" },
      {
        type: "list",
        items: [
          "A first withdrawal, or one much larger than your usual.",
          "Withdrawing soon after a deposit with little play in between.",
          "Crossing a threshold the terms set (per withdrawal or cumulative).",
          "Anti-money-laundering (AML) checks, including 'source of funds' or 'source of wealth' requests.",
          "Signs of a second account, shared devices, or play from a restricted country.",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: \"no KYC\" casinos still reserve the right to ask for ID. Our reviews quote what each one's terms say about when, so you know before you deposit, not after you win.",
      },
    ],
    faq: [
      { q: "Why is my withdrawal pending?", a: "Usually a manual review: first withdrawal, a large amount, bonus conditions, or a routine AML check. The network itself rarely causes long delays." },
      { q: "Can I withdraw to a different coin than I deposited?", a: "Many casinos allow it; some require you to withdraw in the deposit coin. The cashier or terms will say." },
      { q: "What happens if I'm asked for ID?", a: "You can provide it, or decline, in which case the casino may hold or refuse the withdrawal under its terms. That's why we list each casino's triggers up front." },
      { q: "Should I withdraw straight to an exchange?", a: "Withdrawing to your own wallet first is safer. Some exchanges screen or freeze funds coming from gambling sites." },
    ],
  },
  {
    slug: "cheapest-coin-to-deposit",
    title: "Cheapest Crypto to Deposit at a Casino (Fees Compared)",
    h1: "The cheapest coin to deposit at a casino",
    description:
      "Network fees and speed compared for BTC, ETH, USDT (TRC20 / ERC20), LTC and SOL. Which coin to use for small, medium and large deposits.",
    updated: "2026-11-17",
    category: "Money",
    relatedGuides: ["usdt-trc20-vs-erc20", "how-to-buy-crypto", "how-to-deposit-crypto"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "For most deposits, Litecoin, Solana, or a stablecoin on a low-fee network costs least. Bitcoin and Ethereum mainnet get expensive when their networks are busy. Fees change constantly, so check your wallet's fee estimate before sending.",
      },
      {
        type: "table",
        head: ["Coin", "Network", "Typical fee", "Speed", "Notes"],
        rows: [
          ["SOL / USDC", "Solana", "Very low", "Seconds", "Fewer casinos support it"],
          ["LTC", "Litecoin", "Low", "~2.5 min blocks", "Widely accepted, good default"],
          ["USDT", "TRC20 (Tron)", "Low–moderate", "About a minute", "Fee paid in TRX/energy; keep some TRX"],
          ["USDT / ETH", "Layer-2 (e.g. Arbitrum, Base)", "Low", "Seconds–minutes", "Only if the casino lists that exact network"],
          ["BTC", "Bitcoin", "Low to high, demand-driven", "~10 min blocks", "Universal; poor for small deposits when busy"],
          ["USDT / ETH", "Ethereum mainnet (ERC20)", "Moderate to high", "Minutes", "Avoid for small amounts"],
        ],
        note: "Fees change with network demand. Treat this as a guide to which networks are usually cheaper, and check the live fee in your wallet before sending.",
      },
      { type: "h2", text: "Which coin for which deposit" },
      {
        type: "list",
        items: [
          "Small (under ~$50): SOL, LTC, or a stablecoin on a low-fee network. A fixed fee matters most here.",
          "Medium: any of the above, or BTC when the network is quiet.",
          "Large: fee is a small share either way. Pick whatever the casino processes fastest and your wallet handles best.",
        ],
      },
      { type: "h2", text: "Don't forget the other fees" },
      {
        type: "list",
        items: [
          "Exchange withdrawal fee: often fixed per coin and can be bigger than the network fee.",
          "Casino withdrawal fee: some charge, many don't. Check the cashier.",
          "Spread: the gap between buy and sell price when you convert back to cash.",
        ],
      },
      {
        type: "caveat",
        text: "Heads-up: the cheapest network is no good if the casino doesn't list it. Always start from the casino's deposit page, then pick the cheapest option there.",
      },
    ],
    faq: [
      { q: "What's the cheapest way to deposit at a crypto casino?", a: "Usually Solana, Litecoin, or a stablecoin on a low-fee network, as long as the casino supports it." },
      { q: "Why is Bitcoin so expensive to send sometimes?", a: "Bitcoin fees are set by demand for block space. When many people transact at once, fees rise." },
      { q: "Is TRC20 always cheaper than ERC20?", a: "Usually, but not always by the same margin. Tron fees depend on whether you have energy or need to burn TRX. Check both in your wallet." },
      { q: "How often do you update this table?", a: "Monthly. Fees move daily, which is why we describe ranges rather than exact numbers." },
    ],
  },
  {
    slug: "usdt-trc20-vs-erc20",
    title: "USDT TRC20 vs ERC20: Which to Use at a Casino",
    h1: "USDT on TRC20 vs ERC20: which should you use?",
    description:
      "Same coin, different networks. TRC20 is usually cheaper, ERC20 more widely supported. How to choose, and why mixing them up loses deposits.",
    updated: "2026-11-17",
    category: "Crypto basics",
    relatedGuides: ["how-to-deposit-crypto", "cheapest-coin-to-deposit", "crypto-wallet-for-gambling"],
    relatedReviews: [],
    body: [
      {
        type: "p",
        text: "TRC20 (Tron) is usually cheaper to send. ERC20 (Ethereum) is supported by more wallets and exchanges but often costs more. Use whichever the casino lists that's cheapest for you, and never send on one when the casino address is for the other.",
      },
      {
        type: "table",
        head: ["", "TRC20 (Tron)", "ERC20 (Ethereum)"],
        rows: [
          ["Address starts with", "T", "0x"],
          ["Fee paid in", "TRX / energy", "ETH"],
          ["Typical cost", "Low–moderate", "Moderate–high"],
          ["Speed", "About a minute", "A few minutes"],
          ["Support", "Most crypto casinos", "Almost everywhere"],
        ],
      },
      { type: "h2", text: "The address check that saves deposits" },
      {
        type: "p",
        text: "A TRC20 address starts with T. An ERC20 address starts with 0x. If the casino shows one and your wallet's send screen expects the other, stop. You've picked the wrong network on one side.",
      },
      { type: "h2", text: "Other USDT networks" },
      {
        type: "p",
        text: "USDT also runs on Solana, BNB Smart Chain, Polygon, and several layer-2 networks. Some casinos accept them. The rule is the same: the network on your send screen must match the network on the deposit page.",
      },
      {
        type: "caveat",
        text: "Heads-up: Tether can freeze USDT at the token level on any of these networks. That's rare for ordinary users but worth knowing: a stablecoin isn't cash in your pocket.",
      },
    ],
    faq: [
      { q: "Can I send TRC20 USDT to an ERC20 address?", a: "No. They're different networks. The funds won't arrive at the intended account, and recovery is uncertain." },
      { q: "Why do I need TRX to send USDT on Tron?", a: "Tron charges network fees in TRX (or energy, which you get by staking TRX). Without it, the transfer won't go through." },
      { q: "Is TRC20 safe?", a: "It's a widely used network. The risks are the usual ones: wrong address, wrong network, phishing." },
      { q: "Which is faster?", a: "Both are fast. Tron usually confirms in about a minute; Ethereum in a few minutes. The casino's crediting rules matter more." },
    ],
  },
];
