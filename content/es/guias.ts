import type { Guide } from "../types";

/** Spanish guides. `en` = slug of the English counterpart (hreflang only while that guide is live). */
export type GuiaEs = Omit<Guide, "category" | "relatedGuides" | "relatedReviews"> & {
  en: string;
  category: "Cripto básico" | "Privacidad";
  related: string[];
};

export const guiasEs: GuiaEs[] = [
  {
    slug: "como-comprar-usdt-trc20",
    en: "how-to-buy-usdt-trc20",
    title: "Cómo Comprar USDT en TRC20 (Tron), Paso a Paso",
    h1: "Cómo comprar USDT en TRC20 (Tron), paso a paso",
    description:
      "Compra USDT en un exchange, retíralo por la red TRON (TRC20) a tu wallet, guarda algo de TRX para comisiones y deposita. Pasos y errores comunes.",
    updated: "2026-11-20",
    category: "Cripto básico",
    howTo: true,
    related: ["como-depositar-cripto-en-un-casino", "es-anonimo-apostar-con-cripto"],
    body: [
      {
        type: "p",
        text: "Compra USDT en un exchange regulado, retíralo a tu propia wallet eligiendo la red TRON (TRC20), deja un poco de TRX en esa wallet para las comisiones de red y envíalo a la dirección de depósito TRC20 del casino. La comprobación más importante: la red en cada pantalla debe decir TRC20 o TRON.",
      },
      {
        type: "steps",
        steps: [
          { name: "Abre una cuenta en un exchange", need: "Documento de identidad y una selfie", text: "Los exchanges regulados tienen que verificarte. Es un requisito del exchange, no del casino, y el exchange no comparte tu documento con ningún casino." },
          { name: "Compra USDT", need: "Transferencia bancaria, tarjeta o P2P", text: "Compra un poco más de lo que piensas depositar, porque la comisión de retiro del exchange se descuenta de tu saldo." },
          { name: "Prepara una wallet compatible con Tron", need: "Una wallet propia con soporte para TRON", text: "Tu dirección TRC20 empieza con una T mayúscula. Anota la frase semilla en papel y guárdala fuera de internet." },
          { name: "Retira USDT por la red TRON", need: "Tu dirección T... de la wallet", text: "En el exchange elige USDT, luego la red TRON (TRC20), pega tu dirección y haz primero un envío pequeño de prueba." },
          { name: "Deposita en el casino", need: "La dirección TRC20 del casino", text: "En la caja del casino elige USDT y la red TRC20, copia la dirección y envía desde tu wallet. Comprueba los primeros y últimos caracteres antes de confirmar." },
        ],
      },
      { type: "h2", text: "Por qué TRC20" },
      {
        type: "list",
        items: [
          "Las transferencias en Tron suelen confirmarse en uno o dos minutos.",
          "La comisión de retiro del exchange en TRC20 suele ser fija y baja, por eso es habitual para depósitos pequeños.",
          "Casi todos los casinos cripto aceptan USDT en TRC20.",
        ],
      },
      { type: "h2", text: "Errores comunes" },
      {
        type: "table",
        head: ["Error", "Qué pasa", "Cómo evitarlo"],
        rows: [
          ["Elegir ERC20 en un lado y TRC20 en el otro", "Los fondos pueden perderse o tardar semanas en recuperarse", "Misma red en el exchange, la wallet y el casino"],
          ["No tener TRX en la wallet", "No puedes enviar el USDT porque no hay con qué pagar la comisión", "Guarda una pequeña cantidad de TRX"],
          ["Copiar mal la dirección", "El envío va a otra persona y no se puede revertir", "Copia y pega, y verifica inicio y final"],
        ],
      },
      { type: "caveat", text: "Atención: las transacciones en blockchain no se pueden revertir. Haz siempre un envío de prueba pequeño a una dirección nueva." },
    ],
    faq: [
      { q: "¿Qué es USDT TRC20?", a: "Es la versión de la stablecoin USDT que circula en la red Tron. Vale lo mismo que el USDT de otras redes, pero las redes no son intercambiables al enviar." },
      { q: "¿Necesito TRX para enviar USDT TRC20?", a: "Normalmente sí. La red Tron cobra las comisiones en TRX (como energía o ancho de banda), así que tu wallet necesita algo de TRX." },
      { q: "¿Cuánto tarda un depósito en USDT TRC20?", a: "La red suele confirmar en uno o dos minutos; el casino lo acredita tras sus confirmaciones requeridas." },
    ],
  },
  {
    slug: "como-depositar-cripto-en-un-casino",
    en: "how-to-deposit-crypto",
    title: "Cómo Depositar Cripto en un Casino, Paso a Paso",
    h1: "Cómo depositar cripto en un casino",
    description:
      "Elige moneda y red, copia la dirección del casino, envía desde tu wallet y espera las confirmaciones. Los pasos, las comisiones y qué revisar antes.",
    updated: "2026-11-20",
    category: "Cripto básico",
    howTo: true,
    related: ["como-comprar-usdt-trc20", "es-anonimo-apostar-con-cripto"],
    body: [
      {
        type: "p",
        text: "Depositar cripto en un casino es enviar monedas desde tu wallet a una dirección que te da el casino. Lo único que exige atención es elegir la misma moneda y la misma red en ambos lados.",
      },
      {
        type: "steps",
        steps: [
          { name: "Elige moneda y red", need: "Cripto en tu wallet o exchange", text: "En la caja del casino elige la moneda (por ejemplo USDT) y la red (por ejemplo TRC20). Las stablecoins evitan que el saldo cambie con el precio." },
          { name: "Copia la dirección de depósito", need: "Tu cuenta del casino", text: "Usa el botón de copiar o el código QR. Algunas monedas piden además un memo o tag: si el casino lo muestra, inclúyelo." },
          { name: "Envía desde tu wallet", need: "Saldo para la comisión de red", text: "Pega la dirección, elige la misma red, revisa el monto y confirma. Para el primer depósito, envía una cantidad pequeña." },
          { name: "Espera las confirmaciones", need: "Unos minutos", text: "El casino acredita el saldo después de un número de confirmaciones en la red. Guarda el ID de transacción por si necesitas soporte." },
        ],
      },
      { type: "h2", text: "Qué moneda conviene" },
      {
        type: "table",
        head: ["Moneda", "Ventaja", "A tener en cuenta"],
        rows: [
          ["USDT / USDC", "Saldo estable en dólares", "Elegir bien la red (TRC20, ERC20, Solana...)"],
          ["Litecoin", "Comisiones bajas y confirmación rápida", "El precio varía"],
          ["Bitcoin", "Aceptado en todas partes", "Comisiones y esperas mayores cuando la red está congestionada"],
        ],
      },
      { type: "h2", text: "Antes de depositar" },
      {
        type: "list",
        items: [
          "Revisa el depósito mínimo del casino: los envíos por debajo pueden no acreditarse.",
          "Lee las reglas de KYC y de retiro del casino en su reseña.",
          "Fija un límite de depósito y respétalo.",
        ],
      },
      { type: "caveat", text: "Atención: enviar por una red distinta a la que indica el casino puede hacer perder los fondos. Si tienes dudas, contacta al soporte antes de enviar." },
    ],
    faq: [
      { q: "¿Cuánto tarda un depósito cripto?", a: "Depende de la red: Tron, Litecoin y Solana suelen tardar minutos; Bitcoin puede tardar más si la red está congestionada." },
      { q: "¿El casino ve mi nombre al depositar?", a: "No por la transacción en sí, que solo muestra direcciones. Pero el exchange donde compraste sí sabe quién eres." },
      { q: "¿Qué hago si mi depósito no aparece?", a: "Comprueba en un explorador de bloques que la transacción esté confirmada y envía el ID de transacción al soporte del casino." },
    ],
  },
  {
    slug: "es-anonimo-apostar-con-cripto",
    en: "is-crypto-gambling-anonymous",
    title: "¿Es Anónimo Apostar con Cripto? La Respuesta Honesta",
    h1: "¿Es anónimo apostar con cripto?",
    description:
      "No. Es privado, no anónimo. Qué oculta un casino sin KYC y qué no, qué muestra la blockchain y los hábitos que de verdad protegen tu privacidad.",
    updated: "2026-11-20",
    category: "Privacidad",
    related: ["como-depositar-cripto-en-un-casino", "como-comprar-usdt-trc20"],
    body: [
      {
        type: "p",
        text: "No. Apostar con cripto puede ser privado, pero no es anónimo. Un casino sin KYC significa que el casino no guarda tu documento. No significa que nadie pueda relacionarte con tus depósitos.",
      },
      { type: "h2", text: "Qué sí queda privado" },
      {
        type: "list",
        items: [
          "Tus documentos no están en la base de datos del casino, así que una filtración del casino no puede exponerlos.",
          "Tu estado de cuenta bancario muestra una compra en un exchange, no un pago a un casino.",
          "Los bloqueos de juego del banco y los códigos de comercio de tarjeta no intervienen.",
        ],
      },
      { type: "h2", text: "Qué no es privado" },
      {
        type: "list",
        items: [
          "El exchange donde compraste la cripto tiene tu identidad verificada.",
          "La blockchain es pública: cualquiera puede seguir los movimientos entre direcciones.",
          "El casino puede pedirte documentos según sus términos, por ejemplo en retiros grandes.",
          "Tu proveedor de internet puede ver qué sitios visitas si no usas una VPN.",
        ],
      },
      { type: "h2", text: "Hábitos que ayudan" },
      {
        type: "list",
        ordered: true,
        items: [
          "Usa una wallet propia solo para apostar, en lugar de enviar directo desde el exchange.",
          "Usa un email aparte y autenticación en dos pasos con app.",
          "Usa una VPN para tu privacidad general en redes que no controlas.",
          "Guarda tus registros: en muchos países las ganancias pueden tener obligaciones fiscales.",
        ],
      },
      { type: "caveat", text: "Aviso sobre VPN: una VPN protege tu privacidad, pero no cambia dónde puedes jugar legalmente. La mayoría de los casinos prohíben usarla para acceder desde un país restringido y pueden quedarse con las ganancias." },
    ],
    faq: [
      { q: "¿Los casinos sin KYC son anónimos?", a: "No. Son privados: no guardan tu documento para empezar, pero el exchange sí te conoce y la blockchain es pública." },
      { q: "¿Pueden rastrear mis apuestas con cripto?", a: "Las transacciones son públicas. Quien conozca tu dirección puede ver los movimientos, y los exchanges pueden vincular direcciones con identidades." },
    ],
  },
];

export const findGuiaEs = (slug: string) => guiasEs.find((g) => g.slug === slug);
