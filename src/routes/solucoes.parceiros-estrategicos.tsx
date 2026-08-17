import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import case01 from "@/assets/case-01.jpg";
import case02 from "@/assets/case-02.jpg";
import case03 from "@/assets/case-03.jpg";
import case04 from "@/assets/case-04.jpg";
import publicoFoto from "@/assets/publico-atendido-foto.jpg";
import publicoFoto02 from "@/assets/publico-atendido-02.jpg";
import publicoFoto03 from "@/assets/publico-atendido-03.jpg";
import publicoFoto04 from "@/assets/publico-atendido-04.jpg";
import solParceiros from "@/assets/sol-parceiros.jpg";
import serv01 from "@/assets/serv-01.jpg";
import serv02 from "@/assets/serv-02.jpg";
import serv03 from "@/assets/serv-03.jpg";
import serv04 from "@/assets/serv-04.jpg";
import serv05 from "@/assets/serv-05.jpg";
import serv06 from "@/assets/serv-06.jpg";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { teamMembers } from "@/data/equipe";

const servImgs = [serv01, serv02, serv03, serv04, serv05, serv06];
const socios = teamMembers.filter((m) => m.role === "Sócio" || m.role === "Sócia");

const diferenciais = [
  "A área alcança a atuação direta com escritórios e entidades parceiras, em todas as instâncias judiciais, pautada na excelência técnica da LBS e em sua experiência em âmbito nacional.",
  "A parceria se molda à necessidade de cada escritório. Pode começar na origem do caso – atendimento, redação de petições iniciais, diligências e audiências – ou ser firmada a partir da segunda instância, com sustentações orais e o manejo dos recursos que viabilizam o processamento adequado dos processos até os Tribunais Superiores em Brasília. Em qualquer formato, o parceiro conta com a estrutura completa do escritório: a prática consolidada nos tribunais, a presença nos Tribunais Regionais de todo o país e a Controladoria Jurídica, que monitora publicações, prazos e andamentos dos processos confiados à LBS e mantém o parceiro permanentemente informado.",
  "Temos como modelo as parcerias firmadas dentro da Rede Lado, coletivo de escritórios que atua em favor da classe trabalhadora, da qual participa a LBS Advogadas e Advogados. Além da Rede, atuamos com escritórios membros do CNASP – Coletivo Nacional de Advogados de Servidores Públicos.",
  "As parcerias não se limitam ao processo: inclui reuniões periódicas para discussão dos casos e das medidas a adotar, treinamentos e acompanhamento conjunto, para que a atuação eleve a qualidade do trabalho de todos os envolvidos.",
];

const destaques: { title: string; text: string }[] = [
  {
    title: "Rede Lado e CNASP",
    text: "Participamos de coletivo nacional de escritórios que advogam para a classe trabalhadora, com condução de casos de relevância nacional, a Rede Lado. Além da Rede, atuamos com escritórios membros do CNASP – Coletivo Nacional de Advogados de Servidores Públicos.",
  },
  {
    title: "Presença nacional e rede de parceiros",
    text: "A presença em Tribunais Regionais de todo o país e a rede de parceiros permitem conhecer as demandas e os posicionamentos adotados em cada tribunal, informação que orienta a estratégia de cada caso.",
  },
  {
    title: "Controladoria Jurídica",
    text: "Estrutura robusta de monitoramento de publicações, gestão de prazos e relatórios de acompanhamento, que dá ao parceiro visibilidade permanente sobre seus processos.",
  },
  {
    title: "Estrutura contábil e tecnológica",
    text: "Estrutura contábil para elaboração de cálculos e infraestrutura tecnológica que permite cuidar de muitos processos com qualidade e segurança.",
  },
];

const destaqueImgs = [case01, case02, case03, case04];

