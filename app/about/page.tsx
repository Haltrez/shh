import Link from "next/link";
import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { site } from "@/lib/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "About shh: Straight Answers on Privacy",
  description: "Who writes shh, what we publish, what we refuse to publish, and how we keep casino facts current.",
  path: "/about",
});

export default function Page() {
  return (
    <TrustPage title="About" path="/about" lead={`${site.name} is a privacy-first guide to no-KYC and low-KYC crypto casinos.`}>
      <h2 style={{ marginTop: 0 }}>What we do</h2>
      <p>
        We say exactly what each casino asks for, and when: no ID at sign-up, when ID can still be requested, how fast
        it pays, which coins it takes. We write plain guides to buying, moving and protecting crypto. And we&apos;re
        honest about what &ldquo;anonymous&rdquo; means on a public blockchain.
      </p>

      <h2>What we won&apos;t publish</h2>
      <ul>
        <li>Guides to getting around casino country blocks with a VPN.</li>
        <li>Pages aimed at people who&apos;ve self-excluded from gambling.</li>
        <li>Claims that crypto gambling is untraceable or &ldquo;100% anonymous&rdquo;.</li>
        <li>Fake reviews, invented wins, or bonus terms we haven&apos;t seen on the casino&apos;s own site.</li>
        <li>Anything aimed at under-18s.</li>
      </ul>

      <h2>Who writes it</h2>
      {/* TODO: replace with the real author bio (pen name is fine) before launch – E-E-A-T. */}
      <p>
        {site.author.name}: a small team that has used crypto since well before casinos took it. We open real
        accounts, read the terms, and time real withdrawals.
      </p>

      <h2>Keeping it current</h2>
      <p>
        Every casino is re-checked monthly. Each review shows the date of its last full check. See{" "}
        <Link href="/how-we-rate">how we rate</Link> and our <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
        Spotted something out of date? <Link href="/contact">Tell us</Link>.
      </p>
    </TrustPage>
  );
}
