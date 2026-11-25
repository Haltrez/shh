/**
 * Spanish (Latin America) texts for each casino. Facts must match data/casinos.ts;
 * update both together. Neutral LatAm Spanish ("tú").
 */
export type CasinoEs = {
  summary: string;
  verdict: string;
  pros: string[];
  cons: string[];
  offer?: string;
  kycInPractice?: string[];
  withdrawalLimits?: string;
  payout?: string;
};

export const casinosEs: Record<string, CasinoEs> = {
  koalabet: {
    summary: "Sin KYC hasta que superes 5.000 $ en depósitos o retiros. A partir de ahí, piden información básica.",
    verdict:
      "KoalaBet no pide KYC para el juego diario: sin documento para registrarte, depositar ni retirar hasta superar 5.000 $ en depósitos o retiros. A partir de ahí pide información personal básica. En nuestras pruebas, los retiros llegaron en 3 a 5 minutos.",
    pros: [
      "Sin KYC por debajo de 5.000 $ en depósitos o retiros",
      "Por encima de 5.000 $, solo piden información básica",
      "Retiros en 3–5 minutos en nuestras pruebas",
      "9 monedas, entre ellas BTC, USDT, USDC, SOL y LTC",
      "Bono de bienvenida de hasta 700 $",
    ],
    cons: [
      "Piden información básica al superar 5.000 $",
      "Límite de retiro de 10.000 € al mes",
      "No disponible en España",
      "Aplican términos del bono; léelos antes de activarlo",
    ],
    offer: "Bono de bienvenida de hasta 700 $",
    kycInPractice: [
      "Por debajo de 5.000 $: ni documento ni datos personales para registrarte, depositar o retirar.",
      "Por encima de 5.000 $ en depósitos o retiros: KoalaBet pide información personal básica. Política confirmada directamente por KoalaBet.",
    ],
    withdrawalLimits: "10.000 € al mes (5.000 € si tu saldo es 10 veces tus depósitos); mínimo 15 $",
    payout: "3–5 min",
  },
  metawin: {
    summary: "Sin formulario de registro: conecta tu wallet cripto y juega. MetaWin puede pedir documentos a su criterio, sin un monto fijado.",
    verdict:
      "MetaWin es de las formas más privadas de jugar: no hay formulario de registro, solo conectas tu wallet cripto. Acepta 14 monedas, sus competiciones son verificables on-chain y nuestro retiro de prueba llegó en unos 10 segundos. Como casi todos los casinos, sus términos le permiten pedir documentos a su criterio.",
    pros: [
      "Sin formulario: conecta tu wallet y juega",
      "Provably fair: competiciones verificables on-chain",
      "14 monedas, entre ellas BTC, ETH, SOL, USDT, USDC y LTC",
      "El retiro más rápido que hemos probado: unos 10 segundos",
      "Depósito mínimo bajo: 5 USDT",
      "Sin bono de bienvenida, así que no hay requisitos de apuesta que retengan tus retiros",
    ],
    cons: [
      "Los términos permiten pedir documentos a criterio de MetaWin, sin umbral",
      "Los depósitos deben apostarse una vez antes de retirarlos",
      "Comisión de 2,50 $ por retiro",
      "La licencia de Anjouan ofrece menos protección que reguladores más estrictos",
    ],
    kycInPractice: [
      "No hay formulario: conectas MetaMask, Phantom o más de 300 wallets vía WalletConnect y juegas al instante. El registro con email o Google es opcional.",
      "Los términos permiten pedir documento de identidad, comprobante de domicilio y origen de fondos a criterio de MetaWin, y retener operaciones durante esas verificaciones. No publican un umbral.",
    ],
    withdrawalLimits: "Desde 10.000 $ netos cada 24 horas en el nivel inicial, más en niveles VIP; 2,50 $ por retiro",
    payout: "~10 segundos",
  },
  "7bit": {
    summary: "Sin documento para empezar. El KYC es obligatorio cuando tus pagos acumulados llegan a 0,03 BTC.",
    verdict:
      "7Bit te deja empezar sin documento y sus términos son claros sobre cuándo cambia eso: el KYC es obligatorio cuando tus pagos acumulados llegan a 0,03 BTC. En nuestras pruebas los retiros llegaron en 3 a 5 minutos, pero sus límites semanales y mensuales son bajos para quien gane mucho.",
    pros: [
      "Sin documento para empezar a jugar",
      "Umbral de KYC claro en los términos: 0,03 BTC en pagos acumulados",
      "Retiros en 3–5 minutos en nuestras pruebas",
      "El paquete de bienvenida más grande: 325 % hasta 5,25 BTC + 250 giros gratis",
    ],
    cons: [
      "KYC obligatorio al superar 0,03 BTC en pagos",
      "Límites de retiro bajos: 0,15 BTC por semana, 0,6 BTC por mes",
      "La revisión de KYC puede tardar hasta 30 días hábiles",
      "Aplican términos del bono; léelos antes de activarlo",
    ],
    offer: "325 % hasta 5,25 BTC + 250 giros gratis",
    withdrawalLimits: "Mín. 0,3 mBTC; 0,15 BTC por semana, 0,6 BTC por mes",
    payout: "3–5 min",
  },
  cashy: {
    summary: "Regístrate con email o wallet Web3, sin documento. Cashy puede pedir documentos antes de pagar, y sus términos no fijan un monto.",
    verdict:
      "Cashy es fácil para empezar: te registras con email o wallet Web3, sin documento. Pero sus términos le permiten pedir documentos antes de pagar, sin un monto fijado, así que lo clasificamos como KYC a petición. En nuestras pruebas los retiros llegaron en 3 a 5 minutos.",
    pros: [
      "Sin documento para registrarte; acepta registro con wallet Web3",
      "Retiros en 3–5 minutos en nuestras pruebas",
      "Acepta BTC, ETH, USDT, SOL y DOGE",
      "Sin límite fijo de retiro en los términos",
    ],
    cons: [
      "Los términos permiten pedir documentos en cualquier retiro, sin umbral",
      "Las ganancias grandes pueden pagarse en cuotas mensuales",
      "Aplican términos del bono; léelos antes de activarlo",
    ],
    offer: "Bono de bienvenida exclusivo del 150 % hasta 3.000 $",
    withdrawalLimits: "Sin límite fijo; las ganancias grandes pueden pagarse en cuotas mensuales",
    payout: "3–5 min",
  },
  mirax: {
    summary: "Sin documento para registrarte y jugar. Mirax puede verificarte antes de cualquier retiro.",
    verdict:
      "Mirax no pide documento para registrarte ni jugar, pero sus términos le permiten verificarte antes de cualquier retiro, incluso por videollamada. En nuestras pruebas los retiros llegaron en 3 a 5 minutos. No te fíes del marketing de \"anonimato total\": sus propios términos no lo prometen.",
    pros: [
      "Sin documento para registrarte o jugar",
      "Retiros en 3–5 minutos en nuestras pruebas",
      "Límite semanal amplio: 10.000 €",
      "Gran paquete de bienvenida: 325 % hasta 5 BTC + 150 giros gratis",
    ],
    cons: [
      "Puede verificarte antes de cualquier retiro, incluso por videollamada",
      "El marketing de \"anonimato total\" exagera lo que permiten sus términos",
      "Aún no listamos las monedas aceptadas",
      "Aplican términos del bono; léelos antes de activarlo",
    ],
    offer: "325 % hasta 5 BTC + 150 giros gratis",
    withdrawalLimits: "Mín. 20 €; 10.000 € por semana, 40.000 € por mes",
    payout: "3–5 min",
  },
  bitstarz: {
    summary: "Sin documento para registrarte o depositar. BitStarz puede pedir documentos antes de pagar; los términos no fijan un monto.",
    verdict:
      "BitStarz te deja registrarte y depositar sin documento. Igual que su casino hermano Cashy, sus términos le permiten pedir documentos antes de pagar, sin un monto fijado, así que lo clasificamos como KYC a petición. En nuestras pruebas los retiros llegaron en 3 a 5 minutos.",
    pros: [
      "Sin documento para registrarte o depositar",
      "Retiros en 3–5 minutos en nuestras pruebas",
      "Sin límite fijo de retiro en los términos",
      "Hasta 5 BTC + 180 giros gratis de bienvenida",
    ],
    cons: [
      "Los términos permiten pedir documentos en cualquier retiro, sin umbral",
      "Las ganancias grandes pueden pagarse en cuotas mensuales",
      "Términos actualizados por última vez en junio de 2025",
      "Aplican términos del bono; léelos antes de activarlo",
    ],
    offer: "Hasta 5 BTC + 180 giros gratis",
    withdrawalLimits: "Sin límite fijo; las ganancias grandes pueden pagarse en cuotas mensuales",
    payout: "3–5 min",
  },
  duel: {
    summary: "Sin documento para registrarte: usuario y contraseña, email opcional. Duel puede pedir documentos antes de pagar, y sus términos no fijan un monto.",
    verdict:
      "Duel es rápido para empezar: usuario y contraseña, sin email obligatorio ni documento. Acepta más de 20 monedas y redes, y en lugar de bono de bienvenida ofrece juegos originales sin ventaja de la casa y un 50 % de rakeback instantáneo en slots. Sus términos le permiten pedir documentos antes de cualquier retiro, sin un monto fijado, así que lo clasificamos como KYC a petición. Aún no hemos cronometrado un retiro en Duel.",
    pros: [
      "Sin documento ni email para registrarte",
      "Más de 20 monedas y redes, entre ellas BTC, USDT, SOL y LTC",
      "50 % de rakeback instantáneo en slots, retirable al momento",
      "Juegos originales sin ventaja de la casa",
    ],
    cons: [
      "Los términos permiten pedir documentos antes de cualquier retiro, sin umbral",
      "Sin bono de bienvenida",
      "No disponible en EE. UU., Reino Unido, España, Venezuela y otros países listados",
    ],
    kycInPractice: [
      "El registro pide usuario y contraseña; el email es opcional. Sin documentos para empezar.",
      "Los términos se reservan el derecho de pedir KYC antes de procesar un retiro, sin umbral. Duel usa Checkin.com para verificar identidad y documentos.",
    ],
  },
};
