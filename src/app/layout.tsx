import type { Metadata, Viewport } from "next";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alltechbr.com.br"),
  title: {
    default: "Alltech | Soluções digitais sob medida",
    template: "%s | Alltech",
  },
  description:
    "Portfólio profissional da Alltech com projetos de IA, automação, web, mobile, cloud, visão computacional e RPA.",
  openGraph: {
    title: "Alltech | Soluções digitais sob medida",
    description:
      "Plataformas reais para operação, vendas, gestão, agricultura, educação, atendimento e automação corporativa.",
    siteName: "Alltech",
    locale: "pt_BR",
    type: "website",
    url: "https://alltechbr.com.br",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#F8FAFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AnimatedBackground />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
