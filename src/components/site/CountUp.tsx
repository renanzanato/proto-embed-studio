import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Final value, e.g. "+40", "100%", "3" */
  value: string;
  /** Animation length in ms — kept fast on purpose */
  duration?: number;
  /** Extra delay before starting, in ms */
  delay?: number;
  className?: string;
}

export function CountUp({ value, duration = 900, delay = 0, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  const match = /^(\+?)(\d+)(%?)$/.exec(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const target = Number.parseInt(match[2] ?? "0", 10);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target);
      return;
    }

    let timeoutId: number | undefined;
    let rafId: number | undefined;

    const cancel = () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
      }
    };

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // ease-out cubic: fast start, smooth landing
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * target));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          cancel();
          timeoutId = window.setTimeout(run, delay);
        } else {
          // Resets while out of view so the count replays on the way back
          cancel();
          setDisplay(0);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancel();
    };
    // match is derived from value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, delay]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {match[1]}
      {display}
      {match[3]}
    </span>
  );
}
