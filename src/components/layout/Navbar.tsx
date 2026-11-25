import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onOpenPlatformGateway: () => void;
}

export function Navbar({ onOpenPlatformGateway }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0B1117]/90 backdrop-blur-md">
      <a href="#contenido-principal" className="skip-link visually-hidden">
        Saltar al contenido principal
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Wordmark Compacto Grande con Aureola Lateral Luminosa */}
        <a
          href="#top"
          className="group relative inline-flex min-h-[48px] items-center rounded-xl px-2 py-1"
          aria-label="SalviaBIoT — Inicio"
        >
          {/* Aureola lateral bio-tech */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-4 -inset-y-1 rounded-full bg-[radial-gradient(ellipse_at_28%_50%,rgba(16,185,129,0.38)_0%,rgba(173,112,59,0.2)_45%,transparent_75%)] blur-md transition-opacity duration-300 group-hover:opacity-100"
          />
          <img
            src="/brand/SalviaBIoT_Wordmark_Compacto_Oscuro.svg"
            alt="SalviaBIoT"
            className="relative -my-2.5 h-14 w-auto drop-shadow-[0_0_16px_rgba(16,185,129,0.35)] transition-transform duration-200 group-hover:scale-[1.03] sm:h-16"
          />
        </a>

        {/* Navegación Desktop con identidad cromática por módulo */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            <li>
              <a
                href="#ecosistema"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-[#CBD5E1] transition-colors hover:bg-[#10B981]/10 hover:text-[#34D399]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" aria-hidden="true" />
                <span>Ecosistema</span>
              </a>
            </li>
            <li>
              <a
                href="#estaciones"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-[#CBD5E1] transition-colors hover:bg-[#AD703B]/15 hover:text-[#D4955E]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4955E]" aria-hidden="true" />
                <span>Estaciones</span>
              </a>
            </li>
            <li>
              <a
                href="#ia"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-[#CBD5E1] transition-colors hover:bg-white/[0.06]"
              >
                <span>IA</span>
                <span className="text-[#34D399]">Savia</span>
                <span className="text-[#64748B]">&amp;</span>
                <span className="text-[#FB923C]">Mandarín</span>
              </a>
            </li>
            <li>
              <a
                href="#ciclo-dato"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-[#CBD5E1] transition-colors hover:bg-[#0284C7]/15 hover:text-[#38BDF8]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" aria-hidden="true" />
                <span>Ciclo del Dato</span>
              </a>
            </li>
            <li>
              <a
                href="#manifiesto"
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-[#CBD5E1] transition-colors hover:bg-[#FACC15]/10 hover:text-[#FACC15]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#FACC15]" aria-hidden="true" />
                <span>Manifiesto</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Acciones Derecha */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPlatformGateway}
            className="inline-flex min-h-[42px] cursor-pointer items-center gap-1.5 rounded-xl bg-[#10B981] px-4 py-2 font-mono text-xs font-bold tracking-wider text-[#04130D] shadow-[0_0_20px_rgba(16,185,129,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#34D399]"
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
          <ul className="flex flex-col gap-1 text-sm font-semibold">
            <li>
              <a
                href="#ecosistema"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-[#34D399] hover:bg-white/[0.05]"
              >
                <span>Ecosistema</span>
              </a>
            </li>
            <li>
              <a
                href="#estaciones"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-[#D4955E] hover:bg-white/[0.05]"
              >
                <span>Estaciones</span>
              </a>
            </li>
            <li>
              <a
                href="#ia"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center gap-1.5 rounded-lg px-3 hover:bg-white/[0.05]"
              >
                <span className="text-[#CBD5E1]">IA</span>
                <span className="text-[#34D399]">Savia</span>
                <span className="text-[#64748B]">&amp;</span>
                <span className="text-[#FB923C]">Mandarín</span>
              </a>
            </li>
            <li>
              <a
                href="#ciclo-dato"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-[#38BDF8] hover:bg-white/[0.05]"
              >
                <span>Ciclo del Dato</span>
              </a>
            </li>
            <li>
              <a
                href="#manifiesto"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center gap-2 rounded-lg px-3 text-[#FACC15] hover:bg-white/[0.05]"
              >
                <span>Manifiesto</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
