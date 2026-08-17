import { CalendarDays } from "lucide-react";
import { Link } from "@tanstack/react-router";

import lbsLogo from "@/assets/lbs-logo.png.asset.json";

const navItems = [
  { label: "Início", to: "/" },
  { label: "A LBS", to: "/a-lbs" },
  { label: "Atuação", to: "/atuacao" },
  { label: "Artigos e Notícias", to: "/" },
  { label: "Equipe", to: "/equipe" },
  { label: "Contato", to: "/" },
];

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="relative z-10 flex items-center justify-between gap-4 rounded-[14px] border border-white/25 bg-black/25 px-5 py-3.5 backdrop-blur-md sm:px-7">
      <Link to="/" className="flex items-center">
        <img
          src={lbsLogo.url}
          alt="LBS Advogadas e Advogados"
          width={244}
          height={53}
          className="h-[30px] w-auto sm:h-[34px]"
        />
      </Link>

      <nav className="hidden items-center gap-6 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={`text-[13px] transition-colors hover:text-white ${
              active === item.label
                ? "text-white underline underline-offset-[6px]"
                : "text-white/85"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        href="/"
        className="flex shrink-0 items-center gap-2 text-[13px] text-lbs-magenta-soft transition-opacity hover:opacity-80"
      >
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-[5px] bg-lbs-magenta">
          <CalendarDays className="h-3.5 w-3.5 text-white" />
        </span>
        <span className="hidden sm:inline">Agende um horário</span>
      </a>
    </header>
  );
}
