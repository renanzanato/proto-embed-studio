import { historiaIntro, trajetoria } from "@/content/historia";

export function HistoriaTrajetoria() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <p className="max-w-[70ch] text-[17px] leading-[1.75] text-lbs-ink sm:text-[19px]">
          {historiaIntro}
        </p>

        <h2 className="mt-14 text-[26px] font-light leading-[1.15] tracking-[-0.01em] text-lbs-magenta sm:mt-16 sm:text-[34px] lg:text-[40px]">
          A trajetória
        </h2>

        <ol className="relative mt-10 max-w-[860px] list-none border-l border-lbs-magenta/25 pl-0 sm:mt-12">
          {trajetoria.map((marco) => (
            <li key={`${marco.data}-${marco.titulo}`} className="relative pb-10 pl-8 sm:pb-12 sm:pl-10">
              <span
                aria-hidden
                className="absolute -left-[7px] top-[10px] h-3.5 w-3.5 rounded-full border-2 border-white bg-lbs-magenta"
              />
              <h3 className="text-[15px] font-semibold uppercase tracking-[0.1em] text-lbs-magenta sm:text-[16px]">
                {marco.data}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.8] text-lbs-ink sm:text-[17px]">
                {marco.titulo}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
