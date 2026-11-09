import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/common/Toast';
import { CustomCursor } from './components/effects/CustomCursor';
import { Monogram } from './components/common/Monogram';
import { personalInfo } from './data/portfolioData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Initial luxury load animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - offset;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage(message);
    setToastType(type);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast(`Copied ${personalInfo.email} to clipboard!`, 'success');
  };

  return (
    <div className="relative min-h-screen bg-ivory text-charcoal font-sans selection:bg-gold-500/25 selection:text-navy-950">
      {/* Subtle luxury custom cursor */}
      <CustomCursor />

      {/* Luxury Page Load Intro Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <Monogram size="xl" variant="dark" withRing={true} />
              <div className="text-center">
                <span className="font-serif tracking-widest text-lg font-semibold text-navy-900 block">
                  {personalInfo.name}
                </span>
                <span className="text-[11px] uppercase tracking-widest text-gold-700 font-medium block mt-1">
                  {personalInfo.title}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Portfolio Layout */}
      <div className="flex flex-col min-h-screen">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        <main className="flex-1">
          <Hero onNavigate={handleNavigate} onCopyEmail={handleCopyEmail} />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact onShowToast={showToast} />
        </main>

        <Footer onScrollTop={handleScrollTop} />
      </div>

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
