import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import solAdm from "@/assets/sol-adm-publica.jpg";
import case01 from "@/assets/case-01.jpg";
import case02 from "@/assets/case-02.jpg";
import case03 from "@/assets/case-03.jpg";
import case04 from "@/assets/case-04.jpg";
import publicoFoto from "@/assets/publico-atendido-foto.jpg";
import publicoFoto02 from "@/assets/publico-atendido-02.jpg";
import publicoFoto03 from "@/assets/publico-atendido-03.jpg";
import publicoFoto04 from "@/assets/publico-atendido-04.jpg";
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
  "Servidoras e servidores públicos são parte fundamental que merece respeito e proteção aos seus direitos.",
  "A LBS presta assessoria jurídica a confederações e a entidades de servidores públicos, posição que a mantém em contato permanente com as carreiras, os órgãos e as mesas de negociação do funcionalismo. É o escritório que elabora os pareceres sobre progressão, promoção e estruturação de carreiras, entre outros temas, que subsidiam as negociações das entidades com o próprio Ministério da Gestão e da Inovação em Serviços Públicos.",
  "Desse lugar decorre o domínio da lógica interna das carreiras públicas: estatutos, planos de cargos, regras remuneratórias e previdenciárias específicas, e a capacidade de identificar, antes do litígio, onde estão as distorções que atingem as categorias.",
  "A atuação se dá nas duas esferas, administrativa e judicial, do requerimento ao órgão de origem até os Tribunais Superiores, em que o escritório tem prática consolidada, com sustentações orais no STF e no STJ em temas de interesse do funcionalismo.",
];

const destaques: { title: string; text: string }[] = [
  {
    title: "Assessoria jurídica nacional do funcionalismo",
    text: "A LBS assessora confederações nacionais de servidores públicos federais, elaborando os pareceres sobre carreiras que subsidiam as negociações das entidades com o Ministério da Gestão – da mesa de negociação ao processo.",
  },
  {
    title: "Análise técnica e conjuntural da reforma administrativa",
    text: "Pareceres do escritório sobre as propostas de reforma administrativa, apontando riscos de redução de direitos, subsidiam entidades de servidores e o debate público em defesa do serviço público.",
  },
  {
    title: "Atuação no Supremo Tribunal Federal",
    text: "O escritório atua à luz das teses de repercussão geral que regem os vínculos com o Estado — da demissão motivada nas estatais, fixada em processo conduzido pela própria LBS no STF, aos temas sobre contratação temporária e terceirização na administração pública.",
  },
  {
    title: "Defesa desde o requerimento administrativo",
    text: "A atuação começa antes do litígio: requerimentos, recursos administrativos e acompanhamento junto a órgãos, Tribunais de Contas e Advocacia Pública, buscando a solução mais rápida para o servidor.",
  },
];

const destaqueImgs = [case01, case02, case03, case04];

const publicoItems: { text: string; img: string; alt: string }[] = [
  {
    text: "Servidoras e servidores públicos federais, estaduais e municipais, ativos e aposentados",
    img: publicoFoto,
    alt: "Servidores públicos em ambiente de trabalho",
  },
  {
    text: "Pessoas que trabalham para o Estado sob outros vínculos: contratados temporários, bolsistas, terceirizados e empregados públicos",
    img: publicoFoto02,
    alt: "Trabalhadores contratados por vínculos diversos com o poder público",
  },
  {
    text: "Associações, sindicatos, federações e confederações",
    img: publicoFoto03,
    alt: "Assembleia de entidade representativa de servidores",
  },
  {
    text: "Advogadas e advogados que tenham interesse em estabelecer parceria",
    img: publicoFoto04,
    alt: "Reunião entre advogados parceiros",
  },
];

type Group = { title: string; items: string[] };

