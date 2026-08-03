import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  FileText,
  Landmark,
  Scale,
  ShoppingCart,
  Smartphone,
  Users,
} from "lucide-react";

import heroOffice from "@/assets/hero-office.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

const areas = [
  {
    Icon: Landmark,
    title: "Direito Empresarial",
    text: "Assessoria completa para empresas, incluindo contratos, governança corporativa, fusões e aquisições.",
  },
  {
    Icon: Users,
    title: "Direito Trabalhista",
    text: "Atuação preventiva e contenciosa em questões trabalhistas e previdenciárias.",
  },
  {
    Icon: Scale,
    title: "Direito Civil",
    text: "Soluções jurídicas em contratos, responsabilidade civil e direito de família.",
  },
  {
    Icon: Smartphone,
    title: "Direito Digital",
    text: "Especialização em LGPD, proteção de dados e direito tecnológico.",
  },
  {
    Icon: ShoppingCart,
    title: "Direito do Consumidor",
    text: "Defesa dos direitos do consumidor em relações de consumo.",
  },
  {
    Icon: FileText,
    title: "Direito Tributário",
    text: "Planejamento tributário e defesa em questões fiscais.",
  },
  {
    Icon: Briefcase,
    title: "Direito Sindical",
    text: "Assessoria a entidades sindicais em negociações coletivas e dissídios.",
  },
  {
    Icon: Scale,
    title: "Direito Administrativo",
    text: "Atuação em licitações, contratos administrativos e processos junto ao poder público.",
  },
];

export const Route = createFileRoute("/atuacao")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Serviços jurídicos completos para empresas e pessoas: trabalhista, empresarial, civil, digital, consumidor, tributário e mais.",
      },
      { property: "og:title", content: "Áreas de Atuação | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Atendimento técnico e humanizado em diversas áreas do direito, com foco em resultados efetivos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/atuacao" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/atuacao" }],
  }),
  component: AtuacaoPage,
});

function AtuacaoPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroOffice}
            alt="Interior de escritório corporativo em baixa luz"
            width={1920}
            height={1088}
            className="h-full w-full object-cover opacity-55"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 80% at 15% 25%, color-mix(in oklab, var(--lbs-magenta) 30%, transparent) 0%, transparent 72%), linear-gradient(180deg, rgba(8,0,5,0.55) 0%, rgba(6,0,4,0.8) 70%, var(--lbs-ink) 100%)",
            }}
          />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-5 sm:px-6 lg:px-8">
          <SiteHeader active="Atuação" />

          <div className="relative z-10 mt-20 max-w-[760px] sm:mt-24">
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta-soft">
              Áreas de atuação
            </p>
            <h1 className="mt-4 text-[32px] font-light leading-[1.16] tracking-tight text-white sm:text-[42px] lg:text-[48px]">
              Serviços jurídicos completas
              <br className="hidden sm:block" /> para empresas e pessoas
            </h1>
            <p className="mt-6 max-w-[430px] text-[13px] leading-[1.85] text-white/70">
              Oferecemos atendimento técnico e humanizado em diversas áreas do direito, com foco
              em resultados efetivos.
            </p>
          </div>
        </div>
      </section>

      {/* GRID DE ÁREAS */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {areas.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[6px] border border-black/8 bg-[#fafafa] p-7 transition-shadow hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-lbs-magenta/12">
                  <Icon className="h-5 w-5 text-lbs-magenta" />
                </span>
                <h2 className="text-[19px] font-normal text-lbs-ink">{title}</h2>
              </div>
              <p className="mt-5 max-w-[400px] text-[12.5px] leading-[1.9] text-black/55">
                {text}
              </p>
              <a
                href="/"
                className="mt-5 inline-flex items-center gap-1.5 text-[11px] text-lbs-magenta transition-opacity hover:opacity-70"
              >
                Saiba mais
                <ArrowRight className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
