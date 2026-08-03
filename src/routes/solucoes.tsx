import { createFileRoute } from "@tanstack/react-router";

import solucoesHero from "@/assets/solucoes-hero.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/solucoes")({
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

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
