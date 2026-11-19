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
    <section id="plataforma" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 04"
        title={`Puerta de Llegada · ${SITE_CONFIG.platformName}`}
      />

      <div className="cyber-panel relative overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded border border-[#00ff88]/30 bg-[#00ff88]/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#00ff88] uppercase">
              <Server className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Plataforma Central · Savia + Mandarín</span>
            </span>

            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Operación centralizada en{" "}
              <span className="font-mono text-[#00ff88]">
                {SITE_CONFIG.platformName}
              </span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#b7d7c8] sm:text-base">
              Este portal (<code className="font-mono text-[#00ff88]">salviabiot.com</code>)
              es la puerta pública del ecosistema. El monitoreo en tiempo real
              de parcelas, estaciones <strong>TerraBit</strong>, gráficas
              ambientales y el asistente conversacional <strong>Mandarín</strong>{" "}
              viven dentro de <strong>{SITE_CONFIG.platformName}</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenPlatformGateway}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md bg-[#00ff88] px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-[#02120a] uppercase transition-transform hover:-translate-y-0.5"
              >
                <span>Ver estado de {SITE_CONFIG.platformName}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="grid gap-3.5 lg:col-span-5">
            <div className="rounded-xl border border-[#00ff88]/20 bg-[#030c08]/90 p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#00ff88]">
                <Layers className="h-4 w-4" aria-hidden="true" />
                <span>PORTAL OPERATIVO DEDICADO</span>
              </div>
              <p className="mt-1.5 font-mono text-xs text-[#b7d7c8]">
                app.salviabiot.com &rarr; Centro de Monitoreo y Analítica
              </p>
            </div>

            <div className="rounded-xl border border-[#00ff88]/20 bg-[#030c08]/90 p-4">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#ff8c32]">
                <Lock className="h-4 w-4" aria-hidden="true" />
                <span>ACCESO CONTROLADO A PILOTOS</span>
              </div>
              <p className="mt-1.5 text-xs text-[#84a596]">
                Ingreso seguro y privado para investigadores, fincas piloto y
                equipos de conservación en campo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
