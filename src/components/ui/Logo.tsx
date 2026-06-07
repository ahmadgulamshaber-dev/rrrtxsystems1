"use client";

import React from 'react';

type LogoProps = {
  variant?: 'primary' | 'icon' | 'wordmark' | 'horizontal';
  theme?: 'dark' | 'light' | 'monochrome';
  className?: string;
};

export const RRRTXLogo: React.FC<LogoProps> = ({ 
  variant = 'primary', 
  theme = 'dark', 
  className = "" 
}) => {
  const isLight = theme === 'light';
  const iconColor = isLight ? '#050505' : '#EDEDED';
  const textColor = isLight ? '#050505' : '#EDEDED';
  const accentColor = '#FAD000';

  const IconMark = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" rx="20" fill={isLight ? "#F5F5F5" : "#0F0F0F"} />
      
      <path d="M30 20V80" stroke={iconColor} strokeWidth="1" strokeOpacity="0.1" />
      <path d="M50 20V80" stroke={iconColor} strokeWidth="1" strokeOpacity="0.1" />
      <path d="M70 20V80" stroke={iconColor} strokeWidth="1" strokeOpacity="0.1" />

      {/* The Nexus R Structure */}
      <path d="M35 25V75" stroke={iconColor} strokeWidth="8" strokeLinecap="square" />
      {/* strokeLinejoin was fixed from "square" to "miter" below */}
      <path d="M35 25H55C65 25 70 30 70 40C70 50 65 55 55 55H35" stroke={iconColor} strokeWidth="8" strokeLinejoin="miter" />
      <path d="M50 55L70 75" stroke={accentColor} strokeWidth="8" strokeLinecap="square" />
    </svg>
  );

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {(variant === 'primary' || variant === 'icon' || variant === 'horizontal') && (
        <div className="w-10 h-10 flex-shrink-0">
          <IconMark />
        </div>
      )}
      
      {(variant === 'primary' || variant === 'wordmark' || variant === 'horizontal') && (
        <div className={`flex flex-col ${variant === 'horizontal' ? 'ml-2' : ''}`}>
          <span 
            className="text-xl font-bold tracking-[0.15em] leading-none font-heading uppercase"
            style={{ color: textColor }}
          >
            RRRTX
          </span>
          <span 
            className="text-[9px] tracking-[0.5em] leading-none mt-1 uppercase opacity-60 font-medium"
            style={{ color: textColor }}
          >
            Systems
          </span>
        </div>
      )}
    </div>
  );
};
