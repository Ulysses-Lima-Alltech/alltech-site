import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Alltech para conversar sobre sistemas, IA, automação, web, mobile e cloud.",
};

export default function ContactPage() {
  return (
    <section className="bg-white/40 px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <div>
            <SectionHeader
              description="Conte o contexto, o estágio da operação e o que precisa ser digitalizado para ganhar velocidade, controle e inteligência."
              eyebrow="Contato"
              title="Quer transformar uma ideia ou processo em sistema?"
            />
            <div className="mt-8 grid gap-3">
              {["Operações manuais", "Planilhas críticas", "Atendimento repetitivo", "Projetos com IA"].map(
                (item) => (
                  <div
                    className="rounded-lg border border-neutral-200 bg-white/90 px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-xl"
                    key={item}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
