import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { getInsightBody, getInsightBySlug, getRelatedInsights } from "@/data/insights";
import { teamMembers } from "@/data/equipe";

export const Route = createFileRoute("/artigos/$slug")({
  loader: ({ params }) => {
    const insight = getInsightBySlug(params.slug);
    if (!insight) throw notFound();
    return {
      insight,
      body: getInsightBody(insight),
      related: getRelatedInsights(insight),
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Conteúdo indisponível | LBS Advogadas e Advogados" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { insight } = loaderData;
    const title = `${insight.title} | LBS Advogadas e Advogados`;
    const description = insight.excerpt.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "author", content: insight.lawyer },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/artigos/${insight.slug}` }],
    };
  },
  notFoundComponent: ArtigoNaoEncontrado,
  component: ArtigoPage,
});

function isoDate(br: string) {
  const [d, m, y] = br.split("/");
  return `${y}-${m}-${d}`;
}

function readingTime(paragraphs: string[]) {
  const words = paragraphs.join(" ").split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

function ArtigoPage() {
  const { insight, body, related } = Route.useLoaderData();
  const author = teamMembers.find((m) => m.name === insight.lawyer);
  const minutes = readingTime(body);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: isoDate(insight.date),
    image: insight.image,
    author: { "@type": "Person", name: insight.lawyer },
    publisher: { "@type": "Organization", name: "LBS Advogadas e Advogados" },
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO — compacto */}
      <section className="relative isolate w-full overflow-hidden bg-lbs-ink">
        <img
          src={insight.image}
          alt={insight.title}
          width={1920}
          height={720}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.78) 60%, rgba(15,15,15,0.96) 100%)",
          }}
        />
        <SiteHeader active="Artigos e Notícias" />

        <div className="mx-auto w-full max-w-[1200px] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <Link
            to="/artigos"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-lbs-magenta"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Insights
          </Link>

          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-lbs-magenta">
            {insight.area}
          </p>
          <h1 className="mt-4 max-w-[900px] text-[26px] font-normal leading-[1.22] text-white sm:text-[40px]">
            {insight.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
            <span className="border border-white/20 px-2.5 py-1 text-white/80">{insight.category}</span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              <time dateTime={isoDate(insight.date)}>{insight.date}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {minutes} min de leitura
            </span>
          </div>
        </div>
      </section>

      {/* CORPO + SIDEBAR */}
      <div className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-8">
          <article className="min-w-0">
            <p className="border-l-2 border-lbs-magenta pl-5 text-[15px] leading-[1.8] text-lbs-ink sm:text-[17px]">
              {insight.excerpt}
            </p>
            {body.map((paragraph, i) => (
              <p
                key={i}
                className="mt-6 text-[14px] leading-[1.9] text-lbs-ink/75 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-12 border-t border-lbs-ink/10 pt-6">
              <Link
                to="/artigos"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-lbs-magenta transition-opacity hover:opacity-70"
              >
                <ArrowLeft className="h-3 w-3" /> Voltar para Insights
              </Link>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="text-[22px] font-normal uppercase tracking-[0.04em] text-lbs-magenta sm:text-[26px]">
              Autores
            </h2>

            <div className="mt-5 flex items-center gap-4 border border-lbs-ink/10 bg-white p-4 shadow-[0_10px_30px_-22px_rgba(0,0,0,0.45)]">
              {author ? (
                <img
                  src={author.image}
                  alt={author.name}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 object-cover"
                />
              ) : (
                <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-lbs-ink/5 text-lbs-ink/50">
                  <User className="h-5 w-5" />
                </span>
              )}
              <div className="min-w-0">
                {author ? (
                  <Link
                    to="/equipe/$slug"
                    params={{ slug: author.slug }}
                    className="text-[14px] font-medium text-lbs-ink transition-colors hover:text-lbs-magenta"
                  >
                    {author.name}
                  </Link>
                ) : (
                  <p className="text-[14px] font-medium text-lbs-ink">{insight.lawyer}</p>
                )}
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-lbs-ink/50">
                  {author?.role ?? "Advogado"}
                </p>
              </div>
            </div>

            {author?.about && (
              <p className="mt-4 text-[12px] leading-[1.8] text-lbs-ink/60">{author.about}</p>
            )}

            <div className="mt-8 border border-lbs-magenta/35 bg-lbs-magenta/5 p-6">
              <p className="text-[13px] leading-[1.7] text-lbs-ink/75">
                Inscreva-se para receber nosso boletim informativo
              </p>
              <Link
                to="/artigos"
                className="mt-4 inline-flex items-baseline gap-2 text-[20px] font-normal leading-[1.25] text-lbs-magenta transition-opacity hover:opacity-70 sm:text-[24px]"
              >
                Assine nossa newsletter <ArrowRight className="h-4 w-4 -rotate-45" />
              </Link>
            </div>
          </aside>
        </div>
      </div>


      {/* LEIA TAMBÉM */}
      <section className="w-full bg-[#f5f5f5] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 border-b border-lbs-ink/10 pb-5">
            <h2 className="text-[20px] font-normal text-lbs-ink sm:text-[26px]">Leia também</h2>
            <Link
              to="/artigos"
              className="flex shrink-0 items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-lbs-magenta transition-opacity hover:opacity-70"
            >
              Ver todos <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
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
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-lbs-ink/45">
                      <span className="text-lbs-magenta">{item.category}</span>
                      <time dateTime={isoDate(item.date)}>{item.date}</time>
                    </div>
                    <h3 className="mt-4 text-[15px] font-medium leading-[1.4] text-lbs-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[11px] leading-[1.7] text-lbs-ink/60">
                      {item.excerpt}
                    </p>
                    <Link
                      to="/artigos/$slug"
                      params={{ slug: item.slug }}
                      className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-[10px] uppercase tracking-[0.16em] text-lbs-magenta transition-opacity hover:opacity-70"
                    >
                      Leia mais <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}

function ArtigoNaoEncontrado() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="bg-lbs-ink">
        <SiteHeader active="Artigos e Notícias" />
      </div>
      <div className="mx-auto flex max-w-[760px] flex-col items-start px-4 py-28 sm:px-6">
        <h1 className="text-[28px] font-normal text-lbs-ink">Conteúdo não encontrado</h1>
        <p className="mt-4 text-[14px] leading-[1.8] text-lbs-ink/65">
          O artigo que você procura pode ter sido movido ou removido.
        </p>
        <Link
          to="/artigos"
          className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-lbs-magenta"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Voltar para Insights
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}
