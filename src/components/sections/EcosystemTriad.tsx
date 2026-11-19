import { BrainCircuit, Cpu, Sparkles } from "lucide-react";
import { ECOSYSTEM_TRIAD } from "../../data/ecosystem";
import { MandarinoAvatar } from "../common/MandarinoAvatar";
import { SectionHeader } from "../common/SectionHeader";

export function EcosystemTriad() {
  return (
    <section id="ecosistema" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 01"
        title="Arquitectura del Ecosistema (La Tríada)"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {ECOSYSTEM_TRIAD.map((layer) => {
          const isMandarin = layer.accent === "mandarin";

          return (
            <article
              key={layer.id}
              className={`group relative flex flex-col justify-between rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 ${
                isMandarin ? "cyber-panel-mandarin" : "cyber-panel"
              }`}
            >
              <div>
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className={`font-mono text-[11px] font-semibold tracking-[0.12em] ${
                      isMandarin ? "text-[#ff8c32]" : "text-[#00ff88]"
                    }`}
                  >
                    {layer.code}
                  </span>

                  {layer.id === "mandarin" ? (
                    <MandarinoAvatar size="sm" flotar />
                  ) : layer.id === "terrabit" ? (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#00ff88]/25 bg-[#00ff88]/10 text-[#00ff88]">
                      <Cpu className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#00ff88]/25 bg-[#00ff88]/10 text-[#00ff88]">
                      <BrainCircuit className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {layer.name}
                </h3>
                <p
                  className={`mt-1 font-mono text-xs ${
                    isMandarin ? "text-[#fb923c]" : "text-[#00ff88]/80"
                  }`}
                >
                  {layer.archetype}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#b7d7c8]">
                  {layer.summary}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-[#84a596]">
                {layer.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Sparkles
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                        isMandarin ? "text-[#ff8c32]" : "text-[#00ff88]"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
