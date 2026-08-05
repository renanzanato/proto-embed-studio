import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Mail, Send } from "lucide-react";

import heroOffice from "@/assets/hero-office.jpg";
import solucoesMetal from "@/assets/solucoes-metal.jpg";
import atuacaoOffice from "@/assets/atuacao-office.jpg";
import teamLoguercio from "@/assets/team-loguercio.jpg.asset.json";
import teamNilo from "@/assets/team-nilo.jpg.asset.json";
import teamEduardo from "@/assets/team-eduardo.jpg.asset.json";
import newsHeroAsset from "@/assets/news-hero-cit.png.asset.json";
const newsHero = newsHeroAsset.url;
import news1Asset from "@/assets/imagem-homepage-artigos-noticias-2-lbs-2.png.asset.json";
const news1 = news1Asset.url;
import news2Asset from "@/assets/imagem-homepage-artigos-noticias-3-lbs.png.asset.json";
const news2 = news2Asset.url;
import news3Asset from "@/assets/imagem-homepage-artigos-noticias-4-lbs.png.asset.json";
const news3 = news3Asset.url;
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";

const articles = [
  {
    tag: "Mercado financeiro",
    date: "15 de jul. de 2025",
    title: "(A)gente do sistema financeiro - Agosto",
    excerpt:
      "Trabalhadores e trabalhadoras da indústria financeira: o cenário segue em mudança acelerada…",
    image: news1,
  },
  {
    tag: "Sindical",
    date: "08 de out. de 2025",
    title: "Acordo entre MPT e Poupex garante R$ 2,1 milhões em indenização",
    excerpt:
      "O Ministério Público do Trabalho do Distrito Federal (MPT-DF) e a Poupex firmaram…",
    image: news2,
  },
  {
    tag: "Trabalhista",
    date: "08 de nov. de 2025",
    title: "TST define que sindicatos de trabalhadores podem ajuizar dissídio",
    excerpt: "O Pleno do Tribunal Superior do Trabalho julgou, na tarde de ontem, o incidente…",
    image: news3,
  },
];

