import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import case01 from "@/assets/case-01.jpg";
import case02 from "@/assets/case-02.jpg";
import case03 from "@/assets/case-03.jpg";
import case04 from "@/assets/case-04.jpg";
import case05 from "@/assets/case-05.jpg";
import case06 from "@/assets/case-06.jpg";
import publicoFoto from "@/assets/publico-atendido-foto.jpg";
import publicoFoto02 from "@/assets/publico-atendido-02.jpg";
import publicoFoto03 from "@/assets/publico-atendido-03.jpg";
import publicoFoto04 from "@/assets/publico-atendido-04.jpg";
import solDefesa from "@/assets/sol-defesa.jpg";
import serv01 from "@/assets/serv-01.jpg";
import serv02 from "@/assets/serv-02.jpg";
import serv03 from "@/assets/serv-03.jpg";
import serv04 from "@/assets/serv-04.jpg";
import serv05 from "@/assets/serv-05.jpg";
import serv06 from "@/assets/serv-06.jpg";

const servImgs = [serv01, serv02, serv03, serv04, serv05, serv06];

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { teamMembers } from "@/data/equipe";

const socios = teamMembers.filter((m) => m.role === "Sócio" || m.role === "Sócia");

const diferenciais = [
  "A defesa da pessoa que trabalha é a origem e a razão de existir da LBS Advogadas e Advogados.",
  "O contencioso trabalhista do escritório nasceu ao lado do novo modelo de organização dos trabalhadores, inaugurado pela Constituição de 1988. A LBS trabalha com entidades sindicais e se desenvolve a partir dessa experiência com o atendimento de categorias inteiras de trabalhadores.",
  "As normas, as negociações coletivas e o próprio direito estão em constante transformação; nós nos mantemos firmes na defesa das pessoas que trabalham. Participamos ativamente do debate público sobre os novos modelos de contratação, da construção das teses que percorrem o Poder Judiciário e da interlocução com o Poder Legislativo, na elaboração de normas protetivas e no enfrentamento das propostas de redução de direitos.",
];


const destaques: { title: string; text: string }[] = [
  {
    title: "Demissão motivada nas estatais (STF)",
    text: "A LBS conduziu, no STF, o RE nº 688.267, em que se fixou a tese do dever de motivação na demissão de empregados concursados de empresas públicas e sociedades de economia mista – proteção que hoje ampara os empregados de todas as estatais do país.",
  },
  {
    title: "Acesso à Justiça do Trabalho (ADI nº 5.766)",
    text: "Participação ativa, no STF, no debate que assegurou aos trabalhadores beneficiários da Justiça Gratuita a suspensão do pagamento de honorários de sucumbência.",
  },
  {
    title:
      "Validade de declaração de hipossuficiência na Justiça do Trabalho (Processo nº 1002512-83.2025.5.02.0000)",
    text: "Participação direta no incidente examinado pelo Tribunal Superior do Trabalho sobre a validade da declaração firmada por pessoa física ou por seu advogado constituído para concessão dos benefícios da Justiça Gratuita no processo trabalhista.",
  },
  {
    title: "Programa de Demissão no Walmart (Processo nº 872-26.2012.5.04.0012)",
    text: "Atuação direta no incidente analisado pelo TST com declaração de nulidade das dispensas realizadas pela WMS sem observância de critérios fixados em norma interna da empresa.",
  },
  {
    title:
      "Indenizatórias pela não inclusão de parcelas salariais no cálculo de complementação de previdência complementar (Processo nº 10233-57.2020.5.03.0160)",
    text: "Participação direta no incidente examinado pelo TST quanto à prescrição e marcos prescricionais a serem observados para ingresso de ação indenizatória contra ex-empregadores pela não inclusão de parcelas remuneratórias nas contribuições para a previdência privada complementar (debate decorrente dos Temas nº 955 e nº 1.021 do STJ).",
  },
  {
    title: "Gratificação semestral e PLR dos aposentados Banespa/Santander, no TST",
    text: "Vitória que pacificou a jurisprudência em favor de centenas de aposentados, com reconhecimento da incorporação do direito ao contrato de trabalho.",
  },
];

