import { ArrowDownRight, Cpu, Sparkles } from "lucide-react";
import { HUD_METRICS } from "../../data/ecosystem";

interface HeroSectionProps {
  onOpenPlatformGateway: () => void;
}

export function HeroSection({ onOpenPlatformGateway }: HeroSectionProps) {
  return (
    <section id="top" className="relative w-full overflow-hidden pb-12">
      {/* Portada Full-Bleed Expandida (sin caja) estilo LoginPage */}
      <div className="relative flex min-h-[540px] flex-col justify-center px-4 pt-12 pb-16 sm:min-h-[600px] sm:px-6 sm:pt-14 sm:pb-20">
        <img
          src="/brand/SalviaBIoT_Login_Hero_1024x1024.jpg"
          alt="Estación de telemetría biológica SalviaBIoT en ecosistema vivo andino"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Degradado estratégico: deja respirar la fotografía a los lados y asegura contraste en el centro */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,17,23,0.62) 0%, rgba(11,17,23,0.34) 38%, rgba(11,17,23,0.58) 74%, #0B1117 100%), radial-gradient(ellipse 68% 58% at 50% 48%, rgba(11,17,23,0.68) 0%, rgba(11,17,23,0.18) 72%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Píldora superior con el ÚNICO LED #00FF88 ("EN VIVO") */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#0B1117]/75 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.12em] text-[#F8FAFC] backdrop-blur-md">
            <span
              className="pulse-dot-live inline-block h-2.5 w-2.5 rounded-full"
              aria-hidden="true"
            />
            <span className="font-bold text-[#F8FAFC]">EN VIVO</span>
            <span className="text-[#64748B]" aria-hidden="true">
              ·
            </span>
            <span className="text-[#CBD5E1]">Ecosistema en despliegue · CO</span>
          </div>

          {/* Wordmark Principal PNG Alta Resolución: grande, expandido, verídico, sin aureola */}
          <div className="mx-auto my-1 flex justify-center">
            <img
              src="/brand/SalviaBIoT_Wordmark_Principal_Oscuro_Transparente.png"
              alt="SalviaBIoT — De Sensores a Decisiones"
              className="-my-6 h-auto w-[min(560px,94vw)] object-contain drop-shadow-[0_6px_24px_rgba(11,17,23,0.75)] sm:-my-8 sm:w-[640px] lg:w-[700px]"
            />
          </div>

          {/* Único H1 directo a la raíz */}
          <h1
            id="contenido-principal"
            tabIndex={-1}
            className="font-display mt-3 text-3xl font-extrabold tracking-tight text-[#F8FAFC] drop-shadow-[0_2px_18px_rgba(11,17,23,0.85)] outline-none sm:text-5xl"
          >
            Inteligencia{" "}
            <span className="brand-title-accent">Ambiental de Precisión</span>
          </h1>

          {/* Doble CTA Editorial */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="#estaciones"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#10B981] px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#04130D] uppercase shadow-[0_8px_28px_rgba(11,17,23,0.5)] transition-all hover:-translate-y-0.5 hover:bg-[#34D399]"
            >
              <Cpu className="h-4 w-4" aria-hidden="true" />
              <span>Explorar Estaciones</span>
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#ia"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#F97316]/60 bg-[#0B1117]/75 px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#F8FAFC] uppercase backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#F97316] hover:bg-[#F97316]/25"
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
              className="cursor-pointer font-mono text-xs text-[#CBD5E1] underline decoration-white/25 underline-offset-4 drop-shadow-[0_1px_6px_rgba(11,17,23,0.9)] transition-colors hover:text-[#34D399] hover:decoration-[#34D399]"
            >
              ¿Ya cuentas con acceso piloto? Ingresar a Platform_SalviaBIoT &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Barra HUD Compacta alineada al contenedor */}
      <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.55)] backdrop-blur-md sm:grid-cols-4">
          {HUD_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-[#111922]/94 px-4 py-4 text-left sm:px-5"
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#64748B] uppercase">
                {metric.label}
              </p>
              <p
                className={`tabular-nums mt-1 font-mono text-base font-bold sm:text-lg ${metric.accent}`}
              >
                {metric.value}
              </p>
              <p className="mt-0.5 text-xs text-[#94A3B8]">{metric.unit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
