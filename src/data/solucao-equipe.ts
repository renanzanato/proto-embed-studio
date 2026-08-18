import { teamMembers } from "./equipe";

export type SolucaoPessoa = {
  name: string;
  city: string;
  slug?: string;
};

const slugByName: Record<string, string> = {
  "Aline Carla Lopes Belloti": "aline-carla-lopes-bellotti",
  "Camilla Louise Galdino Cândido": "camilla-louise-galdino-candido",
  "Carlos Fernandes Coninck Jr": "carlos-fernandes-coninck-junior",
  "Daniela Costa Gerelli": "daniela-costa-gerelli",
  "Eduardo Surian Matias": "eduardo-surian-matias",
  "Fernanda Caldas Giorgi": "fernanda-caldas-giorgi",
  "Jose Eymard Loguercio": "jose-eymard-loguercio",
  "Nilo da Cunha Jamardo Beiro": "nilo-beiro",
};

function p(name: string, city: string): SolucaoPessoa {
  const slug = slugByName[name];
  return {
    name,
    city,
    slug: slug && teamMembers.some((m) => m.slug === slug) ? slug : undefined,
  };
}

const BSB = "Brasília";
const CPS = "Campinas";
const SP = "São Paulo";
const SP_BSB = "São Paulo e Brasília";
const SP_CPS = "São Paulo e Campinas";

export const equipeDefesaPessoaQueTrabalha: SolucaoPessoa[] = [
  p("Aline Carla Lopes Belloti", CPS),
  p("Andrey Rondon Soares", BSB),
  p("Carlos Fernandes Coninck Jr", BSB),
  p("Daniela Costa Gerelli", CPS),
  p("Eduardo Henrique Marques Soares", BSB),
  p("Felipe Gomes da Silva Vasconcellos", SP),
  p("Fernanda Caldas Giorgi", BSB),
  p("Fernando Henrique Machado Roriz", BSB),
  p("Fernando José Hirsch", CPS),
  p("Franciele Carvalho Zaterka", CPS),
  p("Glaucia Alves da Costa", BSB),
  p("Louise Helene de Azevedo Teixeira", CPS),
  p("Luciana Lucena Baptista Barretto", CPS),
  p("Meilliane Pinheiro Vilar Lima", BSB),
  p("Natalia Agrello Castilheiro", BSB),
  p("Paulo Roberto Alves da Silva", BSB),
  p("Rafaela Diana Xavier", SP),
  p("Renata Silveira Veiga Cabral", BSB),
  p("Ricardo Quintas Carneiro", BSB),
  p("Samantha Braga Guedes", BSB),
];

export const equipeVinculosAdministracaoPublica: SolucaoPessoa[] = [
  p("Antonio Fernando Megale Lopes", BSB),
  p("Camilla Louise Galdino Cândido", BSB),
  p("Fernando Henrique Machado Roriz", BSB),
  p("Jose Eymard Loguercio", SP_BSB),
  p("Luciana Lucena Baptista Barretto", CPS),
  p("Mádila Barros Severino de Lima", BSB),
  p("Meilliane Pinheiro Vilar Lima", BSB),
  p("Nilo da Cunha Jamardo Beiro", SP_CPS),
  p("Paulo Roberto Alves da Silva", BSB),
];

export const equipeLitigiosColetivos: SolucaoPessoa[] = [
  p("Aline Carla Lopes Belloti", CPS),
  p("Andrey Rondon Soares", BSB),
  p("Antonio Fernando Megale Lopes", BSB),
  p("Camilla Louise Galdino Cândido", BSB),
  p("Eduardo Henrique Marques Soares", BSB),
  p("Felipe Gomes da Silva Vasconcellos", SP),
  p("Fernanda Caldas Giorgi", BSB),
  p("Fernando Henrique Machado Roriz", BSB),
  p("Fernando José Hirsch", CPS),
  p("Franciele Carvalho Zaterka", CPS),
  p("Glaucia Alves da Costa", BSB),
  p("Jose Eymard Loguercio", SP_BSB),
  p("Louise Helene de Azevedo Teixeira", CPS),
  p("Luciana Lucena Baptista Barretto", CPS),
  p("Meilliane Pinheiro Vilar Lima", BSB),
  p("Paulo Roberto Alves da Silva", BSB),
  p("Rafaela Diana Xavier", SP),
  p("Renata Silveira Veiga Cabral", BSB),
  p("Samantha Braga Guedes", BSB),
];

export const equipeTribunaisSuperiores: SolucaoPessoa[] = [
  p("Antonio Fernando Megale Lopes", BSB),
  p("Camilla Louise Galdino Cândido", BSB),
  p("Carlos Fernandes Coninck Jr", BSB),
  p("Eduardo Henrique Marques Soares", BSB),
  p("Felipe Gomes da Silva Vasconcellos", SP),
  p("Glaucia Alves da Costa", BSB),
  p("Jose Eymard Loguercio", SP_BSB),
  p("Mádila Barros Severino de Lima", BSB),
  p("Meilliane Pinheiro Vilar Lima", BSB),
  p("Natalia Agrello Castilheiro", BSB),
  p("Renata Silveira Veiga Cabral", BSB),
  p("Ricardo Quintas Carneiro", BSB),
];

export const equipeExecucoes: SolucaoPessoa[] = [
  p("Aline Carla Lopes Belloti", CPS),
  p("Carlos Fernandes Coninck Jr", BSB),
  p("Fernando José Hirsch", CPS),
  p("Paulo Roberto Alves da Silva", BSB),
];

export const equipeParceirosEstrategicos: SolucaoPessoa[] = [
  p("Aline Carla Lopes Belloti", CPS),
  p("Antonio Fernando Megale Lopes", BSB),
  p("Camilla Louise Galdino Cândido", BSB),
  p("Carlos Fernandes Coninck Jr", BSB),
  p("Daniela Costa Gerelli", CPS),
  p("Eduardo Henrique Marques Soares", BSB),
  p("Eduardo Surian Matias", SP_CPS),
  p("Fernando José Hirsch", CPS),
  p("Jose Eymard Loguercio", SP_BSB),
  p("Luciana Lucena Baptista Barretto", CPS),
  p("Meilliane Pinheiro Vilar Lima", BSB),
  p("Natalia Agrello Castilheiro", BSB),
  p("Nilo da Cunha Jamardo Beiro", SP_CPS),
  p("Paulo Roberto Alves da Silva", BSB),
  p("Ricardo Quintas Carneiro", BSB),
];

export const equipeTemasEmergentes: SolucaoPessoa[] = [
  p("Andrey Rondon Soares", BSB),
  p("Antonio Fernando Megale Lopes", BSB),
  p("Camilla Louise Galdino Cândido", BSB),
  p("Carlos Fernandes Coninck Jr", BSB),
  p("Eduardo Henrique Marques Soares", BSB),
  p("Felipe Gomes da Silva Vasconcellos", SP),
  p("Fernanda Caldas Giorgi", BSB),
  p("Fernando Henrique Machado Roriz", BSB),
  p("Jose Eymard Loguercio", SP_BSB),
  p("Luciana Lucena Baptista Barretto", CPS),
  p("Mádila Barros Severino de Lima", BSB),
  p("Natalia Agrello Castilheiro", BSB),
  p("Nilo da Cunha Jamardo Beiro", SP_CPS),
  p("Rafaela Diana Xavier", SP),
  p("Ricardo Quintas Carneiro", BSB),
];
