import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';

const HEADER_OFFSET = -96;

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/**
 * Buttery scroll + smooth in-page navigation (works with fixed header).
 * Disabled when the user prefers reduced motion.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.22,
      easing: easeOutExpo,
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.08,
      syncTouch: true,
      infinite: false,
    });

    document.documentElement.classList.add('lenis', 'lenis-smooth');

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClickCapture = (e: MouseEvent) => {
      const el = (e.target as Node | null)?.nodeType === Node.ELEMENT_NODE ? (e.target as Element) : null;
      const anchor = el?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href.length < 2) return;

      if (href === '#top') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.05, easing: easeOutExpo });
        return;
      }

      const target = document.querySelector<HTMLElement>(href);
      if (!target) return;

      e.preventDefault();
      lenis.scrollTo(target, {
        offset: HEADER_OFFSET,
        duration: 1.15,
        easing: easeOutExpo,
      });
    };

    document.addEventListener('click', onClickCapture, true);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', onClickCapture, true);
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
