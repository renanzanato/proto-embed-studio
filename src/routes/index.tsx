import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Mail, Send } from "lucide-react";

import heroOffice from "@/assets/hero-office.jpg";
import solucoesMetal from "@/assets/solucoes-metal.jpg";
import atuacaoOffice from "@/assets/atuacao-office.jpg";

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
    <div className="w-full overflow-x-hidden bg-lbs-ink">
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
                "radial-gradient(80% 90% at 18% 45%, color-mix(in oklab, var(--lbs-magenta) 55%, transparent) 0%, transparent 70%), linear-gradient(180deg, rgba(10,0,6,0.55) 0%, rgba(6,0,4,0.85) 65%, var(--lbs-ink) 100%)",
            }}
          />
        </div>

        {/* organic black blob behind the headline */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[6%] -z-[5] h-[62%] w-[78%] -translate-x-1/2 bg-lbs-ink/95 blur-[2px]"
          style={{
            borderRadius: "48% 52% 44% 56% / 56% 44% 58% 42%",
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
      <section className="relative grid w-full grid-cols-1 sm:grid-cols-2">
        <SplitCard
          image={solucoesMetal}
          alt="Painéis curvos de metal escovado em preto e branco"
          title="Soluções"
          clip="polygon(0 0, 100% 0, 74% 100%, 0 100%)"
        />
        <SplitCard
          image={atuacaoOffice}
          alt="Escritório corporativo em preto e branco"
          title="Áreas de Atuação"
        />
      </section>

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

function SplitCard({
  image,
  alt,
  title,
  clip,
}: {
  image: string;
  alt: string;
  title: string;
  clip?: string;
}) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden sm:h-[420px]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width={1024}
        height={1024}
        className="absolute inset-0 h-full w-full object-cover grayscale"
        style={clip ? { clipPath: clip } : undefined}
      />
      <div className="absolute inset-0 bg-lbs-ink/45" style={clip ? { clipPath: clip } : undefined} />
      <div className="relative flex h-full w-full items-end justify-center pb-14">
        <h2 className="text-[20px] font-light text-white sm:text-[22px]">{title}</h2>
      </div>
    </div>
  );
}
