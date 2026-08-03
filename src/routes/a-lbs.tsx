import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/a-lbs-hero.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

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
      <section className="relative isolate w-full overflow-hidden">
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

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
