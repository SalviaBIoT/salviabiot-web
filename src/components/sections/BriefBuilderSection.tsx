import { Check, Copy, Mail, MessageSquare, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { SITE_CONFIG } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

const PROJECT_TYPES = [
  "Agricultura Regenerativa",
  "Conservación / Páramo",
  "Investigación / Semillero",
  "Alianza Institucional",
] as const;

const DOMAIN_OPTIONS = [
  "TRB · TerraBit (Suelo)",
  "YKU · Yaku (Agua)",
  "WYR · Wayra (Aire)",
  "APU · Apu (Alta Montaña)",
  "Savia & Mandarín (IA)",
] as const;

const CONNECTIVITY_OPTIONS = [
  "Wi-Fi / Celular 4G",
  "Sin señal (Store & Forward)",
  "Por evaluar en campo",
] as const;

const SCALE_OPTIONS = [
  "1–2 nodos (Piloto)",
  "3–10 nodos",
  "+10 nodos / Red territorial",
] as const;

export function BriefBuilderSection() {
  const [projectType, setProjectType] = useState<string>(PROJECT_TYPES[0]);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [domains, setDomains] = useState<string[]>([
    "TRB · TerraBit (Suelo)",
    "Savia & Mandarín (IA)",
  ]);
  const [connectivity, setConnectivity] = useState<string>(
    CONNECTIVITY_OPTIONS[0],
  );
  const [scale, setScale] = useState<string>(SCALE_OPTIONS[0]);
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleDomain = (item: string) => {
    setDomains((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item],
    );
  };

  const briefText = useMemo(() => {
    const lines = [
      "[BRIEF_SALVIABIOT_V1]",
      `• Tipo de proyecto: ${projectType}`,
      `• Responsable: ${name.trim() || "Por definir"}`,
      `• Organización / Finca: ${organization.trim() || "Por definir"}`,
      `• Territorio / Altitud: ${location.trim() || "Por definir"}`,
      `• Contacto de retorno: ${contact.trim() || "Por definir"}`,
      `• Capas de interés: ${domains.length > 0 ? domains.join(", ") : "Por definir"}`,
      `• Conectividad en zona: ${connectivity}`,
      `• Escala estimada: ${scale}`,
    ];
    if (notes.trim()) {
      lines.push(`• Contexto / Reto: ${notes.trim()}`);
    }
    lines.push("— Generado desde salviabiot.com");
    return lines.join("\n");
  }, [
    projectType,
    name,
    organization,
    location,
    contact,
    domains,
    connectivity,
    scale,
    notes,
  ]);

  const mailtoHref = useMemo(() => {
    const subject = `[Brief SalviaBIoT] ${projectType}${
      organization.trim() ? ` · ${organization.trim()}` : ""
    }`;
    return `mailto:${SITE_CONFIG.emails.partnerships}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(briefText)}`;
  }, [projectType, organization, briefText]);

  const whatsappHref = useMemo(() => {
    const cleanNum = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
    if (!cleanNum) return "";
    return `https://wa.me/${cleanNum}?text=${encodeURIComponent(briefText)}`;
  }, [briefText]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(briefText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="brief" className="scroll-reveal scroll-mt-24 py-12">
      <SectionHeader
        code="// 07"
        title="Solicitar Piloto o Alianza · Generador de Brief"
        subtitle="Estructura los requerimientos de tu territorio o proyecto en menos de 60 segundos y envíalo directo a nuestro equipo."
      />

      <div className="bio-panel-savia rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Formulario interactivo */}
          <div className="space-y-6 lg:col-span-7">
            {/* Tipo de proyecto */}
            <div>
              <span className="block font-mono text-xs font-semibold tracking-wider text-[#10B981] uppercase">
                1. Tipo de proyecto
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {PROJECT_TYPES.map((type) => {
                  const active = projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`cursor-pointer rounded-xl border px-3.5 py-2 text-xs font-medium transition-all ${
                        active
                          ? "border-[#10B981] bg-[#10B981]/15 text-[#34D399]"
                          : "border-white/[0.1] bg-[#0B1117]/70 text-[#CBD5E1] hover:border-white/25"
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Datos base */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="brief-name"
                  className="block font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase"
                >
                  Nombre completo
                </label>
                <input
                  id="brief-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Laura Gómez"
                  className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#0B1117]/90 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#10B981] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="brief-org"
                  className="block font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase"
                >
                  Organización / Finca / Entidad
                </label>
                <input
                  id="brief-org"
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Ej. Finca La Esperanza / UTP"
                  className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#0B1117]/90 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#10B981] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="brief-location"
                  className="block font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase"
                >
                  Territorio / Altitud (msnm)
                </label>
                <input
                  id="brief-location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ej. Pereira, Risaralda · 1.800 msnm"
                  className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#0B1117]/90 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#10B981] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="brief-contact"
                  className="block font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase"
                >
                  Correo o WhatsApp de retorno
                </label>
                <input
                  id="brief-contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Ej. laura@entidad.org"
                  className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#0B1117]/90 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#10B981] focus:outline-none"
                />
              </div>
            </div>

            {/* Módulos / Variables */}
            <div>
              <span className="block font-mono text-xs font-semibold tracking-wider text-[#10B981] uppercase">
                2. Estaciones y capas de interés
              </span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {DOMAIN_OPTIONS.map((item) => {
                  const active = domains.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleDomain(item)}
                      className={`cursor-pointer rounded-xl border px-3 py-1.5 font-mono text-xs transition-all ${
                        active
                          ? "border-[#34D399] bg-[#10B981]/15 text-[#F8FAFC]"
                          : "border-white/[0.1] bg-[#0B1117]/70 text-[#94A3B8] hover:border-white/25"
                      }`}
                    >
                      {active ? "✓ " : "+ "}
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Conectividad y Escala */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <span className="block font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase">
                  Conectividad en sitio
                </span>
                <div className="mt-2 flex flex-col gap-1.5">
                  {CONNECTIVITY_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setConnectivity(opt)}
                      className={`cursor-pointer rounded-lg border px-3 py-2 text-left text-xs transition-all ${
                        connectivity === opt
                          ? "border-[#38BDF8] bg-[#38BDF8]/10 text-[#F8FAFC]"
                          : "border-white/[0.08] bg-[#0B1117]/60 text-[#94A3B8] hover:border-white/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="block font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase">
                  Escala estimada
                </span>
                <div className="mt-2 flex flex-col gap-1.5">
                  {SCALE_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setScale(opt)}
                      className={`cursor-pointer rounded-lg border px-3 py-2 text-left text-xs transition-all ${
                        scale === opt
                          ? "border-[#F97316] bg-[#F97316]/10 text-[#F8FAFC]"
                          : "border-white/[0.08] bg-[#0B1117]/60 text-[#94A3B8] hover:border-white/20"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Notas */}
            <div>
              <label
                htmlFor="brief-notes"
                className="block font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase"
              >
                Contexto adicional o reto principal (opcional)
              </label>
              <textarea
                id="brief-notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ej. Necesitamos vigilar humedad de suelo en época seca y alertas tempranas para equipo de campo."
                className="mt-1.5 w-full rounded-xl border border-white/[0.1] bg-[#0B1117]/90 px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:border-[#10B981] focus:outline-none"
              />
            </div>
          </div>

          {/* Vista previa en vivo del Brief y Salidas */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B1117]/95 p-5 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#10B981]">
                  <Send className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>VISTA PREVIA DEL BRIEF</span>
                </span>
                <span className="rounded bg-[#10B981]/15 px-2 py-0.5 font-mono text-[10px] text-[#34D399]">
                  EN VIVO
                </span>
              </div>

              <pre className="mt-4 overflow-x-auto whitespace-pre-wrap font-mono text-xs leading-relaxed text-[#CBD5E1]">
                {briefText}
              </pre>
            </div>

            <div className="mt-6 space-y-2.5 border-t border-white/[0.08] pt-4">
              <a
                href={mailtoHref}
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#10B981] px-4 py-2.5 font-mono text-xs font-bold tracking-wider text-[#04130D] uppercase transition-all hover:-translate-y-0.5 hover:bg-[#34D399]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Enviar Brief por Correo</span>
              </a>

              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-[#10B981]/40 bg-[#10B981]/10 px-4 py-2.5 font-mono text-xs font-semibold tracking-wider text-[#34D399] uppercase transition-colors hover:bg-[#10B981]/20"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar por WhatsApp</span>
                </a>
              )}

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-[40px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 py-2 font-mono text-xs font-semibold text-[#CBD5E1] transition-colors hover:border-white/25 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#10B981]" aria-hidden="true" />
                    <span className="text-[#34D399]">¡Brief copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copiar Brief</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
