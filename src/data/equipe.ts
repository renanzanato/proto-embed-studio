import teamAline from "@/assets/team-aline-branco.jpg.asset.json";
import teamCamilla from "@/assets/team-camilla-branco.jpg.asset.json";
import teamCarlos from "@/assets/team-carlos-branco.jpg.asset.json";
import teamDaniela from "@/assets/team-daniela-branco.jpg.asset.json";
import teamEduardo from "@/assets/team-eduardo-branco.jpg.asset.json";
import teamFernanda from "@/assets/team-fernanda-branco.jpg.asset.json";
import teamLoguercio from "@/assets/team-loguercio-branco.jpg.asset.json";
import teamNilo from "@/assets/team-nilo-branco.jpg.asset.json";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  city: string;
  oab: string;
  image: string;
  tags: string[];
  about: string;
  phones: string[];
  email: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "nilo-beiro",
    name: "Nilo Beiro",
    role: "Sócio",
    city: "Brasília, Distrito Federal",
    oab: "OAB/SP nº 108120 e OAB/DF nº 23405",
    image: teamNilo.url,
    tags: ["Sindical", "Financeiro"],
    about: "\n",
    phones: ["(61) 3396-8100", "(61) 99219-0011"],
    email: "nilo@lbs.adv.br",
  },
  {
    slug: "jose-eymard-loguercio",
    name: "José Eymard Loguercio",
    role: "Sócio",
    city: "Brasília, Distrito Federal",
    oab: "OAB/DF nº 10230 e OAB/SP nº 14914",
    image: teamLoguercio.url,
    tags: ["Trabalhista", "Tribunais Superiores"],
    about:
      "Dedica-se à atuação em Tribunais Superiores e à construção de teses trabalhistas de impacto coletivo, com atuação em ações de repercussão nacional e assessoria a centrais e federações sindicais.",
    phones: ["(61) 3396-8100", "(61) 99219-0022"],
    email: "loguercio@lbs.adv.br",
  },
  {
    slug: "eduardo-surian-matias",
    name: "Eduardo Surian Matias",
    role: "Sócio",
    city: "Campinas, São Paulo",
    oab: "OAB/SP nº 93422 e OAB/DF nº 23.400",
    image: teamEduardo.url,
    tags: ["Sindical", "Coletivo do Trabalho"],
    about:
      "Tem ampla experiência na área jurídica de Sindicatos, tendo atuado ao lado de diversas categorias como Bancários, Condutores, Servidores Municipais e Metalúrgicos, entre outros. Possui também experiência nas áreas do Direito do Trabalho, Sindical e Previdenciário.",
    phones: ["(11) 3583-8030", "(19) 99219-0076"],
    email: "eduardo@lbs.adv.br",
  },
  {
    slug: "fernanda-caldas-giorgi",
    name: "Fernanda Caldas Giorgi",
    role: "Sócia",
    city: "São Paulo, São Paulo",
    oab: "OAB/SP nº 189318 e OAB/RS nº 47041",
    image: teamFernanda.url,
    tags: ["Tributário"],
    about:
      "Atua em consultoria e contencioso tributário, com foco em planejamento fiscal, defesas administrativas e judiciais e em questões tributárias ligadas às relações de trabalho.",
    phones: ["(11) 3583-8030", "(11) 99219-0033"],
    email: "fernanda@lbs.adv.br",
  },
  {
    slug: "aline-carla-lopes-bellotti",
    name: "Aline Carla Lopes Bellotti",
    role: "Sócia",
    city: "São Paulo, São Paulo",
    oab: "OAB/SP nº 325405 e OAB/DF nº 41830",
    image: teamAline.url,
    tags: ["Consumidor"],
    about:
      "Atua em Direito do Consumidor e em demandas cíveis correlatas, com experiência em ações individuais e coletivas, além de assessoria preventiva a entidades e associações.",
    phones: ["(11) 3583-8030", "(11) 99219-0044"],
    email: "aline@lbs.adv.br",
  },
  {
    slug: "carlos-fernandes-coninck-junior",
    name: "Carlos Fernandes Coninck Júnior",
    role: "Sócio",
    city: "Brasília, Distrito Federal",
    oab: "OAB/DF nº 51019",
    image: teamCarlos.url,
    tags: ["Civil", "Sindical"],
    about:
      "Atua em Direito Civil e Sindical, com experiência em contratos, responsabilidade civil e no acompanhamento de demandas judiciais de entidades representativas de trabalhadores.",
    phones: ["(61) 3396-8100", "(61) 99219-0055"],
    email: "carlos@lbs.adv.br",
  },
  {
    slug: "daniela-costa-gerelli",
    name: "Daniela Costa Gerelli",
    role: "Sócia",
    city: "São Paulo, São Paulo",
    oab: "OAB/SP nº 388192 e OAB/DF nº 61769",
    image: teamDaniela.url,
    tags: ["Civil", "Família"],
    about:
      "Atua em Direito Civil e de Família, com experiência em ações de família e sucessões, mediação de conflitos e assessoria consultiva a pessoas e famílias.",
    phones: ["(11) 3583-8030", "(11) 99219-0066"],
    email: "daniela@lbs.adv.br",
  },
  {
    slug: "camilla-louise-galdino-candido",
    name: "Camilla Louise Galdino Cândido",
    role: "Sócia",
    city: "Brasília, Distrito Federal",
    oab: "OAB/DF nº 38404",
    image: teamCamilla.url,
    tags: ["Civil", "Família"],
    about:
      "Atua em Direito Civil e de Família, com foco em planejamento sucessório, contratos e resolução consensual de conflitos.",
    phones: ["(61) 3396-8100", "(61) 99219-0077"],
    email: "camilla@lbs.adv.br",
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}
