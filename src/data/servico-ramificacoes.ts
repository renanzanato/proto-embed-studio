export type ServicoRamificacao = {
  title: string;
  to: string;
  ramos: string[];
};

/** Ramificações (frentes internas) de cada serviço, exibidas no mega-menu. */
export const servicoRamificacoes: ServicoRamificacao[] = [
  {
    title: "Defesa da pessoa que trabalha",
    to: "/servicos/defesa-da-pessoa-que-trabalha",
    ramos: [
      "Vínculo e contratação",
      "Jornada e regime de trabalho",
      "Remuneração e carreira",
      "Saúde, dignidade e proteção no trabalho",
      "Desligamento e defesa",
      "Defesa em processos administrativos",
      "Pessoas com deficiência e neurodivergentes",
      "Previdência",
      "Consultivo",
    ],
  },
  {
    title: "Vínculos com a Administração Pública",
    to: "/servicos/vinculos-com-a-administracao-publica",
    ramos: [
      "Concurso público e ingresso",
      "Carreira e movimentação",
      "Remuneração, direitos e vantagens",
      "Dignidade e proteção no trabalho",
      "Defesa disciplinar e reintegração",
      "Previdência",
      "Atuação extrajudicial",
    ],
  },
  {
    title: "Litígios coletivos",
    to: "/servicos/litigios-coletivos",
    ramos: [
      "Ações coletivas",
      "Negociação coletiva",
      "Organização e vida sindical",
      "Assessoria legislativa",
    ],
  },
  {
    title: "Tribunais Superiores",
    to: "/servicos/tribunais-superiores",
    ramos: ["Condução de processos nos Tribunais Superiores", "Atuação estratégica"],
  },
  {
    title: "Execuções complexas",
    to: "/servicos/execucoes-complexas",
    ramos: ["Condução da fase de execução"],
  },
  {
    title: "Temas emergentes",
    to: "/servicos/temas-emergentes",
    ramos: ["Atuações representativas", "Serviços"],
  },
  {
    title: "Parceiros estratégicos",
    to: "/servicos/parceiros-estrategicos",
    ramos: [
      "Condução compartilhada de processos",
      "Atuação em Brasília para parceiros",
      "Gestão e desenvolvimento da parceria",
    ],
  },
];
