'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { personalInfo } from '@/data/resume';
import { ArrowRight, Download, Eye, Sparkles } from 'lucide-react';
import Magnetic from './Magnetic';

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full -z-10 bg-transparent flex items-center justify-center">
      <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-accent-cyan animate-spin" />
    </div>
  ),
});

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden print:hidden">
      {/* 3D Canvas Background */}
      <HeroScene />

      {/* Decorative Blur Blobs */}
      <div className="glow-blob w-[300px] h-[300px] bg-accent-violet/30 top-1/4 left-1/4" />
      <div className="glow-blob w-[350px] h-[350px] bg-accent-cyan/25 bottom-1/4 right-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-clay mb-6 sm:mb-8"
          >
            <Sparkles size={14} className="text-accent-cyan animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-accent-cyan to-accent-sky bg-clip-text text-transparent">
              Solution Engineer · 4+ Years Experience
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-none"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300">
              Hi, I'm{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Professional Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium mb-8 leading-relaxed px-4"
          >
            Delivering scalable, high-performance web applications across{' '}
            <span className="text-white border-b border-accent-violet pb-0.5">iGaming</span>,{' '}
            <span className="text-white border-b border-accent-cyan pb-0.5">AI</span>, and{' '}
            <span className="text-white border-b border-accent-sky pb-0.5">AR</span> domains.
          </motion.p>

          {/* Summary highlight metric badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mb-10 px-4"
          >
            <div className="clay-card p-3 sm:p-4 text-center bg-white/[0.02]">
              <div className="text-xl sm:text-2xl font-bold text-accent-cyan">35%+</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Lighthouse Boost</div>
            </div>
            <div className="clay-card p-3 sm:p-4 text-center bg-white/[0.02]">
              <div className="text-xl sm:text-2xl font-bold text-accent-sky">40%</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">Load Time Cut</div>
            </div>
            <div className="clay-card p-3 sm:p-4 col-span-2 sm:col-span-1 text-center bg-white/[0.02]">
              <div className="text-xl sm:text-2xl font-bold text-accent-violet">25+</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">L1 Candidates Interviewed</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="clay-btn bg-gradient-to-r from-accent-violet to-accent-cyan px-8 py-4 text-sm font-bold text-white shadow-clay-glow flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                Explore Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <Magnetic>
              <button
                onClick={handlePrint}
                className="clay-btn bg-white/5 border-white/10 hover:bg-white/10 px-8 py-4 text-sm font-bold text-white flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Download size={16} />
                Download CV
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Floating mouse scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-accent-cyan"
          />
        </div>
      </motion.div> */}
    </section>
  );
}
