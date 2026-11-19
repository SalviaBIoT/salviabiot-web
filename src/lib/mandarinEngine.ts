export type BiomeType = "paramo" | "cafe" | "sequia";

export interface SensorReading {
  biomeType: BiomeType;
  stationId: string;
  biomeLabel: string;
  soilMoisturePct: number; // 5 - 100 %
  airTempC: number; // 0 - 42 °C
  relHumidityPct: number; // 15 - 100 %
  batteryV: number; // 3.2 - 4.2 V
}

export interface MandarinSlice {
  id: string;
  label: string;
  severity: "optimal" | "warning" | "critical" | "info";
  title: string;
  summary: string;
  action: string;
}

export interface MandarinDiagnosis {
  vpdKpa: number;
  overallStatus: "ESTABLE" | "PRECAUCIÓN" | "ALERTA CRÍTICA";
  overallSeverity: "optimal" | "warning" | "critical";
  headline: string;
  slices: MandarinSlice[];
  formattedPacket: string;
}

export const SENSOR_PRESETS: SensorReading[] = [
  {
    biomeType: "paramo",
    stationId: "TB-INTI-01 · Reserva Altoandina",
    biomeLabel: "Bosque de Niebla · 2.480 m s. n. m.",
    soilMoisturePct: 68,
    airTempC: 13.2,
    relHumidityPct: 91,
    batteryV: 4.08,
  },
  {
    biomeType: "cafe",
    stationId: "TB-INTI-04 · Lote Cafetero",
    biomeLabel: "Eje Cafetero · 1.620 m s. n. m.",
    soilMoisturePct: 29,
    airTempC: 27.6,
    relHumidityPct: 48,
    batteryV: 3.96,
  },
  {
    biomeType: "sequia",
    stationId: "TB-INTI-07 · Cuenca Alta",
    biomeLabel: "Zona en Estrés Térmico · 1.950 m s. n. m.",
    soilMoisturePct: 18,
    airTempC: 33.4,
    relHumidityPct: 32,
    batteryV: 3.42,
  },
];

/**
 * Calcula el Déficit de Presión de Vapor (VPD en kPa) con la ecuación de Tetens.
 * Mide qué tan "sediento" está el aire respecto al agua de las hojas.
 */
export function calculateVpdKpa(tempC: number, relHumidityPct: number): number {
  const svp = 0.61078 * Math.exp((17.27 * tempC) / (tempC + 237.3));
  const vpd = svp * (1 - relHumidityPct / 100);
  return Math.max(0, Number(vpd.toFixed(2)));
}

/**
 * Motor interpretativo de Mandarín:
 * Toma las lecturas en vivo de los sensores y las divide en 3 "gajos"
 * de diagnóstico claro y accionable para personas en campo.
 */
