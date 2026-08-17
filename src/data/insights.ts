import news1Asset from "@/assets/imagem-homepage-artigos-noticias-2-lbs-3.png.asset.json";
import news2Asset from "@/assets/imagem-homepage-artigos-noticias-3-lbs.png.asset.json";
import news3Asset from "@/assets/imagem-homepage-artigos-noticias-4-lbs.png.asset.json";
import newsHeroAsset from "@/assets/news-hero-cit.jpg.asset.json";
import blogEsg from "@/assets/blog-esg.jpg";
import blogHomeoffice from "@/assets/blog-homeoffice.jpg";
import blogReforma from "@/assets/blog-reforma.jpg";
import solLitigios from "@/assets/sol-litigios.jpg";
import solTribunais from "@/assets/sol-tribunais.jpg";
import solExecucoes from "@/assets/sol-execucoes.jpg";
import solEmergentes from "@/assets/sol-emergentes.jpg";
import solAdmPublica from "@/assets/sol-adm-publica.jpg";
import solParcerias from "@/assets/sol-parcerias.jpg";
import solDefesa from "@/assets/sol-defesa.jpg";

export type BannerSlide = {
  label: string;
  title: string;
  image: string;
  to: string;
};

export const bannerSlides: BannerSlide[] = [
  {
    label: "Institucional",
    title: "113ª Conferência Internacional do Trabalho, em Genebra",
    image: newsHeroAsset.url,
    to: "/artigos",
  },
  {
    label: "Litígios coletivos",
    title: "Painel LBS: litígios estruturais e impacto institucional",
    image: solLitigios,
    to: "/artigos",
  },
  {
    label: "Tribunais Superiores",
    title: "Sustentação oral no TST: o que muda na tese do vínculo",
    image: solTribunais,
    to: "/artigos",
  },
  {
    label: "Temas emergentes",
    title: "Trabalho por plataformas: o debate que chega às cortes",
    image: solEmergentes,
    to: "/artigos",
  },
];

export type Insight = {
  slug: string;
  category: string;
  lawyer: string;
  area: string;
  date: string; // DD/MM/AAAA
  title: string;
  excerpt: string;
  image: string;
  body?: string[];
};


