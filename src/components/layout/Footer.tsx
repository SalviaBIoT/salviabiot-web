import { ArrowUpRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "../../data/ecosystem";

interface FooterProps {
  onOpenPlatformGateway: () => void;
}

export function Footer({ onOpenPlatformGateway }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-[#00ff88]/20 bg-[#020805]/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identidad y Fundador */}
          <div>
            <p className="font-mono text-sm font-bold tracking-[0.12em] text-[#e6f7ef]">
              SALVIA<span className="text-[#00ff88]">BIoT</span>
            </p>
            <p className="mt-2 text-sm text-[#84a596]">
              Infraestructura de inteligencia ambiental y sensores biológicos
              construida desde {SITE_CONFIG.location}.
            </p>
            <div className="mt-4 border-l-2 border-[#00ff88]/40 pl-3 text-xs text-[#b7d7c8]">
              <strong className="block font-semibold text-white">
                {SITE_CONFIG.founder}
              </strong>
              <span>{SITE_CONFIG.founderRole}</span>
            </div>
          </div>

          {/* Enlaces del Ecosistema */}
          <div>
            <h2 className="font-mono text-xs font-semibold tracking-[0.15em] text-[#00ff88] uppercase">
              // Ecosistema Digital
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[#b7d7c8]">
              <li>
                <button
                  type="button"
                  onClick={onOpenPlatformGateway}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-left transition-colors hover:text-[#00ff88]"
                >
                  <span>{SITE_CONFIG.platformName}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.githubOrg}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#00ff88]"
                >
                  <span>GitHub · @SalviaBIoT</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#mandarin"
                  className="transition-colors hover:text-[#ff8c32]"
                >
                  Mandarín · Laboratorio Interactivo
                </a>
              </li>
            </ul>
          </div>

          {/* Canales Oficiales */}
          <div>
            <h2 className="font-mono text-xs font-semibold tracking-[0.15em] text-[#00ff88] uppercase">
              // Contacto Oficial
            </h2>
            <ul className="mt-3 space-y-2.5 font-mono text-xs text-[#b7d7c8]">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.founder}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#00ff88]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#00ff88]" aria-hidden="true" />
                  <span>{SITE_CONFIG.emails.founder}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.partnerships}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#00ff88]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#00ff88]" aria-hidden="true" />
                  <span>{SITE_CONFIG.emails.partnerships}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.emails.system}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#ff8c32]"
                >
                  <Mail className="h-3.5 w-3.5 text-[#ff8c32]" aria-hidden="true" />
                  <span>{SITE_CONFIG.emails.system}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#00ff88]/15 pt-6 font-mono text-[11px] text-[#84a596]">
          <p>
            &copy; {new Date().getFullYear()} SalviaBIoT ·{" "}
            <span lang="en">Biological Internet of Things</span>.
          </p>
          <p>{SITE_CONFIG.domain} · Pereira, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
