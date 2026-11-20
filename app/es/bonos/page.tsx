import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Gift } from "lucide-react";
import { seo } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { casinoText } from "@/lib/i18n";
import { bonosCasinos } from "@/lib/bonos-es";
import { CasinoLogo } from "@/components/CasinoLogo";
import { Caveat } from "@/components/Caveat";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Bonos de Casinos Cripto ${year}: Sin Código`,
  description: "Bonos de bienvenida de casinos cripto sin KYC: qué ofrece cada uno, si necesitas código y qué revisar en los términos antes de aceptarlo.",
  path: "/es/bonos",
  locale: "es",
  languages: { en: "/bonus", es: "/es/bonos" },
});

const FAQ = [
  { q: "¿Necesito un código de bono?", a: "No. Las ofertas de esta página se aplican al registrarte con nuestro enlace, sin código." },
  { q: "¿Puedo retirar el bono enseguida?", a: "Normalmente no. Los bonos de bienvenida tienen requisitos de apuesta antes de poder retirar las ganancias. Léelos antes de aceptar." },
  { q: "¿Aceptar un bono cambia las reglas de KYC?", a: "No cambia la política de KYC del casino, pero los términos del bono pueden añadir controles antes de retirar ganancias del bono." },
];

export default function BonosEs() {
  const list = bonosCasinos();
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/es">Inicio</Link> / Bonos</div>
        <h1>Bonos de casinos cripto</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          Las ofertas de bienvenida actuales de los casinos que analizamos, tal como nos las dieron los propios casinos.
          Primero los que aceptan jugadores de toda Latinoamérica.
        </p>
      </div>
      <div className="wrap" style={{ paddingBottom: 56 }}>
        <h2 className="sr-only">Ofertas</h2>
        <div className="grid grid-2">
          {list.map((c) => {
            const tx = casinoText(c, "es");
            return (
              <div key={c.slug} className="card" style={{ minWidth: 0 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                  {c.logo ? <CasinoLogo c={c} size={32} /> : null}
                  <h3 style={{ margin: 0 }}><Link href={`/es/bonos/${c.slug}`}>Bono de {c.name}</Link></h3>
                  {c.latam ? <span className="badge">Toda LatAm</span> : null}
                </div>
                <p style={{ margin: "10px 0" }}><Gift size={15} aria-hidden /> {tx.offer ?? "Sin bono de bienvenida"}</p>
                <p className="dim" style={{ fontSize: 14, margin: "0 0 12px" }}>{tx.summary}</p>
                <a className="btn btn-primary" href={`/go/${c.slug}?pos=es-bonos`} rel="sponsored nofollow noopener" target="_blank">
                  {tx.offer ? "Reclamar bono" : `Ir a ${c.name}`} <ArrowUpRight size={16} aria-hidden />
                </a>
              </div>
            );
          })}
        </div>
        <div className="prose" style={{ marginTop: 32 }}>
          <Caveat text="Atención: +18, aplican T&C. Los bonos tienen requisitos de apuesta y reglas de país. Juega solo donde el juego online sea legal para ti." />
          <h2>Preguntas</h2>
          <Faq items={FAQ} />
        </div>
      </div>
      <JsonLd data={[breadcrumbs([["Inicio", "/es"], ["Bonos", "/es/bonos"]]), faqPage(FAQ)]} />
    </>
  );
}
