import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroImage from "@/assets/a-lbs-hero.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { HistoriaTrajetoria } from "@/components/site/HistoriaTrajetoria";
import { HistoriaAcervo } from "@/components/site/HistoriaAcervo";

export const Route = createFileRoute("/a-lbs/historia")({
  head: () => ({
    meta: [
      { title: "Nossa História | LBS Advogadas e Advogados" },
      {
        name: "description",
        content:
          "De 1981 até hoje: conheça os marcos que construíram a trajetória da LBS Advogadas e Advogados ao lado do movimento sindical e da defesa de quem trabalha.",
      },
      {
        property: "og:title",
        content: "Nossa História | LBS Advogadas e Advogados",
      },
      {
        property: "og:description",
        content:
          "De 1981 até hoje: os marcos que construíram uma advocacia fora do comum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/a-lbs/historia" }],
  }),
  component: HistoriaPage,
});

function HistoriaPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate flex min-h-[360px] w-full flex-col overflow-hidden sm:min-h-[400px] lg:min-h-[440px]">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Escritório da LBS Advogadas e Advogados"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-lbs-ink/78" />
          <div className="absolute inset-0 bg-gradient-to-b from-lbs-ink/40 via-lbs-ink/70 to-lbs-ink" />
        </div>

        {/* Header */}
        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader active="A LBS" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto mt-auto w-full max-w-[1200px] px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">
            A LBS
          </p>
          <h1 className="mt-4 text-[34px] font-light leading-[1.05] tracking-tight text-white sm:text-[48px] lg:text-[60px]">
            Nossa História
          </h1>
          {/* linha que atravessa e sai da tela — eco do bloco 1981 */}
          <div
            className={`mt-8 h-px w-[calc(100%_+_50vw)] origin-left bg-lbs-magenta/80 transition-transform duration-[1300ms] ease-out sm:mt-10 ${
              loaded ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </div>
      </section>

      <LbsTimeline showHeading={false} />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
