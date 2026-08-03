import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Music2,
  Phone,
  Send,
  Youtube,
} from "lucide-react";

import institutoMark from "@/assets/instituto-lavoro-mark.png";
import newsHero from "@/assets/news-hero.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const offices = [
  {
    city: "Brasília",
    address: "Edifício Ion – SGAN 601 Lote H, Salas 79 a 86, Piso Alta 1 – Térreo – Asa Norte, CEP: 70830-010",
    phone: "(61) 3396-8100",
  },
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
];

const footerMenu = [
  "Início",
  "Equipe",
  "A LBS",
  "Trabalhe Conosco",
  "Áreas de Atuação",
  "Política de Privacidade",
  "Artigos e Notícias",
  "Contato",
];

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "YouTube", Icon: Youtube },
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "TikTok", Icon: Music2 },
];

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

import heroOffice from "@/assets/hero-office.jpg";
import solucoesMetal from "@/assets/solucoes-metal.jpg";
import atuacaoOffice from "@/assets/atuacao-office.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const team = [
  {
    name: "José Eymard Loguercio",
    role: "Sócio",
    oab: "OAB/SP nº 113250 e OAB/DF nº 1441-A",
    photo: team1,
  },
  {
    name: "Nilo Beiro",
    role: "Sócio",
    oab: "OAB/SP nº 108720 e OAB/DF nº 23405",
    photo: team2,
  },
  {
    name: "Eduardo Surian Matias",
    role: "Sócio",
    oab: "OAB/SP nº 93422 e OAB/DF nº 23.400",
    photo: team3,
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

const navItems = [
  { label: "Início", active: true },
  { label: "A LBS", active: false },
  { label: "Atuação", active: false },
  { label: "Artigos e Notícias", active: false },
  { label: "Equipe", active: false },
  { label: "Contato", active: false },
];

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
          {/* HEADER PILL */}
          <header className="relative z-10 flex items-center justify-between gap-4 rounded-[14px] border border-white/25 bg-black/25 px-5 py-3.5 backdrop-blur-md sm:px-7">
            <a href="/" className="flex items-end gap-2.5">
              <span className="text-[28px] font-bold leading-none tracking-tight text-white sm:text-[32px]">
                LBS
              </span>
              <span className="hidden text-[11px] leading-[1.25] text-white/85 sm:block">
                Advogadas
                <br />e Advogados
              </span>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="/"
                  className={`text-[13px] text-white/85 transition-colors hover:text-white ${
                    item.active ? "text-white underline underline-offset-[6px]" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="/"
              className="flex shrink-0 items-center gap-2 text-[13px] text-lbs-magenta-soft transition-opacity hover:opacity-80"
            >
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-lbs-magenta">
                <CalendarDays className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="hidden sm:inline">Agende um horário</span>
            </a>
          </header>

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
                  className="h-[230px] w-full object-cover object-top"
                  style={{
                    clipPath:
                      "polygon(0 26px, 26px 0, 100% 0, 100% calc(100% - 26px), calc(100% - 26px) 100%, 0 100%)",
                  }}
                />
                <div className="border border-white/12 bg-white/[0.04] px-5 py-4">
                  <p className="text-[13px] text-white">{member.name}</p>
                  <p className="mt-1 text-[11px] text-lbs-magenta-soft">{member.role}</p>
                  <p className="mt-2.5 text-[10px] text-white/60">{member.oab}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-11 flex justify-center">
            <a
              href="/"
              className="rounded-[7px] border border-lbs-magenta px-5 py-2.5 text-[11px] text-lbs-magenta-soft transition-colors hover:bg-lbs-magenta hover:text-white"
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
            <img
              src={institutoMark}
              alt="Marca do Instituto Lavoro"
              loading="lazy"
              width={512}
              height={512}
              className="h-20 w-20 shrink-0 object-contain"
            />
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

      {/* FOOTER */}
      <footer className="w-full bg-lbs-ink pt-14 pb-6">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end gap-3">
            <span className="text-[38px] font-semibold leading-none tracking-[-0.02em] text-white">
              LBS
            </span>
            <span className="pb-1 text-[10px] leading-[1.5] text-white/70">
              Advogadas
              <br />e Advogados
            </span>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <h2 className="text-[22px] font-light leading-[1.35] text-white">
                Dialogando com o presente
                <br />e o futuro do trabalho
              </h2>
              <a
                href="/"
                className="mt-6 inline-flex items-center gap-2 text-[11px] text-lbs-magenta transition-opacity hover:opacity-70"
              >
                <CalendarDays className="h-3.5 w-3.5" />
                Agende um horário
              </a>

              <ul className="mt-10 grid gap-8 sm:grid-cols-3">
                {offices.map((office) => (
                  <li key={office.city}>
                    <h3 className="text-[12px] font-medium text-white">{office.city}</h3>
                    <p className="mt-3 flex gap-2 text-[10px] leading-[1.7] text-white/60">
                      <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-lbs-magenta" />
                      {office.address}
                    </p>
                    <p className="mt-3 flex items-center gap-2 text-[10px] text-lbs-magenta">
                      <Phone className="h-3 w-3" />
                      {office.phone}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.16em] text-lbs-magenta">Menu</h3>
              <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
                {footerMenu.map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="text-[10px] text-white/65 transition-colors hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <h3 className="mt-10 text-[11px] uppercase tracking-[0.16em] text-lbs-magenta">
                Redes Sociais
              </h3>
              <div className="mt-5 flex gap-3">
                {socials.map(({ label, Icon }) => (
                  <a
                    key={label}
                    href="/"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center bg-white/8 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-white/10 pt-5 text-center text-[9px] text-white/40">
            © 2026 LBS Advogadas e Advogados. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a LBS pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lbs-whatsapp shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.86 1.21 3.06c.15.2 2.06 3.28 5.06 4.47 2.5.99 2.86.83 3.38.78.52-.05 1.68-.68 1.92-1.35.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.57-.34ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5 9.42 9.42 0 0 1 16.09-6.66 9.35 9.35 0 0 1 2.76 6.67c0 5.18-4.23 9.4-9.44 9.4Zm8.03-17.44A11.32 11.32 0 0 0 12.04.75C5.8.75.73 5.82.73 12.05c0 1.99.52 3.94 1.51 5.65L.6 23.25l5.7-1.49a11.3 11.3 0 0 0 5.74 1.55h.01c6.23 0 11.31-5.07 11.31-11.3 0-3.02-1.18-5.86-3.29-7.95Z" />
        </svg>
      </a>
    </div>
  );
}
