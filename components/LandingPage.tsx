import Link from "next/link";
import type { Landing } from "@/data/landings";
import { withYear } from "@/data/landings";
import { allCasinos } from "@/lib/data";
import { rank, isPublished, coinsOf, privacyScore } from "@/lib/score";
import { formatDate, formatPayout } from "@/lib/format";
import { breadcrumbs, faqPage, itemList } from "@/lib/schema";
import type { Casino } from "@/lib/types";
import { CasinoCard } from "./CasinoCard";
import { ComparisonTable } from "./ComparisonTable";
import { Blocks } from "./Blocks";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";
import { RelatedGuides } from "./Related";

function bestForRows(casinos: Casino[]): [string, Casino, string][] {
  const rows: [string, Casino, string][] = [];
  const top = casinos[0];
  if (top) rows.push(["Most private overall", top, `privacy score ${privacyScore(top)}`]);
  const timed = casinos.filter((c) => c.payoutMinutes && !c.payoutMinutes.stated);
  const fastest = [...timed].sort((a, b) => a.payoutMinutes!.value - b.payoutMinutes!.value)[0];
  if (fastest) rows.push(["Fastest payout", fastest, `${formatPayout(fastest)} in our test`]);
  const mostCoins = [...casinos].sort((a, b) => (coinsOf(b)?.length ?? 0) - (coinsOf(a)?.length ?? 0))[0];
  if (mostCoins && coinsOf(mostCoins)?.length) rows.push(["Most coins", mostCoins, `${coinsOf(mostCoins)!.length}+ coins`]);
  const wallet = casinos.find((c) => c.walletSignup?.value);
  if (wallet) rows.push(["Wallet sign-up", wallet, "connect a wallet, no form"]);
  const spins = casinos.find((c) => c.offer?.freeSpins);
  if (spins) rows.push(["Free spins", spins, spins.offer!.text]);
  return rows;
}

export function LandingPage({ l }: { l: Landing }) {
  const ranked = rank(allCasinos.filter((c) => isPublished(c) && (l.filter ? l.filter(c) : true)));
  const lastUpdate =
    ranked.map((c) => c.lastChecked ?? c.reported?.asOf ?? "").filter(Boolean).sort().at(-1) ??
    new Date().toISOString().slice(0, 10);
  const h1 = withYear(l.h1);
  const faq = l.faq.map((f) => ({ q: withYear(f.q), a: withYear(f.a) }));
  const best = l.bestFor ? bestForRows(ranked) : [];

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / {h1}</div>
        <h1>{h1}</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>{l.lead}</p>
        <p className="meta-strip">
          <span>{ranked.length} casinos</span>
          <span>updated {formatDate(lastUpdate)}</span>
          <span><Link href="/how-we-rate">how we rate</Link></span>
        </p>
      </div>

      <section className="wrap" style={{ paddingBottom: 32 }}>
        <h2 className="sr-only">Comparison table</h2>
        <ComparisonTable casinos={ranked} />
      </section>

      <div className="wrap layout-article">
        <div className="prose">
          {best.length ? (
            <>
              <h2 style={{ marginTop: 0 }}>Best for…</h2>
              <div className="table-wrap" style={{ marginBottom: 24 }}>
                <table className="data-table">
                  <tbody>
                    {best.map(([label, c, why]) => (
                      <tr key={label}>
                        <td style={{ whiteSpace: "nowrap" }}>{label}</td>
                        <td>
                          <Link href={`/reviews/${c.slug}`}>{c.name}</Link>{" "}
                          <span className="faint">· {why}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : null}

          <h2 style={best.length ? undefined : { marginTop: 0 }}>The ranking, in detail</h2>
          <div className="grid">
            {ranked.map((c, i) => (
              <CasinoCard key={c.slug} c={c} rank={i + 1} />
            ))}
          </div>

          <Blocks blocks={l.body} h2Seen />

          <h2>Questions</h2>
          <Faq items={faq} />
        </div>
        <aside className="grid">
          <RelatedGuides slugs={l.relatedGuides} />
          <div className="card">
            <h3 style={{ fontSize: "1rem" }}>More rankings</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15 }}>
              <li><Link href="/no-kyc-casinos">No KYC casinos</Link></li>
              <li><Link href="/best-crypto-casinos">Best crypto casinos</Link></li>
              <li><Link href="/anonymous-casinos">Anonymous crypto casinos</Link></li>
              <li><Link href="/best/metamask-casinos">MetaMask casinos</Link></li>
              <li><Link href="/best/instant-withdrawal-casinos">Instant withdrawal casinos</Link></li>
              <li><Link href="/bonus">Crypto casino bonus codes</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <JsonLd
        data={[
          itemList(h1, ranked),
          faqPage(faq),
          breadcrumbs([["Home", "/"], [h1, `/${l.slug}`]]),
        ]}
      />
    </>
  );
}
