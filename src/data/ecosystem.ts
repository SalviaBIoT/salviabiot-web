export interface TriadLayer {
  id: string;
  code: string;
  name: string;
  archetype: string;
  summary: string;
  highlights: string[];
  accent: "emerald" | "mandarin";
}

export interface DataCycleStep {
  step: string;
  title: string;
  layer: string;
  description: string;
}

export interface MandarinSlice {
  id: string;
  label: string;
  severity: "optimal" | "warning" | "info";
  title: string;
  summary: string;
  action: string;
}

export interface MandarinScenario {
  id: string;
  station: string;
  biome: string;
  rawPayload: string;
  slices: MandarinSlice[];
}

export const SITE_CONFIG = {
  version: "V1.0-MODULAR",
  domain: "salviabiot.com",
  platformName: "Platform_SalviaBIoT",
  platformTargetUrl:
    import.meta.env.VITE_PLATFORM_URL ?? "https://app.salviabiot.com",
  platformLive: import.meta.env.VITE_PLATFORM_LIVE === "true",
  founder: "Daniel Felipe Duque Lizarralde",
  location: "Pereira, Risaralda · Colombia",
  emails: {
    founder: "felipe@salviabiot.com",
    partnerships: "contacto@salviabiot.com",
    system: "savia@salviabiot.com",
  },
  githubOrg: "https://github.com/SalviaBIoT",
} as const;

export const HUD_METRICS = [
  { label: "NODO ACTIVO", value: "INTI v4.5.2", unit: "ESP32-S3 / ULP" },
  { label: "LATENCIA BORDE", value: "< 120", unit: "ms · EMA Filter" },
  { label: "ESTÁNDAR DATOS", value: "MRV + DwC", unit: "Lakehouse 4 Capas" },
  { label: "ESTADO RED", value: "ONLINE", unit: "Eje Cafetero · CO" },
] as const;

export const ECOSYSTEM_TRIAD: TriadLayer[] = [
  {
    id: "terrabit",
    code: "[01 // PERCEPCIÓN · HARDWARE DE CAMPO]",
    name: "TerraBit Station",
    archetype: "Las Raíces y Terminaciones Nerviosas",
    summary:
      "Nodos autónomos de bajo consumo desplegados en bosques altoandinos, páramos y cultivos regenerativos. Capturan signos vitales del suelo y el microclima con filtrado EMA en origen y almacenamiento Store-and-Forward.",
    highlights: [
      "Arquitectura modular C++17 (SalviaBIoT_Core)",
      "Calibración seco/agua + filtro exponencial anti-ruido",
      "Resiliencia energética y persistencia en LittleFS / MicroSD",
    ],
    accent: "emerald",
  },
  {
    id: "savia",
    code: "[02 // COGNICIÓN · CORE AI ENGINE]",
    name: "Savia",
    archetype: "La Abuela Sabia y el Fluido Vital",
    summary:
      "Motor central de inteligencia ambiental integrado en Platform_SalviaBIoT. Cruza series de tiempo, variables microclimáticas y memoria histórica del territorio para anticipar estrés hídrico y degradación ecológica.",
    highlights: [
      "Modelado de series de tiempo e índices de estrés hídrico",
      "Integración geoespacial y trazabilidad científica auditada",
      "Detección temprana de anomalías antes del daño crítico",
    ],
    accent: "emerald",
  },
  {
    id: "mandarin",
    code: "[03 // INTERFAZ · SUBAGENTE MODULAR]",
    name: "Mandarín",
    archetype: "El Erudito Intérprete y los Gajos",
    summary:
      "Orquestador cognitivo que fragmenta flujos densos de telemetría JSON en «gajos» independientes, claros y accionables: diagnósticos comprensibles para guardabosques, biólogos, agricultores y comunidades.",
    highlights: [
      "Traducción de telemetría binaria a lenguaje humano claro",
      "Separación modular por gajos (hídrico, microclima, alerta)",
      "Integrado nativamente en Platform_SalviaBIoT",
    ],
    accent: "mandarin",
  },
];

