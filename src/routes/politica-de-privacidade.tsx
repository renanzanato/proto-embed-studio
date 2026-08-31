import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { politicaPrivacidade as c } from "@/content/politicaPrivacidade";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: c.meta.title },
      { name: "description", content: c.meta.description },
      { property: "og:title", content: c.meta.title },
      { property: "og:description", content: c.meta.description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PoliticaPrivacidadePage,
});

function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full bg-lbs-ink">
        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lbs-magenta">
              LBS Advogadas e Advogados
            </p>
            <h1 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              Conheça como tratamos, protegemos e utilizamos seus dados pessoais, em conformidade com a LGPD.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <article className="prose prose-lg max-w-none">
          {/* INTRO */}
          <div className="space-y-6 text-lbs-ink/90">
            {c.intro.map((item, idx) => {
              if (typeof item === "string") {
                return (
                  <p key={idx} className="leading-[1.8]">
                    {item}
                  </p>
                );
              }
              return (
                <p key={idx} className="leading-[1.8]">
                  {item.text}
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-lbs-magenta underline underline-offset-4 transition-colors hover:text-lbs-magenta-deep"
                  >
                    {item.link.label}
                  </a>
                  {item.suffix}
                </p>
              );
            })}
          </div>

          {/* SECTIONS */}
          <div className="mt-14 space-y-14">
            {c.sections.map((section) => (
              <section key={section.number} className="scroll-mt-24">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lbs-magenta text-sm font-semibold text-white">
                    {section.number}
                  </span>
                  <h2 className="pt-1.5 text-xl font-semibold uppercase tracking-wide text-lbs-ink sm:text-2xl">
                    {section.title}
                  </h2>
                </div>

                {section.lead && (
                  <p className="mt-5 leading-[1.8] text-lbs-ink/85">
                    {section.lead}
                  </p>
                )}

                {section.paragraphs && (
                  <div className="mt-5 space-y-5">
                    {section.paragraphs.map((paragraph, pidx) => (
                      <p key={pidx} className="leading-[1.8] text-lbs-ink/85">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul className="mt-6 space-y-5">
                    {section.items.map((item, iidx) => (
                      <li key={iidx} className="leading-[1.8] text-lbs-ink/85">
                        <span className="font-semibold text-lbs-ink">
                          {item.letter ? `${item.letter}. ` : "– "}
                          {item.title}:
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                )}

                {section.contact && (
                  <div className="mt-6 rounded-xl border-l-4 border-lbs-magenta bg-lbs-ink/[0.03] p-6">
                    <p className="font-medium text-lbs-ink">
                      {section.contact.title}
                    </p>
                    <a
                      href={`mailto:${section.contact.email}`}
                      className="mt-2 inline-block text-lg font-medium text-lbs-magenta transition-colors hover:text-lbs-magenta-deep"
                    >
                      {section.contact.email}
                    </a>
                    <p className="mt-2 text-sm text-lbs-ink/70">
                      {section.contact.address}
                    </p>
                  </div>
                )}

                {section.subsections && (
                  <div className="mt-6 space-y-5">
                    {section.subsections.map((sub, sidx) => (
                      <div key={sidx}>
                        <h3 className="font-semibold text-lbs-ink">
                          {sub.title}
                        </h3>
                        <p className="mt-1 leading-[1.8] text-lbs-ink/85">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.tools && (
                  <ul className="mt-6 space-y-4">
                    {section.tools.map((tool, tidx) => (
                      <li key={tidx} className="leading-[1.8] text-lbs-ink/85">
                        <span className="font-semibold text-lbs-ink">– {tool.title}:</span>{" "}
                        {tool.text}{" "}
                        <a
                          href={tool.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-lbs-magenta underline underline-offset-4 transition-colors hover:text-lbs-magenta-deep"
                        >
                          {tool.link.label}
                        </a>
                        .
                      </li>
                    ))}
                  </ul>
                )}

                {section.closing && (
                  <p className="mt-6 leading-[1.8] text-lbs-ink/85">
                    {section.closing}
                  </p>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
