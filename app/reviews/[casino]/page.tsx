import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, X } from "lucide-react";
import { allCasinos, findCasino } from "@/lib/data";
import { isVerified, privacyScore, isReportedOnly, kycLevelOf } from "@/lib/score";
import { Sources } from "@/components/Sources";
import { lists } from "@/data/lists";
import { formatDate } from "@/lib/format";
import { PrivacyMeter } from "@/components/PrivacyMeter";
import { KycBadge } from "@/components/KycBadge";
import { MetaStrip } from "@/components/MetaStrip";
import { FactBox } from "@/components/FactBox";
import { Caveat, VPN_NOTICE } from "@/components/Caveat";
import { Faq } from "@/components/Faq";
import { PromoCode } from "@/components/PromoCode";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides, RelatedLists } from "@/components/Related";
import { article, breadcrumbs, faqPage } from "@/lib/schema";

type Props = { params: Promise<{ casino: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return allCasinos.map((c) => ({ casino: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = findCasino((await params).casino);
  if (!c) return {};
  const verified = isVerified(c);
  return {
    title: `${c.name} Review ${new Date().getFullYear()}: KYC, Payouts & Bonus`,
    description: verified && c.verdict
      ? c.verdict.slice(0, 155)
      : `${c.name} review: what ID it asks for at sign-up and withdrawal, payout speed, coins, VPN and country rules. Being checked against its terms.`,
    alternates: { canonical: `/reviews/${c.slug}` },
    // Unchecked reviews stay out of the index until the fact box is complete.
    robots: verified ? undefined : { index: false, follow: true },
  };
}

function Paras({ items }: { items?: string[] }) {
  if (!items?.length) return <p className="faint">Being checked against the casino&apos;s terms.</p>;
  return <>{items.map((t) => <p key={t}>{t}</p>)}</>;
}

export default async function Review({ params }: Props) {
  const c = findCasino((await params).casino);
  if (!c) notFound();
  const verified = isVerified(c);
  const score = privacyScore(c);
  const reported = isReportedOnly(c) ? c.reported : undefined;
  const coinLists = lists.filter((l) => l.filter(c)).map((l) => l.slug);

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href="/no-kyc-casinos">Reviews</Link> / {c.name}
        </div>
        <h1>{c.name} review: KYC, payouts and bonus</h1>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <PrivacyMeter score={score} />
          <KycBadge level={kycLevelOf(c)} reported={Boolean(reported)} />
          {c.featured ? <span className="badge badge-featured">Featured</span> : null}
          <span className="mono">{c.lastChecked ? `last checked ${formatDate(c.lastChecked)}` : "not yet checked"}</span>
        </div>
        <MetaStrip c={c} />
      </div>

      <div className="wrap layout-article">
        <article className="prose">
          <h2 style={{ marginTop: 0 }} id="verdict">Verdict</h2>
          {verified && c.verdict ? (
            <p style={{ fontSize: "1.1rem" }}>{c.verdict}</p>
          ) : (
            <div className="notice">
              We&apos;re still checking {c.name}&apos;s terms, cashier and withdrawal process. There&apos;s no score
              until every fact below is sourced from the casino and dated.
            </div>
          )}

          {reported ? (
            <section className="card" style={{ marginTop: 20 }} aria-labelledby="reported-h">
              <h3 id="reported-h" style={{ fontSize: "1.05rem", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                What reviews report <KycBadge level={reported.level} reported />
              </h3>
              <p>{reported.summary}</p>
              {reported.detail?.length ? (
                <ul>{reported.detail.map((d) => <li key={d}>{d}</li>)}</ul>
              ) : null}
              {reported.conflicting ? (
                <Caveat text="Heads-up: sources disagree on when ID is asked. Plan as if you may need to verify before withdrawing." />
              ) : null}
              <p className="reported-note">
                Sources: <Sources sources={reported.sources} /> (collected {formatDate(reported.asOf)}). Third-party
                reports, not yet confirmed against {c.name}&apos;s own terms.
              </p>
            </section>
          ) : null}

          {c.affiliateUrl ? (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", margin: "20px 0" }}>
              {c.offer?.code ? <PromoCode code={c.offer.code} /> : null}
              <a className="btn btn-primary" href={`/go/${c.slug}`} rel="sponsored nofollow noopener" target="_blank">
                Visit {c.name} <ArrowUpRight size={16} aria-hidden />
              </a>
              <span className="faint" style={{ fontSize: 13 }}>18+ · T&amp;Cs apply</span>
            </div>
          ) : null}

          <div style={{ margin: "28px 0" }}>
            <FactBox c={c} />
          </div>

          <h2 id="kyc">KYC in practice</h2>
          <Paras items={c.kycInPractice} />

          <h2 id="vpn">VPN and country rules</h2>
          {c.vpnRule ? (
            <p>
              <b>What {c.name}&apos;s terms say:</b> {c.vpnRule.value}{" "}
              <a href={c.vpnRule.source} rel="nofollow noopener" target="_blank">Source</a>.
            </p>
          ) : (
            <p className="faint">Being checked against the casino&apos;s terms.</p>
          )}
          {c.restrictedCountries ? (
            <p>Restricted countries listed in the terms: <span className="mono">{c.restrictedCountries.value.join(", ")}</span>.</p>
          ) : null}
          <Caveat text={VPN_NOTICE} />

          <h2 id="banking">Deposits and withdrawals</h2>
          <Paras items={c.depositsWithdrawals} />
          {c.payoutMinutes ? (
            <p className="mono">Our test withdrawal: ~{c.payoutMinutes.value} min. {c.payoutMinutes.note}</p>
          ) : null}
          <p>New to this? Read <Link href="/guides/how-to-deposit-crypto">how to deposit crypto</Link> and <Link href="/guides/how-to-withdraw-crypto">how to withdraw</Link>.</p>

          <h2 id="bonus">Bonus</h2>
          {verified && c.offer ? (
            <p>
              {c.offer.text}
              {c.offer.code ? <> Code: <span className="mono">{c.offer.code}</span>.</> : null}{" "}
              <a href={c.offer.source} rel="nofollow noopener" target="_blank">Full terms on {c.name}</a>. 18+, T&amp;Cs apply.
            </p>
          ) : (
            <p className="faint">Being checked.</p>
          )}

          <h2 id="games">Games and providers</h2>
          {c.games ? (
            <>
              <p>{c.games.summary}</p>
              <div className="chips">{c.games.providers.map((p) => <span key={p} className="chip">{p}</span>)}</div>
            </>
          ) : (
            <p className="faint">Being checked.</p>
          )}

          <h2 id="pros-cons">Pros and cons</h2>
          {c.pros?.length && c.cons?.length ? (
            <div className="grid grid-2 proscons">
              <div className="card">
                <h3><Check size={16} color="var(--accent)" aria-hidden /> Pros</h3>
                <ul>{c.pros.map((p) => <li key={p}><Check size={14} color="var(--accent)" aria-hidden style={{ flex: "none" }} /> {p}</li>)}</ul>
              </div>
              <div className="card">
                <h3><X size={16} color="var(--danger)" aria-hidden /> Cons</h3>
                <ul>{c.cons.map((p) => <li key={p}><X size={14} color="var(--danger)" aria-hidden style={{ flex: "none" }} /> {p}</li>)}</ul>
              </div>
            </div>
          ) : (
            <p className="faint">Both lists are mandatory and will appear once the review is checked.</p>
          )}

          <h2 id="responsible">Responsible gambling at {c.name}</h2>
          {c.responsibleTools ? (
            <ul>{c.responsibleTools.value.map((t) => <li key={t}>{t}</li>)}</ul>
          ) : (
            <p className="faint">Being checked.</p>
          )}
          <p>
            Set a deposit limit before you play. If you want a break, use the casino&apos;s cool-off or self-exclusion
            tool, and see our <Link href="/responsible-gambling">responsible gambling page</Link> for free, confidential
            help.
          </p>

          {c.faq?.length ? (
            <>
              <h2 id="faq">FAQ</h2>
              <Faq items={c.faq} />
            </>
          ) : null}
        </article>

        <aside className="grid">
          <RelatedLists slugs={coinLists} />
          <RelatedGuides slugs={["how-to-deposit-crypto", "what-is-kyc-at-casinos", "cheapest-coin-to-deposit"]} />
        </aside>
      </div>

      <JsonLd
        data={[
          breadcrumbs([["Home", "/"], ["Reviews", "/no-kyc-casinos"], [c.name, `/reviews/${c.slug}`]]),
          ...(verified && c.lastChecked
            ? [article({ headline: `${c.name} review`, description: c.verdict ?? "", path: `/reviews/${c.slug}`, dateModified: c.lastChecked })]
            : []),
          ...(c.faq?.length ? [faqPage(c.faq)] : []),
        ]}
      />
    </>
  );
}
