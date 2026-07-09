"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { MagneticButton } from "@/components/MagneticButton";

const showcaseItems = [
  {
    number: "01",
    name: "DS Control",
    category: "AgroTech / Operacao",
    text: "Plataforma para drones agricolas, mapas, rotas, ordens de servico e relatorios.",
  },
  {
    number: "02",
    name: "NETIV / Ana",
    category: "IA Conversacional",
    text: "Atendimento inteligente via WhatsApp, base de conhecimento, funil e handoff comercial.",
  },
  {
    number: "03",
    name: "UMMIA",
    category: "Educacao + Visao Computacional",
    text: "Sistema educacional com IA, transcricao e analise visual de atencao em sala.",
  },
];

function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      className="mt-16 w-full text-left"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-neutral-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
          Trabalhos selecionados
        </p>
        <p className="hidden max-w-sm text-right text-sm leading-6 text-neutral-500 md:block">
          Projetos reais em producao, MVPs e prototipos aplicados a operacoes reais.
        </p>
      </div>

      <motion.div
        animate={shouldReduceMotion ? undefined : "visible"}
        className="grid gap-4 lg:grid-cols-3"
        initial={shouldReduceMotion ? false : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: shouldReduceMotion ? 0 : 0.48,
              staggerChildren: shouldReduceMotion ? 0 : 0.08,
            },
          },
        }}
      >
        {showcaseItems.map((item) => (
          <motion.article
            className="group relative min-h-60 overflow-hidden rounded-lg border border-neutral-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_18px_42px_rgba(15,23,42,0.07)] md:p-6"
            data-cursor="card"
            key={item.name}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ArrowUpRight
              aria-hidden="true"
              className="absolute right-6 top-6 h-5 w-5 text-brand-blue opacity-0 transition duration-300 group-hover:opacity-100"
            />
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-sm font-semibold text-brand-blue">{item.number}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-black">
                  {item.name}
                </h3>
              </div>
              <div>
                <p className="text-sm leading-7 text-neutral-600">{item.text}</p>
                <p className="underline-hover mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-blue opacity-0 transition duration-300 group-hover:opacity-100">
                  Ver case
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:pt-36 lg:px-8">
      <div className="hero-lines absolute inset-x-0 bottom-0 top-20" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">
        <motion.div
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue/20 bg-white px-3 py-2 text-sm font-semibold text-brand-blueDark shadow-sm"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Sparkles aria-hidden="true" className="h-4 w-4" />
          Alltech
        </motion.div>

        <motion.h1
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="max-w-6xl text-5xl font-semibold leading-[0.98] text-brand-black sm:text-6xl md:text-7xl lg:text-8xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Solucoes digitais sob medida com IA, automacao, apps, web e cloud.
        </motion.h1>

        <motion.p
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="mt-8 max-w-3xl text-base leading-8 text-neutral-600 md:text-xl md:leading-9"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          Criamos plataformas reais para operacao, vendas, gestao, agricultura,
          educacao, atendimento, visao computacional e automacao corporativa.
        </motion.p>

        <motion.div
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <MagneticButton href="/projects" size="lg">
            Ver projetos
          </MagneticButton>
          <MagneticButton href="/contact" size="lg" variant="secondary">
            Falar sobre um projeto
          </MagneticButton>
        </motion.div>

        <FeaturedWork />
      </div>
    </section>
  );
}
