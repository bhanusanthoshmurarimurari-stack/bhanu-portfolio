import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded-xl bg-navy-900 text-ivory p-4 shadow-luxury-hover border border-gold-500/40 flex items-start gap-3"
          role="alert"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          )}
          <div className="flex-1 text-sm leading-snug">
            <p className="font-medium text-white">{type === 'success' ? 'Success' : 'Notice'}</p>
            <p className="text-ivory/80 text-xs mt-0.5">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-ivory/60 hover:text-white transition-colors p-1"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
