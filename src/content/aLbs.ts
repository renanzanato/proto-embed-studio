export type Office = {
  city: string;
  addressLines: string[];
  cep: string;
  phone: string;
  email: string;
  photoPlaceholder: string;
  mapUrl: string;
};

export type NumberItem = {
  figure?: string;
  text: string;
};

export const aLbsContent = {
  meta: {
    title: "A LBS | LBS Advogadas e Advogados",
    description:
      "Para quem trabalha, direitos; para direitos, LBS.",
  },
  hero: {
    title: "A LBS",
    statement: "Para quem trabalha, direitos; para direitos, LBS.",
  },
  origem: {
    label: "Nossa origem",
    paragraphs: [
      "Com trajetória vinculada ao movimento sindical e ao Direito do Trabalho, a LBS Advogadas e Advogados traz em sua sigla a história e o compromisso de seus sócios fundadores: Loguercio, Beiro e Surian. São quatro décadas dedicadas à construção de soluções jurídicas de alto impacto na defesa de quem trabalha e dos direitos humanos.",
      "Nossa identidade se consolida na atuação diária e na presença marcante nas mais diversas instâncias do Poder Judiciário. Essa bagagem prática e a experiência acumulada ao longo dos anos fundamentam nossa condução técnica, integrada e estratégica para cada caso sob nossa responsabilidade.",
    ],
    photoPlaceholder: "FOTO REAL — SÓCIOS FUNDADORES / ARQUIVO DO ESCRITÓRIO",
  },
  quemSomos: {
    label: "Quem Somos",
    paragraphs: [
      "Nossa atuação é pautada pela prática e pelo rigor técnico na defesa de quem trabalha e dos direitos humanos.",
      "Trabalhamos ao lado de bancários, servidores públicos, professores, enfermeiros, comerciários, papeleiros, dentre outros trabalhadores. Entendemos que, independentemente da natureza do vínculo, seja CLT, contratação autônoma, pejotização ou trabalho por plataformas, o direito a uma representação jurídica qualificada permanece inegociável.",
      "A defesa do trabalho decente, da dignidade humana e da democracia integra a missão do escritório e orienta nossa prática. São mais de 40 anos de experiência, defendendo um só lado.",
      "As normas, as negociações e o próprio direito estão em constante transformação; nós nos mantemos firmes na defesa das pessoas que trabalham. Participamos ativamente do debate público sobre os novos modelos de contratação, da construção das teses que percorrem o Poder Judiciário e da interlocução com o Poder Legislativo e com o Poder Executivo, na elaboração de normas protetivas e no enfrentamento das propostas de redução de direitos.",
      "Com três sedes e presença permanente em todas as instâncias do Judiciário, a LBS se consolida também como ambiente formador, comprometido com o desenvolvimento de carreiras de longo prazo.",
      "Mantemos atuação internacional, em contato com a formação doutrinária de vanguarda de universidades da Espanha e participamos das discussões em organismos internacionais, como a Organização Internacional do Trabalho.",
    ],
  },
  missao: {
    title: "Missão",
    paragraph:
      "Lutar em defesa do cliente, do trabalho decente, da dignidade da pessoa, da valorização da democracia e de uma sociedade mais justa, atuando de forma ética e com qualidade técnica. Nosso fortalecimento está no permanente respeito ao direito e na vitória do cliente.",
    linkLabel: "Leia nosso Manifesto",
    linkUrl: "https://lbs.adv.br/wp-content/uploads/2022/05/Manifeso-LBS.pdf",
  },
  numeros: {
    label: "Nossos números",
    items: [
      { figure: "+40", text: "Mais de 40 anos de atuação no Direito do Trabalho" },
      { figure: "+60", text: "Mais de 60 advogadas e advogados" },
      { figure: "3", text: "3 unidades: São Paulo, Campinas e Brasília" },
      { figure: "+80", text: "Parcerias nacionais com mais de 80 escritórios" },
    ] satisfies NumberItem[],
    fullWidth: { text: "Atuação em todas as instâncias do Judiciário" },
  },
  historia: {
    label: "Nossa história",
    year: "1981",
    text: "São quatro décadas dedicadas à construção de soluções jurídicas de alto impacto na defesa de quem trabalha e dos direitos humanos.",
    ctaLabel: "Ver nossa história",
    ctaTo: "/nossa-historia",
  },
  unidades: {
    label: "Unidades",
    title: "Três sedes, atuação em todo o país",
    scheduleLabel: "Agende um horário",
    mapLabel: "Ver no mapa",
    offices: [
      {
        city: "Brasília",
        addressLines: [
          "Edifício Íon - SGAN 601 Lote H, Salas 79 a 86",
          "Piso Alfa 1 - Térreo – Asa Norte",
        ],
        cep: "CEP: 70830-010",
        phone: "(61) 3366-8100",
        email: "brasilia@lbs.adv.br",
        photoPlaceholder: "FOTO REAL — FACHADA/ESCRITÓRIO BRASÍLIA",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=SGAN+601+Lote+H+Asa+Norte+Bras%C3%ADlia",
      },
      {
        city: "Campinas",
        addressLines: [
          "Espaço Toulouse - Rua Doutor Emílio Ribas, 188",
          "3º andar – Cambuí",
        ],
        cep: "CEP: 13025-140",
        phone: "(19) 3399-7700",
        email: "campinas@lbs.adv.br",
        photoPlaceholder: "FOTO REAL — FACHADA/ESCRITÓRIO CAMPINAS",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Em%C3%ADlio+Ribas+188+Cambu%C3%AD+Campinas",
      },
      {
        city: "São Paulo",
        addressLines: [
          "Edifício Philadelphia - Avenida Angélica, 1996",
          "CJ 201 – Higienópolis",
        ],
        cep: "CEP: 01228-200",
        phone: "(11) 3583-8030",
        email: "sp@lbs.adv.br",
        photoPlaceholder: "FOTO REAL — FACHADA/ESCRITÓRIO SÃO PAULO",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Avenida+Ang%C3%A9lica+1996+Higien%C3%B3polis+S%C3%A3o+Paulo",
      },
    ] satisfies Office[],
  },
};
