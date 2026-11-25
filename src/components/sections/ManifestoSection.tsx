import { Mail, ShieldCheck, Sprout } from "lucide-react";
import { ETYMOLOGY_ROOTS, SITE_CONFIG } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

const ROOT_TONE_STYLES = {
  emerald: "border-[#10B981]/30 text-[#34D399]",
  earth: "border-[#AD703B]/35 text-[#D4955E]",
  solar: "border-[#FACC15]/30 text-[#FACC15]",
} as const;

export function ManifestoSection() {
  return (
    <section id="manifiesto" className="scroll-reveal scroll-mt-24 py-12">
      <SectionHeader
        code="// 05"
        title="Soberanía del Dato & Manifiesto"
        subtitle="Reciprocidad tecnológica: datos ambientales libres de opacidad y al servicio del territorio."
        accent="earth"
      />

      <div className="bio-panel-earth relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Columna izquierda: Soberanía + Convocatoria Finca Zero */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#AD703B]/40 bg-[#AD703B]/15 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#E5B88E] uppercase">
                <Sprout className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reciprocidad Tecnológica</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#10B981]/35 bg-[#10B981]/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#34D399] uppercase">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Soberanía del Dato Ambiental</span>
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
              De la extracción al cuidado guiado por{" "}
              <span className="text-[#10B981]">datos propios</span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
              Creemos en la <strong className="text-[#F8FAFC]">Soberanía del Dato Ambiental</strong>: cada
              serie temporal de suelo, cuenca o bosque pertenece al territorio y
              a quienes lo custodian. <strong className="text-[#F8FAFC]">SalviaBIoT</strong>{" "}
              articula hardware abierto, memoria histórica trazable y copilotos
              empáticos para cerrar la brecha entre ciencia y campo.
            </p>

            {/* Bloque destacado Convocatoria Finca Zero */}
            <div className="mt-5 rounded-2xl border border-[#FACC15]/35 bg-[#0B1117]/90 p-4 sm:p-5">
              <p className="font-mono text-xs font-bold tracking-[0.14em] text-[#FACC15] uppercase">
                Convocatoria Abierta · Programa «Finca Zero»
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
                Buscamos predios caficultores, reservas altoandinas y proyectos
                de conservación en Colombia para desplegar nodos modulares{" "}
                <strong className="text-[#F8FAFC]">TRB · YKU · WYR · APU</strong>{" "}
                y validar el monitoreo de carbono y CO₂ en campo.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SITE_CONFIG.emails.partnerships}?subject=Postulaci%C3%B3n%20Finca%20Zero%20%E2%80%94%20SalviaBIoT`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#10B981] px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-[#04130D] uppercase transition-all hover:-translate-y-0.5 hover:bg-[#34D399]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Postular a Finca Zero</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.emails.founder}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#AD703B]/45 bg-[#AD703B]/12 px-5 py-2.5 font-mono text-xs font-semibold tracking-wider text-[#F8FAFC] uppercase transition-colors hover:border-[#FACC15] hover:bg-[#FACC15]/10"
              >
                <span>Contactar al Fundador</span>
              </a>
            </div>
          </div>

          {/* Columna derecha: las 3 raíces etimológicas */}
          <div className="grid gap-3 lg:col-span-5">
            {ETYMOLOGY_ROOTS.map((root) => (
              <div
                key={root.word}
                className={`rounded-2xl border bg-[#0B1117]/92 p-4 ${
                  ROOT_TONE_STYLES[root.tone]
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs font-semibold">
                  <span>{root.word}</span>
                  <span className="text-[10px] tracking-wider text-[#64748B] uppercase">
                    {root.origin}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#94A3B8]">
                  {root.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
