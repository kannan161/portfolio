export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  bullets: string[];
}

export interface Project {
  title: string;
  period: string;
  tech: string[];
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  period: string;
  company: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  board: string;
  period: string;
}

export interface PersonalDetails {
  dob: string;
  languages: string[];
}

export const personalInfo = {
  name: 'Kannan S',
  title: 'Solution Engineer',
  phone: '+91 9916674585',
  email: 'kannan.skannan111@gmail.com',
  location: 'Bangalore, Karnataka',
  linkedin: 'https://linkedin.com',
  summary:
    'Solution Engineer with 4+ years of experience delivering scalable, high-performance web applications using React.js, Next.js, and TypeScript across iGaming, AI, and AR domains. Improved Lighthouse scores by 35%+, reduced page load times by 40%, and improved organic search visibility by fixing critical indexing issues via Google Search Console. Recognised technical leader — screened 25+ candidates, trained a batch of 10 freshers, and established front-end standards adopted across teams. Seeking to bring deep front-end expertise and a product-first mindset to a high-growth engineering team.',
};

export const workExperience: WorkExperience[] = [
  {
    company: 'GammaStack',
    role: 'Solution Engineer',
    period: 'Nov 2024 – Present',
    location: 'Bangalore, India',
    domain: 'iGaming Platform',
    bullets: [
      'Architected and shipped 50+ production-grade Next.js components for a high-traffic real-time multiplayer gaming platform — game lobbies, matchmaking UI, live leaderboards, and in-game notifications serving thousands of concurrent users.',
      'Performance Engineering: Improved Lighthouse performance scores by 35%+ and optimised Core Web Vitals (LCP, CLS, FID) across multiple products through code splitting, tree shaking, image optimisation, and strategic caching — cutting average load time by 40%.',
      'Engineered real-time bidirectional features using Socket.IO — live game-state sync, score broadcasting, and event streaming for a seamless low-latency multiplayer experience.',
      'Eliminated 60%+ of unnecessary re-renders using React.memo, useMemo, and useCallback during peak traffic sessions, directly improving user retention metrics.',
      'Worked on Google Search Console to fix critical indexing errors, resolve crawl issues, and ensure all key pages were properly indexed — directly contributing to the platform achieving strong organic search visibility and a measurable increase in organic traffic.',
      'Designed scalable front-end architecture patterns and established coding standards adopted as team-wide best practices across the engineering organisation.',
      'Conducted 25+ L1 and fresher technical interviews for React/Next.js roles — assessing system system design, algorithmic thinking, and code quality.',
      'Designed and delivered a structured 4-week onboarding programme for a batch of 10 freshers — covering React architecture, state management, Git, and CI/CD workflows.',
    ],
  },
  {
    company: 'SoftSuave Technologies',
    role: 'Executive Software Engineer',
    period: 'Sep 2021 – Oct 2024',
    location: 'Bangalore, India',
    domain: 'Product & Client Engineering',
    bullets: [
      'Delivered 3 full-scale products across AI, AR, and productivity domains using React.js and Next.js — from requirement analysis and architecture through to production deployment.',
      'Enforced TypeScript across all codebases, reducing production runtime errors by ~30% and cutting new-developer onboarding time significantly.',
      'Implemented PWA capabilities and i18n (multilingual) support, expanding product reach to 5+ geographies without duplicating codebases.',
      'Built a no-code AR instructional builder using Three.js and React Flow — enabling non-technical users to create 3D augmented-reality guides, reducing on-site service calls.',
      'Integrated 10+ third-party REST APIs with robust error handling, real-time data visualisations, and screenshot-capture workflows with optimised image compression.',
      'Maintained zero-downtime deployments via CI/CD pipelines using GitHub Actions; collaborated in two-week Agile sprints with design, backend, and QA teams.',
    ],
  },
];

export const keyProjects: Project[] = [
  {
    title: 'Real-Time Multiplayer Gaming Platform',
    period: 'Nov 2024 – Present',
    tech: ['Next.js', 'React.js', 'Socket.IO', 'Tailwind CSS', 'REST APIs'],
    bullets: [
      'Architected game lobby, matchmaking, live leaderboard, and notification systems — serving thousands of concurrent users with sub-100ms UI updates via Socket.IO.',
      'Achieved 40% load-time reduction through lazy loading, code splitting, and Core Web Vitals optimisation.',
    ],
  },
  {
    title: 'GIDR — Conversational AI Platform',
    period: 'Jan 2024 – Oct 2024',
    tech: ['Next.js', 'TypeScript', 'Material UI', 'REST APIs'],
    bullets: [
      'Led front-end delivery of an AI platform enabling users to query PDFs, videos, and call recordings — built streaming response rendering and real-time sentiment-analysis UI.',
      'Owned architecture decisions, sprint planning, and API integration across a 3-person frontend team.',
    ],
  },
  {
    title: 'CareAR Experience Builder',
    period: 'Nov 2022 – Dec 2023',
    tech: ['React.js', 'Three.js', 'Material UI', 'Firebase'],
    bullets: [
      'Built a no-code drag-and-drop AR guide builder with interactive Three.js 3D model rendering — used by enterprise clients to reduce on-site technician visits.',
      'Delivered 200+ reusable UI components reducing cross-team development time by 30%.',
    ],
  },
  {
    title: 'BustleSpot — Workforce Productivity Platform',
    period: 'Sep 2021 – Oct 2022',
    tech: ['React.js', 'TypeScript', 'Material UI', 'React Router'],
    bullets: [
      'Built time-tracking dashboards with real-time productivity analytics, screenshot capture, and billing report generation for remote team management.',
      'Optimised image compression pipeline reducing bandwidth usage by 45%; integrated with 5+ external project management tools via REST APIs.',
    ],
  },
];

export const technicalSkills: SkillCategory[] = [
  {
    category: 'Core',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    category: 'UI & Styling',
    items: ['Material UI', 'Tailwind CSS', 'Styled Components', 'Three.js', 'React Flow'],
  },
  {
    category: 'State & Data',
    items: ['Redux Toolkit', 'Context API', 'React Query', 'Axios', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Real-Time',
    items: ['Socket.IO', 'Event-driven Architecture'],
  },
  {
    category: 'Performance',
    items: ['Lighthouse', 'Core Web Vitals (LCP/CLS/FID)', 'Code Splitting', 'Memoization'],
  },
  {
    category: 'SEO & Infra',
    items: ['Google Search Console', 'Firebase', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Testing',
    items: ['Jest', 'React Testing Library', 'ESLint', 'Prettier'],
  },
  {
    category: 'Practices',
    items: ['System Design', 'Agile/Scrum', 'Code Reviews', 'Mentorship', 'Git'],
  },
];

export const awards: Award[] = [
  {
    title: 'Valuable Gem Award 2025',
    period: '2025',
    company: 'GammaStack',
    description: 'Recognised for outstanding platform contributions, 35%+ performance improvements, and building and mentoring the fresher engineering batch.',
  },
  {
    title: 'Responsible Worker',
    period: 'Q2 2024',
    company: 'SoftSuave Technologies',
    description: 'Awarded for exceptional ownership, zero-defect delivery, and cross-functional collaboration across 3 concurrent product teams.',
  },
];

export const education: Education = {
  degree: 'Bachelor of Technology',
  board: 'VTU',
  institution: 'R.R Institute of Technology, Bangalore',
  location: 'Bangalore',
  period: '2016 – 2020',
};

export const personalDetails: PersonalDetails = {
  dob: '25th November 1998',
  languages: ['English', 'Tamil', 'Kannada', 'Hindi'],
};
