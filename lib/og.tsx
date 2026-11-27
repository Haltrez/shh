import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { allCasinos, findCasino } from "./data";
import { rank, isPublished, privacyScore, kycLevelOf } from "./score";
import { casinoText } from "./i18n";
import { site } from "./site";
import type { Casino } from "./types";

export const OG_SIZE = { width: 1200, height: 630 };
const BG = "#07080B";
const TEXT = "#E7E9EE";
const DIM = "#9AA1B2";
const ACCENT = "#7CF5C8";

/** Logo as a data URI (read from /public at build; fetched from the live site as a fallback). */
async function logoSrc(c: Casino): Promise<string | null> {
  if (!c.logo) return null;
  const type = c.logo.endsWith(".svg") ? "image/svg+xml" : "image/png";
  try {
    const buf = await readFile(join(process.cwd(), "public", c.logo));
    return `data:${type};base64,${buf.toString("base64")}`;
  } catch {
    try {
      const res = await fetch(`${site.url}${c.logo}`);
      if (!res.ok) return null;
      return `data:${type};base64,${Buffer.from(await res.arrayBuffer()).toString("base64")}`;
    } catch {
      return null;
    }
  }
}

/** A casino's logo at a given height (icon logos get the name next to them, like on the site). */
async function Logo({ c, h }: { c: Casino; h: number }) {
  const src = await logoSrc(c);
  if (!src) return <div style={{ display: "flex", fontSize: h * 0.8, fontWeight: 700, color: TEXT }}>{c.name}</div>;
  const w = Math.round(h * (c.logoAspect ?? 1));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: h * 0.3 }}>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img src={src} width={w} height={h} style={{ width: w, height: h }} />
      {c.logoIsMark ? <div style={{ display: "flex", fontSize: h * 0.75, fontWeight: 700, color: TEXT }}>{c.name}</div> : null}
    </div>
  );
}

/** Logo height that keeps a logo inside a max width. */
const fitH = (c: Casino, maxW: number, maxH: number) => {
  const aspect = (c.logoAspect ?? 1) * (c.logoIsMark ? 4 : 1);
  return Math.min(maxH, Math.floor(maxW / aspect));
};

/** Frame: dark grid, brand top-left, domain bottom-right. Key content stays in the central square. */
function Frame({ children, kicker }: { children: React.ReactNode; kicker: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: BG,
        backgroundImage: "linear-gradient(#161925 1px, transparent 1px), linear-gradient(90deg, #161925 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        color: TEXT,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ position: "absolute", top: 40, left: 48, display: "flex", alignItems: "center", gap: 12, fontSize: 30, fontWeight: 700 }}>
        <div style={{ width: 34, height: 13, background: ACCENT, borderRadius: 3 }} />
        shh
      </div>
      <div style={{ position: "absolute", bottom: 40, right: 48, display: "flex", fontSize: 24, color: DIM }}>shhcasinos.com</div>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, textTransform: "uppercase", color: ACCENT, marginBottom: 28 }}>{kicker}</div>
      {children}
    </div>
  );
}

const KYC_LABEL = {
  en: { none: "No KYC", "on-request": "KYC on request", full: "Full KYC" },
  es: { none: "Sin KYC", "on-request": "KYC a petición", full: "KYC completo" },
} as const;

function Pill({ children, color = ACCENT }: { children: React.ReactNode; color?: string }) {
  return (
    <div style={{ display: "flex", padding: "8px 22px", border: `2px solid ${color}`, borderRadius: 999, fontSize: 28, color }}>{children}</div>
  );
}

type Lang = "en" | "es";

