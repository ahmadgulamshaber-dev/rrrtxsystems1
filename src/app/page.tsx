import Hero from "@/components/sections/Hero";
import EcosystemRail from "@/components/sections/EcosystemRail";
import IntakeTerminal from "@/components/sections/IntakeTerminal";
import { siteConfig } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <EcosystemRail />
      
      {/* Transformation Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 max-w-2xl">
            <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Capabilities</span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter mb-8">
              Technical infrastructure <br /><span className="text-muted">reimagined.</span>
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              We don't just "automate"—we engineer the plumbing that allows your business to scale without adding head-count.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {siteConfig.services.map((service, i) => (
              <div key={i} className="p-12 bg-surface border border-white/5 hover:border-accent/30 transition-all group">
                <div className="mb-10 text-xs font-bold tracking-widest text-accent uppercase">Protocol 0{i+1}</div>
                <h3 className="text-2xl font-bold font-heading mb-6">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-10 min-h-[60px]">{service.problem}</p>
                <ul className="space-y-3 mb-12">
                   {service.deliverables.map((item, j) => (
                     <li key={j} className="text-[11px] uppercase tracking-widest text-foreground/50 flex gap-2">
                       <span className="text-accent">◈</span> {item}
                     </li>
                   ))}
                </ul>
                <Link href="/contact" className="text-xs font-bold tracking-[0.2em] uppercase group-hover:text-accent transition-colors">
                  {service.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-32 px-6 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-xl">
               <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Performance Reports</span>
               <h2 className="text-4xl md:text-6xl font-bold font-heading tracking-tighter">Measureable <br /><span className="text-muted">Outcomes.</span></h2>
             </div>
             <Link href="/case-studies" className="px-8 py-4 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
               View Full Repository
             </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.caseStudies.map((cs, i) => (
              <div key={i} className="bg-background border border-white/5 p-12 hover:border-accent/20 transition-all">
                <div className="flex justify-between mb-12">
                   <span className="text-[10px] tracking-[0.2em] font-bold text-muted uppercase">{cs.client}</span>
                   <span className="text-2xl font-bold text-accent">{cs.outcome}</span>
                </div>
                <h3 className="text-3xl font-bold font-heading mb-6 tracking-tight">{cs.title}</h3>
                <p className="text-muted mb-10">{cs.summary}</p>
                <div className="flex gap-4">
                   {cs.techStack.map((tech, j) => (
                     <span key={j} className="text-[10px] px-3 py-1 border border-white/5 text-muted uppercase tracking-widest bg-white/5">
                        {tech}
                     </span>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IntakeTerminal />
    </>
  );
}
