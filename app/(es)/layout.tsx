import type { Metadata } from "next";
import { HeaderEs, FooterEs } from "@/components/ChromeEs";
import { RootShell, rootMetadata, viewport as rootViewport } from "@/components/RootShell";

export const metadata: Metadata = {
  ...rootMetadata,
  openGraph: { ...rootMetadata.openGraph, locale: "es" },
};
export const viewport = rootViewport;

/** Spanish (LatAm) root layout: <html lang="es">, own header/footer. */
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="es">
      <a href="#main" className="sr-only">Saltar al contenido</a>
      <HeaderEs />
      <main id="main">{children}</main>
      <FooterEs />
    </RootShell>
  );
}
