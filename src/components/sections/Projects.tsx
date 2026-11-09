import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { ProjectItem } from '../../types/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 lg:py-32 bg-cream/30 border-b border-gold-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Portfolio Showcase"
          title="Selected Works"
          subtitle="A collection of ideas transformed into digital experiences."
          alignment="center"
        />

        {/* Asymmetrical Project Grid */}
        <div className="space-y-12 lg:space-y-16">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`group rounded-3xl bg-white border border-gold-500/30 shadow-luxury hover:shadow-luxury-hover hover:border-gold-500/60 transition-all duration-500 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch`}
              >
                {/* Visual Preview / Architectural Mockup (7 cols) */}
                <div
                  className={`lg:col-span-7 bg-navy-950 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden order-1 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Subtle luxury glow effect */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                  {/* Browser Mockup Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-3 font-mono text-[10px] text-ivory/60 truncate max-w-[180px] sm:max-w-xs">
                        https://bhanu-app.dev/{project.id}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/10 text-gold-300 border border-gold-500/30">
                      Production Architecture
                    </span>
                  </div>

                  {/* Dynamic Graphic Mockup Rendering */}
                  <div className="relative my-4 rounded-xl bg-navy-900/90 border border-white/10 p-6 shadow-inner group-hover:border-gold-500/40 transition-colors">
                    {project.mockupType === 'browser' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/5">
                          <div className="h-4 w-28 bg-gold-500/30 rounded" />
                          <div className="flex gap-2">
                            <div className="h-3 w-12 bg-white/15 rounded" />
                            <div className="h-3 w-12 bg-white/15 rounded" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="col-span-2 space-y-2">
                            <div className="h-20 bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col justify-between">
                              <span className="text-[10px] font-mono text-gold-300">
                                // React State Sync & API Handlers
                              </span>
                              <div className="h-2 w-3/4 bg-white/20 rounded" />
                            </div>
                            <div className="h-10 bg-white/5 rounded-lg border border-white/5 flex items-center px-3">
                              <span className="text-[10px] font-mono text-emerald-400">
                                status: 200 OK • latency: 24ms
                              </span>
                            </div>
                          </div>
                          <div className="h-32 bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col justify-around">
                            <div className="h-2 w-full bg-gold-400/20 rounded" />
                            <div className="h-2 w-4/5 bg-gold-400/20 rounded" />
                            <div className="h-2 w-2/3 bg-gold-400/20 rounded" />
                          </div>
                        </div>
                      </div>
                    )}

                    {project.mockupType === 'code' && (
                      <div className="font-mono text-xs space-y-1.5 text-ivory/80">
                        <div className="text-purple-300">import &#123; createClient &#125; from '@bhanu/core';</div>
                        <div className="text-gold-300">export const viewComponent = () =&gt; &#123;</div>
                        <div className="pl-4 text-emerald-300">// Reactive layout orchestration</div>
                        <div className="pl-4 text-blue-300">return &lt;InteractiveExperience responsive /&gt;;</div>
                        <div>&#125;;</div>
                      </div>
                    )}

                    {project.mockupType === 'dashboard' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-gold-300 text-[11px]">
                          <span>REST API ENDPOINTS</span>
                          <span className="text-emerald-400">MongoDB / SQL</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                          <span className="text-blue-300">GET /api/v1/resources</span>
                          <span className="text-emerald-400">200 OK</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                          <span className="text-gold-400">POST /api/v1/dispatch</span>
                          <span className="text-emerald-400">201 CREATED</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Visual Footer with View Details Trigger */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                    <span className="text-ivory/60 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      Scalable Implementation
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-gold-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
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
                      <span className="text-xs uppercase tracking-widest font-semibold text-gold-700">
                        {project.category}
                      </span>
                      {project.isPlaceholder && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cream border border-gold-500/25 text-charcoal/70">
                          Ready for Details
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-navy-900 mb-3 group-hover:text-gold-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>

                    {/* Tech Badges */}
                    <div className="mb-6">
                      <p className="text-[11px] uppercase tracking-wider text-charcoal/50 font-semibold mb-2">
                        Technologies:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded bg-cream/70 border border-gold-500/20 text-xs font-mono text-navy-900"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-gold-500/20 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-navy-950 font-semibold text-xs tracking-wider uppercase shadow-sm transition-all hover:-translate-y-0.5"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cream/60 hover:bg-gold-500/15 border border-gold-500/25 text-navy-900 transition-colors"
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
                        className="p-2 rounded-lg bg-cream/60 hover:bg-gold-500/15 border border-gold-500/25 text-navy-900 transition-colors"
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
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
