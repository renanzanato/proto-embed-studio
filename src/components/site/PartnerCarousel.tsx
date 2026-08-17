import { useEffect, useRef, useState } from "react";

function LavoroMark() {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20 shrink-0 text-white" aria-hidden="true">
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="215 24"
        transform="rotate(-25 50 50)"
      />
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        {[0, 60, 120].map((a) => (
          <line key={a} x1="50" y1="30" x2="50" y2="70" transform={`rotate(${a} 50 50)`} />
        ))}
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <g key={`b-${a}`} transform={`rotate(${a} 50 50)`}>
            <line x1="50" y1="34" x2="55" y2="39" />
            <line x1="50" y1="34" x2="45" y2="39" />
          </g>
        ))}
      </g>
      <circle cx="50" cy="50" r="3.4" fill="currentColor" />
    </svg>
  );
}

function LadoMark() {
  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20 shrink-0 text-white" aria-hidden="true">
      <path d="M20 8 L56 20 L56 92 L20 74 Z" fill="currentColor" />
      <path d="M62 46 L92 60 L62 74 Z" fill="currentColor" />
    </svg>
  );
}

const slides = [
  {
    id: "lavoro",
    name: "Instituto Lavoro",
    mark: <LavoroMark />,
    wordmark: (
      <span className="text-[26px] font-light leading-[1.05] tracking-[0.02em] text-white">
        INSTITUTO
        <br />
        <strong className="font-semibold">LAVORO</strong>
      </span>
    ),
    text: "O Instituto Lavoro é uma associação destinada a desenvolver e difundir estudos científicos relacionados a temas das relações de trabalho em um contexto transdisciplinar.",
    cta: "Conheça o Instituto",
    href: "/",
    background:
      "linear-gradient(90deg, oklch(0.72 0.18 55) 0%, oklch(0.62 0.24 348) 45%, oklch(0.55 0.2 300) 70%, oklch(0.6 0.16 250) 100%)",
  },
  {
    id: "lado",
    name: "Rede Lado",
    mark: <LadoMark />,
    wordmark: (
      <span className="text-[30px] font-bold leading-none tracking-[0.06em] text-white">LADO</span>
    ),
    text: "A Rede Lado se constitui como uma associação de escritórios que atua na causa trabalhista e em outras diversas áreas do Direito. Um coletivo de 27 escritórios espalhados por 15 estados do Brasil.",
    cta: "Conheça a associação",
    href: "/",
    background:
      "linear-gradient(90deg, oklch(0.62 0.2 22) 0%, oklch(0.58 0.22 25) 55%, oklch(0.52 0.2 25) 100%)",
  },
];

export default function PartnerCarousel() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden py-14 transition-[background] duration-700"
      style={{ background: slides[index].background }}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-label="Parcerias institucionais"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 transition-opacity duration-700 md:flex-row md:items-center md:justify-between ${
            i === index ? "opacity-100" : "pointer-events-none absolute inset-x-0 top-14 opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <div className="flex items-center gap-4">
            {slide.mark}
            {slide.wordmark}
          </div>

          <div className="max-w-md">
            <p className="text-[12px] leading-[1.8] text-white/85">{slide.text}</p>
            <a
              href={slide.href}
              className="mt-5 inline-block border border-white/70 px-6 py-2.5 text-[11px] text-white transition-colors hover:bg-white/15"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      <div className="mx-auto mt-10 flex w-fit items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver ${slide.name}`}
            aria-current={i === index}
            className={`h-[3px] w-10 transition-colors ${
              i === index ? "bg-lbs-ink" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
