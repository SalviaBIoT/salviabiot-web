import { ChevronDown, ChevronUp, Pause, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import { AI_AGENTS } from "../../data/ecosystem";
import { MandarinAvatar } from "../common/MandarinAvatar";
import { SaviaAvatar } from "../common/SaviaAvatar";
import { SectionHeader } from "../common/SectionHeader";
import { MandarinSimulator } from "./MandarinSimulator";

interface AIEcosystemModuleProps {
  motionPaused: boolean;
  onToggleMotion: () => void;
}

export function AIEcosystemModule({
  motionPaused,
  onToggleMotion,
}: AIEcosystemModuleProps) {
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  return (
    <section id="ia" className="scroll-reveal scroll-mt-24 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <SectionHeader
            code="// 03"
            title="Entorno de Inteligencia Artificial · Savia & Mandarín"
            subtitle="Separación clara de capacidades: motor analítico territorial y copiloto conversacional en campo."
            accent="mandarin"
          />
        </div>

        {/* Control accesible de pausa/reanudar (WCAG 2.2.2) */}
        <button
          type="button"
          onClick={onToggleMotion}
          className="inline-flex min-h-[40px] shrink-0 cursor-pointer items-center gap-2 self-start rounded-xl border border-white/15 bg-[#111922] px-4 py-2 font-mono text-xs font-medium text-[#CBD5E1] transition-colors hover:border-[#10B981] hover:text-[#F8FAFC] sm:mb-8"
        >
          {motionPaused ? (
            <>
              <Play className="h-3.5 w-3.5 text-[#10B981]" aria-hidden="true" />
              <span>Reanudar avatares</span>
            </>
          ) : (
            <>
              <Pause className="h-3.5 w-3.5 text-[#F97316]" aria-hidden="true" />
              <span>Pausar avatares</span>
            </>
          )}
        </button>
      </div>

      {/* 2 Sub-módulos Gemelos: Savia (Core AI) & Mandarín (Copiloto) */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Sub-módulo A · Savia */}
        <article className="bio-panel-savia flex flex-col rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 border-b border-white/[0.08] pb-6 sm:flex-row">
            <SaviaAvatar
              size="md"
              state="idle"
              motionPaused={motionPaused}
            />

            <div className="text-center sm:text-left">
              <span className="inline-block rounded-full border border-[#10B981]/35 bg-[#10B981]/12 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#34D399] uppercase">
                Sabiduría de la Tierra
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-[#F8FAFC] sm:text-3xl">
                {AI_AGENTS.savia.name}
              </h3>
              <p className="font-mono text-xs text-[#38BDF8]">
                {AI_AGENTS.savia.role}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-[#94A3B8]">
                {AI_AGENTS.savia.tagline}
              </p>
            </div>
          </div>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {AI_AGENTS.savia.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-xl border border-white/[0.08] bg-[#0B1117]/85 p-3.5"
              >
                <dt className="font-mono text-[11px] font-bold tracking-wider text-[#10B981] uppercase">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-[#CBD5E1]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        {/* Sub-módulo B · Mandarín */}
        <article className="bio-panel-mandarin flex flex-col rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col items-center gap-6 border-b border-white/[0.08] pb-6 sm:flex-row">
            <MandarinAvatar
              size="md"
              state="idle"
              motionPaused={motionPaused}
            />

            <div className="text-center sm:text-left">
              <span className="inline-block rounded-full border border-[#F97316]/40 bg-[#F97316]/12 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#FB923C] uppercase">
                Subagente Traductor
              </span>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-[#F8FAFC] sm:text-3xl">
                {AI_AGENTS.mandarin.name}
              </h3>
              <p className="font-mono text-xs text-[#FB923C]">
                {AI_AGENTS.mandarin.role}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-[#94A3B8]">
                {AI_AGENTS.mandarin.tagline}
              </p>
            </div>
          </div>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            {AI_AGENTS.mandarin.specs.map((spec) => (
              <div
                key={spec.label}
                className="rounded-xl border border-white/[0.08] bg-[#0B1117]/85 p-3.5"
              >
                <dt className="font-mono text-[11px] font-bold tracking-wider text-[#F97316] uppercase">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-[#CBD5E1]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </article>
      </div>

      {/* Botón Desplegable Llamativo con Mandarín Llamando a la Acción */}
      <div className="mt-6 rounded-3xl border border-[#F97316]/40 bg-[linear-gradient(110deg,rgba(249,115,22,0.16)_0%,rgba(17,25,34,0.95)_48%,rgba(16,185,129,0.1)_100%)] p-5 shadow-[0_14px_40px_rgba(249,115,22,0.14)] sm:p-6">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <MandarinAvatar
              size="sm"
              state="happy"
              motionPaused={motionPaused}
            />
            <div>
              <p className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-[0.14em] text-[#FB923C] uppercase">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Mandarín te invita a probarlo</span>
              </p>
              <h3 className="mt-1 font-display text-lg font-bold text-[#F8FAFC] sm:text-xl">
                ¿Quieres ver cómo traduzco los datos del terreno en gajos de decisión?
              </h3>
              <p className="mt-0.5 text-sm text-[#94A3B8]">
                Mueve humedad del suelo, temperatura y batería solar en el
                laboratorio interactivo sin salir de esta página.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSimulatorOpen((prev) => !prev)}
            aria-expanded={simulatorOpen}
            aria-controls="mandarin-live-lab"
            className="inline-flex min-h-[48px] shrink-0 cursor-pointer items-center gap-2 rounded-xl bg-[#F97316] px-6 py-3 font-mono text-xs font-extrabold tracking-wider text-[#0B1117] uppercase shadow-[0_8px_28px_rgba(249,115,22,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#FF8C32]"
          >
            <span>
              {simulatorOpen
                ? "Ocultar Simulador"
                : "Abrir Simulador en Vivo"}
            </span>
            {simulatorOpen ? (
              <ChevronUp className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Despliegue bajo demanda del Simulador Interactivo */}
      {simulatorOpen && <MandarinSimulator motionPaused={motionPaused} />}
    </section>
  );
}
