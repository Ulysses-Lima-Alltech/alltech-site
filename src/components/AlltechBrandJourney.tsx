"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
  type RefObject,
} from "react";

export type AnimationPhase =
  | "checking"
  | "center-icon"
  | "center-hold"
  | "move-to-origin"
  | "morph-to-ball"
  | "travel"
  | "reveal-final"
  | "complete";

type JourneyRenderState = {
  brandTargetRef: RefObject<HTMLSpanElement | null>;
  completeFinalReveal: () => void;
  finalVisible: boolean;
  introCenterRef: RefObject<HTMLSpanElement | null>;
  journeyOriginRef: RefObject<HTMLSpanElement | null>;
  phase: AnimationPhase;
};

type AlltechBrandJourneyProps = {
  children: (state: JourneyRenderState) => ReactNode;
};

declare global {
  interface Window {
    __alltechIntroPlayedThisLoad?: boolean;
  }
}

const desktopQuery = "(min-width: 1024px)";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
const ballSize = 18;
const centerHoldDuration = 1500;
const journeyDuration = 5;
const bounceHeights = [102, 102, 102, 102, 96, 84];
const progress = Array.from(
  { length: bounceHeights.length * 2 + 1 },
  (_, index) => index / (bounceHeights.length * 2),
);
const bounceOffset = progress.map((_, index) =>
  index % 2 === 0 ? 0 : -bounceHeights[(index - 1) / 2],
);
const scaleX = progress.map((_, index) => {
  if (index === 0) return 1;
  if (index === progress.length - 1) return 1.08;
  return index % 2 === 0 ? 1.06 : 0.97;
});
const scaleY = progress.map((_, index) => {
  if (index === 0) return 1;
  if (index === progress.length - 1) return 0.92;
  return index % 2 === 0 ? 0.94 : 1.03;
});
const segmentEasing = [
  "easeOut",
  "easeIn",
  "easeOut",
  "easeIn",
  "easeOut",
  "easeIn",
  "easeOut",
  "easeIn",
  "easeOut",
  "easeIn",
  "easeOut",
  "easeIn",
] as const;

function subscribeToMediaQuery(query: string, onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(query);
  const handleChange = () => onStoreChange();

  mediaQuery.addEventListener("change", handleChange);

  return () => mediaQuery.removeEventListener("change", handleChange);
}

function getDesktopSnapshot() {
  return window.matchMedia(desktopQuery).matches;
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function nextFrame() {
  return new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

function wait(duration: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, duration));
}

