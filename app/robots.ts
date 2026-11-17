import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/go/", "/api/"] }],
    sitemap: ["pages", "reviews", "lists", "guides"].map((id) => `${site.url}/sitemap/${id}.xml`),
    host: site.url,
  };
}
