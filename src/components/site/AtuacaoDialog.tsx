import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { createPortal } from "react-dom";

import { servicoRamificacoes } from "@/data/servico-ramificacoes";
import { ramosDoServico } from "@/data/servico-ramos";

type Aba = "areas" | "servicos";

export function AtuacaoDialog({
  open,
  top,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  top: number;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [aba, setAba] = useState<Aba>("areas");

  if (!open || typeof document === "undefined") return null;

  const abas: { id: Aba; label: string }[] = [
    { id: "areas", label: "Áreas de atuação" },
    { id: "servicos", label: "Serviços" },
  ];

  return createPortal(
    <div
      className="fixed inset-x-0 z-50 mx-auto w-[min(1140px,96vw)] pt-[14px]"
      style={{ top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative isolate gap-0 rounded-[6px] border border-lbs-ink/10 bg-white p-7 shadow-xl sm:p-10">
        <h2 className="sr-only">Áreas de atuação</h2>

        <div className="flex flex-wrap gap-2">
          {abas.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setAba(item.id)}
              aria-pressed={aba === item.id}
              className={`px-4 py-2 text-[11px] uppercase tracking-[0.12em] transition-colors ${
                aba === item.id
                  ? "bg-lbs-magenta text-white"
                  : "border border-lbs-ink/15 text-lbs-ink/55 hover:text-lbs-magenta"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <h3 className="mt-5 text-[22px] font-normal text-lbs-ink sm:text-[26px]">
          Encontre o serviço ideal
        </h3>

        {aba === "areas" ? (
          <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicoRamificacoes.map((item) => (
              <li key={item.title} className="min-w-0">
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="block border-b-2 border-lbs-magenta pb-2 text-[13px] font-medium leading-5 text-lbs-ink transition-colors hover:text-lbs-magenta"
                >
                  {item.title}
                </Link>
                <ul className="mt-3 space-y-1.5">
                  {ramosDoServico(item.to.replace("/servicos/", "")).map((ramo) => (
                    <li key={ramo.slug}>
                      <Link
                        to={`/servicos/${ramo.servicoSlug}/${ramo.slug}` as "/servicos"}
                        onClick={onClose}
                        className="block text-[12px] leading-snug text-lbs-ink/60 transition-colors hover:text-lbs-magenta"
                      >
                        {ramo.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-8 grid gap-x-16 gap-y-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
            {servicoRamificacoes.map((item) => (
              <li key={item.title} className="min-w-0 border-b-2 border-lbs-magenta">
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="block w-full py-3 text-[13px] leading-5 text-lbs-ink transition-colors hover:text-lbs-magenta"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[12px] text-lbs-ink/45">Não encontrou o que procura?</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/servicos"
              onClick={onClose}
              className="bg-lbs-ink px-5 py-3 text-[12px] text-white transition-opacity hover:opacity-85"
            >
              Ver todas as áreas de atuações
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
