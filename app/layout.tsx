import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Syncopate } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MagneticCursor from "@/components/MagneticCursor";
import Nav from "@/components/Nav";
import GrainOverlay from "@/components/ui/GrainOverlay";

const display = Syncopate({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matyáš Mlnařík — Lead Developer & Hardware Engineer",
  description:
    "Portfolio Matyáše Mlnaříka. Hardware a firmware v jazyce C na projektu Hope To See, vlastní stavba CNC a laserových strojů, Next.js / Supabase / AI-driven workflow.",
  keywords: [
    "Matyáš Mlnařík",
    "Hope To See",
    "embedded C",
    "firmware",
    "Next.js",
    "Supabase",
    "CNC",
    "hardware engineering",
    "Techta",
  ],
  authors: [{ name: "Matyáš Mlnařík" }],
  openGraph: {
    title: "Matyáš Mlnařík — Lead Developer & Hardware Engineer",
    description:
      "Digitální produkty a fyzické stroje. Hope To See, custom machine building, AI-driven workflow.",
    type: "website",
    locale: "cs_CZ",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-void text-bone">
        <SmoothScroll />
        <MagneticCursor />
        <GrainOverlay />
        <Nav />
        <main id="index">{children}</main>
      </body>
    </html>
  );
}
