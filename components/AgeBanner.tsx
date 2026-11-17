"use client";
import { useEffect, useState } from "react";

const KEY = "shh-age-ok";

/** Light banner, not a wall (no intrusive interstitial). Remembered per browser. */
export function AgeBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  return (
    <div className="age-banner" role="region" aria-label="Age notice">
      <span>
        <strong style={{ color: "var(--text)" }}>18+ only.</strong> This site is for adults where online gambling is
        legal.
      </span>
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
        I&apos;m 18+
      </button>
    </div>
  );
}
