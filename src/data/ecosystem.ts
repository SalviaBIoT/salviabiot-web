export interface TriadLayer {
  id: string;
  code: string;
  name: string;
  archetype: string;
  summary: string;
  highlights: string[];
  accent: "solar" | "emerald" | "mandarin";
}

export interface DataCycleStep {
  step: string;
  title: string;
  layer: string;
  description: string;
  tone: "earth" | "emerald" | "mandarin" | "ecosystem";
}

export const SITE_CONFIG = {
  version: "V1.2-ECOSYSTEM",
  domain: "salviabiot.com",
  platformName: "Platform_SalviaBIoT",
  platformTargetUrl:
    import.meta.env.VITE_PLATFORM_URL ?? "https://app.salviabiot.com",
  platformLive: import.meta.env.VITE_PLATFORM_LIVE === "true",
  founder: "Daniel Felipe Duque Lizarralde",
  founderRole: "Fundador y Estudiante de Ingeniería Electrónica BIoT",
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
    id: "inti",
    label: "ESTACIÓN SOLAR INTI",
    value: "INTI v4.5.2",
    unit: "Panel solar + batería autónoma",
  },
  {
    id: "response",
    label: "RESPUESTA LOCAL",
    value: "< 120 ms",
    unit: "Lectura filtrada y calibrada",
  },
  {
    id: "trace",
    label: "TRAZABILIDAD",
    value: "Auditada",
    unit: "Respaldo científico ambiental",
  },
  {
    id: "territory",
    label: "TERRITORIO",
    value: "EN LÍNEA",
    unit: "Eje Cafetero · Colombia",
  },
] as const;

export const ECOSYSTEM_TRIAD: TriadLayer[] = [
  {
    id: "terrabit",
    code: "[01 // PERCEPCIÓN · NODO SOLAR INTI]",
    name: "TerraBit Station",
    archetype: "Las Raíces y la Energía del Sol (Inti)",
    summary:
      "Estaciones autónomas alimentadas por energía solar instaladas en bosques altoandinos, páramos y cultivos regenerativos. Miden los signos vitales del suelo y el microclima limpiando interferencias desde el origen.",
    highlights: [
      "Autonomía con panel solar y batería de larga duración",
      "Sensores calibrados con limpieza automática de ruido",
      "Memoria interna de respaldo para zonas sin señal",
    ],
    accent: "solar",
  },
  {
    id: "savia",
    code: "[02 // COGNICIÓN · INTELIGENCIA AMBIENTAL]",
    name: "Savia",
    archetype: "La Abuela Sabia y el Fluido Vital",
    summary:
      "Motor central de inteligencia ambiental dentro de Platform_SalviaBIoT. Cruza las mediciones a lo largo del tiempo con la memoria histórica del territorio para anticipar sequías, estrés hídrico y cambios críticos.",
    highlights: [
      "Análisis continuo de tendencias hídricas y climáticas",
      "Memoria histórica del territorio con respaldo científico",
      "Detección temprana de anomalías antes del daño crítico",
    ],
    accent: "emerald",
  },
  {
    id: "mandarin",
    code: "[03 // INTERFAZ · SUBAGENTE INTÉRPRETE]",
    name: "Mandarín",
    archetype: "El Erudito Intérprete y los Gajos",
    summary:
      "Asistente inteligente que recibe paquetes complejos de información de los sensores y los separa en «gajos» claros y prácticos: diagnósticos humanos para guardabosques, biólogos, agricultores y comunidades.",
    highlights: [
      "Traduce lecturas técnicas a lenguaje claro y directo",
      "Organiza cada alerta por tema: agua, clima y estación",
      "Integrado nativamente con alertas en Platform_SalviaBIoT",
    ],
    accent: "mandarin",
  },
];

export const DATA_CYCLE_STEPS: DataCycleStep[] = [
  {
    step: "01",
    title: "La Escucha en la Tierra",
    layer: "TerraBit · Nodo INTI",
    description:
      "En medio del bosque de niebla o la parcela, los sensores solares miden humedad del suelo, temperatura y microclima, convirtiendo cada pulso natural en lecturas confiables.",
    tone: "earth",
  },
  {
    step: "02",
    title: "La Circulación en el Tronco",
    layer: "Savia · Plataforma",
    description:
      "Los paquetes de información de los sensores suben hacia Savia, que los compara con el historial del territorio para detectar cambios inusuales en el agua o el clima.",
    tone: "emerald",
  },
  {
    step: "03",
    title: "La Entrega en el Fruto",
    layer: "Mandarín · IA",
    description:
      "Mandarín divide el análisis profundo en gajos fáciles de entender y entrega alertas claras, empáticas y sin ruido técnico innecesario.",
    tone: "mandarin",
  },
  {
    step: "04",
    title: "La Sanación en el Bosque",
    layer: "Acción Territorial",
    description:
      "Comunidades, investigadores y agricultores actúan a tiempo para proteger la cuenca o regar con precisión, cerrando el ciclo de reciprocidad tecnológica.",
    tone: "ecosystem",
  },
];

export const ETYMOLOGY_ROOTS = [
  {
    word: "Salvare",
    origin: "Latín",
    meaning: "Sanar, conservar y mantener íntegro el propósito ético de cuidado ambiental.",
    tone: "emerald" as const,
  },
  {
    word: "Silva",
    origin: "Latín · Linaje",
    meaning: "Bosque vivo y homenaje a nuestro origen familiar unido a la protección de la tierra.",
    tone: "earth" as const,
  },
  {
    word: "Sage",
    origin: "Inglés",
    meaning: "Sabiduría viva: el puente global que traduce la memoria del ecosistema en decisiones.",
    tone: "solar" as const,
  },
];
