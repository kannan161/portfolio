'use client';

import { personalInfo } from '@/data/resume';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03050f]/80 border-t border-white/5 py-12 print:hidden relative overflow-hidden">
      {/* Decorative subtle line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center space-x-2 text-white font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-violet to-accent-cyan flex items-center justify-center shadow-clay">
              <Terminal size={16} className="text-white" />
            </div>
            <span>{personalInfo.name}</span>
          </div>

          {/* Quick links summary */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#awards" className="hover:text-white transition-colors">Awards</a>
            <a href="#resume" className="hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Copyright details */}
          <div className="text-center md:text-right text-xs text-slate-500 font-medium">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-slate-600">Built using Next.js, React, TypeScript, and Three.js.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
