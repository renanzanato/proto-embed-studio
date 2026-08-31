import { createFileRoute } from "@tanstack/react-router";

import entidadesSociedadeCivil from "@/assets/entidades-sociedade-civil.jpg.asset.json";
import entidadesSindicais from "@/assets/temas-emergentes-entidades.jpg.asset.json";
import trabalhadorasViolacoes from "@/assets/trabalhadoras-violacoes-direitos.jpg.asset.json";
import solEmergentes from "@/assets/sol-emergentes.jpg";

import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { equipeTemasEmergentes } from "@/data/servico-equipe";
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

const descricao = [
  "A LBS Advogadas e Advogados atua na identificação, estruturação e condução de casos de elevada relevância social, política e institucional. A área de Temas Emergentes parte de situações concretas de violação ou risco de violação de direitos, mas não se limita à solução individual do conflito: busca desenvolver precedentes, ampliar a efetividade dos direitos, prevenir novas violações e fortalecer a capacidade de atuação das entidades sindicais, organizações sociais e comunidades afetadas.",
  "Nessa área, tratamos temas de Direitos Humanos, como, por exemplo, devida diligência, e atuamos em organismos internacionais; além de temas de meio ambiente; de saúde e segurança do trabalho; e de Direito Digital e LGPD.",
  "A área oferece respostas jurídicas integradas para problemas complexos ou estruturais que, muitas vezes, não podem ser adequadamente enfrentados apenas pelos instrumentos tradicionais do contencioso. Para isso, articula pesquisa, investigação, construção de teses jurídicas e escolha coordenada de mecanismos judiciais, administrativos, legislativos e internacionais.",
  "A atuação se inicia com a compreensão aprofundada do problema e a avaliação de suas dimensões jurídicas, sociais, econômicas e institucionais. A equipe realiza pesquisa técnica, análise documental e jurisprudencial, investigação dos agentes envolvidos e avaliação das diferentes vias de atuação.",
  "A partir do diagnóstico, é construída uma estratégia específica para cada caso, que pode combinar medidas judiciais e extrajudiciais, mecanismos nacionais e internacionais, incidência institucional, produção de conhecimento e articulação com entidades e organizações parceiras.",
];


const atuacoesRepresentativas = [
  "ações coletivas voltadas à proteção de créditos trabalhistas em processos de crise empresarial",
  "atuação contra práticas de assédio eleitoral nas relações de trabalho",
  "ações relacionadas aos impactos trabalhistas, sociais, ambientais e territoriais de empreendimentos de energia renovável",
  "atuação em casos de privatização, reorganização empresarial e transferência de atividades com repercussões sobre trabalhadores e serviços públicos",
  "ações relacionadas à saúde, à segurança e à gestão da fadiga no setor da aviação",
  "atuação em controle de constitucionalidade sobre normas com impactos trabalhistas, ambientais e de direitos humanos",
  "petições perante o Sistema Interamericano de Direitos Humanos",
  "queixas e reclamações perante a Organização Internacional do Trabalho",
  "reclamações perante autoridades estrangeiras responsáveis pela fiscalização de deveres empresariais de devida diligência em direitos humanos",
  "elaboração de dossiês sobre a atuação de empresas multinacionais e seus impactos nas cadeias globais de valor",
  "produção de pareceres e estudos sobre liberdade sindical, direito de greve, representação de novas categorias profissionais e responsabilidade empresarial",
  "acompanhamento e assessoria na CTPP - Comissão Tripartite Paritária Permanente, na qual se discutem as Normas Regulamentadoras e questões de saúde e segurança do trabalhador",
];

const destaques: Destaque[] = [
  {
    title: "Denúncia à Comissão Interamericana de Direitos Humanos",
    text: "A LBS levou ao Sistema Interamericano a discussão sobre os juros e a correção monetária dos créditos trabalhistas no Brasil.",
  },
  {
    title: "Presença na OIT",
    text: "Participação nas Conferências da Organização Internacional do Trabalho e acompanhamento permanente da agenda normativa internacional, em contato com os temas de vanguarda.",
  },
  {
    title: "Atuação especializada e multidisciplinar",
    text: "Integração entre Direito do Trabalho, Direitos Humanos, Direito Constitucional, Direito Internacional, Direito Ambiental e Direito Econômico e Financeiro.",
  },
  {
    title: "Pesquisa aprofundada",
    text: "Pesquisa aprofundada e juridicamente orientada, com construção de estratégias sob medida, sem aplicação de soluções padronizadas.",
  },
  {
    title: "Jurídico, organização e incidência",
    text: "Articulação entre atuação jurídica, organização coletiva e incidência institucional.",
  },
  {
    title: "Atuação coordenada em várias vias",
    text: "Capacidade de atuação coordenada perante órgãos judiciais, administrativos e internacionais.",
  },
  {
    title: "Acompanhamento de ponta a ponta",
    text: "Acompanhamento do caso desde a identificação da problemática até a implementação da estratégia e o monitoramento de seus desdobramentos.",
  },
];

