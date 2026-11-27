import Link from "next/link";
import type { Metadata } from "next";
import { allCasinos } from "@/lib/data";
import { rank, isPublished } from "@/lib/score";
import { ogPath } from "@/lib/og-path";
import { seo } from "@/lib/seo";
import { breadcrumbs, faqPage, itemList } from "@/lib/schema";
import { formatDateL } from "@/lib/i18n";
import { CasinoCard } from "@/components/CasinoCard";
import { Faq } from "@/components/Faq";
import { Caveat } from "@/components/Caveat";
import { JsonLd } from "@/components/JsonLd";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Casinos Sin KYC ${year}: Sin Verificación, Clasificados`,
  description:
    "Casinos cripto sin KYC: juega sin verificar tu identidad, mira cuándo puede pedirla cada casino y qué tan rápido paga. Verificado con sus términos.",
  path: "/es/casinos-sin-kyc",
  image: ogPath.top("latam", "es"),
  locale: "es",
  languages: { en: "/no-kyc-casinos", es: "/es/casinos-sin-kyc" },
});

const FAQ = [
  { q: "¿Qué es un casino sin verificación?", a: "Otro nombre para un casino sin KYC: puedes registrarte y jugar sin subir documentos. \"Sin verificación\" suele significar sin verificación para empezar, no nunca." },
  { q: "¿Puedo jugar en un casino sin documento?", a: "Sí. Todos los casinos de esta página te dejan empezar sin documento. KoalaBet no pide nada hasta 5.000 $ en depósitos o retiros; en MetaWin te registras conectando tu wallet." },
  { q: "¿Puedo retirar sin verificarme?", a: "Normalmente sí, en montos habituales. Los términos de cada casino fijan cuándo pueden pedir documentos, sobre todo en retiros grandes o controles antilavado." },
  { q: "¿Son legales los casinos sin KYC?", a: "Depende de la licencia del casino y de la ley de tu país. Juega solo donde el juego online sea legal para ti." },
];

export default function CasinosSinKyc() {
  const ranked = rank(allCasinos.filter(isPublished));
  const latam = ranked.filter((c) => c.latam);
  const others = ranked.filter((c) => !c.latam);
  const last = ranked.map((c) => c.lastChecked ?? c.reported?.asOf ?? "").filter(Boolean).sort().at(-1)!;
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/es">Inicio</Link> / Casinos sin KYC</div>
        <h1>Casinos cripto sin KYC, clasificados</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          Un casino sin KYC te deja registrarte y jugar sin subir un documento. No significa que nunca te lo vayan a
          pedir. Aquí están todos los casinos que analizamos, ordenados por lo poco que piden y cuándo.
        </p>
        <p className="meta-strip"><span>{ranked.length} casinos</span><span>actualizado {formatDateL(last, "es")}</span></p>
      </div>

      <div className="wrap" style={{ paddingBottom: 56 }}>
        <h2 style={{ marginTop: 0 }}>Aceptan jugadores de toda Latinoamérica</h2>
        <div className="grid" style={{ marginBottom: 32 }}>
          {latam.map((c, i) => <CasinoCard key={c.slug} c={c} rank={i + 1} lang="es" />)}
        </div>
        <h2>Otros casinos sin KYC</h2>
        <p className="dim prose">Estos casinos restringen algunos países de la región (por ejemplo Brasil o Perú). Revisa sus términos antes de registrarte.</p>
        <div className="grid" style={{ marginBottom: 32 }}>
          {others.map((c, i) => <CasinoCard key={c.slug} c={c} rank={latam.length + i + 1} lang="es" />)}
        </div>

        <div className="prose">
          <h2>Qué significa &ldquo;sin KYC&rdquo; aquí</h2>
          <p>
            KYC (Know Your Customer, &ldquo;conoce a tu cliente&rdquo;) es la verificación de identidad: documento, selfie
            y a veces comprobante de domicilio. Damos a cada casino una de tres etiquetas, según sus propios términos:
          </p>
          <ul>
            <li><b style={{ color: "var(--accent)" }}>Sin KYC</b>: sin documento al registrarte ni en retiros normales; controles solo en casos concretos.</li>
            <li><b style={{ color: "var(--warn)" }}>KYC a petición</b>: sin documento al registrarte, pero pueden pedirlo, a veces sin umbral fijo.</li>
            <li><b style={{ color: "var(--danger)" }}>KYC completo</b>: documento antes de jugar.</li>
          </ul>
          <Caveat text="Atención: si un casino te pide documento y no lo entregas, normalmente puede retener el retiro según sus términos. Decide antes de depositar si estarías dispuesto a verificarte." />

          <h2>VPN y reglas de país</h2>
          <Caveat text="Aviso sobre VPN: una VPN protege tu privacidad en internet, pero no cambia dónde puedes jugar legalmente. La mayoría de los casinos prohíben usar una VPN para acceder desde un país restringido y pueden cerrar la cuenta y quedarse con las ganancias. Juega solo donde el juego online sea legal para ti." />

          <h2>Preguntas</h2>
          <Faq items={FAQ} />
        </div>
      </div>

      <JsonLd
        data={[
          itemList("Casinos cripto sin KYC", ranked),
          faqPage(FAQ),
          breadcrumbs([["Inicio", "/es"], ["Casinos sin KYC", "/es/casinos-sin-kyc"]]),
        ]}
      />
    </>
  );
}
