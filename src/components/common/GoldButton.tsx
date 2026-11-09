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
      'bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold shadow-luxury hover:shadow-luxury-hover border border-gold-300/40 hover:border-gold-300 active:scale-[0.98]',
    secondary:
      'bg-navy-900 hover:bg-navy-800 text-ivory font-medium shadow-luxury hover:shadow-luxury-hover border border-gold-500/30 hover:border-gold-500/60 active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-cream/60 text-navy-900 font-medium border border-gold-500/50 hover:border-gold-500 hover:text-navy-950 active:scale-[0.98]',
    ghost:
      'bg-transparent hover:bg-gold-500/10 text-navy-900 font-medium border border-transparent hover:border-gold-500/20 active:scale-[0.98]'
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-200 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:ring-offset-2 focus:ring-offset-ivory disabled:opacity-50 disabled:pointer-events-none select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

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
