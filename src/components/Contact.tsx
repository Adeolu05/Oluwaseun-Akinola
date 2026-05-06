import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Mail, Instagram, Linkedin, Send } from 'lucide-react';

const CONTACT_EMAIL = 'akinolaoluwaseun12@gmail.com';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const opportunity = String(formData.get('opportunity') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = `[Portfolio] ${opportunity} — ${name || 'Website enquiry'}`;
    const body = [
      `Name: ${name}`,
      `Reply-to: ${email}`,
      '',
      `Opportunity type: ${opportunity}`,
      '',
      'Message:',
      message,
      '',
      '— Sent via portfolio contact form',
    ].join('\n');

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailto);

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-warm-ivory relative border-t border-muted-sage/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          eyebrow="Reach Out"
          title="Let’s Connect"
          subtitle="For speaking invitations, collaborations, advocacy projects, media enquiries, or partnership opportunities, kindly reach out."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-navy-blue text-pure-white rounded-[32px] p-10 md:p-12 shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-soft-gold rounded-full mix-blend-multiply filter blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative z-10 space-y-12">
                <div>
                  <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-pure-white/10 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg hover:text-soft-gold transition-colors break-all">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif mb-4 text-soft-beige">Social Media</h3>
                  <div className="flex flex-col space-y-3">
                    <a
                      href="https://www.tiktok.com/@theoluwaseunakinola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-pure-white/80 hover:text-soft-gold transition-colors"
                    >
                      <span className="font-medium tracking-wide">TikTok:</span>
                      <span>@theoluwaseunakinola</span>
                    </a>
                    <a
                      href="https://www.instagram.com/theoluwaseunakinola/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-pure-white/80 hover:text-soft-gold transition-colors"
                    >
                      <Instagram className="w-4 h-4 shrink-0" />
                      <span>@theoluwaseunakinola</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/search/results/all/?keywords=Oluwaseun+Akinola"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-pure-white/80 hover:text-soft-gold transition-colors"
                    >
                      <Linkedin className="w-4 h-4 shrink-0" />
                      <span>Oluwaseun Akinola</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-12 mt-12 border-t border-pure-white/10">
                <h3 className="text-sm font-semibold tracking-widest uppercase text-soft-gold mb-4">Availability</h3>
                <div className="flex flex-wrap gap-2">
                  {['Speaking Invitations', 'Advocacy Collaborations', 'Leadership Programmes', 'Faith-Based Events', 'Partnership Enquiries'].map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-pure-white/5 border border-pure-white/10 text-xs text-pure-white/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-pure-white rounded-[32px] p-10 md:p-12 shadow-sm border border-muted-sage/20"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 md:py-20">
                <div className="w-16 h-16 rounded-full bg-deep-green/10 flex items-center justify-center text-deep-green mb-4">
                  <Send size={24} />
                </div>
                <h3 className="text-2xl font-serif text-navy-blue">Open your email app</h3>
                <p className="text-muted-grey max-w-md leading-relaxed">
                  A draft message to <span className="text-charcoal font-medium">{CONTACT_EMAIL}</span> should open in your default mail app.
                  Send it from there to complete your note. If nothing opens, tap the email on the left or copy your message manually.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm font-medium text-deep-green hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2 rounded"
                >
                  Back to form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl bg-warm-ivory border border-muted-sage/50 focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl bg-warm-ivory border border-muted-sage/50 focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="opportunity" className="block text-sm font-medium text-charcoal mb-2">
                    Opportunity Type
                  </label>
                  <div className="relative">
                    <select
                      id="opportunity"
                      name="opportunity"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-warm-ivory border border-muted-sage/50 focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent appearance-none transition-all text-charcoal"
                      defaultValue="Speaking Invitation"
                    >
                      <option value="Speaking Invitation">Speaking Invitation</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Media Enquiry">Media Enquiry</option>
                      <option value="Advocacy Project">Advocacy Project</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-grey">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-warm-ivory border border-muted-sage/50 focus:outline-none focus:ring-2 focus:ring-deep-green focus:border-transparent transition-all resize-none"
                    placeholder="Tell me more about your event or idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-deep-green text-pure-white font-medium hover:bg-deep-green-hover transition-all shadow-md mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-green focus-visible:ring-offset-2"
                >
                  Send Message
                </button>
                <p className="text-xs text-muted-grey text-center leading-relaxed">
                  Opens your mail app with a pre-filled message so you can review and send it securely from there.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
