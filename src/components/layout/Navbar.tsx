import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Monogram } from '../common/Monogram';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/90 backdrop-blur-md py-3.5 shadow-sm border-b border-gold-500/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand: Monogram + Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Bhanu Santhosh Murari Home"
          >
            <Monogram size="md" variant="dark" />
            <div className="flex flex-col">
              <span className="font-serif tracking-wider font-semibold text-sm sm:text-base text-navy-900 group-hover:text-gold-600 transition-colors">
                BHANU SANTHOSH
              </span>
              <span className="text-[10px] uppercase tracking-widest font-medium text-charcoal/60">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div className="flex items-center bg-cream/50 px-2 py-1.5 rounded-full border border-gold-500/15">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-navy-950 font-bold'
                        : 'text-charcoal/70 hover:text-navy-900 hover:bg-gold-500/10'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-white shadow-sm border border-gold-500/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Let's Talk CTA button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-navy-900 hover:bg-navy-800 text-ivory border border-gold-500/40 hover:border-gold-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex sm:hidden items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-navy-900 text-ivory border border-gold-500/40"
            >
              Talk
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cream/70 text-navy-900 border border-gold-500/25 hover:bg-gold-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500/40"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ivory/95 backdrop-blur-lg border-b border-gold-500/25 px-6 py-6 shadow-luxury overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-cream text-navy-900 border-l-4 border-gold-500'
                        : 'text-charcoal/80 hover:bg-cream/50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-gold-500 text-xs">→</span>
                  </a>
                );
              })}
              <div className="pt-3 border-t border-gold-500/20">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 shadow-luxury transition-all"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
