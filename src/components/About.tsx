import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { CorePillars } from './CorePillars';

export function About() {
  return (
    <section id="about" className="py-24 bg-pure-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="Introduction"
          title="About Oluwaseun"
          subtitle="A young voice shaped by purpose, service, and the desire to create meaningful change."
        />

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left: Image Placeholder/Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative pb-28 sm:pb-32 md:pb-0"
          >
            <div className="aspect-[4/5] bg-soft-beige rounded-2xl overflow-hidden shadow-lg border border-muted-sage/30 p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                   src="/images/oluwaseun-akinola-about-tedx-speaking.jpg"
                   alt="Oluwaseun Akinola speaking at TEDx Bada — youth leadership and public voice"
                   className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.onerror = null;
                     target.src = '/images/oluwaseun-akinola-hero-portrait.jpg';
                   }}
                />
              </div>
            </div>
            {/* Quote Card */}
            <div className="absolute left-1/2 z-10 w-[min(calc(100vw-2rem),280px)] -translate-x-1/2 bottom-0 translate-y-[45%] md:left-auto md:right-0 md:translate-x-0 md:translate-y-0 md:-bottom-8 md:-right-6 lg:-right-8 md:w-full md:max-w-[280px] bg-navy-blue text-pure-white p-5 sm:p-6 rounded-2xl shadow-xl">
              <p className="font-serif italic text-base sm:text-lg leading-relaxed">
                “Purpose becomes powerful when it is used in service of people.”
              </p>
            </div>
          </motion.div>

          {/* Right: Text and Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 pt-12 md:pt-0"
          >
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Oluwaseun Akinola is a faith-driven advocate, emerging diplomat, and impact-focused young leader committed to using her voice, values, and service to inspire positive change.
            </p>
            <p className="text-lg text-muted-grey leading-relaxed mb-10">
              Her work is rooted in faith, advocacy, diplomacy, and leadership. Through community engagement, public communication, and service-driven initiatives, she seeks to build bridges, encourage meaningful dialogue, and contribute to a better society.
            </p>

            <ul className="space-y-4">
              {[
                "Faith-led personal brand",
                "Passionate about advocacy and social impact",
                "Interested in diplomacy and global citizenship",
                "Committed to leadership, service, and community growth"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 mr-4 w-6 h-6 rounded-full bg-soft-beige flex items-center justify-center text-deep-green">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </span>
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      
      {/* Core values block right below about */}
      <div className="mt-32">
        <CorePillars />
      </div>
    </section>
  );
}
