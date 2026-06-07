import React from 'react';
import Link from 'next/link';

const ServicesPage = () => {
  const tiers = [
    {
      name: "Lead Machine",
      id: "lead-machine",
      price: "1,997",
      type: "One-time Setup",
      description: "A precision-engineered lead response system that converts traffic into revenue in under 60 seconds.",
      features: [
        "Instant SMS Text-back",
        "AI Qualification Logic",
        "14-Day Omni-channel Follow-up",
        "CRM Integration (HubSpot/Salesforce)",
        "Live Performance Dashboard"
      ],
      target: "Home Services, Real Estate, E-commerce"
    },
    {
      name: "Growth Engine",
      id: "growth-engine",
      price: "4,997",
      type: "Systems Integration",
      description: "A complete operational overhaul that synchronizes your departments through intelligent automation.",
      features: [
        "Everything in Lead Machine",
        "Automated Client Portals",
        "Inventory/Project Management Sync",
        "AI Content & Reporting Engine",
        "Staff Workflow Optimization"
      ],
      target: "Teams with 5-20 Employees"
    },
    {
      name: "Fractional Partnership",
      id: "fractional",
      price: "2,500",
      type: "Monthly Retainer",
      description: "Strategic technical direction and ongoing systems optimization for companies built to scale.",
      features: [
        "Priority Architecture Support",
        "Monthly System Audits",
        "Custom Agent Development",
        "Integration Maintenance",
        "Unlimited Workflow Refinement"
      ],
      target: "Established Enterprise Operations"
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Our Solutions</span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter mb-8">System Tiers</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Select the infrastructure tier that matches your current operational scale. Each solution is built for long-term resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div key={tier.id} className="bg-surface border border-white/5 p-10 flex flex-col justify-between group hover:border-accent/30 transition-all">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-bold text-muted uppercase mb-4 block">{tier.type}</span>
                <h3 className="text-3xl font-bold font-heading mb-6">{tier.name}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8">{tier.description}</p>
                
                <div className="mb-10">
                   <div className="text-xs font-bold text-foreground mb-4 uppercase tracking-widest">Inclusions</div>
                   <ul className="space-y-4">
                     {tier.features.map((feature, i) => (
                       <li key={i} className="text-sm text-muted flex gap-3">
                         <span className="text-accent">◈</span> {feature}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div>
                <div className="mb-8 pt-8 border-t border-white/5">
                   <span className="text-xs text-muted uppercase tracking-widest">Starting at</span>
                   <div className="text-4xl font-bold font-heading mt-2">${tier.price}</div>
                </div>
                <Link 
                  href={`/contact?service=${tier.id}`} 
                  className="w-full py-4 bg-foreground text-background font-bold uppercase tracking-widest rounded-sm text-center block hover:bg-accent transition-all"
                >
                  Select Tier
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
