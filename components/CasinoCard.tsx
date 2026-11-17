import Link from "next/link";
import { ArrowUpRight, Zap, Wallet } from "lucide-react";
import type { Casino } from "@/lib/types";
import { privacyScore, isVerified, isReportedOnly, kycLevelOf } from "@/lib/score";
import { Sources } from "./Sources";
import { formatPayout } from "@/lib/format";
import { PrivacyMeter } from "./PrivacyMeter";
import { KycBadge } from "./KycBadge";
import { PromoCode } from "./PromoCode";

export function CasinoCard({ c, rank }: { c: Casino; rank?: number }) {
  const verified = isVerified(c);
  const score = privacyScore(c);
  const reported = isReportedOnly(c) ? c.reported : undefined;
  return (
    <article className={`card casino-card${verified ? "" : " pending"}`} data-geos={JSON.stringify(c.geos)}>
      <div className="rank" aria-hidden>{rank !== undefined ? String(rank).padStart(2, "0") : ""}</div>
      <div className="body">
        <div className="top">
          {c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="casino-logo" src={c.logo} alt={c.name} height={28} />
          ) : null}
          <h3>
            <Link href={`/reviews/${c.slug}`}>{c.name}</Link>
          </h3>
          <PrivacyMeter score={score} />
          <KycBadge level={kycLevelOf(c)} reported={Boolean(reported)} />
          {c.featured ? <span className="badge badge-featured">Featured</span> : null}
        </div>

        {verified ? (
          <>
            <div className="chips" aria-label="Coins accepted">
              {c.coins?.value.map((coin) => <span className="chip" key={coin}>{coin}</span>)}
            </div>
            <div className="facts">
              <span><Zap size={14} aria-hidden /> Payout <b>{formatPayout(c)}</b></span>
              {c.minDepositUsd ? <span><Wallet size={14} aria-hidden /> Min deposit <b>${c.minDepositUsd.value}</b></span> : null}
            </div>
            {c.offer ? <div className="offer">{c.offer.text}</div> : null}
          </>
        ) : reported ? (
          <>
            {reported.coins?.length ? (
              <div className="chips" aria-label="Coins reported">
                {reported.coins.map((coin) => <span className="chip" key={coin}>{coin}</span>)}
              </div>
            ) : null}
            <p style={{ margin: 0, fontSize: 15.5 }}>{reported.summary}</p>
            <p className="reported-note">
              Reported by <Sources sources={reported.sources} />. Not yet confirmed against {c.name}&apos;s own
              terms, so no score yet.
            </p>
          </>
        ) : (
          <p className="dim" style={{ margin: 0, fontSize: 15 }}>
            We&apos;re checking {c.name}&apos;s terms before we score it. No numbers until they&apos;re verified.
          </p>
        )}

        <div className="actions">
          {verified && c.offer?.code ? <PromoCode code={c.offer.code} /> : null}
          {c.affiliateUrl ? (
            <a className="btn btn-primary" href={`/go/${c.slug}${rank !== undefined ? `?pos=${rank}` : ""}`} rel="sponsored nofollow noopener" target="_blank">
              Visit {c.name} <ArrowUpRight size={16} aria-hidden />
            </a>
          ) : null}
          <Link className="btn btn-ghost" href={`/reviews/${c.slug}`}>Read review</Link>
          <span className="tc">18+ · T&amp;Cs apply · Play responsibly</span>
        </div>
      </div>
    </article>
  );
}