const publicoItems: { text: string; img: string; alt: string }[] = [
  {
    text: "Escritórios de advocacia",
    img: publicoFoto,
    alt: "Sala de reunião em escritório de advocacia",
  },
  {
    text: "Advogados em busca de parceria especializada",
    img: publicoFoto02,
    alt: "Advogados em reunião de alinhamento estratégico",
  },
  {
    text: "Entidades que demandam atuação em Brasília e instâncias superiores",
    img: publicoFoto03,
    alt: "Fachada de tribunal superior",
  },
  {
    text: "Parceiros que atuam em qualquer instância no território nacional",
    img: publicoFoto04,
    alt: "Equipe de advogados em atuação nacional",
  },
];

const servicos: { title: string; items: string[] }[] = [
  {
    title: "Condução compartilhada de processos",
    items: [
      "Atendimento e redação de petições iniciais, realização de diligências e audiências",
      "Cumprimento de todos os prazos pertinentes",
      "Resposta a todos os recursos e manifestações das partes contrárias",
      "Sustentações orais em sessões e acompanhamento de audiências",
    ],
  },
  {
    title: "Atuação em Brasília para parceiros",
    items: [
      "Diligências nos gabinetes para agilizar o julgamento dos processos",
      "Entrega e despacho de memoriais, com os pontos importantes para o exame dos casos",
      "Acompanhamento de casos de repercussão geral, inclusive com ingresso de entidades relevantes como amicus curiae",
    ],
  },
  {
    title: "Gestão e desenvolvimento da parceria",
    items: [
      "Controladoria Jurídica: monitoramento de publicações, prazos e andamentos, com relatórios ao parceiro",
      "Reuniões periódicas para discussão dos casos e das medidas a adotar",
      "Treinamentos e acompanhamento para aprimorar a atuação conjunta",
    ],
  },
];

