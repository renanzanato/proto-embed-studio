export type ServicoRamo = {
  /** slug do ramo, usado em /servicos/:servico/:ramo */
  slug: string;
  title: string;
  servicoSlug: string;
  servicoTitle: string;
  items: string[];
};

/** Ramificações (frentes internas) de cada serviço, com página própria. */
export const servicoRamos: ServicoRamo[] = [
  {
    slug: "vinculo-e-contratacao",
    title: "Vínculo e contratação",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Reconhecimento de vínculo de emprego",
      "Análise de contrato de prestação de serviços — pessoa jurídica (pejotização) e pessoa física",
      "Análise de fraude nos contratos de terceirização e pejotização",
      "Trabalho em plataformas digitais e por aplicativos: reconhecimento de vínculo e direitos",
      "Grupo econômico e sucessão de empregadores: responsabilização na cobrança de créditos",
      "Defesa da contratação mediante concurso público, para emprego público",
    ],
  },
  {
    slug: "jornada-e-regime-de-trabalho",
    title: "Jornada e regime de trabalho",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Horas extras e descumprimento de intervalo intrajornada",
      "Descumprimento do descanso aos domingos para mulheres",
      "Pedido de home office, regime híbrido ou redução da jornada de trabalho",
      "Redução de jornada e adaptações razoáveis para trabalhadores com transtorno do espectro autista (TEA), neurodivergentes ou com deficiência, e para quem tem dependente nessas condições",
    ],
  },
  {
    slug: "remuneracao-e-carreira",
    title: "Remuneração e carreira",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Pagamento por substituição eventual",
      "Incorporação de verba salarial e reenquadramento salarial",
      "Análise de pagamento de verbas rescisórias",
      "Cobrança de depósitos de FGTS não realizados",
      "Repetição de indébito e defesa em cobranças contra o trabalhador",
    ],
  },
  {
    slug: "saude-dignidade-e-protecao-no-trabalho",
    title: "Saúde, dignidade e proteção no trabalho",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Danos morais por cobranças e metas abusivas",
      "Danos morais por adoecimento ou assédio moral, sexual e eleitoral",
      "Danos materiais pelos gastos com adoecimento decorrente do trabalho",
      "Pensão mensal vitalícia pela perda da capacidade laborativa decorrente do trabalho",
      "Acidente de trabalho: estabilidade acidentária e reparações",
      "Insalubridade e periculosidade",
      "Atendimento especializado para vítimas de discriminação por gênero, raça, orientação sexual, orientação política ou religiosa",
      "Defesa do cumprimento das licenças maternidade e paternidade",
      "Estabilidades: gestante, doença, norma interna, pré-aposentadoria, entre outras",
    ],
  },
  {
    slug: "desligamento-e-defesa",
    title: "Desligamento e defesa",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Reintegração e nulidade da dispensa por justa causa",
      "Reintegração quando o desligamento ocorreu com o trabalhador doente",
      "Rescisão indireta",
      "Homologação e análise de acordos extrajudiciais (art. 855-B da CLT) antes da assinatura",
    ],
  },
  {
    slug: "defesa-em-processos-administrativos",
    title: "Defesa em processos administrativos",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [],
  },
  {
    slug: "pessoas-com-deficiencia-e-neurodivergentes-e",
    title: "Pessoas com deficiência e neurodivergentes e aqueles que têm filhos ou dependentes nessas condições",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Adaptações no trabalho",
      "Redução de jornada sem redução salarial",
      "Teletrabalho",
      "Flexibilização de horários para terapias e acompanhamento",
      "Proteção contra a dispensa discriminatória",
    ],
  },
  {
    slug: "previdencia",
    title: "Previdência",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Revisão de benefício de previdência social (RGPS)",
      "Revisão de benefício de previdência complementar",
      "Indenização pela não inclusão de verba salarial no cálculo da previdência complementar",
      "Reconhecimento de aposentadoria especial",
    ],
  },
  {
    slug: "consultivo",
    title: "Consultivo",
    servicoSlug: "defesa-da-pessoa-que-trabalha",
    servicoTitle: "Defesa da pessoa que trabalha",
    items: [
      "Elaboração de pareceres",
      "Notas técnicas",
    ],
  },
  {
    slug: "concurso-publico-e-ingresso",
    title: "Concurso público e ingresso",
    servicoSlug: "vinculos-com-a-administracao-publica",
    servicoTitle: "Vínculos com a Administração Pública",
    items: [
      "Concurso público: edital, nomeação, posse, preterição e cotas",
      "Ações decorrentes do estágio probatório",
      "Defesa de anistiados",
    ],
  },
  {
    slug: "carreira-e-movimentacao",
    title: "Carreira e movimentação",
    servicoSlug: "vinculos-com-a-administracao-publica",
    servicoTitle: "Vínculos com a Administração Pública",
    items: [
      "Posicionamento na carreira: reenquadramento e desvio de função",
      "Consultivo sobre aspectos da carreira",
      "Transferências, licenças e afastamentos: capacitação, acompanhamento de cônjuge, tratamento de saúde, cessão, remoção, redistribuição, interesses particulares, mandato classista, mandato eletivo e missão no exterior",
      "Licença maternidade, paternidade e adotante",
      "Reintegração, recondução e reversão",
    ],
  },
  {
    slug: "remuneracao-direitos-e-vantagens",
    title: "Remuneração, direitos e vantagens",
    servicoSlug: "vinculos-com-a-administracao-publica",
    servicoTitle: "Vínculos com a Administração Pública",
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
    slug: "dignidade-e-protecao-no-trabalho",
    title: "Dignidade e proteção no trabalho",
    servicoSlug: "vinculos-com-a-administracao-publica",
    servicoTitle: "Vínculos com a Administração Pública",
    items: [
      "Processo administrativo e judicial em decorrência de assédio ou conduta discriminatória por gênero, raça, orientação sexual, orientação política ou religiosa",
      "Ações indenizatórias e ações contra o Estado por dano material e moral (responsabilidade civil do Estado)",
    ],
  },
  {
    slug: "defesa-disciplinar-e-reintegracao",
    title: "Defesa disciplinar e reintegração",
    servicoSlug: "vinculos-com-a-administracao-publica",
    servicoTitle: "Vínculos com a Administração Pública",
    items: [
      "Defesa em processo administrativo disciplinar (PAD) e acompanhamento de sindicância",
      "Reintegração",
    ],
  },
  {
    slug: "previdencia",
    title: "Previdência",
    servicoSlug: "vinculos-com-a-administracao-publica",
    servicoTitle: "Vínculos com a Administração Pública",
    items: [
      "Aposentadoria do regime próprio e do regime complementar",
      "Planejamento previdenciário e análise de tempo de serviço",
      "Acompanhamento do processo de aposentadoria no Tribunal de Contas",
      "Pensão e reconhecimento de vínculo para fins de pensão",
    ],
  },
  {
    slug: "atuacao-extrajudicial",
    title: "Atuação extrajudicial",
    servicoSlug: "vinculos-com-a-administracao-publica",
    servicoTitle: "Vínculos com a Administração Pública",
    items: [
      "Acompanhamento e atuação junto ao Ministério Público, à Advocacia Pública e aos Tribunais de Contas",
      "Negociação das relações de trabalho",
      "Minuta de projetos de lei para reestruturação de carreira",
    ],
  },
  {
    slug: "acoes-coletivas",
    title: "Ações coletivas",
    servicoSlug: "litigios-coletivos",
    servicoTitle: "Litígios coletivos",
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
    slug: "negociacao-coletiva",
    title: "Negociação coletiva",
    servicoSlug: "litigios-coletivos",
    servicoTitle: "Litígios coletivos",
    items: [
      "Assessoria jurídica em mesas de negociação coletiva: análise e elaboração de cláusulas, quadros comparativos e orientação estratégica",
      "Elaboração, revisão e negociação de convenções e acordos coletivos",
      "Campanhas salariais e negociação de conflitos coletivos",
      "Negociação de acordos judiciais e extrajudiciais",
      "Acompanhamento e atuação em mediação no âmbito da Advocacia-Geral da União e do Ministério do Trabalho e Emprego",
    ],
  },
  {
    slug: "organizacao-e-vida-sindical",
    title: "Organização e vida sindical",
    servicoSlug: "litigios-coletivos",
    servicoTitle: "Litígios coletivos",
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
    slug: "assessoria-legislativa",
    title: "Assessoria legislativa",
    servicoSlug: "litigios-coletivos",
    servicoTitle: "Litígios coletivos",
    items: [
      "Monitoramento da tramitação de projetos de lei de interesse das categorias",
      "Elaboração de notas técnicas, pareceres e minutas de emendas parlamentares",
      "Subsídio técnico a audiências públicas e negociações com os governos",
    ],
  },
  {
    slug: "conducao-de-processos-nos-tribunais-superiores",
    title: "Condução de processos nos Tribunais Superiores",
    servicoSlug: "tribunais-superiores",
    servicoTitle: "Tribunais Superiores",
    items: [
      "Acompanhamento das publicações e elaboração das peças processuais necessárias",
      "Resposta a todos os recursos e manifestações das partes contrárias",
      "Diligências nos gabinetes, para agilizar o julgamento do processo",
      "Audiências com desembargadores e ministros antes do julgamento",
      "Elaboração e despacho de memoriais, com os aspectos mais importantes do caso",
      "Sustentações orais",
      "Acompanhamento das sessões de julgamento",
    ],
  },
  {
    slug: "atuacao-estrategica",
    title: "Atuação estratégica",
    servicoSlug: "tribunais-superiores",
    servicoTitle: "Tribunais Superiores",
    items: [
      "Acompanhamento de casos de repercussão geral, inclusive com ingresso de entidades relevantes como amicus curiae",
      "Atuação no STF em controle concentrado de constitucionalidade",
      "Atuação estratégica em recursos e incidentes com teses vinculantes no TST e no STJ",
      "Ações rescisórias e mandados de segurança",
      "Dissídios coletivos",
      "Intervenções em audiências públicas",
    ],
  },
  {
    slug: "conducao-da-fase-de-execucao",
    title: "Condução da fase de execução",
    servicoSlug: "execucoes-complexas",
    servicoTitle: "Execuções complexas",
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
  {
    slug: "atuacoes-representativas",
    title: "Atuações representativas",
    servicoSlug: "temas-emergentes",
    servicoTitle: "Temas emergentes",
    items: [
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
    ],
  },
  {
    slug: "servicos",
    title: "Serviços",
    servicoSlug: "temas-emergentes",
    servicoTitle: "Temas emergentes",
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
  {
    slug: "conducao-compartilhada-de-processos",
    title: "Condução compartilhada de processos",
    servicoSlug: "parceiros-estrategicos",
    servicoTitle: "Parceiros estratégicos",
    items: [
      "Atendimento e redação de petições iniciais, realização de diligências e audiências",
      "Cumprimento de todos os prazos pertinentes",
      "Resposta a todos os recursos e manifestações das partes contrárias",
      "Sustentações orais em sessões e acompanhamento de audiências",
    ],
  },
  {
    slug: "atuacao-em-brasilia-para-parceiros",
    title: "Atuação em Brasília para parceiros",
    servicoSlug: "parceiros-estrategicos",
    servicoTitle: "Parceiros estratégicos",
    items: [
      "Diligências nos gabinetes para agilizar o julgamento dos processos",
      "Entrega e despacho de memoriais, com os pontos importantes para o exame dos casos",
      "Acompanhamento de casos de repercussão geral, inclusive com ingresso de entidades relevantes como amicus curiae",
    ],
  },
  {
    slug: "gestao-e-desenvolvimento-da-parceria",
    title: "Gestão e desenvolvimento da parceria",
    servicoSlug: "parceiros-estrategicos",
    servicoTitle: "Parceiros estratégicos",
    items: [
      "Controladoria Jurídica: monitoramento de publicações, prazos e andamentos, com relatórios ao parceiro",
      "Reuniões periódicas para discussão dos casos e das medidas a adotar",
      "Treinamentos e acompanhamento para aprimorar a atuação conjunta",
    ],
  },
];

export function getRamo(servicoSlug: string, ramoSlug: string) {
  return servicoRamos.find((r) => r.servicoSlug === servicoSlug && r.slug === ramoSlug);
}

export function ramosDoServico(servicoSlug: string) {
  return servicoRamos.filter((r) => r.servicoSlug === servicoSlug);
}

export function ramoHref(servicoSlug: string, ramoSlug: string) {
  return `/servicos/${servicoSlug}/${ramoSlug}`;
}
