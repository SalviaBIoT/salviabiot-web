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
    card: "cyber-panel-earth",
    number: "text-[#d99b52]",
    badge: "border-[#c68b53]/40 bg-[#c68b53]/14 text-[#f0d1b0]",
    divider: "border-[#c68b53]/25",
  },
  emerald: {
    card: "cyber-panel",
    number: "text-[#00ff88]",
    badge: "border-[#00ff88]/30 bg-[#00ff88]/10 text-[#c2e6d5]",
    divider: "border-[#00ff88]/20",
  },
  mandarin: {
    card: "cyber-panel-mandarin",
    number: "text-[#fb923c]",
    badge: "border-[#f97316]/35 bg-[#f97316]/12 text-[#fed7aa]",
    divider: "border-[#f97316]/25",
  },
  ecosystem: {
    card: "bg-[linear-gradient(145deg,rgba(198,139,83,0.1)_0%,rgba(0,255,136,0.09)_50%,rgba(250,204,21,0.08)_100%)] border border-[#00ff88]/30 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.45)]",
    number:
      "bg-gradient-to-r from-[#d99b52] via-[#00ff88] to-[#facc15] bg-clip-text text-transparent",
    badge: "border-[#facc15]/35 bg-[#00ff88]/10 text-[#e6f7ef]",
    divider: "border-[#00ff88]/20",
  },
};

export function DataCycleSection() {
  return (
    <section id="ciclo-dato" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 03"
        title="Ciclo Vital del Dato · De la Raíz al Fruto"
      />

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DATA_CYCLE_STEPS.map((item) => {
          const tone = TONE_STYLES[item.tone];
          return (
            <li
              key={item.step}
              className={`relative flex flex-col rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 ${tone.card}`}
            >
              {/* Cabecera apilada con variación cromática por etapa del ecosistema */}
              <div
                className={`mb-4 flex flex-col items-start gap-2.5 border-b pb-4 ${tone.divider}`}
              >
                <span
                  className={`font-mono text-3xl leading-none font-extrabold ${tone.number}`}
                >
                  {item.step}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-[11px] leading-tight tracking-wider ${tone.badge}`}
                >
                  {item.tone === "earth" && (
                    <Sun
                      className="h-3 w-3 text-[#facc15]"
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.layer}</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#b7d7c8]/85">
                {item.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
