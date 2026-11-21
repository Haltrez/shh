import { Header, Footer } from "@/components/Chrome";
import { RootShell, rootMetadata, viewport as rootViewport } from "@/components/RootShell";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** English root layout (<html lang="en">). URLs are unchanged: (en) is a route group. */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="en">
      <a href="#main" className="sr-only">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </RootShell>
  );
}
