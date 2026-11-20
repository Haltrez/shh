import Link from "next/link";
import type { Metadata } from "next";
import { allCasinos } from "@/lib/data";
import { rank, isPublished, kycLevelOf, isReportedOnly, privacyScore } from "@/lib/score";
import { altBrands } from "@/data/alternatives";
import { kycLog } from "@/data/kyc-log";
import { formatDate } from "@/lib/format";
import { seo } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { KycBadge } from "@/components/KycBadge";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Crypto Casino KYC Tracker ${year}: Who Asks for ID`,
  description:
    "Every crypto casino we track and exactly when it can ask for ID, sourced from each casino's own terms and re-checked monthly.",
  path: "/kyc-tracker",
});

const FAQ = [
  { q: "Which crypto casinos don't require KYC?", a: "None of the licensed casinos we track promise never to ask. The lightest are KoalaBet (nothing until $5,000 in deposits or withdrawals) and MetaWin (wallet sign-up, ID only at its discretion)." },
  { q: "How often is this tracker updated?", a: "Every casino is re-checked monthly against its own terms, and whenever we learn of a change. Each row shows the last check date." },
  { q: "Can I cite this tracker?", a: "Yes. Please link to this page; every fact links to the casino's own source." },
];

export default function KycTracker() {
  const partners = rank(allCasinos.filter(isPublished));
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / KYC tracker</div>
        <h1>Crypto casino KYC tracker</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          When can each crypto casino ask for your ID? Every row comes from the casino&apos;s own terms, KYC policy or
          help centre, with a source link and the date we last checked. Free to cite with a link.
        </p>
      </div>

      <div className="wrap" style={{ paddingBottom: 56 }}>
        <h2 style={{ marginTop: 0 }}>Casinos we rank</h2>
        <div className="table-wrap" style={{ marginBottom: 32 }}>
          <table className="data-table tracker">
            <thead>
              <tr><th>Casino</th><th>KYC level</th><th>When ID can be requested</th><th>Checked</th></tr>
            </thead>
            <tbody>
              {partners.map((c) => (
                <tr key={c.slug}>
                  <td><Link href={`/reviews/${c.slug}`}>{c.name}</Link><div className="faint mono" style={{ fontSize: 12 }}>score {privacyScore(c)}</div></td>
                  <td><KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} /></td>
                  <td>
                    {c.kyc?.summary ?? c.reported?.summary}
                    {c.kyc ? (
                      <> <a href={c.kyc.withdrawal.source} rel="nofollow noopener" target="_blank" className="faint" style={{ fontSize: 12 }}>source</a></>
                    ) : c.reported?.confirmed ? (
                      <span className="faint" style={{ fontSize: 12 }}> (confirmed by the casino)</span>
                    ) : null}
                  </td>
                  <td className="mono" style={{ whiteSpace: "nowrap" }}>{formatDate((c.lastChecked ?? c.reported?.asOf)!)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Other big crypto casinos</h2>
        <div className="table-wrap" style={{ marginBottom: 32 }}>
          <table className="data-table tracker">
            <thead>
              <tr><th>Casino</th><th>To start</th><th>When ID can be requested</th><th>Checked</th></tr>
            </thead>
            <tbody>
              {altBrands.map((b) => (
                <tr key={b.slug}>
                  <td>{b.name}<div><Link href={`/alternatives/${b.slug}`} style={{ fontSize: 13 }}>alternatives →</Link></div></td>
                  <td>{b.kycToStart}</td>
                  <td>
                    {b.kycSummary}{" "}
                    <a href={b.facts[0].source} rel="nofollow noopener" target="_blank" className="faint" style={{ fontSize: 12 }}>source</a>
                  </td>
                  <td className="mono" style={{ whiteSpace: "nowrap" }}>{formatDate(b.lastChecked)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose">
          <h2>Change log</h2>
          <ul className="changelog">
            {kycLog.map((e) => (
              <li key={e.date + e.casino + e.change}>
                <span className="mono faint">{formatDate(e.date)}</span> · <b>{e.casino}</b>: {e.change}
                {e.source ? <> <a href={e.source} rel="nofollow noopener" target="_blank" className="faint" style={{ fontSize: 12 }}>source</a></> : null}
              </li>
            ))}
          </ul>

          <h2>How we check</h2>
          <p>
            We read each casino&apos;s terms and conditions, KYC/AML policy and help centre, note the section numbers, and
            re-check monthly. Where a casino has confirmed a policy to us directly, we say so. See{" "}
            <Link href="/how-we-rate">how we rate</Link> for how this feeds the privacy score.
          </p>

          <h2>Questions</h2>
          <Faq items={FAQ} />
        </div>
      </div>

      <JsonLd data={[breadcrumbs([["Home", "/"], ["KYC tracker", "/kyc-tracker"]]), faqPage(FAQ)]} />
    </>
  );
}
