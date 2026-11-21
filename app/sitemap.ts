import type { MetadataRoute } from "next";
import { absolute } from "@/lib/site";
import { allCasinos } from "@/lib/data";
import { isPublished, rank } from "@/lib/score";
import { lists } from "@/data/lists";
import { publishedGuides } from "@/content/guides";
import { comparePairs } from "@/lib/compare";
import { bonusCasinos } from "@/lib/bonus";
import { altBrands } from "@/data/alternatives";
import { casinosEs } from "@/data/casinos-es";
import { guiasEs } from "@/content/es/guias";
import { bonosCasinos } from "@/lib/bonos-es";
import { getGuide } from "@/content/guides";

/** Split sitemaps: /sitemap/pages.xml, /sitemap/reviews.xml, /sitemap/lists.xml, /sitemap/guides.xml */
export const revalidate = 3600;

export async function generateSitemaps() {
  return [{ id: "pages" }, { id: "reviews" }, { id: "lists" }, { id: "guides" }, { id: "compare" }, { id: "bonus" }, { id: "es" }];
}

const today = new Date().toISOString().slice(0, 10);

export default async function sitemap({ id }: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const which = await id;
  const verified = allCasinos.filter(isPublished);
  // Pages with noindex are left out.
  switch (which) {
    case "pages":
      return ["/", "/no-kyc-casinos", "/best-crypto-casinos", "/anonymous-casinos", "/bonus", "/kyc-tracker", "/sweepstakes-casinos", "/tools", "/tools/wagering-calculator", "/tools/crypto-fee-calculator", ...altBrands.map((b) => `/alternatives/${b.slug}`), "/guides", "/how-we-rate", "/responsible-gambling", "/about", "/contact", "/affiliate-disclosure", "/privacy"].map(
        (p) => ({ url: absolute(p), lastModified: today }),
      );
    case "reviews":
      return verified.map((c) => ({ url: absolute(`/reviews/${c.slug}`), lastModified: c.lastChecked ?? c.reported?.asOf ?? today }));
    case "lists":
      return lists
        .map((l) => ({ l, items: rank(verified.filter(l.filter)) }))
        .filter(({ items }) => items.length > 0)
        .map(({ l, items }) => ({
          url: absolute(`/best/${l.slug}`),
          lastModified: items.map((c) => c.lastChecked ?? c.reported?.asOf ?? today).sort().at(-1),
        }));
    case "compare":
      return comparePairs().map((p) => ({
        url: absolute(`/compare/${p.slug}`),
        lastModified: [p.a, p.b].map((c) => c.lastChecked ?? c.reported?.asOf ?? today).sort().at(-1),
      }));
    case "es":
      return [
        { url: absolute("/es"), lastModified: today, alternates: { languages: { en: absolute("/") } } },
        { url: absolute("/es/casinos-sin-kyc"), lastModified: today, alternates: { languages: { en: absolute("/no-kyc-casinos") } } },
        { url: absolute("/es/mejores-casinos-cripto"), lastModified: today, alternates: { languages: { en: absolute("/best-crypto-casinos") } } },
        { url: absolute("/es/casinos-anonimos"), lastModified: today, alternates: { languages: { en: absolute("/anonymous-casinos") } } },
        { url: absolute("/es/bonos"), lastModified: today, alternates: { languages: { en: absolute("/bonus") } } },
        ...bonosCasinos().map((c) => ({
          url: absolute(`/es/bonos/${c.slug}`),
          lastModified: c.lastChecked ?? c.reported?.asOf ?? today,
          alternates: { languages: { en: absolute(`/bonus/${c.slug}`) } },
        })),
        { url: absolute("/es/guias"), lastModified: today, alternates: { languages: { en: absolute("/guides") } } },
        ...guiasEs().map((g) => ({
          url: absolute(`/es/guias/${g.slug}`),
          lastModified: g.updated,
          ...((g.en ? getGuide(g.en) : undefined) ? { alternates: { languages: { en: absolute(`/guides/${g.en!}`) } } } : {}),
        })),
        ...verified
          .filter((c) => casinosEs[c.slug])
          .map((c) => ({
            url: absolute(`/es/resenas/${c.slug}`),
            lastModified: c.lastChecked ?? c.reported?.asOf ?? today,
            alternates: { languages: { en: absolute(`/reviews/${c.slug}`) } },
          })),
      ];
    case "bonus":
      return bonusCasinos().map((c) => ({
        url: absolute(`/bonus/${c.slug}`),
        lastModified: c.lastChecked ?? c.reported?.asOf ?? today,
      }));
    case "guides":
      return publishedGuides().map((g) => ({ url: absolute(`/guides/${g.slug}`), lastModified: g.updated }));
    default:
      return [];
  }
}
