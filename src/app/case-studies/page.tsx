import React from 'react';
import Link from 'next/link';

const CaseStudiesPage = () => {
  const cases = [
    {
      title: "Real Estate Lead Accelerator",
      client: "Skyline Properties",
      result: "420% ROI",
      summary: "Implemented a zero-latency AI response system that handled 100% of initial lead qualification, saving 15 hours per week for agents.",
      tag: "AI Orchestration"
    },
    {
      title: "Logistics Workflow Overhaul",
      client: "TransLink Solutions",
      result: "85% Error Reduction",
      summary: "End-to-end automation of compliance documentation and route optimization, eliminating human error in data entry.",
      tag: "Workflow Engineering"
    },
    {
      title: "E-com Retention System",
      client: "Nova Retail",
      result: "32% Revenue Increase",
      summary: "Built a custom predictive analytics dashboard and automated win-back sequences that recovered lost carts automatically.",
      tag: "Custom Dashboards"
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Case Studies</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">Performance Reports</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Data-driven proof of how our systems transform business operations into measurable revenue.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((cs, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="grid md:grid-cols-12 items-center gap-12 bg-surface border border-white/5 p-8 md:p-16 hover:border-accent/30 transition-all">
                <div className="md:col-span-8">
                  <span className="text-[10px] tracking-[0.2em] font-bold text-accent uppercase mb-4 block">{cs.tag}</span>
                  <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tighter">{cs.title}</h3>
                  <p className="text-lg text-muted leading-relaxed max-w-xl">{cs.summary}</p>
                </div>
                <div className="md:col-span-4 text-right">
                   <div className="text-xs text-muted uppercase tracking-widest mb-2">Metric Impact</div>
                   <div className="text-5xl md:text-7xl font-bold font-heading text-foreground mb-8">{cs.result}</div>
                   <Link href="/contact" className="px-8 py-4 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all inline-block">
                     View Technical Details
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
