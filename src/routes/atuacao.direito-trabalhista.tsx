import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  FileText,
  Landmark,
  Scale,
  ShoppingCart,
  Smartphone,
  User,
} from "lucide-react";

import areaTrabalhista from "@/assets/area-trabalhista.jpg";
import blogEsg from "@/assets/blog-esg.jpg";
import blogHomeOffice from "@/assets/blog-homeoffice.jpg";
import blogReforma from "@/assets/blog-reforma.jpg";
import lawyerGabriela from "@/assets/lawyer-gabriela.jpg";
import lawyerGuilherme from "@/assets/lawyer-guillherme.jpg";
import lawyerLoguercio from "@/assets/lawyer-loguercio.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

const services = [
  {
    title: "Consultoria Preventiva",
    description: "Atuação proativa para prevenir conflitos e garantir compliance trabalhista",
    items: [
      "Auditoria de rotinas trabalhistas e folha de pagamento",
      "Elaboração e revisão de contratos de trabalho",
      "Políticas internas e códigos de conduta",
      "Treinamento de gestores em legislação trabalhista",
      "Due diligence trabalhista em fusões e aquisições",
      "Adequação à reforma trabalhista e legislação atualizada",
    ],
  },
  {
    title: "Contencioso Trabalhista",
    description: "Defesa estratégica em processos judiciais e administrativos",
    items: [
      "Defesa em reclamações trabalhistas individuais e coletivas",
      "Recursos em todas as instâncias",
      "Contestações e audiências",
      "Acordos judiciais estratégicos",
      "Defesa em ações civis públicas",
      "Execução e embargos à execução",
    ],
  },
  {
    title: "Relações Sindicais",
    description: "Assessoria em negociações coletivas e relacionamento sindical",
    items: [
      "Negociação de convenções e acordos coletivos",
      "Assessoria em assembleias e dissídios coletivos",
      "Gestão em processos de greve",
      "Consultoria sobre contribuições sindicais",
      "Mediação de conflitos coletivos",
      "Planejamento de estratégias sindicais",
    ],
  },
  {
    title: "Terceirização e Compliance",
    description: "Estruturação legal de relações de trabalho modernas",
    items: [
      "Estruturação de processos de terceirização",
      "Contratos de prestação de serviços",
      "Trabalho remoto e home office",
      "Compliance trabalhista e ESG",
      "Prevenção a passivos trabalhistas",
      "Gestão de riscos trabalhistas",
    ],
  },
];

const otherAreas = [
  { label: "Direito Trabalhista", to: "/atuacao/direito-trabalhista", Icon: User, active: true },
  { label: "Direito Empresarial", to: "/atuacao", Icon: Landmark },
  { label: "Direito Civil", to: "/atuacao", Icon: Scale },
  { label: "Direito Digital", to: "/atuacao", Icon: Smartphone },
  { label: "Direito do Consumidor", to: "/atuacao", Icon: ShoppingCart },
  { label: "Direito Tributário", to: "/atuacao", Icon: FileText },
];

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

      {/* NOSSOS SERVIÇOS */}
      <section className="w-full bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            <div>
              <h2 className="text-[28px] font-light leading-[1.15] tracking-tight text-lbs-ink sm:text-[36px]">
                Nossos Serviços
              </h2>
              <p className="mt-3 text-[13px] leading-[1.7] text-black/55">
                Oferecemos soluções completas e personalizadas para cada necessidade
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {services.map(({ title, description, items }) => (
                  <article
                    key={title}
                    className="rounded-[6px] border border-black/8 bg-[#fafafa] p-6 sm:p-7"
                  >
                    <h3 className="text-[18px] font-normal text-lbs-ink">{title}</h3>
                    <p className="mt-3 text-[11.5px] leading-[1.7] text-black/55">{description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[11.5px] leading-[1.6] text-black/65">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-lbs-magenta/12">
                            <Check className="h-2.5 w-2.5 text-lbs-magenta" strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <aside>
              <h3 className="text-[13px] font-medium text-lbs-ink">Outras Áreas</h3>
              <div className="mt-5 space-y-2">
                {otherAreas.map(({ label, to, Icon, active }) => (
                  <Link
                    key={label}
                    to={to}
                    className={`flex items-center gap-3 rounded-[6px] border px-4 py-3 text-[12px] transition-colors ${
                      active
                        ? "border-lbs-magenta bg-lbs-magenta text-white"
                        : "border-black/8 bg-white text-black/70 hover:border-lbs-magenta hover:text-lbs-magenta"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? "text-white" : "text-lbs-magenta"}`} />
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                to="/atuacao"
                className="mt-5 inline-flex items-center gap-1.5 text-[12px] text-lbs-magenta transition-opacity hover:opacity-70"
              >
                Ver todas
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
