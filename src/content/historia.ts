export type MarcoTipo =
  | "institucional"
  | "livro"
  | "cartilha"
  | "evento"
  | "internacional"
  | "agenda";

export type Marco = {
  data: string;
  ano: number;
  titulo: string;
  descricao?: string;
  tipo: MarcoTipo;
  url?: string;
};

/** Texto oficial de abertura da página Nossa História. */
export const historiaIntro =
  "Com trajetória vinculada ao movimento sindical e ao Direito do Trabalho, a LBS Advogadas e Advogados traz em sua sigla a história e o compromisso de seus sócios fundadores: Loguercio, Beiro e Surian. São quatro décadas dedicadas à construção de soluções jurídicas de alto impacto na defesa de quem trabalha e dos direitos humanos.";

/** CAMADA 1 — A trajetória: marcos institucionais. */
export const trajetoria: Marco[] = [
  { data: "1981", ano: 1981, titulo: "José Eymard Loguercio e Eduardo Surian Matias se conhecem no colégio Pio XII.", tipo: "institucional" },
  { data: "1982", ano: 1982, titulo: "Passam a estudar Direito na PUC Campinas. Ainda estudantes, iniciam estágio no Sindicato dos Metalúrgicos de Campinas (1984) e participam da primeira oposição a vencer um grande sindicato na região.", tipo: "institucional" },
  { data: "1984", ano: 1984, titulo: "Eduardo Surian Matias assume a assessoria jurídica do Sindicato dos Condutores de Campinas.", tipo: "institucional" },
  { data: "1987", ano: 1987, titulo: "Eymard e Eduardo, com outros colegas, formam o primeiro escritório a atuar para sindicatos junto ao recém-criado TRT de Campinas. No mesmo ano, Nilo Beiro se muda do Rio Grande do Sul para São Paulo e é contratado como advogado pelo Sindicato dos Metalúrgicos de Campinas.", tipo: "institucional" },
  { data: "1991", ano: 1991, titulo: "Nilo Beiro integra a equipe do escritório. Os sócios passam a responder pelo departamento jurídico do Sindicato dos Bancários de Campinas, em projeto pioneiro. Na mesma época, Loguercio atua na Secretaria de Política Sindical da CUT Nacional.", tipo: "institucional" },
  { data: "1992", ano: 1992, titulo: "Eymard se muda para Brasília e inaugura a unidade na capital, destinada ao atendimento jurídico de sindicatos de bancários junto ao TST.", tipo: "institucional" },
  { data: "1995", ano: 1995, titulo: "A atuação se expande para São Paulo.", tipo: "institucional" },
  { data: "2013", ano: 2013, titulo: "Criação da Loguercio, Beiro e Surian Sociedade de Advogados, a LBS Advogadas e Advogados. As unidades em Campinas, São Paulo e Brasília são mantidas e o escritório retém importantes parcerias nacionais (mais de 80 escritórios). Tornam-se sócios patrimoniais Paulo Roberto, Gláucia, Fernando e Luciana Barretto.", tipo: "institucional" },
  { data: "09/2014", ano: 2014, titulo: "Formação de grupo de parceiros advogados trabalhistas, que dará origem à Rede Lado.", tipo: "institucional" },
  { data: "03/2016", ano: 2016, titulo: "Fundação da Rede Lado.", tipo: "institucional" },
  { data: "05/2019", ano: 2019, titulo: "Fernanda Giorgi se torna sócia patrimonial do escritório.", tipo: "institucional" },
  { data: "03/2020", ano: 2020, titulo: "Em resposta à pandemia, a LBS suspende atividades presenciais e adota regime de trabalho remoto.", tipo: "institucional" },
  { data: "03/2023", ano: 2023, titulo: "Daniela Gerelli se torna sócia patrimonial do escritório.", tipo: "institucional" },
  { data: "04/2026", ano: 2026, titulo: "Antonio Megale e Eduardo Henrique M. Soares se tornam sócios patrimoniais do escritório.", tipo: "institucional" },
];

