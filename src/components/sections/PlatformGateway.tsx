import { ArrowUpRight, Layers, Lock, Server } from "lucide-react";
import { SITE_CONFIG } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

interface PlatformGatewayProps {
  onOpenPlatformGateway: () => void;
}

export function PlatformGateway({
  onOpenPlatformGateway,
}: PlatformGatewayProps) {
  return (
    <section id="plataforma" className="scroll-reveal scroll-mt-24 py-12">
      <SectionHeader
        code="// 06"
        title={`Acceso a Plataforma · ${SITE_CONFIG.platformName}`}
        subtitle="El portal público presenta la arquitectura; la operación en vivo ocurre en nuestra nube territorial."
      />

      <div className="bio-panel-savia relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#10B981]/30 bg-[#10B981]/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#34D399] uppercase">
              <Server className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Plataforma Central · Savia + Mandarín</span>
            </span>

            <h3 className="mt-4 font-display text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
              Operación centralizada en{" "}
              <span className="font-mono text-[#10B981]">
                {SITE_CONFIG.platformName}
              </span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
              Este portal (
              <code className="font-mono text-[#34D399]">salviabiot.com</code>)
              es la puerta pública del ecosistema. El monitoreo en tiempo real
              de parcelas, estaciones modulares, series históricas de{" "}
              <strong className="text-[#F8FAFC]">Savia</strong> y alertas de{" "}
              <strong className="text-[#F8FAFC]">Mandarín</strong> viven en{" "}
              <strong className="text-[#F8FAFC]">
                {SITE_CONFIG.platformName}
              </strong>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenPlatformGateway}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl bg-[#10B981] px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-[#04130D] uppercase transition-all hover:-translate-y-0.5 hover:bg-[#34D399]"
              >
                <span>Ver estado de {SITE_CONFIG.platformName}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="grid gap-3.5 lg:col-span-5">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0B1117]/90 p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#10B981]">
                <Layers className="h-4 w-4" aria-hidden="true" />
                <span>PORTAL OPERATIVO DEDICADO</span>
              </div>
              <p className="mt-1.5 font-mono text-xs text-[#CBD5E1]">
                app.salviabiot.com &rarr; Centro de Monitoreo y Analítica
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0B1117]/90 p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#F97316]">
                <Lock className="h-4 w-4" aria-hidden="true" />
                <span>ACCESO CONTROLADO A PILOTOS</span>
              </div>
              <p className="mt-1.5 text-xs text-[#94A3B8]">
                Ingreso seguro para investigadores, fincas de la convocatoria
                Finca Zero y equipos de conservación en campo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
