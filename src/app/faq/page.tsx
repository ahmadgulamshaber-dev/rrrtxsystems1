import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      q: "How long does a typical system implementation take?",
      a: "Our Tier 1 solutions (Lead Machine) go live in 5-7 business days. Complex Tier 2 Growth Engines typically require 3-4 weeks for full deployment and testing."
    },
    {
      q: "Do we need to replace our existing CRM or software stack?",
      a: "No. We engineer systems to sit on top of or integrate directly with your existing tools like HubSpot, Salesforce, or Airtable, ensuring a seamless data flow."
    },
    {
      q: "How do you handle system security and data privacy?",
      a: "Security is built into our architecture from day one. We use industry-standard encryption and secure API authentication, ensuring your client data never leaves your controlled environment."
    },
    {
      q: "What kind of support is provided post-deployment?",
      a: "All setup projects include 30 days of priority technical support. Our Fractional Partnership tier offers ongoing, unlimited refinements and 24/7 monitoring."
    }
  ];

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
           <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Inquiry Protocol</span>
           <h1 className="text-5xl md:text-7xl font-bold font-heading mb-16 tracking-tighter">Operational Clarity</h1>
           
           <div className="space-y-16">
             {faqs.map((faq, i) => (
               <div key={i} className="border-l-2 border-accent pl-8 py-2">
                 <h3 className="text-2xl font-bold mb-6 font-heading">{faq.q}</h3>
                 <p className="text-lg text-muted leading-relaxed">{faq.a}</p>
               </div>
             ))}
           </div>

           <div className="mt-24 p-12 bg-surface border border-white/5">
              <h4 className="text-xl font-bold mb-4 font-heading">Still have technical questions?</h4>
              <p className="text-muted mb-8">Schedule a 15-minute technical audit with our lead architect to discuss your specific infrastructure needs.</p>
              <button className="px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-accent transition-all">
                 Schedule Audit
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
