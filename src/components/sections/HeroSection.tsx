import { ArrowDownRight, Cpu, Sparkles } from "lucide-react";
import { HUD_METRICS } from "../../data/ecosystem";

interface HeroSectionProps {
  onOpenPlatformGateway: () => void;
}

export function HeroSection({ onOpenPlatformGateway }: HeroSectionProps) {
  return (
    <section id="top" className="relative w-full overflow-hidden pb-16">
      {/* Portada Atmosférica Full-Bleed con fotografía suavemente difuminada y transiciones en los 4 bordes */}
      <div className="relative flex min-h-[640px] flex-col justify-center overflow-hidden px-4 pt-16 pb-24 sm:min-h-[720px] sm:px-6 sm:pt-20 sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 18%, black 62%, transparent 96%)",
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 18%, black 62%, transparent 96%)",
          }}
        >
          <img
            src="/brand/SalviaBIoT_Login_Hero_1024x1024.jpg"
            alt="Estación de telemetría biológica SalviaBIoT en ecosistema vivo andino"
            className="h-full w-full scale-105 object-cover object-center opacity-48 blur-[3px]"
          />
        </div>

        {/* Transición suave lateral y central hacia #0B1117 sin cortar bruscamente el grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0B1117 0%, rgba(11,17,23,0.4) 16%, transparent 45%, transparent 55%, rgba(11,17,23,0.4) 84%, #0B1117 100%), radial-gradient(ellipse 64% 52% at 50% 48%, rgba(11,17,23,0.62) 0%, rgba(11,17,23,0.18) 72%, transparent 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Píldora superior con el ÚNICO LED #00FF88 ("EN VIVO") */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#0B1117]/75 px-4 py-1.5 font-mono text-xs font-medium tracking-[0.12em] text-[#F8FAFC] backdrop-blur-md">
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

          {/* Wordmark Principal PNG Alta Resolución: más grande y detallado, sin aureola */}
          <div className="mx-auto my-2 flex justify-center">
            <img
              src="/brand/SalviaBIoT_Wordmark_Principal_Oscuro_Transparente.png"
              alt="SalviaBIoT — De Sensores a Decisiones"
              className="-my-7 h-auto w-[min(640px,94vw)] object-contain drop-shadow-[0_8px_28px_rgba(11,17,23,0.8)] sm:-my-9 sm:w-[720px] lg:w-[780px]"
            />
          </div>

          {/* Único H1 directo a la raíz */}
          <h1
            id="contenido-principal"
            tabIndex={-1}
            className="font-display mt-4 text-3xl font-extrabold tracking-[-0.03em] text-[#F8FAFC] drop-shadow-[0_2px_18px_rgba(11,17,23,0.85)] outline-none sm:text-5xl lg:text-[3.25rem]"
          >
            Inteligencia{" "}
            <span className="brand-title-accent">Ambiental de Precisión</span>
          </h1>

          {/* Doble CTA Editorial Premium (Marfil + Obsidiana Glass Zafiro) */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#estaciones"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#F8FAFC] px-7 py-3.5 font-display text-sm font-semibold tracking-tight text-[#0B1117] shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_40px_rgba(255,255,255,0.16)]"
            >
              <Cpu className="h-4 w-4 text-[#0B1117]" aria-hidden="true" />
              <span>Explorar Estaciones</span>
              <ArrowDownRight className="h-4 w-4 text-[#0B1117]" aria-hidden="true" />
            </a>

            <a
              href="#ia"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#38BDF8]/35 bg-[#111922]/75 px-7 py-3.5 font-display text-sm font-semibold tracking-tight text-[#F8FAFC] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-[#38BDF8]/70 hover:bg-[#16202B]/90"
            >
              <Sparkles className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
              <span>
                Conocer IA <span className="text-[#34D399]">Savia</span> &amp;{" "}
                <span className="text-[#FB923C]">Mandarín</span>
              </span>
            </a>
          </div>

          <div className="mt-5">
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

      {/* Barra HUD Compacta separada más abajo tras la transición limpia de la fotografía */}
      <div className="relative z-10 mx-auto mt-8 max-w-6xl px-4 sm:mt-12 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.48)] sm:grid-cols-4">
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
