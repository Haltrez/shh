/**
 * Big brands we don't partner with, for "sites like X" / "X alternatives" pages and the KYC tracker.
 * Only facts from the brand's own pages (terms, KYC policy, help centre), with sources.
 * Third-party claims are marked `reported` and attributed. No logos or branding.
 */
export type BrandFact = { text: string; source: string; reported?: boolean };

export type AltBrand = {
  slug: string;
  name: string;
  /** One line: what the brand asks for, from its own pages. */
  kycSummary: string;
  /** Short label for tables. */
  kycToStart: string;
  idBeforeWithdrawal: string;
  facts: BrandFact[];
  licence?: { value: string; source: string };
  restricted?: { value: string; source: string };
  /** Why someone might look for an alternative (factual). */
  reasons: string[];
  lastChecked: string;
};

const BC_TERMS = "https://bc.game/help/terms-service";
const ROOBET_KYC = "https://roobet.com/kyc-aml-policy";
const STAKE_POI = "https://help.stake.com/en/articles/5886574-proof-of-identity-acceptable-documentation";
const STAKE_WITHDRAW = "https://help.stake.com/en/articles/5091165-crypto-how-to-make-a-withdrawal";

export const altBrands: AltBrand[] = [
  {
    slug: "stake",
    name: "Stake",
    kycSummary:
      "Stake requires a verified email to withdraw and says its compliance team can request any documentation at any time. Reviews report ID (Level 2) is needed before the first withdrawal.",
    kycToStart: "Verified email (to withdraw)",
    idBeforeWithdrawal: "Reported: yes, ID before first withdrawal",
    facts: [
      { text: "Your email must be verified before you can make a crypto withdrawal.", source: STAKE_WITHDRAW },
      { text: "Stake's compliance team reserves the right to request any documentation at any given time.", source: STAKE_POI },
      {
        text: "Several reviews report that government ID (Level 2) is required before the first withdrawal, and proof of address or source of funds (Levels 3–4) on request.",
        source: "https://www.sportsgambler.com/review/stake/verification/",
        reported: true,
      },
    ],
    reasons: [
      "ID verification before the first withdrawal, per most reviews",
      "Tiered KYC that can escalate to proof of address and source of funds",
    ],
    lastChecked: "2026-11-20",
  },
  {
    slug: "bc-game",
    name: "BC.Game",
    kycSummary:
      "BC.Game's terms say it may require verification before an account is activated, before deposits or withdrawals, or whenever it considers it necessary, including selfie or biometric checks.",
    kycToStart: "Can be required at activation (§6.3)",
    idBeforeWithdrawal: "Can be required before any withdrawal (§6.3)",
    facts: [
      { text: "Verification may be required before an Account is activated, before deposits or withdrawals, when unusual activity is detected, or periodically (§6.3).", source: BC_TERMS },
      { text: "Requirements can include selfie or biometric verification and proof of crypto wallet ownership (§6.2).", source: BC_TERMS },
      { text: "Using a VPN to access the services from a restricted jurisdiction or to circumvent regulatory requirements is not allowed (§13.7).", source: BC_TERMS },
    ],
    licence: { value: "Anjouan (Comoros), ALSI-202410011-FI1; operated by Twocent Technology Limited (Belize)", source: BC_TERMS },
    restricted: {
      value: "Australia, Austria, France, Germany, the Netherlands, Spain, the Comoros, the UK, mainland China, Hong Kong, Macau, the US, FATF-blacklisted countries and others (§4.3)",
      source: BC_TERMS,
    },
    reasons: [
      "Terms allow verification before deposits, withdrawals or even account activation",
      "Selfie or biometric checks can be required",
      "Long restricted-country list",
    ],
    lastChecked: "2026-11-20",
  },
  {
    slug: "roobet",
    name: "Roobet",
    kycSummary:
      "Roobet's KYC/AML policy says it applies due diligence at registration and throughout the relationship: identity checks, PEP and sanctions screening, and source-of-funds checks where appropriate.",
    kycToStart: "Due diligence from registration (§4)",
    idBeforeWithdrawal: "Can be required depending on activity (§4)",
    facts: [
      { text: "Due diligence applies at registration and during the ongoing relationship, at different moments depending on your activity (§4).", source: ROOBET_KYC },
      { text: "Checks include identity (name, date of birth, address), PEP and sanctions screening, and where funds come from (§4).", source: ROOBET_KYC },
    ],
    licence: { value: "Curaçao, OGL/2024/687/0427; operated by Raw Entertainment B.V.", source: ROOBET_KYC },
    reasons: [
      "Identity checks can start at registration",
      "Source-of-funds checks depending on activity",
    ],
    lastChecked: "2026-11-20",
  },
];

export const getAltBrand = (slug: string) => altBrands.find((b) => b.slug === slug);
