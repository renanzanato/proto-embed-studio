import { createFileRoute } from "@tanstack/react-router";

import solLitigios from "@/assets/litigios-coletivos-grupo.jpg.asset.json";
import publicoSindicatos from "@/assets/people-networking-conference-registration-desk-2.jpg.asset.json";


import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

import { equipeLitigiosColetivos } from "@/data/servico-equipe";
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
  "A LBS Advogadas e Advogados atua na defesa dos direitos coletivos, difusos e individuais homogêneos de trabalhadores, servidores e empregados públicos, assessorando sindicatos, federações, confederações, centrais sindicais, associações e demais entidades representativas na esfera judicial, com o ajuizamento de ações coletivas, na negociação coletiva e na consultoria estratégica.",
  "A LBS alia experiência em negociação coletiva e litigância estratégica para construir soluções adequadas às necessidades de cada entidade, em trabalho desenvolvido em conjunto com o cliente: da análise jurídica e definição da estratégia à negociação, ao ajuizamento, à atuação em todas as instâncias e à execução das decisões judiciais.",
  "A atuação é integrada entre Direito do Trabalho, Direito Sindical, Direito Administrativo, Direito Previdenciário e Direito Coletivo, com equipe dedicada exclusivamente ao processo coletivo e às negociações coletivas: advogadas e advogados especialistas e estrutura própria de gestão processual, capaz de conduzir processos coletivos de alta complexidade e grande abrangência, com acompanhamento técnico de perícias e produção de provas.",
  "Prestamos também assessoria legislativa: o escritório monitora a tramitação de projetos de lei de interesse das categorias no Congresso Nacional, nas assembleias legislativas e nas câmaras municipais. Elaboramos notas técnicas, pareceres e minutas de emendas parlamentares e subsidiam as entidades nas audiências públicas e nas negociações com os governos.",
  "Atuamos, por fim, na assessoria institucional de associações e entidades sindicais, fundação de associações e entidades sindicais, inclusive no Ministério do Trabalho e Emprego para concessão de registro sindical; elaboramos e atualizamos estatutos de entidades e cuidamos dos processos eleitorais de entidades.",
];

const destaques: Destaque[] = [
  {
    title: "Negociações coletivas de categorias nacionais",
    text: "Assessoria em campanhas salariais e mesas de negociação de categorias como bancários, profissionais da saúde, professores, comerciários, papeleiros, empregados de empresas públicas e servidores públicos.",
  },
  {
    title: "Ações coletivas de grande abrangência",
    text: "Condução de ações para pagamento de adicionais de insalubridade e periculosidade, jornada e descansos, PLR, cumprimento de instrumentos coletivos e cobrança de multas normativas — inclusive perante os Tribunais Superiores, em processos de relevância para categorias inteiras.",
  },
  {
    title: "Saúde e segurança do trabalho como prioridade",
    text: "Demandas coletivas sobre doenças ocupacionais, riscos psicossociais e condições de trabalho.",
  },
  {
    title: "Defesa da organização sindical",
    text: "Atuação completa na vida das entidades: fundação, registro, eleições e defesa administrativa e judicial da representação sindical.",
  },
];

const publicoItems: PublicoItem[] = [
  {
    text: "Sindicatos, federações, confederações e associações",
    alt: "Assembleia de entidade representativa de trabalhadores",
  },
  {
    text: "Trabalhadores representados coletivamente",
    alt: "Grupo de trabalhadores em reunião coletiva",
  },
  {
    text: "Grupos de empregados atingidos por uma mesma prática empresarial",
    alt: "Ambiente corporativo com trabalhadores",
  },
  {
    text: "Escritórios parceiros que demandam atuação especializada em Direito Coletivo do Trabalho",
    alt: "Reunião entre advogados parceiros",
  },
];