async function casinoCard(c: Casino, lang: Lang, kicker: string) {
  const tx = casinoText(c, lang);
  const level = kycLevelOf(c);
  return (
    <Frame kicker={kicker}>
      <Logo c={c} h={fitH(c, 560, 150)} />
      <div style={{ display: "flex", gap: 18, marginTop: 40 }}>
        {level ? <Pill>{KYC_LABEL[lang][level]}</Pill> : null}
        <Pill color={TEXT}>{`${lang === "es" ? "Puntuación" : "Score"} ${privacyScore(c)}`}</Pill>
      </div>
      {tx.payout ? (
        <div style={{ display: "flex", marginTop: 22, fontSize: 28, color: DIM }}>{`${lang === "es" ? "Retiro" : "Payout"}: ${tx.payout}`}</div>
      ) : null}
    </Frame>
  );
}

async function topCard(casinos: Casino[], lang: Lang, kicker: string) {
  const top = casinos.slice(0, 3);
  return (
    <Frame kicker={kicker}>
      <div style={{ display: "flex", flexDirection: "column", gap: 26, alignItems: "flex-start" }}>
        {await Promise.all(
          top.map(async (c, i) => (
            <div key={c.slug} style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <div style={{ display: "flex", width: 56, fontSize: 40, fontWeight: 700, color: i === 0 ? ACCENT : DIM }}>{`#${i + 1}`}</div>
              <Logo c={c} h={fitH(c, 420, (c.logoAspect ?? 1) < 3 ? 96 : 72)} />
            </div>
          )),
        )}
      </div>
    </Frame>
  );
}

async function vsCard(a: Casino, b: Casino, lang: Lang) {
  return (
    <Frame kicker={lang === "es" ? "Comparativa" : "Head to head"}>
      <Logo c={a} h={fitH(a, 480, 100)} />
      <div style={{ display: "flex", margin: "26px 0", fontSize: 40, fontWeight: 700, color: ACCENT }}>vs</div>
      <Logo c={b} h={fitH(b, 480, 100)} />
    </Frame>
  );
}

function textCard(title: string, kicker: string) {
  const size = title.length > 60 ? 54 : title.length > 40 ? 62 : 72;
  return (
    <Frame kicker={kicker}>
      <div style={{ display: "flex", maxWidth: 900, textAlign: "center", justifyContent: "center", fontSize: size, fontWeight: 700, lineHeight: 1.15, letterSpacing: -1 }}>
        {title}
      </div>
    </Frame>
  );
}

const ranked = (filter?: (c: Casino) => boolean) => rank(allCasinos.filter((c) => isPublished(c) && (!filter || filter(c))));

/**
 * kinds:
 *  - casino/<slug>      review image (logo, KYC level, score, payout)
 *  - bonus/<slug>       same, "bonus" kicker
 *  - vs/<a>-vs-<b>      two logos
 *  - top/<scope>        top 3 logos (scope: all | latam | list:<filter-id>)
 *  - text/<base64url>   a title on the brand frame (guides, other pages)
 */
export async function renderOg(lang: Lang, kind: string, id: string, opts?: { kicker?: string; filter?: (c: Casino) => boolean }) {
  let el: React.ReactElement;
  if (kind === "casino" || kind === "bonus") {
    const c = findCasino(id);
    if (!c) return null;
    const kicker = kind === "bonus" ? (lang === "es" ? "Bono" : "Bonus") : lang === "es" ? "Reseña" : "Review";
    el = await casinoCard(c, lang, opts?.kicker ?? kicker);
  } else if (kind === "vs") {
    const [x, y] = id.split("-vs-");
    const a = findCasino(x), b = findCasino(y);
    if (!a || !b) return null;
    el = await vsCard(a, b, lang);
  } else if (kind === "top") {
    const list = id === "latam" ? ranked((c) => Boolean(c.latam)).concat(ranked((c) => !c.latam)) : ranked(opts?.filter);
    el = await topCard(list, lang, opts?.kicker ?? (lang === "es" ? "Ranking" : "Ranked"));
  } else if (kind === "text") {
    el = textCard(Buffer.from(id, "base64url").toString("utf8"), opts?.kicker ?? (lang === "es" ? "Guía" : "Guide"));
  } else return null;
  return new ImageResponse(el, OG_SIZE);
}
