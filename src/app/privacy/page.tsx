import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="pt-40 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold font-heading mb-12 tracking-tighter">Privacy Protocol</h1>
        <div className="prose prose-invert text-muted leading-relaxed space-y-8">
           <p>This Privacy Protocol outlines how RRRTX Systems ("we," "our," or "us") handles data within our operational ecosystem. We are committed to the highest standards of data integrity and client confidentiality.</p>
           
           <h2 className="text-2xl font-bold text-foreground font-heading">1. Data Collection</h2>
           <p>We collect only the technical data necessary to architect and optimize your business systems. This includes infrastructure specifications, API credentials (handled securely), and operational metadata provided during the audit phase.</p>

           <h2 className="text-2xl font-bold text-foreground font-heading">2. Data Usage</h2>
           <p>Information is used exclusively for the engineering, deployment, and monitoring of your specific automation solutions. We do not sell, trade, or share your operational data with third parties for marketing purposes.</p>

           <h2 className="text-2xl font-bold text-foreground font-heading">3. Technical Security</h2>
           <p>All system architectures employ multi-factor authentication, secure API tunneling, and encrypted data storage to prevent unauthorized access to your business intelligence.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
