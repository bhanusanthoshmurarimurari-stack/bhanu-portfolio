import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Monogram } from '../common/Monogram';
import { personalInfo } from '../../data/portfolioData';

interface FooterProps {
  onScrollTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 text-ivory border-t border-gold-500/25 pt-16 pb-12 overflow-hidden">
      {/* Subtle luxury glow accent in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gold-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10 items-center">
          {/* Identity & Monogram */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Monogram size="lg" variant="dark" withRing={true} />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-white">
                {personalInfo.name}
              </h3>
              <p className="text-gold-400 text-xs sm:text-sm tracking-widest uppercase font-medium mt-0.5">
                {personalInfo.title}
              </p>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3 sm:gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/60 hover:bg-gold-500/10 text-ivory/80 hover:text-gold-400 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/60 hover:bg-gold-500/10 text-ivory/80 hover:text-gold-400 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-gold-500/60 hover:bg-gold-500/10 text-ivory/80 hover:text-gold-400 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={onScrollTop}
              className="ml-2 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/40 text-gold-300 hover:text-gold-200 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Bottom: Statement & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p className="font-serif italic text-sm text-gold-300/90 tracking-wide">
            "Designed with creativity. Built with code."
          </p>
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
