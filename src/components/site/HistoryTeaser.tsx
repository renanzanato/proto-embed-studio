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

        {/* 1981 + linha que atravessa a seção e sai da tela */}
        <div className="mt-8 flex items-center gap-5 sm:mt-10 sm:gap-8 lg:gap-10">
          <span
            className={`text-[clamp(76px,13vw,190px)] font-light leading-[0.9] tracking-[-0.02em] text-lbs-magenta transition-all duration-700 ease-out ${
              inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            1981
          </span>
          <div className="relative h-px flex-1">
            <div
              className={`h-px w-[calc(100%_+_50vw)] origin-left bg-lbs-magenta/70 transition-transform duration-[1300ms] ease-out ${
                inView ? "scale-x-100" : "scale-x-0"
              }`}
              style={{ transitionDelay: "250ms" }}
            />
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
