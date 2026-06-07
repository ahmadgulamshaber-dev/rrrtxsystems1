"use client";

import React from 'react';

const logos = [
  { name: 'Anthropic', url: 'https://cdn.worldvectorlogo.com/logos/anthropic-icon.svg' }, // Placeholders
  { name: 'Make', url: 'https://cdn.worldvectorlogo.com/logos/make-com.svg' },
  { name: 'Salesforce', url: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg' },
  { name: 'OpenAI', url: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
  { name: 'Google Cloud', url: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
  { name: 'HubSpot', url: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
  { name: 'Airtable', url: 'https://cdn.worldvectorlogo.com/logos/airtable.svg' },
];

const TrustRail = () => {
  return (
    <section className="py-24 bg-background overflow-hidden border-y border-white/5 relative">
      <div className="container mx-auto px-6 mb-16">
        <p className="text-center text-[10px] tracking-[0.4em] uppercase text-muted font-bold">
          Architected for the modern technical stack
        </p>
      </div>
      
      <div className="relative flex">
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-16 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
               {/* In a real project, use <Image /> with local SVGs */}
               <span className="text-xl font-bold tracking-tighter text-foreground/50">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
         <p className="text-xs text-muted/40 font-medium max-w-2xl mx-auto px-6">
           RRRTX Systems integrates seamlessly with the world’s leading automation, intelligence, and operations platforms.
         </p>
      </div>
    </section>
  );
};

export default TrustRail;
