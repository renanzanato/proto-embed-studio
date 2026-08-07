import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Tick = { left: string; opacity: number; label?: string };

/**
 * Os anos rotulados acabam em "hoje" — mas os traços continuam,
 * cada vez mais sutis, até sair da tela. A história não termina.
 */
const ticks: Tick[] = [
  { left: "10%", opacity: 0.6, label: "1991" },
  { left: "22%", opacity: 0.55, label: "2001" },
  { left: "34%", opacity: 0.5, label: "2011" },
  { left: "46%", opacity: 0.45, label: "2021" },
  { left: "52%", opacity: 0.75, label: "hoje" },
  { left: "64%", opacity: 0.3 },
  { left: "76%", opacity: 0.24 },
  { left: "88%", opacity: 0.18 },
  { left: "100%", opacity: 0.13 },
  { left: "112%", opacity: 0.09 },
  { left: "124%", opacity: 0.05 },
];

export function HistoryTeaser() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div
        ref={ref}
        className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8"
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
          Nossa história
        </p>

        {/* 1981 + linha que atravessa a seção, se dissolve e sai da tela */}
        <div className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-8 lg:gap-10">
          <span
            className={`text-[clamp(76px,13vw,190px)] font-light leading-[0.9] tracking-[-0.02em] text-lbs-magenta transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            1981
          </span>
          <div className="relative h-px flex-1">
            {/* linha que se dissolve além da tela */}
            <div
              className={`h-px w-[calc(100%_+_50vw)] origin-left transition-transform duration-[1300ms] ease-out ${
                inView ? "scale-x-100" : "scale-x-0"
              }`}
              style={{
                transitionDelay: "250ms",
                background:
                  "linear-gradient(to right, var(--lbs-magenta) 0%, color-mix(in oklab, var(--lbs-magenta) 70%, transparent) 30%, color-mix(in oklab, var(--lbs-magenta) 32%, transparent) 55%, transparent 78%)",
              }}
            />

            {/* marcos das décadas — os anos acabam, a linha não */}
            {ticks.map((tick, index) => (
              <div
                key={tick.label ?? `futuro-${index}`}
                className="absolute top-1/2 -translate-y-1/2 transition-opacity duration-700 ease-out"
                style={{
                  left: tick.left,
                  opacity: inView ? tick.opacity : 0,
                  transitionDelay: `${900 + index * 90}ms`,
                }}
              >
                <div
                  className={`w-px -translate-x-1/2 bg-lbs-magenta ${
                    tick.label ? "h-[9px]" : "h-[7px]"
                  }`}
                />
                {tick.label && (
                  <span
                    className={`absolute left-0 top-[14px] hidden -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.16em] sm:block ${
                      tick.label === "hoje"
                        ? "text-lbs-magenta"
                        : "text-lbs-ink/50"
                    }`}
                  >
                    {tick.label}
                  </span>
                )}
              </div>
            ))}

            {/* pulso que percorre a linha e sai da tela, em loop */}
            {inView && (
              <div className="lbs-history-pulse pointer-events-none absolute -top-[2px] left-0 h-[5px] w-14">
                <div
                  className="h-full w-full rounded-full blur-[3px]"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, color-mix(in oklab, var(--lbs-magenta) 85%, transparent))",
                  }}
                />
                <div
                  className="absolute right-0 top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-lbs-magenta"
                  style={{
                    boxShadow:
                      "0 0 14px 3px color-mix(in oklab, var(--lbs-magenta) 65%, transparent)",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <p
          className={`mt-10 max-w-[520px] text-[15px] leading-[1.8] text-lbs-ink/80 transition-all duration-700 ease-out sm:mt-12 sm:text-[16px] ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          São quatro décadas dedicadas à construção de soluções jurídicas de
          alto impacto na defesa de quem trabalha e dos direitos humanos.
        </p>

        <Link
          to="/a-lbs/historia"
          className={`group mt-8 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-lbs-magenta transition-all duration-700 ease-out hover:opacity-75 sm:text-[13px] ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Ver nossa história
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            strokeWidth={2.5}
          />
        </Link>
      </div>
    </section>
  );
}
