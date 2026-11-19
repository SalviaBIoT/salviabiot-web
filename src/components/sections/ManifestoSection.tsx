import { Mail, Sprout } from "lucide-react";
import { ETYMOLOGY_ROOTS, SITE_CONFIG } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

const ROOT_TONE_STYLES = {
  emerald: "border-[#00ff88]/25 text-[#00ff88]",
  earth: "border-[#c68b53]/35 text-[#d99b52]",
  solar: "border-[#facc15]/30 text-[#facc15]",
} as const;

export function ManifestoSection() {
  return (
    <section id="manifiesto" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 05"
        title="Reciprocidad Tecnológica & Manifiesto"
      />

      <div className="cyber-panel-earth relative overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Columna izquierda con la misma jerarquía tipográfica que PlatformGateway */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded border border-[#c68b53]/40 bg-[#c68b53]/12 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#e2b07a] uppercase">
              <Sprout className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Filosofía · Reciprocidad Tecnológica</span>
            </span>

            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              De la extracción al cuidado guiado por{" "}
              <span className="text-[#00ff88]">datos vivos</span>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#b7d7c8] sm:text-base">
              Inspirado en el verbo latino{" "}
              <em lang="la" className="font-semibold text-[#00ff88]">
                Salvare
              </em>{" "}
              (sanar y conservar), en{" "}
              <em lang="la" className="font-semibold text-[#e2b07a]">
                Silva
              </em>{" "}
              (bosque vivo, en homenaje a nuestro linaje) y en{" "}
              <em lang="en" className="font-semibold text-[#facc15]">
                Sage
              </em>{" "}
              (sabiduría), <strong className="text-white">SalviaBIoT</strong>{" "}
              propone dotar a la naturaleza de un sistema nervioso digital para
              que cada decisión de conservación y agricultura regenerativa
              responda al pulso real del territorio.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${SITE_CONFIG.emails.founder}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[#00ff88] px-5 py-2.5 font-mono text-xs font-bold tracking-wider text-[#02120a] uppercase transition-transform hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contactar al Fundador</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.emails.partnerships}`}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#c68b53]/45 bg-[#c68b53]/12 px-5 py-2.5 font-mono text-xs font-semibold tracking-wider text-[#f3e3d3] uppercase transition-colors hover:border-[#facc15] hover:text-white"
              >
                <span>Proponer Piloto o Convocatoria</span>
              </a>
            </div>
          </div>

          {/* Columna derecha: las 3 raíces etimológicas en armonía cromática */}
          <div className="grid gap-3 lg:col-span-5">
            {ETYMOLOGY_ROOTS.map((root) => (
              <div
                key={root.word}
                className={`rounded-xl border bg-[#030b07]/90 p-4 ${
                  ROOT_TONE_STYLES[root.tone]
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs font-semibold">
                  <span>{root.word}</span>
                  <span className="text-[10px] tracking-wider text-[#84a596] uppercase">
                    {root.origin}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[#b7d7c8]">
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
