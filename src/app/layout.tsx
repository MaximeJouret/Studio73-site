import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Studio 73 — Agence Créative",
    template: "%s | Studio 73",
  },
  description:
    "Studio 73 est une agence créative belge fondée à Bruxelles. Identités visuelles fortes, rebranding, logotype, motion design et plus encore.",
  keywords: [
    "studio graphique",
    "agence créative",
    "bruxelles",
    "design graphique",
    "identité visuelle",
    "rebranding",
    "logotype",
  ],
  openGraph: {
    title: "Studio 73 — Agence Créative",
    description:
      "Identités visuelles fortes, sincères et impactantes. Basé à Bruxelles.",
    url: "https://studio-73.be",
    siteName: "Studio 73",
    locale: "fr_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        <MagneticCursor
          cursorSize={14}
          cursorColor="#FAFAFA"
          blendMode="difference"
          magneticFactor={0.3}
          hoverPadding={14}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MagneticCursor>
      </body>
    </html>
  );
}
