import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { comparePairs, findPair, shortName } from "@/lib/compare";
import { privacyScore, kycLevelOf, coinsOf } from "@/lib/score";
import { formatPayout } from "@/lib/format";
import { seo, clip } from "@/lib/seo";
import { article, breadcrumbs, faqPage } from "@/lib/schema";
import type { Casino } from "@/lib/types";
import { kycLabel } from "@/components/KycBadge";
import { CasinoCard } from "@/components/CasinoCard";
import { CasinoLogo } from "@/components/CasinoLogo";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Caveat, VPN_NOTICE } from "@/components/Caveat";

type Props = { params: Promise<{ pair: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return comparePairs().map((p) => ({ pair: p.slug }));
}

const kycText = (c: Casino) => c.kyc?.summary ?? c.reported?.summary ?? "Being checked";
const updated = (a: Casino, b: Casino) =>
  [a.lastChecked ?? a.reported?.asOf, b.lastChecked ?? b.reported?.asOf].filter(Boolean).sort().at(-1) as string;

function verdict(a: Casino, b: Casino): string {
  const sa = privacyScore(a) ?? 0;
  const sb = privacyScore(b) ?? 0;
  const A = shortName(a);
  const B = shortName(b);
  const la = kycLevelOf(a);
  const lb = kycLevelOf(b);
  let lead: string;
  if (sa === sb) lead = `${A} and ${B} tie on our privacy score (${sa}).`;
  else lead = `${A} is the more private pick: it scores ${sa} to ${B}'s ${sb} on our privacy score.`;
  const kyc =
    la === lb
      ? ` Both are rated ${kycLabel(la)}.`
      : ` ${A} is ${kycLabel(la)}; ${B} is ${kycLabel(lb)}.`;
  const pay =
    a.payoutMinutes && b.payoutMinutes && !a.payoutMinutes.stated && !b.payoutMinutes.stated && formatPayout(a) === formatPayout(b)
      ? ` Both paid our test withdrawals in ${formatPayout(a)}.`
      : "";
  return lead + kyc + pay;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = findPair((await params).pair);
  if (!p) return {};
  const A = shortName(p.a);
  const B = shortName(p.b);
  return seo({
    title: `${A} vs ${B}: KYC, Payouts & Bonus Compared`,
    description: clip(`${A} vs ${B}: ${verdict(p.a, p.b)} Bonuses, coins, limits and VPN rules side by side.`),
    path: `/compare/${p.slug}`,
    type: "article",
    modifiedTime: updated(p.a, p.b),
  });
}

export default async function ComparePage({ params }: Props) {
  const p = findPair((await params).pair);
  if (!p) notFound();
  const { a, b } = p;
  const A = shortName(a);
  const B = shortName(b);

  const rows: [string, (c: Casino) => ReactNode][] = [
    ["Privacy score", (c) => <span className="mono">{privacyScore(c) ?? "–"}</span>],
    ["KYC", (c) => <><b>{kycLabel(kycLevelOf(c))}</b><br /><span className="dim">{kycText(c)}</span></>],
    ["Payout", (c) => <span className="mono">{formatPayout(c)}{c.payoutMinutes?.stated ? " (stated)" : ""}</span>],
    ["Welcome offer", (c) => c.offer?.text ?? "–"],
    ["Coins", (c) => <span className="mono">{coinsOf(c)?.join(" ") || "Not listed yet"}</span>],
    ["Licence", (c) => c.licence?.value ?? "Not checked yet"],
    ["Withdrawal limits", (c) => c.withdrawalLimits?.value ?? "Not checked yet"],
    ["VPN rule (per T&Cs)", (c) => c.vpnRule?.value ?? "Not checked yet"],
  ];

  const faq = [
    { q: `Which is more private, ${A} or ${B}?`, a: verdict(a, b) },
    {
      q: `Do ${A} and ${B} require KYC?`,
      a: `${A}: ${kycText(a)} ${B}: ${kycText(b)}`,
    },
    {
      q: `Which pays out faster, ${A} or ${B}?`,
      a: `${A}: ${formatPayout(a)}${a.payoutMinutes?.stated ? " (stated by the casino)" : " in our tests"}. ${B}: ${formatPayout(b)}${b.payoutMinutes?.stated ? " (stated by the casino)" : " in our tests"}.`,
    },
    ...(a.offer && b.offer
      ? [{
          q: `What bonus do ${A} and ${B} offer?`,
          a: `${A}: ${a.offer.text}. ${B}: ${b.offer.text}. No code needed when you sign up through our links. 18+, T&Cs apply.`,
        }]
      : []),
  ];

  const others = comparePairs().filter((x) => x.slug !== p.slug && (x.a.slug === a.slug || x.b.slug === a.slug || x.a.slug === b.slug || x.b.slug === b.slug));

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href="/no-kyc-casinos">Casinos</Link> / {A} vs {B}
        </div>
        <div className="vs-logos" aria-hidden>
          <CasinoLogo c={a} size={40} /> <span className="mono">vs</span> <CasinoLogo c={b} size={40} />
        </div>
        <h1>{A} vs {B}: which is better for privacy?</h1>
        <p className="lead prose" style={{ fontSize: "1.15rem" }}>{verdict(a, b)}</p>
      </div>

      <div className="wrap prose" style={{ paddingBottom: 64, maxWidth: "var(--max)" }}>
        <div className="table-wrap" style={{ marginBottom: 32 }}>
          <table className="data-table vs-table">
            <thead>
              <tr>
                <th></th>
                <th><Link href={`/reviews/${a.slug}`}>{A}</Link></th>
                <th><Link href={`/reviews/${b.slug}`}>{B}</Link></th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, cell]) => (
                <tr key={label}>
                  <td>{label}</td>
                  <td>{cell(a)}</td>
                  <td>{cell(b)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-2" style={{ marginBottom: 32 }}>
          <CasinoCard c={a} />
          <CasinoCard c={b} />
        </div>

        <div style={{ maxWidth: "var(--prose)" }}>
          <h2>VPNs and country rules</h2>
          <Caveat text={VPN_NOTICE} />

          <h2>{A} vs {B}: questions</h2>
          <Faq items={faq} />

          <p>
            Full reviews: <Link href={`/reviews/${a.slug}`}>{a.name} review</Link> ·{" "}
            <Link href={`/reviews/${b.slug}`}>{b.name} review</Link> ·{" "}
            <Link href="/no-kyc-casinos">all no-KYC casinos, ranked</Link>
          </p>

          {others.length ? (
            <>
              <h2>More comparisons</h2>
              <ul>
                {others.map((x) => (
                  <li key={x.slug}><Link href={`/compare/${x.slug}`}>{shortName(x.a)} vs {shortName(x.b)}</Link></li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>

      <JsonLd
        data={[
          article({ headline: `${A} vs ${B}`, description: verdict(a, b), path: `/compare/${p.slug}`, dateModified: updated(a, b) }),
          breadcrumbs([["Home", "/"], ["Casinos", "/no-kyc-casinos"], [`${A} vs ${B}`, `/compare/${p.slug}`]]),
          faqPage(faq),
        ]}
      />
    </>
  );
}
