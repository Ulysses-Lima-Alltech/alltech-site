"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, type MouseEvent } from "react";

import { ProjectLogo } from "@/components/ProjectLogo";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const accentStyles: Record<Project["accent"], { border: string; line: string }> = {
  blue: {
    border: "hover:border-brand-blue/35",
    line: "bg-brand-blue",
  },
  blueDark: {
    border: "hover:border-brand-blueDark/35",
    line: "bg-brand-blueDark",
  },
  neutral: {
    border: "hover:border-brand-blue/30",
    line: "bg-neutral-800",
  },
  black: {
    border: "hover:border-brand-black/30",
    line: "bg-brand-black",
  },
  cyan: {
    border: "hover:border-brand-cyan/35",
    line: "bg-brand-cyan",
  },
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 180, damping: 18, mass: 0.35 });
  const rotateY = useSpring(rotateYValue, { stiffness: 180, damping: 18, mass: 0.35 });
  const accent = accentStyles[project.accent];

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--card-x", `${x}px`);
    card.style.setProperty("--card-y", `${y}px`);

    if (shouldReduceMotion) {
      return;
    }

    rotateXValue.set(((y / rect.height) - 0.5) * -3);
    rotateYValue.set(((x / rect.width) - 0.5) * 3);
  }

  function resetTilt() {
    rotateXValue.set(0);
    rotateYValue.set(0);
  }

  return (
    <Link
      aria-label={`Ver detalhes do projeto ${project.name}`}
      className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/45 focus-visible:ring-offset-4"
      data-cursor="card"
      href={`/projects/${project.slug}`}
    >
      <motion.article
        ref={cardRef}
        className={cn(
          "interactive-card tilt-card relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-lg border border-neutral-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] motion-reduce:!transform-none motion-reduce:!opacity-100",
          "transition-[border-color,box-shadow] duration-300 hover:shadow-[0_18px_42px_rgba(15,23,42,0.07)] md:p-6",
          accent.border,
        )}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        onMouseLeave={resetTilt}
        onMouseMove={handleMouseMove}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      >
        <div className="card-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col">
          <div>
            {project.logo ? (
              <>
                <ProjectLogo
                  logo={project.logo}
                  prominent={project.slug === "shomer"}
                  variant="card"
                />
                <h3 className="sr-only">{project.name}</h3>
              </>
            ) : (
              <>
                <div className="flex h-14 items-end">
                  <div className={cn("h-px w-14", accent.line)} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-brand-black md:text-3xl">
                  {project.name}
                </h3>
              </>
            )}
            <p className="mt-4 text-sm leading-7 text-neutral-600">{project.summary}</p>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((item) => (
                <span
                  className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-600"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="underline-hover mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue opacity-80 transition duration-300 group-hover:opacity-100">
              Ver case
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
