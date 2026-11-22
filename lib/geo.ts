import { allCasinos } from "./data";
import { rank, isPublished, privacyScore, kycLevelOf, coinsOf } from "./score";
import { casinoText } from "./i18n";
import { site } from "./site";
import { casinosEs } from "@/data/casinos-es";
import type { Casino } from "./types";

const abs = (p: string) => `${site.url}${p}`;

/** Every source URL cited for a casino's facts (Sourced<T> fields and reported sources). */
function sourcesOf(c: Casino): string[] {
  const out = new Set<string>();
  for (const v of Object.values(c)) {
    if (v && typeof v === "object" && "source" in v && typeof (v as { source: unknown }).source === "string") {
      out.add((v as { source: string }).source);
    }
  }
  for (const k of [c.kyc?.signup, c.kyc?.withdrawal, c.kyc?.triggers]) if (k?.source) out.add(k.source);
  for (const s of c.reported?.sources ?? []) if (s.url) out.add(s.url);
  return [...out].filter((u) => u.startsWith("http"));
}

/** Ranked, published casinos as plain facts: the public dataset behind /data/casinos.json and /llms.txt. */
export function casinoDataset() {
  return rank(allCasinos.filter(isPublished)).map((c, i) => {
    const tx = casinoText(c, "en");
    return {
      rank: i + 1,
      slug: c.slug,
      name: c.name,
      privacyScore: privacyScore(c),
      featured: Boolean(c.featured),
      kycLevel: kycLevelOf(c) ?? null,
      kyc: tx.summary,
      payoutInOurTests: tx.payout,
      coins: coinsOf(c) ?? [],
      licence: c.licence?.value ?? null,
      restrictedCountries: c.restrictedCountries?.value ?? null,
      vpnRule: c.vpnRule?.value ?? null,
      withdrawalLimits: c.withdrawalLimits?.value ?? null,
      welcomeOffer: c.offer?.text ?? null,
      acceptsAllLatinAmerica: Boolean(c.latam),
      lastChecked: c.lastChecked ?? c.reported?.asOf ?? null,
      review: abs(`/reviews/${c.slug}`),
      reviewEs: casinosEs[c.slug] ? abs(`/es/resenas/${c.slug}`) : null,
      sources: sourcesOf(c),
    };
  });
}
