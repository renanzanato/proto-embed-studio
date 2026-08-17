import { useState } from "react";
import { Link } from "@tanstack/react-router";

type Tab = "areas" | "solucoes";

const solucoes: { title: string; to: string }[] = [
  { title: "Defesa da pessoa que trabalha", to: "/solucoes" },
  { title: "Litígios coletivos estruturados", to: "/solucoes" },
  { title: "Parcerias jurídicas estratégicas", to: "/solucoes" },
  { title: "Litígios estratégicos em temas emergentes", to: "/solucoes" },
  { title: "Atuação em Tribunais Superiores e execuções complexas", to: "/solucoes" },
];

const areas: { title: string; to: string }[] = [
  { title: "Direito Trabalhista", to: "/atuacao/direito-trabalhista" },
  { title: "Direito Sindical", to: "/atuacao" },
  { title: "Direito Empresarial", to: "/atuacao" },
  { title: "Direito Civil", to: "/atuacao" },
  { title: "Direito Digital", to: "/atuacao" },
  { title: "Direito do Consumidor", to: "/atuacao" },
  { title: "Direito Tributário", to: "/atuacao" },
  { title: "Direito Administrativo", to: "/atuacao" },
];

export function AtuacaoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [tab, setTab] = useState<Tab>("solucoes");
  const items = tab === "solucoes" ? solucoes : areas;
  const close = () => onOpenChange(false);

  return (
    <div
      className={`absolute left-1/2 top-full z-50 mt-3 w-[min(980px,95vw)] -translate-x-1/2 transition-all duration-200 ${
        open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
    >
      <div className="gap-0 rounded-[6px] border border-lbs-ink/10 bg-white p-7 shadow-xl sm:p-10">
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

        <ul className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <Link
                to={item.to}
                onClick={close}
                className="group block border-b-2 border-lbs-magenta pb-2 text-[13px] leading-[1.4] text-lbs-ink transition-colors hover:text-lbs-magenta"
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
              onClick={close}
              className="bg-lbs-ink px-5 py-3 text-[12px] text-white transition-opacity hover:opacity-85"
            >
              Ver todas as Soluções
            </Link>
            <Link
              to="/atuacao"
              onClick={close}
              className="bg-lbs-ink px-5 py-3 text-[12px] text-white transition-opacity hover:opacity-85"
            >
              Ver todas as Áreas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
