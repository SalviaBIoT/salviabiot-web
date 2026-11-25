import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onOpenPlatformGateway: () => void;
}

const NAV_LINKS = [
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#estaciones", label: "Estaciones" },
  { href: "#ia", label: "IA Savia & Mandarín" },
  { href: "#ciclo-dato", label: "Ciclo del Dato" },
  { href: "#manifiesto", label: "Manifiesto" },
];

export function Navbar({ onOpenPlatformGateway }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#0B1117]/88 backdrop-blur-md">
      <a href="#contenido-principal" className="skip-link visually-hidden">
        Saltar al contenido principal
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Wordmark Compacto Oficial (sin lema para máxima nitidez) */}
        <a
          href="#top"
          className="inline-flex min-h-[44px] items-center rounded-md py-1"
          aria-label="SalviaBIoT — Inicio"
        >
          <img
            src="/brand/SalviaBIoT_Wordmark_Compacto_Oscuro.svg"
            alt="SalviaBIoT"
            className="h-8 w-auto sm:h-9"
          />
        </a>

        {/* Navegación Desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[40px] items-center rounded-lg px-3 text-sm font-medium text-[#94A3B8] transition-colors hover:bg-white/[0.05] hover:text-[#F8FAFC]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Acciones Derecha */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPlatformGateway}
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-lg bg-[#10B981] px-4 py-2 font-mono text-xs font-bold tracking-wider text-[#04130D] transition-colors hover:bg-[#34D399]"
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
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-[#94A3B8] transition-colors hover:bg-white/[0.05] hover:text-[#F8FAFC]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
