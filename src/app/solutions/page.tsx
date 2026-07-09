import type { Metadata } from "next";

import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionCard, type SolutionIcon } from "@/components/SolutionCard";

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
    "Soluções Alltech em web, mobile, IA, visão computacional, RPA, cloud e DevOps.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white/40 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              description="Escolhemos a arquitetura em função da operação, do time e do estágio do produto. A entrega nasce sob medida, mas preparada para escalar."
              eyebrow="Soluções"
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

      <section className="bg-neutral-100/80 px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_18px_48px_rgba(0,0,0,0.08)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-8">
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
