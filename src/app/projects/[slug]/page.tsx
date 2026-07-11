import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

import { MagneticButton } from "@/components/MagneticButton";
import { ProjectLogo } from "@/components/ProjectLogo";
import { Reveal } from "@/components/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projeto não encontrado",
    };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="bg-white px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Link
              className="underline-hover mb-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors duration-300 hover:text-brand-blue"
              data-cursor="hover"
              href="/projects"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Voltar aos projetos
            </Link>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            <Reveal>
              <div>
                {project.logo ? (
                  <ProjectLogo
                    className="mb-7"
                    logo={project.logo}
                    preload
                    prominent={project.slug === "shomer"}
                    variant="detail"
                  />
                ) : null}
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  {project.category}
                </p>
                <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-brand-black md:text-6xl lg:text-7xl">
                  {project.name}
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-600">
                  {project.summary}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <aside className="rounded-lg border border-neutral-200/80 bg-neutral-50/70 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] lg:mt-16">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Stack principal
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <span
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-medium text-neutral-600"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft/70 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-8">
              <p className="text-sm font-semibold text-brand-blue">01 Problema</p>
              <h2 className="mt-5 text-3xl font-semibold text-brand-black">O desafio</h2>
              <p className="mt-5 text-base leading-8 text-neutral-600">{project.problem}</p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="h-full rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-8">
              <p className="text-sm font-semibold text-brand-blue">02 Solução</p>
              <h2 className="mt-5 text-3xl font-semibold text-brand-black">
                A resposta técnica
              </h2>
              <p className="mt-5 text-base leading-8 text-neutral-600">{project.solution}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <article className="h-full rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-8">
              <p className="text-sm font-semibold text-brand-blue">03 Funcionalidades</p>
              <h2 className="mt-5 text-3xl font-semibold text-brand-black">
                O que o sistema cobre
              </h2>
              <div className="mt-7 grid gap-4">
                {project.features.map((feature) => (
                  <div className="flex gap-3 text-sm leading-7 text-neutral-600" key={feature}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-brand-blue"
                    />
                    {feature}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.06}>
              <article className="rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-8">
                <p className="text-sm font-semibold text-brand-blue">04 Stack</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm font-medium text-neutral-700"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-8">
                <p className="text-sm font-semibold text-brand-blue">05 Impacto</p>
                <p className="mt-5 text-base leading-8 text-neutral-600">{project.impact}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-28 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-brand-black md:text-4xl">
                Quer construir algo com essa profundidade?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600">
                Podemos transformar uma operação manual, atendimento, rotina de campo
                ou processo crítico em uma plataforma sob medida.
              </p>
            </div>
            <MagneticButton href="/contact" size="lg">
              Começar conversa
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
