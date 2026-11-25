import { Sun } from "lucide-react";
import { DATA_CYCLE_STEPS, type DataCycleStep } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

const TONE_STYLES: Record<
  DataCycleStep["tone"],
  {
    card: string;
    number: string;
    badge: string;
    divider: string;
  }
> = {
  earth: {
    card: "bio-panel-earth",
    number: "text-[#AD703B]",
    badge: "border-[#AD703B]/40 bg-[#AD703B]/15 text-[#E5B88E]",
    divider: "border-[#AD703B]/25",
  },
  emerald: {
    card: "bio-panel-savia",
    number: "text-[#10B981]",
    badge: "border-[#10B981]/35 bg-[#10B981]/12 text-[#34D399]",
    divider: "border-[#10B981]/20",
  },
  mandarin: {
    card: "bio-panel-mandarin",
    number: "text-[#F97316]",
    badge: "border-[#F97316]/35 bg-[#F97316]/12 text-[#FB923C]",
    divider: "border-[#F97316]/25",
  },
  ecosystem: {
    card: "bg-[linear-gradient(145deg,rgba(173,112,59,0.12)_0%,rgba(16,185,129,0.1)_50%,rgba(2,132,199,0.1)_100%)] border border-[#10B981]/35 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.45)]",
    number:
      "bg-gradient-to-r from-[#AD703B] via-[#10B981] to-[#38BDF8] bg-clip-text text-transparent",
    badge: "border-[#FACC15]/35 bg-[#10B981]/12 text-[#F8FAFC]",
    divider: "border-white/[0.08]",
  },
};

export function DataCycleSection() {
  return (
    <section id="ciclo-dato" className="scroll-reveal scroll-mt-24 py-12">
      <SectionHeader
        code="// 04"
        title="Ciclo del Dato · De la Raíz al Fruto"
        subtitle="Flujo continuo desde el sensor en suelo hasta la decisión regenerativa."
      />

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DATA_CYCLE_STEPS.map((item) => {
          const tone = TONE_STYLES[item.tone];
          return (
            <li
              key={item.step}
              className={`relative flex flex-col rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 ${tone.card}`}
            >
              <div
                className={`mb-4 flex flex-col items-start gap-2.5 border-b pb-4 ${tone.divider}`}
              >
                <span
                  className={`font-mono text-3xl leading-none font-extrabold ${tone.number}`}
                >
                  {item.step}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-[11px] leading-tight tracking-wider ${tone.badge}`}
                >
                  {item.tone === "earth" && (
                    <Sun
                      className="h-3 w-3 text-[#FACC15]"
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.layer}</span>
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-[#F8FAFC]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#94A3B8]">
                {item.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
