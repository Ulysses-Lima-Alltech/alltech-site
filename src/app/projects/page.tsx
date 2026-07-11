import type { Metadata } from "next";

import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases de tecnologia, IA, automação, web, mobile, cloud, visão computacional e RPA da Alltech.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-white px-4 pb-28 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            description="Um panorama dos sistemas, plataformas e protótipos criados para resolver problemas reais de operação, atendimento, gestão e análise."
            eyebrow="Work / Cases"
            title="Cases construídos com engenharia aplicada ao negócio."
          />
        </Reveal>

        <div className="mt-12">
          <ProjectsExplorer projects={projects} />
        </div>
      </div>
    </section>
  );
}
