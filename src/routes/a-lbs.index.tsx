import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import heroImage from "@/assets/a-lbs-hero.jpg";
import sedeBrasilia from "@/assets/sede-brasilia.jpg.asset.json";
import sedeCampinas from "@/assets/sede-campinas.webp.asset.json";
import sedeSaoPaulo from "@/assets/sede-sao-paulo.jpg.asset.json";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { HistoryTeaser } from "@/components/site/HistoryTeaser";
import { TypewriterHeadline } from "@/components/site/TypewriterHeadline";
import { aLbsContent as c } from "@/content/aLbs";

const heroSegments = [
  { text: "Para quem trabalha, direitos;" },
  { isBreak: true },
  { text: "para direitos, LBS.", className: "text-white/85" },
];

const chamfer = {
  clipPath:
    "polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 48px 100%, 0 calc(100% - 48px))",
};

const chamferSmall = {
  clipPath:
    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
};

export const Route = createFileRoute("/a-lbs/")({
  head: () => ({
    meta: [
      { title: c.meta.title },
      { name: "description", content: c.meta.description },
      { property: "og:title", content: c.meta.title },
      { property: "og:description", content: c.meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/a-lbs" }],
  }),
  component: ALbsPage,
});

function PhotoPlaceholder({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex h-full w-full items-center justify-center bg-lbs-ink/8 p-6 text-center"
      style={style}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-lbs-ink/55 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

const sedePhotos: Record<string, { url: string; alt: string; focus: string }> = {
  "Brasília": {
    url: sedeBrasilia.url,
    alt: "Fachada do Edifício Íon, sede da LBS em Brasília",
    focus: "50% 55%",
  },
  Campinas: {
    url: sedeCampinas.url,
    alt: "Fachada do Espaço Toulouse, sede da LBS em Campinas",
    focus: "50% 45%",
  },
  "São Paulo": {
    url: sedeSaoPaulo.url,
    alt: "Fachada do Edifício Philadelphia, sede da LBS em São Paulo",
    focus: "50% 60%",
  },
};

function ALbsPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* ABERTURA */}
      <section className="relative isolate flex min-h-[380px] w-full flex-col overflow-hidden sm:min-h-[440px]">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-lbs-ink/85" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader active="A LBS" />
          </div>
        </div>

        <div className="relative z-10 mx-auto my-auto w-full max-w-[1200px] px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <h1 className="max-w-[820px] text-[26px] font-light leading-[1.25] tracking-tight text-white sm:text-[38px] lg:text-[44px]">
            <TypewriterHeadline
              segments={heroSegments}
              speed={38}
              startDelay={250}
              segmentPause={220}
              cursor={false}
              restartOnEnter
            />
            <span className="sr-only">{c.hero.statement}</span>
          </h1>
        </div>
      </section>

      {/* NOSSA ORIGEM */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-14">
            <div className="max-w-[620px]">
              <h2 className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
                {c.origem.label}
              </h2>
              <div className="mt-6 space-y-6">
                {c.origem.paragraphs.map((p) => (
                  <p key={p} className="text-[15px] leading-[1.8] text-lbs-ink sm:text-[16px]">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] w-full">
              <PhotoPlaceholder label={c.origem.photoPlaceholder} style={chamfer} />
            </div>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[40%_1fr] lg:gap-16">
            {/* Coluna esquerda */}
            <div className="flex flex-col items-start">
              <h2 className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
                {c.quemSomos.label}
              </h2>
              <p className="mt-6 text-[17px] font-light leading-[1.7] text-lbs-ink sm:text-[20px] lg:text-[22px]">
                {c.quemSomos.paragraphs[0]}
              </p>
              <div className="mt-8 h-px w-full bg-lbs-magenta" />
            </div>

            {/* Coluna direita */}
            <div className="space-y-6">
              {c.quemSomos.paragraphs.slice(1).map((p) => (
                <p
                  key={p}
                  className="text-[15px] leading-[1.8] text-lbs-ink sm:text-[16px]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="bg-lbs-magenta p-8 sm:p-10 lg:p-12" style={chamfer}>
            <h2 className="text-[22px] font-light text-white sm:text-[26px]">{c.missao.title}</h2>
            <p className="mt-6 max-w-[62ch] text-[15px] leading-[1.8] text-white sm:text-[16px]">
              {c.missao.paragraph}
            </p>
            <a
              href={c.missao.linkUrl}
              target="_blank"
              rel="noopener"
              className="mt-8 inline-flex items-center gap-2 border-b border-white/60 pb-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white"
            >
              {c.missao.linkLabel}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </section>

      {/* NOSSOS NÚMEROS */}
      <section className="w-full bg-lbs-ink py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
            {c.numeros.label}
          </h2>
          <ul className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {c.numeros.items.map((item) => (
              <li key={item.text} className="border-t border-white/25 pt-5">
                <p className="text-[34px] font-light leading-none text-white sm:text-[40px]">
                  {item.figure}
                </p>
                <p className="mt-3 text-[13px] leading-[1.7] text-white/90">{item.text}</p>
              </li>
            ))}
            <li className="border-t border-white/25 pt-5 sm:col-span-2 lg:col-span-3">
              <p className="text-[15px] leading-[1.6] text-white sm:text-[17px]">
                {c.numeros.fullWidth.text}
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <HistoryTeaser />

      {/* UNIDADES */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
            {c.unidades.label}
          </h2>
          <p className="mt-4 max-w-[560px] text-[24px] font-light leading-[1.25] text-lbs-ink sm:text-[30px]">
            {c.unidades.title}
          </p>

          <ul className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {c.unidades.offices.map((office) => (
              <li
                key={office.city}
                className="group bg-lbs-ink/[0.04] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(26,26,26,0.14)]"
                style={chamferSmall}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  {sedePhotos[office.city] ? (
                    <img
                      src={sedePhotos[office.city].url}
                      alt={sedePhotos[office.city].alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      style={{ objectPosition: sedePhotos[office.city].focus }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                      <PhotoPlaceholder label={office.photoPlaceholder} />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-lbs-ink">
                    {office.city}
                  </h3>
                  <p className="mt-3 flex gap-2 text-[13px] leading-[1.7] text-lbs-ink/75">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lbs-magenta" />
                    <span>
                      {office.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                      <span className="block">{office.cep}</span>
                    </span>
                  </p>
                  <a
                    href={`tel:+55${office.phone.replace(/\D/g, "")}`}
                    className="mt-3 flex items-center gap-2 text-[13px] text-lbs-ink/80 transition-colors hover:text-lbs-magenta"
                  >
                    <Phone className="h-3.5 w-3.5 text-lbs-magenta" />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="mt-2 flex items-center gap-2 text-[13px] text-lbs-ink/80 transition-colors hover:text-lbs-magenta"
                  >
                    <Mail className="h-3.5 w-3.5 text-lbs-magenta" />
                    {office.email}
                  </a>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener"
                      className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lbs-magenta underline-offset-4 hover:underline"
                    >
                      {c.unidades.mapLabel}
                    </a>
                    <a
                      href="/"
                      className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lbs-ink/70 underline-offset-4 hover:text-lbs-ink hover:underline"
                    >
                      {c.unidades.scheduleLabel}
                    </a>
                  </div>
                </div>
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
