import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Wrench, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-gold-600" />;
      case 'backend':
        return <Server className="w-5 h-5 text-gold-600" />;
      case 'database':
        return <Database className="w-5 h-5 text-gold-600" />;
      case 'programming':
        return <Terminal className="w-5 h-5 text-gold-600" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-gold-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-600" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Core Competencies"
          title="Technical Capabilities"
          subtitle="Curated full-stack foundations, structured cleanly into verified categories."
          alignment="center"
        />

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
              selectedCategory === 'all'
                ? 'bg-navy-900 text-ivory border-gold-500 shadow-sm'
                : 'bg-cream/60 hover:bg-cream text-charcoal/70 border-gold-500/20'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === cat.id
                  ? 'bg-navy-900 text-ivory border-gold-500 shadow-sm'
                  : 'bg-cream/60 hover:bg-cream text-charcoal/70 border-gold-500/20'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl bg-white border border-gold-500/25 p-7 shadow-luxury hover:shadow-luxury-hover hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-gold-500/15 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cream border border-gold-500/30">
                        {getCategoryIcon(category.id)}
                      </div>
                      <h3 className="font-serif font-bold text-lg text-navy-900">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-500/25">
                      {category.skills.length} Items
                    </span>
                  </div>

                  <p className="text-xs text-charcoal/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Badges List */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const isPlaceholderNotice = skill.name.includes('+ Add');
                      return (
                        <div
                          key={sIdx}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                            isPlaceholderNotice
                              ? 'border border-dashed border-gold-500/40 bg-gold-50/50 text-gold-800 italic hover:border-gold-500'
                              : 'bg-ivory border border-gold-500/25 hover:border-gold-500 text-navy-900 hover:bg-cream/60 hover:-translate-y-0.5 shadow-sm'
                          }`}
                        >
                          {!isPlaceholderNotice && (
                            <Check className="w-3 h-3 text-gold-600" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-8 pt-4 border-t border-gold-500/10 flex items-center justify-between text-[11px] text-charcoal/50">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-500" />
                    Verified Entry
                  </span>
                  <span className="italic font-serif">Editable initial entry</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ethical Transparency Note: No Invented Proficiency Percentages */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-cream/50 border border-gold-500/20 text-xs text-charcoal/70 flex items-center gap-3">
          <Info className="w-4 h-4 text-gold-600 flex-shrink-0" />
          <p>
            <span className="font-semibold text-navy-900">Professional Note:</span> Skills are categorized by verified foundation and practical experience without fabricated percentage bars or arbitrary proficiency levels. Configurable via <code className="text-navy-950 font-mono text-[11px] bg-white px-1.5 py-0.5 rounded border border-gold-500/30">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
};
