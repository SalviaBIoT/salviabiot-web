import { ArrowUpRight, Mail, Radio } from "lucide-react";
import { HUD_METRICS, SITE_CONFIG } from "../../data/ecosystem";

interface HeroSectionProps {
  onOpenPlatformGateway: () => void;
}

export function HeroSection({ onOpenPlatformGateway }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        {/* Kicker status */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/8 px-4 py-1.5 font-mono text-xs tracking-[0.14em] text-[#00ff88] uppercase">
          <Radio className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Ecosistema en despliegue · Colombia</span>
        </div>

        <p
          lang="en"
          className="font-mono text-xs font-semibold tracking-[0.22em] text-[#00ff88]/90 uppercase sm:text-sm"
        >
          Biological Internet of Things
        </p>

        {/* Único H1 de la página, destino del skip-link */}
        <h1
          id="contenido-principal"
          tabIndex={-1}
          className="mt-3 text-5xl font-extrabold tracking-[-0.04em] text-white outline-none sm:text-7xl"
          style={{ textShadow: "0 0 42px rgba(0, 255, 136, 0.24)" }}
        >
          Salvia<span className="text-[#00ff88]">BIoT</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-[#c2e6d5] sm:text-2xl">
          Infraestructura de inteligencia ambiental y telemetría biológica para
          dar voz digital a los ecosistemas vivos.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#84a596] sm:text-base">
          Integramos hardware autónomo en campo (<strong>TerraBit Station</strong>
          ), inteligencia ambiental en la nube (<strong>Savia</strong>) y
          subagentes modulares (<strong>Mandarín</strong>) para escuchar,
          interpretar y proteger bosques altoandinos, páramos y cuencas hídricas.
        </p>

        {/* CTAs principales */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onOpenPlatformGateway}
            className="inline-flex min-h-[46px] cursor-pointer items-center gap-2 rounded-md bg-[#00ff88] px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#02120a] uppercase shadow-[0_0_28px_rgba(0,255,136,0.38)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(0,255,136,0.58)]"
          >
            <span>Ingresar a {SITE_CONFIG.platformName}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <a
            href={`mailto:${SITE_CONFIG.emails.partnerships}`}
            className="inline-flex min-h-[46px] items-center gap-2 rounded-md border border-[#00ff88]/35 bg-[#00ff88]/6 px-6 py-3 font-mono text-xs font-semibold tracking-wider text-[#e6f7ef] uppercase transition-colors hover:border-[#00ff88] hover:bg-[#00ff88]/14"
          >
            <Mail className="h-4 w-4 text-[#00ff88]" aria-hidden="true" />
            <span>Alianzas &amp; Pilotos</span>
          </a>
        </div>
      </div>

      {/* Barra HUD de Telemetría del Ecosistema */}
      <div className="cyber-panel mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#00ff88]/25 bg-[#00ff88]/15 sm:grid-cols-4">
        {HUD_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="bg-[#040f0a]/95 px-4 py-4 text-left sm:px-5"
          >
            <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#84a596] uppercase">
              {metric.label}
            </p>
            <p className="tabular-nums mt-1 font-mono text-lg font-bold text-[#00ff88] sm:text-xl">
              {metric.value}
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-[#b7d7c8]/80">
              {metric.unit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
