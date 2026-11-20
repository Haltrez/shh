import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { EsLanding } from "@/components/EsLanding";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Casinos Cripto Anónimos ${year}: Qué Es Posible`,
  description: "Ningún casino es totalmente anónimo, pero algunos se acercan: registro con wallet, sin documento para empezar y umbrales de KYC claros. Clasificados.",
  path: "/es/casinos-anonimos",
  locale: "es",
  languages: { en: "/anonymous-casinos", es: "/es/casinos-anonimos" },
});

const FAQ = [
  { q: "¿Existen casinos online anónimos?", a: "No del todo. Lo más cercano son casinos cripto con registro por wallet y sin documento para empezar, como MetaWin. El exchange donde compraste las cripto sigue sabiendo quién eres." },
  { q: "¿Puedo apostar con cripto sin documento?", a: "Sí, hasta cierto punto. KoalaBet no pide nada hasta 5.000 $ en depósitos o retiros; otros pueden pedirlo a su criterio." },
  { q: "¿Qué es un casino privado?", a: "Un casino que no guarda tu identidad: sin subir documentos para empezar y con pagos en cripto en lugar de tarjeta." },
  { q: "¿Es legal apostar de forma anónima?", a: "Usar cripto y herramientas de privacidad es legal en la mayoría de los países, pero el juego online solo es legal donde la ley local lo permite." },
];

export default function Page() {
  return (
    <EsLanding
      path="/es/casinos-anonimos"
      h1="Casinos cripto anónimos: las opciones más privadas"
      lead="Respuesta corta: ningún casino con licencia es totalmente anónimo. Pero algunos te dejan jugar solo con una wallet cripto o un email, y piden documentos únicamente en casos concretos."
      faq={FAQ}
      body={[
        { type: "h2", text: "Niveles de privacidad en casinos cripto" },
        {
          type: "table",
          head: ["Nivel", "Qué le das al casino", "Ejemplos"],
          rows: [
            ["Registro con wallet", "Una dirección pública, sin formulario", "MetaWin, Cashy"],
            ["Solo email", "Un correo electrónico", "La mayoría de casinos sin KYC"],
            ["Documento sobre un umbral", "Documento solo pasado un monto", "KoalaBet (5.000 $), 7Bit (0,03 BTC)"],
            ["Documento a petición", "Documento cuando el casino lo decida", "Mirax, BitStarz"],
          ],
        },
        { type: "h2", text: "Cómo jugar de la forma más privada posible" },
        {
          type: "list",
          ordered: true,
          items: [
            "Elige un casino con registro por wallet o con un umbral de KYC claro.",
            "Usa una wallet propia solo para apostar.",
            "Usa un email aparte y autenticación en dos pasos con app.",
            "Usa una VPN para tu privacidad general en redes que no controlas.",
            "Guarda tus registros para impuestos.",
          ],
        },
        { type: "caveat", text: "Aviso sobre VPN: una VPN protege tu privacidad, pero no cambia dónde puedes jugar legalmente. La mayoría de los casinos prohíben usarla para acceder desde un país restringido y pueden quedarse con las ganancias." },
      ]}
    />
  );
}
