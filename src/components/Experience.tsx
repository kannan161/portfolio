'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { workExperience } from '@/data/resume';
import { Briefcase, Calendar, MapPin, Orbit } from 'lucide-react';

function ExperienceCard({ exp, index }: { exp: typeof workExperience[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-12 md:mb-20 ${
      isEven ? 'md:flex-row-reverse' : ''
    }`}>
      {/* Spacer / Column matching */}
      <div className="w-full md:w-[45%] hidden md:block" />

      {/* Center glowing circle node */}
      <div className="absolute left-2.5 md:left-1/2 -translate-x-[6px] md:-translate-x-1/2 z-10 w-4 h-4 rounded-full border-2 border-accent-cyan bg-[#050816] shadow-clay-cyan flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-sky animate-ping" />
      </div>

      {/* Actual Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        className="w-full md:w-[45%] pl-8 md:pl-0"
      >
        <div className={`clay-card p-6 sm:p-8 bg-white/[0.01] hover:border-white/15 transition-all group hover:-translate-y-1 hover:shadow-clay-glow duration-300 relative overflow-hidden`}>
          {/* Top subtle glow panel */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky opacity-70" />
          
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-extrabold text-white group-hover:text-accent-cyan transition-colors">
                {exp.role}
              </h3>
              <div className="flex items-center gap-1.5 text-accent-sky text-sm font-semibold mt-1">
                <Orbit size={14} className="animate-spin-slow" />
                <span>{exp.company}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 text-xs font-normal">{exp.domain}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-1.5">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <Calendar size={12} className="text-accent-cyan" />
                {exp.period}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                <MapPin size={12} className="text-slate-500" />
                {exp.location}
              </span>
            </div>
          </div>

          <ul className="space-y-3 border-t border-white/5 pt-4">
            {exp.bullets.map((bullet, idx) => (
              <li key={idx} className="text-slate-300 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                <span className="flex-1">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const pathHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(pathHeight, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="py-20 sm:py-32 relative overflow-hidden print:hidden">
      {/* Background neon blobs */}
      <div className="glow-blob w-[500px] h-[500px] bg-accent-violet/10 top-1/3 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Work{' '}
            <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline body */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Center Scroll-tracked Glowing Line */}
          <div className="absolute left-[10px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-800/60 -translate-x-[2px] rounded-full overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-accent-violet via-accent-cyan to-accent-sky shadow-clay-cyan"
            />
          </div>

          {/* Experience Cards */}
          <div className="relative">
            {workExperience.map((exp, index) => (
              <ExperienceCard key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
