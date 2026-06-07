import React from 'react';

const TermsPage = () => {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold font-heading mb-12 tracking-tighter">System Terms</h1>
        <div className="prose prose-invert text-muted leading-relaxed space-y-8">
           <p>By engaging RRRTX Systems, you agree to the following operational framework and legal standards.</p>
           
           <h2 className="text-2xl font-bold text-foreground font-heading">1. Scope of Work</h2>
           <p>All projects are governed by a specific Technical Blueprint (SOW) delivered during the architecture phase. Changes to this blueprint after sign-off may result in adjustments to the project timeline and cost.</p>

           <h2 className="text-2xl font-bold text-foreground font-heading">2. Intellectual Property</h2>
           <p>Upon final payment, the client retains full ownership of the specific automation workflows and system implementations created for their business. RRRTX Systems retains ownership of its proprietary base code and architectural frameworks.</p>

           <h2 className="text-2xl font-bold text-foreground font-heading">3. Liability</h2>
           <p>RRRTX Systems is not liable for data loss or service interruptions caused by third-party tool failures (e.g., outages at OpenAI, Make.com, or HubSpot). We engineer redundancy, but cannot control global infrastructure.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
