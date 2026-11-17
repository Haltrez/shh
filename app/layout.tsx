import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { sitewide } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Header, Footer } from "@/components/Chrome";
import { AgeBanner } from "@/components/AgeBanner";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["600"], display: "swap", variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-mono" });

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="sr-only">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <AgeBanner />
        <JsonLd data={sitewide} />
      </body>
    </html>
  );
}
