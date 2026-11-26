import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SITE_CONFIG } from "../../data/ecosystem";

interface NavbarProps {
  onOpenPlatformGateway: () => void;
}

export function Navbar({ onOpenPlatformGateway }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSocialsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSocialsOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0B1117]/90 backdrop-blur-md">
      <a href="#contenido-principal" className="skip-link visually-hidden">
        Saltar al contenido principal
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        {/* Wordmark Compacto PNG Oficial (tipografía Outfit exacta, sin aureola) */}
        <a
          href="#top"
          className="inline-flex min-h-[44px] items-center rounded-md py-0.5 transition-transform duration-200 hover:scale-[1.02]"
          aria-label="SalviaBIoT — Inicio"
        >
          <img
            src="/brand/SalviaBIoT_Wordmark_Compacto_Oscuro_Transparente.png"
            alt="SalviaBIoT"
            className="-my-2 h-14 w-auto object-contain sm:h-[62px]"
          />
        </a>

        {/* Navegación Desktop limpia: color sutil al pasar el cursor */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            <li>
              <a
                href="#ecosistema"
                className="inline-flex min-h-[40px] items-center rounded-lg px-3 text-sm font-medium text-[#CBD5E1] transition-colors hover:bg-white/[0.04] hover:text-[#34D399]"
              >
                Ecosistema
              </a>
            </li>
            <li>
              <a
                href="#estaciones"
                className="inline-flex min-h-[40px] items-center rounded-lg px-3 text-sm font-medium text-[#CBD5E1] transition-colors hover:bg-white/[0.04] hover:text-[#D4955E]"
              >
                Estaciones
              </a>
            </li>
            <li>
              <a
                href="#ia"
                className="group inline-flex min-h-[40px] items-center gap-1 rounded-lg px-3 text-sm font-medium text-[#CBD5E1] transition-colors hover:bg-white/[0.04]"
              >
                <span className="transition-colors group-hover:text-[#F8FAFC]">
                  IA
                </span>
                <span className="transition-colors group-hover:text-[#34D399]">
                  Savia
                </span>
                <span className="text-[#94A3B8]">&amp;</span>
                <span className="transition-colors group-hover:text-[#FB923C]">
                  Mandarín
                </span>
              </a>
            </li>
            <li>
              <a
                href="#ciclo-dato"
                className="inline-flex min-h-[40px] items-center rounded-lg px-3 text-sm font-medium text-[#CBD5E1] transition-colors hover:bg-white/[0.04] hover:text-[#38BDF8]"
              >
                Ciclo del Dato
              </a>
            </li>
            <li>
              <a
                href="#brief"
                className="inline-flex min-h-[40px] items-center rounded-lg px-3 text-sm font-medium text-[#CBD5E1] transition-colors hover:bg-white/[0.04] hover:text-[#34D399]"
              >
                Pilotos
              </a>
            </li>

            {/* Desplegable de Redes Oficiales */}
            <li ref={dropdownRef} className="relative">
              <button
                type="button"
                aria-expanded={socialsOpen}
                aria-haspopup="true"
                onClick={() => setSocialsOpen((prev) => !prev)}
                className={`inline-flex min-h-[40px] cursor-pointer items-center gap-1 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-white/[0.04] ${
                  socialsOpen
                    ? "bg-white/[0.05] text-[#34D399]"
                    : "text-[#CBD5E1] hover:text-[#34D399]"
                }`}
              >
                <span>Redes</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    socialsOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {socialsOpen && (
                <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-white/[0.12] bg-[#0B1117]/95 p-2 shadow-2xl backdrop-blur-xl">
                  <div className="px-2.5 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-[#10B981] uppercase">
                    // Canales Oficiales
                  </div>
                  <ul className="mt-1 space-y-0.5">
                    {SITE_CONFIG.socials.map((social) => (
                      <li key={social.id}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setSocialsOpen(false)}
                          className="flex items-center justify-between rounded-xl px-2.5 py-2 text-xs transition-colors hover:bg-white/[0.06]"
                        >
                          <div>
                            <span className="block font-medium text-[#F8FAFC]">
                              {social.label}
                            </span>
                            <span className="font-mono text-[11px] text-[#94A3B8]">
                              {social.handle}
                            </span>
                          </div>
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-[#10B981]"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Acciones Derecha */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPlatformGateway}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-4.5 py-2 font-display text-xs font-semibold tracking-tight text-[#F8FAFC] transition-all hover:bg-[#F8FAFC] hover:text-[#0B1117]"
          >
            <span>Acceder a Plataforma</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-[#111922] text-[#F8FAFC] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Navegación Móvil */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Móvil"
          className="border-t border-white/[0.08] bg-[#111922] px-4 py-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-sm font-medium text-[#CBD5E1]">
            <li>
              <a
                href="#ecosistema"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-white/[0.05] hover:text-[#34D399]"
              >
                Ecosistema
              </a>
            </li>
            <li>
              <a
                href="#estaciones"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-white/[0.05] hover:text-[#D4955E]"
              >
                Estaciones
              </a>
            </li>
            <li>
              <a
                href="#ia"
                onClick={() => setMobileOpen(false)}
                className="group flex min-h-[44px] items-center gap-1 rounded-lg px-3 transition-colors hover:bg-white/[0.05]"
              >
                <span>IA</span>
                <span className="group-hover:text-[#34D399]">Savia</span>
                <span>&amp;</span>
                <span className="group-hover:text-[#FB923C]">Mandarín</span>
              </a>
            </li>
            <li>
              <a
                href="#ciclo-dato"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-white/[0.05] hover:text-[#38BDF8]"
              >
                Ciclo del Dato
              </a>
            </li>
            <li>
              <a
                href="#brief"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors hover:bg-white/[0.05] hover:text-[#34D399]"
              >
                Solicitar Piloto · Brief
              </a>
            </li>
          </ul>

          <div className="mt-3 border-t border-white/[0.08] pt-3">
            <p className="px-3 font-mono text-[10px] font-semibold tracking-wider text-[#10B981] uppercase">
              // Redes Oficiales
            </p>
            <div className="mt-2 grid grid-cols-2 gap-1.5 px-1">
              {SITE_CONFIG.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#0B1117]/70 px-3 py-2 text-xs text-[#CBD5E1] transition-colors hover:border-[#10B981]/50 hover:text-[#34D399]"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
