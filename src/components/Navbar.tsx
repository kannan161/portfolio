'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Terminal, Printer } from 'lucide-react';
import { personalInfo } from '@/data/resume';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards', href: '#awards' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      const currentSection = sections.reduce((acc, section) => {
        if (!section) return acc;
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          return section.id;
        }
        return acc;
      }, '');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-nav backdrop-blur-md print:hidden">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-sky origin-left"
        style={{ scaleX }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 text-white font-bold text-lg sm:text-xl tracking-tight"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accent-violet to-accent-cyan flex items-center justify-center shadow-clay-glow">
              <Terminal size={16} className="text-white" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              {personalInfo.name}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/5 border border-white/10 shadow-clay backdrop-blur-md rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            ))}
            
            {/* Quick print resume */}
            <button
              onClick={handlePrint}
              className="ml-4 clay-btn px-4 py-2 text-xs font-semibold text-white flex items-center gap-2 hover:bg-white/5 active:clay-btn-active"
            >
              <Printer size={12} />
              Print CV
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="clay-btn p-2 text-white hover:bg-white/5 active:clay-btn-active"
              title="Print Resume"
            >
              <Printer size={16} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/5 bg-[#050816]/95 backdrop-blur-lg"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-white bg-white/5 border border-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
