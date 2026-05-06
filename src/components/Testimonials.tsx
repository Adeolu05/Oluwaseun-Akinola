import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Oluwaseun carries herself with purpose, clarity, and a strong commitment to positive impact.",
      name: "Mentor / Community Leader"
    },
    {
      quote: "She communicates with warmth, confidence, and a deep sense of responsibility.",
      name: "Event Organiser"
    },
    {
      quote: "Her passion for advocacy, faith, and diplomacy makes her a voice to watch.",
      name: "Colleague / Peer"
    }
  ];

  return (
    <section className="py-24 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="Reflections"
          title="What People Say"
          subtitle="Reflections from mentors, organisers, and people who have experienced her work and presence."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-warm-ivory p-8 rounded-[24px] shadow-sm relative border border-transparent hover:border-soft-gold/20 hover:shadow-md transition-all"
            >
              <div className="absolute top-8 right-8 text-soft-gold/20">
                <Quote size={48} />
              </div>
              
              <div className="mb-6 pb-6 border-b border-muted-sage/40 relative z-10">
                <p className="text-lg text-charcoal font-serif leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
              
              <p className="text-sm font-semibold text-muted-grey uppercase tracking-wider">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
