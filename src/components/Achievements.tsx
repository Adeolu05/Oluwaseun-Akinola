import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Award } from 'lucide-react';

export function Achievements() {
  const milestones = [
    {
      title: "Advocacy & Leadership",
      description: "Recognised for her commitment to advocacy, service, and meaningful public conversations."
    },
    {
      title: "Faith & Community Service",
      description: "Active in values-driven service and initiatives that encourage purpose and positive influence."
    },
    {
      title: "Diplomacy Interest",
      description: "Building a path around diplomacy, global citizenship, dialogue, and international awareness."
    },
    {
      title: "Digital Influence",
      description: "Growing an online audience through content centred around identity, impact, advocacy, and purpose."
    }
  ];

  return (
    <section className="py-24 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements & Recognition"
          subtitle="Milestones, leadership roles, and recognitions that reflect her growing journey."
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-sage before:to-transparent">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-pure-white bg-soft-beige group-hover:bg-soft-gold text-deep-green group-hover:text-pure-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
                  <Award className="w-4 h-4" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-warm-ivory border border-muted-sage/20 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-serif text-xl text-navy-blue mb-2">{item.title}</h4>
                  <p className="text-charcoal text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="inline-block text-sm text-muted-grey italic bg-muted-sage/20 px-6 py-2 rounded-full">
              More achievements, certificates, and recognitions can be added as her journey grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
