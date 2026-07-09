"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: "arrow" | "send" | "message" | "mail";
  className?: string;
  ariaLabel?: string;
};

const variantClasses = {
  primary:
    "border-brand-blue bg-brand-blue text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:border-brand-blueDark hover:bg-brand-blueDark",
  secondary:
    "border-neutral-300 bg-white text-brand-black shadow-sm backdrop-blur-xl hover:border-brand-blue/55 hover:bg-brand-blueSoft/45 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]",
  ghost:
    "border-transparent bg-transparent text-neutral-800 hover:border-neutral-200 hover:bg-white/80 hover:text-brand-blue",
};

const sizeClasses = {
  md: "min-h-11 px-4 py-2.5 text-sm",
  lg: "min-h-12 px-5 py-3 text-base",
};

const icons = {
  arrow: ArrowUpRight,
  send: Send,
  message: MessageCircle,
  mail: Mail,
};

export function MagneticButton({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  icon = "arrow",
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.35 });
  const Icon = icons[icon];

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const distanceX = event.clientX - rect.left - rect.width / 2;
    const distanceY = event.clientY - rect.top - rect.height / 2;
    x.set(distanceX * 0.22);
    y.set(distanceY * 0.22);
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  const buttonClassName = cn(
    "inline-flex max-w-full items-center justify-center gap-2 rounded-lg border font-semibold transition-colors duration-300",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue",
    "whitespace-normal text-center",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
    </>
  );

  if (href) {
    return (
      <Link
        aria-label={ariaLabel}
        className="inline-flex max-w-full"
        data-cursor="hover"
        data-cursor-tone={variant === "primary" ? "light" : undefined}
        href={href}
        onMouseLeave={resetPosition}
        onMouseMove={handleMouseMove}
      >
        <motion.span className={buttonClassName} style={{ x: springX, y: springY }}>
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      aria-label={ariaLabel}
      className={buttonClassName}
      data-cursor="hover"
      data-cursor-tone={variant === "primary" ? "light" : undefined}
      onMouseLeave={resetPosition}
      onMouseMove={handleMouseMove}
      style={{ x: springX, y: springY }}
      type={type}
    >
      {content}
    </motion.button>
  );
}
