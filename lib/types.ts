export type Coin = "BTC" | "ETH" | "USDT" | "USDC" | "SOL" | "LTC" | "TRX" | "DOGE" | "XRP" | "BNB";

/**
 * "none"             = no ID at sign-up or for normal withdrawals
 * "on-request"       = no ID at sign-up; routine thresholds/triggers where ID is asked
 * "first-withdrawal" = no ID to sign up or deposit; ID before the first withdrawal
 * "full"             = ID before you can play
 */
export type KycLevel = "none" | "on-request" | "first-withdrawal" | "full";

/**
 * What third-party reviews say, before we've confirmed it against the casino's own terms.
 * Shown with a "reported" label and its sources. Never produces a score.
 */
export type Report = {
  level: KycLevel;
  /** One or two sentences, shown on cards. */
  summary: string;
  /** Longer notes for the review page. */
  detail?: string[];
  coins?: Coin[];
  /** True when sources disagree. */
  conflicting?: boolean;
  /** True when the casino confirmed it directly and we've checked it (no "reported" tag). */
  confirmed?: boolean;
  sources: { name: string; url?: string }[];
  /** ISO date the reports were collected. */
  asOf: string;
};

/** A fact we only publish once it has been checked against the casino's own T&Cs/FAQ. */
export type Sourced<T> = {
  value: T;
  /** URL of the casino page the fact comes from (T&Cs, FAQ, cashier help). */
  source: string;
};

export type Casino = {
  slug: string;
  name: string;
  /** Path under /public, e.g. /logos/koalabet.svg (light version for dark bg). */
  logo?: string;
  /** True when the logo is an icon only (no wordmark), so the name is shown next to it. */
  logoIsMark?: boolean;
  /** Tracking link from the affiliate program. Empty = /go falls back to the review. */
  affiliateUrl: string;
  /** ISO date of the last full fact check. null = never checked → page is noindex and shows as pending. */
  lastChecked: string | null;
  /** Third-party reports, used until the fact box is verified. */
  reported?: Report;
  /** Paid placement. Shown with a "Featured" label; never changes the score. */
  featured?: boolean;

  licence?: Sourced<string>;
  kyc?: {
    level: KycLevel;
    /** One line for cards. */
    summary: string;
    signup: Sourced<string>;
    withdrawal: Sourced<string>;
    /** Things the T&Cs say can trigger a check (thresholds, AML, source of funds). */
    triggers: Sourced<string[]>;
  };
  vpnRule?: Sourced<string>;
  restrictedCountries?: Sourced<string[]>;
  coins?: Sourced<Coin[]>;
  /** Minimum deposit in USD equivalent. */
  minDepositUsd?: Sourced<number>;
  withdrawalLimits?: Sourced<string>;
  /** Only fill from our own verified test withdrawals. Minutes. */
  payoutMinutes?: { value: number; note: string; /** e.g. "under 10 min" */ label?: string };
  /** Welcome offer as supplied by the partner. `source` = the casino's promotions/terms page, once known. */
  offer?: { text: string; code?: string; freeSpins?: boolean; source?: string };
  games?: { summary: string; providers: string[] };
  responsibleTools?: Sourced<string[]>;

  verdict?: string;
  kycInPractice?: string[];
  depositsWithdrawals?: string[];
  pros?: string[];
  cons?: string[];
  faq?: { q: string; a: string }[];

  /** Score inputs, 0–5 each, see /how-we-rate. */
  scores?: Partial<{
    kycSignup: number;
    kycTriggers: number;
    payoutSpeed: number;
    coinChoice: number;
    termsClarity: number;
  }>;
};
