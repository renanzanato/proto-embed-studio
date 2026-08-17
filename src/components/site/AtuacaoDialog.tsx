import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";

type Tab = "areas" | "solucoes";

const solucoes: { title: string; to: string }[] = [
  { title: "Defesa da pessoa que trabalha", to: "/solucoes/defesa-da-pessoa-que-trabalha" },
  { title: "Execuções complexas", to: "/solucoes" },
  { title: "Litígios coletivos", to: "/solucoes" },
  { title: "Parceiros estratégicos", to: "/solucoes" },
  { title: "Temas emergentes", to: "/solucoes" },
  { title: "Tribunais Superiores", to: "/solucoes" },
  {
    title: "Vínculos com a Administração Pública",
    to: "/solucoes/vinculos-com-a-administracao-publica",
  },
];

const areas: { title: string; to: string }[] = [
  { title: "Direito Administrativo", to: "/atuacao" },
  { title: "Direito Ambiental", to: "/atuacao" },
  { title: "Direito Coletivo", to: "/atuacao" },
  { title: "Direito Constitucional", to: "/atuacao" },
  { title: "Direito Digital e LGPD", to: "/atuacao" },
  { title: "Direito do Trabalho", to: "/atuacao/direito-trabalhista" },
  { title: "Direito Econômico e Financeiro", to: "/atuacao" },
  { title: "Direito Internacional", to: "/atuacao" },
  { title: "Direito Previdenciário", to: "/atuacao" },
  { title: "Direito Sindical", to: "/atuacao" },
  { title: "Direitos Humanos", to: "/atuacao" },
];

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
  const [tab, setTab] = useState<Tab>("solucoes");
  const items = tab === "solucoes" ? solucoes : areas;

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-x-0 z-50 mx-auto w-[min(980px,95vw)] pt-[14px]"
      style={{ top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative isolate gap-0 rounded-[6px] border border-lbs-ink/10 bg-white p-7 shadow-xl sm:p-10">
        <h2 className="sr-only">Soluções e Áreas de Atuação</h2>

        {/* abas */}
        <div className="flex flex-wrap gap-3">
          {(
            [
              { id: "areas" as Tab, label: "Áreas de atuação" },
              { id: "solucoes" as Tab, label: "Soluções" },
            ]
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-[4px] border px-4 py-2 text-[10px] uppercase tracking-[0.16em] transition-colors ${
                tab === t.id
                  ? "border-lbs-magenta bg-lbs-magenta text-white"
                  : "border-lbs-magenta/50 text-lbs-magenta hover:bg-lbs-magenta/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <h3 className="mt-6 text-[22px] font-normal text-lbs-ink sm:text-[26px]">
          {tab === "solucoes" ? "Encontre a solução ideal" : "Encontre a área de atuação"}
        </h3>

        <ul className="mt-8 grid gap-x-16 gap-y-6 sm:grid-cols-2">
          {items.map((item) => (
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

        <div className="mt-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[12px] text-lbs-ink/45">Não encontrou o que procura?</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/solucoes"
              onClick={onClose}
              className="bg-lbs-ink px-5 py-3 text-[12px] text-white transition-opacity hover:opacity-85"
            >
              Ver todas as Soluções
            </Link>
            <Link
              to="/atuacao"
              onClick={onClose}
              className="bg-lbs-ink px-5 py-3 text-[12px] text-white transition-opacity hover:opacity-85"
            >
              Ver todas as Áreas
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
