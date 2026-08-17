import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import {
  bannerSlides,
  insightAreas,
  insightCategories,
  insightLawyers,
  insights,
} from "@/data/insights";

const PER_PAGE = 10;

export const Route = createFileRoute("/artigos")({
  head: () => ({
    meta: [
      { title: "Insights | Artigos e Notícias — LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "Artigos, notícias e análises da LBS Advogadas e Advogados sobre direito do trabalho, litígios coletivos e temas emergentes.",
      },
      { property: "og:title", content: "Insights | LBS Advogadas e Advogados" },
      {
        property: "og:description",
        content:
          "Análises e notícias sobre direito do trabalho, litígios coletivos e temas emergentes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/artigos" }],
  }),
  component: ArtigosPage,
});

function ArtigosPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <BannerCarousel />
      <FiltrosEListagem />
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % bannerSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + bannerSlides.length) % bannerSlides.length);

  return (
    <section className="relative isolate w-full overflow-hidden bg-lbs-ink">
      <div className="absolute inset-0 -z-10">
        {bannerSlides.map((slide, i) => (
          <img
            key={slide.title}
            src={slide.image}
            alt={slide.title}
            width={1920}
            height={900}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,0,6,0.86) 0%, rgba(10,0,6,0.55) 55%, rgba(10,0,6,0.35) 100%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-5 sm:px-6 sm:pb-20 lg:px-8">
        <SiteHeader active="Artigos e Notícias" />

        <div className="relative z-10 mt-16 min-h-[240px] max-w-[720px] sm:mt-24 sm:min-h-[280px]">
          {bannerSlides.map((slide, i) => (
            <div
              key={slide.title}
              aria-hidden={i !== index}
              className={`transition-all duration-700 ${
                i === index
                  ? "relative opacity-100 translate-y-0"
                  : "pointer-events-none absolute inset-0 translate-y-3 opacity-0"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
                {slide.label}
              </p>
              <h1 className="mt-5 text-[28px] font-light leading-[1.2] tracking-tight text-white sm:text-[40px] lg:text-[46px]">
                {slide.title}
              </h1>
              <a
                href={slide.to}
                className="mt-8 inline-flex items-center gap-2 rounded-[6px] border border-lbs-magenta px-6 py-3 text-[12px] text-white transition-colors hover:bg-lbs-magenta"
              >
                <PlayCircle className="h-4 w-4" />
                Assista agora
              </a>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-10 flex items-center gap-4">
          <div className="flex items-center gap-2">
            {bannerSlides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Ir para o slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-[3px] transition-all duration-500 ${
                  i === index ? "w-10 bg-lbs-magenta" : "w-5 bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Slide anterior"
              onClick={() => go(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Próximo slide"
              onClick={() => go(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="relative flex w-full flex-col">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-[6px] border border-lbs-ink/15 bg-white px-4 py-3.5 pr-10 text-[12px] text-lbs-ink outline-none transition-colors focus:border-lbs-magenta"
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronRight className="pointer-events-none absolute right-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-90 text-lbs-magenta" />
    </label>
  );
}

function FiltrosEListagem() {
  const [categoria, setCategoria] = useState("");
  const [advogado, setAdvogado] = useState("");
  const [area, setArea] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      insights.filter(
        (item) =>
          (!categoria || item.category === categoria) &&
          (!advogado || item.lawyer === advogado) &&
          (!area || item.area === area),
      ),
    [categoria, advogado, area],
  );

  useEffect(() => {
    setPage(1);
  }, [categoria, advogado, area]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);
  const [featured, ...rest] = visible;

  return (
    <>
      {/* TÍTULO + FILTROS */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
            Artigos e Notícias
          </p>
          <h2 className="mt-4 text-[30px] font-light leading-[1.15] tracking-tight text-lbs-ink sm:text-[40px]">
            Insights
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <Select
              label="Selecione uma categoria"
              value={categoria}
              options={insightCategories}
              onChange={setCategoria}
            />
            <Select
              label="Advogado"
              value={advogado}
              options={insightLawyers}
              onChange={setAdvogado}
            />
            <Select
              label="Área de Atuação"
              value={area}
              options={insightAreas}
              onChange={setArea}
            />
          </div>
        </div>
      </section>

      {/* ÚLTIMOS INSIGHTS */}
      <section className="w-full bg-[#f5f5f5] pb-20 pt-12 sm:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 border-b border-lbs-ink/10 pb-5">
            <h3 className="text-[20px] font-normal text-lbs-ink sm:text-[26px]">
              Últimos insights
            </h3>
            <a
              href="/artigos"
              className="flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-lbs-magenta transition-opacity hover:opacity-70"
            >
              Ver todos <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {!featured ? (
            <p className="py-16 text-center text-[13px] text-lbs-ink/60">
              Nenhum insight encontrado para os filtros selecionados.
            </p>
          ) : (
            <>
              {/* CARD DESTAQUE */}
              <article className="mt-8 grid gap-0 border border-lbs-ink/10 bg-white lg:grid-cols-2">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  width={1000}
                  height={640}
                  className="h-full min-h-[240px] w-full object-cover sm:min-h-[320px]"
                />
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <Meta category={featured.category} date={featured.date} />
                  <h4 className="mt-5 text-[20px] font-normal leading-[1.3] text-lbs-ink sm:text-[26px]">
                    {featured.title}
                  </h4>
                  <p className="mt-4 max-w-[460px] text-[12px] leading-[1.75] text-lbs-ink/65">
                    {featured.excerpt}
                  </p>
                  <a
                    href="/artigos"
                    className="mt-7 inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-lbs-magenta transition-opacity hover:opacity-70"
                  >
                    Leia mais <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>

              {/* CARDS EM BLOCOS DE TRÊS COLUNAS */}
              <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((item) => (
                  <li key={item.slug} className="flex">
                    <article className="flex flex-1 flex-col border border-lbs-ink/10 bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        width={440}
                        height={280}
                        className="aspect-[16/10] w-full object-cover"
                      />
                      <div className="flex flex-1 flex-col p-5">
                        <Meta category={item.category} date={item.date} />
                        <h4 className="mt-4 text-[15px] font-medium leading-[1.4] text-lbs-ink sm:text-[16px]">
                          {item.title}
                        </h4>
                        <p className="mt-2.5 text-[11px] leading-[1.7] text-lbs-ink/60">
                          {item.excerpt}
                        </p>
                        <a
                          href="/artigos"
                          className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[10px] uppercase tracking-[0.16em] text-lbs-magenta transition-opacity hover:opacity-70"
                        >
                          Leia mais <ArrowRight className="h-3 w-3" />
                        </a>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>


              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    aria-label="Página anterior"
                    disabled={safePage === 1}
                    onClick={() => setPage(safePage - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-lbs-ink/15 text-lbs-ink transition-colors hover:border-lbs-magenta hover:text-lbs-magenta disabled:opacity-35"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setPage(n)}
                      aria-current={n === safePage ? "page" : undefined}
                      className={`h-9 min-w-9 rounded-[6px] border px-3 text-[12px] transition-colors ${
                        n === safePage
                          ? "border-lbs-magenta bg-lbs-magenta text-white"
                          : "border-lbs-ink/15 text-lbs-ink hover:border-lbs-magenta hover:text-lbs-magenta"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-label="Próxima página"
                    disabled={safePage === totalPages}
                    onClick={() => setPage(safePage + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-[6px] border border-lbs-ink/15 text-lbs-ink transition-colors hover:border-lbs-magenta hover:text-lbs-magenta disabled:opacity-35"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

function Meta({ category, date }: { category: string; date: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="bg-lbs-magenta/12 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-lbs-magenta">
        {category}
      </span>
      <span className="flex items-center gap-1.5 text-[10px] text-lbs-ink/50">
        <CalendarDays className="h-3 w-3" />
        {date}
      </span>
    </div>
  );
}
