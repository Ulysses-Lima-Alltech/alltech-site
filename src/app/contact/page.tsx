import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Alltech para licenciamento Microsoft 365, Google Workspace, sistemas, IA, automação, web, mobile e cloud.",
};

const reasonByMotivo: Record<string, string> = {
  licenciamento: "Licenciamento Microsoft 365 / Google Workspace",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ motivo?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const defaultProjectType = resolvedSearchParams?.motivo
    ? reasonByMotivo[resolvedSearchParams.motivo]
    : undefined;

  return (
    <section className="bg-white/40 px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <div>
            <SectionHeader
              description="Conte o que precisa: licenciamento Microsoft e Google ou um sistema sob medida. A gente direciona para o time certo."
              eyebrow="Contato"
              title="Quer licenciar Microsoft/Google ou construir um sistema?"
            />
            <div className="mt-8 grid gap-3">
              {[
                "Licenciamento Microsoft 365 / Google Workspace",
                "Operações manuais",
                "Planilhas críticas",
                "Atendimento repetitivo",
                "Projetos com IA",
              ].map(
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
          <ContactForm defaultProjectType={defaultProjectType} />
        </Reveal>
      </div>
    </section>
  );
}
