import { createFileRoute } from "@tanstack/react-router";

import solAdm from "@/assets/vinculos-administracao-publica.jpg.asset.json";

import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { equipeVinculosAdministracaoPublica } from "@/data/solucao-equipe";
import {
  DescricaoSection,
  DestaquesGaleria,
  PublicoAtendido,
  ServicosPorContexto,
  SociosResponsaveis,
  SolucaoHero,
  type Destaque,
  type PublicoItem,
  type ServiceGroup,
} from "@/components/solucoes/SolucaoSections";

const diferenciais = [
  "Servidoras e servidores públicos são parte fundamental que merece respeito e proteção aos seus direitos.",
  "A LBS presta assessoria jurídica a confederações e a entidades de servidores públicos, posição que a mantém em contato permanente com as carreiras, os órgãos e as mesas de negociação do funcionalismo. É o escritório que elabora os pareceres sobre progressão, promoção e estruturação de carreiras, entre outros temas, que subsidiam as negociações das entidades com o próprio Ministério da Gestão e da Inovação em Serviços Públicos.",
  "Desse lugar decorre o domínio da lógica interna das carreiras públicas: estatutos, planos de cargos, regras remuneratórias e previdenciárias específicas, e a capacidade de identificar, antes do litígio, onde estão as distorções que atingem as categorias.",
  "A atuação se dá nas duas esferas, administrativa e judicial, do requerimento ao órgão de origem até os Tribunais Superiores, em que o escritório tem prática consolidada, com sustentações orais no STF e no STJ em temas de interesse do funcionalismo.",
];

const destaques: Destaque[] = [
  {
    title: "Assessoria jurídica nacional do funcionalismo",
    text: "A LBS assessora confederações nacionais de servidores públicos federais, elaborando os pareceres sobre carreiras que subsidiam as negociações das entidades com o Ministério da Gestão – da mesa de negociação ao processo.",
  },
  {
    title: "Análise técnica e conjuntural da reforma administrativa",
    text: "Pareceres do escritório sobre as propostas de reforma administrativa, apontando riscos de redução de direitos, subsidiam entidades de servidores e o debate público em defesa do serviço público.",
  },
  {
    title: "Atuação no Supremo Tribunal Federal",
    text: "O escritório atua à luz das teses de repercussão geral que regem os vínculos com o Estado — da demissão motivada nas estatais, fixada em processo conduzido pela própria LBS no STF, aos temas sobre contratação temporária e terceirização na administração pública.",
  },
  {
    title: "Defesa desde o requerimento administrativo",
    text: "A atuação começa antes do litígio: requerimentos, recursos administrativos e acompanhamento junto a órgãos, Tribunais de Contas e Advocacia Pública, buscando a solução mais rápida para o servidor.",
  },
];

const publicoItems: PublicoItem[] = [
  {
    text: "Servidoras e servidores públicos federais, estaduais e municipais, ativos e aposentados",
    alt: "Servidores públicos em ambiente de trabalho",
  },
  {
    text: "Pessoas que trabalham para o Estado sob outros vínculos: contratados temporários, bolsistas, terceirizados e empregados públicos",
    alt: "Trabalhadores contratados por vínculos diversos com o poder público",
  },
  {
    text: "Associações, sindicatos, federações e confederações",
    alt: "Assembleia de entidade representativa de servidores",
  },
  {
    text: "Advogadas e advogados que tenham interesse em estabelecer parceria",
    alt: "Reunião entre advogados parceiros",
  },
];

type Group = ServiceGroup;

