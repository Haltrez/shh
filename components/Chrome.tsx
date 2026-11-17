import Link from "next/link";
import { site } from "@/lib/site";
import { lists } from "@/data/lists";
import { guides } from "@/content/guides";

export function Disclosure() {
  return (
    <div className="disclosure">
      We earn commission from some casinos. It never changes our scores.{" "}
      <Link href="/affiliate-disclosure">How this works</Link>
    </div>
  );
}

export function Header() {
  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="logo" aria-label={`${site.name} home`}>
          <span className="logo-mark" aria-hidden /> {site.name}
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/no-kyc-casinos">No-KYC casinos</Link>
          <Link href="/best/usdt-casinos">By coin</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/how-we-rate" className="nav-extra">How we rate</Link>
        </nav>
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
            <h4>casinos</h4>
            <ul>
              <li><Link href="/no-kyc-casinos">No-KYC casinos</Link></li>
              {lists.map((l) => (
                <li key={l.slug}><Link href={`/best/${l.slug}`}>{l.short}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>guides</h4>
            <ul>
              {keyGuides.map((g) => (
                <li key={g.slug}><Link href={`/guides/${g.slug}`}>{g.h1}</Link></li>
              ))}
              <li><Link href="/guides">All guides →</Link></li>
            </ul>
          </div>
          <div>
            <h4>about</h4>
            <ul>
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
            © {site.year} {site.name}. Independent guide; we don&apos;t operate any casino. Facts are checked against
            each casino&apos;s own terms on the date shown, and terms change. Check before you deposit.
          </p>
        </div>
      </div>
    </footer>
  );
}