const servicos: ServiceGroup[] = [
  {
    title: "Ações coletivas",
    items: [
      "Pareceres e estudos de viabilidade para ações coletivas",
      "Ajuizamento e acompanhamento de ações coletivas, com atuação de sindicatos e associações como substitutos processuais",
      "Ações de cumprimento de convenções e acordos coletivos e cobrança de multas normativas",
      "Ações envolvendo jornada de trabalho, horas extras, descansos, adicional noturno e demais verbas",
      "Ações relativas à saúde e segurança do trabalho: insalubridade, periculosidade, doenças ocupacionais e riscos psicossociais",
      "Ações relativas à participação nos lucros e resultados (PLR)",
      "Produção de provas, acompanhamento de perícias e elaboração de manifestações técnicas",
      "Execução coletiva das decisões judiciais",
      "Atuação perante os Tribunais Regionais do Trabalho, o TST e o STF",
      "Acompanhamento e atuação junto ao Ministério Público do Trabalho e ao Ministério Público Federal",
    ],
  },
  {
    title: "Negociação coletiva",
    items: [
      "Assessoria jurídica em mesas de negociação coletiva: análise e elaboração de cláusulas, quadros comparativos e orientação estratégica",
      "Elaboração, revisão e negociação de convenções e acordos coletivos",
      "Campanhas salariais e negociação de conflitos coletivos",
      "Negociação de acordos judiciais e extrajudiciais",
      "Acompanhamento e atuação em mediação no âmbito da Advocacia-Geral da União e do Ministério do Trabalho e Emprego",
    ],
  },
  {
    title: "Organização e vida sindical",
    items: [
      "Fundação de sindicatos, federações, confederações e associações",
      "Elaboração de estatuto social, atas e editais",
      "Atuação junto ao cartório e em casos de notas de devolução",
      "Registro sindical: representação e atuação junto ao Ministério do Trabalho e Emprego",
      "Acompanhamento de eleições sindicais: elaboração de calendário, atas, editais e registro em cartório",
      "Defesa administrativa e judicial da representação sindical e em casos de conflitos sindicais",
      "Assessoria em eleições e ações judiciais decorrentes de eleição sindical, inclusive defesa de chapas",
    ],
  },
  {
    title: "Assessoria legislativa",
    items: [
      "Monitoramento da tramitação de projetos de lei de interesse das categorias",
      "Elaboração de notas técnicas, pareceres e minutas de emendas parlamentares",
      "Subsídio técnico a audiências públicas e negociações com os governos",
    ],
  },
];

export const Route = createFileRoute("/servicos/litigios-coletivos")({
  head: () => ({
    meta: [
      { title: "Litígios Coletivos | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Assessoria a sindicatos, entidades e trabalhadores em ações coletivas, negociação coletiva e consultoria estratégica em Direito Coletivo do Trabalho.",
      },
      {
        property: "og:title",
        content: "Litígios Coletivos | LBS Advogadas e Advogados",
      },
      {
        property: "og:description",
        content:
          "Da negociação coletiva à execução de decisões judiciais: defesa dos direitos coletivos e difusos de trabalhadores e entidades representativas.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicos/litigios-coletivos" }],
  }),
  component: LitigiosPage,
});

function LitigiosPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ServicoHero
        image={solLitigios.url}
        alt="Grupo diverso de profissionais reunidos ao ar livre"
        title="Litígios Coletivos"
        intro={diferenciais[0]}
      />

      <DescricaoSection
        title="Estratégia integrada para entidades e categorias"
        paragraphs={diferenciais.slice(1)}
      />

      <PublicoAtendido
        title="Defesa dos direitos coletivos e difusos"
        lead="Atuamos junto a entidades representativas e grupos de trabalhadores atingidos por práticas empresariais comuns."
        items={publicoItems}
      />

      <DestaquesGaleria
        title="Da mesa de negociação às instâncias superiores"
        items={destaques}
      />

      <ServicosSection
        title="Ações coletivas, negociação, vida sindical e assessoria legislativa"
        lead="Atuação desenvolvida em conjunto com o cliente nas seguintes frentes:"
        groups={servicos}
        servicoSlug="litigios-coletivos"
        idPrefix="litigios"
      />

      <SociosResponsaveis people={equipeLitigiosColetivos} />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
