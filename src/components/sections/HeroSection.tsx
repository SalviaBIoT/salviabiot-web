import { ArrowDownRight, Cpu, Sparkles } from "lucide-react";
import { HUD_METRICS } from "../../data/ecosystem";

interface HeroSectionProps {
  onOpenPlatformGateway: () => void;
}

export function HeroSection({ onOpenPlatformGateway }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-8 pb-14 sm:pt-10 sm:pb-18">
      {/* Tarjeta Hero Editorial con SalviaBIoT_Login_Hero_1024x1024.jpg + scrim protector */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0B1117] px-6 py-10 shadow-[0_24px_64px_rgba(0,0,0,0.65)] sm:px-12 sm:py-14 lg:py-16">
        <img
          src="/brand/SalviaBIoT_Login_Hero_1024x1024.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover object-center opacity-45"
        />

        {/* Scrim protector multicapa #0B1117 */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,17,23,0.82) 0%, rgba(11,17,23,0.72) 45%, rgba(11,17,23,0.95) 100%), radial-gradient(circle at 50% 35%, rgba(16,185,129,0.16) 0%, rgba(11,17,23,0.88) 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Píldora superior con el ÚNICO LED #00FF88 ("EN VIVO") */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#111922]/85 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.12em] text-[#F8FAFC] backdrop-blur-md">
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

          {/* Logo Principal Grande y Reluciente */}
          <div className="relative mx-auto my-2 flex max-w-[540px] items-center justify-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 inset-y-2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.26)_0%,rgba(250,204,21,0.12)_45%,transparent_72%)] blur-xl"
            />
            <img
              src="/brand/SalviaBIoT_Wordmark_Principal_Oscuro.svg"
              alt="SalviaBIoT — De Sensores a Decisiones"
              className="relative -my-6 h-auto w-[min(460px,94%)] drop-shadow-[0_0_28px_rgba(16,185,129,0.3)] sm:-my-8 sm:w-[540px]"
            />
          </div>

          {/* Único H1 directo a la raíz */}
          <h1
            id="contenido-principal"
            tabIndex={-1}
            className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[#F8FAFC] outline-none sm:text-5xl"
          >
            Inteligencia{" "}
            <span className="brand-title-accent">Ambiental de Precisión</span>
          </h1>

          {/* Doble CTA Editorial */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#estaciones"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#04130D] uppercase shadow-[0_8px_28px_rgba(16,185,129,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#34D399]"
            >
              <Cpu className="h-4 w-4" aria-hidden="true" />
              <span>Explorar Estaciones</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#ia"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#F97316]/55 bg-[#F97316]/15 px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#F8FAFC] uppercase backdrop-blur-md shadow-[0_8px_24px_rgba(249,115,22,0.18)] transition-all hover:-translate-y-0.5 hover:border-[#F97316] hover:bg-[#F97316]/25"
            >
              <Sparkles className="h-4 w-4 text-[#FB923C]" aria-hidden="true" />
              <span>
                Conocer IA <span className="text-[#34D399]">Savia</span> &amp;{" "}
                <span className="text-[#FB923C]">Mandarín</span>
              </span>
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

      {/* Barra HUD Compacta en lenguaje claro */}
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
            <p className="mt-0.5 text-xs text-[#94A3B8]">
              {metric.unit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
