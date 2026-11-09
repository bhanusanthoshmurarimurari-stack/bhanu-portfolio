import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, Compass, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo, philosophyPillars } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Monogram } from '../common/Monogram';

export const About: React.FC = () => {
  const focusAreas = [
    'Intuitive User Interface Architecture',
    'Responsive Multi-Device Layouts',
    'RESTful API Endpoints & Route Handlers',
    'Database Schema Modeling & Queries',
    'Clean Code & Component Reusability',
    'Performance Optimization & Micro-Interactions'
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#EBE9E1] border-y border-[#FFA2B6]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Background & Craft"
          title="A Little About Me"
          subtitle="Combining computational fundamentals with modern interface engineering."
          alignment="center"
        />

        {/* Editorial Highlight Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-2xl bg-[#EBE9E1] border border-[#E43D12]/30 shadow-luxury relative"
        >
          {/* Subtle quote mark ornament */}
          <div className="absolute top-4 right-6 font-serif text-6xl text-[#FFA2B6]/60 select-none pointer-events-none">
            “
          </div>

          <p className="font-serif text-lg sm:text-2xl text-[#242424] font-medium leading-relaxed italic mb-6">
            "{personalInfo.aboutIntro}"
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E43D12]/20">
            <div className="flex items-center gap-3">
              <Monogram size="sm" variant="dark" />
              <div>
                <span className="block text-sm font-serif font-bold text-[#242424]">
                  {personalInfo.name}
                </span>
                <span className="block text-[11px] uppercase tracking-wider text-[#D6536D] font-semibold">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#E43D12] bg-[#FFA2B6]/30 px-3 py-1.5 rounded-full border border-[#E43D12]/25 font-semibold">
              <Terminal className="w-3.5 h-3.5 text-[#E43D12]" />
              <span>Full-Stack Mindset</span>
            </div>
          </div>
        </motion.div>

        {/* Asymmetrical Editorial Columns: Philosophy & Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Philosophy Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-[#E43D12] mb-4">
                <Compass className="w-4 h-4 text-[#E43D12]" />
                <span>Development Philosophy</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#242424] mb-6">
                Principles that shape every line of code.
              </h3>
            </div>

            <div className="space-y-4">
              {philosophyPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="group p-5 rounded-xl bg-[#EBE9E1] hover:bg-[#FFA2B6]/20 border border-[#E43D12]/20 hover:border-[#E43D12]/50 transition-all duration-300 shadow-card-soft hover:shadow-luxury"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif font-semibold text-[#E43D12] text-lg w-6 flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-base text-[#242424] group-hover:text-[#E43D12] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs uppercase tracking-wider text-[#D6536D] font-semibold mb-1.5">
                        {pillar.principle}
                      </p>
                      <p className="text-sm text-[#242424]/80 leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Focus Areas & Technical Approach (5 cols) in Rose Pink */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 p-7 rounded-2xl bg-[#D6536D] text-white border border-[#FFA2B6]/40 shadow-luxury flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-widest text-[#EFB11D] mb-4">
                <Layers className="w-4 h-4 text-[#EFB11D]" />
                <span>Areas of Technical Focus</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-4">
                Modern full-stack application lifecycle.
              </h3>
              <p className="text-sm text-white/90 leading-relaxed mb-6 font-normal">
                Dedicated to mastering both sides of modern web development: crafting expressive, accessible client experiences while orchestrating predictable, secure server routes.
              </p>

              <div className="space-y-3">
                {focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-2.5 rounded-lg bg-white/15 border border-white/20"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#EFB11D] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Approach badge */}
            <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <Cpu className="w-4 h-4 text-[#EFB11D]" />
                <span>Continuous Learner & Explorer</span>
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#EFB11D] font-bold">
                Evolving Stack
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
