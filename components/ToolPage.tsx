import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { Faq } from "./Faq";
import { JsonLd } from "./JsonLd";
import { TopPicks } from "./TopPicks";
import { RelatedGuides } from "./Related";

export function ToolPage({
  title, path, lead, tool, children, faq, related,
}: {
  title: string; path: string; lead: string; tool: ReactNode; children?: ReactNode;
  faq: { q: string; a: string }[]; related: string[];
}) {
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / <Link href="/tools">Tools</Link> / {title}</div>
        <h1>{title}</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>{lead}</p>
      </div>
      <div className="wrap layout-article">
        <div className="prose">
          {tool}
          {children}
          <h2>Questions</h2>
          <Faq items={faq} />
        </div>
        <aside className="grid">
          <TopPicks place={`tool-${path.split("/").pop()}`} title="Top picks today" />
          <RelatedGuides slugs={related} />
        </aside>
      </div>
      <JsonLd
        data={[
          breadcrumbs([["Home", "/"], ["Tools", "/tools"], [title, path]]),
          faqPage(faq),
          { "@context": "https://schema.org", "@type": "WebApplication", name: title, applicationCategory: "FinanceApplication", operatingSystem: "Any", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } },
        ]}
      />
    </>
  );
}
