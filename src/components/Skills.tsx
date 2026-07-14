'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technicalSkills } from '@/data/resume';
import { Award, Code2, Cpu, Eye, Gauge, Globe, Layers, Settings, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Core': Code2,
  'UI & Styling': Layers,
  'State & Data': Cpu,
  'Real-Time': Globe,
  'Performance': Gauge,
  'SEO & Infra': Settings,
  'Testing': ShieldIcon, // Fallback defined below
  'Practices': Award,
};

function ShieldIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
    </svg>
  );
}

// Maps categories to direct accomplishments in the resume
const skillImpacts: Record<string, string> = {
  'Core': 'Delivered 3 full-scale products across AI, AR, and productivity using React and Next.js. Enforced TypeScript across codebases, reducing production runtime errors by ~30% and cutting onboarding time.',
  'UI & Styling': 'Built a no-code drag-and-drop AR instructional builder using Three.js and React Flow, enabling enterprise clients to render interactive 3D models and reducing service calls.',
  'State & Data': 'Integrated 10+ third-party REST APIs with robust error handling, real-time data visualisations, and screenshot-capture workflows with optimized image compression.',
  'Real-Time': 'Architected game lobby, matchmaking, live leaderboard, and notifications serving thousands of concurrent users with sub-100ms UI updates via Socket.IO.',
  'Performance': 'Improved Lighthouse performance scores by 35%+ and optimised Core Web Vitals (LCP, CLS, FID) through code splitting, tree shaking, and strategic caching, cutting load times by 40%.',
  'SEO & Infra': 'Worked on Google Search Console to fix critical indexing errors and resolve crawl issues, contributing to strong organic search visibility and a measurable increase in traffic.',
  'Testing': 'Applied Jest and React Testing Library to ensure high quality and zero-defect delivery across 3 concurrent product teams.',
  'Practices': 'Screened 25+ L1 candidates for React/Next.js roles and designed a structured 4-week onboarding program covering state management, Git, and CI/CD for a batch of 10 freshers.',
};

const categoryColors: Record<string, { bg: string; text: string; glow: string; border: string }> = {
  'Core': { bg: 'bg-violet-500/10', text: 'text-violet-400', glow: 'shadow-clay-glow', border: 'border-accent-violet/30' },
  'UI & Styling': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-clay-cyan', border: 'border-accent-cyan/30' },
  'State & Data': { bg: 'bg-sky-500/10', text: 'text-sky-400', glow: 'shadow-clay-sky', border: 'border-accent-sky/30' },
  'Real-Time': { bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-clay-glow', border: 'border-blue-500/30' },
  'Performance': { bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-clay-cyan', border: 'border-emerald-500/30' },
  'SEO & Infra': { bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-clay-sky', border: 'border-amber-500/30' },
  'Testing': { bg: 'bg-red-500/10', text: 'text-red-400', glow: 'shadow-clay-glow', border: 'border-red-500/30' },
  'Practices': { bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'shadow-clay-sky', border: 'border-rose-500/30' },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Core');

  const activeCategoryData = technicalSkills.find(c => c.category === selectedCategory);
  const IconComponent = categoryIcons[selectedCategory] || Code2;
  const colors = categoryColors[selectedCategory] || categoryColors['Core'];

  return (
    <section id="skills" className="py-20 sm:py-32 relative overflow-hidden print:hidden">
      {/* Glow effect background */}
      <div className={`glow-blob w-[450px] h-[450px] bg-accent-cyan/15 bottom-10 left-10 transition-all duration-500`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            className="h-[3px] bg-gradient-to-r from-accent-violet to-accent-cyan mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Categories Sidebar (4 spans) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 scrollbar-none snap-x snap-mandatory">
            {technicalSkills.map((cat) => {
              const CatIcon = categoryIcons[cat.category] || Code2;
              const isSelected = selectedCategory === cat.category;
              const catColors = categoryColors[cat.category] || categoryColors['Core'];

              return (
                <button
                  key={cat.category}
                  onClick={() => setSelectedCategory(cat.category)}
                  className={`snap-center flex items-center gap-3 px-5 py-4 rounded-2xl text-left font-bold text-sm sm:text-base border transition-all duration-300 whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink ${isSelected
                    ? `bg-white/5 ${catColors.border} ${catColors.glow} text-white`
                    : 'bg-white/[0.01] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                    }`}
                >
                  <div className={`p-2.5 rounded-xl border ${isSelected
                    ? `${catColors.border} ${catColors.text} bg-white/5`
                    : 'border-white/5 text-slate-500'
                    }`}>
                    <CatIcon size={18} />
                  </div>
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Detail Box (8 spans) */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            {/* Skills chip display */}
            <div className="clay-card p-6 sm:p-8 bg-white/[0.01] flex-1 flex flex-col justify-center min-h-[220px]">
              <div className="flex items-center gap-2 mb-6">
                <IconComponent className={colors.text} size={20} />
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  {selectedCategory} Stack
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                <AnimatePresence mode="popLayout">
                  {activeCategoryData?.items.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.04,
                      }}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className={`clay-btn px-4 py-2.5 text-xs sm:text-sm font-semibold text-white flex items-center gap-2 cursor-default ${colors.glow} ${colors.bg} ${colors.border}`}
                    >
                      <Sparkles size={12} className={`${colors.text}`} />
                      {skill}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Impact Text Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="clay-card p-6 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border-white/5 relative overflow-hidden"
              >
                {/* Decorative border highlight */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-${selectedCategory === 'Core' ? 'accent-violet' : selectedCategory === 'UI & Styling' ? 'accent-cyan' : 'accent-sky'} to-transparent opacity-80`} />

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-accent-cyan flex-shrink-0 hidden sm:block">
                    <Eye size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-white font-extrabold text-sm sm:text-base mb-2">
                      Real-World Accomplishment
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {skillImpacts[selectedCategory] || 'Applied across multiple projects and teams to drive performance and robust architectures.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
