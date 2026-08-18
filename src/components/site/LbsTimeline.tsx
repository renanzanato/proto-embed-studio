import { useEffect, useMemo, useState } from "react";

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
  Livro: {
    label: "Livro",
    tag: "text-lbs-ink/70",
    text: "text-lbs-ink/85 text-[14px] sm:text-[15px]",
    dot: "bg-white ring-1 ring-lbs-ink/40",
  },
  Cartilha: {
    label: "Cartilha",
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
  Evento: {
    label: "Evento",
    tag: "text-lbs-ink/50",
    text: "text-lbs-ink/80 text-[14px] sm:text-[15px]",
    dot: "bg-white ring-1 ring-lbs-ink/25",
  },
  Agenda: {
    label: "Agenda",
    tag: "text-lbs-ink/70",
    text: "text-lbs-ink/85 text-[14px] sm:text-[15px]",
    dot: "bg-white ring-1 ring-lbs-ink/40",
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
  "Eventos",
  "Evento",
  "Livro",
  "Cartilha",
  "Agenda",
  "Publicações",
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
          <div className="hidden sm:block">
            <ul className="flex w-full flex-nowrap items-stretch justify-between gap-x-6 overflow-x-auto">
              {phases.map((item) => {
                const isActive = item.label === active;
                return (
                  <li key={item.label} className="flex shrink-0">
                    <button
                      type="button"
                      onClick={() => setActive(item.label)}
                      className="group flex w-full flex-col items-start pb-3 text-left outline-none"
                    >
                      <span
                        className={`whitespace-nowrap text-[13px] font-medium tracking-[0.01em] transition-colors md:text-[14px] lg:text-[15px] ${
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
                        className={`mt-auto block h-px w-full transition-all duration-300 ${
                          isActive
                            ? "bg-lbs-magenta opacity-100"
                            : "bg-transparent opacity-0 group-hover:bg-lbs-magenta/30 group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
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
            <div className="max-w-[920px]">
              {years.map(([year, events]) => (
                <section key={year} className="border-t border-lbs-ink/10 py-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
                    <h3 className="shrink-0 text-[28px] font-light leading-none tracking-[-0.02em] text-lbs-magenta tabular-nums sm:w-[120px] sm:text-[34px]">
                      {year}
                    </h3>

                    <ul className="relative flex-1 space-y-6 sm:border-l sm:border-lbs-magenta/20 sm:pl-8">
                      {events.map((event, index) => {
                        const style = categoryStyles[event.category];
                        return (
                          <li key={`${event.label}-${index}`} className="relative">
                            <span
                              aria-hidden
                              className={`absolute -left-8 top-[7px] hidden h-2 w-2 -translate-x-[4.5px] rounded-full sm:block ${style.dot}`}
                            />
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                              {event.label !== String(event.year) && (
                                <>
                                  <span className="text-[12px] tabular-nums tracking-[0.06em] text-lbs-ink/45">
                                    {event.label}
                                  </span>
                                  <span
                                    aria-hidden
                                    className="h-px w-4 bg-lbs-ink/15"
                                  />
                                </>
                              )}

                              <span
                                className={`text-[10px] uppercase tracking-[0.18em] ${style.tag}`}
                              >
                                {style.label}
                              </span>
                            </div>
                            <p
                              className={`mt-2 max-w-[68ch] leading-[1.7] ${style.text}`}
                            >
                              {event.url ? (
                                <a
                                  href={event.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline decoration-lbs-magenta/40 underline-offset-4 transition-colors hover:text-lbs-magenta hover:decoration-lbs-magenta"
                                >
                                  {event.text}
                                </a>
                              ) : (
                                event.text
                              )}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
