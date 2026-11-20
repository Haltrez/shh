import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { publishedGuides, getGuide } from "@/content/guides";
import { Blocks } from "@/components/Blocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides, RelatedReviews } from "@/components/Related";
import { article, breadcrumbs, faqPage, howTo } from "@/lib/schema";
import { formatDate } from "@/lib/format";
import { site } from "@/lib/site";
import { VpnBox } from "@/components/VpnBox";
import { TopPicks } from "@/components/TopPicks";
import { seo } from "@/lib/seo";
import { CasinoCard } from "@/components/CasinoCard";
import { findCasino } from "@/lib/data";
import { guiasEs } from "@/content/es/guias";

type Props = { params: Promise<{ slug: string }> };

// Scheduled guides (publishAt in the future) aren't prebuilt; once their date passes,
// the first request renders them and the page is cached, refreshing hourly.
export const dynamicParams = true;
export const revalidate = 3600;
export function generateStaticParams() {
  return publishedGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  const es = guiasEs.find((x) => x.en === g.slug);
  return seo({
    title: `${g.title} | shh`,
    description: g.description,
    path: `/guides/${g.slug}`,
    absolute: true,
    type: "article",
    modifiedTime: g.updated,
    ...(es ? { languages: { en: `/guides/${g.slug}`, es: `/es/guias/${es.slug}` } } : {}),
  });
}

export default async function GuidePage({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const ht = g.howTo ? howTo(g) : null;
  const focus = g.casino ? findCasino(g.casino) : undefined;

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / <Link href="/guides">Guides</Link> / {g.category}</div>
        <h1 className="prose">{g.h1}</h1>
        <p className="meta-strip">
          <span>{g.category}</span>
          <span>updated {formatDate(g.updated)}</span>
          <span>by <Link href={site.author.url}>{site.author.name}</Link></span>
        </p>
      </div>
      <div className="wrap layout-article">
        <article className="prose">
          <Blocks blocks={g.body.slice(0, 1)} />
          {focus ? (
            <div style={{ margin: "8px 0 32px" }}>
              <CasinoCard c={focus} />
            </div>
          ) : (
            <TopPicks place={`guide-${g.slug}`} />
          )}
          <Blocks blocks={g.body.slice(1)} />
          {focus ? <TopPicks place={`guide-${g.slug}-alt`} title="Other top picks" exclude={focus.slug} /> : null}
          {g.category === "Privacy" || g.slug === "crypto-wallet-for-gambling" || g.slug === "how-to-buy-crypto" ? (
            <div style={{ margin: "32px 0" }}>
              <VpnBox pos={`guide-${g.slug}`} />
            </div>
          ) : null}
          {g.faq?.length ? (
            <>
              <h2 id="faq">Questions</h2>
              <Faq items={g.faq} />
            </>
          ) : null}
          {g.sources?.length ? (
            <>
              <h2 id="sources">Sources</h2>
              <ul className="sources">
                {g.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="nofollow noopener" target="_blank">{s.name}</a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <p className="faint" style={{ fontSize: 14 }}>
            18+. This guide is general information, not financial, legal or tax advice. Only gamble where it&apos;s
            legal for you. <Link href="/responsible-gambling">Responsible gambling</Link>.
          </p>
        </article>
        <aside className="grid">
          <RelatedReviews prefer={g.relatedReviews} />
          <RelatedGuides slugs={g.relatedGuides} title="Read next" />
          {g.category !== "Privacy" ? <VpnBox compact pos={`guide-sidebar-${g.slug}`} /> : null}
          <div className="card">
            <h3 style={{ fontSize: "1rem" }}>Start here</h3>
            <p className="dim" style={{ fontSize: 15, margin: 0 }}>
              <Link href="/no-kyc-casinos">No-KYC casinos, ranked</Link>: every casino we cover, with each one&apos;s
              ID checks listed.
            </p>
          </div>
        </aside>
      </div>
      <JsonLd
        data={[
          article({ headline: g.h1, description: g.description, path: `/guides/${g.slug}`, dateModified: g.updated }),
          breadcrumbs([["Home", "/"], ["Guides", "/guides"], [g.h1, `/guides/${g.slug}`]]),
          ...(ht ? [ht] : []),
          ...(g.faq?.length ? [faqPage(g.faq)] : []),
        ]}
      />
    </>
  );
}
