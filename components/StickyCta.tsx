"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Bottom bar with the casino's main CTA. Appears once the reader has scrolled past the
 * page header (so it never covers the first screen), hides again near the footer.
 */
export function StickyCta({
  name,
  logo,
  href,
  label,
  sub,
}: {
  name: string;
  logo?: string;
  href: string;
  label: string;
  sub?: string;
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector("footer");
      const nearFooter = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setShow(window.scrollY > 520 && !nearFooter);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky-cta${show ? " show" : ""}`} aria-hidden={!show}>
      <div className="wrap sticky-cta-inner">
        <div className="sticky-cta-info">
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt="" height={22} width={66} className="sticky-cta-logo" style={{ width: "auto" }} />
          ) : null}
          <div className="sticky-cta-text">
            <b>{name}</b>
            {sub ? <span>{sub}</span> : null}
          </div>
        </div>
        <a
          className="btn btn-primary"
          href={href}
          rel="sponsored nofollow noopener"
          target="_blank"
          tabIndex={show ? 0 : -1}
        >
          {label} <ArrowUpRight size={16} aria-hidden />
        </a>
      </div>
    </div>
  );
}
