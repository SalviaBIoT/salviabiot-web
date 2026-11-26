import { ArrowUpRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "../../data/ecosystem";

interface FooterProps {
  onOpenPlatformGateway: () => void;
}

export function Footer({ onOpenPlatformGateway }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-white/[0.08] bg-[#0B1117]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marca Oficial y Fundador */}
          <div>
            <img
              src="/brand/SalviaBIoT_Wordmark_Compacto_Oscuro_Transparente.png"
              alt="SalviaBIoT"
              className="-my-1 h-12 w-auto object-contain"
            />
            <p className="mt-3 text-sm text-[#94A3B8]">
              Telemetría biológica e inteligencia ambiental de precisión
              construida desde {SITE_CONFIG.location}.
            </p>
            <div className="mt-4 border-l-2 border-[#10B981]/50 pl-3 text-xs text-[#94A3B8]">
              <strong className="block font-semibold text-[#F8FAFC]">
                {SITE_CONFIG.founder}
              </strong>
              <span>{SITE_CONFIG.founderRole}</span>
            </div>
          </div>

          {/* Enlaces del Ecosistema */}
          <div>
            <h2 className="font-mono text-xs font-semibold tracking-[0.15em] text-[#10B981] uppercase">
              // Ecosistema Digital
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <button
                  type="button"
                  onClick={onOpenPlatformGateway}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-left transition-colors hover:text-[#34D399]"
                >
                  <span>{SITE_CONFIG.platformName}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </li>
              <li>
                <a
                  href="#estaciones"
                  className="transition-colors hover:text-[#F8FAFC]"
                >
                  Estaciones Modulares (TRB · YKU · WYR · APU)
                </a>
              </li>
              <li>
                <a
                  href="#ia"
                  className="transition-colors hover:text-[#FB923C]"
                >
                  IA Savia &amp; Copiloto Mandarín
                </a>
              </li>
              <li>
                <a
                  href="#brief"
                  className="transition-colors hover:text-[#34D399]"
                >
                  Solicitar Piloto · Generador de Brief
                </a>
              </li>
            </ul>

            <h3 className="mt-6 font-mono text-[11px] font-semibold tracking-[0.15em] text-[#94A3B8] uppercase">
              // Redes Oficiales
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {SITE_CONFIG.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} de SalviaBIoT`}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/[0.1] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[#CBD5E1] transition-colors hover:border-[#10B981]/50 hover:text-[#34D399]"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Canales Oficiales */}
          <div>
            <h2 className="font-mono text-xs font-semibold tracking-[0.15em] text-[#10B981] uppercase">
              // Contacto Oficial
            </h2>
            <ul className="mt-3 space-y-2.5 font-mono text-xs text-[#94A3B8]">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.founder}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#F8FAFC]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#10B981]" aria-hidden="true" />
                  <span>{SITE_CONFIG.emails.founder}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.partnerships}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#F8FAFC]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#38BDF8]" aria-hidden="true" />
                  <span>{SITE_CONFIG.emails.partnerships}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.system}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#F8FAFC]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#F97316]" aria-hidden="true" />
                  <span>{SITE_CONFIG.emails.system}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6 font-mono text-[11px] text-[#64748B]">
          <p>
            &copy; {new Date().getFullYear()} SalviaBIoT · Identidad{" "}
            {SITE_CONFIG.version} ·{" "}
            <span lang="en">Biological Internet of Things</span>.
          </p>
          <p>{SITE_CONFIG.domain} · Pereira, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
