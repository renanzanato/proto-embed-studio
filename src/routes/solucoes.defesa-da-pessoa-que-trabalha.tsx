import { createFileRoute, Link } from "@tanstack/react-router";

import solDefesa from "@/assets/sol-defesa.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { teamMembers } from "@/data/equipe";

const socios = teamMembers.filter((m) => m.role === "Sócio" || m.role === "Sócia");

const diferenciais = [
  "A defesa da pessoa que trabalha é a origem e a razão de existir da LBS Advogadas e Advogados.",
  "O contencioso trabalhista do escritório nasceu ao lado do novo modelo de organização dos trabalhadores, inaugurado pela Constituição de 1988. A LBS trabalha com entidades sindicais e se desenvolve a partir dessa experiência com o atendimento de categorias inteiras de trabalhadores.",
  "As normas, as negociações coletivas e o próprio direito estão em constante transformação; nós nos mantemos firmes na defesa das pessoas que trabalham. Participamos ativamente do debate público sobre os novos modelos de contratação, da construção das teses que percorrem o Poder Judiciário e da interlocução com o Poder Legislativo, na elaboração de normas protetivas e no enfrentamento das propostas de redução de direitos.",
];

const publicoAtendido =
  "Advogamos e assessoramos pessoas que trabalham – sob vínculo celetista, contratadas como pessoa jurídica ou pessoa física, empregadas de empresas privadas ou de estatais – e para as entidades que as representam: sindicatos, federações, confederações e associações. Atendemos também advogadas e advogados que buscam parceria especializada para seus casos.";

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

function ServiceGroups({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-[6px] border border-black/8 bg-white p-6 transition-shadow hover:shadow-md"
        >
          <h4 className="border-b-2 border-lbs-magenta pb-3 text-[15px] font-normal leading-[1.4] text-lbs-ink">
            {group.title}
          </h4>
          <ul className="mt-4 space-y-2.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-[12.5px] leading-[1.75] text-lbs-ink/65"
              >
                <span className="absolute left-0 top-[9px] h-[5px] w-[5px] rounded-full bg-lbs-magenta" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DefesaPage() {
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
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
          <div>
            <SectionLabel>Descrição e diferenciais</SectionLabel>
            <h2 className="mt-5 text-[26px] font-light leading-[1.28] text-lbs-ink sm:text-[32px]">
              A origem e a razão de existir da LBS
            </h2>
          </div>
          <div className="space-y-6">
            {diferenciais.map((p) => (
              <p key={p} className="text-[13.5px] leading-[1.95] text-lbs-ink/65">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* PÚBLICO ATENDIDO */}
      <section className="w-full bg-lbs-ink py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Público atendido</SectionLabel>
          <p className="mt-6 max-w-[900px] text-[15px] leading-[1.9] text-white/80 sm:text-[17px]">
            {publicoAtendido}
          </p>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="w-full bg-[#f5f5f5] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Destaques</SectionLabel>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {destaques.map((d) => (
              <article
                key={d.title}
                className="rounded-[6px] border border-black/8 bg-white p-6 transition-shadow hover:shadow-md sm:p-7"
              >
                <h3 className="text-[15.5px] font-normal leading-[1.4] text-lbs-ink">
                  {d.title}
                </h3>
                <div className="mt-4 h-[2px] w-10 bg-lbs-magenta" />
                <p className="mt-4 text-[12.5px] leading-[1.85] text-lbs-ink/60">{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS 4.1 */}
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="mt-5 max-w-[760px] text-[24px] font-light leading-[1.3] text-lbs-ink sm:text-[30px]">
            Pessoas que trabalham – vínculo celetista, contratos como pessoa jurídica e pessoa
            física.
          </h2>
          <p className="mt-5 max-w-[640px] text-[13px] leading-[1.85] text-lbs-ink/60">
            Análises, pareceres, pedidos administrativos e ações judiciais referentes aos
            seguintes temas:
          </p>
          <ServiceGroups groups={servicosPessoas} />
        </div>
      </section>

      {/* 4.2 BANCÁRIAS, BANCÁRIOS E RAMO FINANCEIRO — NOVO CAPÍTULO */}
      <section className="w-full bg-[#f5f5f5] pb-20 pt-24 sm:pb-24 sm:pt-32">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="border-t border-lbs-ink/15 pt-12 sm:pt-16">
            <span className="text-[11px] uppercase tracking-[0.22em] text-lbs-ink/40">
              Capítulo 02
            </span>
            <h2 className="mt-4 max-w-[860px] text-[28px] font-light leading-[1.22] text-lbs-ink sm:text-[38px]">
              Bancárias, bancários e ramo financeiro
            </h2>
          </div>
          <h3 className="mt-14 text-[20px] font-light text-lbs-ink sm:text-[24px]">
            Descrição e diferenciais
          </h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {bancariosDiferenciais.map((p) => (
              <p
                key={p}
                className="border-t-2 border-lbs-magenta pt-5 text-[12.5px] leading-[1.9] text-lbs-ink/65"
              >
                {p}
              </p>
            ))}
          </div>

          <h3 className="mt-16 text-[20px] font-light text-lbs-ink sm:text-[24px]">Destaques</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {bancariosDestaques.map((d) => (
              <article
                key={d.title}
                className="rounded-[6px] border border-black/8 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h4 className="text-[15px] font-normal leading-[1.4] text-lbs-ink">{d.title}</h4>
                <p className="mt-3 text-[12.5px] leading-[1.85] text-lbs-ink/60">{d.text}</p>
              </article>
            ))}
          </div>

          <h3 className="mt-16 text-[20px] font-light text-lbs-ink sm:text-[24px]">Serviços</h3>
          <p className="mt-4 max-w-[640px] text-[13px] leading-[1.85] text-lbs-ink/60">
            Análises, pareceres, pedidos administrativos e ações judiciais referentes aos
            seguintes temas:
          </p>
          <ServiceGroups groups={bancariosServicos} />
        </div>
      </section>

      {/* SÓCIAS E SÓCIOS RESPONSÁVEIS */}
      <section className="w-full bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Sócias e sócios responsáveis</SectionLabel>
          <p className="mt-6 max-w-[620px] text-[13.5px] leading-[1.9] text-lbs-ink/65">
            Indicação na lista Excel.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                    className="h-[280px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
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

          <Link
            to="/equipe"
            className="mt-10 inline-block bg-lbs-ink px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-85"
          >
            Ver a equipe
          </Link>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
