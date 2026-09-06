import type { Metadata } from "next";

import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const pillars = [
  {
    title: "Licenciamento oficial Microsoft e Google",
    text: "Revenda autorizada de Microsoft 365 e Google Workspace, com faturamento em real e nota fiscal.",
  },
  {
    title: "Consultoria, não só nota fiscal",
    text: "Ajudamos a escolher o plano certo e conduzimos a migração sem parar a operação.",
  },
  {
    title: "Engenharia sob medida quando a licença não basta",
    text: "Plataformas, automações, IA e integrações para processos que nenhum produto pronto resolve sozinho.",
  },
  {
    title: "Produto, operação e tecnologia no mesmo time",
    text: "As mesmas pessoas que recomendam o plano certo também constroem o sistema quando é isso que a operação precisa.",
  },
];

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Alltech é revenda autorizada de licenças Microsoft 365 e Google Workspace, e também desenvolve software sob medida para operações reais.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white/40 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              description="Ajudamos empresas de duas formas: organizando o licenciamento oficial de Microsoft e Google, e construindo software sob medida quando o processo pede mais do que uma licença pronta."
              eyebrow="Sobre"
              title="Da licença certa ao sistema sob medida."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-[0_18px_55px_rgba(5,5,5,0.08)] backdrop-blur-xl md:p-8">
              <p className="text-lg leading-9 text-neutral-700">
                A Alltech é revenda autorizada de licenças Microsoft 365 e
                Google Workspace, com consultoria para escolher o plano certo
                e migração assistida. Quando a operação exige mais do que uma
                licença pronta, também desenvolvemos software sob medida:
                plataformas web, aplicativos mobile, automações, IA, visão
                computacional e infraestrutura cloud.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-100/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Reveal delay={index * 0.05} key={pillar.title}>
                <article className="h-full rounded-lg border border-neutral-200 bg-white/90 p-5 shadow-[0_14px_40px_rgba(5,5,5,0.07)] backdrop-blur-xl">
                  <span className="text-sm font-semibold text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-lg font-semibold leading-snug text-brand-black">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{pillar.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-neutral-200 bg-white p-6 shadow-[0_18px_48px_rgba(0,0,0,0.08)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-brand-black md:text-3xl">
                Quer organizar licenças ou construir um sistema?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                Conte o que precisa e a gente direciona para o time certo:
                licenciamento Microsoft/Google ou engenharia sob medida.
              </p>
            </div>
            <MagneticButton href="/contact" size="lg">
              Iniciar conversa
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
