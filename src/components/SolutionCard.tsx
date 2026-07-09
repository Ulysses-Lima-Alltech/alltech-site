"use client";

import {
  BarChart3,
  BrainCircuit,
  Camera,
  Cloud,
  Code2,
  Plug,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export type SolutionIcon =
  | "web"
  | "mobile"
  | "ai"
  | "vision"
  | "rpa"
  | "cloud"
  | "dashboard"
  | "api";

type SolutionCardProps = {
  title: string;
  text: string;
  icon: SolutionIcon;
  index?: number;
};

const icons: Record<SolutionIcon, LucideIcon> = {
  web: Code2,
  mobile: Smartphone,
  ai: BrainCircuit,
  vision: Camera,
  rpa: Workflow,
  cloud: Cloud,
  dashboard: BarChart3,
  api: Plug,
};

export function SolutionCard({ title, text, icon, index = 0 }: SolutionCardProps) {
  const Icon = icons[icon];

  return (
    <Reveal className="h-full" delay={index * 0.04}>
      <article
        className={cn(
          "group relative h-full overflow-hidden rounded-lg border border-neutral-200/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-5",
          "transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white hover:shadow-[0_18px_42px_rgba(15,23,42,0.07)]",
        )}
        data-cursor="card"
      >
        <div className="card-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative">
          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/15 bg-brand-blueSoft/60 text-brand-blue">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-brand-black">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
        </div>
      </article>
    </Reveal>
  );
}