const servidoresServicos: Group[] = [
  {
    title: "Concurso público e ingresso",
    items: [
      "Concurso público: edital, nomeação, posse, preterição e cotas",
      "Ações decorrentes do estágio probatório",
      "Defesa de anistiados",
    ],
  },
  {
    title: "Carreira e movimentação",
    items: [
      "Posicionamento na carreira: reenquadramento e desvio de função",
      "Consultivo sobre aspectos da carreira",
      "Transferências, licenças e afastamentos: capacitação, acompanhamento de cônjuge, tratamento de saúde, cessão, remoção, redistribuição, interesses particulares, mandato classista, mandato eletivo e missão no exterior",
      "Licença maternidade, paternidade e adotante",
      "Reintegração, recondução e reversão",
    ],
  },
  {
    title: "Remuneração, direitos e vantagens",
    items: [
      "Direitos e vantagens: vencimento, vantagens, indenizações, ajuda de custo, indenização de transporte, auxílio-moradia e adicionais",
      "Adicional de periculosidade e insalubridade: acompanhamento de processo administrativo e judicial",
      "Serviços extraordinários e adicional noturno",
      "Aplicação e cobrança do piso da categoria",
      "Indenização por licença-prêmio e outros direitos não gozados",
      "Defesa e ação judicial referentes a cobranças e repetição de indébito",
    ],
  },
  {
    title: "Dignidade e proteção no trabalho",
    items: [
      "Processo administrativo e judicial em decorrência de assédio ou conduta discriminatória por gênero, raça, orientação sexual, orientação política ou religiosa",
      "Ações indenizatórias e ações contra o Estado por dano material e moral (responsabilidade civil do Estado)",
    ],
  },
  {
    title: "Defesa disciplinar e reintegração",
    items: [
      "Defesa em processo administrativo disciplinar (PAD) e acompanhamento de sindicância",
      "Reintegração",
    ],
  },
  {
    title: "Previdência",
    items: [
      "Aposentadoria do regime próprio e do regime complementar",
      "Planejamento previdenciário e análise de tempo de serviço",
      "Acompanhamento do processo de aposentadoria no Tribunal de Contas",
      "Pensão e reconhecimento de vínculo para fins de pensão",
    ],
  },
  {
    title: "Atuação extrajudicial",
    items: [
      "Acompanhamento e atuação junto ao Ministério Público, à Advocacia Pública e aos Tribunais de Contas",
      "Negociação das relações de trabalho",
      "Minuta de projetos de lei para reestruturação de carreira",
    ],
  },
];

const estataisDiferenciais = [
  "O empregado público vive em regime híbrido: contratado pela CLT, mas admitido por concurso e vinculado a uma empresa estatal, está sujeito ao mesmo tempo ao Direito do Trabalho e aos princípios do Direito Administrativo. Defendê-lo exige dominar os dois campos e a LBS reúne as duas especialidades.",
  "Assessoramos entidades representativas dos empregados de empresas públicas e atuamos de forma preventiva nos momentos críticos da vida das estatais: reestruturações, planos de demissão, alterações de benefícios e de planos de saúde, orientando a categoria sobre o que assinar, o que recusar e como se proteger.",
];

const estataisServicos: Group[] = [
  {
    title: "Serviços",
    items: [
      "Nulidade da dispensa sem motivação e reintegração de empregados concursados de estatais (tese do RE 688.267)",
      "Concurso público para emprego público: nomeação, preterição e defesa da contratação",
      "Isonomia, equiparação salarial, desvio de função e enquadramento em plano de cargos e salários (PCS)",
      "Promoções e progressões previstas em norma interna; defesa da manutenção de direitos após revogação de norma interna",
      "Incorporação de gratificações por descomissionamento e de anuênios",
      "Análise de planos de demissão voluntária (PDV) e de reestruturações antes da adesão",
      "Estabilidades e reintegração: desligamento com o trabalhador doente, pré-aposentadoria e demais hipóteses",
      "Danos morais por metas abusivas, assédio moral, sexual e eleitoral; adoecimento decorrente do trabalho e limbo previdenciário",
      "Planos de saúde de autogestão das estatais: cobertura, negativas indevidas e alterações de custeio",
      "Previdência complementar dos fundos de estatais (FUNCEF, PREVI, PETROS, POSTALIS, FUNPRESP, entre outros): revisões, verbas não incluídas no cálculo e questionamento de contribuições extraordinárias de equacionamento",
      "Defesa em processos administrativos e de apuração disciplinar internos",
      "Horas extras, substituição eventual e demais verbas do contrato",
    ],
  },
];


