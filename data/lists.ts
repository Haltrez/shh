import type { Casino, Coin } from "@/lib/types";

export type List = {
  slug: string;
  /** Short nav label */
  short: string;
  title: string; // <title>, ≤ 60 chars incl. year
  h1: string;
  description: string; // meta, ≤ 155
  intro: string;
  criteria: string;
  filter: (c: Casino) => boolean;
  relatedGuides: string[];
  faq: { q: string; a: string }[];
};

const takes = (coin: Coin) => (c: Casino) => Boolean((c.coins?.value ?? c.reported?.coins)?.includes(coin));

const coinList = (
  coin: Coin,
  slug: string,
  label: string,
  intro: string,
  guides: string[],
  faq: List["faq"],
): List => ({
  slug,
  short: `${label} casinos`,
  title: `No KYC ${label} Casinos {year}: Ranked`,
  h1: `No KYC ${label} casinos, ranked`,
  description: `${label} casinos ranked by privacy: what ID each asks for, when, and how fast ${coin} withdrawals land. Checked against each casino's terms.`,
  intro,
  criteria: `Accepts ${coin} deposits and withdrawals in the cashier (checked against the casino's own payment page).`,
  filter: takes(coin),
  relatedGuides: guides,
  faq,
});

export const lists: List[] = [
  coinList(
    "BTC",
    "bitcoin-casinos",
    "Bitcoin",
    "Bitcoin is the coin every crypto casino takes. It's also the slowest and, when the network is busy, one of the dearer ones to move. These are the casinos that ask the least of you before paying out in BTC.",
    ["how-to-deposit-crypto", "cheapest-coin-to-deposit", "is-crypto-gambling-anonymous"],
    [
      { q: "How long does a Bitcoin casino deposit take?", a: "Most casinos credit a BTC deposit after one to three network confirmations. A block lands roughly every ten minutes, so plan for 10–30 minutes, longer when the network is congested." },
      { q: "Is Bitcoin the cheapest way to deposit?", a: "Usually not. BTC network fees rise with demand. For small deposits, Litecoin or a stablecoin on a low-fee network normally costs less. See our fee comparison." },
      { q: "Do Bitcoin casinos need ID?", a: "Some don't at sign-up. Almost all reserve the right to ask for ID later, typically on large withdrawals or during anti-money-laundering checks. Each review says exactly when." },
      { q: "Can I withdraw Bitcoin to an exchange directly?", a: "You can, but many exchanges screen incoming funds from gambling sites. Withdrawing to your own wallet first gives you more control." },
    ],
  ),
  coinList(
    "USDT",
    "usdt-casinos",
    "USDT",
    "USDT (Tether) keeps your balance in dollars, so the value doesn't move while you play. The catch is the network: the same coin exists on several chains, and sending on the wrong one is the most common way people lose a deposit.",
    ["usdt-trc20-vs-erc20", "how-to-deposit-crypto", "how-to-buy-crypto"],
    [
      { q: "Which USDT network should I use at a casino?", a: "Whichever the casino's deposit page lists, and preferably the cheapest one both you and the casino support. TRC20 and a few other low-fee chains are usually cheaper than ERC20. Always match the network exactly." },
      { q: "What happens if I send USDT on the wrong network?", a: "The funds usually don't arrive, and recovery is at the casino's discretion, if it's possible at all. Send a small test amount first." },
      { q: "Is USDT safer than Bitcoin for gambling?", a: "It removes price swings, not risk. USDT is issued by a company that can freeze addresses. Treat it as a convenience, not a guarantee." },
      { q: "Do USDT casinos ask for ID?", a: "The coin doesn't decide that, the casino does. Our reviews list each casino's sign-up and withdrawal checks." },
    ],
  ),
  coinList(
    "SOL",
    "solana-casinos",
    "Solana",
    "Solana transfers settle in seconds and cost a fraction of a cent, which makes SOL (and USDC on Solana) one of the quickest ways in and out of a casino. Fewer casinos support it than BTC or USDT.",
    ["how-to-deposit-crypto", "crypto-wallet-for-gambling", "cheapest-coin-to-deposit"],
    [
      { q: "Why use Solana at a casino?", a: "Speed and cost. Transfers usually confirm in seconds with very low fees, so small deposits aren't eaten by network costs." },
      { q: "Which wallet works for Solana?", a: "Any self-custody wallet that supports Solana. See our wallet guide for what to look for." },
      { q: "Can I deposit USDC on Solana?", a: "Some casinos accept it. Check that the deposit page lists USDC on Solana specifically, not just USDC." },
      { q: "Do Solana casinos require KYC?", a: "That depends on the casino. Each review sets out exactly what's asked and when." },
    ],
  ),
  coinList(
    "ETH",
    "ethereum-casinos",
    "Ethereum",
    "Ethereum is widely accepted, but mainnet fees can make small deposits expensive. Some casinos also take ETH on cheaper layer-2 networks. Check which network the cashier lists before you send.",
    ["cheapest-coin-to-deposit", "how-to-deposit-crypto", "how-to-withdraw-crypto"],
    [
      { q: "Are Ethereum deposits expensive?", a: "On mainnet, fees vary with demand. On layer-2 networks they're usually far lower, but only if the casino supports that exact network." },
      { q: "Can I send ETH from a layer-2 to a mainnet address?", a: "Don't. Match the network on the casino's deposit page exactly, or the funds may not arrive." },
      { q: "How fast are ETH withdrawals?", a: "The network part takes minutes. Most of the wait is the casino's own processing, which our reviews time where we've tested it." },
      { q: "Do Ethereum casinos need ID?", a: "Some don't at sign-up. See each review for withdrawal thresholds and triggers." },
    ],
  ),
  coinList(
    "LTC",
    "litecoin-casinos",
    "Litecoin",
    "Litecoin works like Bitcoin with faster blocks and, usually, lower fees. It's a good default for small and medium deposits, and almost every crypto casino takes it.",
    ["cheapest-coin-to-deposit", "how-to-buy-crypto", "how-to-deposit-crypto"],
    [
      { q: "Why choose Litecoin over Bitcoin?", a: "Blocks arrive about every 2.5 minutes instead of 10, and fees are usually lower, so deposits land faster and cost less." },
      { q: "Is Litecoin private?", a: "No more than Bitcoin. Its blockchain is public. Our anonymity guide explains what that means in practice." },
      { q: "How many confirmations do casinos want for LTC?", a: "Commonly a handful. The cashier page usually says. Expect a few minutes." },
      { q: "Do Litecoin casinos ask for ID?", a: "That's set by the casino, not the coin. Each review lists the checks." },
    ],
  ),
  {
    slug: "metamask-casinos",
    short: "MetaMask & wallet casinos",
    title: "MetaMask Casinos {year}: Sign Up With Your Wallet",
    h1: "MetaMask and Web3 wallet casinos",
    description: "Crypto casinos where you sign up by connecting MetaMask, Phantom or another wallet, with no registration form. Ranked by privacy and checked.",
    intro: "The most private way to start at a crypto casino is not to create an account at all: connect your wallet and play. These casinos support wallet sign-up. They can still ask for ID later under their terms, which each review spells out.",
    criteria: "You can create an account by connecting a crypto wallet (MetaMask, Phantom, WalletConnect or similar), per the casino or reviews.",
    filter: (c) => Boolean(c.walletSignup?.value),
    relatedGuides: ["crypto-wallet-for-gambling", "metawin-kyc", "seed-phrase-safety"],
    faq: [
      { q: "What is a MetaMask casino?", a: "A crypto casino where your wallet is your login. You connect MetaMask (or another Web3 wallet) instead of filling in a registration form." },
      { q: "Is it safe to connect my wallet to a casino?", a: "Connecting only shares your public address. Never approve unexpected token permissions and never type your seed phrase into a site. Use a separate wallet for gambling." },
      { q: "Do wallet casinos need KYC?", a: "Not to sign up. Most can still ask for ID later under their terms; each review lists when." },
      { q: "Which wallets work?", a: "MetaMask, Phantom, Coinbase Wallet and wallets that support WalletConnect are the most common. Check the casino's connect screen." },
    ],
  },
  {
    slug: "instant-withdrawal-casinos",
    short: "Instant withdrawals",
    title: "Instant Withdrawal Crypto Casinos {year}: Tested",
    h1: "Instant withdrawal crypto casinos",
    description: "Crypto casinos that paid our test withdrawals fastest, with the ID checks each one can trigger. Times measured, not copied from marketing.",
    intro: "\"Instant\" on a casino banner usually means \"we don't hold withdrawals for manual review by default\". We only list a payout time here when we've measured it ourselves.",
    criteria: "Our own test withdrawal arrived in 15 minutes or less, and the terms don't impose a routine manual hold.",
    filter: (c) => c.payoutMinutes !== undefined && c.payoutMinutes.value <= 15,
    relatedGuides: ["how-to-withdraw-crypto", "what-is-kyc-at-casinos", "cheapest-coin-to-deposit"],
    faq: [
      { q: "Are crypto casino withdrawals really instant?", a: "The blockchain part can take seconds to minutes. The real variable is whether the casino reviews your withdrawal by hand first." },
      { q: "What slows a withdrawal down?", a: "First withdrawals, large amounts, recent deposits that weren't wagered, bonus terms, and AML checks. Each can trigger a manual review or an ID request." },
      { q: "Which coin withdraws fastest?", a: "Fast-settling networks such as Solana, Tron or Litecoin usually beat Bitcoin. The casino's own processing time matters more." },
      { q: "How did you measure payout times?", a: "We request a withdrawal from a real account and time it until the funds are spendable in our wallet. See How we rate." },
    ],
  },
  {
    slug: "low-minimum-deposit-casinos",
    short: "Low minimum deposit",
    title: "Low Minimum Deposit Crypto Casinos {year}",
    h1: "Low minimum deposit crypto casinos",
    description: "Crypto casinos with small minimum deposits, and which coins keep network fees from eating a small deposit. Checked against each cashier.",
    intro: "A low minimum only helps if the network fee doesn't swallow it. Pair a small deposit with a low-fee coin.",
    criteria: "Minimum deposit of $10 (equivalent) or less on at least one coin, per the casino's cashier.",
    filter: (c) => c.minDepositUsd !== undefined && c.minDepositUsd.value <= 10,
    relatedGuides: ["cheapest-coin-to-deposit", "how-to-deposit-crypto", "how-to-buy-crypto"],
    faq: [
      { q: "What's the smallest crypto deposit I can make?", a: "It's set per casino and often per coin. Deposits below the minimum may never be credited, so check the cashier first." },
      { q: "Which coin is best for small deposits?", a: "A low-fee network: Litecoin, Solana, or a stablecoin on a cheap chain. See our fee guide." },
      { q: "Do small deposits avoid KYC?", a: "Not necessarily. ID checks are usually tied to withdrawals and account activity, not deposit size." },
      { q: "Is a low minimum a sign of a worse casino?", a: "No. It's a cashier setting. Judge the casino on its terms and payout record." },
    ],
  },
  {
    slug: "crypto-casinos-with-free-spins",
    short: "With free spins",
    title: "Crypto Casinos With Free Spins {year}",
    h1: "Crypto casinos with free spins",
    description: "Crypto casinos whose welcome offer includes free spins, ranked by privacy. Offers are copied from the casino's own promotions page.",
    intro: "Free spins come with terms. Read the casino's bonus rules before you opt in, because bonus play is one of the most common reasons withdrawals get held.",
    criteria: "The current welcome offer includes free spins, per the casino's promotions page.",
    filter: (c) => Boolean(c.offer?.freeSpins),
    relatedGuides: ["what-is-kyc-at-casinos", "how-to-deposit-crypto", "provably-fair-explained"],
    faq: [
      { q: "Are free spins really free?", a: "They cost nothing to use, but winnings usually come with conditions before you can withdraw. The casino's bonus terms are the only source that counts." },
      { q: "Do I need a promo code?", a: "Not for the offers listed here. The bonus applies when you sign up through the Claim bonus button. If an offer ever needs a code, it's shown on the casino card." },
      { q: "Can I turn a bonus down?", a: "Usually, yes. Many players skip bonuses to avoid withdrawal conditions." },
      { q: "Do free spins affect KYC?", a: "Bonus terms sometimes trigger extra checks on withdrawal. Each review notes this where the terms say so." },
    ],
  },
];

export const getList = (slug: string) => lists.find((l) => l.slug === slug);
export const withYear = (s: string) => s.replace("{year}", String(new Date().getFullYear()));
