import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <Link href="/services" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Services</Link>
          <Link href="/process" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Process</Link>
          <Link href="/case-studies" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Case Studies</Link>
          <Link href="/about" className="text-sm font-medium text-muted hover:text-foreground transition-colors">About</Link>
        </div>

        <Link 
          href="/contact" 
          className="px-6 py-2.5 bg-foreground text-background text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-accent transition-all"
        >
          Request Audit
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
