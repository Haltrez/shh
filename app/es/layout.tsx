import { HeaderEs, FooterEs } from "@/components/ChromeEs";

/** Spanish (LatAm) section: own header/footer; content marked lang="es". */
export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="es">
      <a href="#main" className="sr-only">Saltar al contenido</a>
      <HeaderEs />
      <main id="main">{children}</main>
      <FooterEs />
    </div>
  );
}
