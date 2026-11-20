/**
 * US sweepstakes / social casinos (Go Affiliates). Separate from the crypto casinos in data/casinos.ts:
 * not ranked, not scored, never listed as no-KYC.
 *
 * /go/[slug] picks the link by the visitor's US state (Vercel's x-vercel-ip-country-region header):
 * states in SOCIAL_ONLY_STATES get `socialUrl` (Gold Coins only), everyone else gets `affiliateUrl` (sweeps sign-up).
 */
export type Sweeps = {
  slug: string;
  name: string;
  affiliateUrl: string;
  socialUrl: string;
  site: string;
  rulesUrl: string;
  termsUrl: string;
};

/** Facts both sites state identically (Sweeps Rules v3.2 and Terms v2.1, both updated 30 Mar 2026). Checked 2026-11-20. */
export const SWEEPS_FACTS = {
  checked: "2026-11-20",
  minRedemptionUsd: 100,
  dailyBankLimitUsd: 2500,
  redemptionTime: "up to 10 business days",
  excludedStates: ["CA", "CT", "ID", "MI", "MT", "NJ", "NY", "NV", "TN", "WA"],
};

/**
 * States that get the Gold-Coins-only link: Go Affiliates' list (CA CT ID IN LA ME MT NJ NY OK TN)
 * plus the states the casinos' own Sweeps Rules §2.1 exclude (adds MI NV WA).
 */
export const SOCIAL_ONLY_STATES = ["CA", "CT", "ID", "IN", "LA", "ME", "MI", "MT", "NJ", "NV", "NY", "OK", "TN", "WA"];

export const sweeps: Sweeps[] = [
  {
    slug: "casino-click",
    name: "Casino.Click",
    affiliateUrl: "https://partners.goaffiliates.com/_tdy0piJikMjKto_EPcZApGNd7ZgqdRLk/1/",
    socialUrl: "https://partners.goaffiliates.com/_tdy0piJikMjUOsjNOfgKeWNd7ZgqdRLk/1/?pg=1",
    site: "https://casino.click",
    rulesUrl: "https://casino.click/sweeps-rules",
    termsUrl: "https://casino.click/terms",
  },
  {
    slug: "freespin",
    name: "FreeSpin.com",
    affiliateUrl: "https://partners.goaffiliates.com/_tdy0piJikMhiHMh1Fo8vcmNd7ZgqdRLk/1/",
    socialUrl: "https://partners.goaffiliates.com/_tdy0piJikMgr8Syj4RJS-mNd7ZgqdRLk/1/?pg=1",
    site: "https://freespin.com",
    rulesUrl: "https://freespin.com/sweeps-rules",
    termsUrl: "https://freespin.com/terms",
  },
];

export const findSweeps = (slug: string) => sweeps.find((s) => s.slug === slug);

/** Link for a visitor: the social (Gold Coins only) link in SOCIAL_ONLY_STATES, the sweeps link otherwise. */
export function sweepsLink(s: Sweeps, country: string | null, region: string | null) {
  const social = country === "US" && region !== null && SOCIAL_ONLY_STATES.includes(region.toUpperCase());
  return { url: social ? s.socialUrl : s.affiliateUrl, social };
}
