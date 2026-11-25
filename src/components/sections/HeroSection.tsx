import { ArrowDownRight, Cpu, Sparkles } from "lucide-react";
import { HUD_METRICS } from "../../data/ecosystem";

interface HeroSectionProps {
  onOpenPlatformGateway: () => void;
}

export function HeroSection({ onOpenPlatformGateway }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-8 pb-14 sm:pt-12 sm:pb-18">
      {/* Tarjeta Hero Editorial con SalviaBIoT_Login_Hero_1024x1024.jpg + scrim protector WCAG AAA */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0B1117] px-6 py-12 shadow-[0_24px_64px_rgba(0,0,0,0.65)] sm:px-12 sm:py-16 lg:py-20">
        <img
          src="/brand/SalviaBIoT_Login_Hero_1024x1024.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-45"
        />

        {/* Scrim protector multicapa #0B1117 para garantizar contraste WCAG AAA */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,17,23,0.82) 0%, rgba(11,17,23,0.72) 45%, rgba(11,17,23,0.95) 100%), radial-gradient(circle at 50% 30%, rgba(16,185,129,0.14) 0%, rgba(11,17,23,0.88) 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Píldora superior con el ÚNICO LED #00FF88 ("EN VIVO") */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#111922]/85 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.12em] text-[#F8FAFC] backdrop-blur-md">
            <span
              className="pulse-dot-live inline-block h-2.5 w-2.5 rounded-full"
              aria-hidden="true"
            />
            <span className="font-bold text-[#F8FAFC]">EN VIVO</span>
            <span className="text-[#64748B]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#94A3B8]">Ecosistema en despliegue · CO</span>
          </div>

          <p
            lang="en"
            className="font-mono text-xs font-semibold tracking-[0.26em] text-[#AD703B] uppercase sm:text-sm"
          >
            SalviaBIoT · Biological Internet of Things
          </p>

          {/* Único H1 de la página */}
          <h1
            id="contenido-principal"
            tabIndex={-1}
            className="brand-title mt-3 text-[#F8FAFC] outline-none"
          >
            De Sensores a{" "}
            <span className="brand-title-accent">Decisiones</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-[#CBD5E1] sm:text-2xl">
            Telemetría Biológica e Inteligencia Ambiental de Precisión
          </p>

          <p className="mx-auto mt-3.5 max-w-xl text-sm leading-relaxed text-[#94A3B8] sm:text-base">
            Estaciones modulares sobre{" "}
            <strong className="text-[#F8FAFC]">ESP32-S3</strong>, memoria
            territorial con{" "}
            <strong className="text-[#34D399]">Savia</strong> y decisiones
            accionables en campo con{" "}
            <strong className="text-[#FB923C]">Mandarín</strong>.
          </p>

          {/* Doble CTA Editorial */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#estaciones"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#04130D] uppercase shadow-[0_8px_28px_rgba(16,185,129,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#34D399]"
            >
              <Cpu className="h-4 w-4" aria-hidden="true" />
              <span>Explorar Estaciones</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#ia"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#F97316]/45 bg-[#111922]/85 px-6 py-3 font-mono text-xs font-semibold tracking-wider text-[#F8FAFC] uppercase backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#F97316] hover:bg-[#F97316]/15"
            >
              <Sparkles className="h-4 w-4 text-[#F97316]" aria-hidden="true" />
              <span>Conocer IA Savia &amp; Mandarín</span>
            </a>
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={onOpenPlatformGateway}
              className="cursor-pointer font-mono text-xs text-[#94A3B8] underline decoration-white/20 underline-offset-4 transition-colors hover:text-[#34D399] hover:decoration-[#34D399]"
            >
              ¿Ya cuentas con acceso piloto? Ingresar a Platform_SalviaBIoT &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Barra HUD Compacta */}
      <div className="mx-auto mt-6 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-4">
        {HUD_METRICS.map((metric) => (
          <div
            key={metric.id}
            className="bg-[#111922]/92 px-4 py-4 text-left sm:px-5"
          >
            <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#64748B] uppercase">
              {metric.label}
            </p>
            <p
              className={`tabular-nums mt-1 font-mono text-base font-bold sm:text-lg ${metric.accent}`}
            >
              {metric.value}
            </p>
            <p className="mt-0.5 font-mono text-[11px] text-[#94A3B8]">
              {metric.unit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
