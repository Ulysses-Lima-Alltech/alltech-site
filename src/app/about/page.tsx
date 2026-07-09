import type { Metadata } from "next";

import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const pillars = [
  "Engenharia aplicada ao negócio",
  "Soluções sob medida",
  "Produto, operação e tecnologia juntos",
  "Foco em sistemas reais, não apenas protótipos",
];

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a atuação da Alltech em soluções digitais sob medida para operações reais.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white/40 px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              description="A empresa une engenharia, produto e visão operacional para criar tecnologia que resolve o processo inteiro, não apenas uma tela isolada."
              eyebrow="Sobre"
              title="A Alltech cria tecnologia para operação real."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-lg border border-neutral-200 bg-white/90 p-6 shadow-[0_18px_55px_rgba(5,5,5,0.08)] backdrop-blur-xl md:p-8">
              <p className="text-lg leading-9 text-neutral-700">
                A Alltech cria soluções digitais sob medida para transformar
                operações reais em sistemas inteligentes. Atuamos no desenvolvimento
                de plataformas web, aplicativos mobile, automações, IA, visão
                computacional, integrações e infraestrutura cloud.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-100/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Reveal delay={index * 0.05} key={pillar}>
                <article className="h-full rounded-lg border border-neutral-200 bg-white/90 p-5 shadow-[0_14px_40px_rgba(5,5,5,0.07)] backdrop-blur-xl">
                  <span className="text-sm font-semibold text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 text-xl font-semibold leading-snug text-brand-black">
                    {pillar}
                  </h2>
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
                Transforme uma rotina crítica em produto digital.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
                Da automação de processos ao desenvolvimento completo de plataformas,
                o foco é tirar complexidade da operação e colocar inteligência no sistema.
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
