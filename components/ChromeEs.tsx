import Link from "next/link";
import { site } from "@/lib/site";

const NAV = [
  { href: "/es/casinos-sin-kyc", label: "Casinos sin KYC" },
  { href: "/es/mejores-casinos-cripto", label: "Mejores casinos cripto" },
  { href: "/es/bonos", label: "Bonos" },
  { href: "/es/guias", label: "Guías" },
  { href: "/", label: "English" },
];

export function HeaderEs() {
  return (
    <header className="header">
      <div className="wrap">
        <Link href="/es" className="logo" aria-label={`${site.name} inicio`}>
          <span className="logo-mark" aria-hidden /> {site.name}
        </Link>
        <nav className="nav" aria-label="Principal">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} hrefLang={n.href === "/" ? "en" : "es"}>{n.label}</Link>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Menú">
            <span className="burger" aria-hidden><i /><i /><i /></span>
          </summary>
          <nav className="mobile-menu-panel" aria-label="Principal (móvil)">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function FooterEs() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <p className="footer-title">casinos</p>
            <ul>
              <li><Link href="/es/casinos-sin-kyc">Casinos sin KYC</Link></li>
              <li><Link href="/es/resenas/koalabet">Reseña de KoalaBet</Link></li>
              <li><Link href="/es/resenas/metawin">Reseña de MetaWin</Link></li>
              <li><Link href="/es/mejores-casinos-cripto">Mejores casinos cripto</Link></li>
              <li><Link href="/es/casinos-anonimos">Casinos cripto anónimos</Link></li>
              <li><Link href="/es/bonos">Códigos de bono</Link></li>
              <li><Link href="/es/guias">Guías</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-title">en inglés</p>
            <ul>
              <li><Link href="/how-we-rate" hrefLang="en">Cómo clasificamos</Link></li>
              <li><Link href="/kyc-tracker" hrefLang="en">Rastreador de KYC</Link></li>
              <li><Link href="/affiliate-disclosure" hrefLang="en">Divulgación de afiliados</Link></li>
              <li><Link href="/privacy" hrefLang="en">Privacidad</Link></li>
              <li><Link href="/responsible-gambling" hrefLang="en">Juego responsable</Link></li>
            </ul>
          </div>
        </div>
        <div className="rg">
          <p>
            Solo para mayores de 18 años. El juego puede crear adicción. Fija límites antes de jugar y juega solo donde el
            juego online sea legal para ti. Si deja de ser divertido, para.
          </p>
          <p>
            Ganamos comisiones de algunos casinos. Eso nunca cambia nuestras puntuaciones. © {site.year} {site.name}.
            Guía independiente; no operamos ningún casino.
          </p>
        </div>
      </div>
    </footer>
  );
}
