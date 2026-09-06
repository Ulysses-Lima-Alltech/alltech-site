import type { Metadata } from "next";

import { LicensePlanCard } from "@/components/LicensePlanCard";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { SolutionCard, type SolutionIcon } from "@/components/SolutionCard";
import { licenseVendors, whyAlltech } from "@/data/licensing";
import { buildWhatsAppLink } from "@/lib/constants";

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

const solutionsWhatsAppLink = buildWhatsAppLink(
  "Olá! Quero saber mais sobre licenciamento Microsoft 365 e Google Workspace.",
);

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Licenciamento Microsoft 365 e Google Workspace, e soluções Alltech em web, mobile, IA, visão computacional, RPA, cloud e DevOps.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white/40 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeader
              description="Revenda autorizada de licenças Microsoft 365 e Google Workspace, com consultoria para escolher o plano certo e migração assistida, sem contas soltas nem recursos que você não usa."
              eyebrow="Licenciamento"
              title="Microsoft 365 e Google Workspace, com suporte de verdade."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href={solutionsWhatsAppLink} icon="message" size="lg">
                Falar com vendas
              </MagneticButton>
              <MagneticButton href="/contact?motivo=licenciamento" size="lg" variant="secondary">
                Solicitar orçamento
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {licenseVendors.map((vendor, vendorIndex) => (
        <section
          className={
            vendorIndex % 2 === 0
              ? "bg-white px-4 py-16 sm:px-6 lg:px-8"
              : "bg-brand-soft/70 px-4 py-16 sm:px-6 lg:px-8"
          }
          key={vendor.vendor}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeader description={vendor.description} eyebrow={vendor.eyebrow} title={vendor.title} />
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {vendor.plans.map((plan, index) => (
                <LicensePlanCard index={index} key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            description="Somos revenda autorizada, mas o diferencial é o suporte: escolha do plano, migração e manutenção feitos por quem também constrói sistemas."
            eyebrow="Por que licenciar com a Alltech"
            title="Licenciamento com consultoria de verdade, não só nota fiscal."
          />
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyAlltech.map((item, index) => (
              <Reveal className="h-full" delay={index * 0.04} key={item.title}>
                <article className="h-full rounded-lg border border-neutral-200/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-5">
                  <h3 className="text-lg font-semibold text-brand-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-100/80 px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              align="center"
              description="Além do licenciamento, a Alltech também constrói plataformas, automações e IA sob medida para operações reais."
              eyebrow="Também fazemos sistemas sob medida"
              title="Precisa de mais do que licenças? Desenvolvemos software."
            />
            <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        </Reveal>
      </section>

      <section className="bg-white px-4 pb-24 sm:px-6 lg:px-8">
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
