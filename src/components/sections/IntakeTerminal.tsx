"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IntakeTerminal = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
        <div>
          <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Communication Protocol</span>
          <h2 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tighter">
            Initiate <br /><span className="text-muted">System Audit.</span>
          </h2>
          <p className="text-xl text-muted leading-relaxed mb-12 max-w-md">
            Our systems architects review every inquiry within 24 business hours. Please provide precise technical context for the most efficient response.
          </p>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-4 opacity-50">Technical Inquiries</h4>
              <p className="text-xl font-medium">systems@rrrtx.ai</p>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-4 opacity-50">Operational Sync</h4>
              <p className="text-xl font-medium">Global Delivery — Chiniot HQ</p>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-white/5 p-10 md:p-14 rounded-sm shadow-2xl relative overflow-hidden">
          {/* Subtle Scanning Effect */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/20 animate-scan pointer-events-none" />
          
          <form className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">Full Name</label>
                <input className="w-full bg-background border-b border-white/10 px-0 py-3 focus:border-accent outline-none transition-all text-foreground" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">Organization</label>
                <input className="w-full bg-background border-b border-white/10 px-0 py-3 focus:border-accent outline-none transition-all text-foreground" placeholder="Company Inc." />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">Primary Technical Bottleneck</label>
              <select className="w-full bg-background border-b border-white/10 px-0 py-3 focus:border-accent outline-none transition-all text-foreground appearance-none">
                <option value="">Select Protocol</option>
                <option value="lead-gen">Lead Latency & Response</option>
                <option value="workflows">Manual Workflow Overhead</option>
                <option value="ai-agents">Custom AI Orchestration</option>
                <option value="audit">Infrastructure Diagnostic</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">Annual Revenue Range</label>
                <select className="w-full bg-background border-b border-white/10 px-0 py-3 focus:border-accent outline-none transition-all text-foreground appearance-none">
                  <option value="">Range select</option>
                  <option value="500k-2m">$500k — $2M</option>
                  <option value="2m-10m">$2M — $10M</option>
                  <option value="10m+">$10M+</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">Implementation Budget</label>
                <select className="w-full bg-background border-b border-white/10 px-0 py-3 focus:border-accent outline-none transition-all text-foreground appearance-none">
                  <option value="">Budget select</option>
                  <option value="5k-15k">$5,000 — $15,000</option>
                  <option value="15k-50k">$15,000 — $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted">System Context</label>
              <textarea rows={3} className="w-full bg-background border-b border-white/10 px-0 py-3 focus:border-accent outline-none transition-all text-foreground resize-none" placeholder="Briefly describe your current technical stack and friction points." />
            </div>

            <button className="w-full py-6 bg-foreground text-background font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all group flex items-center justify-center gap-4">
              Transmit Inquiry <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IntakeTerminal;
