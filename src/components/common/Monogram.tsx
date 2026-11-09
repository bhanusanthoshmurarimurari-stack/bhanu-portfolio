import React from 'react';

interface MonogramProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
  withRing?: boolean;
}

export const Monogram: React.FC<MonogramProps> = ({
  size = 'md',
  variant = 'dark',
  className = '',
  withRing = true
}) => {
  const sizeMap = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-20 h-20 text-2xl'
  };

  const bgStyles = {
    dark: 'bg-navy-900 text-ivory border-gold-500/40 shadow-luxury',
    light: 'bg-white text-navy-900 border-gold-500/30 shadow-card-soft',
    gold: 'bg-gold-500 text-navy-950 border-gold-300 shadow-gold-glow'
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${sizeMap[size]} ${bgStyles[variant]} ${className}`}
      aria-label="Bhanu Santhosh Murari Monogram Logo"
    >
      {withRing && (
        <span className="absolute inset-0.5 rounded-[10px] border border-gold-500/25 pointer-events-none" />
      )}
      <div className="font-serif font-bold tracking-tight select-none flex items-center justify-center">
        <span>B</span>
        <span className="text-gold-500 ml-0.5">S</span>
      </div>
      {/* Decorative luxury pinpoint dot */}
      <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-gold-400 opacity-80" />
    </div>
  );
};
