import { useEffect, useState } from "react";

export type AgentVisualState = "idle" | "thinking" | "happy";

export interface SaviaAvatarProps {
  size?: "md" | "lg";
  state?: AgentVisualState;
  motionPaused?: boolean;
  className?: string;
}

const WIDGET_DIMS: Record<NonNullable<SaviaAvatarProps["size"]>, { box: string; char: string }> = {
  md: { box: "h-44 w-44 sm:h-48 sm:w-48", char: "w-[118px] sm:w-[128px]" },
  lg: { box: "h-56 w-56 sm:h-64 sm:w-64", char: "w-[152px] sm:w-[172px]" },
};

export function SaviaAvatar({
  size = "lg",
  state = "idle",
  motionPaused = false,
  className = "",
}: SaviaAvatarProps) {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (motionPaused || state === "happy") {
      setBlinking(false);
      return;
    }

    let timeoutId: number | undefined;
    const intervalId = window.setInterval(() => {
      setBlinking(true);
      timeoutId = window.setTimeout(() => {
        setBlinking(false);
      }, 220);
    }, 4600);

    return () => {
      window.clearInterval(intervalId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [motionPaused, state]);

  const dims = WIDGET_DIMS[size];
  const isThinking = state === "thinking";
  const showClosedEyes = state === "happy" || blinking;

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${dims.box} ${className}`}
      style={{
        background:
          "radial-gradient(circle at 50% 48%, #072E3B 0%, #091B24 62%, #0B1117 100%)",
        boxShadow: "0 0 48px rgba(16, 185, 129, 0.16)",
      }}
      aria-hidden="true"
    >
      {/* Anillo exterior oceánico (Yaku) */}
      <span
        className={`pointer-events-none absolute inset-1.5 rounded-full border-[1.5px] border-dashed transition-colors duration-300 ${
          isThinking
            ? "agent-ring-outer-fast border-[#38BDF8]/85"
            : "agent-ring-outer border-[#38BDF8]/45"
        }`}
      />

      {/* Anillo interior esmeralda (Savia) / solar (INTI) al pensar */}
      <span
        className={`pointer-events-none absolute inset-5 rounded-full border-[1.5px] border-dashed transition-colors duration-300 ${
          isThinking
            ? "agent-ring-inner-fast border-[#FACC15]/85"
            : "agent-ring-inner border-[#10B981]/65"
        }`}
      />

      {/* Escenario del personaje con proporción exacta 552:527 */}
      <div className={`relative aspect-[552/527] ${dims.char}`}>
        <img
          src="/brand/agents/Savia_Personaje_Base_Alfa.png"
          alt=""
          width={552}
          height={527}
          className="block h-full w-full select-none object-contain pointer-events-none"
        />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 552 527"
        >
          <g opacity={showClosedEyes ? 1 : 0}>
            <rect x="178" y="263" width="86" height="67" rx="18" fill="#245FC5" />
            <rect x="286" y="263" width="86" height="67" rx="18" fill="#245FC5" />
            <path
              d="M198 302 Q223 282 248 302"
              stroke="#352620"
              strokeWidth="6.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M198 299 L188 292 M199 305 L190 303"
              stroke="#352620"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            <path
              d="M303 302 Q328 282 353 302"
              stroke="#352620"
              strokeWidth="6.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M353 299 L363 292 M352 305 L361 303"
              stroke="#352620"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
