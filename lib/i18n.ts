import type { Casino, KycLevel } from "./types";
import { casinosEs } from "@/data/casinos-es";
import { formatPayout } from "./format";

export type Lang = "en" | "es";

const dict = {
  en: {
    payout: "Payout",
    minDeposit: "Min deposit",
    claimBonus: "Claim bonus",
    visit: (n: string) => `Visit ${n}`,
    claimAt: (n: string) => `Claim bonus at ${n}`,
    readReview: "Read review",
    tc: "18+ · T&Cs apply · Play responsibly",
    noCode: "No code needed: the bonus applies when you sign up through the Claim bonus button.",
    checkedAgainst: (n: string) => `Checked against ${n}'s terms on`,
    confirmedBy: (n: string) => `Confirmed directly by ${n} on`,
    coinsAccepted: "Coins accepted",
    featured: "Featured",
    kyc: { none: "No KYC", "on-request": "KYC on request", full: "Full KYC", pending: "Being checked" } as Record<KycLevel | "pending", string>,
    reported: "reported",
    topPicks: "Top no-KYC casinos right now",
    fullRanking: "full ranking →",
    score: "score",
    picksNote: "18+ · T&Cs apply · We may earn a commission.",
    howWeRank: "How we rank",
    reviewPath: (slug: string) => `/reviews/${slug}`,
    rankingPath: "/no-kyc-casinos",
    locale: "en-GB",
  },
  es: {
    payout: "Retiro",
    minDeposit: "Depósito mínimo",
    claimBonus: "Reclamar bono",
    visit: (n: string) => `Ir a ${n}`,
    claimAt: (n: string) => `Reclamar bono en ${n}`,
    readReview: "Leer reseña",
    tc: "+18 · Aplican T&C · Juega con responsabilidad",
    noCode: "No necesitas código: el bono se aplica al registrarte con el botón Reclamar bono.",
    checkedAgainst: (n: string) => `Verificado con los términos de ${n} el`,
    confirmedBy: (n: string) => `Confirmado directamente por ${n} el`,
    coinsAccepted: "Monedas aceptadas",
    featured: "Destacado",
    kyc: { none: "Sin KYC", "on-request": "KYC a petición", full: "KYC completo", pending: "En revisión" } as Record<KycLevel | "pending", string>,
    reported: "reportado",
    topPicks: "Los mejores casinos sin KYC hoy",
    fullRanking: "ranking completo →",
    score: "puntuación",
    picksNote: "+18 · Aplican T&C · Podemos recibir una comisión.",
    howWeRank: "Cómo clasificamos",
    reviewPath: (slug: string) => `/es/resenas/${slug}`,
    rankingPath: "/es/casinos-sin-kyc",
    locale: "es-ES",
  },
};

export const t = (lang: Lang = "en") => dict[lang];

export const kycText = (level: KycLevel | undefined, lang: Lang = "en") => dict[lang].kyc[level ?? "pending"];

export const formatDateL = (iso: string, lang: Lang = "en") =>
  new Date(iso + "T00:00:00Z").toLocaleDateString(dict[lang].locale, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** Casino text in the requested language (falls back to English). */
export function casinoText(c: Casino, lang: Lang = "en") {
  const es = lang === "es" ? casinosEs[c.slug] : undefined;
  return {
    summary: es?.summary ?? c.kyc?.summary ?? c.reported?.summary ?? "",
    verdict: es?.verdict ?? c.verdict ?? "",
    pros: es?.pros ?? c.pros ?? [],
    cons: es?.cons ?? c.cons ?? [],
    offer: c.offer ? es?.offer ?? c.offer.text : undefined,
    kycInPractice: es?.kycInPractice ?? c.kycInPractice ?? [],
    withdrawalLimits: es?.withdrawalLimits ?? c.withdrawalLimits?.value,
    payout: c.payoutMinutes ? (lang === "es" ? es?.payout ?? formatPayout(c) : formatPayout(c)) : undefined,
  };
}
