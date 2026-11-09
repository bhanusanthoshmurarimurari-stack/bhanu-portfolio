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
          ? 'bg-[#EBE9E1]/90 backdrop-blur-md py-3.5 shadow-sm border-b border-[#E43D12]/20'
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
              <span className="font-serif tracking-wider font-semibold text-sm sm:text-base text-[#242424] group-hover:text-[#E43D12] transition-colors">
                BHANU SANTHOSH
              </span>
              <span className="text-[10px] uppercase tracking-widest font-medium text-[#242424]/60">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <div className="flex items-center bg-[#FFA2B6]/25 px-2 py-1.5 rounded-full border border-[#E43D12]/20">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-[#242424]/80 hover:text-[#E43D12] hover:bg-[#FFA2B6]/30'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        className="absolute inset-0 rounded-full bg-[#E43D12] shadow-sm border border-[#EFB11D]/40"
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
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#E43D12] hover:bg-[#CA340D] text-white border border-[#EFB11D]/40 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#EFB11D]" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex sm:hidden items-center px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#E43D12] text-white border border-[#EFB11D]/40"
            >
              Talk
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#FFA2B6]/30 text-[#242424] border border-[#E43D12]/25 hover:bg-[#FFA2B6]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E43D12]/40"
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
            className="lg:hidden bg-[#EBE9E1]/98 backdrop-blur-lg border-b border-[#E43D12]/25 px-6 py-6 shadow-luxury overflow-hidden"
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
                        ? 'bg-[#FFA2B6]/30 text-[#E43D12] border-l-4 border-[#E43D12]'
                        : 'text-[#242424]/80 hover:bg-[#FFA2B6]/20'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-[#EFB11D] text-xs">→</span>
                  </a>
                );
              })}
              <div className="pt-3 border-t border-[#E43D12]/20">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-lg bg-[#E43D12] hover:bg-[#CA340D] text-white shadow-luxury transition-all"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 text-[#EFB11D]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
