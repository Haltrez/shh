import { AgeOkButton } from "./AgeOkButton";

/** Storage key; also read by AGE_SCRIPT before first paint. */
export const AGE_KEY = "shh-age-ok";

/**
 * Runs in <head> before paint: if the visitor already confirmed, hide the banner via a class on <html>.
 * Keeps the banner in the server HTML (no late pop-in that hurts Speed Index) without flashing it for returning visitors.
 */
export const AGE_SCRIPT = `try{if(localStorage.getItem("${AGE_KEY}"))document.documentElement.classList.add("age-ok")}catch(e){}`;

/** Light banner, not a wall (no intrusive interstitial). Remembered per browser. */
export function AgeBanner({ lang }: { lang: "en" | "es" }) {
  const es = lang === "es";
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
      <AgeOkButton label={es ? "Tengo +18" : "I'm 18+"} storageKey={AGE_KEY} />
    </div>
  );
}
