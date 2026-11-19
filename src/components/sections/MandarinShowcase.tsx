import { Pause, Play, Sparkles, Terminal } from "lucide-react";
import { useState } from "react";
import { MANDARIN_SCENARIOS } from "../../data/ecosystem";
import { MandarinoAvatar } from "../common/MandarinoAvatar";
import { SectionHeader } from "../common/SectionHeader";

interface MandarinShowcaseProps {
  motionPaused: boolean;
  onToggleMotion: () => void;
}

const SEVERITY_STYLES = {
  optimal: "border-[#00ff88]/35 bg-[#00ff88]/10 text-[#00ff88]",
  warning: "border-[#f97316]/45 bg-[#f97316]/15 text-[#fb923c]",
  info: "border-sky-400/35 bg-sky-400/10 text-sky-300",
} as const;

export function MandarinShowcase({
  motionPaused,
  onToggleMotion,
}: MandarinShowcaseProps) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);

  const current = MANDARIN_SCENARIOS[scenarioIndex];

  function handleSelectScenario(index: number) {
    if (index === scenarioIndex) return;
    setAnalyzing(true);
    setScenarioIndex(index);
    window.setTimeout(() => setAnalyzing(false), 650);
  }

  return (
    <section id="mandarin" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 02"
        title="Mandarín · Subagente Modular en Vivo"
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
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f97316]/40 bg-[#f97316]/12 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#fb923c] uppercase">
                <span>Subagente Activo</span>
                <span className="inline-flex gap-1" aria-hidden="true">
                  <span className="mandarino-dot h-1.5 w-1.5 rounded-full bg-[#fb923c]" />
                  <span className="mandarino-dot h-1.5 w-1.5 rounded-full bg-[#fb923c]" />
                  <span className="mandarino-dot h-1.5 w-1.5 rounded-full bg-[#fb923c]" />
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                De JSON crudo a «gajos» de decisión
              </h3>
              <p className="mt-2 max-w-xl text-sm text-[#c2e6d5]">
                Mandarín fragmenta la telemetría de <strong>TerraBit Station</strong>{" "}
                y los modelos de <strong>Savia</strong> en módulos comprensibles
                para quienes protegen el territorio.
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

        {/* Selector de escenario de campo */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {MANDARIN_SCENARIOS.map((scenario, idx) => {
              const active = idx === scenarioIndex;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => handleSelectScenario(idx)}
                  aria-pressed={active}
                  className={`min-h-[40px] cursor-pointer rounded-md border px-3.5 py-2 font-mono text-xs transition-colors ${
                    active
                      ? "border-[#f97316] bg-[#f97316]/20 font-semibold text-white"
                      : "border-white/15 bg-[#040e09]/80 text-[#84a596] hover:border-[#f97316]/50 hover:text-[#e6f7ef]"
                  }`}
                >
                  {scenario.station}
                </button>
              );
            })}
          </div>

          <span className="font-mono text-xs text-[#84a596]">
            {current.biome}
          </span>
        </div>

        {/* Pipeline visual: Entrada JSON -> Salida en Gajos */}
        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          {/* Trama cruda del nodo */}
          <div className="rounded-xl border border-[#00ff88]/20 bg-[#020906]/95 p-4 lg:col-span-5">
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[11px] text-[#00ff88]">
              <span className="inline-flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                INGESTA EDGE (JSON)
              </span>
              <span className="text-[#84a596]">EMA · CALIBRADO</span>
            </div>
            <pre className="tabular-nums overflow-x-auto font-mono text-xs leading-relaxed text-[#b7d7c8]">
              <code>{current.rawPayload}</code>
            </pre>
          </div>

          {/* Gajos interpretados por Mandarín */}
          <div className="grid gap-4 lg:col-span-7">
            {current.slices.map((slice) => (
              <article
                key={slice.id}
                className="rounded-xl border border-[#f97316]/25 bg-[#07150f]/90 p-5"
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
