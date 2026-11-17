import type { Casino } from "@/lib/types";

/** Casino wordmark (alt = name), or icon + name for icon-only logos, or plain name. */
export function CasinoLogo({ c, size = 30 }: { c: Casino; size?: number }) {
  if (!c.logo) return <>{c.name}</>;
  return (
    <span className="casino-logo-wrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="casino-logo"
        src={c.logo}
        alt={c.logoIsMark ? "" : c.name}
        style={{ height: size }}
        loading="lazy"
        decoding="async"
      />
      {c.logoIsMark ? <span>{c.name}</span> : null}
    </span>
  );
}