const destaqueImgs = [case01, case02, case03, case04, case05, case06];

const servicosPessoas: { title: string; items: string[] }[] = [
  {
    title: "Vínculo e contratação",
    items: [
      "Reconhecimento de vínculo de emprego",
      "Análise de contrato de prestação de serviços — pessoa jurídica (pejotização) e pessoa física",
      "Análise de fraude nos contratos de terceirização e pejotização",
      "Trabalho em plataformas digitais e por aplicativos: reconhecimento de vínculo e direitos",
      "Grupo econômico e sucessão de empregadores: responsabilização na cobrança de créditos",
      "Defesa da contratação mediante concurso público, para emprego público",
    ],
  },
  {
    title: "Jornada e regime de trabalho",
    items: [
      "Horas extras e descumprimento de intervalo intrajornada",
      "Descumprimento do descanso aos domingos para mulheres",
      "Pedido de home office, regime híbrido ou redução da jornada de trabalho",
      "Redução de jornada e adaptações razoáveis para trabalhadores com transtorno do espectro autista (TEA), neurodivergentes ou com deficiência, e para quem tem dependente nessas condições",
    ],
  },
  {
    title: "Remuneração e carreira",
    items: [
      "Pagamento por substituição eventual",
      "Incorporação de verba salarial e reenquadramento salarial",
      "Análise de pagamento de verbas rescisórias",
      "Cobrança de depósitos de FGTS não realizados",
      "Repetição de indébito e defesa em cobranças contra o trabalhador",
    ],
  },
  {
    title: "Saúde, dignidade e proteção no trabalho",
    items: [
      "Danos morais por cobranças e metas abusivas",
      "Danos morais por adoecimento ou assédio moral, sexual e eleitoral",
      "Danos materiais pelos gastos com adoecimento decorrente do trabalho",
      "Pensão mensal vitalícia pela perda da capacidade laborativa decorrente do trabalho",
      "Acidente de trabalho: estabilidade acidentária e reparações",
      "Insalubridade e periculosidade",
      "Atendimento especializado para vítimas de discriminação por gênero, raça, orientação sexual, orientação política ou religiosa",
      "Defesa do cumprimento das licenças maternidade e paternidade",
      "Estabilidades: gestante, doença, norma interna, pré-aposentadoria, entre outras",
    ],
  },
  {
    title: "Desligamento e defesa",
    items: [
      "Reintegração e nulidade da dispensa por justa causa",
      "Reintegração quando o desligamento ocorreu com o trabalhador doente",
      "Rescisão indireta",
      "Homologação e análise de acordos extrajudiciais (art. 855-B da CLT) antes da assinatura",
      "Defesa em processos administrativos",
    ],
  },
  {
    title:
      "Pessoas com deficiência e neurodivergentes e aqueles que têm filhos ou dependentes nessas condições",
    items: [
      "Adaptações no trabalho",
      "Redução de jornada sem redução salarial",
      "Teletrabalho",
      "Flexibilização de horários para terapias e acompanhamento",
      "Proteção contra a dispensa discriminatória",
    ],
  },
  {
    title: "Previdência",
    items: [
      "Revisão de benefício de previdência social (RGPS)",
      "Revisão de benefício de previdência complementar",
      "Indenização pela não inclusão de verba salarial no cálculo da previdência complementar",
      "Reconhecimento de aposentadoria especial",
    ],
  },
  {
    title: "Consultivo",
    items: ["Elaboração de pareceres", "Notas técnicas"],
  },
];

const bancariosDiferenciais = [
  "São mais de três décadas dedicadas aos temas, às carreiras, às mesas de negociação e aos empregadores bancários, financiários e do ramo financeiro. A relação da LBS Advogadas e Advogados com a categoria bancária é histórica. O escritório responde pelo departamento jurídico de Sindicatos dos Bancários de Brasília desde 1991 e de Campinas e Região desde 1993, além dos Bancários de Limeira, de Sorocaba e de Piracicaba, presta assessoria a entidades da categoria, como a FETEC-CUT/CN e a FETRAFI/MG, a associações do pessoal da Caixa Econômica Federal (APCEFs) e à FENAE.",
  "Repertório de teses, histórico de negociações coletivas e precedentes específicos de cada banco estão incorporados à prática da equipe e disponíveis para a análise de cada novo caso.",
  "A LBS acompanha os temas críticos da vida bancária e converte esse acompanhamento em orientação imediata no atendimento e ações judiciais: saúde do trabalhador e adoecimento, planos, como o Saúde Caixa, metas e assédio, reestruturações e programas de demissão.",
];