const intermediariosDiferenciais = [
  "Entre o servidor estatutário e o empregado celetista, existe zona intermediária onde trabalham milhões de pessoas: contratados temporários, bolsistas de instituições públicas de pesquisa e ensino, terceirizados que prestam serviço à administração. É a zona em que a proteção ao trabalho é mais frágil, os enquadramentos jurídicos são menos evidentes e o conhecimento técnico faz mais diferença.",
  "A LBS atua nesse terreno em duas frentes. No contencioso, defende trabalhadoras e trabalhadores cujos vínculos com o poder público não se encaixam nos moldes tradicionais, construindo, caso a caso, o enquadramento que assegura os direitos devidos. Na formação dos precedentes, o escritório está presente nos julgamentos que definem as regras desse campo — como os temas de repercussão geral sobre a responsabilidade da administração pública na terceirização.",
  "O diferencial é a leitura integrada do vínculo. Um mesmo caso pode envolver Direito do Trabalho, Direito Administrativo e responsabilidade civil do Estado; a estrutura multidisciplinar da LBS cobre essas frentes internamente. E, como assessoria jurídica de entidades que representam essas pessoas, inclusive categorias que a advocacia tradicional raramente alcança, como bolsistas e temporários de órgãos e fundações públicas, o escritório desenvolve teses em conjunto com quem conhece a realidade concreta desses contratos.",
];

const intermediariosServicos: Group[] = [
  {
    title: "Contratadas e contratados temporários (art. 37, IX, CF)",
    items: [
      "Cobrança dos depósitos de FGTS em contratação temporária nula ou irregular",
      "Descaracterização do contrato temporário desvirtuado — renovações sucessivas, ausência de necessidade temporária ou de excepcional interesse público — e cobrança dos direitos decorrentes",
      "13º salário e férias com terço constitucional, quando previstos no regime local ou em caso de desvirtuamento do contrato (Tema 551 do STF)",
      "Licença-maternidade e estabilidade provisória da gestante contratada por prazo determinado (Tema 542 do STF)",
      "Verbas não pagas durante e ao final do contrato: saldo remuneratório, parcelas inadimplidas e indenização por rescisão antecipada",
      "Questionamento de prorrogações irregulares e de preterição em nova seleção; análise da legalidade do processo seletivo simplificado",
      "Adicionais previstos no regime aplicável: insalubridade, periculosidade, serviço extraordinário e adicional noturno",
      "Regularização dos recolhimentos previdenciários do contrato, contagem e averbação de tempo de contribuição",
      "Ações indenizatórias contra o Estado por dano material e moral, inclusive acidente e adoecimento em serviço",
    ],
  },
  {
    title: "Bolsistas (pesquisa, ensino, extensão e capacitação)",
    items: [
      "Reconhecimento de vínculo quando a bolsa é desvirtuada para encobrir trabalho subordinado, com cobrança dos direitos correspondentes",
      "Cobrança e indenização por bolsas atrasadas, suspensas ou canceladas indevidamente",
      "Defesa em cobranças de devolução ou ressarcimento de valores de bolsa — desligamento do programa, adoecimento, não cumprimento de requisitos —, incluindo alegação de prescrição e revisão administrativa",
      "Prorrogação da bolsa por licença-maternidade e proteção da bolsista gestante (Lei 13.536/2017 e normas CAPES/CNPq)",
      "Suspensão da bolsa por motivo de saúde, sem perda do benefício",
      "Defesa em glosas e cortes por acúmulo de bolsa com atividade remunerada",
      "Assédio moral e sexual e condutas discriminatórias no ambiente acadêmico e de pesquisa: medidas administrativas e judiciais",
    ],
  },
  {
    title: "Terceirizadas e terceirizados a serviço da administração pública",
    items: [
      "Responsabilização subsidiária do ente público pelas verbas trabalhistas inadimplidas pela empresa contratada, com produção da prova da falha de fiscalização",
      "Ação de cobrança de salários, FGTS e verbas rescisórias não pagos, inclusive nos casos de desaparecimento ou insolvência da empresa prestadora",
      "Análise de contrato administrativo por descumprimento de direitos trabalhistas",
      "Verbas devidas na troca de empresa prestadora: rescisão, continuidade da prestação e responsabilidade das contratantes sucessivas",
      "Aplicação e cobrança do piso da categoria e das normas coletivas aplicáveis",
      "Reconhecimento de vínculo diretamente com o tomador em caso de terceirização irregular ou pejotização",
      "Adicionais de insalubridade e periculosidade, horas extras e adicional noturno no ambiente do órgão tomador",
      "Acidente de trabalho e adoecimento nas dependências do ente público",
      "Assédio e condutas discriminatórias praticadas por gestores ou servidores do órgão tomador",
      "Retenção de valores e garantias do contrato administrativo em favor dos trabalhadores: representações ao órgão contratante, ao Tribunal de Contas e ao Ministério Público do Trabalho",
    ],
  },
  {
    title: "Transversais aos três públicos",
    items: [
      "Consultivo sobre a natureza do vínculo e os direitos dele decorrentes; análise de editais, contratos e termos de outorga",
      "Processo administrativo e judicial em decorrência de assédio ou conduta discriminatória por gênero, raça, orientação sexual, orientação política ou religiosa",
      "Responsabilidade civil do Estado: ações por dano material e moral",
      "Atuação extrajudicial junto ao Ministério Público, ao Ministério Público do Trabalho, à Advocacia Pública e aos Tribunais de Contas",
    ],
  },
];

