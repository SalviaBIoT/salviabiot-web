export type StationId = "trb" | "yku" | "wyr" | "apu";

export interface StationModuleSpec {
  id: StationId;
  code: string;
  name: string;
  domain: string;
  svgPath: string;
  accentHex: string;
  accentBrightHex: string;
  summary: string;
  variables: string[];
  engineering: string[];
  application: string;
  biomeBadge: string;
}

export interface EcosystemPillar {
  id: "hardware" | "savia" | "mandarin";
  code: string;
  title: string;
  subtitle: string;
  summary: string;
  href: string;
  ctaLabel: string;
  accentHex: string;
  accentBrightHex: string;
}

export interface DataCycleStep {
  step: string;
  title: string;
  layer: string;
  description: string;
  tone: "earth" | "emerald" | "mandarin" | "ecosystem";
}

export const SITE_CONFIG = {
  version: "v1.2",
  domain: "salviabiot.com",
  platformName: "Platform_SalviaBIoT",
  platformTargetUrl:
    import.meta.env.VITE_PLATFORM_URL ?? "https://app.salviabiot.com",
  platformLive: import.meta.env.VITE_PLATFORM_LIVE === "true",
  founder: "Daniel Felipe Duque Lizarralde",
  founderRole: "Fundador · Ingeniería Electrónica BIoT (UTP)",
  location: "Pereira, Risaralda · Colombia",
  emails: {
    founder: "felipe@salviabiot.com",
    partnerships: "contacto@salviabiot.com",
    system: "savia@salviabiot.com",
  },
  githubOrg: "https://github.com/SalviaBIoT",
} as const;

export const HUD_METRICS = [
  {
    id: "base",
    label: "PLACA BASE ÚNICA",
    value: "1 Base · 4 Modos",
    unit: "Hardware modular adaptable a cada entorno",
    accent: "text-[#FACC15]",
  },
  {
    id: "local",
    label: "ANÁLISIS EN LOCAL",
    value: "Soberanía del Dato",
    unit: "Procesamiento en campo, tus datos son tuyos",
    accent: "text-[#10B981]",
  },
  {
    id: "carbon",
    label: "CARBONO & CO₂",
    value: "Monitoreo Vivo",
    unit: "Seguimiento de CO₂ y salud del ecosistema",
    accent: "text-[#38BDF8]",
  },
  {
    id: "territory",
    label: "TERRITORIO ACTIVO",
    value: "Eje Cafetero",
    unit: "Pereira · Risaralda, CO",
    accent: "text-[#F8FAFC]",
  },
] as const;

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: "hardware",
    code: "01 // PERCEPCIÓN EN CAMPO",
    title: "Estaciones Modulares",
    subtitle: "Una sola placa base, cuatro estaciones especializadas",
    summary:
      "Cuatro módulos ambientales intercambiables (TerraBit, Yaku, Wayra y Apu) sobre una misma base electrónica preparada para campo y montaña.",
    href: "#estaciones",
    ctaLabel: "Explorar 4 estaciones",
    accentHex: "#AD703B",
    accentBrightHex: "#D4955E",
  },
  {
    id: "savia",
    code: "02 // SABIDURÍA DE LA TIERRA",
    title: "Savia",
    subtitle: "Memoria ambiental e inteligencia territorial",
    summary:
      "Recibe los datos mediante nuestro sistema de envío inteligente de información, los organiza en la memoria histórica del territorio y detecta cambios críticos a tiempo.",
    href: "#ia",
    ctaLabel: "Ver arquitectura Savia",
    accentHex: "#10B981",
    accentBrightHex: "#34D399",
  },
  {
    id: "mandarin",
    code: "03 // COPILOTO DE CAMPO",
    title: "Mandarín · Traductor",
    subtitle: "Decisiones divididas en gajos accionables",
    summary:
      "Traduce el análisis de Savia en alertas claras y acciones prácticas por Web, App o WhatsApp para productores y guardabosques.",
    href: "#ia",
    ctaLabel: "Probar Mandarín en vivo",
    accentHex: "#F97316",
    accentBrightHex: "#FB923C",
  },
];