const bancariosDestaques: { title: string; text: string }[] = [
  {
    title: "Demissão motivada nas estatais (STF – RE nº 688.267)",
    text: "a tese que protege empregados concursados de bancos públicos como Banco do Brasil e Caixa contra a dispensa arbitrária foi construída em processo conduzido pela LBS.",
  },
  {
    title: "Gratificação semestral e PLR dos aposentados Banespa/Santander (TST — SDI-1)",
    text: "o escritório conduziu o caso que pacificou a jurisprudência em favor dos aposentados.",
  },
  {
    title: "7ª e 8ª horas dos bancários de TI",
    text: "vitória em favor de empregados do Banco do Brasil lotados em unidades de tecnologia, com reconhecimento da jornada de 6 horas.",
  },
  {
    title: "Defesa incorporada às negociações nacionais",
    text: "o acompanhamento permanente das mesas – remuneração, Saúde Caixa, reestruturações: antecipar no atendimento individual o que se discute nacionalmente.",
  },
];

const bancariosServicos: { title: string; items: string[] }[] = [
  {
    title: "Contratação, carreira e vínculo",
    items: [
      "Contratação mediante concurso público",
      "Isonomia, equiparação salarial e desvio de função",
      "Pagamento por substituição eventual",
      "Incorporação de gratificação por descomissionamento",
      "Incorporação de anuênios",
      "Incorporação de CTVA, CTC e Porte de Unidade, para empregados da Caixa Econômica Federal",
      "Reconhecimento da natureza salarial do auxílio-alimentação e sua incorporação",
      "Defesa da manutenção de direitos após revogação de norma interna",
      "Reconhecimento de vínculo de emprego direto com a instituição financeira, nos casos de terceirização e pejotização",
      "Reconhecimento da condição de bancário ou financiário para empregados de instituições de pagamento",
    ],
  },
  {
    title: "Jornada e regime de trabalho",
    items: [
      "Horas extras a partir da 6ª ou da 8ª hora diária",
      "Regime de trabalho em home office ou híbrido e redução da jornada",
      "Descumprimento do descanso aos domingos para mulheres e do intervalo intrajornada",
      "Redução de jornada e adaptações para trabalhadores com TEA, neurodivergentes ou com deficiência, e para quem tem dependente nessas condições",
    ],
  },
  {
    title: "Remuneração e verbas",
    items: [
      "Pagamento de PLR proporcional em caso de demissão",
      "PLR Banespa (gratificação semestral incorporada)",
      "Análise de pagamento de verbas rescisórias",
    ],
  },
  {
    title: "Saúde, dignidade e proteção no trabalho",
    items: [
      "Danos morais por cobranças e metas abusivas",
      "Danos morais por adoecimento ou assédio moral, sexual e eleitoral",
      "Danos materiais pelos gastos com adoecimento decorrente do trabalho",
      "Pensão mensal vitalícia pela perda da capacidade laborativa decorrente do trabalho",
      "Limbo previdenciário",
      "Insalubridade e periculosidade",
      "Cobertura de plano de saúde e negativas indevidas",
      "Descumprimento das licenças maternidade e paternidade",
      "Análise de estabilidade pré-aposentadoria",
    ],
  },
  {
    title: "Demissão e defesa",
    items: [
      "Reintegração e nulidade da dispensa por justa causa",
      "Defesa em processos administrativos",
      "Defesa em processos de cobrança contra trabalhadores; análise de responsabilidade contratual",
    ],
  },
  {
    title: "Previdência e tributação",
    items: [
      "Indenização pela não inclusão de verba salarial no cálculo da previdência complementar",
      "Análise e revisão de benefício de previdência social (RGPS e RPPS)",
      "Análise e revisão de benefício de previdência complementar (FUNCEF, PREVI, PETROS, REGIUS, POSTALIS, FUNPRESP, entre outros)",
      "Planejamento previdenciário",
      "Isenção de imposto de renda para aposentados com doença grave ou doença do trabalho",
      "Questionamento da tributação sobre contribuição extraordinária de equacionamento da previdência complementar",
    ],
  },
  {
    title: "Patrimônio e sucessão",
    items: [
      "Indenizações em fraudes bancárias",
      "Responsabilidade civil",
      "Inventário extrajudicial e judicial",
    ],
  },
];

