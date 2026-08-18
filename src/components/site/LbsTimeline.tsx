import { useMemo, useRef, useState } from "react";

import { timelineEvents } from "@/data/lbs-timeline";

type Phase = { label: string; min: number; max: number };

const phases: Phase[] = [
  { label: "Fundação · 1981 – 1995", min: 1981, max: 1995 },
  { label: "A criação da LBS · 2013 – 2016", min: 2013, max: 2016 },
  { label: "Resistência e consolidação · 2017 – 2019", min: 2017, max: 2019 },
  { label: "Pandemia e debate público · 2020 – 2021", min: 2020, max: 2021 },
  { label: "Produção e internacionalização · 2022 – 2023", min: 2022, max: 2023 },
  { label: "Agenda internacional · 2024 – 2026", min: 2024, max: 2100 },
];

function countFor(phase: Phase) {
  return timelineEvents.filter(
    (event) => event.year >= phase.min && event.year <= phase.max,
  ).length;
}

export function LbsTimeline({ showHeading = true }: { showHeading?: boolean }) {
  const [active, setActive] = useState<string>(phases[0].label);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const phase = phases.find((item) => item.label === active) ?? phases[0];

  const years = useMemo(() => {
    const filtered = timelineEvents.filter(
      (event) => event.year >= phase.min && event.year <= phase.max,
    );
    const map = new Map<number, typeof filtered>();
    for (const event of filtered) {
      const list = map.get(event.year) ?? [];
      list.push(event);
      map.set(event.year, list);
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [phase]);

  const counts = useMemo(
    () => new Map(phases.map((item) => [item.label, countFor(item)])),
    [],
  );

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.01em] text-lbs-magenta sm:text-[38px] lg:text-[46px]">
            Nossa História
          </h2>
        )}

        {/* introdução fixa */}
        <div className={showHeading ? "mt-8 sm:mt-10" : ""}>
          <p className="max-w-[860px] text-[17px] leading-[1.7] text-lbs-ink sm:text-[19px]">
            Com trajetória vinculada ao movimento sindical e ao Direito do
            Trabalho, a LBS Advogadas e Advogados traz em sua sigla a história
            e o compromisso de seus sócios fundadores: Loguercio, Beiro e
            Surian. São quatro décadas dedicadas à construção de soluções
            jurídicas de alto impacto na defesa de quem trabalha e dos direitos
            humanos.
          </p>
        </div>

        {/* navegação por fases — mobile */}
        <div className="mt-12 sm:hidden">
          <label
            htmlFor="lbs-fase"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lbs-ink/50"
          >
            Fase
          </label>
          <select
            id="lbs-fase"
            value={active}
            onChange={(event) => setActive(event.target.value)}
            className="mt-2 w-full rounded-md border border-lbs-ink/15 bg-white px-3 py-3 text-[15px] font-medium text-lbs-magenta outline-none focus:border-lbs-magenta"
          >
            {phases.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label} — {counts.get(item.label)} marcos
              </option>
            ))}
          </select>
        </div>

        {/* navegação por fases — desktop */}
        <div className="relative mt-12 hidden sm:block">
          <div
            ref={scrollerRef}
            className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex min-w-max items-stretch gap-8 lg:gap-10">
              {phases.map((item) => {
                const isActive = item.label === active;
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setActive(item.label)}
                      className="group flex flex-col items-start pb-3 text-left outline-none"
                    >
                      <span
                        className={`whitespace-nowrap text-[15px] font-medium tracking-[0.01em] transition-colors sm:text-[16px] ${
                          isActive
                            ? "text-lbs-magenta"
                            : "text-lbs-ink/70 group-hover:text-lbs-magenta"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`mt-1 whitespace-nowrap text-[12px] transition-colors ${
                          isActive ? "text-lbs-magenta/70" : "text-lbs-ink/45"
                        }`}
                      >
                        {counts.get(item.label)} marcos
                      </span>
                      <span
                        className={`mt-3 block h-px w-full transition-colors ${
                          isActive ? "bg-lbs-magenta" : "bg-transparent"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* indicador de mais abas à direita */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex w-16 items-center justify-end bg-gradient-to-l from-white via-white/80 to-transparent pr-1 text-lbs-magenta">
            <span aria-hidden className="text-[16px]">
              ›
            </span>
          </div>
        </div>

        <div className="mt-2 h-px w-full bg-lbs-ink/10" />

        {/* conteúdo da fase */}
        <div className="mt-10 sm:mt-14">
          {years.length === 0 ? (
            <p className="text-[15px] text-lbs-ink/60">
              Nenhum marco registrado para este período.
            </p>
          ) : (
            <div className="relative max-w-[860px]">
              <div className="pointer-events-none absolute inset-y-0 left-[7px] z-0 w-px bg-lbs-magenta/25" />

              <div className="space-y-7">
                {years.map(([year, events]) => (
                  <article key={year} className="relative z-10 pl-8">
                    <div className="absolute left-[1px] top-[24px] h-3.5 w-3.5 rounded-full border-2 border-white bg-lbs-magenta" />
                    <div className="rounded-lg bg-white px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_28px_-20px_rgba(0,0,0,0.25)]">
                      <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-lbs-magenta sm:text-[14px]">
                        {year}
                      </h3>
                      <div className="mt-3 space-y-4 text-[14px] leading-[1.8] text-lbs-ink/85 sm:text-[15px]">
                        {events.map((event, index) => (
                          <p key={`${event.label}-${index}`}>{event.text}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}

                {phase.label === phases[0].label && (
                  <div className="relative z-10 pl-8">
                    <p
                      aria-hidden
                      className="text-[18px] leading-none tracking-[0.3em] text-lbs-ink/30"
                    >
                      …
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
