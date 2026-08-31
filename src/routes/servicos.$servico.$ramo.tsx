import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import solDefesa from "@/assets/pessoas-que-trabalham-fabrica.jpg.asset.json";
import solLitigios from "@/assets/litigios-coletivos.jpg.asset.json";
import solTribunais from "@/assets/tribunais-superiores.jpg.asset.json";
import solExecucoes from "@/assets/execucoes-complexas.jpg.asset.json";
import solParcerias from "@/assets/parceiros-estrategicos-handshake.jpg.asset.json";
import solEmergentes from "@/assets/temas-emergentes.jpg.asset.json";
import solAdmPublica from "@/assets/vinculos-administracao-publica.jpg.asset.json";

import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { ServicoHero, SociosResponsaveis } from "@/components/servicos/ServicoSections";
import { getRamo, ramosDoServico } from "@/data/servico-ramos";
import {
  equipeDefesaPessoaQueTrabalha,
  equipeExecucoes,
  equipeLitigiosColetivos,
  equipeParceirosEstrategicos,
  equipeTemasEmergentes,
  equipeTribunaisSuperiores,
  equipeVinculosAdministracaoPublica,
  type ServicoPessoa,
} from "@/data/servico-equipe";

const heroImages: Record<string, string> = {
  "defesa-da-pessoa-que-trabalha": solDefesa.url,
  "vinculos-com-a-administracao-publica": solAdmPublica.url,
  "litigios-coletivos": solLitigios.url,
  "tribunais-superiores": solTribunais.url,
  "execucoes-complexas": solExecucoes.url,
  "temas-emergentes": solEmergentes.url,
  "parceiros-estrategicos": solParcerias.url,
};

const equipes: Record<string, ServicoPessoa[]> = {
  "defesa-da-pessoa-que-trabalha": equipeDefesaPessoaQueTrabalha,
  "vinculos-com-a-administracao-publica": equipeVinculosAdministracaoPublica,
  "litigios-coletivos": equipeLitigiosColetivos,
  "tribunais-superiores": equipeTribunaisSuperiores,
  "execucoes-complexas": equipeExecucoes,
  "temas-emergentes": equipeTemasEmergentes,
  "parceiros-estrategicos": equipeParceirosEstrategicos,
};

export const Route = createFileRoute("/servicos/$servico/$ramo")({
  loader: ({ params }) => {
    const ramo = getRamo(params.servico, params.ramo);
    if (!ramo) throw notFound();
    return { ramo, irmaos: ramosDoServico(params.servico) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Página não encontrada | LBS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { ramo } = loaderData;
    const title = `${ramo.title} | ${ramo.servicoTitle} | LBS Advogadas e Advogados`;
    const description = ramo.items.length
      ? `${ramo.title}: ${ramo.items.slice(0, 3).join("; ")}.`
      : `${ramo.title} — frente de atuação da LBS em ${ramo.servicoTitle}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 158) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 158) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/servicos/${ramo.servicoSlug}/${ramo.slug}` }],
    };
  },
  notFoundComponent: RamoNaoEncontrado,
  component: RamoPage,
});

function RamoNaoEncontrado() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center">
      <h1 className="text-[28px] font-light text-lbs-ink">Frente de atuação não encontrada</h1>
      <Link
        to="/servicos"
        className="bg-lbs-ink px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-85"
      >
        Ver todas as áreas de atuação
      </Link>
    </div>
  );
}

function RamoPage() {
  const { ramo, irmaos } = Route.useLoaderData();
  const equipe = equipes[ramo.servicoSlug] ?? [];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <ServicoHero
        image={heroImages[ramo.servicoSlug] ?? solDefesa.url}
        alt={ramo.servicoTitle}
        title={ramo.title}
        intro={`Frente de atuação da LBS em ${ramo.servicoTitle}.`}
      />

      <section className="mx-auto w-[min(1140px,92vw)] py-16 sm:py-24">
        <nav aria-label="Trilha de navegação" className="text-[11px] text-lbs-ink/45">
          <Link to="/servicos" className="transition-colors hover:text-lbs-magenta">
            Áreas de atuação
          </Link>
          <span className="px-2">/</span>
          <Link
            to={`/servicos/${ramo.servicoSlug}` as "/servicos"}
            className="transition-colors hover:text-lbs-magenta"
          >
            {ramo.servicoTitle}
          </Link>
          <span className="px-2">/</span>
          <span className="text-lbs-ink/70">{ramo.title}</span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-lbs-magenta">
              O que fazemos
            </p>
            <h2 className="mt-4 max-w-[26ch] text-[26px] font-light leading-[1.2] text-lbs-ink sm:text-[34px]">
              {ramo.title}
            </h2>

            {ramo.items.length > 0 ? (
              <ul className="mt-10 border-t border-lbs-ink/12">
                {ramo.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-lbs-ink/12 py-5 text-[14px] leading-[1.8] text-lbs-ink/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-8 max-w-[60ch] text-[14px] leading-[1.9] text-lbs-ink/70">
                Análises, pareceres, pedidos administrativos e ações judiciais conduzidos pela
                equipe de {ramo.servicoTitle}. Fale com o escritório para avaliarmos o seu caso.
              </p>
            )}

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                to={`/servicos/${ramo.servicoSlug}` as "/servicos"}
                className="bg-lbs-ink px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-85"
              >
                Ver {ramo.servicoTitle}
              </Link>
              <Link
                to="/servicos"
                className="border border-lbs-ink/20 px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-lbs-ink transition-colors hover:border-lbs-magenta hover:text-lbs-magenta"
              >
                Todas as áreas de atuação
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] uppercase tracking-[0.18em] text-lbs-ink/45">
              Outras frentes em {ramo.servicoTitle}
            </p>
            <ul className="mt-5 space-y-px">
              {irmaos.map((outro) => {
                const ativo = outro.slug === ramo.slug;
                return (
                  <li key={outro.slug}>
                    <Link
                      to={`/servicos/${outro.servicoSlug}/${outro.slug}` as "/servicos"}
                      className={`block border-l-2 py-3 pl-4 text-[13px] leading-snug transition-colors ${
                        ativo
                          ? "border-lbs-magenta text-lbs-magenta"
                          : "border-lbs-ink/12 text-lbs-ink/65 hover:border-lbs-magenta hover:text-lbs-magenta"
                      }`}
                    >
                      {outro.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>

      {equipe.length > 0 && <SociosResponsaveis people={equipe} />}

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
