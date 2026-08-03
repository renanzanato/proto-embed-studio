import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import areaTrabalhista from "@/assets/area-trabalhista.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/atuacao/direito-trabalhista")({
  head: () => ({
    meta: [
      { title: "Direito Trabalhista | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Consultoria preventiva e contenciosa em Direito Trabalhista: redução de riscos, conformidade legal e defesa de empresas e trabalhadores.",
      },
      { property: "og:title", content: "Direito Trabalhista | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Soluções estratégicas para empresas e trabalhadores, com excelência técnica e visão estratégica.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/atuacao/direito-trabalhista" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/atuacao/direito-trabalhista" }],
  }),
  component: DireitoTrabalhistaPage,
});

function DireitoTrabalhistaPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={areaTrabalhista}
            alt="Advogada trabalhando em notebook em escritório com luz baixa"
            width={1920}
            height={1088}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(6,0,4,0.94) 0%, rgba(6,0,4,0.86) 38%, rgba(6,0,4,0.35) 68%, rgba(6,0,4,0.15) 100%)",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-5 sm:px-6 lg:px-8">
          <SiteHeader active="Atuação" />

          <div className="relative z-10 mt-12 max-w-[620px]">
            <Link
              to="/atuacao"
              className="inline-flex items-center gap-2 text-[11px] text-white/65 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar para áreas de atuação
            </Link>

            <p className="mt-8 text-[10.5px] uppercase tracking-[0.22em] text-lbs-magenta">
              Área de atuação
            </p>
            <h1 className="mt-3 text-[38px] font-light leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[54px]">
              Direito Trabalhista
            </h1>
            <p className="mt-7 text-[17px] font-light leading-[1.4] text-lbs-magenta">
              Soluções estratégicas para empresas e trabalhadores
            </p>
            <p className="mt-6 max-w-[480px] text-[13px] leading-[1.95] text-white/70">
              Nossa área de Direito Trabalhista oferece consultoria preventiva e contenciosa, com
              foco em reduzir riscos e garantir conformidade legal. Atuamos tanto na defesa de
              empresas quanto de trabalhadores, sempre com excelência técnica e visão estratégica.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
