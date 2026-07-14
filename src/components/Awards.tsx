'use client';

import { motion } from 'framer-motion';
import { awards } from '@/data/resume';
import { Award, Compass, Gem, Star, ShieldCheck } from 'lucide-react';

export default function Awards() {
  return (
    <section id="awards" className="py-20 sm:py-32 relative overflow-hidden print:hidden">
      {/* Decorative neon blobs */}
      <div className="glow-blob w-[400px] h-[400px] bg-accent-violet/15 top-1/2 left-0" />
      <div className="glow-blob w-[300px] h-[300px] bg-accent-cyan/15 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Awards &{' '}
            <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky bg-clip-text text-transparent">
              Recognition
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {awards.map((award, index) => {
            const isGem = award.title.includes('Gem');
            const Icon = isGem ? Gem : ShieldCheck;
            const cardStyle = isGem ? 'clay-card-cyan' : 'clay-card-violet';
            const colorClass = isGem ? 'text-accent-cyan' : 'text-accent-violet';

            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full flex"
              >
                <div className={`w-full ${cardStyle} p-6 sm:p-8 bg-white/[0.01] hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between relative group`}>
                  {/* Decorative background star */}
                  <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                    <Star size={72} />
                  </div>

                  <div>
                    {/* Badge Icon */}
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${colorClass} mb-6 shadow-clay`}>
                      <Icon size={24} className="animate-pulse" />
                    </div>

                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        {award.company}
                      </span>
                      <span className="text-xs font-bold text-accent-sky">
                        {award.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-white mb-4 group-hover:text-accent-cyan transition-colors">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {award.description}
                    </p>
                  </div>

                  {/* Footer micro-decorations */}
                  <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[11px] text-slate-500 font-bold uppercase tracking-widest">
                    <span>Outstanding Achievement</span>
                    <span className="text-accent-cyan">• Verified</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
