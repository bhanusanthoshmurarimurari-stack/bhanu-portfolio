import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code2, Terminal, Sparkles, Copy, Check } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { GoldButton } from '../common/GoldButton';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onCopyEmail }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'stack'>('profile');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const codeSnippet = `const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  stack: {
    frontend: ["React.js", "JavaScript", "HTML/CSS"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB", "SQL"]
  },
  mission: "Building scalable & impactful digital experiences"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden editorial-paper">
      {/* Decorative architectural background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FFA2B6]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFA2B6]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle watermark typography in background */}
      <div className="absolute right-4 top-1/3 -translate-y-1/2 select-none pointer-events-none opacity-[0.04] hidden xl:block font-serif text-[180px] font-bold tracking-widest text-[#E43D12] leading-none">
        MURARI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Typography & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Professional Availability Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FFA2B6]/30 border border-[#E43D12]/30 text-xs font-semibold text-[#242424] shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EFB11D] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E43D12]" />
              </span>
              <span className="tracking-wider uppercase text-[11px] font-semibold text-[#242424]">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Designation Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif italic text-[#D6536D] text-lg sm:text-xl font-medium tracking-wide mb-2"
            >
              {personalInfo.title}
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-medium tracking-tight text-[#242424] leading-[1.12] mb-6"
            >
              Building Digital <br className="hidden sm:inline" />
              <span className="relative inline-block">
                <span className="relative z-10 italic font-semibold text-[#E43D12]">Experiences</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#FFA2B6]/50 -rotate-1 rounded-sm -z-0" />
              </span>{' '}
              That Make an <span className="text-[#E43D12]">Impact</span>.
            </motion.h1>

            {/* Supporting Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base sm:text-lg text-[#242424]/80 font-normal leading-relaxed max-w-xl mb-8"
            >
              {personalInfo.heroIntro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <GoldButton
                variant="primary"
                size="lg"
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto shadow-luxury"
                icon={<ArrowDown className="w-4 h-4 text-[#EFB11D]" />}
              >
                View My Work
              </GoldButton>

              <GoldButton
                variant="outline"
                size="lg"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto bg-[#EBE9E1]/80 backdrop-blur-sm"
              >
                Let's Connect
              </GoldButton>
            </motion.div>

            {/* Social Links & Verified Identity Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 pt-4 border-t border-[#E43D12]/20 w-full max-w-lg"
            >
              <span className="text-xs uppercase tracking-widest font-semibold text-[#242424]/60">
                Connect Directly:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#FFA2B6]/25 hover:bg-[#E43D12]/15 border border-[#E43D12]/25 hover:border-[#E43D12] text-[#242424] hover:text-[#E43D12] transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#FFA2B6]/25 hover:bg-[#E43D12]/15 border border-[#E43D12]/25 hover:border-[#E43D12] text-[#242424] hover:text-[#E43D12] transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={onCopyEmail}
                  className="p-2.5 rounded-lg bg-[#FFA2B6]/25 hover:bg-[#E43D12]/15 border border-[#E43D12]/25 hover:border-[#E43D12] text-[#242424] hover:text-[#E43D12] transition-all duration-200 hover:-translate-y-0.5"
                  aria-label="Copy Email Address"
                  title="Copy muraribhanusanthosh@gmail.com"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Abstract Developer Visual Installation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient luxury geometry around visual element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-[#E43D12]/25 -z-10 animate-float-slow" />
            <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-dashed border-[#EFB11D]/35 -z-10" />

            {/* Floating Top Badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:-left-6 z-20 px-3.5 py-2 rounded-xl bg-[#EBE9E1]/95 backdrop-blur-md border border-[#E43D12]/35 shadow-luxury flex items-center gap-2.5"
            >
              <div className="w-2 h-2 rounded-full bg-[#E43D12]" />
              <span className="font-mono text-xs font-semibold text-[#242424]">
                React • Node.js • REST
              </span>
            </motion.div>

            {/* Developer Code Window Card */}
            <div className="relative rounded-2xl bg-[#242424] border border-[#E43D12]/35 shadow-luxury-hover overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E43D12] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#EFB11D] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFA2B6] inline-block" />
                  <span className="ml-3 font-mono text-[11px] text-white/60 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-[#EFB11D]" />
                    developer-spec.ts
                  </span>
                </div>
                
                {/* Window Actions */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={handleCopyCode}
                    className="p-1 rounded text-white/60 hover:text-[#EFB11D] hover:bg-white/10 transition-colors"
                    title="Copy code"
                    aria-label="Copy snippet"
                  >
                    {copiedSnippet ? (
                      <Check className="w-3.5 h-3.5 text-[#EFB11D]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Code Tab Switcher */}
              <div className="flex items-center px-4 bg-[#202020] border-b border-white/5 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`py-2 px-3 border-b-2 font-medium transition-colors ${
                    activeTab === 'profile'
                      ? 'border-[#E43D12] text-[#EFB11D] bg-white/5'
                      : 'border-transparent text-white/50 hover:text-white/80'
                  }`}
                >
                  DeveloperProfile.ts
                </button>
                <button
                  onClick={() => setActiveTab('stack')}
                  className={`py-2 px-3 border-b-2 font-medium transition-colors ${
                    activeTab === 'stack'
                      ? 'border-[#E43D12] text-[#EFB11D] bg-white/5'
                      : 'border-transparent text-white/50 hover:text-white/80'
                  }`}
                >
                  Architecture.config
                </button>
              </div>

              {/* Window Body: Syntax Highlighted Code */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#EBE9E1] select-text">
                {activeTab === 'profile' ? (
                  <pre className="space-y-1">
                    <div>
                      <span className="text-[#FFA2B6]">export const</span>{' '}
                      <span className="text-[#EFB11D]">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-[#FFA2B6]">name</span>:{' '}
                      <span className="text-[#EBE9E1]">"{personalInfo.name}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#FFA2B6]">title</span>:{' '}
                      <span className="text-[#EBE9E1]">"{personalInfo.title}"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#FFA2B6]">stack</span>: &#123;
                    </div>
                    <div className="pl-8 text-white/80">
                      <span className="text-[#EFB11D]">frontend</span>: [
                      <span className="text-[#EBE9E1]">"React"</span>,{' '}
                      <span className="text-[#EBE9E1]">"JavaScript"</span>,{' '}
                      <span className="text-[#EBE9E1]">"HTML/CSS"</span>],
                    </div>
                    <div className="pl-8 text-white/80">
                      <span className="text-[#EFB11D]">backend</span>: [
                      <span className="text-[#EBE9E1]">"Node.js"</span>,{' '}
                      <span className="text-[#EBE9E1]">"Express.js"</span>,{' '}
                      <span className="text-[#EBE9E1]">"REST APIs"</span>],
                    </div>
                    <div className="pl-8 text-white/80">
                      <span className="text-[#EFB11D]">database</span>: [
                      <span className="text-[#EBE9E1]">"MongoDB"</span>,{' '}
                      <span className="text-[#EBE9E1]">"SQL"</span>]
                    </div>
                    <div className="pl-4">&#125;,</div>
                    <div className="pl-4">
                      <span className="text-[#FFA2B6]">focus</span>:{' '}
                      <span className="text-[#E43D12]">"Scalable & Intuitive Systems"</span>
                    </div>
                    <div>&#125;;</div>
                  </pre>
                ) : (
                  <pre className="space-y-1">
                    <div>
                      <span className="text-[#FFA2B6]">export default</span> &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-[#FFA2B6]">approach</span>:{' '}
                      <span className="text-[#EBE9E1]">"Clean Architecture & Performance"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#FFA2B6]">methodology</span>: [
                    </div>
                    <div className="pl-8 text-[#EBE9E1]">"Modular Component Design",</div>
                    <div className="pl-8 text-[#EBE9E1]">"Type-Safe Contract Definitions",</div>
                    <div className="pl-8 text-[#EBE9E1]">"Optimized Database Queries"</div>
                    <div className="pl-4">],</div>
                    <div className="pl-4">
                      <span className="text-[#FFA2B6]">status</span>:{' '}
                      <span className="text-[#EFB11D]">"Ready for Production"</span>
                    </div>
                    <div>&#125;;</div>
                  </pre>
                )}
              </div>

              {/* Status footer bar inside code window */}
              <div className="px-5 py-2.5 bg-[#181818] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                <span className="flex items-center gap-1.5 text-[#EFB11D]">
                  <Sparkles className="w-3 h-3" />
                  UTF-8 • TypeScript 5
                </span>
                <span className="text-white/40">Clean Code Standard</span>
              </div>
            </div>

            {/* Floating Bottom-Right Metric / Architecture Badge */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -right-4 sm:-right-6 z-20 px-4 py-3 rounded-xl bg-[#EBE9E1]/95 backdrop-blur-md border border-[#EFB11D]/40 shadow-luxury max-w-[210px]"
            >
              <div className="flex items-center gap-2 mb-1">
                <Code2 className="w-4 h-4 text-[#E43D12]" />
                <span className="font-serif font-bold text-xs text-[#242424]">
                  Engineering Mindset
                </span>
              </div>
              <p className="text-[11px] text-[#242424]/75 leading-tight">
                Combining creative design with scalable back-end logic.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
