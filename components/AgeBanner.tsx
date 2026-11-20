"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const KEY = "shh-age-ok";

/** Light banner, not a wall (no intrusive interstitial). Remembered per browser. */
export function AgeBanner() {
  const [show, setShow] = useState(false);
  const es = (usePathname() ?? "").startsWith("/es");
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  return (
    <div className="age-banner" role="region" aria-label={es ? "Aviso de edad" : "Age notice"}>
      {es ? (
        <span>
          <strong style={{ color: "var(--text)" }}>Solo +18.</strong> Este sitio es para adultos donde el juego online
          es legal.
        </span>
      ) : (
        <span>
          <strong style={{ color: "var(--text)" }}>18+ only.</strong> This site is for adults where online gambling is
          legal.
        </span>
      )}
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => {
          try {
            localStorage.setItem(KEY, "1");
          } catch {}
          setShow(false);
        }}
      >
        {es ? "Tengo +18" : <>I&apos;m 18+</>}
      </button>
    </div>
  );
}
