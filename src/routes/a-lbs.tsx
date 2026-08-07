import { createFileRoute } from "@tanstack/react-router";
import { ChevronsRight } from "lucide-react";

import heroImage from "@/assets/a-lbs-hero.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { LbsTimeline } from "@/components/site/LbsTimeline";
import { TypewriterHeadline } from "@/components/site/TypewriterHeadline";

const numbers = [
  { value: "+40", label: "anos de atuação no Direito do Trabalho" },
  { value: "+60", label: "advogadas e advogados" },
  { value: "3", label: "unidades: São Paulo, Campinas e Brasília" },
  { value: "+80", label: "parcerias nacionais com escritórios em todo o país" },
  { value: "100%", label: "atuação em todas as instâncias do Judiciário" },
];

const offices = [
  {
    city: "São Paulo",
    address:
      "Edifício Philadelphia – Avenida Angélica, 1996, Cj 201 – Higienópolis, CEP: 01228-200",
    phone: "(11) 3583-8030",
  },
  {
    city: "Campinas",
    address:
      "Espaço Toulouse – Rua Doutor Emílio Ribas, 188, 3º andar – Cambuí, CEP: 13025-140",
    phone: "(19) 3395-7700",
  },
  {
    city: "Brasília",
    address:
      "Edifício Ion – SGAN 601 Lote H, Salas 79 a 86, Piso Alta 1 – Térreo – Asa Norte, CEP: 70830-010",
    phone: "(61) 3396-8100",
  },
];


const values = [
  {
    title: "Pessoas",
    description: "Desafiamos as pessoas a irem além, investindo no crescimento de cada profissional.",
  },
  {
    title: "Cliente",
    description: "Fazemos o melhor para o cliente, com foco total na entrega de resultados e valor.",
  },
  {
    title: "Ética",
    description: "Fazemos o que é certo. A integridade é o fundamento de cada relação e decisão.",
  },
  {
    title: "Inovação",
    description: "Inovamos para fazer a diferença, aproximando o direito das novas realidades.",
  },
  {
    title: "Orgulho",
    description: "Cuidamos da LBS diariamente, preservando nossa cultura e reputação.",
  },
];

export const Route = createFileRoute("/a-lbs")({
  head: () => ({
    meta: [
      { title: "A LBS | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Conheça a LBS Advogadas e Advogados: excelência técnica, relação de proximidade e compromisso com a transformação do Direito do Trabalho.",
      },
      { property: "og:title", content: "A LBS | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Excelência técnica, relação de proximidade e compromisso com a transformação do Direito do Trabalho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/a-lbs" }],
  }),
  component: ALbsPage,
});

function ALbsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-[420px] w-full flex-col overflow-hidden sm:min-h-[460px] lg:min-h-[500px]">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Escritório moderno da LBS Advogadas e Advogados"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-lbs-ink/78" />
          <div className="absolute inset-0 bg-gradient-to-b from-lbs-ink/40 via-lbs-ink/70 to-lbs-ink" />
        </div>

        {/* magenta glow */}
        <div
          className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[320px] w-[320px] -translate-y-1/2 rounded-full opacity-25 blur-[100px] sm:h-[380px] sm:w-[380px]"
          style={{ background: "radial-gradient(circle, var(--lbs-magenta) 0%, transparent 70%)" }}
        />

        {/* Header */}
        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader active="A LBS" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto mt-auto w-full max-w-[1200px] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
          <div className="max-w-[800px]">
            <h1
              aria-label="Para quem trabalha, direitos; para direitos, LBS."
              className="text-[28px] font-light leading-[1.12] tracking-tight text-white sm:text-[38px] lg:text-[44px]"
            >
              <span className="sr-only">
                Para quem trabalha, direitos; para direitos, LBS.
              </span>
              <span aria-hidden="true">
                Para quem trabalha, direitos;
                <br />
                <TypewriterHeadline
                  segments={[
                    { text: "para direitos, " },
                    { text: "LBS.", className: "text-lbs-magenta" },
                  ]}
                  speed={40}
                  startDelay={0}
                  segmentPause={120}
                  cursor={false}
                />
              </span>
            </h1>
            <p className="mt-8 max-w-[460px] text-[13px] leading-[1.8] text-white/65 sm:mt-10">
              Nossa atuação é pautada pela prática e pelo rigor técnico na defesa de quem trabalha e
              dos direitos humanos. São mais de 40 anos de experiência, defendendo um só lado.
            </p>
          </div>
        </div>
      </section>

      {/* NOSSA ORIGEM */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
            Nossa origem
          </p>
          <h2 className="mt-4 text-[24px] font-normal leading-[1.3] text-lbs-ink sm:text-[28px]">
            Loguercio, Beiro e Surian
          </h2>
          <p className="mt-6 max-w-[800px] text-[13px] leading-[1.9] text-lbs-ink/70">
            Com trajetória vinculada ao movimento sindical e ao Direito do Trabalho, a LBS
            Advogadas e Advogados traz em sua sigla a história e o compromisso de seus sócios
            fundadores: Loguercio, Beiro e Surian. São quatro décadas dedicadas à construção de
            soluções jurídicas de alto impacto na defesa de quem trabalha e dos direitos
            humanos.
          </p>
          <p className="mt-5 max-w-[800px] text-[13px] leading-[1.9] text-lbs-ink/70">
            Nossa identidade se consolida na atuação diária e na presença marcante nas mais
            diversas instâncias do Poder Judiciário. Essa bagagem prática e a experiência
            acumulada ao longo dos anos fundamentam nossa condução técnica, integrada e
            estratégica para cada caso sob nossa responsabilidade.
          </p>
        </div>
      </section>

      {/* NOSSOS NÚMEROS */}
      <section className="w-full bg-lbs-magenta py-14 sm:py-16">
        <div className="mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/75">Nossos números</p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {numbers.map((item) => (
              <li key={item.label} className="border-t border-white/30 pt-5">
                <p className="text-[34px] font-light leading-none text-white sm:text-[40px]">
                  {item.value}
                </p>
                <p className="mt-3 text-[12px] leading-[1.7] text-white/85">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>



      {/* PROPÓSITO */}
      <section className="w-full bg-lbs-ink">
        <div className="mx-auto flex w-full max-w-[1200px] items-center gap-5 px-4 py-10 sm:px-6 sm:py-12 lg:gap-7 lg:px-8 lg:py-14">
          <ChevronsRight className="h-8 w-8 shrink-0 text-lbs-magenta sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
          <p className="text-[13px] font-medium uppercase leading-[1.5] tracking-[0.04em] text-white sm:text-[15px] lg:text-[16px]">
            Nosso{" "}
            <span className="text-lbs-magenta">propósito</span>{" "}
            é desenvolver inteligência jurídica para viabilizar negócios que transformam realidades.
          </p>
        </div>
      </section>

      <div className="h-[6px] w-full bg-lbs-magenta" />

      {/* VALORES */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-14">
            <h2 className="text-[24px] font-medium uppercase leading-[1.2] tracking-[0.02em] text-lbs-ink sm:text-[28px] lg:text-[30px]">
              Conheça e vivencie
              <br />
              nossos valores
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`border-t border-lbs-ink/10 pt-5 ${
                    index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <h3 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-lbs-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[12px] leading-[1.7] text-lbs-ink/60">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LbsTimeline />

      {/* UNIDADES */}
      <section className="w-full bg-lbs-ink py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">Unidades</p>
          <h2 className="mt-4 max-w-[560px] text-[24px] font-light leading-[1.25] text-white sm:text-[30px]">
            Três sedes, atuação em todo o país
          </h2>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <li key={office.city} className="border-t border-white/15 pt-5">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white">
                  {office.city}
                </h3>
                <p className="mt-3 text-[12px] leading-[1.8] text-white/60">{office.address}</p>
                <a
                  href={`tel:${office.phone.replace(/\D/g, "")}`}
                  className="mt-4 inline-block text-[12px] text-lbs-magenta transition-opacity hover:opacity-70"
                >
                  {office.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>





      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
