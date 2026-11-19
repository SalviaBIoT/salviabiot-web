import {
  BatteryCharging,
  Clock,
  Droplets,
  Pause,
  Play,
  RotateCcw,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Terminal,
  Thermometer,
  Wind,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  analyzeWithMandarin,
  SENSOR_PRESETS,
  type SensorReading,
} from "../../lib/mandarinEngine";
import { MandarinoAvatar } from "../common/MandarinoAvatar";
import { SectionHeader } from "../common/SectionHeader";

interface MandarinShowcaseProps {
  motionPaused: boolean;
  onToggleMotion: () => void;
}

const SEVERITY_STYLES = {
  optimal: "border-[#00ff88]/35 bg-[#00ff88]/10 text-[#00ff88]",
  warning: "border-[#f97316]/45 bg-[#f97316]/15 text-[#fb923c]",
  critical: "border-rose-500/50 bg-rose-500/15 text-rose-300",
  info: "border-[#facc15]/35 bg-[#facc15]/10 text-[#facc15]",
} as const;

const OVERALL_BADGE_STYLES = {
  optimal: "border-[#00ff88]/40 bg-[#00ff88]/12 text-[#00ff88]",
  warning: "border-[#f97316]/50 bg-[#f97316]/15 text-[#fb923c]",
  critical: "border-rose-500/55 bg-rose-500/18 text-rose-300",
} as const;

