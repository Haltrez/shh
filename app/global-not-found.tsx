import type { Metadata } from "next";
import { Header, Footer } from "@/components/Chrome";
import { RootShell, rootMetadata } from "@/components/RootShell";
import NotFound from "./(en)/not-found";

export const metadata: Metadata = { ...rootMetadata, title: "Page not found", robots: { index: false, follow: true } };

/** 404 for URLs that match no route (the app has two root layouts, so there's no shared one). */
export default function GlobalNotFound() {
  return (
    <RootShell lang="en">
      <Header />
      <main id="main"><NotFound /></main>
      <Footer />
    </RootShell>
  );
}
