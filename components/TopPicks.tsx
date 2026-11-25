import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allCasinos } from "@/lib/data";
import { rank, isPublished, privacyScore, kycLevelOf, isReportedOnly } from "@/lib/score";
import { t, casinoText, type Lang } from "@/lib/i18n";
import { KycBadge } from "./KycBadge";
import { CasinoLogo } from "./CasinoLogo";
import type { Casino } from "@/lib/types";

/**
 * Compact "top picks" box for guides and other content pages.
 * Same order as the ranking (score, then disclosed partner tie-break). Featured stays labelled.
 */
export function TopPicks({
  n = 3,
  place,
  title,
  exclude,
  lang = "en",
  only,
}: {
  n?: number;
  place: string;
  title?: string;
  exclude?: string;
  lang?: Lang;
  /** Extra filter, e.g. (c) => c.latam for Spanish pages. */
  only?: (c: Casino) => boolean;
}) {
  const L = t(lang);
  const heading = title ?? L.topPicks;
  const picks = rank(allCasinos.filter((c) => isPublished(c) && c.affiliateUrl && c.slug !== exclude && (only ? only(c) : true))).slice(0, n);
  if (!picks.length) return null;
  return (
    <aside className="picks" aria-label={heading}>
      <div className="picks-head">
        <span className="picks-title">{heading}</span>
        <Link href={L.rankingPath} className="mono">{L.fullRanking}</Link>
      </div>
      <ol className="picks-list">
        {picks.map((c, i) => (
          <li key={c.slug} className="pick">
            <span className="pick-rank mono">{String(i + 1).padStart(2, "0")}</span>
            <div className="pick-main">
              <div className="pick-top">
                <Link href={L.reviewPath(c.slug)} className="pick-name">
                  <CasinoLogo c={c} size={24} />
                </Link>
                <KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} lang={lang} />
                {c.featured ? <span className="badge badge-featured">{L.featured}</span> : null}
              </div>
              <div className="pick-meta mono">
                {L.score} {privacyScore(c)}{casinoText(c, lang).payout ? <> · {L.payout.toLowerCase()} {casinoText(c, lang).payout}</> : null}
              </div>
              {c.offer ? <div className="pick-offer">{casinoText(c, lang).offer}</div> : null}
            </div>
            <a
              className="btn btn-primary pick-cta"
              href={`/go/${c.slug}?pos=${encodeURIComponent(`${place}-${i + 1}`)}`}
              rel="sponsored nofollow noopener"
              target="_blank"
              aria-label={c.offer ? L.claimAt(c.name) : L.visit(c.name)}
            >
              {c.offer ? L.claimBonus : lang === "es" ? "Ir" : "Visit"} <ArrowUpRight size={15} aria-hidden />
            </a>
          </li>
        ))}
      </ol>
      <p className="picks-note">{L.picksNote} <Link href="/how-we-rate">{L.howWeRank}</Link></p>
    </aside>
  );
}