export const insights: Insight[] = [
  {
    slug: "agente-do-sistema-financeiro-agosto",
    category: "Notícia",
    lawyer: "Nilo Beiro",
    area: "Defesa da pessoa que trabalha",
    date: "15/07/2025",
    title: "(A)gente do sistema financeiro — Agosto",
    excerpt:
      "Trabalhadores e trabalhadoras da indústria financeira: o cenário segue em mudança acelerada e exige leitura atenta das negociações em curso.",
    image: news1Asset.url,
  },
  {
    slug: "acordo-mpt-poupex",
    category: "Notícia",
    lawyer: "José Eymard Loguercio",
    area: "Litígios coletivos estruturados",
    date: "08/10/2025",
    title: "Acordo entre MPT e Poupex garante R$ 2,1 milhões em indenização",
    excerpt:
      "O Ministério Público do Trabalho do Distrito Federal e a Poupex firmaram acordo com efeitos coletivos relevantes para a categoria.",
    image: news2Asset.url,
  },
  {
    slug: "tst-dissidio-sindicatos",
    category: "Notícia",
    lawyer: "Eduardo Surian Matias",
    area: "Tribunais Superiores",
    date: "08/11/2025",
    title: "TST define que sindicatos de trabalhadores podem ajuizar dissídio",
    excerpt:
      "O Pleno do Tribunal Superior do Trabalho julgou o incidente e fixou tese com impacto direto na negociação coletiva.",
    image: news3Asset.url,
  },
  {
    slug: "reforma-trabalhista-balanco",
    category: "Notícia",
    lawyer: "Eduardo Surian Matias",
    area: "Defesa da pessoa que trabalha",
    date: "22/06/2025",
    title: "Reforma trabalhista: balanço de jurisprudência consolidada",
    excerpt:
      "Oito anos depois, os tribunais firmaram entendimentos que redesenham a litigância individual e coletiva.",
    image: blogReforma,
  },
  {
    slug: "teletrabalho-controle-jornada",
    category: "Vídeo",
    lawyer: "Daniela Muradas",
    area: "Temas emergentes",
    date: "30/05/2025",
    title: "Teletrabalho e controle de jornada: limites e responsabilidades",
    excerpt:
      "A prova do tempo à disposição em regime remoto tornou-se o centro das disputas sobre horas extras.",
    image: blogHomeoffice,
  },
  {
    slug: "esg-e-direitos-trabalhistas",
    category: "Artigo",
    lawyer: "Camilla Fernandes",
    area: "Temas emergentes",
    date: "14/05/2025",
    title: "ESG e direitos trabalhistas: da narrativa à responsabilização",
    excerpt:
      "Compromissos socioambientais começam a ser cobrados judicialmente, com efeitos práticos sobre cadeias produtivas.",
    image: blogEsg,
  },
  {
    slug: "execucao-complexa-calculo",
    category: "Artigo",
    lawyer: "Carlos Alberto",
    area: "Execuções complexas",
    date: "02/05/2025",
    title: "Execução complexa: quando o cálculo define o resultado do caso",
    excerpt:
      "A liquidação técnica é etapa decisória, e não burocrática — precisão contábil sustenta o direito reconhecido.",
    image: solExecucoes,
  },
  {
    slug: "servidores-e-estatais-vinculos",
    category: "Artigo",
    lawyer: "Aline Rodrigues",
    area: "Vínculos com a Administração Pública",
    date: "18/04/2025",
    title: "Servidores e estatais: a fronteira móvel dos vínculos públicos",
    excerpt:
      "Regimes distintos convivem no mesmo ambiente de trabalho e exigem estratégias jurídicas próprias.",
    image: solAdmPublica,
  },
  {
    slug: "parcerias-estrategicas-entre-escritorios",
    category: "Institucional",
    lawyer: "Fernanda Barreto",
    area: "Parceiros estratégicos",
    date: "05/04/2025",
    title: "Parcerias entre escritórios: estrutura para casos de alta densidade",
    excerpt:
      "A colaboração técnica amplia capacidade operacional sem diluir a responsabilidade sobre a tese.",
    image: solParcerias,
  },
  {
    slug: "negociacao-coletiva-2025",
    category: "Notícia",
    lawyer: "Nilo Beiro",
    area: "Litígios coletivos estruturados",
    date: "21/03/2025",
    title: "Negociação coletiva 2025: pauta ampliada e novos impasses",
    excerpt:
      "Saúde mental, jornada e uso de dados entram nas mesas de negociação de forma estruturada.",
    image: solLitigios,
  },
  {
    slug: "stf-e-terceirizacao",
    category: "Notícia",
    lawyer: "José Eymard Loguercio",
    area: "Tribunais Superiores",
    date: "07/03/2025",
    title: "STF e terceirização: o que ainda está em aberto",
    excerpt:
      "Apesar das teses fixadas, permanecem controvérsias sobre responsabilidade e isonomia salarial.",
    image: solTribunais,
  },
  {
    slug: "assedio-institucional",
    category: "Artigo",
    lawyer: "Daniela Muradas",
    area: "Defesa da pessoa que trabalha",
    date: "12/02/2025",
    title: "Assédio institucional: da queixa individual à tutela coletiva",
    excerpt:
      "Padrões de gestão abusiva pedem resposta coletiva, com produção de prova estatística e documental.",
    image: solDefesa,
  },
  {
    slug: "inteligencia-artificial-e-trabalho",
    category: "Artigo",
    lawyer: "Camilla Fernandes",
    area: "Temas emergentes",
    date: "29/01/2025",
    title: "Inteligência artificial no trabalho: decisões automatizadas sob revisão",
    excerpt:
      "Gestão algorítmica de metas e desligamentos começa a ser discutida como risco jurídico concreto.",
    image: solEmergentes,
  },
  {
    slug: "bancarios-saude-mental",
    category: "Notícia",
    lawyer: "Carlos Alberto",
    area: "Defesa da pessoa que trabalha",
    date: "16/01/2025",
    title: "Bancárias e bancários: adoecimento mental e nexo causal",
    excerpt:
      "Metas abusivas sustentam pedidos de reconhecimento de doença ocupacional em série.",
    image: news1Asset.url,
  },
];

export const insightCategories = Array.from(
  new Set(insights.map((i) => i.category)),
).sort((a, b) => a.localeCompare(b, "pt-BR"));

export const insightLawyers = Array.from(new Set(insights.map((i) => i.lawyer))).sort((a, b) =>
  a.localeCompare(b, "pt-BR"),
);

export const insightAreas = Array.from(new Set(insights.map((i) => i.area))).sort((a, b) =>
  a.localeCompare(b, "pt-BR"),
);

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getInsightBody(insight: Insight): string[] {
  if (insight.body?.length) return insight.body;
  return [
    insight.excerpt,
    `O tema envolve diretamente a frente de ${insight.area.toLowerCase()}, campo em que a atuação da LBS combina contencioso estratégico, negociação coletiva e leitura institucional dos precedentes.`,
    "A equipe acompanha a evolução do entendimento nos tribunais e nas mesas de negociação, avaliando os impactos concretos para trabalhadoras, trabalhadores e entidades representativas.",
    "Para aprofundar o assunto ou avaliar um caso específico, a LBS está à disposição por meio dos canais de contato do escritório.",
  ];
}

export function getRelatedInsights(insight: Insight, limit = 3): Insight[] {
  const sameArea = insights.filter((i) => i.slug !== insight.slug && i.area === insight.area);
  const others = insights.filter((i) => i.slug !== insight.slug && i.area !== insight.area);
  return [...sameArea, ...others].slice(0, limit);
}
