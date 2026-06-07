"use client";

import React from 'react';
import { siteConfig } from '@/lib/data';

const EcosystemRail = () => {
  return (
    <section className="py-24 bg-background border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <p className="text-center text-[10px] tracking-[0.4em] uppercase text-muted font-bold opacity-60">
          Architected for the global technical ecosystem
        </p>
      </div>
      
      <div className="relative flex pointer-events-none select-none">
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...siteConfig.trustStack, ...siteConfig.trustStack, ...siteConfig.trustStack].map((item, index) => (
            <div key={index} className="mx-16 flex flex-col items-center">
               <span className="text-2xl font-bold tracking-tighter text-foreground/30 hover:text-foreground transition-all duration-700 font-heading">
                 {item.name}
               </span>
               <span className="text-[8px] tracking-[0.2em] uppercase text-muted mt-2">
                 {item.category}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemRail;
