import type { CSSProperties, ReactNode } from "react";

type MilestoneLoopProps = {
  items: { key: string; node: ReactNode }[];
  /** mantido por compatibilidade — o auto-scroll foi removido */
  speed?: number;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
};

/**
 * Lista vertical estática de marcos. O scroll é controlado apenas pelo usuário
 * (rolagem do documento ou do container), sem animação automática.
 */
export function MilestoneLoop({
  items,
  gap = 44,
  ariaLabel = "Marcos históricos",
  className = "",
}: MilestoneLoopProps) {
  const style = { gap: `${gap}px` } as CSSProperties;

  return (
    <div className={`relative ${className}`} aria-label={ariaLabel} role="region">
      <div className="flex flex-col" style={style}>
        {items.map((item) => (
          <div key={item.key}>{item.node}</div>
        ))}
      </div>
    </div>
  );
}