export const DATA_CYCLE_STEPS: DataCycleStep[] = [
  {
    step: "01",
    title: "La Escucha en la Tierra",
    layer: "TerraBit Station · Edge",
    description:
      "En medio del bosque de niebla o la parcela, los sensores perciben humedad de suelo, punto de rocío, temperatura y radiación, convirtiendo el pulso analógico en bits calibrados.",
  },
  {
    step: "02",
    title: "La Circulación en el Tronco",
    layer: "Savia · Platform_SalviaBIoT",
    description:
      "Los paquetes JSON ascienden hacia Savia, que los cruza con el histórico del territorio y detecta desviaciones hídricas o microclimáticas.",
  },
  {
    step: "03",
    title: "La Entrega en el Fruto",
    layer: "Mandarín · Subagente IA",
    description:
      "Mandarín divide el diagnóstico profundo en gajos accionables y entrega alertas claras y empáticas sin ruido técnico innecesario.",
  },
  {
    step: "04",
    title: "La Sanación en el Bosque",
    layer: "Acción Territorial · Salvare",
    description:
      "Comunidades, investigadores y agricultores actúan a tiempo para proteger la cuenca o activar riego de precisión, cerrando el ciclo de reciprocidad tecnológica.",
  },
];

export const MANDARIN_SCENARIOS: MandarinScenario[] = [
  {
    id: "paramo",
    station: "TB-INTI-01 · Reserva Altoandina",
    biome: "Bosque de Niebla · 2.480 m s. n. m.",
    rawPayload: `{
  "device_id": "TB-INTI-01",
  "timestamp_utc": "2026-11-19T13:05:00Z",
  "soil_moisture_ema_pct": 68.4,
  "air_temp_c": 13.2,
  "rel_humidity_pct": 91.5,
  "vpd_kpa": 0.13,
  "battery_v": 4.08,
  "quality_flag": "OK_CALIBRATED"
}`,
    slices: [
      {
        id: "hidrico",
        label: "GAJO 01 · BALANCE HÍDRICO",
        severity: "optimal",
        title: "Suelo en capacidad óptima de retención",
        summary:
          "Humedad edáfica estable en 68.4 % (filtrada con EMA) y VPD bajo (0.13 kPa), indicando alta condensación foliar sin estrés hídrico.",
        action: "Mantener monitoreo pasivo cada 15 min y registrar serie base MRV.",
      },
      {
        id: "energia",
        label: "GAJO 02 · SALUD DEL NODO",
        severity: "info",
        title: "Autonomía energética nominal",
        summary:
          "Batería Li-Ion en 4.08 V bajo ciclo ULP; buffer local sincronizado sin pérdida de tramas.",
        action: "Sin intervención en campo requerida.",
      },
    ],
  },
  {
    id: "cafe",
    station: "TB-INTI-04 · Lote Cafetero Regenerativo",
    biome: "Eje Cafetero · 1.620 m s. n. m.",
    rawPayload: `{
  "device_id": "TB-INTI-04",
  "timestamp_utc": "2026-11-19T13:12:00Z",
  "soil_moisture_ema_pct": 29.1,
  "air_temp_c": 27.6,
  "rel_humidity_pct": 48.0,
  "vpd_kpa": 1.92,
  "battery_v": 3.96,
  "quality_flag": "ALERT_DRY_THRESHOLD"
}`,
    slices: [
      {
        id: "alerta",
        label: "GAJO 01 · ALERTA DE ESTRÉS HÍDRICO",
        severity: "warning",
        title: "Déficit hídrico incipiente en zona radicular",
        summary:
          "La humedad cayó a 29.1 % con un VPD elevado de 1.92 kPa. La planta está incrementando evapotranspiración por encima del umbral óptimo.",
        action: "Programar pulso de riego de precisión de 18 min al atardecer.",
      },
      {
        id: "microclima",
        label: "GAJO 02 · RECOMENDACIÓN DE SOMBRÍO",
        severity: "info",
        title: "Pico térmico vespertino detectado",
        summary:
          "Temperatura de dosel en 27.6 °C; cruzar con histórico de Savia para evaluar cobertura de sombrío en el sector sur.",
        action: "Revisar comparativa semanal en Platform_SalviaBIoT.",
      },
    ],
  },
];
