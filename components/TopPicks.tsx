import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allCasinos } from "@/lib/data";
import { rank, isPublished, privacyScore, kycLevelOf, isReportedOnly } from "@/lib/score";
import { formatPayout } from "@/lib/format";
import { KycBadge } from "./KycBadge";
import { CasinoLogo } from "./CasinoLogo";

/**
 * Compact "top picks" box for guides and other content pages.
 * Same order as the ranking (score, then disclosed partner tie-break). Featured stays labelled.
 */
export function TopPicks({
  n = 3,
  place,
  title = "Top no-KYC casinos right now",
  exclude,
}: {
  n?: number;
  place: string;
  title?: string;
  exclude?: string;
}) {
  const picks = rank(allCasinos.filter((c) => isPublished(c) && c.affiliateUrl && c.slug !== exclude)).slice(0, n);
  if (!picks.length) return null;
  return (
    <aside className="picks" aria-label={title}>
      <div className="picks-head">
        <span className="picks-title">{title}</span>
        <Link href="/no-kyc-casinos" className="mono">full ranking →</Link>
      </div>
      <ol className="picks-list">
        {picks.map((c, i) => (
          <li key={c.slug} className="pick">
            <span className="pick-rank mono">{String(i + 1).padStart(2, "0")}</span>
            <div className="pick-main">
              <div className="pick-top">
                <Link href={`/reviews/${c.slug}`} className="pick-name">
                  <CasinoLogo c={c} size={24} />
                </Link>
                <KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} />
                {c.featured ? <span className="badge badge-featured">Featured</span> : null}
              </div>
              <div className="pick-meta mono">
                score {privacyScore(c)} · payout {formatPayout(c)}
              </div>
              {c.offer ? <div className="pick-offer">{c.offer.text}</div> : null}
            </div>
            <a
              className="btn btn-primary pick-cta"
              href={`/go/${c.slug}?pos=${encodeURIComponent(`${place}-${i + 1}`)}`}
              rel="sponsored nofollow noopener"
              target="_blank"
              aria-label={c.offer ? `Claim bonus at ${c.name}` : `Visit ${c.name}`}
            >
              {c.offer ? "Claim bonus" : "Visit"} <ArrowUpRight size={15} aria-hidden />
            </a>
          </li>
        ))}
      </ol>
      <p className="picks-note">18+ · T&amp;Cs apply · We may earn a commission. <Link href="/how-we-rate">How we rank</Link></p>
    </aside>
  );
}
