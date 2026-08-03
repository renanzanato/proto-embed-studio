import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";

import equipeHero from "@/assets/equipe-hero.jpg";
import teamNilo from "@/assets/team-nilo.jpg";
import teamLoguercio from "@/assets/lawyer-loguercio.jpg";
import teamEduardo from "@/assets/team-eduardo.jpg";
import teamFernanda from "@/assets/team-fernanda.jpg";
import teamAline from "@/assets/team-aline.jpg";
import teamCarlos from "@/assets/team-carlos.jpg";
import teamDaniela from "@/assets/team-daniela.jpg";
import teamCamilla from "@/assets/team-camilla.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

const members = [
  {
    name: "Nilo Beiro",
    image: teamNilo,
    tags: ["Sindical", "Financeiro"],
    oab: "OAB/SP nº 108120 e OAB/DF nº 23405",
  },
  {
    name: "José Eymard Loguercio",
    image: teamLoguercio,
    tags: ["Trabalhista", "Tribunais Superiores"],
    oab: "OAB/DF nº 10230 e OAB/SP nº 14914",
  },
  {
    name: "Eduardo Surian Matias",
    image: teamEduardo,
    tags: ["Sindical", "Direito do Trabalho"],
    oab: "OAB/SP nº 92402 e OAB/DF nº 23400",
  },
  {
    name: "Fernanda Caldas Giorgi",
    image: teamFernanda,
    tags: ["Tributário"],
    oab: "OAB/SP nº 189318 e OAB/RS nº 47041",
  },
  {
    name: "Aline Carla Lopes Bellotti",
    image: teamAline,
    tags: ["Consumidor"],
    oab: "OAB/SP nº 325405 e OAB/DF nº 41830",
  },
  {
    name: "Carlos Fernandes Coninck Júnior",
    image: teamCarlos,
    tags: ["Civil", "Sindical"],
    oab: "OAB/DF nº 51019",
  },
  {
    name: "Daniela Costa Gerelli",
    image: teamDaniela,
    tags: ["Civil", "Família"],
    oab: "OAB/SP nº 388192 e OAB/DF nº 61769",
  },
  {
    name: "Camilla Louise Galdino Cândido",
    image: teamCamilla,
    tags: ["Civil", "Família"],
    oab: "OAB/DF nº 38404",
  },
];


export const Route = createFileRoute("/equipe/")({
  head: () => ({
    meta: [
      { title: "Nosso Time | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Conheça as advogadas e advogados da LBS: profissionais altamente qualificados, com sólida formação acadêmica e experiência prática.",
      },
      { property: "og:title", content: "Nosso Time | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Advogadas e advogados comprometidos com a excelência em diversas áreas de atuação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/equipe" }],
  }),
  component: EquipePage,
});

function EquipePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={equipeHero}
            alt="Advogado apresentando um caso para clientes em escritório"
            width={1600}
            height={760}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/78" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/55 to-white" />
        </div>

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader active="Equipe" />
          </div>

          <div className="relative z-10 mt-16 max-w-[760px] sm:mt-20">
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
              Nosso time
            </p>
            <h1 className="mt-5 text-[32px] font-light leading-[1.18] tracking-tight text-lbs-ink sm:text-[42px] lg:text-[46px]">
              Advogadas e advogados
              <br className="hidden sm:block" /> comprometidos com a excelência
            </h1>
            <p className="mt-7 max-w-[460px] text-[13px] leading-[1.85] text-lbs-ink/65">
              Nosso time é formado por profissionais altamente qualificados, com sólida formação
              acadêmica e experiência prática em suas áreas de atuação.
            </p>

            <label className="mt-10 flex w-full max-w-[340px] items-center gap-3 rounded-[4px] border border-black/12 bg-white/90 px-4 py-3">
              <Search className="h-4 w-4 shrink-0 text-lbs-ink/40" aria-hidden="true" />
              <input
                type="search"
                placeholder="Buscar por nome ou especialidade..."
                aria-label="Buscar por nome ou especialidade"
                className="w-full bg-transparent text-[12.5px] text-lbs-ink placeholder:text-lbs-ink/40 focus:outline-none"
              />
            </label>
          </div>
        </div>
      </section>

      {/* GRADE DA EQUIPE */}
      <section className="w-full bg-white pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <li key={member.name} className="flex flex-col">
                <div className="aspect-[4/5] w-full overflow-hidden bg-black/5">
                  <img
                    src={member.image}
                    alt={`Retrato de ${member.name}`}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/15 px-2 py-[3px] text-[8.5px] uppercase tracking-[0.08em] text-lbs-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-3 text-[14px] font-normal leading-snug text-lbs-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-[10px] text-lbs-magenta">Sócio</p>
                <p className="mt-1 text-[9px] leading-[1.6] text-lbs-ink/50">{member.oab}</p>

                <a
                  href="/equipe"
                  className="mt-4 flex items-center justify-center bg-lbs-magenta px-4 py-2.5 text-[10px] text-white transition-opacity hover:opacity-85"
                >
                  Ver perfil completo
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

