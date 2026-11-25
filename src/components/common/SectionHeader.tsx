interface SectionHeaderProps {
  code: string;
  title: string;
  subtitle?: string;
  accent?: "emerald" | "mandarin" | "earth" | "yaku";
  id?: string;
}

const ACCENT_MAP: Record<
  NonNullable<SectionHeaderProps["accent"]>,
  { code: string; line: string }
> = {
  emerald: {
    code: "text-[#10B981]",
    line: "from-[#10B981]/40 to-transparent",
  },
  mandarin: {
    code: "text-[#F97316]",
    line: "from-[#F97316]/45 to-transparent",
  },
  earth: {
    code: "text-[#AD703B]",
    line: "from-[#AD703B]/45 to-transparent",
  },
  yaku: {
    code: "text-[#38BDF8]",
    line: "from-[#38BDF8]/40 to-transparent",
  },
};

export function SectionHeader({
  code,
  title,
  subtitle,
  accent = "emerald",
  id,
}: SectionHeaderProps) {
  const style = ACCENT_MAP[accent];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`font-mono text-xs font-semibold tracking-[0.16em] uppercase ${style.code}`}
        >
          {code}
        </span>
        <h2
          id={id}
          className="font-display text-2xl font-bold tracking-tight text-[#F8FAFC] sm:text-3xl"
        >
          {title}
        </h2>
        <div
          className={`h-px min-w-[60px] flex-1 bg-gradient-to-r ${style.line}`}
          aria-hidden="true"
        />
      </div>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-[#94A3B8] sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
