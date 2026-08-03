import { CalendarDays, Facebook, Instagram, Linkedin, MapPin, Music2, Phone, Youtube } from "lucide-react";

const offices = [
  {
    city: "Brasília",
    address:
      "Edifício Ion – SGAN 601 Lote H, Salas 79 a 86, Piso Alta 1 – Térreo – Asa Norte, CEP: 70830-010",
    phone: "(61) 3396-8100",
  },
  {
    city: "São Paulo",
    address:
      "Edifício Philadelphia – Avenida Angélica, 1996, Cj 201 – Higienópolis, CEP: 01228-200",
    phone: "(11) 3583-8030",
  },
  {
    city: "Campinas",
    address:
      "Espaço Toulouse – Rua Doutor Emílio Ribas, 188, 3º andar – Cambuí, CEP: 13025-140",
    phone: "(19) 3395-7700",
  },
];

const footerMenu = [
  "Início",
  "Equipe",
  "A LBS",
  "Trabalhe Conosco",
  "Áreas de Atuação",
  "Política de Privacidade",
  "Artigos e Notícias",
  "Contato",
];

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "YouTube", Icon: Youtube },
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "TikTok", Icon: Music2 },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-lbs-ink pt-14 pb-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end gap-3">
          <span className="text-[38px] font-semibold leading-none tracking-[-0.02em] text-white">
            LBS
          </span>
          <span className="pb-1 text-[10px] leading-[1.5] text-white/70">
            Advogadas
            <br />e Advogados
          </span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-[22px] font-light leading-[1.35] text-white">
              Dialogando com o presente
              <br />e o futuro do trabalho
            </h2>
            <a
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-[11px] text-lbs-magenta transition-opacity hover:opacity-70"
            >
              <CalendarDays className="h-3.5 w-3.5" />
              Agende um horário
            </a>

            <ul className="mt-10 grid gap-8 sm:grid-cols-3">
              {offices.map((office) => (
                <li key={office.city}>
                  <h3 className="text-[12px] font-medium text-white">{office.city}</h3>
                  <p className="mt-3 flex gap-2 text-[10px] leading-[1.7] text-white/60">
                    <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-lbs-magenta" />
                    {office.address}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-[10px] text-lbs-magenta">
                    <Phone className="h-3 w-3" />
                    {office.phone}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.16em] text-lbs-magenta">Menu</h3>
            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {footerMenu.map((item) => (
                <a
                  key={item}
                  href="/"
                  className="text-[10px] text-white/65 transition-colors hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            <h3 className="mt-10 text-[11px] uppercase tracking-[0.16em] text-lbs-magenta">
              Redes Sociais
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="/"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center bg-white/8 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-5 text-center text-[9px] text-white/40">
          © 2026 LBS Advogadas e Advogados. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a LBS pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lbs-whatsapp shadow-lg transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-white">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46s1.06 2.86 1.21 3.06c.15.2 2.06 3.28 5.06 4.47 2.5.99 2.86.83 3.38.78.52-.05 1.68-.68 1.92-1.35.24-.67.24-1.24.17-1.36-.07-.12-.27-.19-.57-.34ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5 9.42 9.42 0 0 1 16.09-6.66 9.35 9.35 0 0 1 2.76 6.67c0 5.18-4.23 9.4-9.44 9.4Zm8.03-17.44A11.32 11.32 0 0 0 12.04.75C5.8.75.73 5.82.73 12.05c0 1.99.52 3.94 1.51 5.65L.6 23.25l5.7-1.49a11.3 11.3 0 0 0 5.74 1.55h.01c6.23 0 11.31-5.07 11.31-11.3 0-3.02-1.18-5.86-3.29-7.95Z" />
      </svg>
    </a>
  );
}
