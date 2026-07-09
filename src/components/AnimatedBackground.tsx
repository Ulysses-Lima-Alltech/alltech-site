"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    let animationFrame = 0;

    function handlePointerMove(event: PointerEvent) {
      const pointerX = event.clientX;
      const pointerY = event.clientY;

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        containerRef.current?.style.setProperty("--spot-x", `${pointerX}px`);
        containerRef.current?.style.setProperty("--spot-y", `${pointerY}px`);
      });
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="site-background fixed inset-0 -z-10 overflow-hidden bg-brand-offwhite"
      style={
        {
          "--spot-x": "50vw",
          "--spot-y": "18vh",
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 bg-white/85" />
      <div className="brand-grid absolute inset-0" />
      <div className="brand-scanlines absolute inset-0" />
      <div className="spotlight absolute inset-0" />
    </div>
  );
}
