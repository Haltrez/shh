import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV === "preview") return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/go/", "/api/"] }],
    sitemap: ["pages", "reviews", "lists", "guides", "compare"].map((id) => `${site.url}/sitemap/${id}.xml`),
    host: site.url,
  };
}
