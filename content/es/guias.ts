import type { Guide } from "../types";

/** Spanish guides. `en` = slug of the English counterpart (hreflang only while that guide is live). */
export type GuiaEs = Omit<Guide, "category" | "relatedGuides" | "relatedReviews"> & {
  /** Slug of the English counterpart, if one exists (hreflang only while it's live). */
  en?: string;
  category: "Cripto básico" | "Privacidad";
  related: string[];
};

export const allGuiasEs: GuiaEs[] = [
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
  {
    slug: "es-confiable-koalabet",
    en: "is-koalabet-legit",
    casino: "koalabet",
    title: "¿Es Confiable KoalaBet? Licencia, Dueño y Términos",
    h1: "¿Es confiable KoalaBet? Licencia, dueño y qué saber antes",
    description:
      "KoalaBet opera con licencia de Anjouan a nombre de 3-102-970462 SRL. Quién es el dueño, qué países excluye, su regla de VPN, monedas y términos clave.",
    updated: "2026-11-21",
    category: "Privacidad",
    related: ["limites-de-retiro-koalabet", "como-depositar-cripto-en-un-casino"],
    body: [
      {
        type: "p",
        text: "Sí, KoalaBet es un operador con licencia y una empresa identificada detrás. Sus términos nombran al dueño, 3-102-970462 SRL, una sociedad registrada en Costa Rica, y una licencia de juego de Anjouan, ALSI-202508036-FI1. Acepta jugadores de toda Latinoamérica. Lo que conviene revisar: el menor respaldo de esa licencia, los países excluidos y las reglas de retiro.",
      },
      { type: "h2", text: "Quién opera KoalaBet" },
      {
        type: "table",
        head: ["", "Lo que publica KoalaBet"],
        rows: [
          ["Dueño", "3-102-970462 SRL, sociedad registrada en Costa Rica (Alajuela)"],
          ["Licencia", "Gobierno de la Isla Autónoma de Anjouan, Unión de las Comoras, licencia ALSI-202508036-FI1"],
          ["Ley aplicable", "La ley de Anjouan, Unión de las Comoras (§25.6)"],
          ["Soporte", "Chat en vivo y support@koalabet.io"],
          ["Monedas", "BTC, USDT, USDC, ETH, XRP, TRX, LTC, DOGE, SOL"],
        ],
        note: "Según los Términos de Servicio de KoalaBet (actualizados el 25 de agosto de 2026) y el pie de su web, consultados el 21 de noviembre de 2026.",
      },
      { type: "h2", text: "Qué significa la licencia de Anjouan" },
      {
        type: "p",
        text: "Anjouan es la licencia a la que se pasaron muchos casinos cripto cuando Curazao endureció sus reglas. Es una licencia real, pero da menos respaldo en una disputa que los reguladores más estrictos. Los reclamos se resuelven primero con soporte, luego con la gerencia y por último por arbitraje (§21). En la práctica: lee los términos antes de depositar, guarda capturas de lo importante y no dejes un saldo grande en el sitio.",
      },
      { type: "h2", text: "Quién no puede jugar" },
      {
        type: "p",
        text: "Los términos excluyen a residentes de Austria, Francia, Alemania, Países Bajos, España, la Unión de las Comoras, Reino Unido, Estados Unidos y los países de la lista negra del GAFI, además de otras jurisdicciones que prohíba su regulador (§4.1.3). Acepta jugadores de toda Latinoamérica.",
      },
      {
        type: "caveat",
        text: "Atención: los términos de KoalaBet prohíben usar una VPN, proxy o servicio similar que oculte tu ubicación real (§3.4). Una VPN sirve para tu privacidad general, pero no la uses para entrar desde un país excluido. Juega solo donde sea legal para ti.",
      },
      { type: "h2", text: "Los términos que más importan" },
      {
        type: "list",
        items: [
          "Verificación: KoalaBet se reserva el derecho de pedir documento con foto, comprobante de domicilio o una selfie antes de un retiro, y de verificar tu identidad en cualquier momento (§8.3).",
          "Apuesta tu depósito una vez: retirar un depósito que no apostaste al menos una vez puede costar una comisión del 8 %, mínimo 4 € (§8.2).",
          "Límite mensual: 10.000 € al mes, o 5.000 € si tu saldo es al menos 10 veces tus depósitos totales (§8.6).",
          "Los retiros vuelven al método con el que depositaste, salvo que KoalaBet permita otro (§8.4).",
          "Una cuenta por persona; las cuentas múltiples pueden cerrarse (§5.4).",
        ],
      },
      { type: "h2", text: "Retiros y bono" },
      {
        type: "p",
        text: "En nuestras pruebas, los retiros llegaron en 3 a 5 minutos. Su Política de Retiros dice que los retiros cripto se procesan al instante una vez aprobados y que el tiempo de llegada depende de la red. La oferta actual es un bono de bienvenida de hasta 700 $; sus términos de bonos indican que hay requisitos de apuesta, así que léelos antes de activarlo.",
      },
      { type: "h2", text: "Nuestro veredicto" },
      {
        type: "p",
        text: "KoalaBet es un casino cripto legítimo y con licencia, con dueño identificado, nueve monedas y retiros cripto rápidos. Como todo casino con licencia de Anjouan, ofrece menos respaldo que uno muy regulado, y sus términos incluyen un límite de retiro mensual y una comisión por depósitos sin apostar. Si juegas desde un país aceptado y mantienes un saldo moderado, es nuestra opción mejor valorada.",
      },
    ],
    faq: [
      { q: "¿KoalaBet tiene licencia?", a: "Sí. KoalaBet indica que tiene licencia del Gobierno de la Isla Autónoma de Anjouan, Unión de las Comoras, número ALSI-202508036-FI1." },
      { q: "¿Quién es el dueño de KoalaBet?", a: "3-102-970462 SRL, una sociedad de responsabilidad limitada registrada en Costa Rica, según sus términos." },
      { q: "¿KoalaBet acepta jugadores de Latinoamérica?", a: "Sí, de toda Latinoamérica. No está disponible en España, Estados Unidos, Reino Unido y otros países listados en sus términos." },
      { q: "¿Qué monedas acepta KoalaBet?", a: "BTC, USDT, USDC, ETH, XRP, TRX, LTC, DOGE y SOL." },
    ],
  },
  {
    slug: "limites-de-retiro-koalabet",
    en: "koalabet-withdrawal-limits",
    casino: "koalabet",
    title: "Límites de Retiro en KoalaBet: Comisiones y Tiempos",
    h1: "Límites de retiro en KoalaBet: comisiones y tiempos",
    description:
      "KoalaBet permite retirar hasta 10.000 € al mes. El mínimo, la comisión del 8 % por depósitos sin apostar, los tiempos (3–5 min en nuestras pruebas) y más.",
    updated: "2026-11-21",
    category: "Cripto básico",
    howTo: true,
    related: ["es-confiable-koalabet", "como-comprar-usdt-trc20"],
    body: [
      {
        type: "p",
        text: "KoalaBet permite retirar hasta 10.000 € al mes, o 5.000 € si tu saldo es al menos 10 veces tus depósitos totales. En nuestras pruebas, los retiros llegaron en 3 a 5 minutos. Apuesta cada depósito al menos una vez antes de retirarlo; si no, los términos permiten una comisión del 8 %.",
      },
      { type: "h2", text: "Límites en resumen" },
      {
        type: "table",
        head: ["Regla", "Lo que dice KoalaBet", "Dónde"],
        rows: [
          ["Máximo mensual", "10.000 € al mes", "Términos §8.6"],
          ["Máximo tras una gran ganancia", "5.000 € al mes si tu saldo es al menos 10 veces tus depósitos", "Términos §8.6"],
          ["Retiro mínimo", "15 $ (Política de Retiros) o 10 € (Términos §8.1)", "Ambos"],
          ["Cierre de cuenta", "Puedes retirar todo el saldo, aunque sea menor al mínimo", "Términos §8.1"],
        ],
        note: "Los dos documentos de KoalaBet indican mínimos distintos. Cuenta con 15 $ para ir a lo seguro.",
      },
      { type: "h2", text: "Comisiones" },
      {
        type: "list",
        items: [
          "Apuesta primero: si no apostaste un depósito al menos una vez, KoalaBet puede descontar una comisión del 8 %, mínimo 4 €, al retirarlo (Términos §8.2).",
          "En los demás casos, KoalaBet dice que no cobra comisión de retiro (Política de Retiros §6).",
          "La comisión de red de la blockchain se descuenta del monto que recibes. La cobra la red, no KoalaBet.",
        ],
      },
      {
        type: "caveat",
        text: "Atención: la comisión del 8 % es fácil de activar sin querer. Si depositas y cambias de idea, apuesta el depósito una vez antes de retirarlo, o consulta antes al soporte.",
      },
      { type: "h2", text: "Cuánto tardan los retiros" },
      {
        type: "p",
        text: "Su Política de Retiros dice que los retiros cripto se procesan al instante una vez aprobados y que llegan normalmente en minutos, según la red. En nuestras pruebas tardaron de 3 a 5 minutos. Recibes un hash de transacción para seguirlo. Si un retiro necesita controles adicionales de identidad o seguridad, KoalaBet lo pausa hasta completarlos (Política de Retiros §4).",
      },
      { type: "h2", text: "Cómo retirar" },
      {
        type: "steps",
        steps: [
          { name: "Revisa lo básico", need: "Un depósito apostado al menos una vez", text: "Comprueba que apostaste cada depósito una vez y que no tienes un bono activo sin terminar." },
          { name: "Elige moneda y red", need: "Una wallet compatible", text: "Elige la misma moneda que depositaste, en una red que acepte tu wallet. USDT en TRC20, LTC y SOL son baratos de recibir." },
          { name: "Pega tu dirección", need: "La dirección de tu propia wallet", text: "Cópiala desde tu wallet y revisa los primeros y últimos caracteres antes de confirmar." },
          { name: "Síguelo", need: "El hash de la transacción", text: "El nuestro llegó en 3 a 5 minutos. Si no llega, escribe a support@koalabet.io con el ID del retiro y el hash." },
        ],
      },
    ],
    faq: [
      { q: "¿Cuál es el límite de retiro de KoalaBet?", a: "10.000 € al mes, o 5.000 € al mes si tu saldo es al menos 10 veces tus depósitos totales." },
      { q: "¿Cuánto tarda un retiro en KoalaBet?", a: "En nuestras pruebas, de 3 a 5 minutos. KoalaBet procesa los retiros cripto al instante una vez aprobados; la llegada depende de la red." },
      { q: "¿KoalaBet cobra comisión por retirar?", a: "Normalmente no. Pero si retiras un depósito que no apostaste al menos una vez, los términos permiten una comisión del 8 % (mínimo 4 €)." },
      { q: "¿Cuál es el retiro mínimo en KoalaBet?", a: "La Política de Retiros dice 15 $; los Términos dicen 10 €. Cuenta con 15 $." },
    ],
  },
  {
    slug: "es-confiable-metawin",
    en: "is-metawin-legit",
    casino: "metawin",
    title: "¿Es Confiable MetaWin? Licencia, Términos y Retiros",
    h1: "¿Es confiable MetaWin? Licencia, términos y qué saber antes",
    description:
      "MetaWin es un casino cripto con licencia de Anjouan operado por Rivolo Limited. Qué dicen sus términos sobre KYC, VPN, límites de ganancia y retiros.",
    updated: "2026-11-23",
    publishAt: "2026-11-23",
    category: "Privacidad",
    related: ["es-confiable-koalabet", "es-anonimo-apostar-con-cripto"],
    body: [
      {
        type: "p",
        text: "Sí, MetaWin es un operador con licencia, no un sitio anónimo. Sus términos nombran a la empresa (Rivolo Limited, registrada en Nevis) y una licencia de juego de Anjouan, ALSI-202602025-FI1. Acepta jugadores de toda Latinoamérica. Lo que conviene valorar: el menor respaldo de esa licencia, que puede pedir KYC a su criterio y sus límites de ganancia y de retiro.",
      },
      { type: "h2", text: "Quién opera MetaWin" },
      {
        type: "table",
        head: ["", "Lo que dicen los términos de MetaWin"],
        rows: [
          ["Operador", "Rivolo Limited, Charlestown, Nevis (empresa n.º C62588)"],
          ["Licencia", "Gobierno de la Isla Autónoma de Anjouan, Unión de las Comoras, licencia ALSI-202602025-FI1"],
          ["Pagos fiat", "Procesados por Zoom Net Services Limited, Limassol, Chipre, como agente de pagos"],
          ["Países restringidos", "No disponible en EE. UU., Reino Unido, Alemania, Países Bajos, Australia y otras jurisdicciones listadas"],
        ],
        note: "Según los términos y el FAQ de MetaWin, consultados el 19 y 20 de noviembre de 2026.",
      },
      { type: "h2", text: "Registro sin formulario" },
      {
        type: "p",
        text: "En MetaWin no hay formulario de registro: conectas tu wallet cripto y juegas. Es una de las formas más privadas de empezar, porque no entregas email ni datos personales para abrir la cuenta. En nuestra prueba, el retiro llegó en unos 10 segundos, el más rápido que hemos registrado.",
      },
      { type: "h2", text: "Los términos que más importan" },
      {
        type: "list",
        items: [
          "KYC: MetaWin puede pedir documento, comprobante de domicilio y de origen de fondos a su criterio (§10.0.4). Si no entregas lo pedido en 7 días, la cuenta puede desactivarse (§10.0.2).",
          "Retenciones: depósitos, retiros o ganancias pueden retenerse durante controles de identidad, origen de fondos o antifraude (§5.3).",
          "Los depósitos deben apostarse una vez antes de poder retirarlos (§5.4).",
          "Límite de ganancia: lo máximo que se puede ganar en una sola apuesta de casino es 1.500.000 $, con límites menores en algunos juegos propios (§10.3).",
          "VPN: usar una VPN o proxy para saltarse el bloqueo de un país restringido incumple los términos (§2.1).",
        ],
      },
      {
        type: "caveat",
        text: "Atención: una VPN sirve para tu privacidad general, pero los términos de MetaWin dejan claro que usarla para jugar desde un país restringido rompe las reglas. Juega solo donde el juego online sea legal para ti.",
      },
      { type: "h2", text: "Nuestro veredicto" },
      {
        type: "p",
        text: "MetaWin es un casino cripto legítimo y con licencia, con muy poca fricción: conectas la wallet y juegas. No es un casino \"sin KYC para siempre\"; sus términos mantienen el derecho a verificarte. Si te parece bien una licencia de Anjouan y verificarte si te lo piden, es una de las opciones más ágiles que hemos analizado.",
      },
    ],
    faq: [
      { q: "¿MetaWin tiene licencia?", a: "Sí. Sus términos indican una licencia del Gobierno de la Isla Autónoma de Anjouan, Unión de las Comoras, número ALSI-202602025-FI1, a nombre de Rivolo Limited." },
      { q: "¿MetaWin acepta jugadores de Latinoamérica?", a: "Sí, de toda Latinoamérica. No está disponible en EE. UU., Reino Unido, Alemania, Países Bajos, Australia y otros países listados." },
      { q: "¿MetaWin pide KYC?", a: "No para registrarte: conectas tu wallet. Pero sus términos le permiten pedir documentos a su criterio." },
      { q: "¿Cuánto tarda un retiro en MetaWin?", a: "En nuestra prueba, unos 10 segundos. MetaWin dice que algunos retiros pueden tardar hasta 24 horas." },
    ],
  },
  {
    slug: "como-comprar-litecoin",
    en: "how-to-buy-litecoin",
    title: "Cómo Comprar Litecoin (LTC) para Depositar",
    h1: "Cómo comprar Litecoin para depositar en un casino",
    description:
      "Litecoin es barato y rápido de enviar, buena opción para depositar en un casino. Cómo comprar LTC, pasarlo a tu wallet y depositarlo sin errores.",
    updated: "2026-11-30",
    publishAt: "2026-11-30",
    category: "Cripto básico",
    howTo: true,
    related: ["como-depositar-cripto-en-un-casino", "como-comprar-usdt-trc20"],
    body: [
      {
        type: "p",
        text: "Compra LTC en un exchange regulado, retíralo a tu propia wallet por la red Litecoin y envíalo a la dirección de depósito LTC del casino. En Litecoin sale un bloque cada 2,5 minutos aproximadamente y las comisiones suelen ser bajas, así que es una de las monedas más cómodas para depósitos del día a día.",
      },
      {
        type: "steps",
        steps: [
          { name: "Compra LTC en un exchange", need: "Una cuenta verificada en un exchange", text: "La mayoría de los exchanges grandes venden Litecoin. Una transferencia bancaria o P2P suele salir más barata que la tarjeta." },
          { name: "Prepara una wallet compatible con Litecoin", need: "Una wallet propia", text: "Las direcciones de Litecoin suelen empezar por L, M o ltc1. Anota la frase semilla en papel." },
          { name: "Retira a tu wallet", need: "Tu dirección LTC", text: "Elige la red Litecoin en la pantalla de retiro del exchange, pega tu dirección y haz primero un envío pequeño de prueba." },
          { name: "Copia la dirección LTC del casino", need: "La caja del casino", text: "Asegúrate de que sea la dirección de Litecoin y no la de Bitcoin. A simple vista se parecen; cambian los primeros caracteres." },
          { name: "Envía y espera las confirmaciones", need: "Unos minutos", text: "La mayoría de los casinos acreditan LTC tras unas pocas confirmaciones, normalmente en minutos." },
        ],
      },
      { type: "h2", text: "Por qué Litecoin funciona bien para depositar" },
      {
        type: "list",
        items: [
          "Velocidad: un bloque cada 2,5 minutos aproximadamente, frente a unos 10 en Bitcoin.",
          "Comisiones bajas: normalmente una pequeña parte de las de Bitcoin cuando las redes están congestionadas.",
          "Amplia aceptación: casi todos los casinos cripto aceptan LTC, incluidos KoalaBet y MetaWin.",
          "Simple: una sola red, sin memo y sin estándar de token que elegir.",
        ],
      },
      { type: "h2", text: "Litecoin o una stablecoin" },
      {
        type: "p",
        text: "El precio de LTC se mueve como el de cualquier criptomoneda, así que tu saldo puede cambiar mientras juegas. Si quieres un saldo fijo en dólares, usa una stablecoin como USDT. Si buscas la transferencia más simple y barata y no te importa la variación de precio, LTC es buena opción.",
      },
      {
        type: "caveat",
        text: "Atención: nunca envíes LTC a una dirección de Bitcoin ni al revés. Copia la dirección desde la página de depósito Litecoin del casino cada vez.",
      },
    ],
    faq: [
      { q: "¿Litecoin sirve para depositar en casinos?", a: "Sí, para la mayoría de los depósitos: es rápido, barato y muy aceptado. Su precio varía, así que usa una stablecoin si quieres un saldo fijo en dólares." },
      { q: "¿Cuánto tarda un depósito en Litecoin?", a: "Normalmente unos minutos, según cuántas confirmaciones pida el casino." },
      { q: "¿Cómo es una dirección de Litecoin?", a: "Suele empezar por L, M o ltc1." },
      { q: "¿Necesito memo para depositar LTC?", a: "No. Los depósitos de Litecoin no usan memo ni tag." },
    ],
  },
  {
    slug: "mejor-wallet-cripto-para-apostar",
    en: "crypto-wallet-for-gambling",
    title: "La Mejor Wallet Cripto para Apostar: Cómo Elegir",
    h1: "Cómo elegir una wallet cripto para depositar en casinos",
    description:
      "Wallet propia o de exchange, qué redes debe soportar, cómo proteger la frase semilla y por qué conviene una wallet aparte solo para apostar.",
    updated: "2026-12-07",
    publishAt: "2026-12-07",
    category: "Cripto básico",
    related: ["como-depositar-cripto-en-un-casino", "como-comprar-usdt-trc20"],
    body: [
      {
        type: "p",
        text: "Usa una wallet propia, de las que te dan la frase semilla. Asegúrate de que soporte exactamente las redes que usa el casino y mantenla separada de tus ahorros.",
      },
      { type: "h2", text: "Wallet propia o wallet de exchange" },
      {
        type: "table",
        head: ["", "Wallet propia", "Wallet de exchange"],
        rows: [
          ["Quién tiene las claves", "Tú (frase semilla)", "El exchange"],
          ["¿Pueden congelarla?", "No, la app de la wallet no puede", "Sí, según las reglas del exchange"],
          ["Envíos a casinos", "Tú decides", "A menudo restringidos o señalados"],
          ["Si pierdes el acceso", "La frase semilla la recupera; si la pierdes, los fondos se pierden", "Recuperación de cuenta con soporte"],
        ],
      },
      { type: "h2", text: "Qué necesita tu wallet" },
      {
        type: "list",
        items: [
          "Soporte para tu moneda y red: por ejemplo TRC20 para USDT en Tron, Solana para SOL o USDC, y la red propia de Litecoin para LTC.",
          "Selección de red clara en la pantalla de envío, para no mandar por la red equivocada sin querer.",
          "La comisión de red visible antes de confirmar.",
          "Libreta de direcciones o etiquetas, para distinguir tus direcciones de depósito.",
          "En Tron (TRC20): un poco de TRX para pagar las comisiones. Con solo USDT no se puede enviar.",
        ],
      },
      { type: "h2", text: "Cómo proteger la frase semilla" },
      {
        type: "list",
        items: [
          "Escríbela en papel. No le hagas captura, no la mandes por email ni la guardes en notas en la nube.",
          "Nadie legítimo te la va a pedir nunca: ni el soporte del casino, ni el de la wallet, ni alguien en un chat.",
          "Guárdala donde guardarías tu pasaporte.",
          "Si crees que alguien la vio, crea una wallet nueva y mueve los fondos.",
        ],
      },
      { type: "h2", text: "Por qué usar una wallet solo para apostar" },
      {
        type: "p",
        text: "Una wallet para apostar y otra para todo lo demás. Así ves exactamente qué entró y qué salió, lo que hace tu presupuesto más honesto y tus registros fiscales más fáciles. Además, un casino o un enlace de estafa nunca toca tus fondos principales.",
      },
      {
        type: "caveat",
        text: "Atención: una wallet aparte ordena tus registros, pero no te hace anónimo. Si la cargaste desde un exchange, ese vínculo queda en la blockchain.",
      },
    ],
    faq: [
      { q: "¿Necesito una wallet de hardware para apostar?", a: "No para saldos pequeños de uso diario: una wallet móvil reconocida basta. Guarda los ahorros grandes en una wallet de hardware, separados del dinero para apostar." },
      { q: "¿Por qué no puedo enviar mi USDT en Tron?", a: "Las comisiones de la red Tron se pagan en TRX (o energía). Deja un poco de TRX en la wallet." },
      { q: "¿Puedo usar una wallet para varios casinos?", a: "Sí. Etiqueta la dirección de depósito de cada casino para no confundirlas." },
      { q: "¿Es segura una wallet de extensión del navegador?", a: "Puede serlo, pero las extensiones son un objetivo habitual de phishing. Instálala solo desde la fuente oficial y revisa cada sitio al que la conectas." },
    ],
  },
];

const todayUtc = () => new Date().toISOString().slice(0, 10);

/** Same release rule as English guides: hidden until `publishAt` (UTC date); SHH_PREVIEW_SCHEDULED=1 shows all. */
export const isLiveEs = (g: GuiaEs) =>
  process.env.SHH_PREVIEW_SCHEDULED === "1" || !g.publishAt || g.publishAt <= todayUtc();

/** Live Spanish guides, evaluated per call so hourly revalidation picks up newly released ones. */
export const guiasEs = () => allGuiasEs.filter(isLiveEs);

export const findGuiaEs = (slug: string) => guiasEs().find((g) => g.slug === slug);
