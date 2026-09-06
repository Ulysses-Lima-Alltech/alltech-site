import type { Metadata } from "next";
import { Check } from "lucide-react";

import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionCard, type SolutionIcon } from "@/components/SolutionCard";
import { licenseVendors } from "@/data/licensing";

const solutions: Array<{ title: string; text: string; icon: SolutionIcon }> = [
  {
    title: "Desenvolvimento Web",
    text: "Aplicações modernas, dashboards, plataformas internas e sistemas sob medida.",
    icon: "web",
  },
  {
    title: "Aplicativos Mobile",
    text: "Aplicativos para operação, campo, atendimento, gestão e produtos digitais.",
    icon: "mobile",
  },
  {
    title: "Inteligência Artificial",
    text: "Assistentes, classificação, análise de dados, RAG, automações inteligentes e modelos customizados.",
    icon: "ai",
  },
  {
    title: "Visão Computacional",
    text: "Análise de imagens e vídeos, detecção de objetos, reconhecimento facial e indicadores visuais.",
    icon: "vision",
  },
  {
    title: "RPA e Automações",
    text: "Robôs para processos repetitivos, integrações, relatórios, e-mails, sistemas legados e planilhas.",
    icon: "rpa",
  },
  {
    title: "Cloud e DevOps",
    text: "Deploy, bancos de dados, APIs, containers, AWS, monitoramento e arquitetura escalável.",
    icon: "cloud",
  },
];

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "As duas frentes da Alltech: licenciamento Microsoft 365 e Google Workspace, e desenvolvimento de software sob medida em web, mobile, IA, visão computacional, RPA e cloud.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white/40 px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              description="A Alltech ajuda sua empresa de duas formas: organizando o licenciamento de Microsoft e Google, e construindo software sob medida quando o desafio pede mais do que uma licença."
              eyebrow="Nossas frentes"
              title="Duas formas de colocar tecnologia para trabalhar."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col rounded-lg border border-neutral-200/80 bg-brand-soft/60 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-7">
              <p className="text-sm font-semibold text-brand-blue">Licenciamento</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-black md:text-3xl">
                Microsoft 365 e Google Workspace
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Revenda autorizada com consultoria no plano certo, migração
                assistida e suporte contínuo — sem contas soltas nem recursos
                que você não usa.
              </p>
              <ul className="mt-5 space-y-2">
                {licenseVendors.map((vendor) => (
                  <li className="flex items-start gap-2 text-sm leading-6 text-neutral-600" key={vendor.vendor}>
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>
                      <strong className="font-semibold text-brand-black">{vendor.vendor}:</strong>{" "}
                      {vendor.plans.map((plan) => plan.name).join(", ")}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <MagneticButton href="/#licenciamento" variant="secondary">
                  Ver planos completos
                </MagneticButton>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06}>
            <article className="flex h-full flex-col rounded-lg border border-neutral-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-7">
              <p className="text-sm font-semibold text-brand-blue">Engenharia sob medida</p>
              <h2 className="mt-3 text-2xl font-semibold text-brand-black md:text-3xl">
                Software para operações reais
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                Quando o processo é grande demais para uma licença pronta,
                construímos a plataforma: da arquitetura ao deploy, com o
                mesmo padrão de entrega em todas as frentes abaixo.
              </p>
              <ul className="mt-5 space-y-2">
                {solutions.map((solution) => (
                  <li className="flex items-start gap-2 text-sm leading-6 text-neutral-600" key={solution.title}>
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    <span>{solution.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <MagneticButton href="/contact" variant="secondary">
                  Conversar sobre um projeto
                </MagneticButton>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-100/80 px-4 pb-16 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              description="Escolhemos a arquitetura em função da operação, do time e do estágio do produto. A entrega nasce sob medida, mas preparada para escalar."
              eyebrow="Detalhe por frente"
              title="Tecnologia para transformar processos em plataformas."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => (
              <SolutionCard
                icon={solution.icon}
                index={index}
                key={solution.title}
                text={solution.text}
                title={solution.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-neutral-200 bg-neutral-50 p-6 shadow-[0_18px_48px_rgba(0,0,0,0.08)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-brand-black md:text-3xl">
                Precisa combinar mais de uma frente?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                Projetos reais costumam misturar web, mobile, IA, integrações,
                cloud e automação. A arquitetura é desenhada para esse conjunto.
              </p>
            </div>
            <MagneticButton href="/contact" size="lg">
              Conversar sobre solução
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
