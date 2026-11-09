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

      // Launch confetti celebration with reference palette
      try {
        confetti({
          particleCount: 55,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#E43D12', '#D6536D', '#FFA2B6', '#EFB11D', '#EBE9E1']
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
    <section id="contact" className="py-24 lg:py-32 bg-[#EBE9E1] border-t border-[#FFA2B6]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Start a Conversation"
          title="Have an Idea? Let's Build Something Together."
          subtitle={personalInfo.statusText}
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#EBE9E1] border border-[#E43D12]/30 shadow-luxury">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#242424] mb-3">
                Let's Connect
              </h3>
              <p className="text-sm text-[#242424]/80 leading-relaxed font-normal mb-6">
                I'm always interested in connecting with people, exploring innovative ideas, and creating meaningful digital experiences.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-[#FFA2B6]/20 border border-[#E43D12]/25 mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-[#E43D12] text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-[#242424]/60 font-semibold">
                      Direct Email
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-[#242424] truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/80 border border-[#E43D12]/30 text-[#242424] hover:text-[#E43D12] hover:border-[#E43D12] transition-colors flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#E43D12]" />
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
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFA2B6]/20 hover:bg-[#FFA2B6]/40 border border-[#E43D12]/20 hover:border-[#E43D12]/50 transition-all text-[#242424] group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-[#E43D12]" />
                    <span className="text-xs font-semibold">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#242424]/50 group-hover:text-[#E43D12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFA2B6]/20 hover:bg-[#FFA2B6]/40 border border-[#E43D12]/20 hover:border-[#E43D12]/50 transition-all text-[#242424] group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-[#E43D12]" />
                    <span className="text-xs font-semibold">GitHub Profile</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#242424]/50 group-hover:text-[#E43D12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-[#FFA2B6]/25 border border-[#E43D12]/20 text-xs text-[#242424] flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#E43D12] flex-shrink-0" />
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
              className="p-8 sm:p-10 rounded-2xl bg-[#EBE9E1] border border-[#E43D12]/30 shadow-luxury"
            >
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#242424] mb-1.5 flex items-center gap-1.5"
                  >
                    <User className="w-3.5 h-3.5 text-[#E43D12]" />
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-[#242424] placeholder-[#242424]/40 focus:outline-none focus:ring-2 focus:ring-[#E43D12]/30 transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E43D12]/25 focus:border-[#E43D12]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#242424] mb-1.5 flex items-center gap-1.5"
                  >
                    <AtSign className="w-3.5 h-3.5 text-[#E43D12]" />
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-[#242424] placeholder-[#242424]/40 focus:outline-none focus:ring-2 focus:ring-[#E43D12]/30 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E43D12]/25 focus:border-[#E43D12]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#242424] mb-1.5 flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#E43D12]" />
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-[#242424] placeholder-[#242424]/40 focus:outline-none focus:ring-2 focus:ring-[#E43D12]/30 transition-all ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E43D12]/25 focus:border-[#E43D12]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#242424] mb-1.5 flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#E43D12]" />
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
                    className={`w-full px-4 py-3 rounded-xl bg-white/80 border text-sm text-[#242424] placeholder-[#242424]/40 focus:outline-none focus:ring-2 focus:ring-[#E43D12]/30 transition-all resize-y ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#E43D12]/25 focus:border-[#E43D12]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
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
                    icon={<Send className="w-4 h-4 text-[#EFB11D]" />}
                  >
                    {isSubmitting ? 'Formatting Message...' : 'Send Message'}
                  </GoldButton>
                </div>

                {/* Submission notice */}
                {submittedMessage && (
                  <p className="text-xs text-[#242424] bg-[#FFA2B6]/30 p-3 rounded-lg border border-[#E43D12]/40 text-center font-semibold">
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
