interface SectionHeaderProps {
  code: string;
  title: string;
  accent?: "emerald" | "mandarin";
  id?: string;
}

export function SectionHeader({
  code,
  title,
  accent = "emerald",
  id,
}: SectionHeaderProps) {
  const accentColor =
    accent === "mandarin" ? "text-[#ff8c32]" : "text-[#00ff88]";
  const lineGradient =
    accent === "mandarin"
      ? "from-[#f97316]/50 to-transparent"
      : "from-[#00ff88]/40 to-transparent";

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <span
        className={`font-mono text-xs font-semibold tracking-[0.16em] uppercase ${accentColor}`}
      >
        {code}
      </span>
      <h2
        id={id}
        className="font-mono text-lg font-bold tracking-[0.06em] text-[#e6f7ef] uppercase sm:text-xl"
      >
        {title}
      </h2>
      <div
        className={`h-px min-w-[60px] flex-1 bg-gradient-to-r ${lineGradient}`}
        aria-hidden="true"
      />
    </div>
  );
}
