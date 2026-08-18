import { createFileRoute } from "@tanstack/react-router";

import solTribunais from "@/assets/sol-tribunais.jpg";

import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { equipeTribunaisSuperiores } from "@/data/solucao-equipe";
import {
  DescricaoSection,
  DestaquesGaleria,
  PublicoAtendido,
  ServicosSection,
  SociosResponsaveis,
  SolucaoHero,
  type Destaque,
  type PublicoItem,
  type ServiceGroup,
} from "@/components/solucoes/SolucaoSections";

const diferenciais = [
  "A área é responsável pela condução dos processos que tramitam nos Tribunais Superiores em Brasília – TST, STJ e STF. A atuação especializada da equipe amplia a viabilidade de conhecimento e de análise dos casos nesses tribunais, contemplando não apenas o rigoroso cumprimento de prazos, mas a atuação que faz diferença no resultado: sustentações orais, diligências em gabinetes, audiências com desembargadores e ministros e entrega de memoriais.",
  "A LBS possui presença cotidiana e reconhecimento nos Tribunais Superiores. Essa presença é construída caso a caso, há décadas, na defesa de trabalhadoras e trabalhadores — diretamente, por meio de escritórios parceiros, de sindicatos, federações e confederações, e da assessoria jurídica à CUT Nacional. O escritório acompanha os processos de repercussão geral que definem o futuro dos direitos de quem trabalha, atuando pelos autores e reclamantes envolvidos e pelo ingresso de entidades como amicus curiae, inclusive no controle concentrado de constitucionalidade perante o STF.",
  "O acompanhamento é sustentado por uma Controladoria Jurídica própria: equipe dedicada ao monitoramento diário de publicações e andamentos, à gestão de prazos e ao controle de cada fase processual, que mantém parceiros e clientes informados sobre seus processos.",
];

const destaques: Destaque[] = [
  {
    title: "Teses construídas no Supremo",
    text: "A LBS conduziu o RE nº 688.267, em que o STF fixou o dever de motivação na demissão de empregados concursados de estatais, e realiza sustentações orais em julgamentos de repercussão para o mundo do trabalho.",
  },
  {
    title: "Decisão na SDI-1 do TST",
    text: "Na SDI-1 do TST, o escritório obteve a decisão que garantiu a gratificação semestral e a PLR dos aposentados Banespa/Santander, orientando centenas de ações semelhantes.",
  },
  {
    title: "Repercussão geral e teses vinculantes",
    text: "Acompanhamento de casos de repercussão geral e de incidentes com teses vinculantes, com ingresso de entidades relevantes como amicus curiae e intervenções em audiências públicas.",
  },
];

const publicoItems: PublicoItem[] = [
  {
    text: "Sindicatos, federações, confederações, centrais sindicais e associações",
    alt: "Assembleia de entidade representativa de trabalhadores",
  },
  {
    text: "Escritórios de advocacia e advogados que buscam atuação especializada em Brasília",
    alt: "Reunião entre advogados parceiros",
  },
  {
    text: "Pessoas físicas que buscam acompanhamento especializado em Tribunais Superiores",
    alt: "Atendimento individual em escritório de advocacia",
  },
];

const servicos: ServiceGroup[] = [
  {
    title: "Condução de processos nos Tribunais Superiores",
    items: [
      "Acompanhamento das publicações e elaboração das peças processuais necessárias",
      "Resposta a todos os recursos e manifestações das partes contrárias",
      "Diligências nos gabinetes, para agilizar o julgamento do processo",
      "Audiências com desembargadores e ministros antes do julgamento",
      "Elaboração e despacho de memoriais, com os aspectos mais importantes do caso",
      "Sustentações orais",
      "Acompanhamento das sessões de julgamento",
    ],
  },
  {
    title: "Atuação estratégica",
    items: [
      "Acompanhamento de casos de repercussão geral, inclusive com ingresso de entidades relevantes como amicus curiae",
      "Atuação no STF em controle concentrado de constitucionalidade",
      "Atuação estratégica em recursos e incidentes com teses vinculantes no TST e no STJ",
      "Ações rescisórias e mandados de segurança",
      "Dissídios coletivos",
      "Intervenções em audiências públicas",
    ],
  },
];

export const Route = createFileRoute("/solucoes/tribunais-superiores")({
  head: () => ({
    meta: [
      { title: "Tribunais Superiores | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Condução de processos no TST, STJ e STF: sustentações orais, memoriais, diligências em gabinetes e atuação estratégica em repercussão geral.",
      },
      { property: "og:title", content: "Tribunais Superiores | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Presença cotidiana em Brasília na defesa de trabalhadoras e trabalhadores, com Controladoria Jurídica própria e atuação em teses vinculantes.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/tribunais-superiores" }],
  }),
  component: TribunaisPage,
});

function TribunaisPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <SolucaoHero
        image={solTribunais}
        alt="Praça dos Três Poderes em Brasília"
        title="Tribunais Superiores"
        intro={diferenciais[0]}
        secondaryTo="/solucoes/execucoes-complexas"
        secondaryLabel="Execuções complexas"
      />

      <DescricaoSection
        title="Presença cotidiana em Brasília"
        paragraphs={diferenciais.slice(1)}
      />

      <PublicoAtendido
        title="Quem atendemos nos Tribunais Superiores"
        lead="Atuação direta e em parceria com escritórios, entidades representativas e pessoas físicas."
        items={publicoItems}
      />

      <DestaquesGaleria title="Casos que definem o futuro dos direitos" items={destaques} />

      <ServicosSection
        title="Condução processual e atuação estratégica em Brasília"
        lead="Atuação desenvolvida em conjunto com o cliente nas seguintes frentes:"
        groups={servicos}
        idPrefix="tribunais"
      />

      <SociosResponsaveis people={equipeTribunaisSuperiores} />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
