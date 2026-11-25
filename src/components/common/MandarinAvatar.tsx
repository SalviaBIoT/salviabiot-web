import { useEffect, useState } from "react";
import type { AgentVisualState } from "./SaviaAvatar";

export interface MandarinAvatarProps {
  size?: "sm" | "md" | "lg";
  state?: AgentVisualState;
  motionPaused?: boolean;
  className?: string;
}

const WIDGET_DIMS: Record<NonNullable<MandarinAvatarProps["size"]>, { box: string; char: string }> = {
  sm: { box: "h-20 w-20", char: "w-[36px]" },
  md: { box: "h-44 w-44 sm:h-48 sm:w-48", char: "w-[78px] sm:w-[86px]" },
  lg: { box: "h-56 w-56 sm:h-64 sm:w-64", char: "w-[100px] sm:w-[114px]" },
};

export function MandarinAvatar({
  size = "lg",
  state = "idle",
  motionPaused = false,
  className = "",
}: MandarinAvatarProps) {
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    if (motionPaused || state === "happy") {
      setBlinking(false);
      return;
    }

    let step = 0;
    const timers: number[] = [];

    const triggerBlink = (doubleBlink: boolean) => {
      setBlinking(true);
      timers.push(
        window.setTimeout(() => {
          setBlinking(false);
          if (doubleBlink) {
            timers.push(
              window.setTimeout(() => {
                setBlinking(true);
                timers.push(
                  window.setTimeout(() => {
                    setBlinking(false);
                  }, 130)
                );
              }, 140)
            );
          }
        }, 140)
      );
    };

    const intervalId = window.setInterval(() => {
      step += 1;
      triggerBlink(step % 2 === 0);
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [motionPaused, state]);

  const dims = WIDGET_DIMS[size];
  const isThinking = state === "thinking";
  const isHappy = state === "happy";
  const showClosedEyes = isHappy || blinking;

  const outerRingColor = isThinking
    ? "agent-ring-outer-fast border-[#F97316]/75"
    : isHappy
      ? "agent-ring-outer border-[#10B981]/80"
      : "agent-ring-outer border-[#10B981]/38";

  const innerRingColor = isThinking
    ? "agent-ring-inner-fast border-[#FACC15]/85"
    : "agent-ring-inner border-[#F97316]/65";

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full ${dims.box} ${className}`}
      style={{
        background:
          "radial-gradient(circle at 50% 48%, #41210C 0%, #1B1109 62%, #0E0B09 100%)",
        boxShadow: "0 0 48px rgba(249, 115, 22, 0.16)",
      }}
      aria-hidden="true"
    >
      {/* Anillo exterior esmeralda */}
      <span
        className={`pointer-events-none absolute ${
          size === "sm" ? "inset-0.5" : "inset-1.5"
        } rounded-full border-[1.5px] border-dashed transition-colors duration-300 ${outerRingColor}`}
      />

      {/* Anillo interior mandarina / solar al pensar */}
      {size !== "sm" && (
        <span
          className={`pointer-events-none absolute inset-5 rounded-full border-[1.5px] border-dashed transition-colors duration-300 ${innerRingColor}`}
        />
      )}

      {/* Escenario del personaje con proporción exacta 347:545 */}
      <div className={`relative aspect-[347/545] ${dims.char}`}>
        <img
          src="/brand/agents/Mandarin_Personaje_Base_Alfa.png"
          alt=""
          width={347}
          height={545}
          className="block h-full w-full select-none object-contain pointer-events-none"
        />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 347 545"
        >
          <g opacity={showClosedEyes ? 1 : 0}>
            <ellipse cx="131" cy="435" rx="16.5" ry="14" fill="#C8D1D8" />
            <ellipse cx="216" cy="435" rx="16.5" ry="14" fill="#C8D1D8" />
            <path
              d="M119 436 Q131 426 143 436"
              stroke="#352620"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M204 436 Q216 426 228 436"
              stroke="#352620"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
