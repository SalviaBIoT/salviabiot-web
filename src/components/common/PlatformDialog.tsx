import { ArrowUpRight, Mail, ShieldCheck, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { SITE_CONFIG } from "../../data/ecosystem";

interface PlatformDialogProps {
  open: boolean;
  onClose: () => void;
}

export function PlatformDialog({ open, onClose }: PlatformDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="cyber-dialog"
      aria-labelledby="platform-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#10B981]/30 bg-[#0B1117] p-2">
              <img
                src="/brand/SalviaBIoT_Isotipo_Principal_Oscuro.svg"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#10B981] uppercase">
                PLATAFORMA CENTRAL
              </p>
              <h2
                id="platform-dialog-title"
                className="font-mono text-lg font-bold text-[#F8FAFC]"
              >
                {SITE_CONFIG.platformName}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de acceso"
            className="inline-flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#94A3B8] transition-colors hover:border-[#10B981] hover:text-[#F8FAFC]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-[#94A3B8]">
          <p>
            <strong className="text-[#F8FAFC]">{SITE_CONFIG.platformName}</strong>{" "}
            centraliza la telemetría en vivo de las estaciones{" "}
            <strong className="text-[#F8FAFC]">TRB · YKU · WYR · APU</strong>, la
            memoria histórica de <strong className="text-[#10B981]">Savia</strong>{" "}
            y las decisiones accionables de{" "}
            <strong className="text-[#F97316]">Mandarín</strong>.
          </p>

          <div className="rounded-xl border border-[#10B981]/25 bg-[#0B1117] p-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#10B981]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>ESTADO DE ACCESO</span>
            </div>
            <p className="mt-2 break-all text-[#F8FAFC]">
              {SITE_CONFIG.platformTargetUrl}
            </p>
            <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#94A3B8]">
              {SITE_CONFIG.platformLive
                ? "Plataforma en línea para usuarios y proyectos activos."
                : "Acceso habilitado para fincas piloto de la convocatoria Finca Zero, semilleros de investigación y aliados estratégicos."}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-white/[0.08] pt-5">
          <a
            href={`mailto:${SITE_CONFIG.emails.partnerships}?subject=Acceso%20piloto%20a%20${SITE_CONFIG.platformName}`}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#10B981]/35 bg-[#10B981]/10 px-4 py-2 font-mono text-xs font-semibold text-[#34D399] transition-colors hover:bg-[#10B981]/20"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Solicitar acceso piloto</span>
          </a>

          {SITE_CONFIG.platformLive && (
            <a
              href={SITE_CONFIG.platformTargetUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[#10B981] px-4 py-2 font-mono text-xs font-bold text-[#04130D] transition-colors hover:bg-[#34D399]"
            >
              <span>Entrar ahora</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
