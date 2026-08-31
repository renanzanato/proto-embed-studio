import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";

const servicos: { title: string; to: string }[] = [
  { title: "Defesa da pessoa que trabalha", to: "/servicos/defesa-da-pessoa-que-trabalha" },
  {
    title: "Vínculos com a Administração Pública",
    to: "/servicos/vinculos-com-a-administracao-publica",
  },
  { title: "Litígios coletivos", to: "/servicos/litigios-coletivos" },
  { title: "Tribunais Superiores", to: "/servicos/tribunais-superiores" },
  { title: "Execuções complexas", to: "/servicos/execucoes-complexas" },
  { title: "Temas emergentes", to: "/servicos/temas-emergentes" },
  { title: "Parceiros estratégicos", to: "/servicos/parceiros-estrategicos" },
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
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-x-0 z-50 mx-auto w-[min(980px,95vw)] pt-[14px]"
      style={{ top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative isolate gap-0 rounded-[6px] border border-lbs-ink/10 bg-white p-7 shadow-xl sm:p-10">
        <h2 className="sr-only">Áreas de atuação</h2>

        <h3 className="text-[22px] font-normal text-lbs-ink sm:text-[26px]">
          Encontre a solução ideal
        </h3>

        <ul className="mt-8 grid gap-x-16 gap-y-6 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4">
          {servicos.map((item) => (
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
