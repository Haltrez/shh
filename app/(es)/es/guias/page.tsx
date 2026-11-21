import Link from "next/link";
import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { breadcrumbs } from "@/lib/schema";
import { guiasEs } from "@/content/es/guias";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = seo({
  title: "Guías de Cripto y Casinos Sin KYC",
  description: "Guías en español: cómo comprar USDT en TRC20, cómo depositar cripto en un casino y qué tan privado es realmente apostar con cripto.",
  path: "/es/guias",
  locale: "es",
  languages: { en: "/guides", es: "/es/guias" },
});

export default function GuiasEs() {
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/es">Inicio</Link> / Guías</div>
        <h1>Guías</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          Lo básico para jugar con cripto de forma privada y sin errores caros. Más guías en inglés en{" "}
          <Link href="/guides" hrefLang="en">shh guides</Link>.
        </p>
      </div>
      <div className="wrap" style={{ paddingBottom: 56 }}>
        <h2 className="sr-only">Todas las guías</h2>
        <div className="grid grid-2">
          {guiasEs.map((g) => (
            <Link key={g.slug} href={`/es/guias/${g.slug}`} className="card" style={{ textDecoration: "none" }}>
              <span className="mono faint">{g.category}</span>
              <h3 style={{ margin: "6px 0" }}>{g.h1}</h3>
              <p className="dim" style={{ margin: 0, fontSize: 15 }}>{g.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <JsonLd data={[breadcrumbs([["Inicio", "/es"], ["Guías", "/es/guias"]])]} />
    </>
  );
}
