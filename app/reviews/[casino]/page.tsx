import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, X } from "lucide-react";
import { allCasinos, findCasino } from "@/lib/data";
import { isPublished, privacyScore, isReportedOnly, isVerified, kycLevelOf } from "@/lib/score";
import { Sources } from "@/components/Sources";
import { CasinoLogo } from "@/components/CasinoLogo";
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
import { seo, clip } from "@/lib/seo";
import { casinoFaq } from "@/lib/casino-faq";
import { formatPayout } from "@/lib/format";
import { pairsFor, shortName } from "@/lib/compare";

type Props = { params: Promise<{ casino: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return allCasinos.map((c) => ({ casino: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = findCasino((await params).casino);
  if (!c) return {};
  const published = isPublished(c);
  const level = kycLevelOf(c);
  const kycWord = level === "none" ? "No KYC" : "KYC Rules";
  const summary = c.kyc?.summary ?? c.reported?.summary;
  const description = published && summary
    ? clip(`${c.name} review: ${summary} Payouts ${formatPayout(c)}${c.payoutMinutes?.stated ? "" : " in our tests"}.${c.offer ? ` Bonus: ${c.offer.text}.` : ""}`)
    : `${c.name} review: what ID it asks for at sign-up and withdrawal, payout speed, coins, VPN and country rules.`;
  return {
    ...seo({
      title: `${c.name} Review ${new Date().getFullYear()}: ${kycWord}, Payouts & Bonus`,
      description,
      path: `/reviews/${c.slug}`,
      type: "article",
      modifiedTime: c.lastChecked ?? c.reported?.asOf,
    }),
    // Reviews without enough data to score stay out of the index.
    robots: published ? undefined : { index: false, follow: true },
  };
}

function Paras({ items }: { items?: string[] }) {
  if (!items?.length) return null;
  return <>{items.map((t) => <p key={t}>{t}</p>)}</>;
}

export default async function Review({ params }: Props) {
  const c = findCasino((await params).casino);
  if (!c) notFound();
  const published = isPublished(c);
  const score = privacyScore(c);
  const updated = c.lastChecked ?? (published ? c.reported?.asOf : undefined);
  const tagReported = isReportedOnly(c);
  const reported = !isVerified(c) ? c.reported : undefined;
  const coinLists = lists.filter((l) => l.filter(c)).map((l) => l.slug);
  const faq = [...(c.faq ?? []), ...casinoFaq(c)];

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href="/no-kyc-casinos">Reviews</Link> / {c.name}
        </div>
        {c.logo ? (
          <div className="review-logo" aria-hidden>
            <CasinoLogo c={c} size={44} />
          </div>
        ) : null}
        <h1>{c.name} review: KYC, payouts and bonus</h1>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <PrivacyMeter score={score} />
          <KycBadge level={kycLevelOf(c)} reported={tagReported} />
          {c.featured ? <span className="badge badge-featured">Featured</span> : null}
          <span className="mono">{c.lastChecked ? `last checked ${formatDate(c.lastChecked)}` : updated ? `updated ${formatDate(updated)}` : "not yet checked"}</span>
        </div>
        <MetaStrip c={c} />
      </div>

      <div className="wrap layout-article">
        <article className="prose">
          <h2 style={{ marginTop: 0 }} id="verdict">Verdict</h2>
          {c.verdict ? (
            <p style={{ fontSize: "1.1rem" }}>{c.verdict}</p>
          ) : (
            <div className="notice">
              We&apos;re still finding out when {c.name} asks for ID. There&apos;s no score until we know.
            </div>
          )}

          {reported ? (
            <section className="card" style={{ marginTop: 20 }} aria-labelledby="reported-h">
              <h3 id="reported-h" style={{ fontSize: "1.05rem", display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                {reported.confirmed ? `What ${c.name} told us` : "What reviews report"}{" "}
                <KycBadge level={reported.level} reported={!reported.confirmed} />
              </h3>
              <p>{reported.summary}</p>
              {reported.detail?.length ? (
                <ul>{reported.detail.map((d) => <li key={d}>{d}</li>)}</ul>
              ) : null}
              {reported.conflicting ? (
                <Caveat text="Heads-up: sources disagree on when ID is asked. Plan as if you may need to verify before withdrawing." />
              ) : null}
              <p className="reported-note">
                {reported.confirmed ? (
                  <>Confirmed directly by {c.name} on {formatDate(reported.asOf)}.</>
                ) : (
                  <>
                    Sources: <Sources sources={reported.sources} /> (collected {formatDate(reported.asOf)}). Third-party
                    reports, not yet confirmed against {c.name}&apos;s own terms.
                  </>
                )}
              </p>
            </section>
          ) : null}

          {c.affiliateUrl ? (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", margin: "20px 0" }}>
              {c.offer?.code ? <PromoCode code={c.offer.code} /> : null}
              <a className="btn btn-primary" href={`/go/${c.slug}`} rel="sponsored nofollow noopener" target="_blank" aria-label={c.offer ? `Claim ${c.name} bonus` : `Visit ${c.name}`}>
                {c.offer ? "Claim bonus" : `Visit ${c.name}`} <ArrowUpRight size={16} aria-hidden />
              </a>
              <span className="faint" style={{ fontSize: 13 }}>18+ · T&amp;Cs apply</span>
            </div>
          ) : null}

          <div style={{ margin: "28px 0" }}>
            <FactBox c={c} />
          </div>

          {c.kycInPractice?.length ? (
            <>
              <h2 id="kyc">KYC in practice</h2>
              <Paras items={c.kycInPractice} />
            </>
          ) : null}

          <h2 id="vpn">VPN and country rules</h2>
          {c.vpnRule ? (
            <p>
              <b>What {c.name}&apos;s terms say:</b> {c.vpnRule.value}{" "}
              <a href={c.vpnRule.source} rel="nofollow noopener" target="_blank">Source</a>.
            </p>
          ) : null}
          {c.restrictedCountries ? (
            <p>Restricted countries listed in the terms: <span className="mono">{c.restrictedCountries.value.join(", ")}</span>.</p>
          ) : null}
          <Caveat text={VPN_NOTICE} />

          <h2 id="banking">Deposits and withdrawals</h2>
          <Paras items={c.depositsWithdrawals} />
          {c.payoutMinutes ? (
            <p className="mono">{c.payoutMinutes.stated ? "Stated payout time" : "Our test withdrawals"}: {c.payoutMinutes.label ?? `~${c.payoutMinutes.value} min`}. {c.payoutMinutes.note}</p>
          ) : null}
          <p>New to this? Read <Link href="/guides/how-to-deposit-crypto">how to deposit crypto</Link> and <Link href="/guides/how-to-withdraw-crypto">how to withdraw</Link>.</p>

          <h2 id="bonus">Bonus</h2>
          {c.offer ? (
            <p>
              {c.offer.text}
              {c.offer.code ? <> Code: <span className="mono">{c.offer.code}</span>.</> : c.affiliateUrl ? <> No code needed: the bonus applies when you sign up through the Claim bonus button.</> : null}{" "}
              {c.offer.source ? <><a href={c.offer.source} rel="nofollow noopener" target="_blank">Full terms on {c.name}</a>. </> : <>Read the full bonus terms on {c.name} before you opt in. </>}18+, T&amp;Cs apply.
            </p>
          ) : null}
          {c.offer && c.affiliateUrl ? (
            <p>
              <a className="btn btn-primary" href={`/go/${c.slug}?pos=bonus`} rel="sponsored nofollow noopener" target="_blank" aria-label={`Claim ${c.name} bonus`}>
                Claim bonus <ArrowUpRight size={16} aria-hidden />
              </a>
            </p>
          ) : null}
          {c.offer ? null : (
            <p className="faint">Being checked.</p>
          )}

          {c.games ? (
            <>
              <h2 id="games">Games and providers</h2>
              <p>{c.games.summary}</p>
              <div className="chips">{c.games.providers.map((p) => <span key={p} className="chip">{p}</span>)}</div>
            </>
          ) : null}

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
          ) : null}
          <p>
            Set a deposit limit before you play. If you want a break, use the casino&apos;s cool-off or self-exclusion
            tool, and see our <Link href="/responsible-gambling">responsible gambling page</Link> for free, confidential
            help.
          </p>

          {faq.length ? (
            <>
              <h2 id="faq">{c.name} FAQ</h2>
              <Faq items={faq} />
            </>
          ) : null}
        </article>

        <aside className="grid">
          {published && c.affiliateUrl ? (
            <div className="card">
              <h3 style={{ fontSize: "1rem" }}>{c.name} bonus</h3>
              <p className="dim" style={{ fontSize: 15, margin: 0 }}>
                {c.offer ? c.offer.text : "No welcome bonus right now."}{" "}
                <Link href={`/bonus/${c.slug}`}>{c.name} bonus code →</Link>
              </p>
            </div>
          ) : null}
          <RelatedLists slugs={coinLists} />
          {published && pairsFor(c.slug).length ? (
            <div className="card">
              <h3 style={{ fontSize: "1rem" }}>Compare {shortName(c)}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15 }}>
                {pairsFor(c.slug).map((x) => {
                  const other = x.a.slug === c.slug ? x.b : x.a;
                  return (
                    <li key={x.slug}><Link href={`/compare/${x.slug}`}>{shortName(c)} vs {shortName(other)}</Link></li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          <RelatedGuides slugs={["how-to-deposit-crypto", "what-is-kyc-at-casinos", "cheapest-coin-to-deposit"]} />
        </aside>
      </div>

      <JsonLd
        data={[
          breadcrumbs([["Home", "/"], ["Reviews", "/no-kyc-casinos"], [c.name, `/reviews/${c.slug}`]]),
          ...(published && updated
            ? [article({ headline: `${c.name} review`, description: c.verdict ?? "", path: `/reviews/${c.slug}`, dateModified: updated })]
            : []),
          ...(faq.length && published ? [faqPage(faq)] : []),
        ]}
      />
    </>
  );
}
