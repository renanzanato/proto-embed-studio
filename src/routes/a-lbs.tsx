import { createFileRoute } from "@tanstack/react-router";
import { ChevronsRight } from "lucide-react";

import heroImage from "@/assets/a-lbs-hero.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { LbsTimeline } from "@/components/site/LbsTimeline";

const numbers = [
  { value: "+40", label: "anos de atuação no Direito do Trabalho" },
  { value: "+60", label: "advogadas e advogados" },
  { value: "3", label: "unidades: São Paulo, Campinas e Brasília" },
  { value: "+80", label: "escritórios parceiros em todo o país" },
  { value: "100%", label: "presença em todas as instâncias do Judiciário" },
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
      <section className="relative isolate flex min-h-[600px] w-full items-end overflow-hidden sm:min-h-[700px]">
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
          className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--lbs-magenta) 0%, transparent 70%)" }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-28 pt-5 sm:px-6 sm:pb-36 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader active="A LBS" />
          </div>

          <div className="relative z-10 mt-20 max-w-[780px] sm:mt-28 lg:mt-32">
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">A LBS</p>
            <h1 className="mt-5 text-[34px] font-light leading-[1.15] tracking-tight text-white sm:text-[46px] lg:text-[54px]">
              Excelência jurídica
              <br /> com propósito
            </h1>
            <p className="mt-7 max-w-[520px] text-[14px] leading-[1.85] text-white/65">
              Somos um escritório dedicado ao Direito do Trabalho e às relações empresariais. Atuamos
              com excelência técnica, proximidade e coragem para defender causas que transformam
              pessoas e organizações.
            </p>
          </div>
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

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
