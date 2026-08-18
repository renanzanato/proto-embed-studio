import { useEffect, useMemo, useRef, useState } from "react";

import { timelineEvents, type TimelineCategory } from "@/data/lbs-timeline";

type Phase = { label: string; min: number; max: number };

const phases: Phase[] = [
  { label: "1981 – 1995", min: 1981, max: 1995 },
  { label: "2013 – 2016", min: 2013, max: 2016 },
  { label: "2017 – 2019", min: 2017, max: 2019 },
  { label: "2020 – 2021", min: 2020, max: 2021 },
  { label: "2022 – 2023", min: 2022, max: 2023 },
  { label: "2024 – 2026", min: 2024, max: 2026 },
];

const categoryStyles: Record<
  TimelineCategory,
  { label: string; tag: string; text: string; dot: string }
> = {
  Institucional: {
    label: "Institucional",
    tag: "text-lbs-magenta",
    text: "text-lbs-ink text-[16px] sm:text-[18px] font-normal",
    dot: "bg-lbs-magenta",
  },
  Publicações: {
    label: "Publicações",
    tag: "text-lbs-ink/70",
    text: "text-lbs-ink/85 text-[14px] sm:text-[15px]",
    dot: "bg-white ring-1 ring-lbs-ink/40",
  },
  Eventos: {
    label: "Eventos",
    tag: "text-lbs-ink/50",
    text: "text-lbs-ink/80 text-[14px] sm:text-[15px]",
    dot: "bg-white ring-1 ring-lbs-ink/25",
  },
  Internacional: {
    label: "Internacional",
    tag: "text-lbs-ink/50",
    text: "text-lbs-ink/80 text-[14px] sm:text-[15px]",
    dot: "bg-white ring-1 ring-lbs-ink/25",
  },
};

const filterOrder: TimelineCategory[] = [
  "Institucional",
  "Publicações",
  "Eventos",
  "Internacional",
];

function eventsFor(phase: Phase) {
  return timelineEvents.filter(
    (event) => event.year >= phase.min && event.year <= phase.max,
  );
}

export function LbsTimeline({ showHeading = true }: { showHeading?: boolean }) {
  const [active, setActive] = useState<string>(phases[0].label);
  const [filter, setFilter] = useState<TimelineCategory | "Todos">("Todos");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const phase = phases.find((item) => item.label === active) ?? phases[0];

  useEffect(() => {
    setFilter("Todos");
  }, [active]);

  const phaseEvents = useMemo(() => eventsFor(phase), [phase]);
  const showFilters = phaseEvents.length > 20;

  const filtered = useMemo(
    () =>
      filter === "Todos"
        ? phaseEvents
        : phaseEvents.filter((event) => event.category === filter),
    [phaseEvents, filter],
  );

  const years = useMemo(() => {
    const map = new Map<number, typeof filtered>();
    for (const event of filtered) {
      const list = map.get(event.year) ?? [];
      list.push(event);
      map.set(event.year, list);
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [filtered]);

  const counts = useMemo(
    () => new Map(phases.map((item) => [item.label, eventsFor(item).length])),
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

        {/* navegação por fases — sticky */}
        <div className="sticky top-0 z-30 mt-16 border-t border-lbs-ink/10 bg-white pt-8 sm:mt-20 lg:mt-24">
          {/* mobile */}
          <div className="sm:hidden">
            <label
              htmlFor="lbs-fase"
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lbs-ink/50"
            >
              Período
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

          {/* desktop */}
          <div className="relative hidden sm:block">
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

          <div className="mt-4 h-px w-full bg-lbs-ink/10" />

          {/* filtros por categoria — fases longas */}
          {showFilters && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3">
              {(["Todos", ...filterOrder] as const).map((item) => {
                const isActive = filter === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFilter(item)}
                    className={`text-[11px] uppercase tracking-[0.14em] transition-colors ${
                      isActive
                        ? "text-lbs-magenta"
                        : "text-lbs-ink/45 hover:text-lbs-ink"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
              <span className="ml-auto text-[11px] tabular-nums tracking-[0.08em] text-lbs-ink/40">
                {filtered.length} de {phaseEvents.length} marcos
              </span>
            </div>
          )}
        </div>

        {/* conteúdo da fase */}
        <div className="mt-10 sm:mt-14">
          {years.length === 0 ? (
            <p className="text-[15px] text-lbs-ink/60">
              Nenhum marco registrado para este período.
            </p>
          ) : (
            <div className="relative max-w-[920px]">
              {years.map(([year, events]) => (
                <section key={year} className="relative">
                  {/* cabeçalho de ano sticky */}
                  <div className="sticky top-[104px] z-20 bg-white/95 py-3 backdrop-blur-sm sm:top-[124px]">
                    <h3 className="text-[40px] font-light leading-none tracking-[-0.02em] text-lbs-magenta tabular-nums sm:text-[52px] lg:text-[60px]">
                      {year}
                    </h3>
                  </div>

                  <ul className="relative mt-2 pb-10">
                    {/* linha vertical */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-[86px] hidden w-px sm:block bg-lbs-magenta/20 sm:left-[110px]"
                    />
                    {events.map((event, index) => {
                      const style = categoryStyles[event.category];
                      return (
                        <li
                          key={`${event.label}-${index}`}
                          className="relative flex flex-col gap-1 border-t border-lbs-ink/8 py-7 pl-8 sm:flex-row sm:gap-0 sm:pl-0"
                        >
                          {/* data */}
                          <span className="text-[12px] tabular-nums tracking-[0.06em] text-lbs-ink/45 sm:w-[86px] sm:shrink-0 sm:pt-[3px] sm:text-right sm:text-[13px] lg:w-[110px]">
                            {event.label}
                          </span>

                          {/* marcador */}
                          <span
                            aria-hidden
                            className={`absolute left-[82px] top-[34px] hidden h-2 w-2 rounded-full sm:block lg:left-[106px] ${style.dot}`}
                          />

                          <div className="sm:pl-8 lg:pl-10">
                            <p
                              className={`text-[10px] uppercase tracking-[0.18em] ${style.tag}`}
                            >
                              {style.label}
                            </p>
                            <p
                              className={`mt-2 max-w-[68ch] leading-[1.7] ${style.text}`}
                            >
                              {event.text}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
