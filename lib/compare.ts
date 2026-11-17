import type { Casino } from "./types";
import { allCasinos } from "./data";
import { isPublished, rank } from "./score";

export const shortName = (c: Casino) => c.name.replace(/ Casino$/, "");

/** Every pair of published casinos, higher-ranked first: "koalabet-vs-cashy". */
export function comparePairs(): { slug: string; a: Casino; b: Casino }[] {
  const ranked = rank(allCasinos.filter(isPublished));
  const out: { slug: string; a: Casino; b: Casino }[] = [];
  for (let i = 0; i < ranked.length; i++) {
    for (let j = i + 1; j < ranked.length; j++) {
      out.push({ slug: `${ranked[i].slug}-vs-${ranked[j].slug}`, a: ranked[i], b: ranked[j] });
    }
  }
  return out;
}

export const findPair = (slug: string) => comparePairs().find((p) => p.slug === slug);

/** Comparisons that include this casino. */
export const pairsFor = (slug: string) => comparePairs().filter((p) => p.a.slug === slug || p.b.slug === slug);
