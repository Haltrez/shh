import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-head" style={{ minHeight: "50vh" }}>
      <p className="mono">404</p>
      <h1>
        This page is <span className="redact" tabIndex={0}>missing</span>.
      </h1>
      <p className="dim">
        Try the <Link href="/no-kyc-casinos">no-KYC ranking</Link> or the <Link href="/guides">guides</Link>.
      </p>
    </div>
  );
}
