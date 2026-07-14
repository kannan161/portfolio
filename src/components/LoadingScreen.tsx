'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Standard mount timeout to ensure R3F canvases compile
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 bg-[#050816] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Pulsing Logo */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-violet to-accent-cyan flex items-center justify-center shadow-clay-glow animate-pulse">
              <Terminal size={32} className="text-white" />
            </div>

            {/* Loading Progress Bar */}
            <div className="w-48 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5 shadow-inner mt-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.3, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan"
              />
            </div>
            
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest animate-pulse mt-2">
              Compiling Canvas & Assets
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
