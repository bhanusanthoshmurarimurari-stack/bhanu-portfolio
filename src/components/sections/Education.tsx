import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-[#EBE9E1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Foundations"
          title="Academic Journey"
          subtitle="Educational milestones shaping analytical and computational problem-solving."
          alignment="center"
        />

        <div className="max-w-3xl mx-auto relative mt-12">
          {/* Vertical Timeline Center Connector Line */}
          <div className="absolute top-2 bottom-2 left-6 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[#E43D12] via-[#EFB11D] to-[#D6536D]/30" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex flex-col sm:flex-row items-start"
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-1 z-20 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-[#E43D12] border-2 border-[#EFB11D] flex items-center justify-center shadow-luxury">
                      <GraduationCap className="w-4 h-4 text-[#EFB11D]" />
                    </div>
                  </div>

                  {/* Card Content - Desktop alternates left and right */}
                  <div
                    className={`ml-14 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] ${
                      isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#EBE9E1] border border-[#E43D12]/25 shadow-luxury hover:shadow-luxury-hover hover:border-[#E43D12]/60 transition-all duration-300">
                      {/* Year Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFA2B6]/30 border border-[#E43D12]/25 text-xs font-mono font-bold text-[#242424] mb-3 ${
                          isEven ? 'sm:ml-auto' : ''
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#E43D12]" />
                        <span>Year: {item.year}</span>
                        {item.isRecent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EFB11D] ml-1" />
                        )}
                      </div>

                      {/* Institution Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#242424] mb-2">
                        {item.institution}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#242424]/75 leading-relaxed font-normal mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="space-y-1.5 pt-3 border-t border-[#E43D12]/15">
                          {item.highlights.map((hl, hIdx) => (
                            <div
                              key={hIdx}
                              className={`flex items-center gap-2 text-xs text-[#242424]/90 ${
                                isEven ? 'sm:justify-end' : 'sm:justify-start'
                              }`}
                            >
                              <BookOpen className="w-3 h-3 text-[#E43D12] flex-shrink-0" />
                              <span>{hl}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline Bottom Cap */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFA2B6]/30 border border-[#E43D12]/25 text-[11px] font-mono text-[#242424]/70">
              <Sparkles className="w-3 h-3 text-[#EFB11D]" />
              <span>Academic Progression</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
