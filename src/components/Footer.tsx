import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/projects", label: "Projetos" },
  { href: "/solutions", label: "Soluções" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-blue/25 bg-brand-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <Link className="inline-flex items-center gap-3" data-cursor="hover" href="/">
            <Image alt="" aria-hidden="true" height={40} src="/logo-mark.svg" width={40} />
            <span>
              <span className="block font-semibold text-white">Alltech</span>
              <span className="block text-sm text-neutral-400">Engenharia digital sob medida</span>
            </span>
          </Link>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400">
            Portfólio de plataformas, automações, IA, cloud, web, mobile e visão
            computacional para operações que precisam virar sistemas reais.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-2 md:justify-end">
            {footerLinks.map((link) => (
              <Link
                className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-neutral-300 shadow-sm transition-colors duration-300 hover:border-brand-cyan/60 hover:text-white"
                data-cursor="hover"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-brand-cyan"
            data-cursor="hover"
            href="/contact"
          >
            Começar conversa
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
