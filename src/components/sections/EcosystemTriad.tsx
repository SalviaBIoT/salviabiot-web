import { BrainCircuit, Sparkles, Sun } from "lucide-react";
import { ECOSYSTEM_TRIAD, type TriadLayer } from "../../data/ecosystem";
import { MandarinoAvatar } from "../common/MandarinoAvatar";
import { SectionHeader } from "../common/SectionHeader";

const ACCENT_STYLES: Record<
  TriadLayer["accent"],
  {
    panel: string;
    code: string;
    archetype: string;
    divider: string;
    iconColor: string;
  }
> = {
  solar: {
    panel: "cyber-panel-solar",
    code: "text-[#facc15]",
    archetype: "text-[#fde047]/90",
    divider: "border-[#facc15]/20",
    iconColor: "text-[#facc15]",
  },
  emerald: {
    panel: "cyber-panel",
    code: "text-[#00ff88]",
    archetype: "text-[#00ff88]/85",
    divider: "border-[#00ff88]/20",
    iconColor: "text-[#00ff88]",
  },
  mandarin: {
    panel: "cyber-panel-mandarin",
    code: "text-[#ff8c32]",
    archetype: "text-[#fb923c]",
    divider: "border-[#f97316]/25",
    iconColor: "text-[#ff8c32]",
  },
};

export function EcosystemTriad() {
  return (
    <section id="ecosistema" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 01"
        title="Arquitectura del Ecosistema (La Tríada)"
      />

      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {ECOSYSTEM_TRIAD.map((layer) => {
          const style = ACCENT_STYLES[layer.accent];

          return (
            <article
              key={layer.id}
              className={`group relative flex flex-col rounded-xl p-6 transition-transform duration-200 hover:-translate-y-1 ${style.panel}`}
            >
              {/* Bloque superior flexible para alinear la barra divisora en las 3 tarjetas */}
              <div className="flex-1">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span
                    className={`font-mono text-[11px] font-semibold tracking-[0.12em] ${style.code}`}
                  >
                    {layer.code}
                  </span>

                  {layer.id === "mandarin" ? (
                    <MandarinoAvatar size="sm" flotar />
                  ) : layer.id === "terrabit" ? (
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#facc15]/35 bg-[#facc15]/12 text-[#facc15] shadow-[0_0_16px_rgba(250,204,21,0.2)]">
                      <Sun className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00ff88]/25 bg-[#00ff88]/10 text-[#00ff88]">
                      <BrainCircuit className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {layer.name}
                </h3>
                <p className={`mt-1 font-mono text-xs ${style.archetype}`}>
                  {layer.archetype}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#b7d7c8]">
                  {layer.summary}
                </p>
              </div>

              {/* Lista inferior con altura equilibrada para mantener las 3 líneas divisoras en la misma horizontal */}
              <ul
                className={`mt-6 space-y-2.5 border-t pt-4 text-xs text-[#84a596] md:min-h-[144px] ${style.divider}`}
              >
                {layer.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Sparkles
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${style.iconColor}`}
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
