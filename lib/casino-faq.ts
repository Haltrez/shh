import type { Casino } from "./types";
import { kycLevelOf, coinsOf } from "./score";
import { formatPayout } from "./format";

/**
 * FAQ built from a casino's data, targeting brand searches like
 * "koalabet kyc", "bitstarz bonus code", "mirax withdrawal time", "is 7bit legit".
 * Only states what the data supports.
 */
export function casinoFaq(c: Casino): { q: string; a: string }[] {
  const out: { q: string; a: string }[] = [];
  const level = kycLevelOf(c);
  const summary = c.kyc?.summary ?? c.reported?.summary;

  if (level && summary) {
    const lead =
      level === "none" ? `No, not for everyday play.` : level === "on-request" ? `Not to sign up. ${c.name} can ask for ID later.` : `Yes.`;
    out.push({ q: `Does ${c.name} require KYC?`, a: `${lead} ${summary}` });
  }

  if (c.kyc?.triggers.value.length) {
    out.push({
      q: `When can ${c.name} ask for ID?`,
      a: `Its terms list: ${c.kyc.triggers.value.join("; ")}.`,
    });
  }

  if (c.payoutMinutes) {
    out.push({
      q: `How fast are ${c.name} withdrawals?`,
      a: `Our test withdrawals arrived in ${formatPayout(c)}. The blockchain part takes seconds to minutes; any longer wait is the casino's own review.`,
    });
  }

  if (c.offer) {
    out.push({
      q: `Does ${c.name} have a bonus code?`,
      a: c.offer.code
        ? `Yes: ${c.offer.code}. The current offer is: ${c.offer.text}. 18+, T&Cs apply.`
        : `No code is needed. The current offer (${c.offer.text}) applies when you sign up through our Claim bonus button. 18+, T&Cs apply.`,
    });
  }

  const coins = coinsOf(c);
  if (coins?.length) {
    out.push({ q: `Which coins does ${c.name} accept?`, a: `${coins.join(", ")}. Always match the coin and network on the deposit page.` });
  }

  if (c.licence) {
    out.push({ q: `Is ${c.name} licensed?`, a: `Yes. Its terms state: ${c.licence.value}.` });
  }

  if (c.withdrawalLimits) {
    out.push({ q: `Does ${c.name} have withdrawal limits?`, a: `${c.withdrawalLimits.value}.` });
  }

  if (c.vpnRule) {
    out.push({
      q: `Can I use a VPN at ${c.name}?`,
      a: `A VPN is fine for general privacy, but ${c.name}'s terms say: ${c.vpnRule.value} Only play where online gambling is legal for you.`,
    });
  }

  return out;
}
