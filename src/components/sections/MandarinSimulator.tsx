import {
  BatteryCharging,
  Clock,
  Droplets,
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
import { MandarinAvatar } from "../common/MandarinAvatar";

interface MandarinSimulatorProps {
  motionPaused: boolean;
}

const SEVERITY_STYLES = {
  optimal: "border-[#10B981]/35 bg-[#10B981]/12 text-[#34D399]",
  warning: "border-[#F97316]/45 bg-[#F97316]/15 text-[#FB923C]",
  critical: "border-rose-500/50 bg-rose-500/15 text-rose-300",
  info: "border-[#FACC15]/35 bg-[#FACC15]/12 text-[#FACC15]",
} as const;

const OVERALL_BADGE_STYLES = {
  optimal: "border-[#10B981]/45 bg-[#10B981]/15 text-[#34D399]",
  warning: "border-[#F97316]/50 bg-[#F97316]/15 text-[#FB923C]",
  critical: "border-rose-500/55 bg-rose-500/18 text-rose-300",
} as const;

export function MandarinSimulator({ motionPaused }: MandarinSimulatorProps) {
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

  const avatarState = analyzing
    ? "thinking"
    : diagnosis.overallSeverity === "optimal"
      ? "happy"
      : "idle";

  return (
    <div
      id="mandarin-live-lab"
      className="bio-panel-mandarin mt-6 rounded-3xl p-6 sm:p-8"
    >
      {/* Cabecera interactiva con MandarinAvatar calibrado */}
      <div className="flex flex-col items-start justify-between gap-6 border-b border-[#F97316]/20 pb-6 lg:flex-row lg:items-center">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <MandarinAvatar
            size="md"
            state={avatarState}
            motionPaused={motionPaused}
          />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/40 bg-[#F97316]/12 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#FB923C] uppercase">
                <span>
                  {analyzing ? "Analizando sensores" : "Simulador Mandarín"}
                </span>
                <span className="inline-flex gap-1" aria-hidden="true">
                  <span className="agent-dot h-1.5 w-1.5 rounded-full bg-[#FB923C]" />
                  <span className="agent-dot h-1.5 w-1.5 rounded-full bg-[#FB923C]" />
                  <span className="agent-dot h-1.5 w-1.5 rounded-full bg-[#FB923C]" />
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

            <h3 className="mt-3 font-display text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
              De datos de sensores a «gajos» de decisión
            </h3>
            <p className="mt-1.5 max-w-xl text-sm text-[#94A3B8]">
              Ajusta las variables de campo en tiempo real para observar cómo{" "}
              <strong className="text-[#F8FAFC]">Mandarín</strong> interpreta la
              telemetría y coordina alertas y riego automatizado.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex min-h-[40px] shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/15 bg-[#0B1117]/90 px-3.5 py-2 font-mono text-xs text-[#CBD5E1] transition-colors hover:border-[#10B981]/55 hover:text-[#34D399]"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Restablecer preset</span>
        </button>
      </div>

      {/* Selector de estación solar */}
      <div className="mt-5 flex flex-wrap gap-2">
        {SENSOR_PRESETS.map((preset, idx) => {
          const active = idx === presetIndex;
          return (
            <button
              key={preset.biomeType}
              type="button"
              onClick={() => handleSelectPreset(idx)}
              aria-pressed={active}
              className={`inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg border px-3.5 py-2 font-mono text-xs transition-colors ${
                active
                  ? "border-[#F97316] bg-[#F97316]/18 font-semibold text-[#F8FAFC]"
                  : "border-white/15 bg-[#0B1117]/80 text-[#94A3B8] hover:border-[#FACC15]/50 hover:text-[#F8FAFC]"
              }`}
            >
              <Sun className="h-3.5 w-3.5 text-[#FACC15]" aria-hidden="true" />
              <span>{preset.stationId}</span>
            </button>
          );
        })}
      </div>

      {/* Panel interactivo: Izquierda (Sliders + Paquete + Riego) | Derecha (Diagnóstico + 3 Gajos) */}
      <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-5">
          {/* Controles de sensores */}
          <div className="rounded-2xl border border-[#F97316]/25 bg-[#0B1117]/92 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-[11px] text-[#FB923C]">
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
                INYECTAR LECTURAS DE SENSORES
              </span>
              <span className="text-[#64748B]">EDITABLE</span>
            </div>

            <div className="space-y-4">
              {/* Humedad del suelo */}
              <div>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <label
                    htmlFor="sensor-soil"
                    className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC]"
                  >
                    <Droplets
                      className="h-3.5 w-3.5 text-[#10B981]"
                      aria-hidden="true"
                    />
                    Humedad del suelo
                  </label>
                  <span className="tabular-nums font-mono font-bold text-[#34D399]">
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
                    className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC]"
                  >
                    <Thermometer
                      className="h-3.5 w-3.5 text-[#FB923C]"
                      aria-hidden="true"
                    />
                    Temperatura del aire
                  </label>
                  <span className="tabular-nums font-mono font-bold text-[#FB923C]">
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
                    className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC]"
                  >
                    <Wind
                      className="h-3.5 w-3.5 text-[#38BDF8]"
                      aria-hidden="true"
                    />
                    Humedad del aire
                  </label>
                  <span className="tabular-nums font-mono font-bold text-[#38BDF8]">
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
                    className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC]"
                  >
                    <BatteryCharging
                      className="h-3.5 w-3.5 text-[#FACC15]"
                      aria-hidden="true"
                    />
                    Batería solar INTI
                  </label>
                  <span className="tabular-nums font-mono font-bold text-[#FACC15]">
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

          {/* Paquete Savia Link */}
          <div className="rounded-2xl border border-[#10B981]/25 bg-[#0B1117]/92 p-4">
            <div className="mb-2.5 flex items-center justify-between border-b border-white/[0.08] pb-2 font-mono text-[11px] text-[#34D399]">
              <span className="inline-flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                PAQUETE SAVIA LINK
              </span>
              <span className="text-[#64748B]">EN VIVO</span>
            </div>
            <pre className="tabular-nums overflow-x-auto font-mono text-xs leading-relaxed text-[#CBD5E1]">
              <code>{diagnosis.formattedPacket}</code>
            </pre>
          </div>

          {/* Riego Automatizado y Programado */}
          <div className="bio-panel-earth flex-1 rounded-2xl p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-2.5">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#D4955E]">
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
              <div className="rounded-lg border border-white/[0.08] bg-[#0B1117]/90 px-2 py-2">
                <span className="block text-[10px] text-[#64748B]">
                  DURACIÓN
                </span>
                <strong className="tabular-nums text-sm text-[#F8FAFC]">
                  {diagnosis.irrigation.durationMin} min
                </strong>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-[#0B1117]/90 px-2 py-2">
                <span className="block text-[10px] text-[#64748B]">LÁMINA</span>
                <strong className="tabular-nums text-sm text-[#34D399]">
                  {diagnosis.irrigation.volumeLitersPerM2} L/m²
                </strong>
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-[#0B1117]/90 px-2 py-2">
                <span className="block text-[10px] text-[#64748B]">AHORRO</span>
                <strong className="tabular-nums text-sm text-[#FACC15]">
                  {diagnosis.irrigation.waterSavingPct} %
                </strong>
              </div>
            </div>

            <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-[#F8FAFC]">
              <Clock className="h-3.5 w-3.5 text-[#AD703B]" aria-hidden="true" />
              <span>Ventana: {diagnosis.irrigation.windowLabel}</span>
            </p>
            <p className="mt-1 text-xs text-[#94A3B8]">
              {diagnosis.irrigation.note}
            </p>
          </div>
        </div>

        {/* Columna derecha: Diagnóstico + 3 Gajos */}
        <div className="flex flex-col gap-4 lg:col-span-7">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0B1117]/90 px-4 py-3 text-sm text-[#F8FAFC]">
            <span className="font-mono text-xs font-semibold text-[#FB923C]">
              DIAGNÓSTICO GENERAL:{" "}
            </span>
            {diagnosis.headline}
          </div>

          {diagnosis.slices.map((slice) => (
            <article
              key={slice.id}
              className="flex-1 rounded-2xl border border-[#F97316]/25 bg-[#111922]/90 p-5 transition-colors"
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
                  className="h-4 w-4 text-[#FB923C]"
                  aria-hidden="true"
                />
              </div>

              <h4 className="mt-3 font-display text-base font-bold text-[#F8FAFC]">
                {slice.title}
              </h4>
              <p className="mt-1.5 text-sm text-[#94A3B8]">{slice.summary}</p>
              <p className="mt-3 border-t border-white/[0.08] pt-2.5 font-mono text-xs text-[#34D399]">
                &gt;_ Acción sugerida: {slice.action}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
