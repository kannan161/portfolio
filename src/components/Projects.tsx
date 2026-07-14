'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { keyProjects } from '@/data/resume';
import { ExternalLink, Layers, Cpu, Terminal, Calendar } from 'lucide-react';

function TiltCard({ project }: { project: typeof keyProjects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 200 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative mouse position from card center normalized to range [-0.5, 0.5]
    const relativeX = (e.clientX - rect.left - width / 2) / width;
    const relativeY = (e.clientY - rect.top - height / 2) / height;
    
    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      className="relative flex flex-col h-full cursor-pointer group"
    >
      {/* Glow highlight inside */}
      <div 
        style={{ transform: 'translateZ(10px)' }}
        className="absolute inset-0 bg-gradient-to-tr from-accent-violet/10 via-accent-cyan/10 to-accent-sky/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
      />
      
      <div 
        style={{ transform: 'translateZ(40px)', transformStyle: 'preserve-3d' }}
        className="flex-1 clay-card p-6 sm:p-8 bg-white/[0.01] hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          {/* Top metadata */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
              <Calendar size={10} className="text-accent-cyan" />
              {project.period}
            </span>
            <Terminal size={14} className="text-slate-500 group-hover:text-accent-sky transition-colors" />
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-extrabold text-white group-hover:text-accent-cyan transition-colors mb-3 leading-snug">
            {project.title}
          </h3>

          {/* Project Bullets */}
          <ul className="space-y-3 mb-6">
            {project.bullets.map((bullet, index) => (
              <li key={index} className="text-slate-300 text-xs sm:text-sm leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                <span className="flex-1">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="border-t border-white/5 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 group-hover:text-white transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden print:hidden">
      {/* Background gradients */}
      <div className="glow-blob w-[350px] h-[350px] bg-accent-violet/10 top-1/4 right-0" />
      <div className="glow-blob w-[350px] h-[350px] bg-accent-sky/10 bottom-1/4 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section title */}
        <div className="text-center mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Key{' '}
            <span className="bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky bg-clip-text text-transparent">
              Projects
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {keyProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
