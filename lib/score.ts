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

type Key = keyof typeof WEIGHTS;

/**
 * Factor scores (0–5) derived from reported data, for casinos without a full terms check.
 * Factors we have no data for are left out and the remaining weights are rescaled.
 * Terms clarity is never derived: it needs our own read of the terms.
 */
export function derivedScores(c: Casino): Partial<Record<Key, number>> | null {
  const r = c.reported;
  if (!r || !c.payoutMinutes) return null;
  const out: Partial<Record<Key, number>> = {};
  out.kycSignup = r.level === "full" ? 0 : 5;
  const triggers = { none: 4, "on-request": 2, "first-withdrawal": 1, full: 0 }[r.level];
  out.kycTriggers = Math.max(0, triggers - (r.conflicting ? 1 : 0));
  const m = c.payoutMinutes.value;
  out.payoutSpeed = m <= 10 ? 5 : m <= 30 ? 4 : m <= 60 ? 3 : m <= 240 ? 2 : 1;
  const coins = coinsOf(c)?.length;
  if (coins) out.coinChoice = coins >= 8 ? 5 : coins >= 5 ? 4 : coins >= 3 ? 3 : 2;
  return out;
}

/** Score shown, or null when there isn't enough data. */
export function privacyScore(c: Casino): number | null {
  const s: Partial<Record<Key, number>> | null = isVerified(c) && c.scores ? c.scores : derivedScores(c);
  // A score needs at least the KYC factor.
  if (s && s.kycSignup === undefined) return null;
  if (!s) return null;
  let total = 0;
  let weight = 0;
  for (const key of Object.keys(WEIGHTS) as Key[]) {
    const v = s[key];
    if (v === undefined) continue;
    total += (v / 5) * WEIGHTS[key];
    weight += WEIGHTS[key];
  }
  return weight ? Math.round((total / weight) * 100) : null;
}

/** Has enough to be scored, listed and indexed (fully checked, or reported KYC + our payout test). */
export const isPublished = (c: Casino) => privacyScore(c) !== null;

/** 0–5 filled segments for the privacy meter. */
export function meterSegments(score: number | null): number {
  if (score === null) return 0;
  return Math.max(0, Math.min(5, Math.round(score / 20)));
}

/** Verified level if we have it, else the reported one. */
export const kycLevelOf = (c: Casino) => c.kyc?.level ?? c.reported?.level;
/** True when the KYC level shown comes from third-party reports, not our own check. */
export const isReportedOnly = (c: Casino) => !isVerified(c) && Boolean(c.reported) && !c.reported?.confirmed;
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
