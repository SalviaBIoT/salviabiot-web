import { ArrowUpRight, Mail, ShieldCheck, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { SITE_CONFIG } from "../../data/ecosystem";
import { MandarinoAvatar } from "./MandarinoAvatar";

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
        <div className="flex items-start justify-between gap-4 border-b border-[#00ff88]/20 pb-4">
          <div className="flex items-center gap-3">
            <MandarinoAvatar size="sm" flotar={false} />
            <div>
              <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#00ff88] uppercase">
                PLATAFORMA CENTRAL
              </p>
              <h2
                id="platform-dialog-title"
                className="font-mono text-lg font-bold text-white"
              >
                {SITE_CONFIG.platformName}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ventana de acceso"
            className="inline-flex min-h-[38px] min-w-[38px] cursor-pointer items-center justify-center rounded-md border border-white/15 bg-white/5 text-[#b7d7c8] transition-colors hover:border-[#00ff88] hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm text-[#b7d7c8]">
          <p>
            <strong>{SITE_CONFIG.platformName}</strong> es nuestro centro
            operativo de monitoreo en tiempo real para estaciones{" "}
            <strong>TerraBit</strong>, análisis histórico con{" "}
            <strong>Savia</strong> y alertas asistidas por{" "}
            <strong>Mandarín</strong>.
          </p>

          <div className="rounded-lg border border-[#00ff88]/25 bg-[#030b07] p-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#00ff88]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>ESTADO DE ACCESO</span>
            </div>
            <p className="mt-2 break-all text-[#e6f7ef]">
              {SITE_CONFIG.platformTargetUrl}
            </p>
            <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#84a596]">
              {SITE_CONFIG.platformLive
                ? "Plataforma en línea para usuarios y proyectos activos."
                : "En refinamiento activo para despliegue público. Actualmente disponible mediante acceso anticipado para pilotos y aliados estratégicos."}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
          <a
            href={`mailto:${SITE_CONFIG.emails.partnerships}?subject=Acceso%20piloto%20a%20${SITE_CONFIG.platformName}`}
            className="inline-flex min-h-[42px] items-center gap-2 rounded-md border border-[#00ff88]/35 bg-[#00ff88]/10 px-4 py-2 font-mono text-xs font-semibold text-[#00ff88] transition-colors hover:bg-[#00ff88]/20"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Solicitar acceso piloto</span>
          </a>

          {SITE_CONFIG.platformLive && (
            <a
              href={SITE_CONFIG.platformTargetUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[42px] items-center gap-2 rounded-md bg-[#00ff88] px-4 py-2 font-mono text-xs font-bold text-[#02120a]"
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
