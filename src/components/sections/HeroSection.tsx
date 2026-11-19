import { ArrowUpRight, Mail, Radio, Sun } from "lucide-react";
import { HUD_METRICS, SITE_CONFIG } from "../../data/ecosystem";

interface HeroSectionProps {
  onOpenPlatformGateway: () => void;
}

export function HeroSection({ onOpenPlatformGateway }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-14 pb-16 sm:pt-20 sm:pb-24">
      {/* Halo orgánico bio-tech (esmeralda + calidez solar y tierra) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -z-10 h-72 w-[min(720px,92vw)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,255,136,0.18)_0%,rgba(250,204,21,0.08)_42%,rgba(198,139,83,0.05)_65%,transparent_80%)] blur-2xl"
      />

      <div className="mx-auto max-w-4xl text-center">
        {/* Kicker status */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/8 px-4 py-1.5 font-mono text-xs tracking-[0.14em] text-[#00ff88] uppercase">
          <Radio className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Ecosistema en despliegue · Colombia</span>
        </div>

        <p
          lang="en"
          className="font-mono text-xs font-semibold tracking-[0.26em] text-[#c68b53] uppercase sm:text-sm"
        >
          Biological Internet of Things
        </p>

        {/* Único H1 de la página: tipografía Outfit amena, orgánica y tecnológica */}
        <h1
          id="contenido-principal"
          tabIndex={-1}
          className="brand-title mt-3 outline-none"
        >
          <span className="brand-title-organic">Salvia</span>
          <span className="brand-title-accent">BIoT</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-[#c2e6d5] sm:text-2xl">
          Inteligencia ambiental y sensores vivos para escuchar, comprender y
          proteger nuestros ecosistemas.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#84a596] sm:text-base">
          Conectamos estaciones solares en campo (
          <strong className="text-[#facc15]">TerraBit Station · INTI</strong>),
          memoria ambiental (<strong className="text-[#00ff88]">Savia</strong>)
          y un asistente inteligente cercano (
          <strong className="text-[#fb923c]">Mandarín</strong>) para cuidar
          bosques altoandinos, páramos, cuencas hídricas y cultivos
          regenerativos.
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
            className="inline-flex min-h-[46px] items-center gap-2 rounded-md border border-[#c68b53]/45 bg-[#c68b53]/10 px-6 py-3 font-mono text-xs font-semibold tracking-wider text-[#f3e3d3] uppercase transition-colors hover:border-[#facc15] hover:bg-[#facc15]/12 hover:text-white"
          >
            <Mail className="h-4 w-4 text-[#facc15]" aria-hidden="true" />
            <span>Alianzas &amp; Pilotos</span>
          </a>
        </div>
      </div>

      {/* Barra HUD del Ecosistema */}
      <div className="cyber-panel mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#00ff88]/25 bg-[#00ff88]/15 sm:grid-cols-4">
        {HUD_METRICS.map((metric) => {
          const isInti = metric.id === "inti";
          return (
            <div
              key={metric.id}
              className="bg-[#040f0a]/95 px-4 py-4 text-left sm:px-5"
            >
              <p className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#84a596] uppercase">
                {isInti && (
                  <Sun
                    className="h-3.5 w-3.5 text-[#facc15]"
                    aria-hidden="true"
                  />
                )}
                <span>{metric.label}</span>
              </p>
              <p
                className={`tabular-nums mt-1 font-mono text-lg font-bold sm:text-xl ${
                  isInti ? "text-[#facc15]" : "text-[#00ff88]"
                }`}
              >
                {metric.value}
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-[#b7d7c8]/80">
                {metric.unit}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
