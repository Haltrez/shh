import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { site } from "@/lib/site";
import { sitewide } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { AgeBanner, AGE_SCRIPT } from "@/components/AgeBanner";
import { OutboundTracker } from "@/components/OutboundTracker";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600"], display: "swap", variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-mono" });

export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `No-KYC Crypto Casinos: Straight Answers on Privacy | ${site.name}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en" },
  twitter: { card: "summary_large_image" },
  // Vercel preview deploys must never be indexed.
  robots: process.env.VERCEL_ENV === "preview" ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/** <html>/<body> shared by the two root layouts, app/(en) and app/(es), so each sets its own lang. */
export function RootShell({ lang, children }: { lang: "en" | "es"; children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang={lang} className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: AGE_SCRIPT }} />
        <link rel="ard" href="/.well-known/ard.json" type="application/json" />
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="llms.txt" />
      </head>
      <body>
        {children}
        <AgeBanner lang={lang} />
        <OutboundTracker />
        <Analytics />
        <JsonLd data={sitewide} />
      </body>
    </html>
  );
}
