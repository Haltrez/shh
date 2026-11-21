import Link from "next/link";
import type { Metadata } from "next";
import { Lock } from "lucide-react";
import { allCasinos } from "@/lib/data";
import { rank, isPublished } from "@/lib/score";
import { seo } from "@/lib/seo";
import { faqPage, itemList } from "@/lib/schema";
import { CasinoCard } from "@/components/CasinoCard";
import { TopPicks } from "@/components/TopPicks";
import { Faq } from "@/components/Faq";
import { Caveat } from "@/components/Caveat";
import { JsonLd } from "@/components/JsonLd";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Casinos Cripto Sin KYC ${year}: Ranking de Privacidad | shh`,
  description:
    "Los mejores casinos cripto sin KYC, clasificados por lo que realmente piden: documento al registrarte, controles al retirar, velocidad y monedas.",
  path: "/es",
  absolute: true,
  locale: "es",
  languages: { en: "/", es: "/es" },
});

const FAQ = [
  { q: "¿Qué es un casino sin KYC?", a: "Un casino cripto que te deja registrarte, depositar y normalmente retirar sin subir un documento de identidad. Casi todos se reservan el derecho a pedirlo en casos concretos, como retiros grandes o controles contra el lavado de dinero. Indicamos cuándo en cada reseña." },
  { q: "¿Jugar con cripto es anónimo?", a: "No. Es privado, no anónimo. El casino puede no tener tu documento, pero el exchange donde compraste sí, y la blockchain es pública." },
  { q: "¿Puedo usar una VPN?", a: "Una VPN protege tu privacidad, pero no cambia dónde es legal jugar. La mayoría de los casinos prohíben usarla para saltarse restricciones de país y pueden anular las ganancias." },
  { q: "¿Cuál es el casino cripto más rápido para retirar?", a: "En nuestras pruebas, MetaWin pagó en unos 10 segundos; el resto de nuestros socios, en 3 a 5 minutos." },
];

export default function InicioEs() {
  const ranked = rank(allCasinos.filter(isPublished));
  const latam = ranked.filter((c) => c.latam);
  const others = ranked.filter((c) => !c.latam);
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Lock size={14} aria-hidden /> sin KYC · poco KYC · solo cripto</div>
            <h1>
              <span className="h1-kicker">Casinos cripto sin KYC.</span>
              Juega sin <span className="redact" tabIndex={0}>subir</span> tu documento.
            </h1>
            <p className="lead">
              Qué casinos cripto te dejan jugar sin documento, qué tan rápido pagan, qué monedas aceptan y exactamente
              cuándo pueden pedirte identificarte. Respuestas directas, verificadas con los términos de cada casino.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              <Link className="btn btn-primary" href="/es/casinos-sin-kyc">Ver el ranking</Link>
            </div>
          </div>
          <div className="hero-picks">
            <TopPicks place="es-home-hero" title="Aceptan toda Latinoamérica" lang="es" only={(c) => Boolean(c.latam)} />
          </div>
        </div>
      </section>

      <section className="section" id="resenas">
        <div className="wrap">
          <div className="section-head">
            <h2>Los mejores casinos cripto sin KYC</h2>
            <span className="mono">aceptan jugadores de toda Latinoamérica</span>
          </div>
          <div className="grid">
            {latam.map((c, i) => <CasinoCard key={c.slug} c={c} rank={i + 1} lang="es" />)}
          </div>
          <h3 style={{ marginTop: 32 }}>Otros casinos que analizamos</h3>
          <p className="dim" style={{ fontSize: 15 }}>
            Estos casinos restringen algunos países de la región. Revisa sus términos antes de registrarte.
          </p>
          <div className="grid">
            {others.map((c, i) => <CasinoCard key={c.slug} c={c} rank={latam.length + i + 1} lang="es" />)}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap prose">
          <h2 style={{ marginTop: 0 }}>Preguntas</h2>
          <Faq items={FAQ} />
          <Caveat text="Atención: juega solo donde el juego online sea legal para ti. Una VPN no cambia eso, y la mayoría de los casinos anulan las ganancias si se incumplen sus reglas de país." />
        </div>
      </section>

      <JsonLd data={[faqPage(FAQ), itemList("Mejores casinos cripto sin KYC", ranked)]} />
    </>
  );
}