export const Route = createFileRoute("/solucoes/defesa-da-pessoa-que-trabalha")({
  head: () => ({
    meta: [
      { title: "Defesa da pessoa que trabalha | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Defesa jurídica de quem trabalha e das entidades que as representam: vínculo, jornada, remuneração, saúde, desligamento e previdência.",
      },
      {
        property: "og:title",
        content: "Defesa da pessoa que trabalha | LBS Advogadas e Advogados",
      },
      {
        property: "og:description",
        content:
          "A origem e a razão de existir da LBS: defesa contínua da pessoa que trabalha, com atuação em todas as instâncias e nos Tribunais Superiores.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/defesa-da-pessoa-que-trabalha" }],
  }),
  component: DefesaPage,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">{children}</p>
  );
}

const publicoItems: { text: string; img: string; alt: string }[] = [
  {
    text: "sob vínculo celetista",
    img: publicoFoto,
    alt: "Reunião de trabalho no escritório da LBS",
  },
  {
    text: "contratadas como pessoa jurídica ou pessoa física",
    img: publicoFoto02,
    alt: "Profissional independente trabalhando em seu escritório",
  },
  {
    text: "empregadas de empresas privadas ou de estatais",
    img: publicoFoto03,
    alt: "Ambiente corporativo e institucional",
  },
  {
    text: "e para as entidades que as representam: sindicatos, federações, confederações e associações",
    img: publicoFoto04,
    alt: "Assembleia sindical de trabalhadores",
  },
];

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
          {/* texto */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(14px)",
              transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <SectionLabel>Público atendido</SectionLabel>
            <p className="mt-5 max-w-[340px] text-[26px] font-light leading-[1.15] tracking-tight text-lbs-ink sm:text-[34px]">
              Advogamos e assessoramos pessoas que trabalham
            </p>
            <div className="mt-7 h-[2px] w-14 bg-lbs-magenta" />
            <p className="mt-7 max-w-[300px] text-[12.5px] leading-[1.85] text-lbs-ink/55">
              Atendemos também advogadas e advogados que buscam parceria especializada para seus
              casos.
            </p>
          </div>

          {/* faixa fotográfica vertical com corte geométrico */}
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
                  style={{
                    opacity: i === active ? 1 : 0,
                    transition: "opacity 380ms ease",
                  }}
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

          {/* índice editorial */}
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

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!on}
              className="pb-10"
            >
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
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 72px 100%, 0 calc(100% - 72px))",
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
      {/* imagem contextual */}
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
      {/* overlay de legibilidade */}
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
      {/* linha rosa */}
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
              Casos que mudaram o direito de quem trabalha
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
            {String(destaques.length).padStart(2, "0")} casos
          </span>
        </div>

        {/* Caso emblemático — fixo */}
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
              Caso emblemático
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

        {/* Grade editorial de cases 02–06 */}
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


