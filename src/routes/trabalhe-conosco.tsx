import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Upload } from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter, WhatsAppButton } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const meta = {
  title: "Trabalhe Conosco | LBS Advogadas e Advogados",
  description:
    "Faça parte da LBS Advogadas e Advogados. Envie seu currículo e descubra oportunidades para dialogar com o presente e o futuro do trabalho.",
};

const offices = [
  {
    id: "brasilia",
    label: "Brasília",
    address: ["Edifício Íon - SGAN 601 Lote H", "Salas 79 a 86", "Piso Alfa 1 - Térreo – Asa Norte", "CEP: 70830-010"],
    phone: "(61) 3366-8100",
    email: "brasilia@lbs.adv.br",
  },
  {
    id: "campinas",
    label: "Campinas",
    address: ["Espaço Toulouse - Rua Doutor Emílio Ribas, 188", "3º andar – Cambuí", "CEP: 13025-140"],
    phone: "(19) 3399-7700",
    email: "campinas@lbs.adv.br",
  },
  {
    id: "goiania",
    label: "Goiânia",
    address: [],
    phone: "(62) 3626-5222",
    email: "goiania@lbs.adv.br",
  },
  {
    id: "sao-paulo",
    label: "São Paulo",
    address: ["Edifício Philadelphia - Avenida Angélica, 1996", "CJ 201 – Higienópolis", "CEP: 01228-200"],
    phone: "(11) 3583-8030",
    email: "sp@lbs.adv.br",
  },
];

const areas = [
  "Advocacia trabalhista",
  "Direito sindical",
  "Direito previdenciário",
  "Execuções e cumprimento de decisões",
  "Litígios coletivos estruturados",
  "Consultoria e negociação coletiva",
  "Administrativo e contencioso estratégico",
  "Outro",
];

export const Route = createFileRoute("/trabalhe-conosco")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/trabalhe-conosco" }],
  }),
  component: TrabalheConoscoPage,
});

function TrabalheConoscoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const nome = String(fd.get("nome") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const telefone = String(fd.get("telefone") ?? "").trim();
    const area = String(fd.get("area") ?? "");
    const mensagem = String(fd.get("mensagem") ?? "").trim();

    const body = [
      `Nome: ${nome}`,
      `E-mail: ${email}`,
      `Telefone: ${telefone}`,
      `Área de interesse: ${area}`,
      "",
      mensagem,
    ].join("\n");

    const subject = encodeURIComponent(`Currículo - ${nome}`);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:rh@lbs.adv.br?subject=${subject}&body=${encodedBody}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate w-full bg-lbs-ink">
        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8">
          <div className="rounded-[14px] bg-black/40">
            <SiteHeader active="Trabalhe Conosco" />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lbs-magenta">
              LBS Advogadas e Advogados
            </p>
            <h1 className="mt-4 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              Trabalhe Conosco
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              Faça parte de um escritório que dialoga com o presente e o futuro do trabalho. Envie seu
              currículo e venha construir uma carreira com propósito.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lbs-magenta">
              Envie seu currículo
            </p>
            <h2 className="mt-3 text-2xl font-light text-lbs-ink sm:text-3xl">
              Candidate-se às nossas vagas
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-lbs-ink/70">
              Preencha o formulário ao lado com seus dados e área de interesse. Anexe seu currículo e,
              se houver uma oportunidade alinhada ao seu perfil, entraremos em contato.
            </p>
          </div>

          <div className="rounded-2xl border border-lbs-ink/10 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="rounded-xl border border-lbs-magenta/30 bg-lbs-magenta/5 p-6 text-center">
                <p className="text-lg font-medium text-lbs-ink">Obrigado pelo envio!</p>
                <p className="mt-2 text-sm text-lbs-ink/70">
                  Seu cliente de e-mail foi aberto. Caso não tenha aberto, envie seu currículo para{" "}
                  <a href="mailto:rh@lbs.adv.br" className="font-medium text-lbs-magenta hover:underline">
                    rh@lbs.adv.br
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input id="nome" name="nome" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" name="telefone" placeholder="(00) 00000-0000" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="area">Área de interesse</Label>
                  <Select name="area" required>
                    <SelectTrigger id="area">
                      <SelectValue placeholder="Selecione uma área" />
                    </SelectTrigger>
                    <SelectContent>
                      {areas.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Conte um pouco sobre sua trajetória e o que busca na LBS"
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="curriculo">Currículo</Label>
                  <div className="relative">
                    <Input
                      id="curriculo"
                      name="curriculo"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="cursor-pointer file:text-lbs-ink/70"
                    />
                    <Upload className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-lbs-ink/40" />
                  </div>
                  <p className="text-xs text-lbs-ink/50">Formatos aceitos: PDF, DOC ou DOCX.</p>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox id="lgpd" name="lgpd" required className="mt-0.5" />
                  <Label htmlFor="lgpd" className="text-sm font-normal leading-snug text-lbs-ink/70">
                    Declaro que li e concordo com a{" "}
                    <a
                      href="/politica-de-privacidade"
                      className="font-medium text-lbs-magenta hover:underline"
                    >
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o tratamento dos meus dados pessoais para fins de recrutamento.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-lbs-magenta text-white hover:bg-lbs-magenta-deep"
                >
                  Enviar currículo
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="bg-lbs-ink/[0.02] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lbs-magenta">
            Nossas unidades
          </p>
          <h2 className="mt-3 text-2xl font-light text-lbs-ink sm:text-3xl">
            Onde estamos
          </h2>

          <Tabs defaultValue="brasilia" className="mt-8">
            <TabsList className="mb-6 h-auto flex-wrap gap-2 rounded-xl bg-white p-2 shadow-sm">
              {offices.map((office) => (
                <TabsTrigger
                  key={office.id}
                  value={office.id}
                  className="rounded-lg px-4 py-2 text-sm data-[state=active]:bg-lbs-magenta data-[state=active]:text-white"
                >
                  {office.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {offices.map((office) => (
              <TabsContent
                key={office.id}
                value={office.id}
                className="rounded-2xl border border-lbs-ink/10 bg-white p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-xl font-semibold text-lbs-ink">{office.label}</h3>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {office.address.length > 0 && (
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lbs-magenta/10 text-lbs-magenta">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-lbs-ink">Endereço</p>
                        <p className="mt-1 text-sm leading-relaxed text-lbs-ink/70">
                          {office.address.join("\n")}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lbs-magenta/10 text-lbs-magenta">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-lbs-ink">Telefone</p>
                      <a
                        href={`tel:${office.phone.replace(/\D/g, "")}`}
                        className="mt-1 block text-sm text-lbs-ink/70 transition-colors hover:text-lbs-magenta"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lbs-magenta/10 text-lbs-magenta">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-lbs-ink">E-mail</p>
                      <a
                        href={`mailto:${office.email}`}
                        className="mt-1 block text-sm text-lbs-ink/70 transition-colors hover:text-lbs-magenta"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
