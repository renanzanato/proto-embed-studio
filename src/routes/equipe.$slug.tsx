import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Mail, Phone, Smartphone, Store } from "lucide-react";

import blogEsg from "@/assets/blog-esg.jpg";
import blogHomeOffice from "@/assets/blog-homeoffice.jpg";
import blogReforma from "@/assets/blog-reforma.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { getTeamMember } from "@/data/equipe";

const publications = [
  {
    image: blogReforma,
    tag: "Análise",
    date: "14 de nov. de 2025",
    title: "Reforma Trabalhista: 5 Anos de Mudanças e Impactos",
    description:
      "Análise das principais alterações da Reforma Trabalhista de 2017 e seus efeitos práticos nas relações de trabalho no Brasil.",
  },
  {
    image: blogHomeOffice,
    tag: "Guia Prático",
    date: "07 de out. de 2025",
    title: "Home Office e Trabalho Híbrido: Aspectos Jurídicos",
    description:
      "Como estruturar políticas de trabalho remoto em conformidade com a legislação trabalhista e evitar passivos futuros.",
  },
  {
    image: blogEsg,
    tag: "Tendências",
    date: "21 de set. de 2025",
    title: "Compliance Trabalhista na Era ESG",
    description:
      "A importância da conformidade trabalhista nos critérios ambientais, sociais e de governança corporativa.",
  },
];

export const Route = createFileRoute("/equipe/$slug")({
  loader: ({ params }) => {
    const member = getTeamMember(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Perfil não encontrado | LBS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { member } = loaderData;
    return {
      meta: [
        { title: `${member.name} | LBS Advogadas e Advogados` },
        { name: "description", content: member.about.slice(0, 155) },
        { property: "og:title", content: `${member.name} | LBS Advogadas e Advogados` },
        { property: "og:description", content: member.about.slice(0, 155) },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/equipe/${member.slug}` }],
    };
  },
  component: AdvogadoPage,
});

function AdvogadoPage() {
  const { member } = Route.useLoaderData();

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="relative isolate w-full overflow-hidden">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[420px]"
          style={{
            background:
              "radial-gradient(120% 100% at 15% 0%, color-mix(in oklab, var(--lbs-magenta) 12%, transparent) 0%, transparent 62%)",
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-black/45">
            <SiteHeader active="Equipe" />
          </div>

          <Link
            to="/equipe"
            className="mt-8 inline-flex items-center gap-2 text-[11px] text-lbs-ink/55 transition-colors hover:text-lbs-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar para a equipe
          </Link>

          <div className="mt-6 grid gap-10 pb-16 lg:grid-cols-[300px_1fr] lg:gap-14">
            {/* COLUNA ESQUERDA */}
            <div>
              <div
                className="aspect-[4/5] w-full overflow-hidden bg-black/5"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)" }}
              >
                <img
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  width={640}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-7 border border-black/10 bg-[#f7f7f7] p-5">
                <h2 className="text-[14px] font-normal text-lbs-ink">Especialidade</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="border border-black/15 bg-white px-2.5 py-[4px] text-[9px] text-lbs-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 border border-black/10 bg-[#f7f7f7] p-5">
                <h2 className="text-[14px] font-normal text-lbs-ink">Contato</h2>
                <ul className="mt-4 space-y-3 text-[10.5px] text-lbs-ink/70">
                  <li className="flex items-center gap-2.5">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-lbs-magenta" />
                    {member.phones[0]}
                  </li>
                  {member.phones[1] ? (
                    <li className="flex items-center gap-2.5">
                      <Smartphone className="h-3.5 w-3.5 shrink-0 text-lbs-magenta" />
                      {member.phones[1]}
                    </li>
                  ) : null}
                  <li className="flex items-center gap-2.5">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-lbs-magenta" />
                    {member.email}
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUNA DIREITA */}
            <div>
              <h1 className="text-[30px] font-light leading-[1.15] tracking-tight text-lbs-ink sm:text-[38px]">
                {member.name}
              </h1>
              <p className="mt-4 text-[12px] text-lbs-magenta">{member.role}</p>
              <p className="mt-3 text-[11px] text-lbs-ink/60">{member.city}</p>
              <p className="mt-2 text-[10px] text-lbs-ink/45">{member.oab}</p>

              <div className="mt-9 border-l-2 border-lbs-magenta pl-5">
                <h2 className="flex items-center gap-2.5 text-[14px] font-normal text-lbs-ink">
                  <Store className="h-4 w-4 text-lbs-magenta" />
                  Sobre
                </h2>
                <p className="mt-4 max-w-[620px] text-[11.5px] leading-[2] text-lbs-ink/60">
                  {member.about}
                </p>
              </div>

              <h2 className="mt-14 text-[26px] font-light leading-tight tracking-tight text-lbs-ink sm:text-[30px]">
                Publicações Relacionadas
              </h2>
              <p className="mt-4 text-[10.5px] text-lbs-ink/50">
                Artigos e insights do nosso blog sobre Direito Trabalhista
              </p>

              <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {publications.map((post) => (
                  <li key={post.title} className="flex flex-col border border-black/10 bg-white">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-black/5">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        width={640}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="bg-lbs-magenta/12 px-2 py-[3px] text-[8px] uppercase tracking-[0.1em] text-lbs-magenta">
                          {post.tag}
                        </span>
                        <span className="flex items-center gap-1.5 text-[8.5px] text-lbs-ink/45">
                          <CalendarDays className="h-3 w-3" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="mt-3 text-[13px] font-normal leading-snug text-lbs-ink">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-[9.5px] leading-[1.9] text-lbs-ink/55">
                        {post.description}
                      </p>
                      <a
                        href="/"
                        className="mt-5 inline-flex items-center gap-1.5 text-[9.5px] text-lbs-magenta transition-opacity hover:opacity-75"
                      >
                        Leia mais
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
