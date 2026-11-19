import { Mail } from "lucide-react";
import { SITE_CONFIG } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

export function ManifestoSection() {
  return (
    <section id="manifiesto" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 05"
        title="Reciprocidad Tecnológica & Manifiesto"
      />

      <div className="cyber-panel rounded-2xl border-l-4 border-l-[#00ff88] p-6 sm:p-9">
        <h3 className="font-mono text-base font-bold text-[#00ff88] sm:text-lg">
          &gt;_ De la extracción al cuidado guiado por datos vivos
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-[#c2e6d5] sm:text-base">
          Inspirado en el verbo latino <em lang="la">salvare</em> (sanar y
          conservar), en <em lang="la">silva</em> (bosque vivo, en homenaje a
          nuestro linaje) y en <em lang="en">Sage</em> (sabiduría),{" "}
          <strong>SalviaBIoT</strong> propone dotar a la naturaleza de un
          sistema nervioso digital para que las decisiones de conservación y
          agricultura regenerativa respondan al pulso real del territorio.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${SITE_CONFIG.emails.founder}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-[#00ff88]/40 bg-[#00ff88]/10 px-5 py-2.5 font-mono text-xs font-semibold tracking-wider text-[#00ff88] uppercase transition-colors hover:bg-[#00ff88] hover:text-[#02120a]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>Contactar al Fundador</span>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.emails.partnerships}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-2.5 font-mono text-xs font-semibold tracking-wider text-[#e6f7ef] uppercase transition-colors hover:border-[#00ff88]/60 hover:text-[#00ff88]"
          >
            <span>Proponer Piloto o Convocatoria</span>
          </a>
        </div>
      </div>
    </section>
  );
}
