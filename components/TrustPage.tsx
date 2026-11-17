import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";
import { breadcrumbs } from "@/lib/schema";

export function TrustPage({ title, path, lead, children }: { title: string; path: string; lead?: string; children: ReactNode }) {
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / {title}</div>
        <h1>{title}</h1>
        {lead ? <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>{lead}</p> : null}
      </div>
      <div className="wrap prose" style={{ paddingBottom: 64 }}>{children}</div>
      <JsonLd data={breadcrumbs([["Home", "/"], [title, path]])} />
    </>
  );
}
