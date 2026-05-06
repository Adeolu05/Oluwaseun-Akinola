import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Heart, Globe2, Mic2, Star } from 'lucide-react';

export function CorePillars() {
  const pillars = [
    {
      title: "Faith",
      description: "Rooted in purpose, service, and values that guide her personal and public life.",
      icon: <Star className="w-6 h-6 text-soft-gold" />
    },
    {
      title: "Advocacy",
      description: "Speaking up for people, causes, and conversations that deserve attention.",
      icon: <Mic2 className="w-6 h-6 text-soft-gold" />
    },
    {
      title: "Diplomacy",
      description: "Building bridges through dialogue, understanding, leadership, and global awareness.",
      icon: <Globe2 className="w-6 h-6 text-soft-gold" />
    },
    {
      title: "Impact",
      description: "Turning passion into action through service, community work, and intentional leadership.",
      icon: <Heart className="w-6 h-6 text-soft-gold" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      <SectionHeading
        eyebrow="Foundation"
        title="Core Pillars"
        subtitle="The values that shape her voice, work, and public impact."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-pure-white p-8 rounded-[24px] border border-transparent hover:border-soft-gold/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-soft-beige flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-serif text-navy-blue mb-3">{pillar.title}</h3>
            <p className="text-muted-grey leading-relaxed text-sm">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