/** CAMADA 2 — Acervo: publicações, eventos, atuação internacional e agendas. */
export const acervo: Marco[] = [
  { data: "2013", ano: 2013, tipo: "evento", titulo: "Primeiro seminário “De olho no Futuro”, em Brasília." },
  { data: "2014", ano: 2014, tipo: "evento", titulo: "Oficinas sobre a nova sistemática de recursos trabalhistas." },
  { data: "2015", ano: 2015, tipo: "livro", titulo: "Lançamento do livro “Terceirização no STF”." },
  { data: "2016", ano: 2016, tipo: "internacional", titulo: "Seminário Internacional “Negociação Coletiva em Tempos de Crise”." },
  { data: "2017", ano: 2017, tipo: "livro", titulo: "Série de livros sobre resistência ao golpe de 2016." },
  { data: "2018", ano: 2018, tipo: "internacional", titulo: "Seminário Internacional “Democracia, Direito e Trabalho”." },
  { data: "2019", ano: 2019, tipo: "evento", titulo: "Seminários sobre serviço público e futuro do trabalho." },
  { data: "07/2020", ano: 2020, tipo: "evento", titulo: "Ciclo de Debates “Escola é muito mais que Escola”." },
  { data: "09/2020", ano: 2020, tipo: "evento", titulo: "Oficina LGPD: “O que fazer? Proteção de dados, vigilância e responsabilidade das entidades sindicais e associações”." },
  { data: "09/2020", ano: 2020, tipo: "evento", titulo: "Ciclo de Debates “Estatais: ameaças, pandemia e negociação coletiva”." },
  { data: "10/2020", ano: 2020, tipo: "evento", titulo: "Ciclo de Debates “Reforma Tributária: o que está em jogo?”." },
  { data: "10/2020", ano: 2020, tipo: "evento", titulo: "Ciclo de Debates “O que será que será? O trabalho em aplicativos”." },
  { data: "11/2020", ano: 2020, tipo: "evento", titulo: "Debate “Teletrabalho: o futuro que chegou e mexe com a casa, a cabeça e a negociação coletiva de quem trabalha”." },
  { data: "12/2020", ano: 2020, tipo: "livro", titulo: "Anuário LBS Advogados e Instituto Lavoro." },
  { data: "01/2021", ano: 2021, tipo: "evento", titulo: "Ciclo de Debates “Brasil em transe: a onda de demissões e o futuro da indústria automobilística”." },
  { data: "05/2021", ano: 2021, tipo: "evento", titulo: "Debate “Os norte-americanos voltaram a falar de sindicatos. O que isso importa para o Brasil?”." },
  { data: "08/2021", ano: 2021, tipo: "evento", titulo: "Debate “O Supremo e a Reforma Trabalhista”." },
  { data: "08/2021", ano: 2021, tipo: "livro", titulo: "Ciclo de Debates “Sindicato: entre a permanência e a mudança — Regulações e desafios para o futuro”, com posterior lançamento de livro com o mesmo nome." },
  { data: "11/2021", ano: 2021, tipo: "cartilha", titulo: "Lançamento da “Cartilha Esperança Garcia e Luís Gama — Cartilha antirracista para carreiras jurídicas”." },
  { data: "11/2021", ano: 2021, tipo: "livro", titulo: "Lançamento do livro “Um Direito do Trabalho Todo Seu”." },
  { data: "12/2021", ano: 2021, tipo: "livro", titulo: "Lançamento do livro “Cuidadania: Construir coletivamente o igual no diferente”." },
  { data: "01/2022", ano: 2022, tipo: "internacional", titulo: "Participação no Seminário Internacional “¿Vivimos un estado autoritario de derecho?”." },
  { data: "03/2022", ano: 2022, tipo: "evento", titulo: "Oficina “Assédio Moral: questão de gênero e diversidade no ambiente de trabalho”, junto à Federação Nacional dos Arquitetos e Urbanistas (FNA)." },
  { data: "04/2022", ano: 2022, tipo: "livro", titulo: "Lançamento do livro “Estratégias da Advocacia no TST”, organizado por Dino Andrade e Ricardo Calcini, com participação do sócio da LBS Eduardo Henrique Marques Soares." },
  { data: "04/2022", ano: 2022, tipo: "agenda", titulo: "Lançamento da Agenda Legislativa 2022 e da Agenda Jurídica do STF 2022 das Centrais Sindicais." },
  { data: "04/2022", ano: 2022, tipo: "cartilha", titulo: "Lançamento da cartilha “Enfrentamento ao assédio moral, assédio sexual e discriminação no trabalho bancário”." },
  { data: "06/2022", ano: 2022, tipo: "evento", titulo: "Eduardo Surian participa do painel “Trabalho na Economia Digital”, na programação do SciBiz Conference 2022." },
  { data: "06/2022", ano: 2022, tipo: "cartilha", titulo: "Lançamento da cartilha “Inclusão e Direitos LGBTQIA+”, produzida pelo grupo LGBTQIAPN+ do escritório." },
  { data: "07/2022", ano: 2022, tipo: "livro", titulo: "Primeira edição do podcast “Vozes — Mulheres Pretas em Destaque”, produzido pelo Grupo de Trabalho Antirracista do escritório." },
  { data: "08/2022", ano: 2022, tipo: "evento", titulo: "Participação da sócia Fernanda Giorgi no “Revoga Já! Seminário pela Revogação da Reforma Trabalhista”." },
  { data: "08/2022", ano: 2022, tipo: "agenda", titulo: "Participação em manifestações em defesa do Estado Democrático de Direito." },
  { data: "09/2022", ano: 2022, tipo: "evento", titulo: "Seminário “Os Fins da Justiça do Trabalho”, promovido pela Rede Lado." },
  { data: "09/2022", ano: 2022, tipo: "agenda", titulo: "Implementação do plantão jurídico no Espaço Feminismos Plurais." },
  { data: "10/2022", ano: 2022, tipo: "evento", titulo: "Live “Assédio Eleitoral: saiba como se proteger”." },
  { data: "12/2022", ano: 2022, tipo: "agenda", titulo: "Aniversário de 30 anos do sócio José Eymard Loguercio em Brasília." },
  { data: "12/2022", ano: 2022, tipo: "evento", titulo: "Live “Luta Antirracista, Nossa História”, em parceria com o Espaço Feminismos Plurais." },
  { data: "01/2023", ano: 2023, tipo: "internacional", titulo: "Participação na 13ª edição do Seminário de Teoria Crítica dos Direitos Humanos, com o tema “A luta por direitos e a tirania do Algoritmo”, realizado pelo Instituto Joaquín Herrera Flores (Espanha e América Latina), o Mestrado em Direitos Humanos, Interculturalidade e Desenvolvimento (UPO-UNIA) e o Doutorado em Ciências Jurídicas e Políticas (UPO)." },
  { data: "01/2023", ano: 2023, tipo: "internacional", titulo: "Participação no Seminário Comparado del Derecho del Trabajo, realizado pelo Instituto Lavoro em convênio com a Universidad Castilla-La Mancha, em parceria com Mauro Menezes & Advogados." },
  { data: "02/2023", ano: 2023, tipo: "evento", titulo: "Participação em debate promovido pelo Ipeatra sobre a Convenção nº 158 da OIT e a ADI nº 1.625." },
  { data: "05/2023", ano: 2023, tipo: "evento", titulo: "Realização do 28º Encontro do CNASP, em Brasília." },
  { data: "05/2023", ano: 2023, tipo: "livro", titulo: "Lançamento do 2º volume do livro “Constitucionalismo intermitente e lutas sociais no Brasil e no Chile”." },
  { data: "06/2023", ano: 2023, tipo: "cartilha", titulo: "Lançamento da “Cartilha Inclusão e Direitos das Pessoas Trans”, produzida pelo grupo LGBTQIAPN+ do escritório." },
  { data: "08/2023", ano: 2023, tipo: "evento", titulo: "Participação no seminário “Admirável Mundo Novo: não há trabalho sem direitos”, realizado pela Rede Lado." },
  { data: "09/2023", ano: 2023, tipo: "agenda", titulo: "Organização de mutirão de retificação de direitos e aconselhamento jurídico para pessoas trans, junto ao Núcleo de Consciência Trans da Unicamp, na Adunicamp." },
  { data: "09/2023", ano: 2023, tipo: "internacional", titulo: "Participação no curso de especialização em Relações Laborais “Trabalho e Cidadania: Homenagem a Umberto Romagnoli”, na Universidad Castilla-La Mancha, em Toledo, Espanha." },
  { data: "10/2023", ano: 2023, tipo: "livro", titulo: "Lançamento do livro “O Sindicato e os Desafios da Contemporaneidade”." },
  { data: "11/2023", ano: 2023, tipo: "internacional", titulo: "Participação no XXX Encontro de Especialistas Latino-Americanos em Relações Laborais." },
  { data: "11/2023", ano: 2023, tipo: "cartilha", titulo: "Lançamento da “Cartilha Violência contra a mulher: conhecer para combater”, junto ao Sinpro/SP." },
  { data: "12/2023", ano: 2023, tipo: "livro", titulo: "Lançamento do livro “Cuidadania: a (re)existência das mulheres nas encruzilhadas do poder”." },
  { data: "01/2024", ano: 2024, tipo: "cartilha", titulo: "Lançamento da cartilha “Você sabe quais os requisitos para se aposentar?”." },
  { data: "02/2024", ano: 2024, tipo: "evento", titulo: "Live “Demissão Imotivada: entenda a decisão do Supremo e tire suas dúvidas”." },
  { data: "02/2024", ano: 2024, tipo: "evento", titulo: "A sócia Luciana Barretto participa de debate promovido pelo Observatório dos Impactos das Novas Morfologias do Trabalho sobre a Vida e Saúde da Classe Trabalhadora." },
  { data: "03/2024", ano: 2024, tipo: "evento", titulo: "Live “Derrubada da Revisão da Vida Toda”." },
  { data: "05/2024", ano: 2024, tipo: "agenda", titulo: "Lançamento da Agenda Jurídica das Centrais Sindicais no STF." },
  { data: "06/2024", ano: 2024, tipo: "internacional", titulo: "Participação na 112ª Conferência Internacional do Trabalho da Organização Internacional do Trabalho." },
  { data: "06/2024", ano: 2024, tipo: "internacional", titulo: "Realização do “Seminário Internacional Negociação Coletiva nas Cadeias Globais de Valor”, em parceria com Instituto Lavoro, Dieese e Fundação Friedrich Ebert." },
  { data: "06/2024", ano: 2024, tipo: "cartilha", titulo: "Lançamento da “Cartilha Inclusão e Direitos das Pessoas Intersexo”, produzida pelo grupo LGBTQIAPN+ do escritório." },
  { data: "07/2024", ano: 2024, tipo: "agenda", titulo: "Participação em audiência pública no Senado sobre a regulamentação da IA no Brasil." },
  { data: "08/2024", ano: 2024, tipo: "evento", titulo: "Participação no 7º Encontro Nacional dos Trabalhadores e Trabalhadoras com Deficiência da CUT Nacional." },
  { data: "08/2024", ano: 2024, tipo: "agenda", titulo: "Participação em audiência pública do Tribunal Superior do Trabalho sobre a uniformização do entendimento a respeito da contribuição negocial e do direito de oposição." },
  { data: "08/2024", ano: 2024, tipo: "agenda", titulo: "Participação no lançamento dos Protocolos para Atuação e Julgamento com Perspectiva Antidiscriminatória, Interseccional e Inclusiva; com Perspectiva da Infância e da Adolescência; e com Perspectiva de Enfrentamento do Trabalho Escravo Contemporâneo." },
  { data: "09/2024", ano: 2024, tipo: "evento", titulo: "Participação no painel “Sindicalismo e a contribuição do STF”, no 45º Congresso Nacional da Advocacia Trabalhista (Conat)." },
  { data: "09/2024", ano: 2024, tipo: "internacional", titulo: "Participação no Curso de Especialização em Relações Laborais, na Universidad Castilla-La Mancha, em Toledo, Espanha." },
  { data: "11/2024", ano: 2024, tipo: "evento", titulo: "Realização do seminário “Em que mundo você vive: direito sem trabalho, trabalho sem direitos?”." },
  { data: "11/2024", ano: 2024, tipo: "evento", titulo: "Participação no 30º Encontro do CNASP." },
  { data: "11/2024", ano: 2024, tipo: "internacional", titulo: "Participação no I Congresso Internacional do Trabalho, a convite do Ministério do Trabalho da Espanha." },
  { data: "11/2024", ano: 2024, tipo: "internacional", titulo: "Participação no G20, no Rio de Janeiro." },
  { data: "03/2025", ano: 2025, tipo: "evento", titulo: "Participação no seminário sobre os impactos da Reforma Trabalhista (Lei nº 13.467/2017) na Justiça do Trabalho." },
  { data: "04/2025", ano: 2025, tipo: "internacional", titulo: "Participação no IX Foro Regional de Direitos Humanos e Empresas da ONU." },
  { data: "05/2025", ano: 2025, tipo: "evento", titulo: "Participação no evento “O Tema 1389 do STF é o fim do Direito do Trabalho”, realizado pelo Instituto Ipeatra." },
  { data: "05/2025", ano: 2025, tipo: "livro", titulo: "Lançamento do boletim “(A)gente do sistema financeiro”." },
  { data: "05/2025", ano: 2025, tipo: "cartilha", titulo: "Lançamento da cartilha “Direitos das Mulheres Trabalhadoras”." },
  { data: "05/2025", ano: 2025, tipo: "cartilha", titulo: "Lançamento da cartilha “Assédio Moral e Sexual no Trabalho: Conhecer para combater”." },
  { data: "06/2025", ano: 2025, tipo: "internacional", titulo: "Participação na 113ª Conferência da OIT." },
  { data: "07/2025", ano: 2025, tipo: "evento", titulo: "Participação no 31º Encontro do CNASP." },
  { data: "07/2025", ano: 2025, tipo: "evento", titulo: "Participação no “Encontro Nacional de Cipeiros e Cipeiras para o Trabalho Seguro e Saudável”." },
  { data: "08/2025", ano: 2025, tipo: "evento", titulo: "Participação na 5ª Conferência Nacional de Saúde do Trabalhador e da Trabalhadora." },
  { data: "09/2025", ano: 2025, tipo: "internacional", titulo: "Realização do “Seminário Regional sobre Direitos Humanos e Empresas: avanços e desafios para a América Latina”, em parceria com o Homa." },
  { data: "09/2025", ano: 2025, tipo: "internacional", titulo: "Participação em curso para especialistas latino-americanos em relações trabalhistas, em Toledo, Espanha." },
  { data: "09/2025", ano: 2025, tipo: "evento", titulo: "Participação na Oficina Jurídica Nacional sobre organização do ramo financeiro, promovida pela Contraf." },
  { data: "09/2025", ano: 2025, tipo: "evento", titulo: "Participação no 46º Congresso Nacional da Advocacia Trabalhista (46º CONAT) e no 19º Encontro Latino-Americano de Advogadas e Advogados Trabalhistas (19º ELAT)." },
  { data: "09/2025", ano: 2025, tipo: "livro", titulo: "Lançamento do livro “Direito do Trabalho Antidiscriminatório”." },
  { data: "10/2025", ano: 2025, tipo: "internacional", titulo: "Participação no 1º Seminário Internacional sobre Relações de Trabalho." },
  { data: "10/2025", ano: 2025, tipo: "internacional", titulo: "Realização do seminário “Novas Tecnologias e sua Regulamentação pelo Direito do Trabalho: Análise de Cenários e Respostas Possíveis”, promovido pelo Instituto Lavoro, pelo CELDS, pela Universidad de Castilla-La Mancha e pela Academia Brasileira de Direito do Trabalho, em Toledo, Espanha." },
  { data: "10/2025", ano: 2025, tipo: "evento", titulo: "Participação no XIX Congresso Brasileiro de Direito Previdenciário, promovido pelo IBDP." },
  { data: "10/2025", ano: 2025, tipo: "evento", titulo: "Participação no seminário “Contas públicas, políticas sociais e serviço público”." },
  { data: "10/2025", ano: 2025, tipo: "internacional", titulo: "Participação no Seminário Brasil-Espanha “Nuevas tecnologías y su regulación por el Derecho del Trabajo: análisis de escenarios y respuestas posibles”, na Universidade de Castilla-La Mancha (UCLM), em Toledo, Espanha." },
  { data: "11/2025", ano: 2025, tipo: "internacional", titulo: "Participação no seminário “Política y Derecho del Trabajo: una relación instable”, em Buenos Aires." },
  { data: "11/2025", ano: 2025, tipo: "internacional", titulo: "Participação na COP30, 30ª Conferência das Partes da Convenção-Quadro das Nações Unidas sobre a Mudança do Clima, em Belém do Pará." },
  { data: "11/2025", ano: 2025, tipo: "livro", titulo: "Lançamento do estudo “Um modelo de transição energética injusta — o caso das usinas eólicas em Serra do Mel, no Rio Grande do Norte”, em parceria com Friedrich Ebert Stiftung (FES), DIEESE, Homa, INESC, CUT Brasil, CUT Rio Grande do Norte, FETARN e SAR." },
  { data: "11/2025", ano: 2025, tipo: "evento", titulo: "Realização do seminário da Rede Lado “Crise de Hegemonia e Mundo do Trabalho: criticar o excludente e construir o inclusivo”." },
  { data: "11/2025", ano: 2025, tipo: "agenda", titulo: "Participação na 2ª Marcha das Mulheres Negras, em Brasília." },
  { data: "11/2025", ano: 2025, tipo: "livro", titulo: "Lançamento do livro “O que se perde quando se lucra: Neoliberalismo e Direitos Humanos sob o olhar de O Direito Achado na Rua”." },
  { data: "12/2025", ano: 2025, tipo: "evento", titulo: "Participação no 32º Encontro do Coletivo Nacional de Advogados(as) de Servidores(as) Públicos(as) — CNASP, em Recife (PE)." },
  { data: "12/2025", ano: 2025, tipo: "evento", titulo: "Participação na 13ª Conferência Nacional de Direitos Humanos, em Brasília." },
  { data: "02/2026", ano: 2026, tipo: "livro", titulo: "Lançamento do livro “Salário Mínimo no Brasil: 90 anos de História, Lutas e Transformações”." },
  { data: "03/2026", ano: 2026, tipo: "agenda", titulo: "Participação na primeira reunião do Observatório do Trabalho Decente no Poder Judiciário, do CNJ." },
  { data: "03/2026", ano: 2026, tipo: "evento", titulo: "Participação na II Conferência Nacional do Trabalho (CNT)." },
  { data: "03/2026", ano: 2026, tipo: "internacional", titulo: "Participação no evento “Diálogos Internacionais”, promovido pelo Tribunal Superior do Trabalho." },
  { data: "03/2026", ano: 2026, tipo: "cartilha", titulo: "Lançamento da cartilha “Maternagem e o Mundo do Trabalho: conheça seus direitos”." },
  { data: "04/2026", ano: 2026, tipo: "evento", titulo: "Participação no seminário “Direitos Humanos, Energias Renováveis e Transição Energética Justa em Alagoas”, realizado pela CUT em parceria com a Fundação Friedrich Ebert Brasil e o INESC." },
  { data: "04/2026", ano: 2026, tipo: "agenda", titulo: "Participação em missão do Conselho Nacional de Direitos Humanos (CNDH) na região do Araripe, em Pernambuco." },
  { data: "04/2026", ano: 2026, tipo: "agenda", titulo: "Entrega da Agenda Jurídica das Centrais Sindicais no STF e no TST 2026 ao Presidente Lula." },
  { data: "04/2026", ano: 2026, tipo: "cartilha", titulo: "Lançamento da cartilha “Organização sindical diante das transformações do sistema financeiro”, em parceria com a Contraf." },
  { data: "05/2026", ano: 2026, tipo: "internacional", titulo: "Transmissão comentada da sessão da Corte Internacional de Justiça sobre o direito de greve e a Convenção nº 87 da OIT." },
  { data: "05/2026", ano: 2026, tipo: "evento", titulo: "Participação no seminário “Macrossetor Indústria da CUT e Inteligência Artificial — Desafios à negociação coletiva”." },
  { data: "05/2026", ano: 2026, tipo: "internacional", titulo: "Participação na 114ª Conferência Internacional do Trabalho (CIT), integrando a delegação brasileira de assessores do grupo dos trabalhadores, pela CUT e ITUC, nos debates sobre a Convenção nº 193, sobre trabalho em aplicativos." },
  { data: "06/2026", ano: 2026, tipo: "evento", titulo: "Participação no 33º Encontro do Coletivo Nacional de Advogados de Servidores Públicos (CNASP), em São Luís." },
  { data: "06/2026", ano: 2026, tipo: "evento", titulo: "Realização do seminário “Sindicalismo na nova (des)ordem mundial”, em parceria com o Washington Brazil Office (WBO) e a Fundação Escola de Sociologia de São Paulo (FESPSP)." },
  { data: "07/2026", ano: 2026, tipo: "livro", titulo: "Participação no seminário “Riscos Psicossociais no Trabalho e a NR-01” e lançamento, em parceria com a CUT, da publicação “Riscos Psicossociais no Trabalho: Subsídios para a Ação Sindical”." },
];

export const acervoTipos: { value: MarcoTipo; label: string }[] = [
  { value: "livro", label: "Livros" },
  { value: "cartilha", label: "Cartilhas" },
  { value: "evento", label: "Seminários e eventos" },
  { value: "internacional", label: "Atuação internacional" },
  { value: "agenda", label: "Agendas e notas técnicas" },
];

export const acervoEras = [
  { label: "1981–1995", min: 1981, max: 1995 },
  { label: "1996–2012", min: 1996, max: 2012 },
  { label: "2013–2016", min: 2013, max: 2016 },
  { label: "2017–2020", min: 2017, max: 2020 },
  { label: "2021–2023", min: 2021, max: 2023 },
  { label: "2024–2026", min: 2024, max: 2026 },
];

export const acervoAnos = Array.from(new Set(acervo.map((m) => m.ano))).sort(
  (a, b) => b - a,
);