export const Route = createFileRoute("/solucoes/parceiros-estrategicos")({
  head: () => ({
    meta: [
      { title: "Parceiros Estratégicos | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Atuação direta com escritórios e entidades parceiras em todas as instâncias judiciais, com excelência técnica e estrutura completa da LBS.",
      },
      {
        property: "og:title",
        content: "Parceiros Estratégicos | LBS Advogadas e Advogados",
      },
      {
        property: "og:description",
        content:
          "Parcerias com escritórios de advocacia, advogados e entidades para atuação em Brasília, Tribunais Superiores e em todo o território nacional.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/parceiros-estrategicos" }],
  }),
  component: ParceirosPage,
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
              Escritórios e entidades parceiras
            </p>
            <div className="mt-7 h-[2px] w-14 bg-lbs-magenta" />
            <p className="mt-7 max-w-[300px] text-[12.5px] leading-[1.85] text-lbs-ink/55">
              Atuação voltada para escritórios de advocacia, advogados e entidades que buscam
              parceria especializada em processos e demandas.
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
                      <li key={item} className="max-w-[46ch] text-[13px] leading-[1.9] text-lbs-ink/65">
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

function CaseTile({
  index,
  title,
  text,
  img,
  open,
  onToggle,
}: {
  index: number;
  title: string;
  text: string;
  img: string;
  open: boolean;
  onToggle: () => void;
}) {
  const [hover, setHover] = useState(false);
  const on = hover || open;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={on}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      className="group relative flex h-[260px] cursor-pointer flex-col overflow-hidden border-b border-white/12 outline-none focus-visible:ring-1 focus-visible:ring-lbs-magenta sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
    >
      <img
        src={img}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover contrast-[1.03] saturate-[0.95]"
        style={{
          opacity: on ? 1 : 0,
          transform: on ? "scale(1)" : "scale(1.03)",
          transition: "opacity 360ms ease, transform 400ms ease",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: on
            ? "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.66) 45%, rgba(0,0,0,0.86) 100%)"
            : "rgba(0,0,0,0)",
          transition: "background 360ms ease",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 z-10 h-[2px] bg-lbs-magenta transition-all duration-500 ease-out"
        style={{ width: on ? "100%" : "0%" }}
      />

      <div className="relative z-10 flex h-full flex-col px-0 py-8 sm:px-7">
        <span
          className="text-[11px] tabular-nums tracking-[0.16em] transition-colors duration-300"
          style={{
            color: on
              ? "var(--lbs-magenta)"
              : "color-mix(in oklab, var(--lbs-magenta) 45%, transparent)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className="mt-4 text-[14.5px] font-normal leading-[1.45] transition-colors duration-300"
          style={{ color: on ? "#fff" : "rgba(255,255,255,0.62)" }}
        >
          {title}
        </h3>
        <p
          className="mt-4 overflow-hidden text-[12px] leading-[1.8] text-white/70"
          style={{
            opacity: on ? 1 : 0,
            transform: on ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 340ms ease, transform 340ms ease",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

function DestaquesGaleria() {
  const [open, setOpen] = useState<number | null>(null);
  const principal = destaques[0];
  const secundarios = destaques.slice(1);

  return (
    <section className="w-full bg-lbs-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Destaques</SectionLabel>
            <h2 className="mt-5 max-w-[520px] text-[26px] font-light leading-[1.2] text-white sm:text-[34px]">
              Parceria com estrutura completa da LBS
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
            {String(destaques.length).padStart(2, "0")} frentes
          </span>
        </div>

        <article className="mt-12 grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative h-[240px] w-full overflow-hidden sm:h-[340px]">
            <img
              src={destaqueImgs[0]}
              alt={principal.title}
              loading="lazy"
              width={1440}
              height={960}
              className="absolute inset-0 h-full w-full object-cover contrast-[1.03] saturate-[0.95]"
            />
            <span className="absolute left-0 top-0 bg-lbs-magenta px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white">
              Frente principal
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[22px] font-light leading-[1.25] text-white sm:text-[28px]">
              {principal.title}
            </h3>
            <div className="mt-6 h-[2px] w-12 bg-lbs-magenta" />
            <p className="mt-6 max-w-[520px] text-[13.5px] leading-[1.95] text-white/60">
              {principal.text}
            </p>
          </div>
        </article>

        <div className="mt-14 grid border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3">
          {secundarios.map((d, i) => (
            <CaseTile
              key={d.title}
              index={i + 1}
              title={d.title}
              text={d.text}
              img={destaqueImgs[i + 1]}
              open={open === i + 1}
              onToggle={() => setOpen((p) => (p === i + 1 ? null : i + 1))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ParceirosPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={solParceiros}
            alt="Reunião de parceria entre escritórios de advocacia"
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
              Parceiros Estratégicos
            </h1>
            <p className="mt-7 max-w-[560px] text-[13.5px] leading-[1.9] text-white/70">
              {diferenciais[0]}
            </p>
            <Link
              to="/solucoes"
              className="mt-9 inline-block border border-lbs-magenta px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-lbs-magenta"
            >
              Todas as soluções
            </Link>
          </div>
        </div>
      </section>

      {/* DESCRIÇÃO E DIFERENCIAIS */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-8">
          <div className="lg:sticky lg:top-16 lg:self-start">
            <SectionLabel>Descrição e diferenciais</SectionLabel>
            <h2 className="mt-6 max-w-[380px] text-[30px] font-light leading-[1.14] tracking-tight text-lbs-ink sm:text-[40px]">
              Estrutura completa para o escritório parceiro
            </h2>
            <div className="mt-8 h-[2px] w-14 bg-lbs-magenta" />
          </div>
          <div className="max-w-[620px] space-y-10">
            {diferenciais.slice(1).map((p) => (
              <p key={p} className="text-[14px] leading-[2.05] text-lbs-ink/65">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <PublicoAtendido />

      <DestaquesGaleria />

      {/* SERVIÇOS */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="mt-5 max-w-[520px] text-[24px] font-light leading-[1.22] tracking-tight text-lbs-ink sm:text-[30px]">
            Condução compartilhada, atuação em Brasília e gestão da parceria
          </h2>

          <div className="mt-14">
            <p className="max-w-[720px] text-[14px] leading-[1.9] text-lbs-ink/65">
              Atuação desenvolvida em conjunto com o parceiro nas seguintes frentes:
            </p>
            <ServiceGroups groups={servicos} idPrefix="parceiros" />
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