const publicoItems: PublicoItem[] = [
  {
    text: "Sindicatos, federações, confederações, centrais sindicais e associações",
    alt: "Representantes de entidades sindicais em reunião",
    img: entidadesSindicais.url,
    focus: "50% 50%",
  },
  {
    text: "Trabalhadoras, trabalhadores e grupos atingidos por violações de direitos humanos",
    alt: "Trabalhadora em oficina de costura",
    img: trabalhadorasViolacoes.url,
    focus: "50% 50%",
  },
  {
    text: "Entidades da sociedade civil e organizações de defesa de direitos",
    alt: "Organização da sociedade civil em atividade",
  },
  {
    text: "Comunidades e populações afetadas por empreendimentos empresariais",
    alt: "Comunidade em área de impacto empresarial",
  },
];

const servicos: ServiceGroup[] = [
  {
    title: "Atuações representativas",
    items: atuacoesRepresentativas,
  },
  {
    title: "Serviços",
    items: [
      "elaboração de estratégias jurídicas para casos de impacto coletivo ou estrutural",
      "ações civis públicas e outras ações coletivas estratégicas",
      "atuação em processos de controle de constitucionalidade e como amicus curiae",
      "apresentação de denúncias, reclamações e petições perante organismos internacionais, a exemplo dos sistemas ONU, OIT, OEA e OCDE",
      "articulação de medidas em jurisdições estrangeiras relacionadas à atuação de empresas multinacionais",
      "atuação em direitos humanos e empresas, devida diligência e cadeias globais de valor",
      "elaboração de pareceres, relatórios, dossiês, guias e estudos jurídicos",
      "incidência legislativa, regulatória e institucional",
      "articulação com entidades sindicais, movimentos sociais, organizações da sociedade civil e instituições nacionais e internacionais",
      "atuação em temas como transição energética justa, mineração, meio ambiente, saúde e segurança do trabalho, liberdade sindical e discriminação",
      "elaboração de cursos, oficinas e cartilhas sobre direitos humanos, saúde e segurança no trabalho, LGPD",
    ],
  },
];

export const Route = createFileRoute("/servicos/temas-emergentes")({
  head: () => ({
    meta: [
      { title: "Temas Emergentes | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Atuação da LBS em Direitos Humanos, meio ambiente, saúde e segurança do trabalho, Direito Digital e LGPD, com incidência nacional e internacional.",
      },
      {
        property: "og:title",
        content: "Temas Emergentes | LBS Advogadas e Advogados",
      },
      {
        property: "og:description",
        content:
          "Identificação, estruturação e condução de casos de relevância social e institucional, articulando mecanismos judiciais, administrativos e internacionais.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicos/temas-emergentes" }],
  }),
  component: TemasEmergentesPage,
});

function TemasEmergentesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ServicoHero
        image={solEmergentes}
        alt="Paisagem com comunidade e energia renovável"
        title="Temas Emergentes"
        intro={descricao[0]}
      />

      <DescricaoSection
        title="Estratégias para problemas complexos e estruturais"
        paragraphs={descricao.slice(1)}
      />

      <PublicoAtendido
        title="Quem atendemos nos casos de impacto"
        lead="Atuamos com entidades, organizações e comunidades afetadas por violações de direitos."
        items={publicoItems}
      />

      <DestaquesGaleria title="Atuação nacional e internacional" items={destaques} />

      <ServicosSection
        title="Estratégia, incidência e atuação em organismos internacionais"
        lead="Atuação desenvolvida em conjunto com o cliente nas seguintes frentes:"
        groups={servicos}
        servicoSlug="temas-emergentes"
        idPrefix="emergentes"
      />

      <SociosResponsaveis people={equipeTemasEmergentes} />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
