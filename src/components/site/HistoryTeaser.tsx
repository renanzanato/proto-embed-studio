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

        {/* 1981 + linha viva que atravessa a seção e sai da tela */}
        <div className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-8 lg:gap-10">
          <span className="text-[clamp(76px,13vw,190px)] font-light leading-[0.9] tracking-[-0.02em] text-lbs-magenta">
            1981
          </span>
          <div className="relative h-px flex-1">
            {/* linha contínua; somente a espessura em movimento é animada */}
            <div
              className="absolute left-0 top-1/2 h-6 w-[calc(100%_+_50vw)] -translate-y-1/2"
            >
              <div className="lbs-history-line-base absolute inset-x-0 top-1/2 h-px -translate-y-1/2" />
              <div
                className={`lbs-history-line-comet absolute inset-y-0 left-0 w-[38%] ${
                  inView ? "is-running" : ""
                }`}
              />
            </div>

            {/* marcos das décadas — os anos acabam, a linha não */}
            {ticks.map((tick, index) => (
              <div
                key={tick.label ?? `futuro-${index}`}
                className="absolute top-1/2 -translate-y-1/2"
                style={{
                  left: tick.left,
                  opacity: tick.opacity,
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
          </div>
        </div>

        <p className="mt-10 max-w-[520px] text-[15px] leading-[1.8] text-lbs-ink/80 sm:mt-12 sm:text-[16px]">
          São quatro décadas dedicadas à construção de soluções jurídicas de
          alto impacto na defesa de quem trabalha e dos direitos humanos.
        </p>

        <Link
          to="/a-lbs/historia"
          className="group mt-8 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-lbs-magenta transition-opacity duration-300 hover:opacity-75 sm:text-[13px]"
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
