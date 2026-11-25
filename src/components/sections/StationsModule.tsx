import { CheckCircle2, Cpu, MapPin, Shield } from "lucide-react";
import { useState } from "react";
import { STATIONS, type StationId } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

export function StationsModule() {
  const [selectedId, setSelectedId] = useState<StationId>("trb");
  const activeStation =
    STATIONS.find((station) => station.id === selectedId) ?? STATIONS[0];

  return (
    <section id="estaciones" className="scroll-reveal scroll-mt-24 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <SectionHeader
            code="// 02"
            title="Estaciones Modulares de Hardware"
            subtitle="Familia industrial Bloque B sobre una misma placa base inteligente."
            accent="earth"
          />
        </div>

        <div className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#FACC15]/35 bg-[#111922] px-4 py-2 font-mono text-xs font-semibold text-[#FACC15] sm:mb-8">
          <Cpu className="h-4 w-4" aria-hidden="true" />
          <span>Placa Base Única · ESP32-S3 + Savia Link</span>
        </div>
      </div>

      {/* Selector Interactivo de 4 Tabs (Bloque B) */}
      <div
        role="tablist"
        aria-label="Estaciones modulares SalviaBIoT"
        className="grid grid-cols-2 gap-3 sm:grid-cols-4"
      >
        {STATIONS.map((station) => {
          const isActive = station.id === activeStation.id;
          return (
            <button
              key={station.id}
              id={`tab-station-${station.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-station-${station.id}`}
              onClick={() => setSelectedId(station.id)}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all"
              style={{
                backgroundColor: isActive
                  ? "rgba(22, 32, 43, 0.96)"
                  : "rgba(17, 25, 34, 0.68)",
                borderColor: isActive
                  ? station.accentHex
                  : "rgba(255, 255, 255, 0.08)",
                boxShadow: isActive
                  ? `0 0 28px ${station.accentHex}24`
                  : "none",
              }}
            >
              <img
                src={station.svgPath}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 shrink-0 object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="min-w-0">
                <span
                  className="block font-mono text-[11px] font-bold tracking-wider"
                  style={{
                    color: isActive ? station.accentBrightHex : "#94A3B8",
                  }}
                >
                  {station.code}
                </span>
                <span className="block truncate font-display text-sm font-bold text-[#F8FAFC]">
                  {station.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Ficha Spotlight de la Estación Activa */}
      <div
        id={`panel-station-${activeStation.id}`}
        role="tabpanel"
        aria-labelledby={`tab-station-${activeStation.id}`}
        className="mt-5 rounded-3xl border bg-[#111922]/90 p-6 transition-colors duration-300 sm:p-8"
        style={{
          borderColor: `${activeStation.accentHex}55`,
          backgroundImage: `radial-gradient(circle at 12% 20%, ${activeStation.accentHex}16 0%, transparent 52%)`,
        }}
      >
        <div className="grid items-center gap-8 lg:grid-cols-12">
          {/* Identidad Hexagonal + Resumen */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-5">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border bg-[#0B1117] p-3"
                style={{ borderColor: `${activeStation.accentHex}45` }}
              >
                <img
                  src={activeStation.svgPath}
                  alt={`Isotipo hexagonal ${activeStation.code} ${activeStation.name}`}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <span
                  className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-mono text-[11px] font-bold tracking-wider uppercase"
                  style={{
                    borderColor: `${activeStation.accentHex}50`,
                    backgroundColor: `${activeStation.accentHex}1A`,
                    color: activeStation.accentBrightHex,
                  }}
                >
                  {activeStation.code} · {activeStation.biomeBadge}
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-[#F8FAFC] sm:text-3xl">
                  {activeStation.name}
                </h3>
                <p
                  className="font-mono text-xs font-medium"
                  style={{ color: activeStation.accentBrightHex }}
                >
                  {activeStation.domain}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-[#CBD5E1] sm:text-base">
              {activeStation.summary}
            </p>

            <div className="mt-5 rounded-xl border border-white/[0.08] bg-[#0B1117]/90 p-4">
              <p className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase">
                <MapPin
                  className="h-3.5 w-3.5"
                  style={{ color: activeStation.accentBrightHex }}
                  aria-hidden="true"
                />
                <span>Aplicación en Territorio</span>
              </p>
              <p className="mt-1.5 text-sm text-[#F8FAFC]">
                {activeStation.application}
              </p>
            </div>
          </div>

          {/* Especificaciones Técnicas */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0B1117]/85 p-5">
              <p
                className="font-mono text-xs font-bold tracking-wider uppercase"
                style={{ color: activeStation.accentBrightHex }}
              >
                Variables &amp; Capacidades
              </p>
              <ul className="mt-4 space-y-3">
                {activeStation.variables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#CBD5E1]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: activeStation.accentBrightHex }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0B1117]/85 p-5">
              <p className="inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-[#FACC15] uppercase">
                <Shield className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Ingeniería de Borde</span>
              </p>
              <ul className="mt-4 space-y-3">
                {activeStation.engineering.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#CBD5E1]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
