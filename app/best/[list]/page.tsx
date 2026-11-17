import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allCasinos } from "@/lib/data";
import { rank, isPublished } from "@/lib/score";
import { lists, getList, withYear } from "@/data/lists";
import { CasinoCard } from "@/components/CasinoCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides, RelatedLists } from "@/components/Related";
import { breadcrumbs, faqPage, itemList } from "@/lib/schema";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ list: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return lists.map((l) => ({ list: l.slug }));
}

const matches = (slug: string) => {
  const l = getList(slug);
  return l ? rank(allCasinos.filter((c) => isPublished(c) && l.filter(c))) : [];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { list } = await params;
  const l = getList(list);
  if (!l) return {};
  return {
    title: { absolute: `${withYear(l.title)} | shh` },
    description: l.description,
    alternates: { canonical: `/best/${l.slug}` },
    // An empty list is thin content: keep it out of the index until casinos qualify.
    robots: matches(list).length ? undefined : { index: false, follow: true },
  };
}

export default async function ListPage({ params }: Props) {
  const { list } = await params;
  const l = getList(list);
  if (!l) notFound();
  const ranked = matches(list);
  const lastChecked = ranked
    .map((c) => c.lastChecked ?? c.reported?.asOf)
    .filter((d): d is string => Boolean(d))
    .sort()
    .at(0);

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / <Link href="/no-kyc-casinos">Casinos</Link> / {l.short}</div>
        <h1>{l.h1}</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>{l.intro}</p>
        <p className="meta-strip">
          <span>Criteria: {l.criteria}</span>
          <span>{lastChecked ? `oldest update ${formatDate(lastChecked)}` : "not yet checked"}</span>
        </p>
      </div>

      <div className="wrap layout-article">
        <div className="prose">
          {ranked.length ? (
            <>
              <ComparisonTable casinos={ranked} />
              <h2>The picks</h2>
              <div className="grid">
                {ranked.map((c, i) => <CasinoCard key={c.slug} c={c} rank={i + 1} />)}
              </div>
            </>
          ) : (
            <div className="notice">
              We&apos;re still checking casinos against this list&apos;s criteria. Nothing is listed until it&apos;s
              verified. Meanwhile, see <Link href="/no-kyc-casinos">every casino we cover</Link>.
            </div>
          )}
          <h2>Questions</h2>
          <Faq items={l.faq} />
        </div>
        <aside className="grid">
          <RelatedGuides slugs={l.relatedGuides} />
          <RelatedLists slugs={lists.filter((x) => x.slug !== l.slug).slice(0, 5).map((x) => x.slug)} />
        </aside>
      </div>

      <JsonLd
        data={[
          itemList(l.h1, ranked),
          faqPage(l.faq),
          breadcrumbs([["Home", "/"], ["Casinos", "/no-kyc-casinos"], [l.short, `/best/${l.slug}`]]),
        ]}
      />
    </>
  );
}
