import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Impact', href: '#impact' },
    { name: 'Speaking', href: '#speaking' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        isScrolled ? 'glass border-b border-muted-sage/30 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full min-w-0 flex items-center justify-between gap-3 px-4 sm:px-6 md:px-12 ps-[max(1rem,env(safe-area-inset-left,0px))] pe-[max(1rem,env(safe-area-inset-right,0px))]">
        <a
          href="#top"
          className="min-w-0 shrink text-left text-base sm:text-lg md:text-xl font-serif font-medium text-navy-blue leading-tight hover:text-deep-green transition-colors"
        >
          <span className="block truncate sm:overflow-visible sm:whitespace-normal">
            Oluwaseun Akinola
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-soft-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-deep-green text-pure-white text-sm font-medium hover:bg-deep-green-hover transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green"
          >
            Invite Me
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden shrink-0 flex items-center justify-center min-h-11 min-w-11 -me-1 text-charcoal rounded-lg hover:bg-charcoal/5 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-muted-sage/30 overflow-hidden"
          >
            <div className="flex flex-col px-4 sm:px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-charcoal"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="w-full text-center px-6 py-3 rounded-xl bg-deep-green text-pure-white text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Invite Me
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
