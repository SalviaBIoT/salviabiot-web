import mandarinoImg from "../../assets/mandarino-avatar.png";

export interface MandarinoAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  pensando?: boolean;
  flotar?: boolean;
  showOuterOrbit?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<MandarinoAvatarProps["size"]>, string> = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-24 w-24",
  xl: "h-32 w-32 sm:h-40 sm:w-40",
};

export function MandarinoAvatar({
  size = "md",
  pensando = false,
  flotar = true,
  showOuterOrbit = false,
  className = "",
}: MandarinoAvatarProps) {
  const dim = SIZE_CLASSES[size];

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${dim} ${className}`}
      aria-hidden="true"
    >
      {/* Halo naranja cálido de Mandarín */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-full ${
          size === "xl" || size === "lg"
            ? "bg-[radial-gradient(circle,rgba(249,115,22,0.34)_0%,rgba(249,115,22,0.09)_55%,transparent_76%)]"
            : "bg-[radial-gradient(circle,rgba(249,115,22,0.25)_0%,transparent_72%)]"
        }`}
      />

      {/* Órbita exterior cyberpunk opcional */}
      {showOuterOrbit && (
        <span className="mandarino-ring-outer pointer-events-none absolute -inset-3 rounded-full border border-dotted border-[#00ff88]/30" />
      )}

      {/* Anillo orbital discontinuo de Mandarín */}
      {(pensando || size === "lg" || size === "xl") && (
        <span
          className={`pointer-events-none absolute inset-0 rounded-full border border-dashed ${
            pensando
              ? "mandarino-ring-fast border-[#f97316]"
              : "mandarino-ring border-[#fb923c]/60"
          }`}
        />
      )}

      {/* Avatar oficial de Mandarín */}
      <img
        src={mandarinoImg}
        alt=""
        width={160}
        height={160}
        className={`relative h-[86%] w-[86%] select-none object-contain ${
          flotar || size === "xl" ? "mandarino-sway" : ""
        }`}
      />
    </div>
  );
}