const servidoresServicos: Group[] = [
  {
    title: "Concurso público e ingresso",
    items: [
      "Concurso público: edital, nomeação, posse, preterição e cotas",
      "Ações decorrentes do estágio probatório",
      "Defesa de anistiados",
    ],
  },
  {
    title: "Carreira e movimentação",
    items: [
      "Posicionamento na carreira: reenquadramento e desvio de função",
      "Consultivo sobre aspectos da carreira",
      "Transferências, licenças e afastamentos: capacitação, acompanhamento de cônjuge, tratamento de saúde, cessão, remoção, redistribuição, interesses particulares, mandato classista, mandato eletivo e missão no exterior",
      "Licença maternidade, paternidade e adotante",
      "Reintegração, recondução e reversão",
    ],
  },
  {
    title: "Remuneração, direitos e vantagens",
    items: [
      "Direitos e vantagens: vencimento, vantagens, indenizações, ajuda de custo, indenização de transporte, auxílio-moradia e adicionais",
      "Adicional de periculosidade e insalubridade: acompanhamento de processo administrativo e judicial",
      "Serviços extraordinários e adicional noturno",
      "Aplicação e cobrança do piso da categoria",
      "Indenização por licença-prêmio e outros direitos não gozados",
      "Defesa e ação judicial referentes a cobranças e repetição de indébito",
    ],
  },
  {
    title: "Dignidade e proteção no trabalho",
    items: [
      "Processo administrativo e judicial em decorrência de assédio ou conduta discriminatória por gênero, raça, orientação sexual, orientação política ou religiosa",
      "Ações indenizatórias e ações contra o Estado por dano material e moral (responsabilidade civil do Estado)",
    ],
  },
  {
    title: "Defesa disciplinar e reintegração",
    items: [
      "Defesa em processo administrativo disciplinar (PAD) e acompanhamento de sindicância",
      "Reintegração",
    ],
  },
  {
    title: "Previdência",
    items: [
      "Aposentadoria do regime próprio e do regime complementar",
      "Planejamento previdenciário e análise de tempo de serviço",
      "Acompanhamento do processo de aposentadoria no Tribunal de Contas",
      "Pensão e reconhecimento de vínculo para fins de pensão",
    ],
  },
  {
    title: "Atuação extrajudicial",
    items: [
      "Acompanhamento e atuação junto ao Ministério Público, à Advocacia Pública e aos Tribunais de Contas",
      "Negociação das relações de trabalho",
      "Minuta de projetos de lei para reestruturação de carreira",
    ],
  },
];

const estataisDiferenciais = [
  "O empregado público vive em regime híbrido: contratado pela CLT, mas admitido por concurso e vinculado a uma empresa estatal, está sujeito ao mesmo tempo ao Direito do Trabalho e aos princípios do Direito Administrativo. Defendê-lo exige dominar os dois campos e a LBS reúne as duas especialidades.",
  "Assessoramos entidades representativas dos empregados de empresas públicas e atuamos de forma preventiva nos momentos críticos da vida das estatais: reestruturações, planos de demissão, alterações de benefícios e de planos de saúde, orientando a categoria sobre o que assinar, o que recusar e como se proteger.",
];

const estataisServicos: Group[] = [
  {
    title: "Serviços",
    items: [
      "Nulidade da dispensa sem motivação e reintegração de empregados concursados de estatais (tese do RE 688.267)",
      "Concurso público para emprego público: nomeação, preterição e defesa da contratação",
      "Isonomia, equiparação salarial, desvio de função e enquadramento em plano de cargos e salários (PCS)",
      "Promoções e progressões previstas em norma interna; defesa da manutenção de direitos após revogação de norma interna",
      "Incorporação de gratificações por descomissionamento e de anuênios",
      "Análise de planos de demissão voluntária (PDV) e de reestruturações antes da adesão",
      "Estabilidades e reintegração: desligamento com o trabalhador doente, pré-aposentadoria e demais hipóteses",
      "Danos morais por metas abusivas, assédio moral, sexual e eleitoral; adoecimento decorrente do trabalho e limbo previdenciário",
      "Planos de saúde de autogestão das estatais: cobertura, negativas indevidas e alterações de custeio",
      "Previdência complementar dos fundos de estatais (FUNCEF, PREVI, PETROS, POSTALIS, FUNPRESP, entre outros): revisões, verbas não incluídas no cálculo e questionamento de contribuições extraordinárias de equacionamento",
      "Defesa em processos administrativos e de apuração disciplinar internos",
      "Horas extras, substituição eventual e demais verbas do contrato",
    ],
  },
];


