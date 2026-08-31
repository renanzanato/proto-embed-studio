import { Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";


import { servicoRamificacoes } from "@/data/servico-ramificacoes";

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
      className="fixed inset-x-0 z-50 mx-auto w-[min(1140px,96vw)] pt-[14px]"
      style={{ top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative isolate gap-0 rounded-[6px] border border-lbs-ink/10 bg-white p-7 shadow-xl sm:p-10">
        <h2 className="sr-only">Áreas de atuação</h2>

        <h3 className="text-[22px] font-normal text-lbs-ink sm:text-[26px]">
          Encontre o serviço ideal
        </h3>

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
                {item.ramos.map((ramo) => (
                  <li key={ramo}>
                    <Link
                      to={item.to}
                      onClick={onClose}
                      className="block text-[12px] leading-snug text-lbs-ink/60 transition-colors hover:text-lbs-magenta"
                    >
                      {ramo}
                    </Link>
                  </li>
                ))}
              </ul>
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