export function analyzeWithMandarin(reading: SensorReading): MandarinDiagnosis {
  const vpdKpa = calculateVpdKpa(reading.airTempC, reading.relHumidityPct);
  const slices: MandarinSlice[] = [];

  // -------------------------------------------------------------------------
  // GAJO 01: Balance Hídrico del Suelo
  // -------------------------------------------------------------------------
  if (reading.soilMoisturePct < 24) {
    slices.push({
      id: "hidrico",
      label: "GAJO 01 · BALANCE HÍDRICO",
      severity: "critical",
      title: "Sequía crítica en zona radicular",
      summary: `La humedad del suelo descendió a ${reading.soilMoisturePct} %. Las raíces están por debajo del punto seguro de absorción de agua.`,
      action:
        "Activar riego de recuperación inmediato y verificar caudal en la cuenca.",
    });
  } else if (reading.soilMoisturePct < 40) {
    slices.push({
      id: "hidrico",
      label: "GAJO 01 · BALANCE HÍDRICO",
      severity: "warning",
      title: "Déficit hídrico incipiente",
      summary: `Humedad en ${reading.soilMoisturePct} %. El suelo comienza a perder reserva disponible para las plantas.`,
      action:
        "Programar pulso de riego de precisión al atardecer para evitar evaporación.",
    });
  } else if (reading.soilMoisturePct <= 80) {
    slices.push({
      id: "hidrico",
      label: "GAJO 01 · BALANCE HÍDRICO",
      severity: "optimal",
      title: "Retención de agua en rango óptimo",
      summary: `Humedad edáfica estable en ${reading.soilMoisturePct} %, favoreciendo la oxigenación radicular y la vitalidad del ecosistema.`,
      action: "Mantener monitoreo pasivo y conservar registro histórico.",
    });
  } else {
    slices.push({
      id: "hidrico",
      label: "GAJO 01 · BALANCE HÍDRICO",
      severity: "warning",
      title: "Saturación elevada en el suelo",
      summary: `Humedad del ${reading.soilMoisturePct} %. Exceso de agua retenida que puede limitar oxígeno en raíces o señalar escorrentía.`,
      action:
        "Suspender cualquier riego y revisar drenaje natural en el terreno.",
    });
  }

  // -------------------------------------------------------------------------
  // GAJO 02: Microclima y Estrés Atmosférico
  // -------------------------------------------------------------------------
  if (reading.airTempC <= 5) {
    slices.push({
      id: "microclima",
      label: "GAJO 02 · MICROCLIMA",
      severity: "critical",
      title: "Riesgo de helada o frío extremo",
      summary: `Temperatura en ${reading.airTempC.toFixed(1)} °C con humedad relativa del ${reading.relHumidityPct} %. Posible daño en tejidos vegetales sensibles.`,
      action:
        "Emitir alerta temprana a guardabosques y activar protección de brotes.",
    });
  } else if (vpdKpa >= 1.8 || reading.airTempC >= 31) {
    slices.push({
      id: "microclima",
      label: "GAJO 02 · MICROCLIMA",
      severity: "critical",
      title: "Estrés térmico y aire altamente seco",
      summary: `Aire a ${reading.airTempC.toFixed(1)} °C con alta demanda evaporativa (${vpdKpa} kPa). Las plantas cierran estomas para no deshidratarse.`,
      action:
        "Evitar labores de poda/fertilización y evaluar cobertura de sombrío.",
    });
  } else if (vpdKpa >= 1.3) {
    slices.push({
      id: "microclima",
      label: "GAJO 02 · MICROCLIMA",
      severity: "warning",
      title: "Evapotranspiración acelerada",
      summary: `Temperatura de ${reading.airTempC.toFixed(1)} °C y humedad del ${reading.relHumidityPct} % (demanda de vapor ${vpdKpa} kPa).`,
      action:
        "Monitorear evolución vespertina antes de decidir riego suplementario.",
    });
  } else if (
    reading.relHumidityPct >= 90 &&
    reading.biomeType === "cafe"
  ) {
    slices.push({
      id: "microclima",
      label: "GAJO 02 · MICROCLIMA",
      severity: "warning",
      title: "Alta condensación foliar en cultivo",
      summary: `Humedad ambiental del ${reading.relHumidityPct} % a ${reading.airTempC.toFixed(1)} °C. Ambiente propicio para hongos foliares si se prolonga.`,
      action:
        "Inspeccionar ventilación del lote y vigilar hojas jóvenes en las próximas 24 h.",
    });
  } else {
    slices.push({
      id: "microclima",
      label: "GAJO 02 · MICROCLIMA",
      severity: "optimal",
      title: "Microclima en equilibrio saludable",
      summary: `Temperatura de ${reading.airTempC.toFixed(1)} °C y humedad del ${reading.relHumidityPct} % (índice de evaporación ${vpdKpa} kPa), ideal para el intercambio gaseoso.`,
      action: "Sin novedades atmosféricas; el ecosistema respira en equilibrio.",
    });
  }

  // -------------------------------------------------------------------------
  // GAJO 03: Autonomía Energética de la Estación
  // -------------------------------------------------------------------------
  if (reading.batteryV < 3.45) {
    slices.push({
      id: "energia",
      label: "GAJO 03 · SALUD DE LA ESTACIÓN",
      severity: "critical",
      title: "Batería crítica en nodo de campo",
      summary: `Voltaje en ${reading.batteryV.toFixed(2)} V. La estación entrará en sueño profundo para resguardar los datos almacenados.`,
      action:
        "Revisar limpieza del panel solar o planificar relevo de batería en sitio.",
    });
  } else if (reading.batteryV < 3.72) {
    slices.push({
      id: "energia",
      label: "GAJO 03 · SALUD DE LA ESTACIÓN",
      severity: "warning",
      title: "Modo ahorro energético activo",
      summary: `Voltaje en ${reading.batteryV.toFixed(2)} V. Frecuencia de transmisión reducida automáticamente para extender autonomía.`,
      action: "Verificar horas de sol en los próximos días desde la plataforma.",
    });
  } else {
    slices.push({
      id: "energia",
      label: "GAJO 03 · SALUD DE LA ESTACIÓN",
      severity: "info",
      title: "Autonomía energética nominal",
      summary: `Batería saludable en ${reading.batteryV.toFixed(2)} V con memoria interna sincronizada sin pérdida de lecturas.`,
      action: "Sin intervención técnica requerida en campo.",
    });
  }

  // Estado global calculado a partir de los 3 gajos
  const hasCritical = slices.some((s) => s.severity === "critical");
  const hasWarning = slices.some((s) => s.severity === "warning");

  const overallSeverity = hasCritical
    ? "critical"
    : hasWarning
      ? "warning"
      : "optimal";

  const overallStatus = hasCritical
    ? "ALERTA CRÍTICA"
    : hasWarning
      ? "PRECAUCIÓN"
      : "ESTABLE";

  const headline = hasCritical
    ? "Mandarín detectó condiciones críticas que requieren acción pronta en el territorio."
    : hasWarning
      ? "Mandarín identificó variables fuera del rango ideal y preparó recomendaciones preventivas."
      : "Todos los signos vitales del ecosistema se mantienen dentro de rangos saludables.";

  const qualityFlag = hasCritical
    ? "ALERTA_PRIORITARIA"
    : hasWarning
      ? "ATENCION_PREVENTIVA"
      : "LECTURA_CALIBRADA_OK";

  const formattedPacket = `estacion:       "${reading.stationId.split(" · ")[0]}"
humedad_suelo:  ${reading.soilMoisturePct} %
temperatura:    ${reading.airTempC.toFixed(1)} °C
humedad_aire:   ${reading.relHumidityPct} %
indice_sequia:  ${vpdKpa} kPa
bateria_nodo:   ${reading.batteryV.toFixed(2)} V
estado_paquete: "${qualityFlag}"`;

  return {
    vpdKpa,
    overallStatus,
    overallSeverity,
    headline,
    slices,
    formattedPacket,
  };
}
