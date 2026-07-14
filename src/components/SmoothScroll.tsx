'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Support internal hash scrolling smoothly
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -80 });
        }
      }
    };

    document.addEventListener('click', handleHashClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleHashClick);
    };
  }, []);

  return <>{children}</>;
}
