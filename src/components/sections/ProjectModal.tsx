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
          className="fixed inset-0 bg-[#242424]/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#EBE9E1] border border-[#E43D12]/40 shadow-luxury-hover overflow-hidden z-10 max-h-[90vh] flex flex-col text-[#242424]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#FFA2B6]/30 border-b border-[#E43D12]/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E43D12]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#242424]">
                {project.category}
              </span>
              {project.isPlaceholder && (
                <span className="ml-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#EFB11D]/40 text-[#242424] border border-[#EFB11D] font-bold">
                  Editable Slot
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#242424]/70 hover:text-[#E43D12] hover:bg-[#FFA2B6]/40 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#E43D12] mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#242424]/80 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="p-5 rounded-xl bg-white/70 border border-[#E43D12]/20 shadow-sm">
              <h3 className="font-serif text-sm font-bold text-[#242424] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#E43D12]" />
                <span>Architecture & Implementation Highlights</span>
              </h3>
              <ul className="space-y-2">
                {project.architectureHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#242424]/80">
                    <Check className="w-4 h-4 text-[#E43D12] flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#242424]/70 mb-2.5 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#E43D12]" />
                <span>Technology Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md bg-white border border-[#E43D12]/30 text-xs font-mono font-medium text-[#242424] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Editable Placeholder Note */}
            {project.isPlaceholder && (
              <div className="p-4 rounded-xl bg-[#FFA2B6]/25 border border-[#E43D12]/30 text-xs text-[#242424]">
                <p className="font-bold text-[#E43D12] mb-1">Developer Customization Note:</p>
                <p>
                  This project slot is pre-configured with full responsive UI, modal architecture, and GitHub bindings. To link your active project repository or live deployment, update <code className="font-mono text-[#E43D12] bg-white px-1.5 py-0.5 rounded border border-[#E43D12]/30">projectsData</code> in <code className="font-mono text-[#E43D12] bg-white px-1.5 py-0.5 rounded border border-[#E43D12]/30">src/data/portfolioData.ts</code>.
                </p>
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="p-6 bg-[#FFA2B6]/30 border-t border-[#E43D12]/20 flex flex-wrap items-center justify-between gap-4">
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
              className="text-xs uppercase tracking-wider font-semibold text-[#242424]/70 hover:text-[#E43D12] transition-colors"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
