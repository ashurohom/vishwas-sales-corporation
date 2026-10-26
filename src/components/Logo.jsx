import React from 'react';

export default function Logo({ size = 'normal', light = false, className = '', imgClassName = '' }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  const defaultHeight = isLarge 
    ? 'h-18 sm:h-20' 
    : isSmall 
    ? 'h-9' 
    : 'h-12 sm:h-14';

  const logoSrc = light ? '/vishwas-logo-light.png' : '/vishwas-logo-transparent.png';

  return (
    <div className={`flex items-center shrink-0 group ${className}`}>
      <img
        src={logoSrc}
        alt="Vishwas Sales Corporation"
        className={`${imgClassName || defaultHeight} w-auto object-contain select-none transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
}
