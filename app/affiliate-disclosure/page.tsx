import Link from "next/link";
import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";

export const metadata: Metadata = {
  title: "Affiliate Disclosure: How shh Makes Money",
  description: "We earn commission from some casinos and VPN providers. Here's how that works and why it never changes our scores.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function Page() {
  return (
    <TrustPage title="Affiliate disclosure" path="/affiliate-disclosure" lead="We earn commission from some casinos. It never changes our scores.">
      <h2 style={{ marginTop: 0 }}>How we&apos;re paid</h2>
      <ul>
        <li><b>Casino referrals:</b> when you sign up through a &ldquo;Visit&rdquo; link, the casino may pay us a commission. It costs you nothing extra.</li>
        <li><b>Featured placements:</b> a casino can pay for a spot labelled <b>Featured</b>. Ranked tables stay in privacy-score order regardless.</li>
        <li><b>VPN referrals:</b> some privacy guides link to VPN providers that pay us per sale.</li>
      </ul>

      <h2>What money can&apos;t buy</h2>
      <ul>
        <li>A higher privacy score, or a better position in a ranked table.</li>
        <li>Removal of a con from a review.</li>
        <li>A placement in a list the casino doesn&apos;t qualify for.</li>
      </ul>

      <h2>Outbound links</h2>
      <p>
        Partner links go through <span className="mono">/go/[casino]</span>, are marked{" "}
        <span className="mono">rel=&quot;sponsored nofollow&quot;</span>, and are counted so we can report clicks to
        partners. We don&apos;t pass your personal data to casinos. See our <Link href="/privacy">privacy policy</Link>.
      </p>
    </TrustPage>
  );
}
