import { Hero } from "@/components/Hero";
import { LicensePlanCard } from "@/components/LicensePlanCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { licenseVendors, whyAlltech } from "@/data/licensing";
import { buildWhatsAppLink } from "@/lib/constants";
import { getProjectBySlug } from "@/data/projects";

const homeProjects = ["shomer", "icontrol"]
  .map((slug) => getProjectBySlug(slug))
  .filter((project) => project !== undefined);

const salesWhatsAppLink = buildWhatsAppLink(
  "Olá! Quero saber mais sobre licenciamento Microsoft 365 e Google Workspace.",
);

export default function Home() {
  return (
    <>
      <Hero />

      {licenseVendors.map((vendor, vendorIndex) => (
        <section
          className={vendorIndex % 2 === 0 ? "bg-white px-4 py-20 sm:px-6 lg:px-8" : "bg-brand-soft/70 px-4 py-20 sm:px-6 lg:px-8"}
          id={vendorIndex === 0 ? "licenciamento" : undefined}
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

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
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

      <section className="bg-brand-soft/70 px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-lg border border-neutral-200/80 bg-white p-6 text-center shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:p-8">
            <h2 className="text-3xl font-semibold leading-tight text-brand-black md:text-5xl">
              Pronto para organizar as licenças da sua empresa?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-neutral-600 md:text-lg">
              Fale com a gente e receba uma recomendação de plano Microsoft 365
              ou Google Workspace sob medida para o seu time.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <MagneticButton href={salesWhatsAppLink} icon="message" size="lg">
                Falar com vendas
              </MagneticButton>
              <MagneticButton href="/contact?motivo=licenciamento" size="lg" variant="secondary">
                Solicitar orçamento
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              description="Além do licenciamento, a Alltech também constrói plataformas, automações e IA sob medida para operações reais."
              eyebrow="Também fazemos sistemas sob medida"
              title="Precisa de mais do que licenças? Também desenvolvemos software."
            />
            <MagneticButton href="/projects" variant="secondary">
              Ver projetos
            </MagneticButton>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {homeProjects.map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
