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
    <footer className="relative bg-[#D6536D] text-white border-t border-[#FFA2B6]/40 pt-16 pb-12 overflow-hidden">
      {/* Subtle luxury glow accent in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#FFA2B6]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/20 items-center">
          {/* Identity & Monogram */}
          <div className="md:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Monogram size="lg" variant="dark" withRing={true} />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-white">
                {personalInfo.name}
              </h3>
              <p className="text-[#EFB11D] text-xs sm:text-sm tracking-widest uppercase font-semibold mt-0.5">
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
              className="p-3 rounded-xl bg-white/10 border border-white/20 hover:border-[#EFB11D] hover:bg-[#FFA2B6]/20 text-white hover:text-[#EFB11D] transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-white/10 border border-white/20 hover:border-[#EFB11D] hover:bg-[#FFA2B6]/20 text-white hover:text-[#EFB11D] transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-3 rounded-xl bg-white/10 border border-white/20 hover:border-[#EFB11D] hover:bg-[#FFA2B6]/20 text-white hover:text-[#EFB11D] transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>

            <button
              onClick={onScrollTop}
              className="ml-2 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#EFB11D] hover:bg-[#D49911] border border-[#FFA2B6]/50 text-[#242424] text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#242424]" />
            </button>
          </div>
        </div>

        {/* Footer Bottom: Statement & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <p className="font-serif italic text-sm text-[#EFB11D] tracking-wide font-medium">
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