const team = [
  {
    name: "José Eymard Loguercio",
    role: "Sócio",
    oab: "OAB/SP nº 113250 e OAB/DF nº 1441-A",
    photo: teamLoguercio.url,
  },
  {
    name: "Nilo Beiro",
    role: "Sócio",
    oab: "OAB/SP nº 108720 e OAB/DF nº 23405",
    photo: teamNilo.url,
  },
  {
    name: "Eduardo Surian Matias",
    role: "Sócio",
    oab: "OAB/SP nº 93422 e OAB/DF nº 23.400",
    photo: teamEduardo.url,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LBS Advogadas e Advogados | Defendemos quem trabalha" },
      {
        name: "description",
        content:
          "LBS Advogadas e Advogados: defesa de quem trabalha e estruturação de causas que transformam. Conheça nossas soluções e áreas de atuação.",
      },
      { property: "og:title", content: "LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Defendemos quem trabalha. Estruturamos causas que transformam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});


function Index() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-lbs-ink">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        {/* background photo + magenta wash */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroOffice}
            alt="Interior de escritório corporativo em baixa luz"
            width={1920}
            height={1088}
            className="h-full w-full object-cover opacity-60"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 75% at 12% 30%, color-mix(in oklab, var(--lbs-magenta) 34%, transparent) 0%, transparent 72%), radial-gradient(60% 60% at 92% 78%, color-mix(in oklab, var(--lbs-magenta) 20%, transparent) 0%, transparent 70%), linear-gradient(180deg, rgba(10,0,6,0.5) 0%, rgba(6,0,4,0.8) 60%, var(--lbs-ink) 100%)",
            }}
          />
        </div>

        {/* organic black blob behind the headline */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[26%] top-[3%] -z-[5] h-[52%] w-[52%] bg-lbs-ink blur-[3px]"
          style={{
            borderRadius: "44% 40% 46% 52% / 48% 44% 50% 46%",
          }}
        />

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-5 sm:px-6 lg:px-8">
          <SiteHeader active="Início" />

          {/* HEADLINE */}
          <h1 className="relative z-10 mx-auto mt-[130px] max-w-[820px] text-center text-[34px] font-light leading-[1.18] tracking-tight text-white sm:mt-[150px] sm:text-[44px] lg:text-[52px]">
            Defendemos quem trabalha.
            <br />
            Estruturamos causas que transformam
          </h1>

          {/* NEWSLETTER PILL */}
          <div className="relative z-10 mx-auto mt-[120px] flex w-full max-w-[420px] items-center gap-4 rounded-[14px] bg-lbs-magenta p-3 sm:mt-[150px]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/25">
              <Mail className="h-5 w-5 text-white" />
            </span>
            <p className="text-[15px] font-medium leading-[1.25] text-white">
              Fique por dentro
              <br />
              das novidades
            </p>
            <button
              type="button"
              className="ml-auto flex shrink-0 items-center gap-2 rounded-[9px] bg-lbs-magenta-deep px-3.5 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Assinar newsletter
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SPLIT BAND */}
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[420px]">
        <img
          src={atuacaoOffice}
          alt="Escritório corporativo em preto e branco"
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-lbs-ink/45" />
        <div
          className="absolute inset-y-0 left-0 w-[62%]"
          style={{ clipPath: "polygon(0 0, 100% 0, 62% 100%, 0 100%)" }}
        >
          <img
            src={solucoesMetal}
            alt="Painéis curvos de metal escovado em preto e branco"
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-lbs-ink/35" />
        </div>
        <div className="relative grid h-full w-full grid-cols-2 items-end pb-14">
          <h2 className="text-center text-[20px] font-light text-white sm:text-[22px]">Soluções</h2>
          <h2 className="text-center text-[20px] font-light text-white sm:text-[22px]">
            Áreas de Atuação
          </h2>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[900px] px-6 py-16 text-center sm:py-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">Quem somos</p>
          <h2 className="mx-auto mt-5 max-w-[760px] text-[22px] font-normal leading-[1.35] text-lbs-ink sm:text-[27px]">
            Da atuação individual ao litígio coletivo estratégico, conduzimos conflitos complexos
            com impacto social
          </h2>
          <p className="mx-auto mt-5 max-w-[620px] text-[12px] leading-[1.7] text-lbs-ink/70 sm:text-[13px]">
            Com experiência consolidada e compromisso com a excelência, dialogamos com o presente e
            o futuro do direito.
          </p>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="w-full bg-lbs-ink">
        <div className="mx-auto w-full max-w-[1100px] px-6 py-16 sm:py-20">
          <h2 className="text-center text-[24px] font-light leading-[1.35] text-white sm:text-[30px]">
            Nossa equipe está apta a prestar excelente
            <br />
            <span className="text-lbs-magenta-soft">atendimento aos clientes</span>
          </h2>

          <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name} className="flex flex-col">
                <img
                  src={member.photo}
                  alt={`Retrato de ${member.name}`}
                  loading="lazy"
                  width={640}
                  height={760}
                  className="h-[300px] w-full object-cover object-[center_18%] sm:h-[360px]"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 88px) 0, 100% 88px, 100% 100%, 88px 100%, 0 calc(100% - 88px))",
                  }}
                />
                <div className="mt-2.5 border border-white/12 bg-white/[0.04] px-6 py-5">
                  <p className="text-[15px] font-light text-white">{member.name}</p>
                  <p className="mt-2 text-[12px] text-lbs-magenta">{member.role}</p>
                  <p className="mt-3 text-[11px] text-white/60">{member.oab}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-11 flex justify-center">
            <a
              href="/equipe"
              className="rounded-[6px] border border-lbs-magenta px-8 py-3.5 text-[13px] text-lbs-magenta transition-colors hover:bg-lbs-magenta hover:text-white"
            >
              Conheça toda a equipe
            </a>
          </div>

        </div>
      </section>

      {/* ARTIGOS E NOTÍCIAS */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1100px] px-6 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col">
              <p className="text-[10px] uppercase tracking-[0.22em] text-lbs-magenta">Conteúdo</p>
              <h2 className="mt-4 text-[26px] font-normal text-lbs-ink sm:text-[32px]">
                Artigos e Notícias
              </h2>
              <article className="mt-8 flex flex-1 flex-col justify-center bg-lbs-magenta p-7">
                <h3 className="max-w-[320px] text-[19px] font-normal leading-[1.3] text-white sm:text-[21px]">
                  113ª Conferência Internacional do Trabalho
                </h3>
                <p className="mt-3 max-w-[360px] text-[11px] leading-[1.65] text-white/85">
                  Anualmente, realiza-se em Genebra, a Conferência Internacional do Trabalho (CIT),
                  instância deliberativa da OIT e maior…
                </p>
                <a
                  href="/"
                  className="mt-6 inline-flex w-fit items-center gap-2 border border-white/70 px-5 py-2.5 text-[11px] text-white transition-colors hover:bg-white hover:text-lbs-magenta"
                >
                  Assista na íntegra <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </div>

            <img
              src={newsHero}
              alt="Representantes da LBS na Conferência Internacional do Trabalho"
              loading="lazy"
              width={900}
              height={620}
              className="h-full min-h-[280px] w-full object-cover"
            />
          </div>

          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.title} className="flex flex-col border border-lbs-ink/10">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  width={640}
                  height={520}
                  className="h-[150px] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="bg-lbs-magenta/12 px-2 py-1 text-[8px] uppercase tracking-[0.14em] text-lbs-magenta">
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-[9px] text-lbs-ink/50">
                      <CalendarDays className="h-3 w-3" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-4 text-[13px] font-medium leading-[1.45] text-lbs-ink">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[10px] leading-[1.6] text-lbs-ink/60">
                    {article.excerpt}
                  </p>
                  <a
                    href="/"
                    className="mt-5 text-[10px] text-lbs-magenta transition-opacity hover:opacity-70"
                  >
                    Leia mais →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INSTITUTO LAVORO */}
      <section
        className="w-full py-14"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.72 0.18 55) 0%, oklch(0.62 0.24 348) 45%, oklch(0.55 0.2 300) 70%, oklch(0.6 0.16 250) 100%)",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 100 100" className="h-20 w-20 shrink-0 text-white" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray="215 24"
                transform="rotate(-25 50 50)"
              />
              <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                {[0, 60, 120].map((a) => (
                  <line
                    key={a}
                    x1="50"
                    y1="30"
                    x2="50"
                    y2="70"
                    transform={`rotate(${a} 50 50)`}
                  />
                ))}
                {[0, 60, 120, 180, 240, 300].map((a) => (
                  <g key={`b-${a}`} transform={`rotate(${a} 50 50)`}>
                    <line x1="50" y1="34" x2="55" y2="39" />
                    <line x1="50" y1="34" x2="45" y2="39" />
                  </g>
                ))}
              </g>
              <circle cx="50" cy="50" r="3.4" fill="currentColor" />
            </svg>
            <span className="text-[26px] font-light leading-[1.05] tracking-[0.02em] text-white">
              INSTITUTO
              <br />
              <strong className="font-semibold">LAVORO</strong>
            </span>
          </div>

          <div className="max-w-md">
            <p className="text-[12px] leading-[1.8] text-white/85">
              O Instituto Lavoro é uma associação destinada a desenvolver e difundir estudos
              científicos relacionados a temas das relações de trabalho em um contexto
              transdisciplinar.
            </p>
            <a
              href="/"
              className="mt-5 inline-block border border-white/70 px-6 py-2.5 text-[11px] text-white transition-colors hover:bg-white/15"
            >
              Conheça o Instituto
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 h-[2px] w-16 bg-white/70" />
      </section>

      <SiteFooter />

      <WhatsAppButton />
    </div>
  );
}
