import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';

const galleryImages = [
  {
    src: '/images/oluwaseun-akinola-gallery-global-nyc.jpg',
    alt: 'Oluwaseun Akinola in New York City — global citizenship and personal brand',
    span: 'md:col-span-2 md:row-span-2',
    label: 'Global Vision',
  },
  {
    src: '/images/oluwaseun-akinola-gallery-speaking-tedx.jpg',
    alt: 'Oluwaseun Akinola presenting at a TEDx-style leadership event',
    span: 'md:col-span-1 md:row-span-1',
    label: 'Speaking Moment',
  },
  {
    src: '/images/oluwaseun-akinola-gallery-portrait-stripes.jpg',
    alt: 'Portrait of Oluwaseun Akinola in striped modest fashion outdoors',
    span: 'md:col-span-1 md:row-span-1',
    label: 'Portrait Session',
  },
  {
    src: '/images/oluwaseun-akinola-gallery-event-traditional.jpg',
    alt: 'Oluwaseun Akinola in traditional attire at a formal gathering',
    span: 'md:col-span-1 md:row-span-1',
    label: 'Leadership Event',
  },
  {
    src: '/images/oluwaseun-akinola-gallery-studio-fashion.jpg',
    alt: 'Studio portrait — fashion-forward modest styling for media and brand storytelling',
    span: 'md:col-span-1 md:row-span-2',
    label: 'Faith & Purpose',
  },
  {
    src: '/images/oluwaseun-akinola-gallery-community-audience.jpg',
    alt: 'Community and peers engaged at an indoor programme — advocacy in context',
    span: 'md:col-span-2 md:row-span-1',
    label: 'Community Engagement',
  },
] as const;

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-warm-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="Visuals"
          title="Gallery & Media"
          subtitle="Moments from leadership, advocacy, service, speaking, and personal brand storytelling."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-2xl overflow-hidden bg-muted-sage/20 ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/images/oluwaseun-akinola-hero-portrait.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-pure-white font-medium text-sm tracking-wide bg-navy-blue/40 backdrop-blur-md px-3 py-1 rounded-full border border-pure-white/20">
                    {img.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
