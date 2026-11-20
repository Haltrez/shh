import { Header, Footer } from "@/components/Chrome";

/** English site chrome. URLs are unchanged: (en) is a route group. */
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only">Skip to content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
