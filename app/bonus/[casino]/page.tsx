import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Gift } from "lucide-react";
import { findCasino } from "@/lib/data";
import { bonusCasinos } from "@/lib/bonus";
import { isPublished, kycLevelOf, isReportedOnly, coinsOf } from "@/lib/score";
import { seo, clip } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { formatDate } from "@/lib/format";
import type { Casino } from "@/lib/types";
import { KycBadge, kycLabel } from "@/components/KycBadge";
import { CasinoLogo } from "@/components/CasinoLogo";
import { Steps } from "@/components/Blocks";
import { Caveat } from "@/components/Caveat";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { TopPicks } from "@/components/TopPicks";

type Props = { params: Promise<{ casino: string }> };


export const dynamicParams = false;
export function generateStaticParams() {
  return bonusCasinos().map((c) => ({ casino: c.slug }));
}

const year = () => new Date().getFullYear();
const kycText = (c: Casino) => c.kyc?.summary ?? c.reported?.summary ?? "";
const updatedOf = (c: Casino) => c.lastChecked ?? c.reported?.asOf;

function faqFor(c: Casino) {
  const items = [
    {
      q: `Is there a ${c.name} bonus code?`,
      a: c.offer
        ? c.offer.code
          ? `Yes: ${c.offer.code}. It unlocks the current welcome offer: ${c.offer.text}.`
          : `No code is needed. The welcome offer (${c.offer.text}) applies when you sign up through our link.`
        : `${c.name} doesn't run a welcome bonus right now, so there's no code to enter. You can sign up and deposit without one.`,
    },
    {
      q: `Do I need KYC to claim the ${c.name} bonus?`,
      a: `${kycText(c)} The bonus doesn't change that, but bonus terms can add checks before you withdraw bonus winnings.`,
    },
    {
      q: `Is there a ${c.name} no deposit bonus?`,
      a: `We don't list one. The only offer we show is the one on this page. Check ${c.name}'s promotions page for anything else running today.`,
    },
    {
      q: `Can I withdraw ${c.name} bonus winnings straight away?`,
      a: c.offer
        ? `Usually not. Welcome bonuses come with wagering requirements before winnings can be withdrawn. Read the bonus terms on ${c.name} before you opt in.`
        : `There's no bonus to clear. Your own deposits may still need to be wagered before withdrawal; check ${c.name}'s terms.`,
    },
  ];
  return items;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = findCasino((await params).casino);
  if (!c) return {};
  const title = c.offer
    ? `${c.name} Bonus Code ${year()}: ${c.offer.text}`
    : `${c.name} Bonus Code ${year()}: Is There One?`;
  const fallback = `${c.name} Bonus Code ${year()}: No Code Needed`;
  const description = clip(
    c.offer
      ? `${c.name} bonus code ${year()}: no code needed. ${c.offer.text} via our link. How to claim it, the KYC rules and what to check first.`
      : `${c.name} bonus code ${year()}: there's no welcome bonus and no code to enter. What you get instead, the KYC rules and how to sign up.`,
  );
  return seo({
    // Keep the <title> under 60 characters including the " | shh" suffix.
    title: title.length <= 54 ? title : fallback.length <= 54 ? fallback : `${c.name} Bonus Code ${year()}`,
    description,
    path: `/bonus/${c.slug}`,
    type: "article",
    modifiedTime: updatedOf(c),
  });
}

