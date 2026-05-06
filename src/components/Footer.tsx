const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;

const pillars = ['Faith', 'Advocacy', 'Diplomacy', 'Impact'] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-pure-white pt-12 pb-[max(2.5rem,env(safe-area-inset-bottom,0px))] sm:pt-16 border-t border-muted-sage/20">
      <div className="max-w-7xl mx-auto w-full min-w-0 px-4 sm:px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-serif text-navy-blue mb-3 sm:mb-4 text-center px-1 leading-tight text-balance max-w-[min(100%,20ch)] sm:max-w-none">
          Oluwaseun Akinola
        </h2>

        <p
          className="flex flex-wrap justify-center items-center gap-x-1.5 gap-y-1 sm:gap-x-2 text-center text-[11px] sm:text-sm font-semibold uppercase text-muted-grey mb-6 sm:mb-8 max-w-md tracking-wide sm:tracking-widest leading-relaxed"
        >
          {pillars.map((word, i) => (
            <span key={word} className="contents">
              {i > 0 && <span className="text-soft-gold shrink-0 px-0.5 select-none" aria-hidden>•</span>}
              <span>{word}</span>
            </span>
          ))}
        </p>

        <nav
          className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-8 md:gap-x-10 mb-10 sm:mb-12 w-full max-w-xl px-1"
          aria-label="Footer"
        >
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0 inline-flex items-center justify-center text-sm sm:text-base text-charcoal hover:text-deep-green font-medium transition-colors px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="w-full max-w-lg min-w-0 h-px bg-gradient-to-r from-transparent via-muted-sage/50 to-transparent mb-6 sm:mb-8" />

        <p className="text-xs sm:text-sm text-muted-grey text-center px-2 text-balance max-w-lg">
          © {new Date().getFullYear()} Oluwaseun Akinola. All rights reserved.
        </p>

        <p className="mt-4 sm:mt-5 text-[11px] sm:text-sm text-muted-grey text-center leading-relaxed tracking-wide px-3 max-w-md text-balance">
          <span className="text-soft-gold/80" aria-hidden>
            ✦
          </span>{' '}
          With love from{' '}
          <a
            href="https://dpeluola.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy-blue hover:text-deep-green underline decoration-soft-gold/60 underline-offset-[3px] sm:underline-offset-4 transition-colors whitespace-nowrap"
          >
            PDA
          </a>
        </p>
      </div>
    </footer>
  );
}
