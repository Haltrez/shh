import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What shh collects (very little), why, and how long we keep it. No accounts, no ad trackers.",
  alternates: { canonical: "/privacy" },
};

// TODO: have this reviewed before launch for the jurisdictions you operate in (GDPR/UK GDPR etc.).
export default function Page() {
  return (
    <TrustPage title="Privacy policy" path="/privacy" lead="A privacy site should collect as little as possible. We do.">
      <h2 style={{ marginTop: 0 }}>What we collect</h2>
      <ul>
        <li><b>Outbound click counts:</b> when you use a <span className="mono">/go/</span> link we log the casino, the page you clicked from, the link position, your country (from your IP, not stored) and the time. We don&apos;t store your IP address.</li>
        <li><b>Hosting logs:</b> our host keeps standard request logs for security and debugging for a limited period.</li>
        <li><b>Your browser:</b> we store one local setting (that you dismissed the 18+ banner). It never leaves your device.</li>
      </ul>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>No accounts, no newsletters by default, no ad trackers, no selling data.</li>
        <li>We don&apos;t pass personal data to casinos. Affiliate links identify us, not you.</li>
      </ul>

      <h2>Once you leave</h2>
      <p>Casinos, exchanges and VPN providers have their own privacy policies. Read them; they&apos;ll know far more about you than we do.</p>

      <h2>Contact</h2>
      <p>Questions or deletion requests: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.</p>
    </TrustPage>
  );
}
