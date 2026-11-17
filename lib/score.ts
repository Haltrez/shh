import type { Casino } from "./types";

/** Weights from /how-we-rate. Keep the two in sync. */
export const WEIGHTS = {
  kycSignup: 0.4,
  kycTriggers: 0.2,
  payoutSpeed: 0.2,
  coinChoice: 0.1,
  termsClarity: 0.1,
} as const;

export const WEIGHT_LABELS: Record<keyof typeof WEIGHTS, string> = {
  kycSignup: "KYC at sign-up",
  kycTriggers: "KYC triggers",
  payoutSpeed: "Payout speed",
  coinChoice: "Coin choice",
  termsClarity: "Licence & terms clarity",
};

export function isVerified(c: Casino): boolean {
  return Boolean(c.lastChecked && c.scores && c.kyc);
}

/** 0–100, or null when the casino hasn't been checked yet. */
export function privacyScore(c: Casino): number | null {
  if (!isVerified(c) || !c.scores) return null;
  let total = 0;
  for (const key of Object.keys(WEIGHTS) as (keyof typeof WEIGHTS)[]) {
    total += (c.scores[key] / 5) * WEIGHTS[key];
  }
  return Math.round(total * 100);
}

/** 0–5 filled segments for the privacy meter. */
export function meterSegments(score: number | null): number {
  if (score === null) return 0;
  return Math.max(0, Math.min(5, Math.round(score / 20)));
}

/** Score-ranked, verified first. Featured status never affects order. */
export function rank(casinos: Casino[]): Casino[] {
  return [...casinos].sort((a, b) => (privacyScore(b) ?? -1) - (privacyScore(a) ?? -1));
}
