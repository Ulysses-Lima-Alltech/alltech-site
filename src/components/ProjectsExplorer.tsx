"use client";

import { useMemo, useState } from "react";

import {
  projectFilters,
  projectMatchesFilter,
  type Project,
  type ProjectFilter,
} from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ProjectCard";

type ProjectsExplorerProps = {
  projects: Project[];
};

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("Todos");

  const visibleProjects = useMemo(
    () => projects.filter((project) => projectMatchesFilter(project, activeFilter)),
    [activeFilter, projects],
  );

  return (
    <div>
      <div
        aria-label="Filtrar projetos"
        className="mb-8 flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-neutral-200/80 bg-white p-2 shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
        role="group"
      >
        {projectFilters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={cn(
              "shrink-0 rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-300",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue",
              activeFilter === filter
                ? "bg-brand-black text-white shadow-sm"
                : "underline-hover text-neutral-600 hover:text-brand-black",
            )}
            data-cursor="hover"
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.slug}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
