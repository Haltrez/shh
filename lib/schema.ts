import { site, absolute } from "./site";
import type { Casino } from "./types";
import type { Guide } from "@/content/types";

const org = {
  "@type": "Organization",
  "@id": `${site.url}/#org`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  description: site.description,
};

export const sitewide = [
  { "@context": "https://schema.org", ...org },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#org` },
  },
];

export const faqPage = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** Ranked list. Deliberately no Review / AggregateRating markup (see plan §5.3). */
export const itemList = (name: string, casinos: Casino[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  numberOfItems: casinos.length,
  itemListElement: casinos.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    url: absolute(`/reviews/${c.slug}`),
  })),
});

export const breadcrumbs = (trail: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name,
    item: absolute(path),
  })),
});

export const article = (opts: {
  headline: string;
  description: string;
  path: string;
  dateModified: string;
  datePublished?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: opts.headline,
  description: opts.description,
  mainEntityOfPage: absolute(opts.path),
  dateModified: opts.dateModified,
  datePublished: opts.datePublished ?? opts.dateModified,
  author: { "@type": "Person", name: site.author.name, url: absolute(site.author.url) },
  publisher: { "@id": `${site.url}/#org` },
});

export const howTo = (g: Guide) => {
  const block = g.body.find((b) => b.type === "steps");
  if (!block || block.type !== "steps") return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: g.h1,
    description: g.description,
    step: block.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      url: absolute(`/guides/${g.slug}#step-${i + 1}`),
    })),
  };
};
