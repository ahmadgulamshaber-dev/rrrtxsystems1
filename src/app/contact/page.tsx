"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    bottleneck: '',
    revenue: '',
    budget: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] tracking-[0.3em] font-bold text-accent uppercase mb-6 block">Inquiry Terminal</span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-10 tracking-tighter text-foreground">
                Initiate System <span className="text-muted">Audit.</span>
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-12 max-w-md">
                Complete the technical inquiry below. Our systems architects will review your infrastructure and respond within 24 business hours.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-4">Direct Contact</h4>
                  <p className="text-muted">systems@rrrtx.ai</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-4">Headquarters</h4>
                  <p className="text-muted">Chiniot, Pakistan (Global Sync)</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface border border-white/5 p-8 md:p-12 rounded-sm"
          >
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Full Name</label>
                  <input 
                    name="name" 
                    onChange={handleChange}
                    className="w-full bg-background border border-white/5 px-4 py-4 focus:border-accent outline-none transition-all text-foreground" 
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Business Email</label>
                  <input 
                    name="email" 
                    onChange={handleChange}
                    className="w-full bg-background border border-white/5 px-4 py-4 focus:border-accent outline-none transition-all text-foreground" 
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Primary System Bottleneck</label>
                <select 
                  name="bottleneck" 
                  onChange={handleChange}
                  className="w-full bg-background border border-white/5 px-4 py-4 focus:border-accent outline-none transition-all text-foreground appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="lead-response">Lead Response Latency</option>
                  <option value="manual-workflows">Manual Workflow Friction</option>
                  <option value="data-fragmentation">Data Fragmentation</option>
                  <option value="scaling">Scale Inefficiency</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Monthly Revenue</label>
                  <select 
                    name="revenue" 
                    onChange={handleChange}
                    className="w-full bg-background border border-white/5 px-4 py-4 focus:border-accent outline-none transition-all text-foreground appearance-none"
                  >
                    <option value="">Select range</option>
                    <option value="10k-50k">$10k - $50k</option>
                    <option value="50k-250k">$50k - $250k</option>
                    <option value="250k+">$250k+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-muted">Project Budget</label>
                  <select 
                    name="budget" 
                    onChange={handleChange}
                    className="w-full bg-background border border-white/5 px-4 py-4 focus:border-accent outline-none transition-all text-foreground appearance-none"
                  >
                    <option value="">Select budget</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k+">$25k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-muted">System Details</label>
                <textarea 
                  name="details" 
                  rows={4}
                  onChange={handleChange}
                  className="w-full bg-background border border-white/5 px-4 py-4 focus:border-accent outline-none transition-all text-foreground resize-none" 
                  placeholder="Describe your current infrastructure and requirements"
                />
              </div>

              <button className="w-full py-6 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-accent transition-all">
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
