import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/data";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.company,
    template: `%s | ${siteConfig.company}`
  },
  description: siteConfig.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background selection:bg-accent selection:text-background">
      <body className={`${inter.variable} ${schibsted.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="py-20 border-t border-white/5 bg-surface mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-xs text-muted/30 uppercase tracking-widest">© 2026 RRRTX SYSTEMS</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
