import Image from "next/image";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectLogoProps = {
  className?: string;
  logo: NonNullable<Project["logo"]>;
  preload?: boolean;
  prominent?: boolean;
  variant: "card" | "detail";
};

export function ProjectLogo({
  className,
  logo,
  preload = false,
  prominent = false,
  variant,
}: ProjectLogoProps) {
  const isCard = variant === "card";

  return (
    <div
      className={cn(
        "flex justify-start",
        isCard
          ? prominent
            ? "h-16 items-center"
            : "h-14 items-center"
          : "min-h-20 items-end sm:min-h-24",
        className,
      )}
    >
      <Image
        alt={logo.alt}
        className={cn(
          "block h-auto w-auto max-w-full object-contain object-left",
          isCard
            ? prominent
              ? "max-h-16 max-w-[165px] sm:max-w-[190px]"
              : "max-h-14 max-w-[130px] sm:max-w-[160px]"
            : prominent
              ? "max-h-24 max-w-[260px] sm:max-h-28 sm:max-w-[300px]"
              : "max-h-20 max-w-[220px] sm:max-h-24 sm:max-w-[260px]",
        )}
        height={logo.height}
        preload={preload}
        sizes={
          isCard
            ? prominent
              ? "(min-width: 640px) 190px, 165px"
              : "(min-width: 640px) 160px, 130px"
            : prominent
              ? "(min-width: 640px) 300px, 260px"
              : "(min-width: 640px) 260px, 220px"
        }
        src={logo.src}
        width={logo.width}
      />
    </div>
  );
}
