import { createFileRoute } from "@tanstack/react-router";

import solDefesa from "@/assets/defesa-pessoa-que-trabalha-oficina.jpg.asset.json";

import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { equipeDefesaPessoaQueTrabalha } from "@/data/servico-equipe";
import {
  DescricaoSection,
  DestaquesGaleria,
  PublicoAtendido,
  ServicosPorContexto,
  SociosResponsaveis,
  ServicoHero,
  type Destaque,
  type PublicoItem,
  type ServiceGroup,
} from "@/components/servicos/ServicoSections";
import publicoCorredor from "@/assets/publico-corredor.jpg.asset.json";
import publicoAutonoma from "@/assets/publico-autonoma-noite.jpg.asset.json";
import publicoIndustria from "@/assets/medium-shot-smiley-man-wearing-helmet.jpg.asset.json";
import publicoEntidades from "@/assets/publico-sindicatos-fabrica.jpg.asset.json";

const diferenciais = [
  "A defesa da pessoa que trabalha é a origem e a razão de existir da LBS Advogadas e Advogados.",
  "O contencioso trabalhista do escritório nasceu ao lado do novo modelo de organização dos trabalhadores, inaugurado pela Constituição de 1988. A LBS trabalha com entidades sindicais e se desenvolve a partir dessa experiência com o atendimento de categorias inteiras de trabalhadores.",
  "As normas, as negociações coletivas e o próprio direito estão em constante transformação; nós nos mantemos firmes na defesa das pessoas que trabalham. Participamos ativamente do debate público sobre os novos modelos de contratação, da construção das teses que percorrem o Poder Judiciário e da interlocução com o Poder Legislativo, na elaboração de normas protetivas e no enfrentamento das propostas de redução de direitos.",
];


const destaques: Destaque[] = [
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

const servicosPessoas: ServiceGroup[] = [
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
    ],
  },
  {
    title: "Defesa em processos administrativos",
    items: [],
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

const bancariosDestaques: Destaque[] = [
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

const bancariosServicos: ServiceGroup[] = [
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
    items: ["Reintegração e nulidade da dispensa por justa causa"],
  },
  {
    title: "Defesa em processos administrativos",
    items: [],
  },
  {
    title:
      "Defesa em processos de cobrança contra trabalhadores; análise de responsabilidade contratual",
    items: [],
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

const publicoItems: PublicoItem[] = [
  {
    text: "sob vínculo celetista",
    img: publicoCorredor.url,
    focus: "50% 30%",
    alt: "Dois colegas de trabalho conversando e sorrindo em corredor de empresa",
  },
  {
    text: "contratadas como pessoa jurídica ou pessoa física",
    img: publicoAutonoma.url,
    focus: "62% 30%",
    alt: "Profissional sorrindo enquanto trabalha com notebook em escritório à noite",
  },
  {
    text: "empregadas de empresas privadas ou de estatais",
    img: publicoIndustria.url,
    focus: "50% 35%",
    alt: "Trabalhador sorrindo com capacete e colete refletivo em ambiente industrial",
  },
  {
    text: "e para as entidades que as representam: sindicatos, federações, confederações e associações",
    img: publicoEntidades.url,
    focus: "50% 35%",
    alt: "Trabalhadores e líderes reunidos em ambiente industrial ao redor de quadro branco",
  },
];

export const Route = createFileRoute("/servicos/defesa-da-pessoa-que-trabalha")({
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
    links: [{ rel: "canonical", href: "/servicos/defesa-da-pessoa-que-trabalha" }],
  }),
  component: DefesaPage,
});

function DefesaPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ServicoHero
        image={solDefesa.url}
        alt="Dois profissionais de oficina mecânica conversando no ambiente de trabalho"
        title="Defesa da pessoa que trabalha"
        intro={diferenciais[0]}
      />

      <DescricaoSection
        title="A origem e a razão de existir da LBS"
        paragraphs={diferenciais.slice(1)}
      />

      <PublicoAtendido
        title="Para quem trabalha, em qualquer vínculo"
        lead="Atendemos quem trabalha sob diferentes formas de contratação e as entidades que as representam."
        items={publicoItems}
      />

      <DestaquesGaleria title="Teses que ampliaram direitos" items={destaques} />

      <ServicosPorContexto
        title="Análises, pareceres, pedidos administrativos e ações judiciais"
        ariaLabel="Contexto de atendimento"
        contextos={[
          {
            id: "pessoas",
            label: "Pessoas que trabalham",
            lead: "Pessoas que trabalham – vínculo celetista, contratos como pessoa jurídica e pessoa física. Análises, pareceres, pedidos administrativos e ações judiciais referentes aos seguintes temas:",
            groups: servicosPessoas,
            servicoSlug: "defesa-da-pessoa-que-trabalha",
          },
          {
            id: "bancarios",
            label: "Bancárias, bancários e ramo financeiro",
            lead: "Análises, pareceres, pedidos administrativos e ações judiciais referentes aos seguintes temas:",
            paragraphs: bancariosDiferenciais,
            destaques: bancariosDestaques,
            groups: bancariosServicos,
          },
        ]}
      />

      <SociosResponsaveis people={equipeDefesaPessoaQueTrabalha} />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