export const STATIONS: StationModuleSpec[] = [
  {
    id: "trb",
    code: "TRB",
    name: "TerraBit",
    domain: "Tierra y Suelo",
    svgPath: "/brand/stations/TRB_TerraBit_Oscuro.svg",
    accentHex: "#AD703B",
    accentBrightHex: "#D4955E",
    summary:
      "Nodo edáfico diseñado para medir salud radicular y retención hídrica sin deriva térmica ni ruido eléctrico.",
    variables: [
      "Humedad volumétrica (VWC)",
      "Conductividad eléctrica (EC)",
      "Temperatura edáfica multi-profundidad",
    ],
    engineering: [
      "Calibración física suelo seco / agua",
      "Filtro de media móvil exponencial (EMA)",
      "Alimentación adaptable (solar opcional) + memoria local de respaldo",
    ],
    application: "Caficultura de altura, suelos orgánicos y monitoreo de turberas.",
    biomeBadge: "Suelo & Raíz",
  },
  {
    id: "yku",
    code: "YKU",
    name: "Yaku",
    domain: "Agua y Cuencas",
    svgPath: "/brand/stations/YKU_Yaku_Oscuro.svg",
    accentHex: "#0284C7",
    accentBrightHex: "#38BDF8",
    summary:
      "Centinela hidrológico autónomo para vigilar calidad, nivel y estabilidad fisicoquímica de fuentes de agua vivas.",
    variables: [
      "Lámina de agua y caudal",
      "pH y potencial redox (ORP)",
      "Turbidez y temperatura hídrica",
    ],
    engineering: [
      "Sondas selladas IP68 de bajo consumo",
      "Compensación automática de temperatura",
      "Alertas tempranas por crecientes o sedimentos",
    ],
    application: "Monitoreo continuo de quebradas, bocatomas y reservorios altoandinos.",
    biomeBadge: "Cuencas Altoandinas",
  },
  {
    id: "wyr",
    code: "WYR",
    name: "Wayra",
    domain: "Aire y Atmósfera",
    svgPath: "/brand/stations/WYR_Wayra_Oscuro.svg",
    accentHex: "#94A3B8",
    accentBrightHex: "#CBD5E1",
    summary:
      "Estación microclimática de alta precisión que caracteriza la demanda evaporativa, el CO₂ ambiental y las condiciones del dosel vegetal.",
    variables: [
      "Temperatura, humedad relativa y CO₂",
      "Presión barométrica y viento (vel/dir)",
      "Radiación PAR / UV y cálculo de VPD",
    ],
    engineering: [
      "Cálculo local de Déficit de Presión de Vapor",
      "Abrigo meteorológico ventilado anti-radiación",
      "Detección de ventanas propicias para patógenos",
    ],
    application: "Microclima en cultivos regenerativos, bosques de niebla y apiarios.",
    biomeBadge: "Microclima & CO₂",
  },
  {
    id: "apu",
    code: "APU",
    name: "Apu",
    domain: "Nodo Maestro · Montaña y Páramo",
    svgPath: "/brand/stations/APU_Apu_Oscuro.svg",
    accentHex: "#10B981",
    accentBrightHex: "#34D399",
    summary:
      "Concentrador territorial y puente resiliente que articula múltiples nodos de campo en zonas sin cobertura.",
    variables: [
      "Enrutamiento malla LoRa sub-GHz",
      "Análisis local y compresión de datos",
      "Estado de salud y energía de la red",
    ],
    engineering: [
      "Enlace ascendente LTE / Satelital hacia Savia",
      "Buffer persistente en MicroSD + memoria flash",
      "Sincronización con nuestro sistema de envío inteligente de información",
    ],
    application: "Despliegues de alta montaña, reservas naturales y corredores de páramo.",
    biomeBadge: "Nodo Maestro LoRa",
  },
];

