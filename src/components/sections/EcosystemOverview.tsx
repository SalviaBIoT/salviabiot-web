import { ArrowRight, BrainCircuit, Cpu, MessageSquareText } from "lucide-react";
import { ECOSYSTEM_PILLARS } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

const PILLAR_ICONS = {
  hardware: Cpu,
  savia: BrainCircuit,
  mandarin: MessageSquareText,
} as const;

export function EcosystemOverview() {
  return (
    <section id="ecosistema" className="scroll-reveal scroll-mt-24 py-12">
      <SectionHeader
        code="// 01"
        title="Arquitectura del Ecosistema"
        subtitle="Tres capas integradas sin fricción: percepción en campo, cognición territorial y traducción humana."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {ECOSYSTEM_PILLARS.map((pillar) => {
          const Icon =
            PILLAR_ICONS[pillar.id as keyof typeof PILLAR_ICONS] ?? Cpu;

          return (
            <article
              key={pillar.id}
              className="bio-panel flex flex-col justify-between rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: `${pillar.accentHex}38`,
              }}
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className="font-mono text-[11px] font-semibold tracking-[0.12em]"
                    style={{ color: pillar.accentHex }}
                  >
                    {pillar.code}
                  </span>
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-[#0B1117]"
                    style={{
                      borderColor: `${pillar.accentHex}45`,
                      color: pillar.accentHex,
                    }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
                  {pillar.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#94A3B8]">
                  {pillar.subtitle}
                </p>

                <p className="mt-3.5 text-sm leading-relaxed text-[#94A3B8]">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <a
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-colors hover:underline"
                  style={{ color: pillar.accentHex }}
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
