import { ArrowRight } from "lucide-react";
import { ECOSYSTEM_PILLARS, type EcosystemPillar } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

function PillarEmblem({ id, color }: { id: EcosystemPillar["id"]; color: string }) {
  if (id === "hardware") {
    return (
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-[#0B1117]"
        style={{
          borderColor: `${color}55`,
          boxShadow: `0 0 24px ${color}28`,
        }}
        aria-hidden="true"
      >
        <div
          className="h-12 w-12"
          style={{
            backgroundColor: color,
            maskImage: "url(/brand/SalviaBIoT_Isotipo_Principal_Oscuro.svg)",
            WebkitMaskImage: "url(/brand/SalviaBIoT_Isotipo_Principal_Oscuro.svg)",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}
        />
      </div>
    );
  }

  if (id === "savia") {
    return (
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-[#0B1117]"
        style={{
          borderColor: `${color}60`,
          boxShadow: `0 0 26px ${color}30`,
        }}
        aria-hidden="true"
      >
        {/* Vector monocromo de un solo color: Savia */}
        <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
          {/* Tres hojas superiores */}
          <path
            d="M32 6C28 11 28 16 32 19C36 16 36 11 32 6Z"
            fill={color}
          />
          <path
            d="M21 11C20 16 23 20 28 20C27 15 24 12 21 11Z"
            fill={color}
            opacity="0.88"
          />
          <path
            d="M43 11C44 16 41 20 36 20C37 15 40 12 43 11Z"
            fill={color}
            opacity="0.88"
          />
          {/* Cuerpo de gota orgánica */}
          <path
            d="M32 19C22 28 16 36 16 44C16 52.8 23.2 58 32 58C40.8 58 48 52.8 48 44C48 36 42 28 32 19Z"
            fill={color}
          />
          {/* Expresión serena */}
          <path
            d="M24 41Q27 38 30 41"
            stroke="#0B1117"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M34 41Q37 38 40 41"
            stroke="#0B1117"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M28 47.5Q32 51 36 47.5"
            stroke="#0B1117"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-[#0B1117]"
      style={{
        borderColor: `${color}60`,
        boxShadow: `0 0 26px ${color}32`,
      }}
      aria-hidden="true"
    >
      {/* Vector monocromo de un solo color: Mandarín */}
      <svg viewBox="0 0 64 64" className="h-12 w-12" fill="none">
        {/* Tallo y hoja característica */}
        <path
          d="M32 16V10"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M33 12C39 8 46 9 48 14C43 17 37 16 33 12Z"
          fill={color}
        />
        {/* Antena / brote izquierdo */}
        <circle cx="22" cy="12" r="2.6" fill={color} opacity="0.9" />
        <path
          d="M23 14L27 19"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        {/* Cuerpo mandarina */}
        <ellipse cx="32" cy="39" rx="20" ry="18" fill={color} />
        {/* Rostro amigable */}
        <circle cx="25.5" cy="38" r="2.3" fill="#0B1117" />
        <circle cx="38.5" cy="38" r="2.3" fill="#0B1117" />
        <path
          d="M27.5 44.5Q32 48.5 36.5 44.5"
          stroke="#0B1117"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function EcosystemOverview() {
  return (
    <section id="ecosistema" className="scroll-reveal scroll-mt-24 py-12">
      <SectionHeader
        code="// 01"
        title="Arquitectura del Ecosistema"
        subtitle="Tres capas integradas: percepción en campo, memoria ambiental y decisiones claras."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {ECOSYSTEM_PILLARS.map((pillar) => {
          const cardBg =
            pillar.id === "savia"
              ? "linear-gradient(145deg, rgba(16,185,129,0.14) 0%, rgba(17,25,34,0.92) 60%, rgba(11,17,23,0.96) 100%)"
              : pillar.id === "mandarin"
                ? "linear-gradient(145deg, rgba(249,115,22,0.16) 0%, rgba(17,25,34,0.92) 60%, rgba(11,17,23,0.96) 100%)"
                : "linear-gradient(145deg, rgba(173,112,59,0.14) 0%, rgba(17,25,34,0.92) 60%, rgba(11,17,23,0.96) 100%)";

          return (
            <article
              key={pillar.id}
              className="flex flex-col justify-between rounded-2xl border p-6 backdrop-blur-md transition-transform duration-200 hover:-translate-y-1"
              style={{
                background: cardBg,
                borderColor: `${pillar.accentHex}55`,
                boxShadow: `0 12px 34px rgba(0,0,0,0.45), inset 0 1px 0 ${pillar.accentHex}28`,
              }}
            >
              <div>
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span
                    className="font-mono text-[11px] font-bold tracking-[0.12em]"
                    style={{ color: pillar.accentBrightHex }}
                  >
                    {pillar.code}
                  </span>
                  <PillarEmblem id={pillar.id} color={pillar.accentBrightHex} />
                </div>

                <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
                  {pillar.title}
                </h3>
                <p
                  className="mt-1 font-mono text-xs font-medium"
                  style={{ color: pillar.accentBrightHex }}
                >
                  {pillar.subtitle}
                </p>

                <p className="mt-3.5 text-sm leading-relaxed text-[#CBD5E1]">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <a
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold transition-colors hover:underline"
                  style={{ color: pillar.accentBrightHex }}
                >
                  <span>{pillar.ctaLabel}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
