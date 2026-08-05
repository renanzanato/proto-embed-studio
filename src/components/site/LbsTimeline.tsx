import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  timelineCategories,
  timelineEvents,
  timelinePeriods,
  type TimelineCategory,
} from "@/data/lbs-timeline";

export function LbsTimeline() {
  const [periodIndex, setPeriodIndex] = useState(timelinePeriods.length - 1);
  const [category, setCategory] = useState<TimelineCategory | "Todos">("Todos");
  const [openYears, setOpenYears] = useState<number[]>([]);

  const period = timelinePeriods[periodIndex];

  const years = useMemo(() => {
    const filtered = timelineEvents.filter(
      (event) =>
        event.year >= period.min &&
        event.year <= period.max &&
        (category === "Todos" || event.category === category),
    );

    const map = new Map<number, typeof filtered>();
    for (const event of filtered) {
      const list = map.get(event.year) ?? [];
      list.push(event);
      map.set(event.year, list);
    }

    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [period, category]);

  const toggleYear = (year: number) =>
    setOpenYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year],
    );

  return (
    <section className="w-full bg-lbs-ink py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">Nossa história</p>
        <h2 className="mt-4 text-[26px] font-light leading-[1.2] text-white sm:text-[32px]">
          Linha do tempo
        </h2>
        <p className="mt-4 max-w-[560px] text-[13px] leading-[1.8] text-white/60">
          De 1981 aos dias de hoje: escolha um período e um tema para navegar pelos marcos da LBS.
        </p>

        {/* period filters */}
        <div className="mt-9 flex flex-wrap gap-2">
          {timelinePeriods.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => {
                setPeriodIndex(index);
                setOpenYears([]);
              }}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.1em] transition-colors ${
                index === periodIndex
                  ? "border-lbs-magenta bg-lbs-magenta text-white"
                  : "border-white/20 text-white/65 hover:border-white/45 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* category filters */}
        <div className="mt-3 flex flex-wrap gap-2">
          {(["Todos", ...timelineCategories] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.12em] transition-colors ${
                item === category
                  ? "bg-white/15 text-white"
                  : "bg-white/[0.04] text-white/50 hover:text-white/80"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* accordion by year */}
        <div className="mt-10 border-t border-white/10">
          {years.length === 0 && (
            <p className="py-8 text-[13px] text-white/50">
              Nenhum marco para esse período e tema.
            </p>
          )}

          {years.map(([year, events]) => {
            const open = openYears.includes(year);
            return (
              <div key={year} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => toggleYear(year)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="text-[20px] font-light text-white sm:text-[24px]">{year}</span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="text-[11px] text-lbs-magenta">
                    {events.length} {events.length === 1 ? "marco" : "marcos"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-white/50 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <ul className="mb-6 space-y-5 border-l border-lbs-magenta/40 pl-5 sm:pl-7">
                    {events.map((event, index) => (
                      <li key={`${event.label}-${index}`} className="relative">
                        <span className="absolute -left-[27px] top-[7px] h-2 w-2 rounded-full bg-lbs-magenta sm:-left-[35px]" />
                        <p className="text-[10px] uppercase tracking-[0.14em] text-lbs-magenta">
                          {event.label} · {event.category}
                        </p>
                        <p className="mt-2 text-[12.5px] leading-[1.8] text-white/70">
                          {event.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
