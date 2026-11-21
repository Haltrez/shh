import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, X } from "lucide-react";
import { allCasinos, findCasino } from "@/lib/data";
import { isPublished, privacyScore, kycLevelOf, isReportedOnly, coinsOf } from "@/lib/score";
import { seo, clip } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { casinoText, formatDateL } from "@/lib/i18n";
import { casinosEs } from "@/data/casinos-es";
import { guiasEs } from "@/content/es/guias";
import { PrivacyMeter } from "@/components/PrivacyMeter";
import { KycBadge } from "@/components/KycBadge";
import { CasinoLogo } from "@/components/CasinoLogo";
import { Caveat } from "@/components/Caveat";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TopPicks } from "@/components/TopPicks";
import { StickyCta } from "@/components/StickyCta";

type Props = { params: Promise<{ casino: string }> };

export const dynamicParams = false;
export const revalidate = 3600;
export function generateStaticParams() {
  return allCasinos.filter((c) => isPublished(c) && casinosEs[c.slug]).map((c) => ({ casino: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = findCasino((await params).casino);
  if (!c) return {};
  const tx = casinoText(c, "es");
  return seo({
    title: `${c.name}: Reseña ${new Date().getFullYear()}, KYC y Retiros`,
    description: clip(`Reseña de ${c.name}: ${tx.summary} Retiros en ${tx.payout}.${tx.offer ? ` Bono: ${tx.offer}.` : ""}`),
    path: `/es/resenas/${c.slug}`,
    type: "article",
    locale: "es",
    modifiedTime: c.lastChecked ?? c.reported?.asOf,
    languages: { en: `/reviews/${c.slug}`, es: `/es/resenas/${c.slug}` },
  });
}

export default async function ResenaEs({ params }: Props) {
  const c = findCasino((await params).casino);
  if (!c || !casinosEs[c.slug]) notFound();
  const tx = casinoText(c, "es");
  const updated = c.lastChecked ?? c.reported?.asOf;
  const coins = coinsOf(c);
  const cta = c.offer ? "Reclamar bono" : `Ir a ${c.name}`;

  const faq = [
    { q: `¿${c.name} pide KYC?`, a: tx.summary },
    { q: `¿Qué tan rápido paga ${c.name}?`, a: `En nuestras pruebas, los retiros llegaron en ${tx.payout}.` },
    ...(tx.offer ? [{ q: `¿${c.name} tiene código de bono?`, a: `No necesitas código. La oferta (${tx.offer}) se aplica al registrarte con nuestro enlace. +18, aplican T&C.` }] : [{ q: `¿${c.name} tiene bono de bienvenida?`, a: `${c.name} no tiene bono de bienvenida ahora mismo, así que no hay requisitos de apuesta que cumplir.` }]),
    ...(c.licence ? [{ q: `¿${c.name} tiene licencia?`, a: `Sí. Sus términos indican: ${c.licence.value}.` }] : []),
    { q: `¿Puedo usar una VPN en ${c.name}?`, a: "Una VPN sirve para tu privacidad general, pero los términos de casi todos los casinos prohíben usarla para acceder desde un país restringido. Juega solo donde sea legal para ti." },
  ];

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/es">Inicio</Link> / <Link href="/es/casinos-sin-kyc">Reseñas</Link> / {c.name}</div>
        {c.logo ? <div className="review-logo" aria-hidden><CasinoLogo c={c} size={44} /></div> : null}
        <h1>Reseña de {c.name}: KYC, retiros y bono</h1>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <PrivacyMeter score={privacyScore(c)} />
          <KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} lang="es" />
          {c.featured ? <span className="badge badge-featured">Destacado</span> : null}
          {updated ? <span className="mono">actualizado {formatDateL(updated, "es")}</span> : null}
        </div>
      </div>

      <div className="wrap layout-article">
        <article className="prose">
          <h2 style={{ marginTop: 0 }}>Veredicto</h2>
          <p style={{ fontSize: "1.1rem" }}>{tx.verdict}</p>
          {c.affiliateUrl ? (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", margin: "20px 0" }}>
              <a className="btn btn-primary" href={`/go/${c.slug}?pos=es-review`} rel="sponsored nofollow noopener" target="_blank">
                {cta} <ArrowUpRight size={16} aria-hidden />
              </a>
              <span className="faint" style={{ fontSize: 13 }}>+18 · Aplican T&amp;C</span>
            </div>
          ) : null}

          <h2>Datos clave</h2>
          <div className="table-wrap" style={{ marginBottom: 24 }}>
            <table className="data-table">
              <tbody>
                <tr><td>KYC</td><td><KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} lang="es" /> {tx.summary}</td></tr>
                <tr><td>Retiro (nuestras pruebas)</td><td>{tx.payout}</td></tr>
                {coins?.length ? <tr><td>Monedas</td><td className="mono">{coins.join(" ")}</td></tr> : null}
                {c.minDepositUsd ? <tr><td>Depósito mínimo</td><td>{c.minDepositUsd.value} $</td></tr> : null}
                {tx.withdrawalLimits ? <tr><td>Límites de retiro</td><td>{tx.withdrawalLimits}</td></tr> : null}
                {c.licence ? <tr><td>Licencia</td><td>{c.licence.value}</td></tr> : null}
                <tr><td>Bono</td><td>{tx.offer ?? "Sin bono de bienvenida"} · <Link href={`/es/bonos/${c.slug}`}>detalles del bono</Link></td></tr>
              </tbody>
            </table>
          </div>

          {tx.kycInPractice.length ? (
            <>
              <h2>El KYC en la práctica</h2>
              {tx.kycInPractice.map((p) => <p key={p}>{p}</p>)}
            </>
          ) : null}

          <h2>VPN y reglas de país</h2>
          <Caveat text="Aviso sobre VPN: una VPN protege tu privacidad en internet, pero no cambia dónde puedes jugar legalmente. La mayoría de los casinos prohíben usar una VPN para acceder desde un país restringido y pueden cerrar la cuenta y quedarse con las ganancias. Juega solo donde el juego online sea legal para ti." />

          <h2>Pros y contras</h2>
          <div className="grid grid-2 proscons">
            <div className="card">
              <h3><Check size={16} color="var(--accent)" aria-hidden /> Pros</h3>
              <ul>{tx.pros.map((p) => <li key={p}><Check size={14} color="var(--accent)" aria-hidden style={{ flex: "none" }} /> {p}</li>)}</ul>
            </div>
            <div className="card">
              <h3><X size={16} color="var(--danger)" aria-hidden /> Contras</h3>
              <ul>{tx.cons.map((p) => <li key={p}><X size={14} color="var(--danger)" aria-hidden style={{ flex: "none" }} /> {p}</li>)}</ul>
            </div>
          </div>

          <h2>Juego responsable</h2>
          <p>Fija un límite de depósito antes de jugar. Si necesitas un descanso, usa las herramientas de pausa o autoexclusión del casino.</p>

          {guiasEs().some((g) => g.casino === c.slug) ? (
            <>
              <h2>Más sobre {c.name}</h2>
              <ul>
                {guiasEs().filter((g) => g.casino === c.slug).map((g) => (
                  <li key={g.slug}><Link href={`/es/guias/${g.slug}`}>{g.h1}</Link></li>
                ))}
              </ul>
            </>
          ) : null}

          <h2>Preguntas sobre {c.name}</h2>
          <Faq items={faq} />
          <p className="faint" style={{ fontSize: 14 }}>
            Reseña completa con fuentes (en inglés): <Link href={`/reviews/${c.slug}`} hrefLang="en">{c.name} review</Link>.
          </p>
        </article>
        <aside className="grid">
          <TopPicks place={`es-review-${c.slug}`} title="Otras opciones" exclude={c.slug} lang="es" only={(x) => Boolean(x.latam)} />
        </aside>
      </div>

      {c.affiliateUrl ? (
        <StickyCta name={c.name} logo={c.logo} href={`/go/${c.slug}?pos=es-review-sticky`} label={cta} sub={tx.offer ?? tx.summary} />
      ) : null}

      <JsonLd data={[breadcrumbs([["Inicio", "/es"], ["Reseñas", "/es/casinos-sin-kyc"], [c.name, `/es/resenas/${c.slug}`]]), faqPage(faq)]} />
    </>
  );
}
