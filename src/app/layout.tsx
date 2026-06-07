import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.company,
    template: `%s | ${siteConfig.company}`
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.company,
    description: siteConfig.tagline,
    url: "https://rrrtx.ai",
    siteName: siteConfig.company,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.company,
    description: siteConfig.tagline,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background selection:bg-accent selection:text-background">
      <body className={`${inter.variable} ${schibsted.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="py-32 border-t border-white/5 bg-surface mt-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-20">
            <div className="col-span-2">
               <span className="text-2xl font-bold tracking-[0.2em] font-heading mb-8 block">RRRTX SYSTEMS</span>
               <p className="text-muted max-w-sm text-sm leading-relaxed mb-10">{siteConfig.philosophy}</p>
               <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white/5 border border-white/5 rounded-sm flex items-center justify-center hover:bg-white/10 transition cursor-pointer">𝕏</div>
                  <div className="w-10 h-10 bg-white/5 border border-white/5 rounded-sm flex items-center justify-center hover:bg-white/10 transition cursor-pointer">in</div>
               </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase mb-8 text-foreground opacity-50">Infrastructure</h4>
              <ul className="space-y-4 text-xs font-bold tracking-[0.1em] text-muted">
                {siteConfig.services.map(s => (
                  <li key={s.id}><Link href="/services" className="hover:text-accent transition-colors uppercase">{s.title}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold tracking-widest uppercase mb-8 text-foreground opacity-50">Operations</h4>
              <ul className="space-y-4 text-xs font-bold tracking-[0.1em] text-muted">
                <li><Link href="/about" className="hover:text-accent transition-colors uppercase">Philosophy</Link></li>
                <li><Link href="/case-studies" className="hover:text-accent transition-colors uppercase">Performance</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors uppercase">Intake</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
             <p className="text-[10px] text-muted/30 tracking-[0.3em] uppercase font-bold">© 2026 RRRTX SYSTEMS. ARCHITECTED FOR RESILIENCE.</p>
             <div className="flex gap-10 text-[10px] text-muted/30 tracking-[0.3em] uppercase font-bold">
                <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
                <Link href="/terms" className="hover:text-foreground">Terms</Link>
             </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import Link from "next/link";