function DefesaPage() {
  const [contexto, setContexto] = useState<"pessoas" | "bancarios">("pessoas");
  const [sobreOpen, setSobreOpen] = useState(false);




  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={solDefesa}
            alt="Pessoas em ambiente de trabalho"
            width={1920}
            height={912}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-5 sm:px-6 sm:pb-24 lg:px-8">
          <SiteHeader active="Atuação" />

          <div className="relative z-10 mt-16 max-w-[780px] sm:mt-20">
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta-soft">
              Soluções
            </p>
            <h1 className="mt-5 text-[32px] font-light leading-[1.18] tracking-tight text-white sm:text-[42px] lg:text-[48px]">
              Defesa da pessoa que trabalha
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
              A origem e a razão de existir da LBS
            </h2>
            <div className="mt-8 h-[2px] w-14 bg-lbs-magenta" />
          </div>
          <div className="max-w-[620px] space-y-10">
            {diferenciais.map((p) => (
              <p key={p} className="text-[14px] leading-[2.05] text-lbs-ink/65">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PÚBLICO ATENDIDO — faixa editorial viva */}
      <PublicoAtendido />


      {/* DESTAQUES — galeria editorial de cases */}
      <DestaquesGaleria />


      {/* SERVIÇOS — com módulo especializado em abas */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[30%_70%] lg:gap-20 lg:px-8">
          {/* COLUNA ESQUERDA — introdução editorial */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <SectionLabel>Serviços</SectionLabel>
            <h2 className="mt-6 max-w-[320px] text-[28px] font-light leading-[1.18] tracking-tight text-lbs-ink sm:text-[34px]">
              Análises, pareceres, pedidos administrativos e ações judiciais
            </h2>
            <div className="mt-8 h-[2px] w-12 bg-lbs-magenta" />
            <p className="mt-8 max-w-[300px] text-[13px] leading-[1.95] text-lbs-ink/55">
              Escolha o contexto de atendimento para ver os temas correspondentes.
            </p>
          </div>

          {/* COLUNA DIREITA — contextos + accordion */}
          <div>
            <div
              role="tablist"
              aria-label="Contexto de atendimento"
              className="flex flex-wrap gap-0 border-b border-lbs-ink/12"
            >
              {(
                [
                  { id: "pessoas", label: "Pessoas que trabalham" },
                  { id: "bancarios", label: "Bancárias, bancários e ramo financeiro" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={contexto === tab.id}
                  onClick={() => setContexto(tab.id)}
                  className={`-mb-px border-b-2 px-1 pb-4 pr-8 text-left text-[13px] transition-colors ${
                    contexto === tab.id
                      ? "border-lbs-magenta text-lbs-magenta"
                      : "border-transparent text-lbs-ink/40 hover:text-lbs-ink/70"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {contexto === "pessoas" ? (
              <div role="tabpanel">
                <p className="mt-10 max-w-[640px] text-[14px] leading-[1.9] text-lbs-ink/65">
                  Pessoas que trabalham – vínculo celetista, contratos como pessoa jurídica e
                  pessoa física.
                </p>
                <ServiceGroups groups={servicosPessoas} idPrefix="pessoas" />
              </div>
            ) : (
              <div role="tabpanel">
                <div className="mt-10">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-lbs-ink/40">
                    Módulo especializado
                  </span>
                  <h3 className="mt-4 max-w-[520px] text-[24px] font-light leading-[1.2] text-lbs-ink sm:text-[30px]">
                    Bancárias, bancários e ramo financeiro
                  </h3>
                  <div className="mt-6 h-[2px] w-12 bg-lbs-magenta" />
                  <div className="mt-8 max-w-[640px] space-y-8">
                    {bancariosDiferenciais.map((p) => (
                      <p key={p} className="text-[13.5px] leading-[2] text-lbs-ink/65">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-16 border-t border-lbs-ink/12 pt-10">
                  <SectionLabel>Destaques do setor</SectionLabel>
                  <div className="mt-8 grid gap-x-14 gap-y-9 sm:grid-cols-2">
                    {bancariosDestaques.map((d, i) => (
                      <article key={d.title} className="flex gap-5">
                        <span className="mt-1 text-[11px] tabular-nums tracking-[0.16em] text-lbs-magenta">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-[14.5px] font-normal leading-[1.45] text-lbs-ink">
                            {d.title}
                          </h4>
                          <p className="mt-3 text-[12.5px] leading-[1.85] text-lbs-ink/60">
                            {d.text}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="mt-16">
                  <p className="max-w-[640px] text-[13px] leading-[1.9] text-lbs-ink/60">
                    Análises, pareceres, pedidos administrativos e ações judiciais referentes aos
                    seguintes temas:
                  </p>
                  <ServiceGroups groups={bancariosServicos} idPrefix="bancarios" />
                </div>
              </div>
            )}
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
