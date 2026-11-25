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
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-[#0B1117] p-1.5"
        style={{
          borderColor: `${color}60`,
          boxShadow: `0 0 26px ${color}30`,
        }}
        aria-hidden="true"
      >
        <img
          src="/brand/agents/Savia_Monocromo_Verde.png"
          alt=""
          className="h-13 w-13 object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-[#0B1117] p-1.5"
      style={{
        borderColor: `${color}60`,
        boxShadow: `0 0 26px ${color}32`,
      }}
      aria-hidden="true"
    >
      <img
        src="/brand/agents/Mandarin_Monocromo_Naranja.png"
        alt=""
        className="h-13 w-13 object-contain"
      />
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
