import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Our Identity</span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-10 tracking-tighter text-foreground">
              Architecture for <br /> the <span className="text-muted">Future.</span>
            </h1>
            <p className="text-xl text-muted leading-relaxed mb-8">
              RRRTX Systems was founded on the principle that business efficiency shouldn't be a luxury. We build the high-performance plumbing that allows modern companies to breathe and grow.
            </p>
            <p className="text-lg text-muted/80 leading-relaxed mb-12">
              Our team consists of systems architects, AI engineers, and workflow designers dedicated to one goal: eradicating operational friction through technical excellence.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-foreground mb-2">Technical Rigor</h4>
                <p className="text-sm text-muted">We don't just use tools; we engineer solutions that last years, not weeks.</p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-foreground mb-2">Client ROI</h4>
                <p className="text-sm text-muted">Every system we build is measured by its impact on your bottom line.</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square bg-surface border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full scale-75" />
                <div className="text-9xl font-bold font-heading text-white/5 select-none">RRRTX</div>
                <div className="relative z-10 text-center">
                   <div className="text-6xl font-bold font-heading mb-4 tracking-tighter">Nexus R</div>
                   <p className="text-xs tracking-[0.4em] uppercase text-accent font-bold">Standard of Excellence</p>
                </div>
             </div>
             
             {/* Abstract Floating UI elements */}
             <div className="absolute -top-10 -right-10 p-6 bg-background border border-accent/20 rounded-sm shadow-2xl animate-bounce duration-[4000ms]">
                <div className="w-12 h-1 bg-accent mb-2" />
                <div className="w-8 h-1 bg-muted/20" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
