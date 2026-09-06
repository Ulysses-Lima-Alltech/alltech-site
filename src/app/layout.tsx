import type { Metadata, Viewport } from "next";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alltechbr.com.br"),
  title: {
    default: "Alltech | Licenciamento Microsoft 365 e Google Workspace",
    template: "%s | Alltech",
  },
  description:
    "Revenda autorizada de licenças Microsoft 365 e Google Workspace, com consultoria, migração e suporte especializado. A Alltech também desenvolve software sob medida.",
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
    title: "Alltech | Licenciamento Microsoft 365 e Google Workspace",
    description:
      "Revenda autorizada com consultoria, migração e suporte especializado. Também desenvolvemos plataformas e automações sob medida.",
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
    title: "Alltech | Licenciamento Microsoft 365 e Google Workspace",
    description:
      "Revenda autorizada com consultoria, migração e suporte especializado. Também desenvolvemos plataformas e automações sob medida.",
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
