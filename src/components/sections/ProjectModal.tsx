import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Check, Layers, Code2 } from 'lucide-react';
import { ProjectItem } from '../../types/portfolio';
import { GoldButton } from '../common/GoldButton';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl bg-ivory border border-gold-500/40 shadow-luxury-hover overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-cream/70 border-b border-gold-500/25">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-500" />
              <span className="text-xs uppercase tracking-widest font-semibold text-navy-900">
                {project.category}
              </span>
              {project.isPlaceholder && (
                <span className="ml-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-gold-500/15 text-gold-800 border border-gold-500/30">
                  Editable Slot
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-charcoal/70 hover:text-navy-950 hover:bg-gold-500/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-navy-900 mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="p-5 rounded-xl bg-white border border-gold-500/20 shadow-sm">
              <h3 className="font-serif text-sm font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-gold-600" />
                <span>Architecture & Implementation Highlights</span>
              </h3>
              <ul className="space-y-2">
                {project.architectureHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/80">
                    <Check className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-charcoal/60 mb-2.5 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-gold-600" />
                <span>Technology Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-white border border-gold-500/30 text-xs font-mono font-medium text-navy-900 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Editable Placeholder Note */}
            {project.isPlaceholder && (
              <div className="p-4 rounded-xl bg-gold-50/70 border border-gold-500/30 text-xs text-charcoal/70">
                <p className="font-semibold text-navy-900 mb-1">Developer Customization Note:</p>
                <p>
                  This project slot is pre-configured with full responsive UI, modal architecture, and GitHub bindings. To link your active project repository or live deployment, update <code className="font-mono text-navy-900 bg-white px-1.5 py-0.5 rounded border border-gold-400">projectsData</code> in <code className="font-mono text-navy-900 bg-white px-1.5 py-0.5 rounded border border-gold-400">src/data/portfolioData.ts</code>.
                </p>
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="p-6 bg-cream/70 border-t border-gold-500/25 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <GoldButton
                variant="primary"
                size="md"
                href={project.githubUrl}
                external={true}
                icon={<Github className="w-4 h-4" />}
              >
                GitHub Repository
              </GoldButton>

              {project.liveUrl && (
                <GoldButton
                  variant="outline"
                  size="md"
                  href={project.liveUrl}
                  external={true}
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Demo
                </GoldButton>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider font-semibold text-charcoal/60 hover:text-navy-900 transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
