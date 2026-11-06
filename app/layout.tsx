import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { site } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading-face",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-face",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-face",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F4F0E6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.metadataBase),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "developer",
    "software engineer",
    "full-stack developer",
    "AI engineer",
    "Next.js",
    "TypeScript",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
    siteName: `${site.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative flex min-h-screen flex-col antialiased text-[#1A1A17] bg-[#F4F0E6] animate-fade-in selection:bg-[#D9480F]/20 selection:text-[#1A1A17]">
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
