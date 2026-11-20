import Link from "next/link";
import type { ReactNode } from "react";
import type { Block } from "@/content/types";
import { allCasinos } from "@/lib/data";
import { rank, isPublished } from "@/lib/score";
import { breadcrumbs, faqPage, itemList } from "@/lib/schema";
import { formatDateL } from "@/lib/i18n";
import { CasinoCard } from "./CasinoCard";
import { Blocks } from "./Blocks";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";

/** Spanish keyword landing page: LatAm-wide partners first, then the rest. */
export function EsLanding({
  path, h1, lead, body, faq, extra,
}: {
  path: string; h1: string; lead: string; body: Block[]; faq: { q: string; a: string }[]; extra?: ReactNode;
}) {
  const ranked = rank(allCasinos.filter(isPublished));
  const latam = ranked.filter((c) => c.latam);
  const others = ranked.filter((c) => !c.latam);
  const last = ranked.map((c) => c.lastChecked ?? c.reported?.asOf ?? "").filter(Boolean).sort().at(-1)!;
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/es">Inicio</Link> / {h1}</div>
        <h1>{h1}</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>{lead}</p>
        <p className="meta-strip"><span>{ranked.length} casinos</span><span>actualizado {formatDateL(last, "es")}</span></p>
      </div>
      <div className="wrap" style={{ paddingBottom: 56 }}>
        <h2 style={{ marginTop: 0 }}>Aceptan jugadores de toda Latinoamérica</h2>
        <div className="grid" style={{ marginBottom: 28 }}>
          {latam.map((c, i) => <CasinoCard key={c.slug} c={c} rank={i + 1} lang="es" />)}
        </div>
        {extra}
        <div className="prose">
          <Blocks blocks={body} h2Seen lang="es" />
          <h2>Otros casinos que analizamos</h2>
          <p className="dim">Restringen algunos países de la región. Revisa sus términos antes de registrarte.</p>
        </div>
        <div className="grid" style={{ marginBottom: 28 }}>
          {others.map((c, i) => <CasinoCard key={c.slug} c={c} rank={latam.length + i + 1} lang="es" />)}
        </div>
        <div className="prose">
          <h2>Preguntas</h2>
          <Faq items={faq} />
        </div>
      </div>
      <JsonLd data={[itemList(h1, ranked), faqPage(faq), breadcrumbs([["Inicio", "/es"], [h1, path]])]} />
    </>
  );
}
