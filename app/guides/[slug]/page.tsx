import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/content/guides";
import { Blocks } from "@/components/Blocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides, RelatedReviews } from "@/components/Related";
import { article, breadcrumbs, faqPage, howTo } from "@/lib/schema";
import { formatDate } from "@/lib/format";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return {
    title: { absolute: `${g.title} | shh` },
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: "article", modifiedTime: g.updated },
  };
}

export default async function GuidePage({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const ht = g.howTo ? howTo(g) : null;

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
          <Blocks blocks={g.body} />
          {g.faq?.length ? (
            <>
              <h2 id="faq">Questions</h2>
              <Faq items={g.faq} />
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
