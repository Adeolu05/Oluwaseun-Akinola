import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';

export function ImpactWork() {
  const projects = [
    {
      title: "Community Advocacy",
      description: "Supporting conversations and initiatives that promote awareness, inclusion, and positive change.",
      role: "Advocate / Contributor",
      impact: "Encouraging meaningful dialogue and community participation."
    },
    {
      title: "Youth Leadership",
      description: "Inspiring young people to embrace purpose, confidence, responsibility, and service.",
      role: "Youth Voice / Leader",
      impact: "Promoting leadership mindsets among emerging changemakers."
    },
    {
      title: "Faith-Based Service",
      description: "Using faith, compassion, and service as a foundation for personal growth and public contribution.",
      role: "Faith-led communicator",
      impact: "Encouraging values-driven living and service."
    },
    {
      title: "Diplomacy & Global Citizenship",
      description: "Exploring dialogue, cross-cultural understanding, and peaceful leadership as tools for change.",
      role: "Emerging diplomat",
      impact: "Building a global perspective rooted in service and respect."
    }
  ];

  return (
    <section id="impact" className="py-24 bg-warm-ivory relative border-t border-muted-sage/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="Portfolio"
          title="Impact Work"
          subtitle="A growing journey of advocacy, service, leadership, and community-centred action."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pure-white rounded-[28px] p-8 md:p-10 shadow-sm border border-muted-sage/20 hover:shadow-lg transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ArrowUpRight className="text-soft-gold w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-navy-blue mb-4 pr-8">{project.title}</h3>
              <p className="text-charcoal leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="space-y-4 pt-6 border-t border-muted-sage/30">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-xs font-semibold text-muted-grey uppercase tracking-wider min-w-[80px]">Role:</span>
                  <span className="text-sm font-medium text-deep-green bg-deep-green/5 px-3 py-1 rounded-full">{project.role}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                  <span className="text-xs font-semibold text-muted-grey uppercase tracking-wider min-w-[80px]">Impact:</span>
                  <span className="text-sm text-charcoal">{project.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
