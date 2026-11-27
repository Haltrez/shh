import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { findCasino } from "@/lib/data";
import { kycLevelOf, isReportedOnly } from "@/lib/score";
import { ogPath } from "@/lib/og-path";
import { seo, clip } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { casinoText } from "@/lib/i18n";
import { bonosCasinos } from "@/lib/bonos-es";
import { KycBadge } from "@/components/KycBadge";
import { CasinoLogo } from "@/components/CasinoLogo";
import { Steps } from "@/components/Blocks";
import { Caveat } from "@/components/Caveat";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TopPicks } from "@/components/TopPicks";
import { StickyCta } from "@/components/StickyCta";

type Props = { params: Promise<{ casino: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return bonosCasinos().map((c) => ({ casino: c.slug }));
}

const year = () => new Date().getFullYear();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = findCasino((await params).casino);
  if (!c) return {};
  const tx = casinoText(c, "es");
  return seo({
    title: `Código de Bono ${c.name} ${year()}: Sin Código`,
    description: clip(
      tx.offer
        ? `Bono de ${c.name} ${year()}: ${tx.offer}, sin código, con nuestro enlace. Cómo reclamarlo, las reglas de KYC y qué revisar antes.`
        : `¿Tiene bono ${c.name}? Ahora no hay bono de bienvenida ni código. Qué obtienes en su lugar, las reglas de KYC y cómo registrarte.`,
    ),
    path: `/es/bonos/${c.slug}`,
    image: ogPath.bonus(c.slug, "es"),
    type: "article",
    locale: "es",
    modifiedTime: c.lastChecked ?? c.reported?.asOf,
    languages: { en: `/bonus/${c.slug}`, es: `/es/bonos/${c.slug}` },
  });
}

export default async function BonoEs({ params }: Props) {
  const slug = (await params).casino;
  const c = bonosCasinos().find((x) => x.slug === slug);
  if (!c) notFound();
  const tx = casinoText(c, "es");
  const cta = tx.offer ? "Reclamar bono" : `Ir a ${c.name}`;
  const faq = [
    {
      q: `¿Hay código de bono para ${c.name}?`,
      a: tx.offer
        ? `No necesitas código. La oferta (${tx.offer}) se aplica al registrarte con nuestro enlace.`
        : `${c.name} no tiene bono de bienvenida ahora mismo, así que no hay código que introducir.`,
    },
    { q: `¿Necesito KYC para el bono de ${c.name}?`, a: `${tx.summary} El bono no cambia eso, pero sus términos pueden añadir controles antes de retirar ganancias del bono.` },
    { q: `¿Hay bono sin depósito en ${c.name}?`, a: `No mostramos ninguno. La única oferta que listamos es la de esta página; revisa la sección de promociones de ${c.name} para ver otras.` },
  ];
  const steps = [
    { name: "Abre el enlace", need: "Este enlace", text: `Usa el botón de esta página para ir a ${c.name}; así se aplica la oferta.` },
    { name: "Crea tu cuenta", need: c.walletSignup ? "Una wallet o un email" : "Un email", text: tx.summary },
    { name: "Haz tu primer depósito", need: "Cripto en tu wallet", text: "Elige moneda y red en la caja y envía desde tu wallet. Revisa el depósito mínimo del bono." },
  ];
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/es">Inicio</Link> / <Link href="/es/bonos">Bonos</Link> / {c.name}</div>
        {c.logo ? <div className="review-logo" aria-hidden><CasinoLogo c={c} size={44} /></div> : null}
        <h1>Código de bono de {c.name} {year()}</h1>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} lang="es" />
          {c.latam ? <span className="badge">Acepta toda Latinoamérica</span> : null}
        </div>
      </div>
      <div className="wrap layout-article">
        <article className="prose">
          <h2 style={{ marginTop: 0 }}>La oferta</h2>
          <p style={{ fontSize: "1.15rem" }}><b>{tx.offer ?? "Sin bono de bienvenida ahora mismo"}</b></p>
          <p>{tx.offer ? "No necesitas código: la oferta se aplica al registrarte con nuestro enlace." : `${c.name} no tiene bono, así que no hay requisitos de apuesta: lo que depositas es tuyo para jugar y retirar.`}</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", margin: "20px 0" }}>
            <a className="btn btn-primary" href={`/go/${c.slug}?pos=es-bono`} rel="sponsored nofollow noopener" target="_blank">
              {tx.offer ? `Reclamar bono en ${c.name}` : `Ir a ${c.name}`} <ArrowUpRight size={16} aria-hidden />
            </a>
            <span className="faint" style={{ fontSize: 13 }}>+18 · Aplican T&amp;C</span>
          </div>
          <h2>Cómo reclamarlo</h2>
          <Steps steps={steps} lang="es" />
          <h2>Qué revisar antes</h2>
          <ul>
            <li>Requisitos de apuesta y plazo para cumplirlos.</li>
            <li>Apuesta máxima permitida mientras el bono está activo.</li>
            <li>Juegos que cuentan para el requisito.</li>
            <li>Países excluidos de la oferta.</li>
          </ul>
          <Caveat text={`Atención: los términos del bono los fija el casino y pueden cambiar. Léelos en el sitio de ${c.name} antes de aceptar la oferta.`} />
          <h2>Preguntas</h2>
          <Faq items={faq} />
          <p className="faint" style={{ fontSize: 14 }}>
            Más sobre {c.name}: <Link href={`/es/resenas/${c.slug}`}>reseña completa</Link>.
          </p>
        </article>
        <aside className="grid">
          <TopPicks place={`es-bono-${c.slug}`} title="Otras opciones" exclude={c.slug} lang="es" only={(x) => Boolean(x.latam)} />
        </aside>
      </div>
      <StickyCta name={c.name} logo={c.logo} href={`/go/${c.slug}?pos=es-bono-sticky`} label={cta} sub={tx.offer ?? tx.summary} />
      <JsonLd data={[breadcrumbs([["Inicio", "/es"], ["Bonos", "/es/bonos"], [c.name, `/es/bonos/${c.slug}`]]), faqPage(faq)]} />
    </>
  );
}
