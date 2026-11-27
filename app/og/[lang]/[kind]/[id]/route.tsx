import { renderOg } from "@/lib/og";
import { allCasinos } from "@/lib/data";
import { isPublished } from "@/lib/score";
import { lists } from "@/data/lists";
import { comparePairs } from "@/lib/compare";
import { casinosEs } from "@/data/casinos-es";

type Params = { lang: string; kind: string; id: string };

// Casino, comparison and ranking images are prebuilt; guide/title images render on first request, then cache.
export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams(): Params[] {
  const pub = allCasinos.filter(isPublished);
  const out: Params[] = [];
  for (const c of pub) {
    out.push({ lang: "en", kind: "casino", id: c.slug }, { lang: "en", kind: "bonus", id: c.slug });
    if (casinosEs[c.slug]) out.push({ lang: "es", kind: "casino", id: c.slug }, { lang: "es", kind: "bonus", id: c.slug });
  }
  for (const p of comparePairs()) out.push({ lang: "en", kind: "vs", id: p.slug });
  out.push({ lang: "en", kind: "top", id: "all" }, { lang: "es", kind: "top", id: "latam" });
  for (const l of lists) out.push({ lang: "en", kind: "top", id: `list-${l.slug}` });
  return out;
}

export async function GET(_req: Request, { params }: { params: Promise<Params> }) {
  const { lang: rawLang, kind, id } = await params;
  const lang = rawLang === "es" ? "es" : "en";
  let opts: Parameters<typeof renderOg>[3];
  if (kind === "top" && id.startsWith("list-")) {
    const l = lists.find((x) => x.slug === id.slice(5));
    if (!l) return new Response("Not found", { status: 404 });
    opts = { filter: l.filter, kicker: l.short };
  } else if (kind === "top" && id === "all") {
    opts = { kicker: "No-KYC casinos, ranked" };
  } else if (kind === "top" && id === "latam") {
    opts = { kicker: "Casinos sin KYC" };
  }
  const img = await renderOg(lang, kind, id, opts);
  if (!img) return new Response("Not found", { status: 404 });
  img.headers.set("Cache-Control", "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400");
  return img;
}
