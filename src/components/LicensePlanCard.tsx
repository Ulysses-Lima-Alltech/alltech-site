"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/Reveal";
import type { LicensePlan } from "@/data/licensing";

type LicensePlanCardProps = {
  plan: LicensePlan;
  index?: number;
};

export function LicensePlanCard({ plan, index = 0 }: LicensePlanCardProps) {
  return (
    <Reveal className="h-full" delay={index * 0.04}>
      <Link
        aria-label={`Ver detalhes do plano ${plan.name}`}
        className="group relative block h-full overflow-hidden rounded-lg border border-neutral-200/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white hover:shadow-[0_18px_42px_rgba(15,23,42,0.07)] md:p-5"
        data-cursor="card"
        href={`/licenciamento/${plan.slug}`}
      >
        <div className="card-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative flex h-full flex-col">
          <h3 className="text-lg font-semibold text-brand-black">{plan.name}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-500">{plan.audience}</p>
          <ul className="mt-4 space-y-2">
            {plan.features.map((feature) => (
              <li className="flex items-start gap-2 text-sm leading-6 text-neutral-600" key={feature}>
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">
            Ver detalhes
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
