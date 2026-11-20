import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { altBrands, getAltBrand } from "@/data/alternatives";
import { allCasinos } from "@/lib/data";
import { rank, isPublished, kycLevelOf, isReportedOnly } from "@/lib/score";
import { formatDate, formatPayout } from "@/lib/format";
import { seo, clip } from "@/lib/seo";
import { breadcrumbs, faqPage, itemList } from "@/lib/schema";
import { kycLabel } from "@/components/KycBadge";
import { CasinoCard } from "@/components/CasinoCard";
import { Caveat, VPN_NOTICE } from "@/components/Caveat";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides } from "@/components/Related";

type Props = { params: Promise<{ brand: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return altBrands.map((b) => ({ brand: b.slug }));
}

const year = () => new Date().getFullYear();

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = getAltBrand((await params).brand);
  if (!b) return {};
  return seo({
    title: `Sites Like ${b.name} ${year()}: No-KYC Alternatives`,
    description: clip(
      `Looking for sites like ${b.name} with less ID checking? ${b.name}'s KYC rules from its own pages, and the closest no-KYC alternatives, ranked and checked.`,
    ),
    path: `/alternatives/${b.slug}`,
    type: "article",
    modifiedTime: b.lastChecked,
  });
}

export default async function AlternativesPage({ params }: Props) {
  const b = getAltBrand((await params).brand);
  if (!b) notFound();
  const picks = rank(allCasinos.filter((c) => isPublished(c) && c.affiliateUrl));
  const top = picks.slice(0, 3);

  const faq = [
    {
      q: `Is there a ${b.name} alternative without KYC?`,
      a: `Yes, with caveats. ${top.map((c) => `${c.name}: ${c.kyc?.summary ?? c.reported?.summary ?? ""}`).join(" ")} Most casinos can still ask for ID in specific cases; each review lists when.`,
    },
    { q: `Does ${b.name} require KYC?`, a: b.kycSummary },
    {
      q: `Which sites like ${b.name} pay out fastest?`,
      a: `In our tests, ${picks.filter((c) => c.payoutMinutes && !c.payoutMinutes.stated).sort((x, y) => x.payoutMinutes!.value - y.payoutMinutes!.value)[0]?.name ?? "MetaWin"} paid out fastest. See each casino's card for its tested time.`,
    },
    {
      q: `Can I use a VPN to play ${b.name} from a restricted country?`,
      a: "No. That breaks most casinos' terms, including the alternatives below, and can mean a closed account and lost winnings. Only play where online gambling is legal for you.",
    },
  ];

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / <Link href="/no-kyc-casinos">Casinos</Link> / Sites like {b.name}</div>
        <h1>Sites like {b.name}: no-KYC alternatives in {year()}</h1>
        <p className="lead prose" style={{ fontSize: "1.12rem" }}>
          If you like {b.name} but don&apos;t want to upload ID, the closest alternatives are{" "}
          {top.map((c, i) => (
            <span key={c.slug}>
              {i > 0 ? (i === top.length - 1 ? " and " : ", ") : ""}
              <Link href={`/reviews/${c.slug}`}>{c.name}</Link>
            </span>
          ))}
          . Below: what {b.name} asks for, according to its own pages, and how the alternatives compare.
        </p>
        <p className="meta-strip">
          <span>{b.name} checked {formatDate(b.lastChecked)}</span>
          <span>not affiliated with {b.name}</span>
        </p>
      </div>

      <div className="wrap layout-article">
        <article className="prose">
          <h2 style={{ marginTop: 0 }}>{b.name} vs the alternatives</h2>
          <div className="table-wrap" style={{ marginBottom: 24 }}>
            <table className="data-table vs-table">
              <thead>
                <tr><th>Casino</th><th>To start</th><th>ID before withdrawal</th><th>Payout</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>{b.name}</td>
                  <td>{b.kycToStart}</td>
                  <td>{b.idBeforeWithdrawal}</td>
                  <td>–</td>
                </tr>
                {top.map((c) => (
                  <tr key={c.slug}>
                    <td><Link href={`/reviews/${c.slug}`}>{c.name}</Link></td>
                    <td>{c.walletSignup?.value ? "Connect a wallet" : "Email, no ID"}</td>
                    <td>{kycLabel(kycLevelOf(c))}{isReportedOnly(c) ? " (reported)" : ""}</td>
                    <td className="mono">{formatPayout(c)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What {b.name} asks for</h2>
          <ul>
            {b.facts.map((f) => (
              <li key={f.text}>
                {f.reported ? <span className="faint">Reported: </span> : null}
                {f.text}{" "}
                <a href={f.source} rel="nofollow noopener" target="_blank" className="faint" style={{ fontSize: 13 }}>source</a>
              </li>
            ))}
          </ul>
          {b.licence ? (
            <p>
              <b>Licence:</b> {b.licence.value}.{" "}
              <a href={b.licence.source} rel="nofollow noopener" target="_blank" className="faint" style={{ fontSize: 13 }}>source</a>
            </p>
          ) : null}
          {b.restricted ? (
            <p>
              <b>Restricted countries:</b> {b.restricted.value}.
            </p>
          ) : null}

          <h2>Why people look for {b.name} alternatives</h2>
          <ul>{b.reasons.map((r) => <li key={r}>{r}</li>)}</ul>

          <h2>The best {b.name} alternatives, ranked</h2>
          <div className="grid">
            {picks.map((c, i) => (
              <CasinoCard key={c.slug} c={c} rank={i + 1} />
            ))}
          </div>

          <h2>VPNs and country rules</h2>
          <Caveat text={VPN_NOTICE} />

          <h2>Questions</h2>
          <Faq items={faq} />
          <p className="faint" style={{ fontSize: 14 }}>
            {b.name} is a trademark of its owner. We&apos;re not affiliated with {b.name}; facts about it come from its own
            published pages, linked above. 18+, gamble responsibly.
          </p>
        </article>
        <aside className="grid">
          <RelatedGuides slugs={["what-is-kyc-at-casinos", "is-crypto-gambling-anonymous", "metawin-kyc"]} />
          <div className="card">
            <h3 style={{ fontSize: "1rem" }}>Other alternatives</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15 }}>
              {altBrands.filter((x) => x.slug !== b.slug).map((x) => (
                <li key={x.slug}><Link href={`/alternatives/${x.slug}`}>Sites like {x.name}</Link></li>
              ))}
              <li><Link href="/kyc-tracker">KYC policy tracker</Link></li>
            </ul>
          </div>
        </aside>
      </div>

      <JsonLd
        data={[
          itemList(`${b.name} alternatives`, picks),
          faqPage(faq),
          breadcrumbs([["Home", "/"], ["Casinos", "/no-kyc-casinos"], [`Sites like ${b.name}`, `/alternatives/${b.slug}`]]),
        ]}
      />
    </>
  );
}
