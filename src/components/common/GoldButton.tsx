import React from 'react';
import { motion } from 'framer-motion';

interface GoldButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  external?: boolean;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
  external = false
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider',
    md: 'px-6 py-2.5 text-sm tracking-wide',
    lg: 'px-8 py-3.5 text-base tracking-wide font-medium'
  };

  const variantStyles = {
    primary:
      'bg-[#E43D12] hover:bg-[#CA340D] text-white font-semibold shadow-luxury hover:shadow-luxury-hover border border-[#EFB11D]/40 hover:border-[#EFB11D] active:scale-[0.98]',
    secondary:
      'bg-[#EFB11D] hover:bg-[#D49911] text-[#242424] font-semibold shadow-luxury hover:shadow-luxury-hover border border-[#E43D12]/30 hover:border-[#E43D12]/60 active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-[#FFA2B6]/30 text-[#242424] font-semibold border border-[#E43D12]/60 hover:border-[#E43D12] hover:text-[#E43D12] active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-[#FFA2B6]/20 text-[#242424] font-medium border border-transparent hover:border-[#E43D12]/20 active:scale-[0.98]'
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E43D12]/40 focus:ring-offset-2 focus:ring-offset-[#EBE9E1] disabled:opacity-50 disabled:pointer-events-none select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
};
