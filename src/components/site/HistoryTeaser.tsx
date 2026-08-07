import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

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

        {/* 1981 + linha viva que atravessa a seção e segue adiante */}
        <div className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-8 lg:gap-10">
          <span className="text-[clamp(76px,13vw,190px)] font-light leading-[0.9] tracking-[-0.02em] text-lbs-magenta">
            1981
          </span>
          <div className="relative h-px flex-1">
            <div className="absolute left-0 top-1/2 h-6 w-[calc(100%_+_50vw)] -translate-y-1/2">
              <div className="lbs-history-line-base absolute inset-x-0 top-1/2 h-px -translate-y-1/2" />
              <div
                className={`lbs-history-line-comet absolute inset-y-0 left-0 ${
                  inView ? "is-running" : ""
                }`}
              />
            </div>
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
