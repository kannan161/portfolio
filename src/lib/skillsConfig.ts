// src/lib/skillsConfig.ts

import { Code2, Cpu, Eye, Gauge, Globe, Layers, Settings, Sparkles } from 'lucide-react';

// Icon mapping for each skill category
export const categoryIcons: Record<string, React.ComponentType<any>> = {
    Core: Code2,
    'UI & Styling': Layers,
    'State & Data': Cpu,
    'Real-Time': Globe,
    Performance: Gauge,
    'SEO & Infra': Settings,
    Testing: ShieldIcon, // fallback defined below
    Practices: Sparkles,
};

// Fallback Shield icon component (used for Testing category)
function ShieldIcon(props: any) {
    return (
        <svg
      xmlns= "http://www.w3.org/2000/svg"
    width = "24"
    height = "24"
    viewBox = "0 0 24 24"
    fill = "none"
    stroke = "currentColor"
    strokeWidth = "2"
    strokeLinecap = "round"
    strokeLinejoin = "round"
    {...props }
    >
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
            </svg>
  );
}

// Color palette for each category (Tailwind utility values)
export const categoryColors: Record<
    string,
    { bg: string; text: string; glow: string; border: string }
> = {
    Core: { bg: 'bg-violet-500/10', text: 'text-violet-400', glow: 'shadow-clay-glow', border: 'border-accent-violet/30' },
    'UI & Styling': { bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-clay-cyan', border: 'border-accent-cyan/30' },
    'State & Data': { bg: 'bg-sky-500/10', text: 'text-sky-400', glow: 'shadow-clay-sky', border: 'border-accent-sky/30' },
    'Real-Time': { bg: 'bg-blue-500/10', text: 'text-blue-400', glow: 'shadow-clay-glow', border: 'border-blue-500/30' },
    Performance: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', glow: 'shadow-clay-cyan', border: 'border-emerald-500/30' },
    'SEO & Infra': { bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-clay-sky', border: 'border-amber-500/30' },
    Testing: { bg: 'bg-red-500/10', text: 'text-red-400', glow: 'shadow-clay-glow', border: 'border-red-500/30' },
    Practices: { bg: 'bg-rose-500/10', text: 'text-rose-400', glow: 'shadow-clay-sky', border: 'border-rose-500/30' },
};

// Real‑world impact statements per category
export const skillImpacts: Record<string, string> = {
    Core: 'Delivered 3 full‑scale products across AI, AR, and productivity using React and Next.js. Enforced TypeScript across codebases, reducing production runtime errors by ~30% and cutting onboarding time.',
    'UI & Styling': 'Built a no‑code drag‑and‑drop AR instructional builder using Three.js and React Flow, enabling enterprise clients to render interactive 3D models and reducing service calls.',
    'State & Data': 'Integrated 10+ third‑party REST APIs with robust error handling, real‑time data visualisations, and screenshot‑capture workflows with optimized image compression.',
    'Real‑Time': 'Architected game lobby, matchmaking, live leaderboard, and notifications serving thousands of concurrent users with sub‑100ms UI updates via Socket.IO.',
    Performance: 'Improved Lighthouse performance scores by 35%+ and optimised Core Web Vitals (LCP, CLS, FID) through code‑splitting, tree‑shaking, and strategic caching, cutting load times by 40%.',
    'SEO & Infra': 'Worked on Google Search Console to fix critical indexing errors and resolve crawl issues, contributing to strong organic search visibility and a measurable increase in traffic.',
    Testing: 'Applied Jest and React Testing Library to ensure high quality and zero‑defect delivery across 3 concurrent product teams.',
    Practices: 'Screened 25+ L1 candidates for React/Next.js roles and designed a structured 4‑week onboarding program covering state management, Git, and CI/CD for a batch of 10 freshers.',
};
