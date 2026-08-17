import { createFileRoute } from "@tanstack/react-router";

import solExecucoes from "@/assets/sol-execucoes.jpg";

import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import {
  DescricaoSection,
  DestaquesGaleria,
  type Destaque,
  PublicoAtendido,
  ServicosSection,
  SociosResponsaveis,
  SolucaoHero,
  type PublicoItem,
  type ServiceGroup,
} from "@/components/solucoes/SolucaoSections";

const descricao = [
  "A área de Execução Trabalhista da LBS é especializada na condução da fase de cumprimento das decisões judiciais, transformando o direito reconhecido em juízo na efetiva satisfação do crédito do trabalhador. A atuação contempla desde a liquidação da sentença até a adoção de medidas judiciais voltadas à localização de patrimônio, satisfação da obrigação e encerramento da execução, inclusive em parceria com advogados e outros escritórios.",
  "Com atuação estratégica e altamente especializada, a LBS conduz execuções individuais e coletivas de elevada complexidade, inclusive aquelas decorrentes de ações coletivas com milhares de beneficiários, desenvolvendo soluções processuais para maximizar a efetividade da prestação jurisdicional, sempre observando os limites da decisão judicial.",
];

const destaques: Destaque[] = [
  {
    title: "Especialização na fase de execução",
    text: "Elevada especialização na fase de execução, com atuação dedicada em Direito do Trabalho.",
  },
  {
    title: "Alta complexidade e impacto financeiro",
    text: "Experiência na condução de execuções de alta complexidade e elevado impacto financeiro.",
  },
  {
    title: "Escala processual",
    text: "Gestão simultânea de milhares de processos executivos.",
  },
  {
    title: "Liquidação, cálculos e perícias",
    text: "Domínio técnico em liquidação de sentença, cálculos e perícias contábeis.",
  },
  {
    title: "Recursos e incidentes",
    text: "Atuação estratégica em recursos e incidentes próprios da execução.",
  },
  {
    title: "Acompanhamento contínuo",
    text: "Acompanhamento contínuo do cliente durante toda a fase executória, integrando tecnologia, gestão processual e conhecimento técnico para conferir eficiência à condução das execuções.",
  },
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

const publicoItems: PublicoItem[] = [
  {
    text: "Sindicatos, federações, confederações e associações",
    alt: "Assembleia de entidade representativa de trabalhadores",
  },
  {
    text: "Trabalhadores beneficiários de decisões judiciais coletivas",
    alt: "Grupo de trabalhadores em reunião coletiva",
  },
  {
    text: "Trabalhadores em ações individuais",
    alt: "Atendimento individual em escritório de advocacia",
  },
  {
    text: "Entidades representativas, escritórios e advogados que necessitam de acompanhamento especializado na fase de execução",
    alt: "Reunião entre advogados parceiros",
  },
];

const servicos: ServiceGroup[] = [
  {
    title: "Condução da fase de execução",
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

function ExecucoesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <SolucaoHero
        image={solExecucoes}
        alt="Corredor de fórum trabalhista em luz e sombra"
        title="Execuções complexas"
        intro={descricao[0]}
        secondaryTo="/solucoes/tribunais-superiores"
        secondaryLabel="Tribunais Superiores"
      />

      <DescricaoSection
        title="Do direito reconhecido ao crédito recebido"
        paragraphs={descricao.slice(1)}
      />

      <PublicoAtendido
        title="Quem acompanhamos na fase executória"
        lead="Atendemos entidades, grupos de beneficiários de decisões coletivas e parceiros que precisam de execução especializada."
        items={publicoItems}
      />

      <DestaquesGaleria
        title="Técnica, tecnologia e gestão processual na execução"
        items={destaques}
      />

      <ServicosSection
        title="Da liquidação da sentença ao encerramento da execução"
        lead="Atuação desenvolvida em conjunto com o cliente nas seguintes frentes:"
        groups={servicos}
        idPrefix="execucoes"
      />

      <SociosResponsaveis />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
