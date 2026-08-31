import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import case01 from "@/assets/case-01.jpg";
import case02 from "@/assets/case-02.jpg";
import case03 from "@/assets/case-03.jpg";
import case04 from "@/assets/case-04.jpg";
import case05 from "@/assets/case-05.jpg";
import case06 from "@/assets/case-06.jpg";
import publicoFoto from "@/assets/publico-atendido-foto.jpg";
import publicoFoto02 from "@/assets/publico-atendido-02.jpg";
import publicoFoto03 from "@/assets/publico-atendido-03.jpg";
import publicoFoto04 from "@/assets/publico-atendido-04.jpg";
import serv01 from "@/assets/serv-01.jpg";
import serv02 from "@/assets/serv-02.jpg";
import serv03 from "@/assets/serv-03.jpg";
import serv04 from "@/assets/serv-04.jpg";
import serv05 from "@/assets/serv-05.jpg";
import serv06 from "@/assets/serv-06.jpg";
import { servicoRamos } from "@/data/servico-ramos";



import { SiteHeader } from "@/components/site/SiteHeader";
import { teamMembers } from "@/data/equipe";
import type { ServicoPessoa } from "@/data/servico-equipe";

/* ------------------------------------------------------------------ *
 * DNA visual compartilhado das páginas de Serviços.
 * Todo serviço usa as mesmas seções, na mesma ordem e com a mesma
 * tipografia/espaçamento. O que varia é apenas o conteúdo.
 * ------------------------------------------------------------------ */

export const caseImgs = [case01, case02, case03, case04, case05, case06];
export const publicoImgs = [publicoFoto, publicoFoto02, publicoFoto03, publicoFoto04];
export const servImgs = [serv01, serv02, serv03, serv04, serv05, serv06];

export const socios = teamMembers.filter((m) => m.role === "Sócio" || m.role === "Sócia");

export type Destaque = { title: string; text: string };
export type PublicoItem = { text: string; img?: string; alt?: string };
export type ServiceGroup = { title: string; items: string[] };

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta">{children}</p>;
}

/* ---------------------------------- HERO --------------------------------- */

