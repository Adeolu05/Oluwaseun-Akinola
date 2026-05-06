import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: reduced ? 300 : 90,
    damping: reduced ? 40 : 28,
    restDelta: 0.0008,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Speaking', href: '#speaking' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] isolate transition-[box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          pt-[max(0.875rem,env(safe-area-inset-top,0px)+0.5rem)]
          ${
            isScrolled
              ? 'border-b border-muted-sage/40 bg-pure-white/94 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_-8px_rgba(16,42,67,0.1),0_1px_0_rgba(255,255,255,0.6)_inset] pb-3.5 md:pb-4'
              : 'border-b border-muted-sage/15 bg-pure-white/85 backdrop-blur-md pb-4 md:border-b-transparent md:bg-transparent/0 md:backdrop-blur-none md:pb-5'
          }`}
      >
        <div
          className={`max-w-7xl mx-auto w-full min-w-0 flex items-center justify-between gap-3 px-4 sm:px-6 md:px-12 ps-[max(1rem,env(safe-area-inset-left,0px))] pe-[max(1rem,env(safe-area-inset-right,0px))] min-h-[3.25rem] md:min-h-0`}
        >
          <a
            href="#top"
            className="min-w-0 shrink text-left text-base sm:text-lg md:text-xl font-serif font-medium text-navy-blue leading-tight hover:text-deep-green transition-colors duration-300 py-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="block truncate sm:overflow-visible sm:whitespace-normal">
              Oluwaseun Akinola
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoal hover:text-soft-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-deep-green text-pure-white text-sm font-medium hover:bg-deep-green-hover transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-deep-green"
            >
              Invite Me
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden shrink-0 flex items-center justify-center size-12 rounded-full border border-navy-blue/12 bg-pure-white/95 text-navy-blue shadow-[0_2px_12px_-2px_rgba(16,42,67,0.12)] hover:border-soft-gold/40 hover:bg-warm-ivory/90 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="size-[22px] stroke-[2]" aria-hidden /> : <Menu className="size-[22px] stroke-[2]" aria-hidden />}
          </button>
        </div>

        {!reduced && (
          <motion.div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left z-[2]"
            style={{
              scaleX: progressScale,
              background: 'linear-gradient(90deg, #C9A227 0%, #0F3D2E 55%, #102A43 100%)',
            }}
            aria-hidden
          />
        )}
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[90] md:hidden bg-navy-blue/45 backdrop-blur-[3px] cursor-default border-0 p-0 m-0"
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              id="mobile-nav-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 340 }}
              className="fixed top-0 right-0 bottom-0 z-[95] w-[min(100vw-2.5rem,22rem)] max-w-full md:hidden flex flex-col bg-pure-white shadow-[-12px_0_48px_-8px_rgba(16,42,67,0.18)] border-l border-muted-sage/25
                pt-[max(1.25rem,calc(env(safe-area-inset-top,0px)+5.5rem))]
                pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]
                pl-5 pr-4"
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-soft-gold mb-2">Navigate</p>
              <p className="font-serif text-xl text-navy-blue mb-6 leading-snug">Where would you like to go?</p>

              <ul className="flex flex-col gap-0.5 flex-1 overflow-y-auto overscroll-contain -mr-1 pr-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3.5 text-[17px] font-medium text-charcoal hover:bg-warm-ivory hover:text-navy-blue transition-colors duration-200 border border-transparent hover:border-muted-sage/25"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="size-5 text-soft-gold/70 group-hover:text-soft-gold group-hover:translate-x-0.5 transition-transform duration-200 shrink-0" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-5 border-t border-muted-sage/25">
                <a
                  href="#contact"
                  className="flex w-full items-center justify-center rounded-2xl bg-deep-green px-6 py-4 text-base font-semibold text-pure-white shadow-md hover:bg-deep-green-hover transition-colors duration-200 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-deep-green"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Invite Me to Speak
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
