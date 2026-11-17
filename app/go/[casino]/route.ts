import { NextResponse, type NextRequest } from "next/server";
import { findCasino } from "@/lib/data";
import { geoAllowed } from "@/lib/geo";

/**
 * Outbound affiliate redirect: /go/koalabet?pos=1
 * - 302 to the tracking link (never cached, never indexed – /go/ is disallowed in robots.txt)
 * - Respects the casino's `geos` rules server-side
 * - Logs one JSON line per click (casino, source page, position, country) for partner reports.
 *   Pipe Vercel log drains to your store of choice, or swap `log()` for the Scatter Drop logger.
 */
export const dynamic = "force-dynamic";

function log(event: Record<string, unknown>) {
  console.log(JSON.stringify({ type: "outbound_click", ts: new Date().toISOString(), ...event }));
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ casino: string }> }) {
  const { casino } = await params;
  const c = findCasino(casino);
  const base = new URL(req.url);
  const headers = { "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" };

  if (!c) return NextResponse.redirect(new URL("/no-kyc-casinos", base), { status: 302, headers });

  const country = req.headers.get("x-vercel-ip-country");
  const referer = req.headers.get("referer");
  let from: string | null = null;
  try {
    from = referer ? new URL(referer).pathname : null;
  } catch {}

  const allowed = geoAllowed(c.geos, country);
  log({ casino: c.slug, from, pos: base.searchParams.get("pos"), country, allowed });

  if (!allowed || !c.affiliateUrl) {
    const back = new URL(`/reviews/${c.slug}`, base);
    if (!allowed) back.searchParams.set("unavailable", "1");
    return NextResponse.redirect(back, { status: 302, headers });
  }

  return NextResponse.redirect(c.affiliateUrl, { status: 302, headers });
}
