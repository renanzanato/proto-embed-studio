import type { CSSProperties, ReactNode } from "react";

type MilestoneLoopProps = {
  items: { key: string; node: ReactNode }[];
  /** pixels per second */
  speed?: number;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
};

export function MilestoneLoop({
  items,
  speed = 40,
  gap = 44,
  fadeOut = true,
  fadeOutColor = "#ffffff",
  ariaLabel = "Marcos históricos",
  className = "",
}: MilestoneLoopProps) {
  const duration = Math.max(14, (items.length * 220) / speed);
  const loopStyle = {
    "--milestone-loop-duration": `${duration}s`,
    "--milestone-loop-gap": `${gap}px`,
    "--milestone-fade-color": fadeOutColor,
  } as CSSProperties;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-label={ariaLabel}
      role="region"
      style={loopStyle}
    >
      <div className="milestone-loop-track">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="milestone-loop-copy"
          >
            <div className="milestone-loop-list">
              {items.map((item) => (
                <div key={`${copy}-${item.key}`}>{item.node}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {fadeOut && (
        <>
          <div className="milestone-loop-fade milestone-loop-fade-top" />
          <div className="milestone-loop-fade milestone-loop-fade-bottom" />
        </>
      )}
    </div>
  );
}
