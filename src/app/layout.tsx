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
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Alltech | Soluções digitais sob medida",
    description:
      "Plataformas reais para operação, vendas, gestão, agricultura, educação, atendimento e automação corporativa.",
    siteName: "Alltech",
    locale: "pt_BR",
    type: "website",
    url: "https://alltechbr.com.br",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alltech - Desafiando a computação inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alltech | Soluções digitais sob medida",
    description:
      "Plataformas reais para operação, vendas, gestão, agricultura, educação, atendimento e automação corporativa.",
    images: ["/og-image.png"],
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