function getCenter(element: Element) {
  const rect = element.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

export function AlltechBrandJourney({ children }: AlltechBrandJourneyProps) {
  const introCenterRef = useRef<HTMLSpanElement>(null);
  const journeyOriginRef = useRef<HTMLSpanElement>(null);
  const brandTargetRef = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<AnimationPhase>("checking");
  const iconControls = useAnimationControls();
  const ballControls = useAnimationControls();
  const framerReducedMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(
    (onStoreChange) => subscribeToMediaQuery(desktopQuery, onStoreChange),
    getDesktopSnapshot,
    () => true,
  );
  const nativeReducedMotion = useSyncExternalStore(
    (onStoreChange) => subscribeToMediaQuery(reducedMotionQuery, onStoreChange),
    getReducedMotionSnapshot,
    () => false,
  );
  const shouldReduceMotion = nativeReducedMotion || Boolean(framerReducedMotion);
  const introSize = isDesktop ? 148 : 112;
  const showIntroIcon = [
    "checking",
    "center-icon",
    "center-hold",
    "move-to-origin",
    "morph-to-ball",
  ].includes(phase);
  const showBall = [
    "checking",
    "center-icon",
    "center-hold",
    "move-to-origin",
    "morph-to-ball",
    "travel",
  ].includes(phase);
  const finalVisible = phase === "reveal-final" || phase === "complete";

  const completeFinalReveal = useCallback(() => {
    setPhase((currentPhase) =>
      currentPhase === "reveal-final" ? "complete" : currentPhase,
    );
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function runIntro() {
      await nextFrame();

      const forceReplay = new URLSearchParams(window.location.search).get("intro") === "1";

      if (cancelled) return;

      if (shouldReduceMotion) {
        window.__alltechIntroPlayedThisLoad = true;
        setPhase("complete");
        return;
      }

      if (window.__alltechIntroPlayedThisLoad && !forceReplay) {
        setPhase("complete");
        return;
      }

      window.__alltechIntroPlayedThisLoad = true;

      const introImage = new window.Image();
      introImage.src = "/assets/logos/alltech-icon-1024.png";

      try {
        await introImage.decode();
      } catch {
        // The visible Next.js image still provides a graceful loading fallback.
      }

      await document.fonts.ready;
      await nextFrame();

      const centerElement = introCenterRef.current;
      const originElement = journeyOriginRef.current;
      const targetElement = brandTargetRef.current;

      if (cancelled) return;

      if (!centerElement || !originElement || !targetElement) {
        setPhase("complete");
        return;
      }

      const center = getCenter(centerElement);
      const origin = getCenter(originElement);
      const target = getCenter(targetElement);
      const centerX = center.x - introSize / 2;
      const centerY = center.y - introSize / 2;
      const originX = origin.x - introSize / 2;
      const originY = origin.y - introSize / 2;
      const introEnterDuration = isDesktop ? 0.55 : 0.5;

      iconControls.set({ opacity: 0, scale: 0.88, x: centerX, y: centerY });
      setPhase("center-icon");
      await nextFrame();
      await iconControls.start({
        opacity: 1,
        scale: 1,
        transition: {
          duration: introEnterDuration,
          ease: [0.22, 1, 0.36, 1],
        },
        x: centerX,
        y: centerY,
      });
      setPhase("center-hold");
      await wait(centerHoldDuration);

      if (cancelled) return;

      setPhase("move-to-origin");

      if (!isDesktop) {
        await iconControls.start({
          opacity: 0,
          scale: 0.34,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        });

        if (!cancelled) setPhase("reveal-final");
        return;
      }

      await iconControls.start({
        opacity: 1,
        scale: 20 / introSize,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
        x: originX,
        y: originY,
      });

      if (cancelled) return;

      setPhase("morph-to-ball");
      await nextFrame();

      const ballX = origin.x - ballSize / 2;
      const ballY = origin.y - ballSize / 2;
      ballControls.set({
        opacity: 0,
        scaleX: 0.85,
        scaleY: 0.85,
        x: ballX,
        y: ballY,
      });

      await Promise.all([
        iconControls.start({
          opacity: 0,
          scale: 18 / introSize,
          transition: { duration: 0.22, ease: "easeInOut" },
        }),
        ballControls.start({
          opacity: 1,
          scaleX: 1,
          scaleY: 1,
          transition: { duration: 0.22, ease: "easeInOut" },
        }),
      ]);

      if (cancelled) return;

      setPhase("travel");

      const x = progress.map((step) => ballX + (target.x - ballSize / 2 - ballX) * step);
      const y = progress.map(
        (step, index) =>
          ballY + (target.y - ballSize / 2 - ballY) * step + bounceOffset[index],
      );

      await ballControls.start({
        opacity: 1,
        scaleX,
        scaleY,
        transition: {
          duration: journeyDuration,
          ease: [...segmentEasing],
          times: progress,
        },
        x,
        y,
      });

      if (!cancelled) setPhase("reveal-final");
    }

    void runIntro();

    return () => {
      cancelled = true;
      iconControls.stop();
      ballControls.stop();
    };
  }, [ballControls, iconControls, introSize, isDesktop, shouldReduceMotion]);

  return (
    <>
      {children({
        brandTargetRef,
        completeFinalReveal,
        finalVisible,
        introCenterRef,
        journeyOriginRef,
        phase,
      })}

      {showIntroIcon ? (
        <motion.div
          animate={iconControls}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-50"
          data-hero-intro-icon
          data-intro-size={introSize}
          initial={{ opacity: 0 }}
          style={{ height: introSize, width: introSize }}
        >
          <Image
            alt=""
            className="object-contain"
            fill
            priority
            sizes={`${introSize}px`}
            src="/assets/logos/alltech-icon-1024.png"
          />
        </motion.div>
      ) : null}

      {showBall ? (
        <motion.span
          animate={ballControls}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-50 block h-[18px] w-[18px] rounded-full shadow-[0_8px_18px_rgba(0,0,0,0.16)]"
          data-bounce-count={bounceHeights.length}
          data-journey-duration={journeyDuration}
          data-hero-journey-ball
          initial={{ opacity: 0 }}
          style={{ backgroundColor: "#050505" }}
        />
      ) : null}
    </>
  );
}
