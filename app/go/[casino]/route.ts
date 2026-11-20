import { NextResponse, type NextRequest } from "next/server";
import { findCasino } from "@/lib/data";
import { vpn } from "@/data/vpn";
import { findSweeps, sweepsLink } from "@/data/sweeps";

/**
 * Outbound affiliate redirect: /go/cashy?pos=1, and /go/vpn for the VPN partner.
 * - 302 to the tracking link (never cached, never indexed – /go/ is disallowed in robots.txt)
 * - Logs one JSON line per click (target, source page, position, country) for partner reports.
 *   Search Vercel → Logs for "outbound_click".
 */
export const dynamic = "force-dynamic";

function log(event: Record<string, unknown>) {
  console.log(JSON.stringify({ type: "outbound_click", ts: new Date().toISOString(), ...event }));
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ casino: string }> }) {
  const { casino: slug } = await params;
  const base = new URL(req.url);
  const headers = { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" };

  let from: string | null = null;
  try {
    const referer = req.headers.get("referer");
    from = referer ? new URL(referer).pathname : null;
  } catch {}

  const country = req.headers.get("x-vercel-ip-country");
  const region = req.headers.get("x-vercel-ip-country-region");

  // US sweepstakes partners: Gold-Coins-only link in the states the partner restricts.
  const sw = findSweeps(slug);
  if (sw) {
    // US-only partners: send visitors from other countries to the crypto rankings instead.
    if (country && country !== "US") {
      log({ target: slug, from, pos: base.searchParams.get("pos"), country, region, link: "non-us" });
      return NextResponse.redirect(new URL("/no-kyc-casinos", base), { status: 302, headers });
    }
    const { url, social } = sweepsLink(sw, country, region);
    log({ target: slug, from, pos: base.searchParams.get("pos"), country, region, link: social ? "social" : "sweeps" });
    return NextResponse.redirect(url, { status: 302, headers });
  }

  const target = slug === "vpn" ? vpn.affiliateUrl : findCasino(slug)?.affiliateUrl;
  log({ target: slug, from, pos: base.searchParams.get("pos"), country });

  if (!target) {
    const fallback = slug === "vpn" ? "/guides/vpn-and-crypto-privacy" : findCasino(slug) ? `/reviews/${slug}` : "/no-kyc-casinos";
    return NextResponse.redirect(new URL(fallback, base), { status: 302, headers });
  }
  return NextResponse.redirect(target, { status: 302, headers });
}
