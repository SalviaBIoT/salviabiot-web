import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "../../data/ecosystem";

interface NavbarProps {
  onOpenPlatformGateway: () => void;
}

const NAV_LINKS = [
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#mandarin", label: "Mandarín IA" },
  { href: "#ciclo-dato", label: "Ciclo del Dato" },
  { href: "#plataforma", label: "Platform" },
  { href: "#manifiesto", label: "Manifiesto" },
];

export function Navbar({ onOpenPlatformGateway }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#00ff88]/20 bg-[#030a07]/85 backdrop-blur-md">
      <a href="#contenido-principal" className="skip-link visually-hidden">
        Saltar al contenido principal
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        {/* Identificador Terminal */}
        <a
          href="#top"
          className="group inline-flex min-h-[44px] items-center gap-2.5 text-decoration-none"
        >
          <span
            className="pulse-dot-live inline-block h-2.5 w-2.5 rounded-full"
            aria-hidden="true"
          />
          <span className="font-mono text-xs font-semibold tracking-[0.12em] text-[#e6f7ef] sm:text-sm">
            SYS://SALVIA<span className="text-[#00ff88]">BIoT</span>
          </span>
          <span className="hidden rounded border border-[#00ff88]/30 bg-[#00ff88]/10 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-[#00ff88] md:inline-block">
            {SITE_CONFIG.version}
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-[40px] items-center rounded-md px-3 font-mono text-xs tracking-wider text-[#b7d7c8] transition-colors hover:bg-[#00ff88]/10 hover:text-[#00ff88]"
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
            className="inline-flex min-h-[40px] cursor-pointer items-center gap-1.5 rounded-md border border-[#00ff88]/45 bg-[#00ff88]/12 px-3.5 py-2 font-mono text-xs font-semibold tracking-wider text-[#00ff88] transition-colors hover:bg-[#00ff88] hover:text-[#02120a]"
          >
            <span>{SITE_CONFIG.platformName}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex min-h-[40px] min-w-[40px] cursor-pointer items-center justify-center rounded-md border border-[#00ff88]/25 bg-[#07140e] text-[#e6f7ef] lg:hidden"
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
          className="border-t border-[#00ff88]/15 bg-[#040f0a] px-4 py-3 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center rounded-md px-3 font-mono text-xs tracking-wider text-[#b7d7c8] transition-colors hover:bg-[#00ff88]/10 hover:text-[#00ff88]"
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
