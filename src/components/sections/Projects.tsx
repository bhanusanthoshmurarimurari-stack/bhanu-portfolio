import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'React.js', 'Node.js', 'REST APIs', 'Full Stack Architecture'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(p => 
        p.technologies.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())) ||
        p.category.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#EBE9E1] border-b border-[#FFA2B6]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Portfolio Showcase"
          title="Selected Works"
          subtitle="A collection of ideas transformed into digital experiences."
          alignment="center"
        />

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="hidden sm:flex items-center gap-2 mr-2 text-xs font-semibold uppercase tracking-wider text-[#242424]/60">
            <Filter className="w-3.5 h-3.5 text-[#E43D12]" />
            <span>Filter:</span>
          </div>
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
                activeFilter === opt
                  ? 'bg-[#E43D12] text-white border-[#EFB11D] shadow-sm'
                  : 'bg-white/80 hover:bg-[#FFA2B6]/40 text-[#242424] border-[#E43D12]/20 hover:border-[#E43D12]/50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Asymmetrical Project Grid */}
        <motion.div layout className="space-y-12 lg:space-y-16">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`group rounded-3xl bg-[#EBE9E1] border border-[#E43D12]/25 shadow-luxury hover:shadow-luxury-hover hover:border-[#E43D12]/60 transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch`}
                >
                  {/* Visual Preview / Architectural Mockup (7 cols) */}
                  <div
                    className={`lg:col-span-7 bg-[#242424] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden order-1 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Subtle glow effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA2B6]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                    {/* Browser Mockup Top Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E43D12]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EFB11D]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFA2B6]" />
                        <span className="ml-3 font-mono text-[10px] text-[#EBE9E1]/70 truncate max-w-[180px] sm:max-w-xs">
                          https://bhanu-app.dev/{project.id}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#EFB11D]/30 text-[#EFB11D] border border-[#EFB11D]/50 font-bold">
                        Production Architecture
                      </span>
                    </div>

                    {/* Dynamic Graphic Mockup Rendering */}
                    <div className="relative my-4 rounded-xl bg-[#1A1A1A] border border-white/10 p-6 shadow-inner group-hover:border-[#E43D12]/50 transition-colors">
                      {project.mockupType === 'browser' && (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-white/5">
                            <div className="h-4 w-28 bg-[#E43D12]/40 rounded" />
                            <div className="flex gap-2">
                              <div className="h-3 w-12 bg-white/20 rounded" />
                              <div className="h-3 w-12 bg-white/20 rounded" />
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="col-span-2 space-y-2">
                              <div className="h-20 bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col justify-between">
                                <span className="text-[10px] font-mono text-[#EFB11D]">
                                  // React State Sync & API Handlers
                                </span>
                                <div className="h-2 w-3/4 bg-white/20 rounded" />
                              </div>
                              <div className="h-10 bg-white/5 rounded-lg border border-white/5 flex items-center px-3">
                                <span className="text-[10px] font-mono text-[#EFB11D]">
                                  status: 200 OK • latency: 24ms
                                </span>
                              </div>
                            </div>
                            <div className="h-32 bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col justify-around">
                              <div className="h-2 w-full bg-[#FFA2B6]/30 rounded" />
                              <div className="h-2 w-4/5 bg-[#FFA2B6]/30 rounded" />
                              <div className="h-2 w-2/3 bg-[#FFA2B6]/30 rounded" />
                            </div>
                          </div>
                        </div>
                      )}

                      {project.mockupType === 'code' && (
                        <div className="font-mono text-xs space-y-1.5 text-white/90">
                          <div className="text-[#FFA2B6]">import &#123; createClient &#125; from '@bhanu/core';</div>
                          <div className="text-[#EFB11D]">export const viewComponent = () =&gt; &#123;</div>
                          <div className="pl-4 text-[#EBE9E1]">// Reactive layout orchestration</div>
                          <div className="pl-4 text-white">return &lt;InteractiveExperience responsive /&gt;;</div>
                          <div>&#125;;</div>
                        </div>
                      )}

                      {project.mockupType === 'dashboard' && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between text-[#EFB11D] text-[11px] font-bold">
                            <span>REST API ENDPOINTS</span>
                            <span className="text-[#FFA2B6]">MongoDB / SQL</span>
                          </div>
                          <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                            <span className="text-white">GET /api/v1/resources</span>
                            <span className="text-[#EFB11D]">200 OK</span>
                          </div>
                          <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                            <span className="text-[#FFA2B6]">POST /api/v1/dispatch</span>
                            <span className="text-[#EFB11D]">201 CREATED</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Visual Footer with View Details Trigger */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                      <span className="text-white/70 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#EFB11D]" />
                        Scalable Implementation
                      </span>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[#EFB11D] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                      >
                        <span>Explore Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Editorial Content (5 cols) */}
                  <div
                    className={`lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between order-2 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Category & Status */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs uppercase tracking-widest font-bold text-[#D6536D]">
                          {project.category}
                        </span>
                        {project.isPlaceholder && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FFA2B6]/30 border border-[#E43D12]/20 text-[#242424] font-semibold">
                            Ready for Details
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#242424] mb-3 group-hover:text-[#E43D12] transition-colors">
                        {project.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm sm:text-base text-[#242424]/80 leading-relaxed mb-6 font-normal">
                        {project.summary}
                      </p>

                      {/* Tech Badges */}
                      <div className="mb-6">
                        <p className="text-[11px] uppercase tracking-wider text-[#242424]/60 font-semibold mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded bg-[#FFA2B6]/25 border border-[#E43D12]/20 text-xs font-mono text-[#242424]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="pt-6 border-t border-[#E43D12]/20 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E43D12] hover:bg-[#CA340D] text-white font-semibold text-xs tracking-wider uppercase shadow-sm transition-all hover:-translate-y-0.5"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#EFB11D]" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#FFA2B6]/25 hover:bg-[#E43D12]/20 border border-[#E43D12]/25 text-[#242424] hover:text-[#E43D12] transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-[#FFA2B6]/25 hover:bg-[#E43D12]/20 border border-[#E43D12]/25 text-[#242424] hover:text-[#E43D12] transition-colors"
                          title="Live Demonstration"
                          aria-label="Live Demonstration"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
