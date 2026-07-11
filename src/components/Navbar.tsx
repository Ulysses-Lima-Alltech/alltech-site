"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projetos" },
  { href: "/solutions", label: "Soluções" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 18);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-neutral-200 bg-white/90 shadow-[0_16px_50px_rgba(5,5,5,0.07)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          aria-label="Alltech Home"
          className="relative inline-flex h-10 w-10 shrink-0 items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          data-cursor="hover"
          href="/"
        >
          <Image alt="Alltech" height={40} src="/logo-mark.svg" width={40} />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

            return (
              <Link
                className={cn(
                  "underline-hover rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-300",
                  active ? "text-brand-black" : "text-neutral-600 hover:text-brand-blue",
                )}
                data-cursor="hover"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          className="hidden rounded-lg border border-brand-black bg-brand-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:border-brand-blueDark hover:bg-brand-blueDark md:inline-flex"
          data-cursor="hover"
          data-cursor-tone="light"
          href="/contact"
        >
          Iniciar projeto
        </Link>

        <button
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-200 bg-white/90 text-brand-black shadow-sm md:hidden"
          data-cursor="hover"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-neutral-200 bg-white/96 px-4 py-4 backdrop-blur-xl md:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {links.map((link) => {
                const active =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

                return (
                  <Link
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-semibold transition-colors duration-300",
                      active
                        ? "bg-neutral-100 text-brand-black"
                        : "underline-hover text-neutral-600 hover:text-brand-blue",
                    )}
                    href={link.href}
                    key={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
