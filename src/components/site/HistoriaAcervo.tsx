import { useMemo, useState } from "react";

import { acervo, acervoAnos, acervoTipos, type MarcoTipo } from "@/content/historia";

const PAGE = 12;

export function HistoriaAcervo() {
  const [tipo, setTipo] = useState<MarcoTipo | "todos">("todos");
  const [ano, setAno] = useState<number | "todos">("todos");
  const [visible, setVisible] = useState(PAGE);

  const items = useMemo(
    () =>
      acervo
        .filter((m) => (tipo === "todos" ? true : m.tipo === tipo))
        .filter((m) => (ano === "todos" ? true : m.ano === ano))
        .slice()
        .sort((a, b) => b.ano - a.ano),
    [tipo, ano],
  );

  const shown = items.slice(0, visible);

  const reset = (fn: () => void) => {
    fn();
    setVisible(PAGE);
  };

  return (
    <section className="w-full border-t border-lbs-ink/10 bg-[#f7f7f7] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-lbs-magenta sm:text-[34px] lg:text-[40px]">
          Acervo
        </h2>

        {/* filtro por tipo */}
        <div className="mt-8 flex flex-wrap gap-2 sm:mt-10">
          {[{ value: "todos" as const, label: "Todos" }, ...acervoTipos].map((opt) => {
            const isActive = tipo === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => reset(() => setTipo(opt.value))}
                className={`rounded-full border px-4 py-2 text-[13px] font-medium tracking-[0.02em] transition-colors sm:text-[14px] ${
                  isActive
                    ? "border-lbs-magenta bg-lbs-magenta text-white"
                    : "border-lbs-ink/20 bg-white text-lbs-ink/80 hover:border-lbs-ink/50 hover:text-lbs-ink"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* filtro por ano */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <label
            htmlFor="acervo-ano"
            className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lbs-ink/60"
          >
            Ano
          </label>
          <select
            id="acervo-ano"
            value={String(ano)}
            onChange={(event) =>
              reset(() =>
                setAno(event.target.value === "todos" ? "todos" : Number(event.target.value)),
              )
            }
            className="rounded-md border border-lbs-ink/20 bg-white px-3 py-2 text-[14px] text-lbs-ink"
          >
            <option value="todos">Todos os anos</option>
            {acervoAnos.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <p className="text-[13px] text-lbs-ink/60">
            {items.length} {items.length === 1 ? "registro" : "registros"}
          </p>
        </div>

        {shown.length === 0 ? (
          <p className="mt-10 text-[15px] text-lbs-ink/70">
            Nenhum registro para os filtros selecionados.
          </p>
        ) : (
          <ul className="mt-10 grid list-none grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((m, index) => (
              <li
                key={`${m.data}-${index}-${m.titulo.slice(0, 24)}`}
                className="flex flex-col border border-lbs-ink/10 bg-white p-5"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lbs-magenta">
                  {m.data}
                </p>
                <p className="mt-3 text-[15px] leading-[1.7] text-lbs-ink">
                  {m.url ? (
                    <a
                      href={m.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-lbs-magenta/50 underline-offset-4 hover:decoration-lbs-magenta"
                    >
                      {m.titulo}
                    </a>
                  ) : (
                    m.titulo
                  )}
                </p>
                {m.descricao && (
                  <p className="mt-2 text-[14px] leading-[1.7] text-lbs-ink/70">{m.descricao}</p>
                )}
              </li>
            ))}
          </ul>
        )}

        {visible < items.length && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((value) => value + PAGE)}
              className="border border-lbs-ink/25 px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-lbs-ink transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
            >
              Carregar mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
