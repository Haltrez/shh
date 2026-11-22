import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === "preview") return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/go/", "/api/"] },
      // AI search and assistant crawlers: explicitly welcome (GEO). Same exclusions as everyone else.
      {
        userAgent: [
          "OAI-SearchBot", "ChatGPT-User", "GPTBot",
          "Claude-SearchBot", "Claude-User", "ClaudeBot",
          "PerplexityBot", "Perplexity-User",
          "Google-Extended", "Applebot-Extended", "Bingbot", "DuckAssistBot", "MistralAI-User",
        ],
        allow: "/",
        disallow: ["/go/", "/api/"],
      },
    ],
    sitemap: [`${site.url}/sitemap_index.xml`, ...["pages", "reviews", "lists", "guides", "compare", "bonus", "es"].map((id) => `${site.url}/sitemap/${id}.xml`)],
    host: site.url,
  };
}
