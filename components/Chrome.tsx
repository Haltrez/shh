import Link from "next/link";
import { site } from "@/lib/site";
import { lists } from "@/data/lists";
import { guides } from "@/content/guides";

const NAV = [
  { href: "/no-kyc-casinos", label: "No KYC casinos" },
  { href: "/best-crypto-casinos", label: "Best crypto casinos" },
  { href: "/bonus", label: "Bonus codes" },
  { href: "/best/usdt-casinos", label: "By coin" },
  { href: "/guides", label: "Guides" },
  { href: "/how-we-rate", label: "How we rate" },
];

export function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="logo" aria-label={`${site.name} home`}>
          <span className="logo-mark" aria-hidden /> {site.name}
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        {/* Mobile: no-JS disclosure menu */}
        <details className="mobile-menu">
          <summary aria-label="Menu">
            <span className="burger" aria-hidden><i /><i /><i /></span>
          </summary>
          <nav className="mobile-menu-panel" aria-label="Main (mobile)">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  const keyGuides = guides.slice(0, 6);
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <p className="footer-title">casinos</p>
            <ul>
              <li><Link href="/no-kyc-casinos">No KYC casinos</Link></li>
              <li><Link href="/best-crypto-casinos">Best crypto casinos</Link></li>
              <li><Link href="/anonymous-casinos">Anonymous crypto casinos</Link></li>
              <li><Link href="/bonus">Crypto casino bonus codes</Link></li>
              <li><Link href="/alternatives/stake">Sites like Stake</Link></li>
              <li><Link href="/alternatives/bc-game">BC.Game alternatives</Link></li>
              <li><Link href="/alternatives/roobet">Roobet alternatives</Link></li>
              {lists.map((l) => (
                <li key={l.slug}><Link href={`/best/${l.slug}`}>{l.short}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-title">guides</p>
            <ul>
              {keyGuides.map((g) => (
                <li key={g.slug}><Link href={`/guides/${g.slug}`}>{g.h1}</Link></li>
              ))}
              <li><Link href="/guides">All guides →</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-title">about</p>
            <ul>
              <li><Link href="/es" hrefLang="es">Español</Link></li>
              <li><Link href="/kyc-tracker">KYC policy tracker</Link></li>
              <li><Link href="/tools">Free tools</Link></li>
              <li><Link href="/how-we-rate">How we rate</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/affiliate-disclosure">Affiliate disclosure</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/responsible-gambling">Responsible gambling</Link></li>
            </ul>
          </div>
        </div>
        <div className="rg">
          <p>
            18+ only. Gambling can be addictive. Set limits before you play, and only play where online gambling is
            legal for you. If it stops being fun, stop. <Link href="/responsible-gambling">Get help</Link>.
          </p>
          <p>
            We earn commission from some casinos. It never changes our scores.{" "}
            <Link href="/affiliate-disclosure">How this works</Link>.
          </p>
          <p>
            © {site.year} {site.name}. Independent guide; we don&apos;t operate any casino. Facts are checked against
            each casino&apos;s own terms on the date shown, and terms change. Check before you deposit.
          </p>
        </div>
      </div>
    </footer>
  );
}
