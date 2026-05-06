import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const decoSlow = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 72]);
  const decoFast = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 110]);
  const gridShift = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 28]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 36]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90dvh] flex items-center pt-[max(6.75rem,calc(env(safe-area-inset-top,0px)+5.75rem))] pb-16 overflow-hidden"
    >
      <motion.div
        style={{ y: decoSlow }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto -z-10 opacity-30 pointer-events-none will-change-transform"
      >
        <div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-muted-sage rounded-full blur-3xl mix-blend-multiply opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-soft-beige rounded-full blur-3xl mix-blend-multiply opacity-60" />
      </motion.div>

      <motion.div
        style={{ y: gridShift }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] will-change-transform"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: decoFast }}
          className="order-2 md:order-1 will-change-transform"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-soft-gold mb-6 border border-soft-gold/30 rounded-full px-4 py-1.5 bg-soft-gold/5">
            Faith • Advocacy • Diplomacy • Impact
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-navy-blue leading-tight mb-6 text-balance">
            Building bridges through <span className="italic text-deep-green">advocacy</span>, diplomacy, faith, and impact.
          </h1>
          <p className="text-lg lg:text-xl text-muted-grey leading-relaxed mb-10 max-w-xl text-pretty">
            Oluwaseun Akinola is a faith-driven advocate and emerging diplomat passionate about leadership, service, global citizenship, and creating meaningful impact in her community and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-deep-green text-pure-white text-base font-medium hover:bg-deep-green-hover transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Invite Me to Speak
            </a>
            <a
              href="#impact"
              className="px-8 py-3.5 rounded-full border border-deep-green/20 bg-pure-white text-deep-green text-base font-medium hover:border-deep-green hover:bg-muted-sage/10 transition-all duration-300 text-center active:scale-[0.98]"
            >
              View My Impact
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-muted-sage/50">
            <div>
              <p className="font-serif text-2xl text-navy-blue mb-1">36.6K+</p>
              <p className="text-xs font-medium text-muted-grey uppercase tracking-wider">TikTok Likes</p>
            </div>
            <div>
              <p className="font-serif text-2xl text-navy-blue mb-1">1.3K+</p>
              <p className="text-xs font-medium text-muted-grey uppercase tracking-wider">Community</p>
            </div>
            <div className="col-span-2 sm:col-span-1 border-t sm:border-t-0 sm:border-l border-muted-sage/50 pt-4 sm:pt-0 sm:pl-6 flex items-center">
              <p className="text-sm font-medium text-charcoal leading-snug">
                Global Impact <br /> Mindset
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          style={{ y: imageY }}
          className="order-1 md:order-2 relative w-full max-w-md mx-auto md:max-w-none will-change-transform"
        >
          <div className="relative aspect-[3/4] w-full rounded-tl-[100px] rounded-br-[100px] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl ring-1 ring-soft-gold/20">
            <img
              src="/images/oluwaseun-akinola-hero-portrait.jpg"
              alt="Oluwaseun Akinola — professional portrait in modest formal attire, outdoor setting"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = '/images/oluwaseun-akinola-gallery-portrait-stripes.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/40 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 -left-6 glass px-5 py-3 rounded-xl shadow-lg border border-pure-white/20"
          >
            <p className="text-sm font-medium text-charcoal">
              Emerging Diplomat <br />
              <span className="text-xs text-muted-grey">& Advocate</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-10 -right-6 glass px-4 py-2 rounded-lg shadow-lg border border-pure-white/20 hidden md:block"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-deep-green" />
              <p className="text-sm font-medium text-charcoal">Nigeria • Global Vision</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