export const AI_AGENTS = {
  savia: {
    name: "Savia",
    role: "Sabiduría de la Tierra",
    tagline:
      "Motor cognitivo central que convierte mediciones continuas en memoria viva, alertas preventivas y respaldo ambiental del territorio.",
    specs: [
      {
        label: "Envío Inteligente",
        value:
          "Recibe datos desde campo mediante nuestro sistema de envío inteligente de información, incluso con señal intermitente.",
      },
      {
        label: "Memoria Ambiental",
        value:
          "Organiza series históricas del suelo, agua, aire y CO₂ para entender cómo evoluciona cada predio.",
      },
      {
        label: "Alertas Tempranas",
        value:
          "Detecta anomalías hídricas, térmicas y ambientales antes de que generen pérdidas.",
      },
      {
        label: "Respaldo y Carbono",
        value:
          "Genera historiales ordenados para apoyar la conservación y el monitoreo de carbono.",
      },
    ],
  },
  mandarin: {
    name: "Mandarín",
    role: "Copiloto de Campo · Subagente Traductor",
    tagline:
      "Intérprete cercano que descompone la complejidad analítica de Savia en gajos claros y accionables para quienes cuidan la tierra.",
    specs: [
      {
        label: "Arquitectura",
        value:
          "Diagnóstico en «gajos» independientes: agua, microclima, energía y acción.",
      },
      {
        label: "Operación",
        value:
          "Genera alertas hídricas y planes de riego programado o de rescate.",
      },
      {
        label: "Contexto",
        value:
          "Diagnóstico microclimático y reportes ejecutivos de conservación.",
      },
      {
        label: "Canales",
        value:
          "Lenguaje humano directo a través de Web, App y WhatsApp en campo.",
      },
    ],
  },
} as const;

export const DATA_CYCLE_STEPS: DataCycleStep[] = [
  {
    step: "01",
    title: "Percepción en Tierra",
    layer: "TRB · YKU · WYR · APU",
    description:
      "Las estaciones sobre una placa base única miden suelo, agua y aire, filtran el ruido en local y transmiten con nuestro sistema de envío inteligente de información.",
    tone: "earth",
  },
  {
    step: "02",
    title: "Memoria en Savia",
    layer: "Savia · Sabiduría de la Tierra",
    description:
      "Savia organiza el historial ambiental y de CO₂ del territorio para detectar anomalías hídricas o climáticas a tiempo.",
    tone: "emerald",
  },
  {
    step: "03",
    title: "Gajos en Mandarín",
    layer: "Mandarín · Copiloto",
    description:
      "Los datos complejos se dividen en gajos comprensibles: estado hídrico, alerta de microclima, plan de riego y salud del nodo.",
    tone: "mandarin",
  },
  {
    step: "04",
    title: "Sanación del Territorio",
    layer: "Acción Regenerativa",
    description:
      "Productores, investigadores y comunidades intervienen con precisión en el momento justo, cerrando el ciclo de reciprocidad tecnológica.",
    tone: "ecosystem",
  },
];

export const ETYMOLOGY_ROOTS = [
  {
    word: "Salvare",
    origin: "Latín",
    meaning:
      "Sanar, conservar y sostener el propósito ético de cuidado sobre cada cuenca y suelo.",
    tone: "emerald" as const,
  },
  {
    word: "Silva",
    origin: "Latín · Linaje",
    meaning:
      "Bosque vivo y homenaje a nuestro origen familiar ligado al respeto por la tierra.",
    tone: "earth" as const,
  },
  {
    word: "Sage",
    origin: "Inglés",
    meaning:
      "Sabiduría viva: el puente técnico que traduce la memoria del ecosistema en decisiones.",
    tone: "solar" as const,
  },
];
