import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import publicoFoto from "@/assets/publico-atendido-foto.jpg";
import publicoFoto02 from "@/assets/publico-atendido-02.jpg";
import publicoFoto03 from "@/assets/publico-atendido-03.jpg";
import publicoFoto04 from "@/assets/publico-atendido-04.jpg";
import solExecucoes from "@/assets/sol-execucoes.jpg";
import serv03 from "@/assets/serv-03.jpg";
import serv04 from "@/assets/serv-04.jpg";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { teamMembers } from "@/data/equipe";

const servImgs = [serv03, serv04];
const socios = teamMembers.filter((m) => m.role === "Sócio" || m.role === "Sócia");

const descricao = [
  "A área de Execução Trabalhista da LBS é especializada na condução da fase de cumprimento das decisões judiciais, transformando o direito reconhecido em juízo na efetiva satisfação do crédito do trabalhador. A atuação contempla desde a liquidação da sentença até a adoção de medidas judiciais voltadas à localização de patrimônio, satisfação da obrigação e encerramento da execução, inclusive em parceria com advogados e outros escritórios.",
  "Com atuação estratégica e altamente especializada, a LBS conduz execuções individuais e coletivas de elevada complexidade, inclusive aquelas decorrentes de ações coletivas com milhares de beneficiários, desenvolvendo soluções processuais para maximizar a efetividade da prestação jurisdicional, sempre observando os limites da decisão judicial.",
];

const diferenciais = [
  "Atuação em Direito do Trabalho",
  "Elevada especialização na fase de execução",
  "Experiência na condução de execuções de alta complexidade e elevado impacto financeiro",
  "Gestão simultânea de milhares de processos executivos",
  "Domínio técnico em liquidação de sentença, cálculos e perícias contábeis",
  "Atuação estratégica em recursos e incidentes próprios da execução",
  "Acompanhamento contínuo do cliente durante toda a fase executória",
  "Integração entre tecnologia, gestão processual e conhecimento técnico para conferir eficiência à condução das execuções",
];

const publicoItems: { text: string; img: string; alt: string }[] = [
  {
    text: "Sindicatos, federações, confederações e associações",
    img: publicoFoto,
    alt: "Assembleia de entidade representativa de trabalhadores",
  },
  {
    text: "Trabalhadores beneficiários de decisões judiciais coletivas",
    img: publicoFoto02,
    alt: "Grupo de trabalhadores em reunião coletiva",
  },
  {
    text: "Trabalhadores em ações individuais",
    img: publicoFoto03,
    alt: "Atendimento individual em escritório de advocacia",
  },
  {
    text: "Entidades representativas, escritórios e advogados que necessitam de acompanhamento especializado na fase de execução",
    img: publicoFoto04,
    alt: "Reunião entre advogados parceiros",
  },
];

const servicos: { title: string; items: string[] }[] = [
  {
    title: "Serviços",
    items: [
      "Liquidação de sentença",
      "Elaboração e revisão de cálculos trabalhistas",
      "Impugnação aos cálculos apresentados pela parte contrária",
      "Cumprimento de sentença",
      "Execução provisória e definitiva",
      "Cumprimento de decisões coletivas",
      "Execuções individuais decorrentes de ações coletivas",
      "Impugnações, embargos à execução e recursos na fase executória",
      "Acompanhamento de perícias contábeis e eventuais impugnações aos laudos",
      "Levantamento de valores",
      "Diligências para acompanhamento de expedição de alvarás",
      "Pesquisa patrimonial e adoção de medidas executivas",
      "Negociação e formalização de acordos (individuais ou coletivos) na fase de execução e também em conhecimento",
    ],
  },
];

