import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles,
  MessageSquare,
  User,
  AtSign,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { GoldButton } from '../common/GoldButton';

interface ContactProps {
  onShowToast: (message: string, type?: 'success' | 'error' | 'info') => void;
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast(`Copied ${personalInfo.email} to clipboard!`, 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message of at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      onShowToast('Please fix the highlighted errors before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Build functional mailto payload fallback
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailBody = encodeURIComponent(
      `Hello Bhanu,\n\n${formData.message}\n\n---\nSender: ${formData.fullName}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);

      // Launch confetti celebration
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#C5A46D', '#17233B', '#FAF8F3']
        });
      } catch (err) {
        // Confetti fallback
      }

      setSubmittedMessage(`Message prepared for ${personalInfo.name}! Opening your email client...`);
      onShowToast('Your message has been formatted! Opening email client...', 'success');

      // Functional mailto redirect
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream/40 border-t border-gold-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Start a Conversation"
          title="Have an Idea? Let's Build Something Together."
          subtitle={personalInfo.statusText}
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info & Luxury Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-white border border-gold-500/30 shadow-luxury">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                Let's Connect
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed font-normal mb-6">
                I'm always interested in connecting with people, exploring innovative ideas, and creating meaningful digital experiences.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-ivory border border-gold-500/25 mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-navy-900 text-gold-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-charcoal/50 font-semibold">
                      Direct Email
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-navy-900 truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white border border-gold-500/30 text-navy-900 hover:text-gold-700 hover:border-gold-500 transition-colors flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Verified Professional Profiles */}
              <div className="space-y-2.5">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-ivory hover:bg-cream/60 border border-gold-500/25 hover:border-gold-500/50 transition-all text-navy-900 group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-gold-600" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal/40 group-hover:text-navy-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-ivory hover:bg-cream/60 border border-gold-500/25 hover:border-gold-500/50 transition-all text-navy-900 group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-gold-600" />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal/40 group-hover:text-navy-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-cream/70 border border-gold-500/20 text-xs text-charcoal/70 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <p>
                Prompt responses guaranteed for all technical inquiries, project discussions, and collaboration opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-gold-500/30 shadow-luxury"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider font-semibold text-navy-900 mb-1.5 flex items-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-gold-600" />
                    <span>Full Name</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory/60 border text-sm text-navy-900 placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all ${
                      errors.fullName
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-gold-500/25 focus:border-gold-500'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider font-semibold text-navy-900 mb-1.5 flex items-center gap-1.5"
                  >
                    <AtSign className="w-3.5 h-3.5 text-gold-600" />
                    <span>Email Address</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory/60 border text-sm text-navy-900 placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all ${
                      errors.email
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-gold-500/25 focus:border-gold-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-wider font-semibold text-navy-900 mb-1.5 flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-gold-600" />
                    <span>Subject</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="Project Inquiry / Full Stack Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-ivory/60 border text-sm text-navy-900 placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all ${
                      errors.subject
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-gold-500/25 focus:border-gold-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-semibold text-navy-900 mb-1.5 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
                    <span>Message</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell me about your project, idea, or role..."
                    className={`w-full px-4 py-3 rounded-xl bg-ivory/60 border text-sm text-navy-900 placeholder-charcoal/40 focus:outline-none focus:ring-2 focus:ring-gold-500/30 transition-all resize-y ${
                      errors.message
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-gold-500/25 focus:border-gold-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <GoldButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full shadow-luxury"
                    icon={<Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Formatting Message...' : 'Send Message'}
                  </GoldButton>
                </div>

                {/* Submission notice */}
                {submittedMessage && (
                  <p className="text-xs text-emerald-700 bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-center font-medium">
                    {submittedMessage}
                  </p>
                )}
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
