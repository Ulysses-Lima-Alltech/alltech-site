"use client";

import { motion } from "framer-motion";

import { AlltechBrandJourney } from "@/components/AlltechBrandJourney";
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { MagneticButton } from "@/components/MagneticButton";

const finalRevealDuration = 0.85;
const finalRevealEase = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <AlltechBrandJourney>
      {({
        brandTargetRef,
        completeFinalReveal,
        finalVisible,
        introCenterRef,
        journeyOriginRef,
        phase,
      }) => {
        const revealingFinal = phase === "reveal-final";
        const finalTransition = {
          duration: revealingFinal ? finalRevealDuration : 0,
          ease: finalRevealEase,
        };

        return (
          <section
            className="relative overflow-x-clip px-4 pb-20 pt-24 sm:px-6 md:pb-24 md:pt-28 lg:px-8 lg:pt-32"
            data-hero-phase={phase}
          >
            <div className="hero-lines absolute inset-x-0 bottom-0 top-20" aria-hidden="true" />
            <span
              ref={introCenterRef}
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-px w-px"
              data-hero-intro-center
            />

            <div className="relative z-10 mx-auto w-full max-w-7xl">
              <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(380px,0.65fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(420px,0.65fr)] xl:gap-12">
                <span
                  ref={journeyOriginRef}
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-[37.8788%] h-px w-px"
                  data-hero-journey-origin
                />

                <motion.div
                  animate={finalVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                  aria-hidden={!finalVisible}
                  className={`order-2 lg:order-1 ${finalVisible ? "" : "pointer-events-none"}`}
                  data-hero-content
                  initial={false}
                  style={{ visibility: finalVisible ? "visible" : "hidden" }}
                  transition={finalTransition}
                >
                  <h1 className="max-w-5xl text-5xl font-semibold leading-[1.01] text-brand-black sm:text-6xl lg:text-[4rem] xl:text-[4.25rem] min-[1400px]:text-[4.5rem]">
                    <span className="block">Da plataforma pronta ao</span>
                    <span className="block">projeto sob medida</span>
                    <span className="mt-2 block text-brand-blue">automação e IA reais.</span>
                  </h1>

                  <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg md:leading-8">
                    Da implantação imediata ao desenvolvimento sob medida, entregamos
                    tecnologia adequada ao momento e à necessidade de cada cliente.
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <MagneticButton href="/projects" size="lg">
                      Ver projetos
                    </MagneticButton>
                    <MagneticButton href="/contact" size="lg" variant="secondary">
                      Falar sobre um projeto
                    </MagneticButton>
                  </div>
                </motion.div>

                <div className="order-1 flex min-h-64 items-center justify-center lg:order-2 lg:min-h-[25rem]">
                  <div
                    className="relative w-full max-w-[520px] lg:w-[clamp(390px,35vw,520px)]"
                    data-hero-logo-target
                  >
                    <span
                      ref={brandTargetRef}
                      aria-hidden="true"
                      className="pointer-events-none absolute h-px w-px"
                      style={{ left: "68.2927%", top: "37.8788%" }}
                    />
                    <motion.div
                      animate={
                        finalVisible
                          ? { filter: "blur(0px)", opacity: 1, scale: 1 }
                          : { filter: "blur(5px)", opacity: 0, scale: 0.9 }
                      }
                      aria-hidden={!finalVisible}
                      className="origin-center"
                      data-hero-final-logo
                      initial={false}
                      onAnimationComplete={
                        revealingFinal ? completeFinalReveal : undefined
                      }
                      transition={finalTransition}
                    >
                      <AnimatedLogo className="block h-auto w-full object-contain" width={540} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </AlltechBrandJourney>
  );
}
