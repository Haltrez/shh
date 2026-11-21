import Link from "next/link";

export default function NoEncontrada() {
  return (
    <div className="wrap page-head" style={{ minHeight: "50vh" }}>
      <p className="mono">404</p>
      <h1>
        Esta página <span className="redact" tabIndex={0}>no existe</span>.
      </h1>
      <p className="dim">
        Prueba el <Link href="/es/casinos-sin-kyc">ranking sin KYC</Link> o las <Link href="/es/guias">guías</Link>.
      </p>
    </div>
  );
}