export const Route = createFileRoute("/solucoes/vinculos-com-a-administracao-publica")({
  head: () => ({
    meta: [
      { title: "Vínculos com a Administração Pública | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Defesa de servidoras e servidores públicos, empregados de estatais, temporários, bolsistas e terceirizados, na esfera administrativa e judicial.",
      },
      {
        property: "og:title",
        content: "Vínculos com a Administração Pública | LBS Advogadas e Advogados",
      },
      {
        property: "og:description",
        content:
          "Assessoria a entidades do funcionalismo e atuação do requerimento administrativo aos Tribunais Superiores.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes/vinculos-com-a-administracao-publica" }],
  }),
  component: VinculosPage,
});

function VinculosPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <SolucaoHero
        image={solAdm}
        alt="Edifício da administração pública"
        title="Vínculos com a Administração Pública"
        intro={diferenciais[0]}
      />

      <DescricaoSection
        title="A lógica interna das carreiras públicas"
        paragraphs={diferenciais.slice(1)}
      />

      <PublicoAtendido
        title="Quem trabalha para o Estado"
        lead="Atendemos servidores, empregados públicos, vínculos temporários e as entidades que os representam."
        items={publicoItems}
      />

      <DestaquesGaleria title="Da mesa de negociação ao Supremo" items={destaques} />

      <ServicosPorContexto
        title="Análises, pareceres, requerimentos administrativos e ações judiciais"
        ariaLabel="Tipo de vínculo com o Estado"
        contextos={[
          {
            id: "servidores",
            label: "Servidoras e servidores públicos",
            lead: "Servidoras e servidores públicos. Análises, pareceres, requerimentos administrativos e ações judiciais referentes aos seguintes temas:",
            groups: servidoresServicos,
          },
          {
            id: "estatais",
            label: "Empregadas e empregados públicos e de empresas estatais",
            lead: "Análises, pareceres, pedidos administrativos e ações judiciais referentes aos seguintes temas:",
            paragraphs: estataisDiferenciais,
            groups: estataisServicos,
          },
          {
            id: "intermediarios",
            label: "Temporários, bolsistas e terceirizados",
            lead: "Serviços organizados por vínculo, com produtos transversais aos três públicos:",
            paragraphs: intermediariosDiferenciais,
            groups: intermediariosServicos,
          },
        ]}
      />

      <SociosResponsaveis people={equipeVinculosAdministracaoPublica} />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
