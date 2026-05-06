import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ArrowRight } from 'lucide-react';

export function Speaking() {
  const topics = [
    "Youth Leadership",
    "Faith and Purpose",
    "Advocacy and Social Impact",
    "Women in Leadership",
    "Diplomacy and Global Citizenship",
    "Community Service",
    "Personal Growth",
    "Purpose-Driven Living"
  ];

  return (
    <section id="speaking" className="py-24 bg-navy-blue text-pure-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10 background-pattern-subtle pointer-events-none"></div>
      <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-soft-gold blur-[150px] rounded-full opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 px-1">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-soft-gold mb-3">
            Programs & invitations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-serif relative pb-6 inline-block max-w-full text-pure-white [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] text-balance">
            <span className="text-pure-white">Speaking &</span>{' '}
            <span className="text-soft-gold">engagements</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-soft-gold" aria-hidden />
          </h2>
          <p className="text-base sm:text-lg text-soft-beige/90 leading-relaxed text-pretty">
            Available for conversations, panels, programmes, and events focused on leadership, advocacy, faith, diplomacy, and impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-pure-white/90 mb-10">
              Oluwaseun is available for youth events, advocacy conversations, faith-based programmes, leadership sessions, diplomacy discussions, community initiatives, and impact-focused engagements.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center space-x-3 bg-pure-white/5 p-4 rounded-xl border border-pure-white/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-soft-gold"></span>
                  <span className="font-medium text-sm text-pure-white/90">{topic}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-pure-white rounded-[28px] p-10 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-soft-gold"></div>
              <h3 className="text-2xl font-serif text-navy-blue mb-4">Invite Oluwaseun to Speak</h3>
              <p className="text-muted-grey mb-8">
                For panels, youth programmes, faith-based events, advocacy conversations, or partnership opportunities, reach out to start a conversation.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 w-full py-4 rounded-full bg-deep-green text-pure-white font-medium hover:bg-deep-green-hover transition-colors group"
              >
                <span>Send an Invitation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
