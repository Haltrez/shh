/** IndexNow key file. Set INDEXNOW_KEY in Vercel; scripts/indexnow.mjs passes this URL as keyLocation. */
export function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return new Response("Not configured", { status: 404 });
  return new Response(key, { headers: { "Content-Type": "text/plain" } });
}
