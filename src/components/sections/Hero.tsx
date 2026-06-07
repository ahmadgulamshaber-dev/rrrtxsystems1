"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      {/* Background Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] tracking-[0.2em] font-bold text-muted uppercase">
              Operational Intelligence for Scale
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-tighter mb-8 font-heading text-foreground">
            Engineered <br />
            <span className="text-muted">Intelligence.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-2xl mb-12 font-light">
            We design, build, and deploy custom automation infrastructure that replaces manual friction with scalable precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-foreground text-background text-base font-bold uppercase tracking-widest rounded-sm hover:bg-accent transition-all text-center"
            >
              Request System Audit
            </Link>
            <Link 
              href="/case-studies" 
              className="px-10 py-5 border border-white/10 text-foreground text-base font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all text-center"
            >
              View Performance Reports
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </section>
  );
};

export default Hero;
