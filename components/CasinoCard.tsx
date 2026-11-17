import Link from "next/link";
import { ArrowUpRight, Zap, Wallet, Gift } from "lucide-react";
import type { Casino } from "@/lib/types";
import { privacyScore, isReportedOnly, kycLevelOf, coinsOf } from "@/lib/score";
import { formatPayout } from "@/lib/format";
import { Sources } from "./Sources";
import { PrivacyMeter } from "./PrivacyMeter";
import { KycBadge } from "./KycBadge";
import { PromoCode } from "./PromoCode";

export function CasinoCard({ c, rank }: { c: Casino; rank?: number }) {
  const score = privacyScore(c);
  const reported = isReportedOnly(c) ? c.reported : undefined;
  const coins = coinsOf(c);

  return (
    <article className={`card casino-card${score === null ? " pending" : ""}`}>
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

        {coins?.length ? (
          <div className="chips" aria-label="Coins accepted">
            {coins.map((coin) => <span className="chip" key={coin}>{coin}</span>)}
          </div>
        ) : null}

        {c.payoutMinutes || c.minDepositUsd ? (
          <div className="facts">
            {c.payoutMinutes ? <span><Zap size={14} aria-hidden /> Payout <b>{formatPayout(c)}</b></span> : null}
            {c.minDepositUsd ? <span><Wallet size={14} aria-hidden /> Min deposit <b>${c.minDepositUsd.value}</b></span> : null}
          </div>
        ) : null}

        {reported ? (
          <>
            <p style={{ margin: 0, fontSize: 15.5 }}>{reported.summary}</p>
            <p className="reported-note">
              KYC info reported by <Sources sources={reported.sources} />; not yet confirmed against {c.name}&apos;s
              own terms.
            </p>
          </>
        ) : !c.kyc ? (
          <p className="dim" style={{ margin: 0, fontSize: 15 }}>
            We&apos;re still finding out when {c.name} asks for ID. No score until we know.
          </p>
        ) : null}

        {c.offer ? (
          <div className="offer">
            <Gift size={15} aria-hidden color="var(--accent)" />
            <span>
              {c.offer.text}
              {!c.offer.code && c.affiliateUrl ? (
                <span className="offer-note">No code needed: the bonus applies when you sign up through the Claim bonus button.</span>
              ) : null}
            </span>
          </div>
        ) : null}

        <div className="actions">
          {c.offer?.code ? <PromoCode code={c.offer.code} /> : null}
          {c.affiliateUrl ? (
            <a
              className="btn btn-primary"
              href={`/go/${c.slug}${rank !== undefined ? `?pos=${rank}` : ""}`}
              rel="sponsored nofollow noopener"
              target="_blank"
              aria-label={c.offer ? `Claim ${c.name} bonus` : `Visit ${c.name}`}
            >
              {c.offer ? "Claim bonus" : `Visit ${c.name}`} <ArrowUpRight size={16} aria-hidden />
            </a>
          ) : null}
          <Link className="btn btn-ghost" href={`/reviews/${c.slug}`}>Read review</Link>
          <span className="tc">18+ · T&amp;Cs apply · Play responsibly</span>
        </div>
      </div>
    </article>
  );
}
