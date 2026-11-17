import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

/** Country code only, from Vercel's edge header. Nothing is stored. */
export function GET(req: NextRequest) {
  return NextResponse.json(
    { country: req.headers.get("x-vercel-ip-country") },
    { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex" } },
  );
}
