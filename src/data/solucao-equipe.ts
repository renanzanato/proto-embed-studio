import { teamMembers } from "./equipe";
import photoAndrey from "@/assets/team-andrey-soares.jpg.asset.json";
import photoAntonio from "@/assets/team-antonio-megale.jpg.asset.json";
import photoEduardoSoares from "@/assets/team-eduardo-soares.jpg.asset.json";
import photoFernandoRoriz from "@/assets/team-fernando-roriz.jpg.asset.json";
import photoFernandoHirsch from "@/assets/team-fernando-hirsch.jpg.asset.json";
import photoFranciele from "@/assets/team-franciele-zaterka.jpg.asset.json";
import photoLouise from "@/assets/team-louise-teixeira.jpg.asset.json";
import photoLuciana from "@/assets/team-luciana-barretto.jpg.asset.json";
import photoGlaucia from "@/assets/team-glaucia-costa.jpg.asset.json";
import photoMadila from "@/assets/team-madila-lima.jpg.asset.json";
import photoMeilliane from "@/assets/team-meilliane-lima.jpg.asset.json";
import photoNatalia from "@/assets/team-natalia-castilheiro.jpg.asset.json";
import photoPaulo from "@/assets/team-paulo-silva.jpg.asset.json";
import photoRenata from "@/assets/team-renata-cabral.jpg.asset.json";
import photoRicardo from "@/assets/team-ricardo-carneiro.jpg.asset.json";
import photoSamantha from "@/assets/team-samantha-guedes.jpg.asset.json";

export type SolucaoPessoa = {
  name: string;
  city: string;
  slug?: string;
  photo?: string;
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

const photoByName: Record<string, string> = {
  "Andrey Rondon Soares": photoAndrey.url,
  "Antonio Fernando Megale Lopes": photoAntonio.url,
  "Eduardo Henrique Marques Soares": photoEduardoSoares.url,
  "Fernando Henrique Machado Roriz": photoFernandoRoriz.url,
  "Fernando José Hirsch": photoFernandoHirsch.url,
  "Franciele Carvalho Zaterka": photoFranciele.url,
  "Louise Helene de Azevedo Teixeira": photoLouise.url,
  "Luciana Lucena Baptista Barretto": photoLuciana.url,
  "Glaucia Alves da Costa": photoGlaucia.url,
  "Mádila Barros Severino de Lima": photoMadila.url,
  "Meilliane Pinheiro Vilar Lima": photoMeilliane.url,
  "Natalia Agrello Castilheiro": photoNatalia.url,
  "Paulo Roberto Alves da Silva": photoPaulo.url,
  "Renata Silveira Veiga Cabral": photoRenata.url,
  "Ricardo Quintas Carneiro": photoRicardo.url,
  "Samantha Braga Guedes": photoSamantha.url,
};

function p(name: string, city: string): SolucaoPessoa {
  const slug = slugByName[name];
  return {
    name,
    city,
    slug: slug && teamMembers.some((m) => m.slug === slug) ? slug : undefined,
    photo: photoByName[name],
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
