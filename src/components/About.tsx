'use client';

import { motion } from 'framer-motion';
import { personalInfo, personalDetails } from '@/data/resume';
import { User, Calendar, MapPin, Languages, Shield, Target, Users } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden print:hidden">
      {/* Decorative gradient blob */}
      <div className="glow-blob w-[400px] h-[400px] bg-accent-sky/15 -top-10 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            About{' '}
            <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Summary Text (Left Column - 7 spans) */}
          <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
            <div className="clay-card p-6 sm:p-8 bg-white/[0.01]">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="text-accent-cyan" size={20} />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {personalInfo.summary}
              </p>
            </div>

            {/* Core Leadership & Impact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="clay-card p-6 bg-white/[0.01] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-violet/10 border border-accent-violet/20 text-accent-violet">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">Technical Leadership</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Screened 25+ candidates, mentored a batch of 10 freshers, and established team-wide frontend standards.
                  </p>
                </div>
              </div>

              <div className="clay-card p-6 bg-white/[0.01] flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">Quality & Performance</h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Designed scalable front-end architecture patterns, enforce TypeScript conventions, and manage deployments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info & Stats (Right Column - 5 spans) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">
            {/* Contact & Personal Metadata Card */}
            <div className="clay-card p-6 sm:p-8 bg-white/[0.01] space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="text-accent-violet" size={20} />
                Info & Bio
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm sm:text-base text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                    <Calendar size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Date of Birth</span>
                    <span className="font-medium text-white">{personalDetails.dob}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm sm:text-base text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Location</span>
                    <span className="font-medium text-white">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm sm:text-base text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
                    <Languages size={16} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-slate-500 block">Languages</span>
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      {personalDetails.languages.map((lang) => (
                        <span
                          key={lang}
                          className="px-2 py-0.5 text-xs font-semibold rounded-md bg-white/5 border border-white/10 text-slate-300"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary Highlights Banner */}
            <div className="clay-card-violet p-6 bg-gradient-to-br from-accent-violet/25 to-slate-900 border-accent-violet/30 text-white flex flex-col justify-between">
              <h4 className="font-bold text-lg mb-2">Seeking High-Growth Teams</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Seeking to bring deep front-end expertise and a product-first mindset to a high-growth engineering team.
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
                <span>Location Target: Bangalore</span>
                <span className="text-accent-cyan font-bold">• Open to Roles</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
