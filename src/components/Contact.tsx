'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data/resume';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden print:hidden">
      {/* Background decoration */}
      <div className="glow-blob w-[350px] h-[350px] bg-accent-violet/10 top-1/4 left-10" />
      <div className="glow-blob w-[350px] h-[350px] bg-accent-cyan/10 bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Get In{' '}
            <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Direct Info Card (5 spans) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="clay-card p-6 sm:p-8 bg-white/[0.01] border-white/5 space-y-8 flex-1 flex flex-col justify-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">Let's Connect</h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Seeking to bring deep front-end expertise and a product-first mindset to a high-growth engineering team.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan shadow-clay group-hover:shadow-clay-cyan transition-shadow">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Email Me</span>
                    <span className="font-semibold text-sm sm:text-base">{personalInfo.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-sky shadow-clay group-hover:shadow-clay-sky transition-shadow">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Call Me</span>
                    <span className="font-semibold text-sm sm:text-base">{personalInfo.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-violet shadow-clay">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Location</span>
                    <span className="font-semibold text-sm sm:text-base">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Sub-text details */}
              <div className="border-t border-white/5 pt-6 text-xs text-slate-500">
                <p>Date of Birth: {personalInfo.location === 'Bangalore, Karnataka' ? '25th November 1998' : ''}</p>
                <p className="mt-1">Languages: English, Tamil, Kannada, Hindi</p>
              </div>
            </div>
          </div>

          {/* Form Card (7 spans) */}
          <div className="lg:col-span-7 flex">
            <div className="clay-card p-6 sm:p-8 bg-white/[0.01] border-white/5 flex-1 flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-slate-950/50 border border-white/5 focus:border-accent-cyan rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors shadow-inner"
                        placeholder="Kannan S"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-slate-950/50 border border-white/5 focus:border-accent-cyan rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors shadow-inner"
                        placeholder="kannan.skannan111@gmail.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-slate-950/50 border border-white/5 focus:border-accent-cyan rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none transition-colors shadow-inner resize-none"
                        placeholder="How can I help you?"
                      />
                    </div>

                    <Magnetic>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="clay-btn bg-gradient-to-r from-accent-violet to-accent-cyan px-6 py-3.5 text-xs font-extrabold text-white flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                        <Send size={12} />
                      </button>
                    </Magnetic>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 shadow-clay">
                      <CheckCircle size={32} className="animate-bounce" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-400 text-xs sm:text-sm max-w-sm mx-auto">
                        Thank you for reaching out. I'll get back to you at{' '}
                        <span className="text-white font-semibold">{personalInfo.email}</span> as soon as possible.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="clay-btn bg-white/5 border-white/10 hover:bg-white/10 px-6 py-2.5 text-xs font-bold text-white flex items-center gap-1.5"
                    >
                      Send another message
                      <ArrowRight size={12} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