export default async function BonusPage({ params }: Props) {
  const c = findCasino((await params).casino);
  if (!c || !isPublished(c) || !c.affiliateUrl) notFound();
  const faq = faqFor(c);
  const updated = updatedOf(c);
  const coins = coinsOf(c);
  const cta = c.offer ? "Claim bonus" : `Visit ${c.name}`;

  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs">
          <Link href="/">Home</Link> / <Link href={`/reviews/${c.slug}`}>{c.name}</Link> / Bonus code
        </div>
        {c.logo ? (
          <div className="review-logo" aria-hidden>
            <CasinoLogo c={c} size={40} />
          </div>
        ) : null}
        <h1>
          {c.name} bonus code {year()}
        </h1>
        <p className="lead prose" style={{ fontSize: "1.15rem" }}>
          {c.offer ? (
            <>
              <b>No code needed.</b> Sign up through our link to get {c.name}&apos;s welcome offer:{" "}
              <b>{c.offer.text}</b>.
            </>
          ) : (
            <>
              <b>There&apos;s no {c.name} bonus code</b> because {c.name} doesn&apos;t run a welcome bonus. That also
              means no bonus wagering conditions holding up your withdrawals.
            </>
          )}
        </p>
        <p className="meta-strip">
          <span>KYC: {kycLabel(kycLevelOf(c)).toLowerCase()}{isReportedOnly(c) ? " (reported)" : ""}</span>
          {updated ? <span>updated {formatDate(updated)}</span> : null}
        </p>
      </div>

      <div className="wrap layout-article">
        <article className="prose">
          <div className="card bonus-card">
            <div className="bonus-offer">
              <Gift size={22} color="var(--accent)" aria-hidden />
              <div>
                <div className="bonus-offer-text">{c.offer ? c.offer.text : "No welcome bonus"}</div>
                <div className="faint" style={{ fontSize: 14 }}>
                  {c.offer ? "Code: none needed · applied via our link" : "No code · no bonus wagering"}
                </div>
              </div>
            </div>
            <a
              className="btn btn-primary"
              href={`/go/${c.slug}?pos=bonus-page`}
              rel="sponsored nofollow noopener"
              target="_blank"
            >
              {cta} <ArrowUpRight size={16} aria-hidden />
            </a>
            <div className="faint" style={{ fontSize: 12.5 }}>18+ · T&amp;Cs apply · Play responsibly</div>
          </div>

          <h2>At a glance</h2>
          <div className="table-wrap" style={{ marginBottom: 24 }}>
            <table className="data-table">
              <tbody>
                <tr><td>Welcome offer</td><td>{c.offer?.text ?? "None"}</td></tr>
                <tr><td>Bonus code</td><td>{c.offer?.code ?? "Not needed"}</td></tr>
                <tr><td>KYC</td><td><KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} /> {kycText(c)}</td></tr>
                {c.minDepositUsd ? <tr><td>Min deposit</td><td>${c.minDepositUsd.value}</td></tr> : null}
                {coins?.length ? <tr><td>Coins</td><td className="mono">{coins.join(" ")}</td></tr> : null}
                {c.licence ? <tr><td>Licence</td><td>{c.licence.value}</td></tr> : null}
              </tbody>
            </table>
          </div>

          <h2>How to {c.offer ? "claim it" : "sign up"}</h2>
          <Steps
            steps={[
              {
                name: c.offer ? `Click "Claim bonus" on this page` : `Click "Visit ${c.name}" on this page`,
                need: "Nothing yet",
                text: c.offer
                  ? "Our link carries the offer, so there's no code to type in later."
                  : "Our link takes you straight to the sign-up page.",
              },
              {
                name: "Create your account",
                need: "An email address or a crypto wallet",
                text: `${kycText(c)} Use a separate email for gambling accounts if you want to keep things private.`,
              },
              {
                name: "Make your first deposit",
                need: coins?.length ? `One of: ${coins.slice(0, 6).join(", ")}` : "A supported coin and network",
                text: "Copy the deposit address from the cashier, match the coin and network exactly, and send a small test amount first.",
              },
              {
                name: c.offer ? "Check the bonus is active" : "Set your limits",
                need: c.offer ? "Your account's bonus or promotions section" : "Account settings",
                text: c.offer
                  ? `The offer should show in your account. Read ${c.name}'s bonus terms for the wagering requirement before you play.`
                  : "Set a deposit limit before you start. It's easier to decide when you're not mid-session.",
              },
            ]}
          />

          {c.offer ? (
            <Caveat text={`Heads-up: welcome bonuses come with wagering requirements, and bonus play is one of the most common reasons withdrawals get held. If you might want to withdraw soon, you can usually decline the bonus.`} />
          ) : null}

          <p>
            Want the full picture first? Read our <Link href={`/reviews/${c.slug}`}>{c.name} review</Link> for the KYC
            rules, limits and VPN terms.
          </p>

          <h2>{c.name} bonus FAQ</h2>
          <Faq items={faq} />
        </article>

        <aside className="grid">
          <TopPicks place={`bonus-${c.slug}-side`} title="Other top picks" exclude={c.slug} />
        </aside>
      </div>

      <JsonLd
        data={[
          breadcrumbs([["Home", "/"], [c.name, `/reviews/${c.slug}`], ["Bonus code", `/bonus/${c.slug}`]]),
          faqPage(faq),
        ]}
      />
    </>
  );
}
