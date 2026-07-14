import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Awards from '@/components/Awards';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import ParticleBackground from '@/components/ParticleBackground';
import LoadingScreen from '@/components/LoadingScreen';

export const metadata: Metadata = {
  title: 'Kannan S | Senior Frontend Engineer - High-Performance Web Applications',
  description: 'Senior Frontend Engineer with 5+ years of experience delivering scalable, high-performance web applications using React.js, Next.js, and TypeScript across iGaming, AI, and AR domains. Screened 25+ candidates, trained a batch of 10 freshers, and established front-end standards.',
  keywords: [
    'Kannan S',
    'Senior Frontend Engineer',
    'React.js',
    'Next.js',
    'TypeScript',
    'iGaming',
    'AI',
    'AR',
    'Performance Engineering',
    'Lighthouse Optimization',
    'Bangalore',
    'Three.js',
    'React Flow',
    'Socket.IO'
  ],
  authors: [{ name: 'Kannan S' }],
  creator: 'Kannan S',
  openGraph: {
    title: 'Kannan S | Senior Frontend Engineer',
    description: 'Senior Frontend Engineer with 5+ years of experience delivering scalable, high-performance web applications using React.js, Next.js, and TypeScript across iGaming, AI, and AR domains.',
    url: 'https://kannans.dev',
    siteName: 'Kannan S Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kannan S | Senior Frontend Engineer',
    description: 'Senior Frontend Engineer with 5+ years of experience delivering scalable, high-performance web applications using React.js, Next.js, and TypeScript.',
  },
};

export default function Page() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      
      <div className="relative min-h-screen bg-[#050816] text-[#f8fafc]">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Awards />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
