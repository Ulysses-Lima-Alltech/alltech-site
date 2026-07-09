"use client";

import { useEffect, useRef, useState } from "react";

const interactiveSelector =
  "a, button, [role='button'], [data-cursor='hover'], [data-cursor='interactive'], [data-cursor='card']";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const supportsCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)",
    ).matches;
    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!supportsCursor || shouldReduceMotion) {
      return;
    }

    const cursor = cursorRef.current;

    if (!cursor) {
      return;
    }

    const cursorElement = cursor;

    document.documentElement.classList.add("custom-cursor-enabled");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let animationFrame = 0;

    function setCursorState(target: EventTarget | null) {
      const interactive =
        target instanceof Element ? target.closest(interactiveSelector) : null;
      cursorElement.classList.toggle("cursor-interactive", Boolean(interactive));
    }

    function handlePointerMove(event: PointerEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      setCursorState(event.target);
      cursorElement.classList.remove("cursor-hidden");
    }

    function handlePointerLeave() {
      cursorElement.classList.add("cursor-hidden");
    }

    function handlePointerOver(event: PointerEvent) {
      setCursorState(event.target);
    }

    function handlePointerOut(event: PointerEvent) {
      setCursorState(event.relatedTarget);
    }

    function handlePointerDown(event: PointerEvent) {
      const id = window.performance.now();
      const ripple = {
        id,
        x: event.clientX,
        y: event.clientY,
      };

      cursorElement.classList.add("cursor-clicking");
      setIsClicking(true);
      setRipples((current) => [...current, ripple]);
      window.setTimeout(() => {
        cursorElement.classList.remove("cursor-clicking");
        setIsClicking(false);
      }, 220);
      window.setTimeout(() => {
        setRipples((current) => current.filter((item) => item.id !== id));
      }, 520);
    }

    function render() {
      cursorX += (mouseX - cursorX) * 0.42;
      cursorY += (mouseY - cursorY) * 0.42;

      cursorElement.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-2px, -2px)`;
      animationFrame = window.requestAnimationFrame(render);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.addEventListener("pointerout", handlePointerOut, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`custom-cursor custom-cursor-pointer${isClicking ? " cursor-clicking" : ""}`}
      >
        <svg
          className="custom-cursor-icon"
          fill="none"
          height="21"
          viewBox="0 0 22 22"
          width="21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2 L20 9 L11.5 12 L8 20 Z" fill="currentColor" />
        </svg>
      </div>

      {ripples.map((ripple) => (
        <span
          aria-hidden="true"
          className="custom-cursor-ripple"
          key={ripple.id}
          style={{
            left: ripple.x,
            top: ripple.y,
          }}
        />
      ))}
    </>
  );
}
