import Link from "next/link";
import { ArrowUpRight, Zap, Wallet, Gift } from "lucide-react";
import type { Casino } from "@/lib/types";
import { privacyScore, isReportedOnly, isVerified, kycLevelOf, coinsOf } from "@/lib/score";
import { t, casinoText, formatDateL, type Lang } from "@/lib/i18n";
import { Sources } from "./Sources";
import { PrivacyMeter } from "./PrivacyMeter";
import { KycBadge } from "./KycBadge";
import { PromoCode } from "./PromoCode";
import { CasinoLogo } from "./CasinoLogo";

export function CasinoCard({ c, rank, lang = "en" }: { c: Casino; rank?: number; lang?: Lang }) {
  const L = t(lang);
  const tx = casinoText(c, lang);
  const score = privacyScore(c);
  const tagReported = isReportedOnly(c);
  const reported = !isVerified(c) ? c.reported : undefined;
  const coins = coinsOf(c);

  return (
    <article className={`card casino-card${score === null ? " pending" : ""}`}>
      <div className="rank" aria-hidden>{rank !== undefined ? String(rank).padStart(2, "0") : ""}</div>
      <div className="body">
        <div className="top">
          <h3>
            <Link href={L.reviewPath(c.slug)}><CasinoLogo c={c} /></Link>
          </h3>
          <PrivacyMeter score={score} />
          <KycBadge level={kycLevelOf(c)} reported={tagReported} lang={lang} />
          {c.featured ? <span className="badge badge-featured">{L.featured}</span> : null}
        </div>

        {coins?.length ? (
          <div className="chips" aria-label={L.coinsAccepted}>
            {coins.map((coin) => <span className="chip" key={coin}>{coin}</span>)}
          </div>
        ) : null}

        {c.payoutMinutes || c.minDepositUsd ? (
          <div className="facts">
            {c.payoutMinutes ? <span><Zap size={14} aria-hidden /> {L.payout} <b>{tx.payout}</b></span> : null}
            {c.minDepositUsd ? <span><Wallet size={14} aria-hidden /> {L.minDeposit} <b>${c.minDepositUsd.value}</b></span> : null}
          </div>
        ) : null}

        {c.kyc && c.lastChecked ? (
          <>
            <p style={{ margin: 0, fontSize: 15.5 }}>{tx.summary}</p>
            <p className="reported-note">
              <a href={c.kyc.withdrawal.source} rel="nofollow noopener" target="_blank">{L.checkedAgainst(c.name)}</a>{" "}
              {formatDateL(c.lastChecked, lang)}.
            </p>
          </>
        ) : reported ? (
          <>
            <p style={{ margin: 0, fontSize: 15.5 }}>{tx.summary}</p>
            <p className="reported-note">
              {reported.confirmed ? (
                <>{L.confirmedBy(c.name)} {formatDateL(reported.asOf, lang)}.</>
              ) : (
                <>
                  KYC info reported by <Sources sources={reported.sources} />; not yet confirmed against {c.name}&apos;s
                  own terms.
                </>
              )}
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
              {tx.offer}
              {!c.offer.code && c.affiliateUrl ? (
                <span className="offer-note">{L.noCode}</span>
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
              aria-label={c.offer ? L.claimAt(c.name) : L.visit(c.name)}
            >
              {c.offer ? L.claimBonus : L.visit(c.name)} <ArrowUpRight size={16} aria-hidden />
            </a>
          ) : null}
          <Link className="btn btn-ghost" href={L.reviewPath(c.slug)}>{L.readReview}</Link>
          <span className="tc">{L.tc}</span>
        </div>
      </div>
    </article>
  );
}
