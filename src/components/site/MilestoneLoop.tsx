import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

type MilestoneLoopProps = {
  items: { key: string; node: ReactNode }[];
  /** pixels per second */
  speed?: number;
  /** speed while hovering (0 = pause) */
  hoverSpeed?: number;
  gap?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  ariaLabel?: string;
  className?: string;
};

export function MilestoneLoop({
  items,
  speed = 40,
  hoverSpeed = 0,
  gap = 44,
  fadeOut = true,
  fadeOutColor = "#ffffff",
  ariaLabel = "Marcos históricos",
  className = "",
}: MilestoneLoopProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const hoverRef = useRef(false);
  const [loopHeight, setLoopHeight] = useState(0);

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const measure = () => setLoopHeight(el.offsetHeight + gap);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [gap, items]);

  useEffect(() => {
    offsetRef.current = 0;
  }, [items]);

  useEffect(() => {
    if (!loopHeight) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const current = hoverRef.current ? hoverSpeed : speed;
      offsetRef.current = (offsetRef.current + current * dt) % loopHeight;
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(0, ${-offsetRef.current}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [loopHeight, speed, hoverSpeed]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-label={ariaLabel}
      role="region"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
      onFocus={() => (hoverRef.current = true)}
      onBlur={() => (hoverRef.current = false)}
    >
      <div ref={trackRef} className="will-change-transform">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? listRef : undefined}
            aria-hidden={copy === 1}
            style={{ paddingBottom: gap }}
          >
            <div className="flex flex-col" style={{ gap }}>
              {items.map((item) => (
                <div key={`${copy}-${item.key}`}>{item.node}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16"
            style={{ background: `linear-gradient(to bottom, ${fadeOutColor}, transparent)` }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
            style={{ background: `linear-gradient(to top, ${fadeOutColor}, transparent)` }}
          />
        </>
      )}
    </div>
  );
}
