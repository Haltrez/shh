import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guiasEs, findGuiaEs } from "@/content/es/guias";
import { getGuide } from "@/content/guides";
import type { Guide } from "@/content/types";
import { Blocks } from "@/components/Blocks";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TopPicks } from "@/components/TopPicks";
import { article, breadcrumbs, faqPage, howTo } from "@/lib/schema";
import { formatDateL } from "@/lib/i18n";
import { ogPath } from "@/lib/og-path";
import { seo } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

// Scheduled Spanish guides render on first request after their release date, then refresh hourly.
export const dynamicParams = true;
export const revalidate = 3600;
export function generateStaticParams() {
  return guiasEs().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = findGuiaEs((await params).slug);
  if (!g) return {};
  const en = (g.en ? getGuide(g.en) : undefined);
  return seo({
    title: `${g.title} | shh`,
    description: g.description,
    path: `/es/guias/${g.slug}`,
    image: g.casino ? ogPath.casino(g.casino, "es") : ogPath.text(g.h1, "es"),
    absolute: true,
    type: "article",
    locale: "es",
    modifiedTime: g.updated,
    languages: en ? { en: `/guides/${en.slug}`, es: `/es/guias/${g.slug}` } : undefined,
  });
}

export default async function GuiaPage({ params }: Props) {
  const g = findGuiaEs((await params).slug);
  if (!g) notFound();
  const ht = g.howTo ? howTo(g as unknown as Guide) : null;
  const en = (g.en ? getGuide(g.en) : undefined);
  const related = g.related.map(findGuiaEs).filter((x) => x !== undefined);

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/es">Inicio</Link> / <Link href="/es/guias">Guías</Link> / {g.category}</div>
        <h1 className="prose">{g.h1}</h1>
        <p className="meta-strip"><span>{g.category}</span><span>actualizado {formatDateL(g.updated, "es")}</span></p>
      </div>
      <div className="wrap layout-article">
        <article className="prose">
          <Blocks blocks={g.body.slice(0, 1)} lang="es" />
          <TopPicks place={`es-guide-${g.slug}`} title="Aceptan toda Latinoamérica" lang="es" only={(c) => Boolean(c.latam)} />
          <Blocks blocks={g.body.slice(1)} lang="es" />
          {g.faq?.length ? (
            <>
              <h2 id="preguntas">Preguntas</h2>
              <Faq items={g.faq} />
            </>
          ) : null}
          {(g.sources ?? en?.sources)?.length ? (
            <>
              <h2 id="fuentes">Fuentes</h2>
              <ul className="sources">
                {(g.sources ?? en?.sources)!.map((s) => (
                  <li key={s.url}><a href={s.url} rel="nofollow noopener" target="_blank">{s.name}</a></li>
                ))}
              </ul>
            </>
          ) : null}
          <p className="faint" style={{ fontSize: 14 }}>
            +18. Esta guía es información general, no asesoría financiera, legal ni fiscal. Juega solo donde sea legal
            para ti.{en ? <> Versión en inglés: <Link href={`/guides/${en.slug}`} hrefLang="en">{en.h1}</Link>.</> : null}
          </p>
        </article>
        <aside className="grid">
          <div className="card">
            <h3 style={{ fontSize: "1rem" }}>Sigue leyendo</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {related.map((r) => <li key={r.slug}><Link href={`/es/guias/${r.slug}`}>{r.h1}</Link></li>)}
              <li><Link href="/es/casinos-sin-kyc">Casinos sin KYC, clasificados</Link></li>
              <li><Link href="/es/bonos">Bonos de casinos cripto</Link></li>
            </ul>
          </div>
        </aside>
      </div>
      <JsonLd
        data={[
          article({ headline: g.h1, description: g.description, path: `/es/guias/${g.slug}`, dateModified: g.updated }),
          breadcrumbs([["Inicio", "/es"], ["Guías", "/es/guias"], [g.h1, `/es/guias/${g.slug}`]]),
          ...(ht ? [ht] : []),
          ...(g.faq?.length ? [faqPage(g.faq)] : []),
        ]}
      />
    </>
  );
}