const intermediariosDiferenciais = [
  "Entre o servidor estatutário e o empregado celetista, existe zona intermediária onde trabalham milhões de pessoas: contratados temporários, bolsistas de instituições públicas de pesquisa e ensino, terceirizados que prestam serviço à administração. É a zona em que a proteção ao trabalho é mais frágil, os enquadramentos jurídicos são menos evidentes e o conhecimento técnico faz mais diferença.",
  "A LBS atua nesse terreno em duas frentes. No contencioso, defende trabalhadoras e trabalhadores cujos vínculos com o poder público não se encaixam nos moldes tradicionais, construindo, caso a caso, o enquadramento que assegura os direitos devidos. Na formação dos precedentes, o escritório está presente nos julgamentos que definem as regras desse campo — como os temas de repercussão geral sobre a responsabilidade da administração pública na terceirização.",
  "O diferencial é a leitura integrada do vínculo. Um mesmo caso pode envolver Direito do Trabalho, Direito Administrativo e responsabilidade civil do Estado; a estrutura multidisciplinar da LBS cobre essas frentes internamente. E, como assessoria jurídica de entidades que representam essas pessoas, inclusive categorias que a advocacia tradicional raramente alcança, como bolsistas e temporários de órgãos e fundações públicas, o escritório desenvolve teses em conjunto com quem conhece a realidade concreta desses contratos.",
];

const intermediariosServicos: Group[] = [
  {
    title: "Contratadas e contratados temporários (art. 37, IX, CF)",
    items: [
      "Cobrança dos depósitos de FGTS em contratação temporária nula ou irregular",
      "Descaracterização do contrato temporário desvirtuado — renovações sucessivas, ausência de necessidade temporária ou de excepcional interesse público — e cobrança dos direitos decorrentes",
      "13º salário e férias com terço constitucional, quando previstos no regime local ou em caso de desvirtuamento do contrato (Tema 551 do STF)",
      "Licença-maternidade e estabilidade provisória da gestante contratada por prazo determinado (Tema 542 do STF)",
      "Verbas não pagas durante e ao final do contrato: saldo remuneratório, parcelas inadimplidas e indenização por rescisão antecipada",
      "Questionamento de prorrogações irregulares e de preterição em nova seleção; análise da legalidade do processo seletivo simplificado",
      "Adicionais previstos no regime aplicável: insalubridade, periculosidade, serviço extraordinário e adicional noturno",
      "Regularização dos recolhimentos previdenciários do contrato, contagem e averbação de tempo de contribuição",
      "Ações indenizatórias contra o Estado por dano material e moral, inclusive acidente e adoecimento em serviço",
    ],
  },
  {
    title: "Bolsistas (pesquisa, ensino, extensão e capacitação)",
    items: [
      "Reconhecimento de vínculo quando a bolsa é desvirtuada para encobrir trabalho subordinado, com cobrança dos direitos correspondentes",
      "Cobrança e indenização por bolsas atrasadas, suspensas ou canceladas indevidamente",
      "Defesa em cobranças de devolução ou ressarcimento de valores de bolsa — desligamento do programa, adoecimento, não cumprimento de requisitos —, incluindo alegação de prescrição e revisão administrativa",
      "Prorrogação da bolsa por licença-maternidade e proteção da bolsista gestante (Lei 13.536/2017 e normas CAPES/CNPq)",
      "Suspensão da bolsa por motivo de saúde, sem perda do benefício",
      "Defesa em glosas e cortes por acúmulo de bolsa com atividade remunerada",
      "Assédio moral e sexual e condutas discriminatórias no ambiente acadêmico e de pesquisa: medidas administrativas e judiciais",
    ],
  },
  {
    title: "Terceirizadas e terceirizados a serviço da administração pública",
    items: [
      "Responsabilização subsidiária do ente público pelas verbas trabalhistas inadimplidas pela empresa contratada, com produção da prova da falha de fiscalização",
      "Ação de cobrança de salários, FGTS e verbas rescisórias não pagos, inclusive nos casos de desaparecimento ou insolvência da empresa prestadora",
      "Análise de contrato administrativo por descumprimento de direitos trabalhistas",
      "Verbas devidas na troca de empresa prestadora: rescisão, continuidade da prestação e responsabilidade das contratantes sucessivas",
      "Aplicação e cobrança do piso da categoria e das normas coletivas aplicáveis",
      "Reconhecimento de vínculo diretamente com o tomador em caso de terceirização irregular ou pejotização",
      "Adicionais de insalubridade e periculosidade, horas extras e adicional noturno no ambiente do órgão tomador",
      "Acidente de trabalho e adoecimento nas dependências do ente público",
      "Assédio e condutas discriminatórias praticadas por gestores ou servidores do órgão tomador",
      "Retenção de valores e garantias do contrato administrativo em favor dos trabalhadores: representações ao órgão contratante, ao Tribunal de Contas e ao Ministério Público do Trabalho",
    ],
  },
  {
    title: "Transversais aos três públicos",
    items: [
      "Consultivo sobre a natureza do vínculo e os direitos dele decorrentes; análise de editais, contratos e termos de outorga",
      "Processo administrativo e judicial em decorrência de assédio ou conduta discriminatória por gênero, raça, orientação sexual, orientação política ou religiosa",
      "Responsabilidade civil do Estado: ações por dano material e moral",
      "Atuação extrajudicial junto ao Ministério Público, ao Ministério Público do Trabalho, à Advocacia Pública e aos Tribunais de Contas",
    ],
  },
];

