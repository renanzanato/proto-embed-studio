import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { LbsTimeline } from "@/components/site/LbsTimeline";
import { LbsTimelineCarousel } from "@/components/site/LbsTimelineCarousel";

export const Route = createFileRoute("/linha-do-tempo-ab")({
  head: () => ({
    meta: [
      { title: "Teste A/B da linha do tempo | LBS" },
      {
        name: "description",
        content:
          "Compare duas versões da linha do tempo da LBS: carrossel horizontal com expansão no hover ou accordion por ano.",
      },
      { property: "og:title", content: "Teste A/B da linha do tempo | LBS" },
      {
        property: "og:description",
        content:
          "Duas versões da linha do tempo da LBS para comparar: carrossel horizontal e accordion por ano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/linha-do-tempo-ab" }],
  }),
  component: TimelineAbPage,
});

function TimelineAbPage() {
  const [variant, setVariant] = useState<"A" | "B" | "both">("B");

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="w-full bg-lbs-ink">
        <div className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-5 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader active="A LBS" />
          </div>

          <div className="mt-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">Teste A/B</p>
            <h1 className="mt-5 max-w-[720px] text-[30px] font-light leading-[1.15] text-white sm:text-[40px]">
              Duas formas de contar a história da LBS
            </h1>
            <p className="mt-6 max-w-[560px] text-[13.5px] leading-[1.85] text-white/60">
              Versão B: carrossel horizontal agrupado por época, que expande ao passar o mouse.
              Versão A: accordion por ano com filtros. Escolha abaixo para comparar.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {(
                [
                  { key: "B", label: "Versão B · Carrossel" },
                  { key: "A", label: "Versão A · Accordion" },
                  { key: "both", label: "Ver as duas" },
                ] as const
              ).map((option) => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setVariant(option.key)}
                  className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.1em] transition-colors ${
                    variant === option.key
                      ? "border-lbs-magenta bg-lbs-magenta text-white"
                      : "border-white/20 text-white/65 hover:border-white/45 hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {(variant === "B" || variant === "both") && <LbsTimelineCarousel />}
      {(variant === "A" || variant === "both") && <LbsTimeline />}

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
