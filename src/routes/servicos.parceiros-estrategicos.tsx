import { createFileRoute } from "@tanstack/react-router";

import solParceiros from "@/assets/sol-parceiros.jpg";
import escritorioAdvocaciaParceiros from "@/assets/escritorio-advocacia-parceiros.jpg.asset.json";
import parceirosEntidades from "@/assets/parceiros-estrategicos-entidades.jpg.asset.json";
import advogadosParceria from "@/assets/advogados-parceria.jpg.asset.json";
import parceirosAtuacaoNacional from "@/assets/parceiros-atuacao-nacional.jpg.asset.json";

import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { equipeParceirosEstrategicos } from "@/data/servico-equipe";
import {
  DescricaoSection,
  DestaquesGaleria,
  PublicoAtendido,
  ServicosSection,
  SociosResponsaveis,
  ServicoHero,
  type Destaque,
  type PublicoItem,
  type ServiceGroup,
} from "@/components/servicos/ServicoSections";

const diferenciais = [
  "A área alcança a atuação direta com escritórios e entidades parceiras, em todas as instâncias judiciais, pautada na excelência técnica da LBS e em sua experiência em âmbito nacional.",
  "A parceria se molda à necessidade de cada escritório. Pode começar na origem do caso – atendimento, redação de petições iniciais, diligências e audiências – ou ser firmada a partir da segunda instância, com sustentações orais e o manejo dos recursos que viabilizam o processamento adequado dos processos até os Tribunais Superiores em Brasília. Em qualquer formato, o parceiro conta com a estrutura completa do escritório: a prática consolidada nos tribunais, a presença nos Tribunais Regionais de todo o país e a Controladoria Jurídica, que monitora publicações, prazos e andamentos dos processos confiados à LBS e mantém o parceiro permanentemente informado.",
  "Temos como modelo as parcerias firmadas dentro da Rede Lado, coletivo de escritórios que atua em favor da classe trabalhadora, da qual participa a LBS Advogadas e Advogados. Além da Rede, atuamos com escritórios membros do CNASP – Coletivo Nacional de Advogados de Servidores Públicos.",
  "As parcerias não se limitam ao processo: inclui reuniões periódicas para discussão dos casos e das medidas a adotar, treinamentos e acompanhamento conjunto, para que a atuação eleve a qualidade do trabalho de todos os envolvidos.",
];

const destaques: Destaque[] = [
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

const publicoItems: PublicoItem[] = [
  {
    text: "Escritórios de advocacia",
    alt: "Sala de reunião em escritório de advocacia",
    img: escritorioAdvocaciaParceiros.url,
    focus: "50% 50%",
  },
  {
    text: "Advogados em busca de parceria especializada",
    alt: "Advogado analisando documentos em busca de parceria estratégica",
    img: advogadosParceria.url,
    focus: "50% 50%",
  },
  {
    text: "Entidades que demandam atuação em Brasília e instâncias superiores",
    alt: "Representante de entidade parceira em ambiente institucional",
    img: parceirosEntidades.url,
    focus: "50% 50%",
  },
  {
    text: "Parceiros que atuam em qualquer instância no território nacional",
    alt: "Advogado com pasta em aeroporto, representando atuação nacional",
    img: parceirosAtuacaoNacional.url,
    focus: "50% 40%",
  },
];

const servicos: ServiceGroup[] = [
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

export const Route = createFileRoute("/servicos/parceiros-estrategicos")({
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
    links: [{ rel: "canonical", href: "/servicos/parceiros-estrategicos" }],
  }),
  component: ParceirosPage,
});

function ParceirosPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ServicoHero
        image={solParceiros}
        alt="Reunião de parceria entre escritórios de advocacia"
        title="Parceiros Estratégicos"
        intro={diferenciais[0]}
      />

      <DescricaoSection
        title="Estrutura completa para o escritório parceiro"
        paragraphs={diferenciais.slice(1)}
      />

      <PublicoAtendido
        title="Com quem construímos parcerias"
        lead="Trabalhamos com escritórios, advogados e entidades que buscam atuação especializada em todas as instâncias."
        items={publicoItems}
      />

      <DestaquesGaleria title="O que a parceria com a LBS oferece" items={destaques} />

      <ServicosSection
        title="Condução compartilhada, atuação em Brasília e gestão da parceria"
        lead="Atuação desenvolvida em conjunto com o parceiro nas seguintes frentes:"
        groups={servicos}
        servicoSlug="parceiros-estrategicos"
        idPrefix="parceiros"
      />

      <SociosResponsaveis people={equipeParceirosEstrategicos} />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
