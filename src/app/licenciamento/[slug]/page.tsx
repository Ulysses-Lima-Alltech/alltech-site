import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";

import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { allLicensePlans, getLicensePlanBySlug } from "@/data/licensing";
import { buildWhatsAppLink } from "@/lib/constants";

type LicensePlanPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return allLicensePlans.map(({ plan }) => ({
    slug: plan.slug,
  }));
}

export async function generateMetadata({
  params,
}: LicensePlanPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getLicensePlanBySlug(slug);

  if (!result) {
    return {
      title: "Plano não encontrado",
    };
  }

  return {
    title: `${result.vendor.vendor} ${result.plan.name}`,
    description: result.plan.overview,
  };
}

export default async function LicensePlanPage({ params }: LicensePlanPageProps) {
  const { slug } = await params;
  const result = getLicensePlanBySlug(slug);

  if (!result) {
    notFound();
  }

  const { plan, vendor } = result;
  const whatsappLink = buildWhatsAppLink(
    `Olá! Quero saber mais sobre o plano ${vendor.vendor} ${plan.name}.`,
  );

  return (
    <>
      <section className="bg-white px-4 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              className="underline-hover mb-10 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors duration-300 hover:text-brand-blue"
              data-cursor="hover"
              href="/#licenciamento"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Voltar aos planos
            </Link>
          </Reveal>

          <Reveal delay={0.04}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
              {vendor.vendor}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-brand-black md:text-5xl">
              {plan.name}
            </h1>
            <p className="mt-5 text-base font-medium text-neutral-500">{plan.audience}</p>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-neutral-600">{plan.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-soft/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <article className="rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] md:p-8">
              <h2 className="text-xl font-semibold text-brand-black">O que está incluído</h2>
              <div className="mt-6 grid gap-4">
                {plan.detailFeatures.map((feature) => (
                  <div className="flex gap-3 text-sm leading-7 text-neutral-600" key={feature}>
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-brand-blue"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs leading-6 text-neutral-400">
                Especificações com base na documentação oficial{" "}
                {vendor.vendor === "Microsoft 365" ? "da Microsoft" : "do Google"}, que pode mudar
                sem aviso prévio. Confirmamos os detalhes atualizados na hora da proposta.{" "}
                <a
                  className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:underline"
                  href={plan.officialUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver página oficial
                  <ExternalLink aria-hidden="true" className="h-3 w-3" />
                </a>
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col gap-6 rounded-lg border border-neutral-200/80 bg-white p-7 shadow-[0_14px_40px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <h2 className="text-2xl font-semibold text-brand-black md:text-3xl">
                Quer contratar o {plan.name}?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
                Fale com a gente e receba uma recomendação sob medida, com
                orçamento e prazo de migração para a sua empresa.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <MagneticButton href={whatsappLink} icon="message" size="lg">
                Falar com vendas
              </MagneticButton>
              <MagneticButton href="/contact?motivo=licenciamento" size="lg" variant="secondary">
                Solicitar orçamento
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
