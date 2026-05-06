import { motion } from 'motion/react';

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle: string;
  eyebrow?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-1 sm:px-0"
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-soft-gold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 relative pb-6 inline-block max-w-[100%] text-balance">
        {title}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-soft-gold" aria-hidden />
      </h2>
      <p className="text-base sm:text-lg text-muted-grey leading-relaxed text-pretty">{subtitle}</p>
    </motion.div>
  );
}