export function MandarinShowcase({
  motionPaused,
  onToggleMotion,
}: MandarinShowcaseProps) {
  const [presetIndex, setPresetIndex] = useState(0);
  const [reading, setReading] = useState<SensorReading>(SENSOR_PRESETS[0]);
  const [analyzing, setAnalyzing] = useState(false);
  const timerRef = useRef<number | null>(null);

  const diagnosis = useMemo(() => analyzeWithMandarin(reading), [reading]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  function triggerPulse() {
    setAnalyzing(true);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => setAnalyzing(false), 550);
  }

  function handleSelectPreset(index: number) {
    setPresetIndex(index);
    setReading({ ...SENSOR_PRESETS[index] });
    triggerPulse();
  }

  function handleReset() {
    setReading({ ...SENSOR_PRESETS[presetIndex] });
    triggerPulse();
  }

  function updateField<K extends keyof SensorReading>(
    key: K,
    value: SensorReading[K]
  ) {
    setReading((prev) => ({ ...prev, [key]: value }));
    triggerPulse();
  }

  return (
    <section id="mandarin" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 02"
        title="Mandarín · Laboratorio Interactivo en Vivo"
        accent="mandarin"
      />

      <div className="cyber-panel-mandarin rounded-2xl p-6 sm:p-8">
        {/* Cabecera interactiva con Avatar oficial de Mandarín */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-[#f97316]/20 pb-7 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <MandarinoAvatar
              size="xl"
              pensando={analyzing}
              flotar
              showOuterOrbit
            />

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f97316]/40 bg-[#f97316]/12 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#fb923c] uppercase">
                  <span>
                    {analyzing ? "Analizando sensores" : "Mandarín en vivo"}
                  </span>
                  <span className="inline-flex gap-1" aria-hidden="true">
                    <span className="mandarino-dot h-1.5 w-1.5 rounded-full bg-[#fb923c]" />
                    <span className="mandarino-dot h-1.5 w-1.5 rounded-full bg-[#fb923c]" />
                    <span className="mandarino-dot h-1.5 w-1.5 rounded-full bg-[#fb923c]" />
                  </span>
                </span>

                <span
                  aria-live="polite"
                  className={`rounded-full border px-3 py-1 font-mono text-[11px] font-bold tracking-wider uppercase ${
                    OVERALL_BADGE_STYLES[diagnosis.overallSeverity]
                  }`}
                >
                  {diagnosis.overallStatus}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                De datos de sensores a «gajos» de decisión
              </h3>
              <p className="mt-2 max-w-xl text-sm text-[#c2e6d5]">
                Ajusta los controles de abajo para simular cambios reales en el
                terreno. <strong>Mandarín</strong> interpreta cada variación al
                instante y coordina alertas y riego automatizado.
              </p>
            </div>
          </div>

          {/* Control accesible de pausa/reanudar (WCAG 2.2.2) */}
          <button
            type="button"
            onClick={onToggleMotion}
            className="inline-flex min-h-[42px] shrink-0 cursor-pointer items-center gap-2 rounded-md border border-[#f97316]/40 bg-[#07140e]/90 px-4 py-2 font-mono text-xs font-medium text-[#fb923c] transition-colors hover:border-[#f97316] hover:bg-[#f97316]/15"
          >
            {motionPaused ? (
              <>
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reanudar animación</span>
              </>
            ) : (
              <>
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Pausar animación</span>
              </>
            )}
          </button>
        </div>

        {/* Selector de estación solar INTI + botón restablecer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {SENSOR_PRESETS.map((preset, idx) => {
              const active = idx === presetIndex;
              return (
                <button
                  key={preset.biomeType}
                  type="button"
                  onClick={() => handleSelectPreset(idx)}
                  aria-pressed={active}
                  className={`inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-md border px-3.5 py-2 font-mono text-xs transition-colors ${
                    active
                      ? "border-[#f97316] bg-[#f97316]/20 font-semibold text-white"
                      : "border-white/15 bg-[#040e09]/80 text-[#84a596] hover:border-[#facc15]/50 hover:text-[#e6f7ef]"
                  }`}
                >
                  <Sun
                    className="h-3.5 w-3.5 text-[#facc15]"
                    aria-hidden="true"
                  />
                  <span>{preset.stationId}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 rounded-md border border-white/15 bg-[#040e09]/80 px-3 py-1.5 font-mono text-xs text-[#b7d7c8] transition-colors hover:border-[#00ff88]/50 hover:text-[#00ff88]"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Restablecer</span>
          </button>
        </div>

        {/* Panel interactivo equilibrado: Izquierda (Sensores + Paquete + Riego) | Derecha (Diagnóstico + 3 Gajos) */}
        <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-12">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Controles de sensores */}
            <div className="rounded-xl border border-[#f97316]/25 bg-[#030b07]/95 p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[11px] text-[#fb923c]">
                <span className="inline-flex items-center gap-1.5 font-semibold">
                  <SlidersHorizontal
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                  INYECTAR LECTURAS DE SENSORES
                </span>
                <span className="text-[#84a596]">EDITABLE</span>
              </div>

              <div className="space-y-4">
                {/* Humedad del suelo */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <label
                      htmlFor="sensor-soil"
                      className="inline-flex items-center gap-1.5 font-medium text-[#e6f7ef]"
                    >
                      <Droplets
                        className="h-3.5 w-3.5 text-[#00ff88]"
                        aria-hidden="true"
                      />
                      Humedad del suelo
                    </label>
                    <span className="tabular-nums font-mono font-bold text-[#00ff88]">
                      {reading.soilMoisturePct} %
                    </span>
                  </div>
                  <input
                    id="sensor-soil"
                    type="range"
                    min={5}
                    max={100}
                    step={1}
                    value={reading.soilMoisturePct}
                    onChange={(e) =>
                      updateField("soilMoisturePct", Number(e.target.value))
                    }
                    className="sensor-range"
                  />
                </div>

                {/* Temperatura del aire */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <label
                      htmlFor="sensor-temp"
                      className="inline-flex items-center gap-1.5 font-medium text-[#e6f7ef]"
                    >
                      <Thermometer
                        className="h-3.5 w-3.5 text-[#fb923c]"
                        aria-hidden="true"
                      />
                      Temperatura del aire
                    </label>
                    <span className="tabular-nums font-mono font-bold text-[#fb923c]">
                      {reading.airTempC.toFixed(1)} °C
                    </span>
                  </div>
                  <input
                    id="sensor-temp"
                    type="range"
                    min={0}
                    max={42}
                    step={0.5}
                    value={reading.airTempC}
                    onChange={(e) =>
                      updateField("airTempC", Number(e.target.value))
                    }
                    className="sensor-range"
                  />
                </div>

                {/* Humedad relativa */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <label
                      htmlFor="sensor-rh"
                      className="inline-flex items-center gap-1.5 font-medium text-[#e6f7ef]"
                    >
                      <Wind
                        className="h-3.5 w-3.5 text-sky-300"
                        aria-hidden="true"
                      />
                      Humedad del aire
                    </label>
                    <span className="tabular-nums font-mono font-bold text-sky-300">
                      {reading.relHumidityPct} %
                    </span>
                  </div>
                  <input
                    id="sensor-rh"
                    type="range"
                    min={15}
                    max={100}
                    step={1}
                    value={reading.relHumidityPct}
                    onChange={(e) =>
                      updateField("relHumidityPct", Number(e.target.value))
                    }
                    className="sensor-range"
                  />
                </div>

                {/* Batería solar del nodo INTI */}
                <div>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <label
                      htmlFor="sensor-batt"
                      className="inline-flex items-center gap-1.5 font-medium text-[#e6f7ef]"
                    >
                      <BatteryCharging
                        className="h-3.5 w-3.5 text-[#facc15]"
                        aria-hidden="true"
                      />
                      Batería solar INTI
                    </label>
                    <span className="tabular-nums font-mono font-bold text-[#facc15]">
                      {reading.batteryV.toFixed(2)} V
                    </span>
                  </div>
                  <input
                    id="sensor-batt"
                    type="range"
                    min={3.2}
                    max={4.2}
                    step={0.02}
                    value={reading.batteryV}
                    onChange={(e) =>
                      updateField("batteryV", Number(e.target.value))
                    }
                    className="sensor-range"
                  />
                </div>
              </div>
            </div>

            {/* Paquete de información generado en tiempo real */}
            <div className="rounded-xl border border-[#00ff88]/20 bg-[#020906]/95 p-4">
              <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2 font-mono text-[11px] text-[#00ff88]">
                <span className="inline-flex items-center gap-1.5">
                  <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                  PAQUETE DE DATOS DE SENSORES
                </span>
                <span className="text-[#84a596]">EN VIVO</span>
              </div>
              <pre className="tabular-nums overflow-x-auto font-mono text-xs leading-relaxed text-[#b7d7c8]">
                <code>{diagnosis.formattedPacket}</code>
              </pre>
            </div>

            {/* Nuevo Panel Dinámico: Riego Automatizado y Programado (cierra el espacio negativo) */}
            <div className="flex-1 rounded-xl border border-[#c68b53]/35 bg-[linear-gradient(145deg,rgba(198,139,83,0.1)_0%,rgba(4,14,10,0.94)_60%)] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#c68b53]">
                  <Droplets className="h-3.5 w-3.5" aria-hidden="true" />
                  RIEGO AUTOMATIZADO &amp; PROGRAMADO
                </span>
                <span
                  className={`rounded border px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase ${
                    SEVERITY_STYLES[diagnosis.irrigation.severity]
                  }`}
                >
                  {diagnosis.irrigation.mode}
                </span>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono">
                <div className="rounded-lg border border-white/10 bg-[#030b07]/90 px-2 py-2">
                  <span className="block text-[10px] text-[#84a596]">
                    DURACIÓN
                  </span>
                  <strong className="tabular-nums text-sm text-white">
                    {diagnosis.irrigation.durationMin} min
                  </strong>
                </div>
                <div className="rounded-lg border border-white/10 bg-[#030b07]/90 px-2 py-2">
                  <span className="block text-[10px] text-[#84a596]">
                    LÁMINA
                  </span>
                  <strong className="tabular-nums text-sm text-[#00ff88]">
                    {diagnosis.irrigation.volumeLitersPerM2} L/m²
                  </strong>
                </div>
                <div className="rounded-lg border border-white/10 bg-[#030b07]/90 px-2 py-2">
                  <span className="block text-[10px] text-[#84a596]">
                    AHORRO
                  </span>
                  <strong className="tabular-nums text-sm text-[#facc15]">
                    {diagnosis.irrigation.waterSavingPct} %
                  </strong>
                </div>
              </div>

              <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-[#e6f7ef]">
                <Clock
                  className="h-3.5 w-3.5 text-[#c68b53]"
                  aria-hidden="true"
                />
                <span>Ventana: {diagnosis.irrigation.windowLabel}</span>
              </p>
              <p className="mt-1 text-xs text-[#b7d7c8]">
                {diagnosis.irrigation.note}
              </p>
            </div>
          </div>

          {/* Columna derecha: Respuesta inteligente en Gajos */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="rounded-xl border border-white/10 bg-[#040e0a]/90 px-4 py-3 text-sm text-[#e6f7ef]">
              <span className="font-mono text-xs font-semibold text-[#fb923c]">
                DIAGNÓSTICO GENERAL:{" "}
              </span>
              {diagnosis.headline}
            </div>

            {diagnosis.slices.map((slice) => (
              <article
                key={slice.id}
                className="flex-1 rounded-xl border border-[#f97316]/25 bg-[#07150f]/90 p-5 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded border px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider uppercase ${
                      SEVERITY_STYLES[slice.severity]
                    }`}
                  >
                    {slice.label}
                  </span>
                  <Sparkles
                    className="h-4 w-4 text-[#fb923c]"
                    aria-hidden="true"
                  />
                </div>

                <h4 className="mt-3 text-base font-bold text-white">
                  {slice.title}
                </h4>
                <p className="mt-1.5 text-sm text-[#b7d7c8]">{slice.summary}</p>
                <p className="mt-3 border-t border-white/10 pt-2.5 font-mono text-xs text-[#00ff88]">
                  &gt;_ Acción sugerida: {slice.action}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