export const Route = createFileRoute("/solucoes/execucoes-complexas")({
  head: () => ({
    meta: [
      { title: "Execuções Complexas | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Execução trabalhista especializada: liquidação de sentença, cálculos, pesquisa patrimonial e condução de execuções individuais e coletivas.",
      },
      { property: "og:title", content: "Execuções Complexas | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Da liquidação da sentença à satisfação do crédito: gestão simultânea de milhares de processos executivos com alto impacto financeiro.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/execucoes-complexas" }],
  }),
  component: ExecucoesPage,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">{children}</p>;
}

function PublicoAtendido() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate w-full overflow-hidden border-y border-lbs-ink/10 bg-[#f7f6f5] py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[35fr_25fr_40fr] lg:gap-14">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(14px)",
              transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <SectionLabel>Público atendido</SectionLabel>
            <p className="mt-5 max-w-[340px] text-[26px] font-light leading-[1.15] tracking-tight text-lbs-ink sm:text-[34px]">
              Quem depende do crédito reconhecido
            </p>
            <div className="mt-7 h-[2px] w-14 bg-lbs-magenta" />
            <p className="mt-7 max-w-[300px] text-[12.5px] leading-[1.85] text-lbs-ink/55">
              Entidades, trabalhadores e escritórios parceiros que precisam de acompanhamento
              especializado na fase de execução.
            </p>
          </div>

          <div
            className="relative hidden lg:block"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(22px)",
              transition:
                "opacity 900ms ease 120ms, transform 900ms cubic-bezier(0.16,1,0.3,1) 120ms",
            }}
          >
            <div
              className="relative h-[520px] w-full overflow-hidden bg-lbs-ink"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 72px), calc(100% - 72px) 100%, 0 100%)",
              }}
            >
              {publicoItems.map((item, i) => (
                <img
                  key={item.img}
                  src={item.img}
                  alt={i === active ? item.alt : ""}
                  aria-hidden={i === active ? undefined : "true"}
                  loading="lazy"
                  width={912}
                  height={1312}
                  className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05]"
                  style={{ opacity: i === active ? 1 : 0, transition: "opacity 380ms ease" }}
                />
              ))}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.05) 45%, transparent 100%)",
                }}
              />
            </div>
            <div className="mt-4 h-[2px] w-10 bg-lbs-magenta" />
          </div>

          <ul className="grid gap-y-0 sm:grid-cols-2 sm:gap-x-10">
            {publicoItems.map((item, i) => (
              <li
                key={item.text}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                className="relative cursor-default border-t border-lbs-ink/15 py-6 outline-none sm:py-7"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(18px)",
                  transition: `opacity 700ms ease ${180 + i * 110}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${180 + i * 110}ms`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-[2px] bg-lbs-magenta transition-all duration-500 ease-out"
                  style={{ width: i === active ? "100%" : "0%" }}
                />
                <p
                  className="text-[11px] font-light tabular-nums tracking-[0.2em] transition-colors duration-300"
                  style={{
                    color:
                      i === active
                        ? "var(--lbs-magenta)"
                        : "color-mix(in oklab, var(--lbs-magenta) 45%, transparent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="mt-3 max-w-[320px] text-[14px] leading-[1.7] transition-colors duration-300"
                  style={{
                    color:
                      i === active
                        ? "var(--lbs-ink)"
                        : "color-mix(in oklab, var(--lbs-ink) 70%, transparent)",
                  }}
                >
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServiceGroups({
  groups,
  idPrefix,
}: {
  groups: { title: string; items: string[] }[];
  idPrefix: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 border-t border-lbs-ink/12">
      {groups.map((group, i) => {
        const on = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;

        return (
          <div
            key={group.title}
            className="border-b transition-colors duration-300"
            style={{
              borderColor: on
                ? "color-mix(in oklab, var(--lbs-magenta) 55%, transparent)"
                : "color-mix(in oklab, var(--lbs-ink) 12%, transparent)",
            }}
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={on}
                aria-controls={panelId}
                onClick={() => setOpen((p) => (p === i ? null : i))}
                className="flex w-full items-start gap-6 py-7 text-left outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-lbs-magenta sm:py-9"
                style={{ color: on ? "var(--lbs-magenta)" : "var(--lbs-ink)" }}
              >
                <span className="flex-1 pr-4 text-[20px] font-light leading-[1.25] tracking-tight sm:text-[26px] lg:text-[30px]">
                  {group.title}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-2 h-[22px] w-[22px] shrink-0 transition-transform duration-[380ms] ease-out sm:h-[26px] sm:w-[26px]"
                  style={{ transform: on ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!on} className="pb-10">
              {on && (
                <div className="[animation:fadeUp_360ms_ease_both]">
                  <ul className="grid gap-x-16 gap-y-5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="max-w-[46ch] text-[13px] leading-[1.9] text-lbs-ink/65"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <figure className="mt-10 overflow-hidden bg-lbs-ink/5">
                    <img
                      src={servImgs[i % servImgs.length]}
                      alt=""
                      loading="lazy"
                      width={1280}
                      height={860}
                      className="h-[180px] w-full object-cover grayscale contrast-[1.05] sm:h-[240px]"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 72px 100%, 0 calc(100% - 72px))",
                      }}
                    />
                  </figure>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DiferenciaisGrid() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full bg-lbs-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="mt-5 max-w-[520px] text-[26px] font-light leading-[1.2] text-white sm:text-[34px]">
              Especialização técnica na fase que decide o resultado
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
            {String(diferenciais.length).padStart(2, "0")} pilares
          </span>
        </div>

        <ul className="mt-14 grid border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => {
            const on = active === i;
            return (
              <li
                key={d}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                className="relative flex h-[210px] flex-col border-b border-white/12 px-0 py-8 outline-none sm:px-7 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:not(:nth-child(4n))]:border-r"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-[2px] bg-lbs-magenta transition-all duration-500 ease-out"
                  style={{ width: on ? "100%" : "0%" }}
                />
                <span
                  className="text-[11px] tabular-nums tracking-[0.16em] transition-colors duration-300"
                  style={{
                    color: on
                      ? "var(--lbs-magenta)"
                      : "color-mix(in oklab, var(--lbs-magenta) 45%, transparent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="mt-4 text-[14px] font-light leading-[1.6] transition-colors duration-300"
                  style={{ color: on ? "#fff" : "rgba(255,255,255,0.62)" }}
                >
                  {d}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ExecucoesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={solExecucoes}
            alt="Corredor de fórum trabalhista em luz e sombra"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-5 sm:px-6 sm:pb-24 lg:px-8">
          <SiteHeader active="Atuação" />

          <div className="relative z-10 mt-16 max-w-[780px] sm:mt-20">
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta-soft">Soluções</p>
            <h1 className="mt-5 text-[32px] font-light leading-[1.18] tracking-tight text-white sm:text-[42px] lg:text-[48px]">
              Execuções complexas
            </h1>
            <p className="mt-7 max-w-[560px] text-[13.5px] leading-[1.9] text-white/70">
              {descricao[0]}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/solucoes"
                className="inline-block border border-lbs-magenta px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-lbs-magenta"
              >
                Todas as soluções
              </Link>
              <Link
                to="/solucoes/tribunais-superiores"
                className="inline-block border border-white/25 px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:border-lbs-magenta"
              >
                Tribunais Superiores
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-8">
          <div className="lg:sticky lg:top-16 lg:self-start">
            <SectionLabel>Descrição e diferenciais</SectionLabel>
            <h2 className="mt-6 max-w-[380px] text-[30px] font-light leading-[1.14] tracking-tight text-lbs-ink sm:text-[40px]">
              Do direito reconhecido ao crédito recebido
            </h2>
            <div className="mt-8 h-[2px] w-14 bg-lbs-magenta" />
          </div>
          <div className="max-w-[620px] space-y-10">
            {descricao.map((p) => (
              <p key={p} className="text-[14px] leading-[2.05] text-lbs-ink/65">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <DiferenciaisGrid />

      <PublicoAtendido />

      {/* SERVIÇOS */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="mt-5 max-w-[520px] text-[24px] font-light leading-[1.22] tracking-tight text-lbs-ink sm:text-[30px]">
            Da liquidação de sentença ao levantamento de valores
          </h2>

          <div className="mt-14">
            <ServiceGroups groups={servicos} idPrefix="execucoes" />
          </div>
        </div>
      </section>

      {/* SÓCIAS E SÓCIOS RESPONSÁVEIS */}
      <section className="w-full bg-[#f7f6f5] py-24 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Sócias e sócios responsáveis</SectionLabel>
              <h2 className="mt-5 max-w-[420px] text-[26px] font-light leading-[1.2] text-lbs-ink sm:text-[32px]">
                Quem conduz essa frente
              </h2>
            </div>
            <Link
              to="/equipe"
              className="border border-lbs-ink/20 px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-lbs-ink transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
            >
              Ver a equipe
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {socios.map((member, i) => (
              <Link
                key={member.slug}
                to="/equipe/$slug"
                params={{ slug: member.slug }}
                className="group block"
              >
                <div className="overflow-hidden bg-lbs-ink/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="h-[280px] w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                    style={{
                      clipPath:
                        i % 2 === 0
                          ? "polygon(0 0, 100% 0, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0 100%)"
                          : "polygon(0 0, 100% 0, 100% 100%, 56px 100%, 0 calc(100% - 56px))",
                    }}
                  />
                </div>
                <div className="mt-4 border-t-2 border-lbs-magenta pt-3">
                  <h4 className="text-[14px] font-normal text-lbs-ink transition-colors group-hover:text-lbs-magenta">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-[11.5px] text-lbs-ink/55">{member.role}</p>
                  <p className="mt-0.5 text-[11.5px] text-lbs-ink/45">{member.city}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
