import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { timelineEvents } from "@/data/lbs-timeline";
import { MilestoneLoop } from "@/components/site/MilestoneLoop";

type Era = { label: string; min: number; max: number; intro: string };

const OVERVIEW = "Visão geral";

const eras: Era[] = [
  {
    label: "Origens · 1981 – 2012",
    min: 1981,
    max: 2012,
    intro:
      "Os anos de formação e consolidação: da amizade nos bancos escolares à advocacia sindical em Campinas e no ABC, ao lado do novo sindicalismo brasileiro.",
  },
  {
    label: "2013 – 2019",
    min: 2013,
    max: 2019,
    intro:
      "Expansão e produção intelectual: novas unidades, publicações, seminários e a defesa dos direitos trabalhistas diante da reforma de 2017.",
  },
  {
    label: "2020 – 2021",
    min: 2020,
    max: 2021,
    intro:
      "Pandemia e reinvenção: atuação intensa na defesa do emprego e da saúde dos trabalhadores, com forte presença digital e institucional.",
  },
  {
    label: "2022",
    min: 2022,
    max: 2022,
    intro:
      "Um ano de afirmação: crescimento da equipe, novas frentes de atuação e presença ampliada nos debates públicos sobre o mundo do trabalho.",
  },
  {
    label: "2023",
    min: 2023,
    max: 2023,
    intro:
      "Consolidação nacional: teses estratégicas nos tribunais superiores, publicações e articulação com o movimento sindical.",
  },
  {
    label: "2024",
    min: 2024,
    max: 2024,
    intro:
      "Novos horizontes: internacionalização da atuação, eventos próprios e fortalecimento das áreas de negócios e sindical.",
  },
  {
    label: "2025",
    min: 2025,
    max: 2025,
    intro:
      "O ano mais intenso da nossa história: agenda internacional, Instituto Lavoro e produção jurídica em ritmo recorde.",
  },
  {
    label: "2026 · Presente",
    min: 2026,
    max: 2100,
    intro:
      "O presente: uma advocacia contemporânea, plural e comprometida com a defesa permanente do trabalho digno.",
  },
];


export function LbsTimeline() {
  const [active, setActive] = useState<string>(OVERVIEW);

  const era = eras.find((item) => item.label === active) ?? null;

  const years = useMemo(() => {
    if (!era) return [];
    const filtered = timelineEvents.filter(
      (event) => event.year >= era.min && event.year <= era.max,
    );
    const map = new Map<number, typeof filtered>();
    for (const event of filtered) {
      const list = map.get(event.year) ?? [];
      list.push(event);
      map.set(event.year, list);
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [era]);

  const tabs = [OVERVIEW, ...eras.map((item) => item.label)];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-[30px] font-light leading-[1.1] tracking-[-0.01em] text-lbs-magenta sm:text-[38px] lg:text-[46px]">
          Nossa História
        </h2>

        {/* era navigation */}
        <nav className="mt-10 overflow-x-auto sm:mt-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex min-w-max items-end gap-7 sm:gap-10 lg:gap-12">
            {tabs.map((label) => {
              const isActive = label === active;
              return (
                <li key={label} className="flex flex-col items-center">
                  <ChevronDown
                    className={`mb-1 h-5 w-5 transition-opacity ${
                      isActive ? "text-lbs-magenta opacity-100" : "opacity-0"
                    }`}
                    strokeWidth={3}
                  />
                  <button
                    type="button"
                    onClick={() => setActive(label)}
                    className={`whitespace-nowrap text-[15px] font-medium tracking-[0.01em] transition-colors sm:text-[16px] ${
                      isActive
                        ? "text-lbs-magenta"
                        : "text-lbs-ink/60 hover:text-lbs-ink"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10 h-px w-full bg-lbs-ink/10 sm:mt-12" />

        {/* content */}
        <div className="mt-10 max-w-[860px] sm:mt-14">
          {!era ? (
            <div>
              <p className="text-[17px] leading-[1.7] text-lbs-ink sm:text-[19px]">
                Com uma história feita de parcerias improváveis, escolhas corajosas
                e crescimento estratégico, somos, desde o início, uma advocacia
                fora do comum.
              </p>

              <h3 className="mt-12 text-[15px] font-semibold uppercase tracking-[0.06em] text-lbs-magenta sm:text-[17px]">
                Parcerias fora do comum
              </h3>
              <div className="mt-4 space-y-6 text-[15px] leading-[1.85] text-lbs-ink/85 sm:text-[16px]">
                <p>
                  A história da LBS é a história de encontros improváveis, fundada
                  em um respeito profundo pelas pessoas. Em 1981, José Eymard
                  Loguercio e Eduardo Surian Matias se conheceram no colégio; anos
                  depois, ainda estudantes de Direito na PUC Campinas, começaram a
                  atuar ao lado de sindicatos de trabalhadores e nunca mais
                  pararam.
                </p>
                <p>
                  A chegada de Nilo Beiro, vindo do Rio Grande do Sul, completou o
                  trio que daria origem ao escritório. Do TRT de Campinas recém
                  criado às tribunas dos tribunais superiores em Brasília, a LBS
                  cresceu junto com o movimento sindical brasileiro, sempre no
                  mesmo lado da mesa: o de quem trabalha.
                </p>
              </div>

              <h3 className="mt-12 text-[15px] font-semibold uppercase tracking-[0.06em] text-lbs-magenta sm:text-[17px]">
                Uma advocacia que transforma
              </h3>
              <div className="mt-4 space-y-6 text-[15px] leading-[1.85] text-lbs-ink/85 sm:text-[16px]">
                <p>
                  Ao longo de mais de quatro décadas, a LBS estruturou teses,
                  formou gerações de advogadas e advogados, produziu livros e
                  seminários e levou a defesa do trabalho digno a fóruns nacionais
                  e internacionais, incluindo a Organização Internacional do
                  Trabalho.
                </p>
                <p>
                  Navegue pelos períodos acima para conhecer os marcos que
                  construíram essa trajetória.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[17px] leading-[1.7] text-lbs-ink sm:text-[19px]">
                {era.intro}
              </p>

              {years.length === 0 ? (
                <p className="mt-12 text-[15px] text-lbs-ink/60">
                  Nenhum marco registrado para este período.
                </p>
              ) : (
                <MilestoneLoop
                  key={era.label}
                  className="mt-10 h-[560px]"
                  speed={38}
                  hoverSpeed={0}
                  gap={44}
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel={`Marcos ${era.label}`}
                  items={years.map(([year, events]) => ({
                    key: String(year),
                    node: (
                      <div className="relative pl-10">
                        {/* timeline dot */}
                        <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-lbs-magenta ring-4 ring-white" />
                        {/* timeline line */}
                        <div className="absolute left-1.5 top-3 -bottom-14 w-px bg-lbs-magenta/25" />
                        <div>
                          <h3 className="text-[15px] font-semibold uppercase tracking-[0.06em] text-lbs-magenta sm:text-[17px]">
                            {year}
                          </h3>
                          <div className="mt-4 space-y-5 text-[15px] leading-[1.85] text-lbs-ink/85 sm:text-[16px]">
                            {events.map((event, index) => (
                              <p key={`${event.label}-${index}`}>{event.text}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ),
                  }))}
                />
              )}

            </div>
          )}
        </div>
      </div>
    </section>
  );
}
