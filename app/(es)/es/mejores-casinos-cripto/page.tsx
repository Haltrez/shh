import type { Metadata } from "next";
import { ogPath } from "@/lib/og-path";
import { seo } from "@/lib/seo";
import { EsLanding } from "@/components/EsLanding";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Mejores Casinos Cripto ${year}: Clasificados y Probados`,
  description: "Los mejores casinos cripto clasificados por privacidad, velocidad de retiro y monedas, con las reglas de KYC de cada casino verificadas en sus términos.",
  path: "/es/mejores-casinos-cripto",
  image: ogPath.top("latam", "es"),
  locale: "es",
  languages: { en: "/best-crypto-casinos", es: "/es/mejores-casinos-cripto" },
});

const FAQ = [
  { q: `¿Cuál es el mejor casino cripto en ${year}?`, a: "En nuestro ranking, KoalaBet tiene la mejor puntuación de privacidad (sin KYC hasta 5.000 $ en depósitos o retiros) y MetaWin el retiro más rápido que hemos probado (unos 10 segundos). Ambos aceptan jugadores de toda Latinoamérica." },
  { q: "¿Los casinos cripto son confiables?", a: "Muchos son empresas con licencia y términos públicos. Comprueba la licencia en el registro del regulador y lee los términos de retiro antes de depositar." },
  { q: "¿Qué moneda conviene para depositar?", a: "Normalmente una stablecoin (USDT o USDC) en una red barata, Litecoin o Solana, según lo que acepte el casino." },
  { q: "¿Necesito KYC en un casino cripto?", a: "La mayoría no lo pide al registrarte, pero se reserva el derecho de pedirlo después. Indicamos cuándo en cada reseña." },
];

export default function Page() {
  return (
    <EsLanding
      path="/es/mejores-casinos-cripto"
      h1={`Mejores casinos cripto ${year}`}
      lead="Los casinos cripto que mejor valoramos: retiros rápidos, poco o ningún documento para empezar y términos que realmente leímos. Cada dato enlaza a su fuente."
      faq={FAQ}
      body={[
        { type: "h2", text: "Qué hace bueno a un casino cripto" },
        {
          type: "list",
          items: [
            "Retiros rápidos y predecibles: la blockchain tarda segundos o minutos; un buen casino no añade días de revisión manual.",
            "Reglas de KYC claras: casi todos pueden pedir documentos en algún momento. Los mejores te dicen cuándo, idealmente con un umbral.",
            "Monedas con comisiones bajas: stablecoins en redes baratas, Litecoin o Solana hacen viables los depósitos pequeños.",
            "Licencia verificable: el número de licencia de los términos debe aparecer en el registro del regulador.",
          ],
        },
        { type: "h2", text: "Casinos cripto vs casinos online tradicionales" },
        {
          type: "table",
          head: ["", "Casinos cripto", "Casinos tradicionales"],
          rows: [
            ["Registro", "Email o wallet, a menudo sin documento", "Verificación de identidad completa"],
            ["Retiros", "Minutos, a veces segundos", "A menudo 1 a 5 días hábiles"],
            ["En tu estado de cuenta", "Una compra en un exchange", "Un comercio de apuestas"],
            ["Protección al jugador", "Menor en caso de disputa", "Mayor protección local"],
          ],
        },
        { type: "caveat", text: "Atención: los casinos cripto son privados, no anónimos, y no cambian dónde es legal jugar para ti. Revisa las reglas de país de cada casino." },
      ]}
    />
  );
}
