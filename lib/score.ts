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

/** Verified level if we have it, else the reported one. */
export const kycLevelOf = (c: Casino) => c.kyc?.level ?? c.reported?.level;
/** True when the KYC level shown comes from third-party reports, not our own check. */
export const isReportedOnly = (c: Casino) => !isVerified(c) && Boolean(c.reported);
export const coinsOf = (c: Casino) => c.coins?.value ?? c.reported?.coins;

const LEVEL_ORDER = { none: 0, "on-request": 1, "first-withdrawal": 2, full: 3 } as const;

/**
 * Verified casinos by score first. Unverified ones follow, ordered by reported KYC level
 * (lightest first), then casinos with nothing reported. Featured status never affects order.
 */
export function rank(casinos: Casino[]): Casino[] {
  const lvl = (c: Casino) => {
    const l = kycLevelOf(c);
    return l ? LEVEL_ORDER[l] : 9;
  };
  return [...casinos].sort(
    (a, b) => (privacyScore(b) ?? -1) - (privacyScore(a) ?? -1) || lvl(a) - lvl(b),
  );
}
