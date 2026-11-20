import Link from "next/link";
import type { Metadata } from "next";
import { allCasinos } from "@/lib/data";
import { rank, isPublished } from "@/lib/score";
import { CasinoCard } from "@/components/CasinoCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Faq } from "@/components/Faq";
import { Caveat, VPN_NOTICE } from "@/components/Caveat";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides } from "@/components/Related";
import { breadcrumbs, faqPage, itemList } from "@/lib/schema";
import { seo } from "@/lib/seo";
import { comparePairs, shortName } from "@/lib/compare";
import { formatDate } from "@/lib/format";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `No-KYC Casinos ${year}: Every Check, Listed`,
  description: "What 'no KYC' really means at crypto casinos, and every casino ranked by the ID it asks for at sign-up, on withdrawal, and when checks are triggered.",
  path: "/no-kyc-casinos",
});

const FAQ = [
  { q: "Does 'no KYC' mean I'll never be asked for ID?", a: "No. It means no ID at sign-up and for normal withdrawals. Nearly every casino keeps the right to ask in specific cases, such as large withdrawals, AML reviews or source-of-funds checks. We list each one's triggers." },
  { q: "Why would a no-KYC casino ask for ID later?", a: "Licences and payment partners require anti-money-laundering checks. Big or unusual withdrawals are the most common trigger." },
  { q: "Are no-KYC casinos legal?", a: "It depends on the casino's licence and the law where you live. Only play where online gambling is legal for you." },
  { q: "What's the difference between 'No KYC' and 'KYC on request'?", a: "'No KYC' casinos only ask in narrow cases. 'KYC on request' casinos have routine thresholds or triggers where ID is commonly requested." },
  { q: "Do no-KYC casinos have responsible gambling tools?", a: "The ones we list do: deposit limits, cool-off periods and self-exclusion at that casino. Each review says which." },
];

export default function Page() {
  const ranked = rank(allCasinos);
  const lastUpdate = allCasinos.map((c) => c.lastChecked ?? c.reported?.asOf ?? "").filter(Boolean).sort().at(-1) ?? new Date().toISOString().slice(0, 10);
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / No-KYC casinos</div>
        <h1>No-KYC crypto casinos, ranked</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          A no-KYC casino lets you sign up and play without uploading ID. It doesn&apos;t mean you&apos;ll never be
          asked. Here&apos;s every casino we cover, ranked by how little it asks and when.
        </p>
        <p className="meta-strip">
          <span>{ranked.length} casinos</span>
          <span>updated {formatDate(lastUpdate)}</span>
        </p>
      </div>

      <section className="wrap" style={{ paddingBottom: 32 }}>
        <h2 className="sr-only">Comparison table</h2>
        <ComparisonTable casinos={ranked} />
      </section>

      <div className="wrap layout-article">
        <div className="prose">
          <h2 style={{ marginTop: 0 }}>What &ldquo;no KYC&rdquo; means here</h2>
          <p>
            KYC (Know Your Customer) is the ID check: a passport or licence, a selfie, sometimes proof of address. We
            give every casino one of three badges. A badge marked “reported” comes from third-party reviews and isn’t confirmed against the casino’s terms yet:
          </p>
          <ul>
            <li><b style={{ color: "var(--accent)" }}>No KYC</b>: no ID at sign-up or for normal withdrawals; checks only in narrow, stated cases.</li>
            <li><b style={{ color: "var(--warn)" }}>KYC on request</b>: no ID at sign-up, but routine thresholds or triggers where ID is commonly asked.</li>
            <li><b style={{ color: "var(--danger)" }}>Full KYC</b>: ID before you can play.</li>
          </ul>
          <Caveat text="Heads-up: if a casino asks for ID and you won't provide it, it can usually hold the withdrawal under its terms. Decide before you deposit whether you'd be willing to verify." />

          <h2>Every casino, in detail</h2>
          <div className="grid">
            {ranked.map((c, i) => <CasinoCard key={c.slug} c={c} rank={i + 1} />)}
          </div>

          <h2>VPNs and country rules</h2>
          <Caveat text={VPN_NOTICE} />

          <h2>Head-to-head comparisons</h2>
          <ul>
            {comparePairs().map((x) => (
              <li key={x.slug}><Link href={`/compare/${x.slug}`}>{shortName(x.a)} vs {shortName(x.b)}</Link></li>
            ))}
          </ul>

          <h2>Questions</h2>
          <Faq items={FAQ} />
        </div>
        <aside className="grid">
          <RelatedGuides slugs={["what-is-kyc-at-casinos", "is-crypto-gambling-anonymous", "how-to-withdraw-crypto", "how-to-buy-crypto"]} />
        </aside>
      </div>

      <JsonLd
        data={[
          itemList("No-KYC crypto casinos", ranked.filter(isPublished)),
          faqPage(FAQ),
          breadcrumbs([["Home", "/"], ["No-KYC casinos", "/no-kyc-casinos"]]),
        ]}
      />
    </>
  );
}
