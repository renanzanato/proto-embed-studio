import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { timelineEvents, timelinePeriods } from "@/data/lbs-timeline";

type Group = {
  label: string;
  title: string;
  events: typeof timelineEvents;
};

const groupTitles: Record<string, string> = {
  "Anos 80 e 90": "As origens",
  "2013 – 2015": "Nasce a LBS",
  "2016 – 2020": "Expansão e debate público",
  "2021 – 2023": "Cultura, diversidade e teses",
  "2024 – 2026": "Atuação internacional",
};

export function LbsTimelineCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);

  const groups = useMemo<Group[]>(
    () =>
      timelinePeriods.map((period) => ({
        label: period.label,
        title: groupTitles[period.label] ?? period.label,
        events: timelineEvents.filter(
          (event) => event.year >= period.min && event.year <= period.max,
        ),
      })),
    [],
  );

  const scrollBy = (direction: 1 | -1) =>
    trackRef.current?.scrollBy({ left: direction * 420, behavior: "smooth" });

  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
              Nossa história
            </p>
            <h2 className="mt-4 text-[26px] font-light leading-[1.2] text-lbs-ink sm:text-[32px]">
              Linha do tempo
            </h2>
            <p className="mt-4 max-w-[520px] text-[13px] leading-[1.8] text-lbs-ink/60">
              Clique ou arraste para navegar pelas épocas. Passe o mouse sobre um período para
              revelar os marcos.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="mr-2 text-[10px] uppercase tracking-[0.18em] text-lbs-ink/40">
              Clique ou arraste
            </span>
            <button
              type="button"
              aria-label="Anterior"
              onClick={() => scrollBy(-1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-lbs-ink/15 text-lbs-ink/60 transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Próximo"
              onClick={() => scrollBy(1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-lbs-ink/15 text-lbs-ink/60 transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-0 top-[70px] h-px w-full bg-lbs-ink/10" />

        <div
          ref={trackRef}
          onMouseDown={(event) => {
            drag.current = { x: event.clientX, left: event.currentTarget.scrollLeft };
          }}
          onMouseMove={(event) => {
            if (!drag.current) return;
            event.currentTarget.scrollLeft =
              drag.current.left - (event.clientX - drag.current.x);
          }}
          onMouseUp={() => {
            drag.current = null;
          }}
          onMouseLeave={() => {
            drag.current = null;
            setActive(null);
          }}
          className="flex cursor-grab snap-x snap-mandatory gap-0 overflow-x-auto px-4 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {groups.map((group, index) => {
            const open = active === index;
            return (
              <div
                key={group.label}
                onMouseEnter={() => setActive(index)}
                className={`group relative shrink-0 snap-start border-l border-dashed border-lbs-ink/15 px-6 transition-[width] duration-500 ease-out sm:px-8 ${
                  open ? "w-[340px] sm:w-[420px]" : "w-[240px] sm:w-[280px]"
                }`}
              >
                <p
                  className={`text-[26px] font-light leading-none transition-colors sm:text-[32px] ${
                    open ? "text-lbs-ink" : "text-lbs-ink/35"
                  }`}
                >
                  {group.label}
                </p>
                <p
                  className={`mt-3 text-[13px] leading-[1.5] transition-colors ${
                    open ? "text-lbs-magenta" : "text-lbs-ink/40"
                  }`}
                >
                  {group.title}
                </p>

                <span
                  className={`absolute -bottom-[3px] left-[-5px] h-[10px] w-[10px] rounded-full transition-colors ${
                    open ? "bg-lbs-magenta" : "bg-lbs-ink/25"
                  }`}
                  style={{ top: "66px" }}
                />

                <div
                  className={`mt-12 overflow-hidden transition-all duration-500 ease-out ${
                    open ? "max-h-[420px] opacity-100" : "max-h-[92px] opacity-70"
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.16em] text-lbs-ink/40">
                    {group.events.length} marcos
                  </p>
                  <ul className="mt-4 space-y-4 pr-2">
                    {group.events.slice(0, open ? 8 : 1).map((event, i) => (
                      <li key={`${event.label}-${i}`}>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-lbs-magenta">
                          {event.label} · {event.category}
                        </p>
                        <p className="mt-1.5 line-clamp-3 text-[12.5px] leading-[1.7] text-lbs-ink/70">
                          {event.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {open && group.events.length > 8 && (
                    <p className="mt-4 text-[11px] text-lbs-ink/45">
                      + {group.events.length - 8} outros marcos nesse período
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
