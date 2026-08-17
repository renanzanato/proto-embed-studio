import { createFileRoute, Link } from "@tanstack/react-router";

import solucoesHero from "@/assets/solucoes-hero.jpg";
import solDefesa from "@/assets/sol-defesa.jpg";
import solLitigios from "@/assets/sol-litigios.jpg";
import solTribunais from "@/assets/sol-tribunais.jpg";
import solExecucoes from "@/assets/sol-execucoes.jpg";
import solParcerias from "@/assets/sol-parcerias.jpg";
import solEmergentes from "@/assets/sol-emergentes.jpg";
import solAdmPublica from "@/assets/sol-adm-publica.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

const solucoes = [
  {
    img: solDefesa,
    title: "Defesa da pessoa que trabalha",
    to: "/solucoes/defesa-da-pessoa-que-trabalha",
    text: "Atuamos de forma contínua na defesa jurídica da pessoa que trabalha, considerando as múltiplas formas contemporâneas de vínculo laboral e proteção social.",
  },
  {
    img: solAdmPublica,
    title: "Vínculos com a Administração Pública",
    to: "/solucoes/vinculos-com-a-administracao-publica",
    text: "Atuação especializada para servidoras e servidores públicos, empregados de estatais, temporários, terceirizados e bolsistas em suas relações com o poder público.",
  },
  {
    img: solLitigios,
    title: "Litígios coletivos estruturados",
    to: "/solucoes/litigios-coletivos",
    text: "Estruturamos e conduzimos litígios coletivos de grande escala, voltados à correção de violações sistemáticas de direitos e à produção de impacto institucional.",
  },
  {
    img: solTribunais,
    title: "Tribunais Superiores",
    to: "/solucoes/tribunais-superiores",
    text: "Condução dos processos que tramitam no TST, STJ e STF, com sustentações orais, memoriais, diligências em gabinetes e atuação estratégica em repercussão geral.",
  },
  {
    img: solExecucoes,
    title: "Execuções complexas",
    to: "/solucoes/execucoes-complexas",
    text: "Atuamos em execuções de elevada complexidade jurídica, quando o caso exige leitura sistêmica, cálculos técnicos e segurança institucional.",
  },
  {
    img: solParcerias,
    title: "Parceiros estratégicos",
    to: "/solucoes/parceiros-estrategicos",
    text: "Atuamos em colaboração com outros escritórios quando a complexidade do caso exige estrutura, densidade técnica e capacidade operacional superiores.",
  },
  {
    img: solEmergentes,
    title: "Temas emergentes",
    to: "/solucoes/temas-emergentes",
    text: "Atuamos em litígios estratégicos relacionados a conflitos jurídicos emergentes, ainda em processo de consolidação normativa e jurisprudencial.",
  },
];



export const Route = createFileRoute("/solucoes/")({
  head: () => ({
    meta: [
      { title: "Soluções | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Soluções jurídicas completas para empresas e pessoas, com atendimento técnico e humanizado em diversas áreas do direito.",
      },
      { property: "og:title", content: "Soluções | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Atendimento técnico e humanizado em diversas áreas do direito, com foco em resultados efetivos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solucoes" }],
  }),
  component: SolucoesPage,
});

function SolucoesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={solucoesHero}
            alt="Formas abstratas em tons de cinza"
            width={1920}
            height={912}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white" />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8">
          <div className="rounded-[14px] bg-black/45">
            <SiteHeader active="Atuação" />
          </div>

          <div className="relative z-10 mt-16 max-w-[760px] sm:mt-20">
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
              Soluções
            </p>
            <h1 className="mt-5 text-[32px] font-light leading-[1.18] tracking-tight text-lbs-ink sm:text-[42px] lg:text-[48px]">
              Soluções jurídicas completas
              <br className="hidden sm:block" /> para empresas e pessoas
            </h1>
            <p className="mt-7 max-w-[430px] text-[13px] leading-[1.85] text-lbs-ink/65">
              Oferecemos atendimento técnico e humanizado em diversas áreas do direito, com foco
              em resultados efetivos.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES — LISTA */}
      <section className="w-full bg-[#f5f5f5] pb-20 pt-4 sm:pb-24">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-5 px-4 sm:px-6 lg:px-8">
          {solucoes.map((item, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <article
                key={item.title}
                className="grid items-center gap-6 rounded-[6px] border border-black/8 bg-white p-5 sm:p-6 lg:grid-cols-2 lg:gap-10"
              >
                <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={1200}
                    height={760}
                    className="h-[190px] w-full rounded-[3px] object-cover sm:h-[230px]"
                  />
                </div>

                <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                  <h2 className="text-[19px] font-normal leading-[1.35] text-lbs-ink sm:text-[21px]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-[440px] text-[12.5px] leading-[1.8] text-lbs-ink/60">
                    {item.text}
                  </p>
                  <span className="mt-5 inline-block cursor-pointer text-[11.5px] text-lbs-magenta transition-opacity hover:opacity-70">
                    Saiba mais →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />

    </div>
  );
}
