import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { site } from "@/lib/site";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Contact shh",
  description: "Spotted a wrong fact or a casino that changed its terms? How to reach the shh editors for corrections, casino term changes and partnership questions.",
  path: "/contact",
});

export default function Page() {
  return (
    <TrustPage title="Contact" path="/contact" lead="Corrections are the most useful thing you can send us.">
      <p>
        Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
      <ul>
        <li><b>Out-of-date fact?</b> Send the page and, if you can, a link to the casino&apos;s current terms.</li>
        <li><b>Casino partnerships:</b> paid placements are labelled &ldquo;Featured&rdquo; and never change scores.</li>
        <li><b>Account problems with a casino:</b> we can&apos;t access casino accounts. Contact the casino&apos;s support, then its licensing authority if it doesn&apos;t resolve it.</li>
      </ul>
      <p className="faint">We never ask for your seed phrase, passwords or ID. Anyone who does isn&apos;t us.</p>
    </TrustPage>
  );
}