export function ServicoHero({
  image,
  alt,
  title,
  intro,
  secondaryTo,
  secondaryLabel,
}: {
  image: string;
  alt: string;
  title: string;
  intro: string;
  secondaryTo?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={alt} width={1920} height={1080} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-5 sm:px-6 sm:pb-24 lg:px-8">
        <SiteHeader active="Áreas de atuação" />

        <div className="relative z-10 mt-16 max-w-[780px] sm:mt-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-lbs-magenta-soft">Serviços</p>
          <h1 className="mt-5 text-[32px] font-light leading-[1.18] tracking-tight text-white sm:text-[42px] lg:text-[48px]">
            {title}
          </h1>
          <p className="mt-7 max-w-[560px] text-[13.5px] leading-[1.9] text-white/70">{intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/servicos"
              className="inline-block border border-lbs-magenta px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-lbs-magenta"
            >
              Todos os serviços
            </Link>
            {secondaryTo && secondaryLabel && (
              <Link
                to={secondaryTo}
                className="inline-block border border-white/25 px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:border-lbs-magenta"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- DESCRIÇÃO / DIFERENCIAIS -------------------- */

export function DescricaoSection({
  title,
  paragraphs,
  bullets,
  bulletsLabel = "Diferenciais",
}: {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  bulletsLabel?: string;
}) {
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:px-8">
        <div className="lg:sticky lg:top-16 lg:self-start">
          <SectionLabel>Descrição e diferenciais</SectionLabel>
          <h2 className="mt-6 max-w-[380px] text-[30px] font-light leading-[1.14] tracking-tight text-lbs-ink sm:text-[40px]">
            {title}
          </h2>
          <div className="mt-8 h-[2px] w-14 bg-lbs-magenta" />
        </div>
        <div className="max-w-[620px] space-y-10">
          {paragraphs.map((p) => (
            <p key={p} className="text-[14px] leading-[2.05] text-lbs-ink/65">
              {p}
            </p>
          ))}

          {bullets && bullets.length > 0 && (
            <div className="border-t border-lbs-ink/12 pt-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-lbs-ink/40">
                {bulletsLabel}
              </p>
              <ul className="mt-7 space-y-5">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-4 text-[13.5px] leading-[1.9] text-lbs-ink/65">
                    <span aria-hidden="true" className="mt-[11px] h-px w-5 shrink-0 bg-lbs-magenta" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PÚBLICO ATENDIDO ------------------------- */

export function PublicoAtendido({
  title,
  lead,
  items,
}: {
  title: string;
  lead: string;
  items: PublicoItem[];
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const withImgs = items.map((item, i) => ({
    ...item,
    img: item.img ?? publicoImgs[i % publicoImgs.length],
    alt: item.alt ?? item.text,
  }));

  return (
    <section
      ref={ref}
      className="relative isolate w-full overflow-hidden border-y border-lbs-ink/10 bg-[#f7f6f5] py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[35fr_25fr_40fr] lg:gap-14">
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(14px)",
              transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <SectionLabel>Público atendido</SectionLabel>
            <p className="mt-5 max-w-[340px] text-[26px] font-light leading-[1.15] tracking-tight text-lbs-ink sm:text-[34px]">
              {title}
            </p>
            <div className="mt-7 h-[2px] w-14 bg-lbs-magenta" />
            <p className="mt-7 max-w-[300px] text-[12.5px] leading-[1.85] text-lbs-ink/55">{lead}</p>
          </div>

          <div
            className="relative hidden lg:block"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(22px)",
              transition:
                "opacity 900ms ease 120ms, transform 900ms cubic-bezier(0.16,1,0.3,1) 120ms",
            }}
          >
            <div
              className="relative h-[520px] w-full overflow-hidden bg-lbs-ink"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 72px), calc(100% - 72px) 100%, 0 100%)",
              }}
            >
              {withImgs.map((item, i) => (
                <img
                  key={`${item.img}-${i}`}
                  src={item.img}
                  alt={i === active ? item.alt : ""}
                  aria-hidden={i === active ? undefined : "true"}
                  loading="lazy"
                  width={912}
                  height={1312}
                  className="absolute inset-0 h-full w-full object-cover grayscale contrast-[1.05]"
                  style={{ opacity: i === active ? 1 : 0, transition: "opacity 380ms ease" }}
                />
              ))}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.55) 0%, rgba(26,26,26,0.05) 45%, transparent 100%)",
                }}
              />
            </div>
            <div className="mt-4 h-[2px] w-10 bg-lbs-magenta" />
          </div>

          <ul className="grid gap-y-0 sm:grid-cols-2 sm:gap-x-10">
            {withImgs.map((item, i) => (
              <li
                key={item.text}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
                className="relative cursor-default border-t border-lbs-ink/15 py-6 outline-none sm:py-7"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(18px)",
                  transition: `opacity 700ms ease ${180 + i * 110}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${180 + i * 110}ms`,
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-[2px] bg-lbs-magenta transition-all duration-500 ease-out"
                  style={{ width: i === active ? "100%" : "0%" }}
                />
                <p
                  className="text-[11px] font-light tabular-nums tracking-[0.2em] transition-colors duration-300"
                  style={{
                    color:
                      i === active
                        ? "var(--lbs-magenta)"
                        : "color-mix(in oklab, var(--lbs-magenta) 45%, transparent)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="mt-3 max-w-[320px] text-[14px] leading-[1.7] transition-colors duration-300"
                  style={{
                    color:
                      i === active
                        ? "var(--lbs-ink)"
                        : "color-mix(in oklab, var(--lbs-ink) 70%, transparent)",
                  }}
                >
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- DESTAQUES ----------------------------- */

function CaseTile({
  index,
  title,
  text,
  img,
  open,
  onToggle,
}: {
  index: number;
  title: string;
  text: string;
  img: string;
  open: boolean;
  onToggle: () => void;
}) {
  const [hover, setHover] = useState(false);
  const on = hover || open;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={on}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
      className="group relative flex h-[260px] cursor-pointer flex-col overflow-hidden border-b border-white/12 outline-none focus-visible:ring-1 focus-visible:ring-lbs-magenta sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r"
    >
      <img
        src={img}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover contrast-[1.03] saturate-[0.95]"
        style={{
          opacity: on ? 1 : 0,
          transform: on ? "scale(1)" : "scale(1.03)",
          transition: "opacity 360ms ease, transform 400ms ease",
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: on
            ? "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.66) 45%, rgba(0,0,0,0.86) 100%)"
            : "rgba(0,0,0,0)",
          transition: "background 360ms ease",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute -top-px left-0 z-10 h-[2px] bg-lbs-magenta transition-all duration-500 ease-out"
        style={{ width: on ? "100%" : "0%" }}
      />

      <div className="relative z-10 flex h-full flex-col px-0 py-8 sm:px-7">
        <span
          className="text-[11px] tabular-nums tracking-[0.16em] transition-colors duration-300"
          style={{
            color: on
              ? "var(--lbs-magenta)"
              : "color-mix(in oklab, var(--lbs-magenta) 45%, transparent)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3
          className="mt-4 text-[14.5px] font-normal leading-[1.45] transition-colors duration-300"
          style={{ color: on ? "#fff" : "rgba(255,255,255,0.62)" }}
        >
          {title}
        </h3>
        <p
          className="mt-4 overflow-hidden text-[12px] leading-[1.8] text-white/70"
          style={{
            opacity: on ? 1 : 0,
            transform: on ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 340ms ease, transform 340ms ease",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export function DestaquesGaleria({
  title,
  items,
  images = caseImgs,
  meta,
}: {
  title: string;
  items: Destaque[];
  images?: string[];
  meta?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  if (items.length === 0) return null;

  const principal = items[0];
  const secundarios = items.slice(1);

  return (
    <section className="w-full bg-lbs-ink py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Destaques</SectionLabel>
            <h2 className="mt-5 max-w-[520px] text-[26px] font-light leading-[1.2] text-white sm:text-[34px]">
              {title}
            </h2>
          </div>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/35">
            {meta ?? `${String(items.length).padStart(2, "0")} frentes`}
          </span>
        </div>

        <article className="mt-12 grid gap-8 border-t border-white/15 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative h-[240px] w-full overflow-hidden sm:h-[340px]">
            <img
              src={images[0]}
              alt={principal.title}
              loading="lazy"
              width={1440}
              height={960}
              className="absolute inset-0 h-full w-full object-cover contrast-[1.03] saturate-[0.95]"
            />
            <span className="absolute left-0 top-0 bg-lbs-magenta px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-white">
              Frente principal
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[22px] font-light leading-[1.25] text-white sm:text-[28px]">
              {principal.title}
            </h3>
            <div className="mt-6 h-[2px] w-12 bg-lbs-magenta" />
            <p className="mt-6 max-w-[520px] text-[13.5px] leading-[1.95] text-white/60">
              {principal.text}
            </p>
          </div>
        </article>

        {secundarios.length > 0 && (
          <div className="mt-14 grid border-t border-white/12 sm:grid-cols-2 lg:grid-cols-3">
            {secundarios.map((d, i) => (
              <CaseTile
                key={d.title}
                index={i + 1}
                title={d.title}
                text={d.text}
                img={images[(i + 1) % images.length]}
                open={open === i + 1}
                onToggle={() => setOpen((p) => (p === i + 1 ? null : i + 1))}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* --------------------------------- SERVIÇOS ---------------------------- */

export function ServiceGroups({
  groups,
  idPrefix,
  servicoSlug,
}: {
  groups: ServiceGroup[];
  idPrefix: string;
  /** quando informado, cada frente ganha link "Ver mais" para sua página */
  servicoSlug?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  const ramoPara = (title: string) =>
    servicoSlug
      ? servicoRamos.find((r) => r.servicoSlug === servicoSlug && r.title === title)
      : undefined;

  const verMais = (title: string) => {
    const ramo = ramoPara(title);
    if (!ramo) return null;
    return (
      <Link
        to={`/servicos/${ramo.servicoSlug}/${ramo.slug}` as "/servicos"}
        className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-lbs-magenta transition-opacity hover:opacity-70"
      >
        Ver mais <span aria-hidden="true">→</span>
      </Link>
    );
  };

  return (
    <div className="mt-10 border-t border-lbs-ink/12">
      {groups.map((group, i) => {
        const hasItems = group.items.length > 0;
        const on = hasItems && open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-btn-${i}`;

        if (!hasItems) {
          return (
            <div key={group.title} className="border-b border-lbs-ink/12 pb-6">
              <h3 className="py-7 pr-4 text-[20px] font-light leading-[1.25] tracking-tight text-lbs-ink sm:py-9 sm:text-[26px] lg:text-[30px]">
                {group.title}
              </h3>
              {verMais(group.title)}
            </div>
          );
        }


        return (
          <div
            key={group.title}
            className="border-b transition-colors duration-300"
            style={{
              borderColor: on
                ? "color-mix(in oklab, var(--lbs-magenta) 55%, transparent)"
                : "color-mix(in oklab, var(--lbs-ink) 12%, transparent)",
            }}
          >
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={on}
                aria-controls={panelId}
                onClick={() => setOpen((p) => (p === i ? null : i))}
                className="flex w-full items-start gap-6 py-7 text-left outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-lbs-magenta sm:py-9"
                style={{ color: on ? "var(--lbs-magenta)" : "var(--lbs-ink)" }}
              >
                <span className="flex-1 pr-4 text-[20px] font-light leading-[1.25] tracking-tight sm:text-[26px] lg:text-[30px]">
                  {group.title}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-2 h-[22px] w-[22px] shrink-0 transition-transform duration-[380ms] ease-out sm:h-[26px] sm:w-[26px]"
                  style={{ transform: on ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
                </span>
              </button>
            </h3>

            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!on} className="pb-10">
              {on && (
                <div className="[animation:fadeUp_360ms_ease_both]">
                  <ul className="grid gap-x-16 gap-y-5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="max-w-[46ch] text-[13px] leading-[1.9] text-lbs-ink/65"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <figure className="mt-10 overflow-hidden bg-lbs-ink/5">
                    <img
                      src={servImgs[i % servImgs.length]}
                      alt=""
                      loading="lazy"
                      width={1280}
                      height={860}
                      className="h-[180px] w-full object-cover grayscale contrast-[1.05] sm:h-[240px]"
                      style={{
                        clipPath:
                          "polygon(0 0, 100% 0, 100% 100%, 72px 100%, 0 calc(100% - 72px))",
                      }}
                    />
                  </figure>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ServicosSection({
  title,
  lead,
  groups,
  idPrefix,
  children,
}: {
  title: string;
  lead?: string;
  groups?: ServiceGroup[];
  idPrefix: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionLabel>Serviços</SectionLabel>
        <h2 className="mt-5 max-w-[520px] text-[24px] font-light leading-[1.22] tracking-tight text-lbs-ink sm:text-[30px]">
          {title}
        </h2>

        <div className="mt-14">
          {lead && (
            <p className="max-w-[720px] text-[14px] leading-[1.9] text-lbs-ink/65">{lead}</p>
          )}
          {groups && <ServiceGroups groups={groups} idPrefix={idPrefix} />}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- LISTA EDITORIAL EM GRADE -------------------- */

export function ListaEditorial({
  label,
  title,
  items,
  tone = "light",
}: {
  label: string;
  title: string;
  items: string[];
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section className={`w-full py-24 sm:py-32 ${dark ? "bg-lbs-ink" : "bg-white"}`}>
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionLabel>{label}</SectionLabel>
        <h2
          className={`mt-5 max-w-[520px] text-[24px] font-light leading-[1.22] tracking-tight sm:text-[30px] ${
            dark ? "text-white" : "text-lbs-ink"
          }`}
        >
          {title}
        </h2>

        <ul
          className={`mt-14 grid border-t sm:grid-cols-2 lg:grid-cols-3 ${
            dark ? "border-white/15" : "border-lbs-ink/12"
          }`}
        >
          {items.map((item, i) => (
            <li
              key={item}
              className={`border-b px-0 py-8 sm:px-7 ${
                dark
                  ? "border-white/12 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                  : "border-lbs-ink/12 lg:[&:nth-child(3n+1)]:border-r lg:[&:nth-child(3n+2)]:border-r sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0"
              }`}
            >
              <span className="text-[11px] tabular-nums tracking-[0.16em] text-lbs-magenta">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className={`mt-4 max-w-[38ch] text-[13.5px] leading-[1.85] ${
                  dark ? "text-white/70" : "text-lbs-ink/65"
                }`}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------- SÓCIAS E SÓCIOS RESPONSÁVEIS ------------------- */

export function SociosResponsaveis({
  members = socios,
  people,
  title = "Quem conduz essa frente",
}: {
  members?: typeof teamMembers;
  people?: ServicoPessoa[];
  title?: string;
}) {
  const entries: ServicoPessoa[] =
    people ?? members.map((m) => ({ name: m.name, city: m.city, slug: m.slug }));

  return (
    <section className="w-full bg-[#f7f6f5] py-24 sm:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Advogadas e advogados responsáveis</SectionLabel>
            <h2 className="mt-5 max-w-[420px] text-[26px] font-light leading-[1.2] text-lbs-ink sm:text-[32px]">
              {title}
            </h2>
          </div>
          <Link
            to="/equipe"
            className="border border-lbs-ink/20 px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-lbs-ink transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
          >
            Ver a equipe
          </Link>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((person) => {
            const member = person.slug
              ? teamMembers.find((m) => m.slug === person.slug)
              : undefined;

            const image = member?.image ?? person.photo;

            const inner = (
              <div className="flex items-center gap-4 border-b border-lbs-ink/10 py-4">
                {image ? (
                  <img
                    src={image}
                    alt={person.name}
                    loading="lazy"
                    width={96}
                    height={96}
                    className="h-12 w-12 flex-none object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                    }}
                  />
                ) : (
                  <span
                    className="flex h-12 w-12 flex-none items-center justify-center bg-lbs-ink/[0.06] text-[12px] tracking-[0.08em] text-lbs-ink/45"
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                    }}
                  >
                    {person.name
                      .split(" ")
                      .filter((w) => w.length > 2)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block text-[13.5px] font-normal leading-tight text-lbs-ink transition-colors group-hover:text-lbs-magenta">
                    {person.name}
                  </span>
                  <span className="mt-1 block text-[11.5px] text-lbs-ink/45">{person.city}</span>
                </span>
              </div>
            );

            return (
              <li key={person.name}>
                {member ? (
                  <Link
                    to="/equipe/$slug"
                    params={{ slug: member.slug }}
                    className="group block"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="group block">{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}


/* --------------- SERVIÇOS COM SELEÇÃO DE CONTEXTO (PÚBLICOS) ----------- */

export function SobreAccordion({
  paragraphs,
  label = "Descrição e diferenciais",
}: {
  paragraphs: string[];
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-lbs-ink/12">
      <div
        className="border-b transition-colors duration-300"
        style={{
          borderColor: open
            ? "color-mix(in oklab, var(--lbs-magenta) 55%, transparent)"
            : "color-mix(in oklab, var(--lbs-ink) 12%, transparent)",
        }}
      >
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          className="flex w-full items-center justify-between py-5 text-left outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-lbs-magenta"
          style={{ color: open ? "var(--lbs-magenta)" : "var(--lbs-ink)" }}
        >
          <span className="text-[15px] font-light tracking-tight sm:text-[17px]">{label}</span>
          <span
            aria-hidden="true"
            className="relative h-[18px] w-[18px] shrink-0 transition-transform duration-[380ms] ease-out sm:h-[22px] sm:w-[22px]"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
          </span>
        </button>

        <div
          className="overflow-hidden transition-all duration-[400ms] ease-out"
          style={{ maxHeight: open ? 2400 : 0, opacity: open ? 1 : 0 }}
        >
          <div className="max-w-[640px] space-y-8 pb-8">
            {paragraphs.map((p) => (
              <p key={p} className="text-[13.5px] leading-[2] text-lbs-ink/65">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export type ContextoServicos = {
  id: string;
  label: string;
  lead: string;
  paragraphs?: string[];
  destaques?: Destaque[];
  groups: ServiceGroup[];
};

export function ServicosPorContexto({
  title,
  ariaLabel,
  contextos,
}: {
  title: string;
  ariaLabel: string;
  contextos: ContextoServicos[];
}) {
  const [atual, setAtual] = useState(contextos[0].id);
  const ctxAtual = contextos.find((c) => c.id === atual) ?? contextos[0];

  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionLabel>Serviços</SectionLabel>
        <h2 className="mt-5 max-w-[520px] text-[24px] font-light leading-[1.22] tracking-tight text-lbs-ink sm:text-[30px]">
          {title}
        </h2>

        <div className="mt-12" role="tablist" aria-label={ariaLabel}>
          {contextos.map((ctx) => {
            const active = ctx.id === atual;
            return (
              <button
                key={ctx.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setAtual(ctx.id)}
                className={`group flex w-full items-center justify-between border-b py-7 text-left outline-none transition-colors duration-300 focus-visible:ring-1 focus-visible:ring-lbs-magenta sm:py-9 ${
                  active ? "text-lbs-magenta" : "text-lbs-ink hover:text-lbs-magenta"
                }`}
                style={{
                  borderColor: active
                    ? "var(--lbs-magenta)"
                    : "color-mix(in oklab, var(--lbs-ink) 12%, transparent)",
                }}
              >
                <span className="pr-6 text-[18px] font-light leading-[1.25] tracking-tight transition-colors duration-300 sm:text-[24px] lg:text-[26px]">
                  {ctx.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-[20px] font-light transition-all duration-300 group-hover:translate-x-1 ${
                    active ? "text-lbs-magenta" : "text-lbs-ink/30 group-hover:text-lbs-magenta"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        <div role="tabpanel" className="mt-14">
          {ctxAtual.paragraphs && ctxAtual.paragraphs.length > 0 && (
            <SobreAccordion paragraphs={ctxAtual.paragraphs} />
          )}
          <p
            className={`max-w-[720px] text-[14px] leading-[1.9] text-lbs-ink/65 ${
              ctxAtual.paragraphs && ctxAtual.paragraphs.length > 0 ? "mt-10" : ""
            }`}
          >
            {ctxAtual.lead}
          </p>
          {ctxAtual.destaques && ctxAtual.destaques.length > 0 && (
            <ul className="mt-10 grid gap-x-16 gap-y-7 border-t border-lbs-ink/12 pt-8 sm:grid-cols-2">
              {ctxAtual.destaques.map((d) => (
                <li key={d.title}>
                  <p className="text-[13.5px] font-normal leading-[1.5] text-lbs-ink">{d.title}</p>
                  <p className="mt-2 max-w-[46ch] text-[12.5px] leading-[1.85] text-lbs-ink/60">
                    {d.text}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8">
            <ServiceGroups groups={ctxAtual.groups} idPrefix={ctxAtual.id} />
          </div>
        </div>
      </div>
    </section>
  );
}
