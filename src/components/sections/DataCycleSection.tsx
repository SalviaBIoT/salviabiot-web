import { DATA_CYCLE_STEPS } from "../../data/ecosystem";
import { SectionHeader } from "../common/SectionHeader";

export function DataCycleSection() {
  return (
    <section id="ciclo-dato" className="scroll-reveal scroll-mt-24 py-14">
      <SectionHeader
        code="// 03"
        title="Ciclo Vital del Dato · De la Raíz al Fruto"
      />

      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {DATA_CYCLE_STEPS.map((item) => (
          <li
            key={item.step}
            className="cyber-panel relative flex flex-col rounded-xl p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-2xl font-extrabold text-[#00ff88]/90">
                {item.step}
              </span>
              <span className="rounded border border-[#00ff88]/25 bg-[#00ff88]/8 px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#b7d7c8]">
                {item.layer}
              </span>
            </div>

            <h3 className="text-base font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#84a596]">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
