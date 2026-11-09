import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Foundations"
          title="Academic Journey"
          subtitle="Educational milestones shaping analytical and computational problem-solving."
          alignment="center"
        />

        <div className="max-w-3xl mx-auto relative mt-12">
          {/* Vertical Timeline Center Connector Line */}
          <div className="absolute top-2 bottom-2 left-6 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-gold-500/80 via-gold-400 to-gold-500/20" />

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
                    <div className="w-9 h-9 rounded-full bg-navy-900 border-2 border-gold-400 flex items-center justify-center shadow-luxury">
                      <GraduationCap className="w-4 h-4 text-gold-300" />
                    </div>
                  </div>

                  {/* Card Content - Desktop alternates left and right */}
                  <div
                    className={`ml-14 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] ${
                      isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto sm:text-left'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gold-500/25 shadow-luxury hover:shadow-luxury-hover hover:border-gold-500/50 transition-all duration-300">
                      {/* Year Badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-gold-500/25 text-xs font-mono font-semibold text-navy-900 mb-3 ${
                          isEven ? 'sm:ml-auto' : ''
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-gold-600" />
                        <span>Year: {item.year}</span>
                        {item.isRecent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1" />
                        )}
                      </div>

                      {/* Institution Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-2">
                        {item.institution}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && (
                        <div className="space-y-1.5 pt-3 border-t border-gold-500/15">
                          {item.highlights.map((hl, hIdx) => (
                            <div
                              key={hIdx}
                              className={`flex items-center gap-2 text-xs text-charcoal/80 ${
                                isEven ? 'sm:justify-end' : 'sm:justify-start'
                              }`}
                            >
                              <BookOpen className="w-3 h-3 text-gold-600 flex-shrink-0" />
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/70 border border-gold-500/20 text-[11px] font-mono text-charcoal/60">
              <Sparkles className="w-3 h-3 text-gold-500" />
              <span>Academic Progression</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
