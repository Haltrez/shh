import type { ReactNode } from "react";
import type { Casino, Sourced } from "@/lib/types";
import { kycLabel } from "./KycBadge";
import { formatDate } from "@/lib/format";

function Src({ s }: { s?: Sourced<unknown> }) {
  if (!s?.source) return null;
  return (
    <a className="src" href={s.source} rel="nofollow noopener" target="_blank">
      source
    </a>
  );
}

const PENDING = <span className="faint">Being checked</span>;

function fact<T>(s: Sourced<T> | undefined, render: (v: T) => ReactNode): ReactNode {
  if (!s) return PENDING;
  return (
    <>
      {render(s.value)}
      <Src s={s} />
    </>
  );
}

const mono = (t: string) => <span className="mono">{t}</span>;

export function FactBox({ c }: { c: Casino }) {
  const rows: [string, ReactNode][] = [
    ["Licence", fact(c.licence, (v) => v)],
    ["KYC level", c.kyc ? kycLabel(c.kyc.level) : c.reported ? <>{kycLabel(c.reported.level)} <span className="faint">(reported, unconfirmed)</span></> : PENDING],
    ["At sign-up", fact(c.kyc?.signup, (v) => v)],
    ["At withdrawal", fact(c.kyc?.withdrawal, (v) => v)],
    ["Check triggers", fact(c.kyc?.triggers, (v) => v.join("; "))],
    ["VPN rule (per T&Cs)", fact(c.vpnRule, (v) => v)],
    ["Restricted countries", fact(c.restrictedCountries, (v) => mono(v.join(" ")))],
    ["Coins", fact(c.coins, (v) => mono(v.join(" ")))],
    ["Min deposit", fact(c.minDepositUsd, (v) => mono(`$${v}`))],
    ["Withdrawal limits", fact(c.withdrawalLimits, (v) => v)],
  ];
  return (
    <section className="card factbox" aria-labelledby="facts-h">
      <h2 id="facts-h">
        Fact box
        <span className="mono" style={{ fontWeight: 500 }}>
          {c.lastChecked ? `checked ${formatDate(c.lastChecked)}` : "not yet checked"}
        </span>
      </h2>
      <dl>
        {rows.map(([k, v]) => (
          <div key={k} style={{ display: "contents" }}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
