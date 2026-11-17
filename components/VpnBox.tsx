import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { vpn, hasVpnPartner } from "@/data/vpn";

/**
 * "Add a VPN for more privacy". Framed around privacy (ISP, Wi-Fi, trackers),
 * never as a way past a casino's country rules.
 */
export function VpnBox({ compact = false, pos }: { compact?: boolean; pos?: string }) {
  const partner = hasVpnPartner();
  return (
    <div className="card vpn-box">
      <div className="vpn-head">
        <ShieldCheck size={compact ? 18 : 22} color="var(--accent)" aria-hidden />
        <h3 style={{ margin: 0, fontSize: compact ? "1rem" : "1.2rem" }}>Add a VPN for more privacy</h3>
      </div>
      <p style={{ margin: 0, fontSize: compact ? 15 : 16 }}>
        A VPN encrypts your connection, so your internet provider, the Wi-Fi you&apos;re on and ad trackers can&apos;t
        see which exchanges, wallets and sites you use.
      </p>
      {!compact ? (
        <ul className="vpn-list">
          <li>Hides your browsing from your ISP and local network</li>
          <li>Protects exchange and wallet logins on public Wi-Fi</li>
          <li>Makes it harder for ad networks to profile you</li>
        </ul>
      ) : null}
      {partner ? (
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <a
            className="btn btn-primary"
            href={`/go/vpn${pos ? `?pos=${encodeURIComponent(pos)}` : ""}`}
            rel="sponsored nofollow noopener"
            target="_blank"
          >
            Get {vpn.name} <ArrowUpRight size={16} aria-hidden />
          </a>
          {vpn.blurb ? <span className="faint" style={{ fontSize: 14 }}>{vpn.blurb}</span> : null}
        </div>
      ) : null}
      <p className="reported-note">
        A VPN doesn&apos;t make blockchain payments anonymous, and it doesn&apos;t change where you&apos;re allowed to
        gamble. <Link href="/guides/vpn-and-crypto-privacy">What a VPN does and doesn&apos;t do</Link>.
      </p>
    </div>
  );
}
