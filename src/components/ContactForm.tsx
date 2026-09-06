"use client";

import { Mail, MessageCircle } from "lucide-react";
import type { FormEvent } from "react";

import { MagneticButton } from "@/components/MagneticButton";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const CONTACT_EMAIL = "contato@alltechbr.com";

const fieldClassName =
  "min-h-12 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-brand-black outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10";

const projectTypeOptions = [
  "Licenciamento Microsoft 365 / Google Workspace",
  "Aplicação web",
  "Aplicativo mobile",
  "IA ou automação",
  "Visão computacional",
  "Cloud, API ou integração",
  "Outro",
];

type ContactFormProps = {
  defaultProjectType?: string;
};

export function ContactForm({ defaultProjectType }: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const email = String(formData.get("email") ?? "");
    const whatsapp = String(formData.get("whatsapp") ?? "");
    const projectType = String(formData.get("projectType") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Novo contato pelo site - ${name}`);
    const body = encodeURIComponent(
      [
        `Nome: ${name}`,
        `Empresa: ${company || "Não informada"}`,
        `E-mail: ${email}`,
        `WhatsApp: ${whatsapp || "Não informado"}`,
        `Motivo do contato: ${projectType}`,
        "",
        "Mensagem:",
        message,
      ].join("\n"),
    );

    // TODO: substituir por uma chamada de API real (Resend, Formspree, endpoint próprio etc.).
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="rounded-lg border border-neutral-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(5,5,5,0.09)] backdrop-blur-xl md:p-6"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-neutral-700">
          Nome
          <input className={fieldClassName} name="name" placeholder="Seu nome" required />
        </label>
        <label className="space-y-2 text-sm font-medium text-neutral-700">
          Empresa
          <input className={fieldClassName} name="company" placeholder="Nome da empresa" />
        </label>
        <label className="space-y-2 text-sm font-medium text-neutral-700">
          E-mail
          <input
            className={fieldClassName}
            name="email"
            placeholder="email@empresa.com"
            required
            type="email"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-neutral-700">
          WhatsApp
          <input className={fieldClassName} name="whatsapp" placeholder="(00) 00000-0000" />
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm font-medium text-neutral-700">
        Motivo do contato
        <select
          className={fieldClassName}
          defaultValue={defaultProjectType ?? ""}
          name="projectType"
          required
        >
          <option disabled value="">
            Selecione uma opção
          </option>
          {projectTypeOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="mt-4 block space-y-2 text-sm font-medium text-neutral-700">
        Mensagem
        <textarea
          className={`${fieldClassName} min-h-36 resize-y`}
          name="message"
          placeholder="Conte rapidamente o processo, produto ou operação que você quer transformar."
          required
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <MagneticButton icon="send" size="lg" type="submit">
          Enviar mensagem
        </MagneticButton>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition-colors duration-300 hover:border-brand-blue/35 hover:bg-neutral-50"
          data-cursor="hover"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition-colors duration-300 hover:border-brand-blue/35 hover:bg-neutral-50"
          data-cursor="hover"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          <Mail aria-hidden="true" className="h-4 w-4" />
          E-mail
        </a>
      </div>
    </form>
  );
}
