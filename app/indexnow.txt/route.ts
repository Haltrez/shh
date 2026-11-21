/** IndexNow key (public by design: search engines fetch it to verify submissions). Also served at /e539744f30a15442e73e0d42fbf5d945.txt. */
export const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? "e539744f30a15442e73e0d42fbf5d945";

export function GET() {
  return new Response(INDEXNOW_KEY, { headers: { "Content-Type": "text/plain" } });
}
