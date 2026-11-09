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
    dark: 'bg-[#E43D12] text-white border-[#EFB11D]/50 shadow-luxury',
    light: 'bg-[#EBE9E1] text-[#242424] border-[#E43D12]/30 shadow-card-soft',
    gold: 'bg-[#EFB11D] text-[#242424] border-[#E43D12]/40 shadow-gold-glow'
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${sizeMap[size]} ${bgStyles[variant]} ${className}`}
      aria-label="Bhanu Santhosh Murari Monogram Logo"
    >
      {withRing && (
        <span className="absolute inset-0.5 rounded-[10px] border border-[#EFB11D]/30 pointer-events-none" />
      )}
      <div className="font-serif font-bold tracking-tight select-none flex items-center justify-center">
        <span>B</span>
        <span className={`ml-0.5 ${variant === 'dark' ? 'text-[#EFB11D]' : 'text-[#E43D12]'}`}>S</span>
      </div>
      {/* Decorative pinpoint dot */}
      <span className={`absolute top-1 right-1 w-1 h-1 rounded-full ${variant === 'dark' ? 'bg-[#EFB11D]' : 'bg-[#E43D12]'} opacity-90`} />
    </div>
  );
};