export const Route = createFileRoute("/solucoes/vinculos-com-a-administracao-publica")({
  head: () => ({
    meta: [
      { title: "Vínculos com a Administração Pública | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Defesa de servidoras e servidores públicos, empregados de estatais, temporários, bolsistas e terceirizados, na esfera administrativa e judicial.",
      },
      {
        property: "og:title",
        content: "Vínculos com a Administração Pública | LBS Advogadas e Advogados",
      },
      {
        property: "og:description",
        content:
          "Assessoria a entidades do funcionalismo e atuação do requerimento administrativo aos Tribunais Superiores.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/vinculos-com-a-administracao-publica" }],
  }),
  component: VinculosPage,
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
              Advogamos em defesa dos servidores públicos e de suas entidades
            </p>
            <div className="mt-7 h-[2px] w-14 bg-lbs-magenta" />
            <p className="mt-7 max-w-[300px] text-[12.5px] leading-[1.85] text-lbs-ink/55">
              Entidades sindicais e associativas do funcionalismo encontram aqui assessoria
              permanente, da mesa de negociação ao processo.
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

function ServiceGroups({ groups, idPrefix }: { groups: Group[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 border-t border-lbs-ink/12">
      {groups.map((group, i) => {
        const on = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;

        if (group.items.length === 0) {
          return (
            <div key={group.title} className="border-b border-lbs-ink/12">
              <h3 className="py-7 pr-8 text-[20px] font-light leading-[1.25] tracking-tight text-lbs-ink sm:py-9 sm:text-[26px] lg:text-[30px]">
                {group.title}
              </h3>
            </div>
          );
        }

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
      className="group relative flex h-[260px] cursor-pointer flex-col overflow-hidden border-b border-white/12 outline-none focus-visible:ring-1 focus-visible:ring-lbs-magenta sm:[&:nth-child(odd)]:border-r"
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
              Da mesa de negociação ao Supremo
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

        <div className="mt-14 grid border-t border-white/12 sm:grid-cols-2">
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

type Contexto = "servidores" | "estatais" | "intermediarios";

const contextos: { id: Contexto; label: string }[] = [
  { id: "servidores", label: "Servidoras e servidores públicos" },
  { id: "estatais", label: "Empregadas e empregados públicos e de empresas estatais" },
  { id: "intermediarios", label: "Temporários, bolsistas e terceirizados" },
];

function SobreAccordion({ paragraphs }: { paragraphs: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-lbs-ink/12">
      <div
        className="border-b transition-colors duration-300"
        style={{
          borderColor: open
            ? "color-mix(in oklab, var(--lbs-magenta) 55%, transparent)"
            : "color-mix(in oklab, var(--lbs-ink) 12%, transparent)",
        }}
      >
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          className="flex w-full items-center justify-between py-5 text-left outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-lbs-magenta"
          style={{ color: open ? "var(--lbs-magenta)" : "var(--lbs-ink)" }}
        >
          <span className="text-[15px] font-light tracking-tight sm:text-[17px]">
            Descrição e diferenciais
          </span>
          <span
            aria-hidden="true"
            className="relative h-[18px] w-[18px] shrink-0 transition-transform duration-[380ms] ease-out sm:h-[22px] sm:w-[22px]"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
          </span>
        </button>

        <div
          className="overflow-hidden transition-all duration-[400ms] ease-out"
          style={{ maxHeight: open ? 2400 : 0, opacity: open ? 1 : 0 }}
        >
          <div className="max-w-[640px] space-y-8 pb-8">
            {paragraphs.map((p) => (
              <p key={p} className="text-[13.5px] leading-[2] text-lbs-ink/65">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VinculosPage() {
  const [contexto, setContexto] = useState<Contexto>("servidores");

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={solAdm}
            alt="Edifício da administração pública"
            width={1920}
            height={1080}
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
              Vínculos com a Administração Pública
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
              A lógica interna das carreiras públicas
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
            Análises, pareceres, requerimentos administrativos e ações judiciais
          </h2>

          <div className="mt-12" role="tablist" aria-label="Tipo de vínculo com o Estado">
            {contextos.map((ctx) => {
              const active = contexto === ctx.id;
              return (
                <button
                  key={ctx.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setContexto(ctx.id)}
                  className={`group flex w-full items-center justify-between border-b py-7 text-left outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-lbs-magenta sm:py-9 ${
                    active ? "text-lbs-magenta" : "text-lbs-ink hover:text-lbs-magenta"
                  }`}
                  style={{
                    borderColor: active
                      ? "var(--lbs-magenta)"
                      : "color-mix(in oklab, var(--lbs-ink) 12%, transparent)",
                  }}
                >
                  <span className="pr-6 text-[18px] font-light leading-[1.25] tracking-tight transition-colors duration-300 sm:text-[24px] lg:text-[26px]">
                    {ctx.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`text-[20px] font-light transition-all duration-300 group-hover:translate-x-1 ${
                      active ? "text-lbs-magenta" : "text-lbs-ink/30 group-hover:text-lbs-magenta"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {contexto === "servidores" && (
            <div role="tabpanel" className="mt-14">
              <p className="max-w-[720px] text-[14px] leading-[1.9] text-lbs-ink/65">
                Servidoras e servidores públicos. Análises, pareceres, requerimentos administrativos
                e ações judiciais referentes aos seguintes temas:
              </p>
              <div className="mt-8">
                <ServiceGroups groups={servidoresServicos} idPrefix="servidores" />
              </div>
            </div>
          )}

          {contexto === "estatais" && (
            <div role="tabpanel" className="mt-14">
              <SobreAccordion paragraphs={estataisDiferenciais} />
              <p className="mt-10 max-w-[720px] text-[14px] leading-[1.9] text-lbs-ink/65">
                Análises, pareceres, pedidos administrativos e ações judiciais referentes aos
                seguintes temas:
              </p>
              <div className="mt-8">
                <ServiceGroups groups={estataisServicos} idPrefix="estatais" />
              </div>
            </div>
          )}

          {contexto === "intermediarios" && (
            <div role="tabpanel" className="mt-14">
              <SobreAccordion paragraphs={intermediariosDiferenciais} />
              <p className="mt-10 max-w-[720px] text-[14px] leading-[1.9] text-lbs-ink/65">
                Serviços organizados por vínculo, com produtos transversais aos três públicos:
              </p>
              <div className="mt-8">
                <ServiceGroups groups={intermediariosServicos} idPrefix="intermediarios" />
              </div>
            </div>
          )}
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
