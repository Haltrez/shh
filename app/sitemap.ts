import type { MetadataRoute } from "next";
import { absolute } from "@/lib/site";
import { allCasinos } from "@/lib/data";
import { isPublished, rank } from "@/lib/score";
import { lists } from "@/data/lists";
import { guides } from "@/content/guides";
import { comparePairs } from "@/lib/compare";
import { bonusCasinos } from "@/lib/bonus";

/** Split sitemaps: /sitemap/pages.xml, /sitemap/reviews.xml, /sitemap/lists.xml, /sitemap/guides.xml */
export async function generateSitemaps() {
  return [{ id: "pages" }, { id: "reviews" }, { id: "lists" }, { id: "guides" }, { id: "compare" }, { id: "bonus" }];
}

const today = new Date().toISOString().slice(0, 10);

export default async function sitemap({ id }: { id: Promise<string> }): Promise<MetadataRoute.Sitemap> {
  const which = await id;
  const verified = allCasinos.filter(isPublished);
  // Pages with noindex are left out.
  switch (which) {
    case "pages":
      return ["/", "/no-kyc-casinos", "/guides", "/how-we-rate", "/responsible-gambling", "/about", "/contact", "/affiliate-disclosure", "/privacy"].map(
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
    case "bonus":
      return bonusCasinos().map((c) => ({
        url: absolute(`/bonus/${c.slug}`),
        lastModified: c.lastChecked ?? c.reported?.asOf ?? today,
      }));
    case "guides":
      return guides.map((g) => ({ url: absolute(`/guides/${g.slug}`), lastModified: g.updated }));
    default:
      return [];
  }
}
