import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { faqItems } from '../data/faq';
import SectionLabel from '../components/SectionLabel';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const faqCategories = ['all', 'freshness', 'brewing', 'subscription', 'sourcing', 'shipping', 'sustainability'] as const;

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState<string>('all');

  const filteredFaq = faqCategory === 'all'
    ? faqItems
    : faqItems.filter(f => f.category === faqCategory);

  return (
    <main className="pt-24 md:pt-28 pb-18 md:pb-30">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-14 md:mb-18">
          <SectionLabel label="Get in Touch" className="mb-4" />
          <h1 className="font-serif text-h1 text-roast-500 mb-4">We'd love to hear from you</h1>
          <p className="text-body font-sans text-charcoal-300 max-w-lg">
            Questions about your order, our coffee, or wholesale inquiries? We're here to help.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-14 mb-22">
          {/* Contact Form */}
          <RevealSection>
            <div className="p-8 md:p-10 bg-cream-100 border border-cream-400 rounded-sm">
              <h2 className="font-serif text-h3 text-roast-500 mb-6">Send us a message</h2>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-caption uppercase tracking-[0.15em] text-charcoal-200 font-sans font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cream-200 border border-cream-400 rounded-sm text-body-sm font-sans text-roast-500 placeholder:text-charcoal-200 focus:outline-none focus:border-ember-300 transition-colors"
                      placeholder="Elena"
                    />
                  </div>
                  <div>
                    <label className="block text-caption uppercase tracking-[0.15em] text-charcoal-200 font-sans font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-cream-200 border border-cream-400 rounded-sm text-body-sm font-sans text-roast-500 placeholder:text-charcoal-200 focus:outline-none focus:border-ember-300 transition-colors"
                      placeholder="Vasquez"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-caption uppercase tracking-[0.15em] text-charcoal-200 font-sans font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-cream-200 border border-cream-400 rounded-sm text-body-sm font-sans text-roast-500 placeholder:text-charcoal-200 focus:outline-none focus:border-ember-300 transition-colors"
                    placeholder="elena@example.com"
                  />
                </div>
                <div>
                  <label className="block text-caption uppercase tracking-[0.15em] text-charcoal-200 font-sans font-medium mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-cream-200 border border-cream-400 rounded-sm text-body-sm font-sans text-roast-500 focus:outline-none focus:border-ember-300 transition-colors">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Subscription Help</option>
                    <option>Wholesale</option>
                    <option>Press & Media</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-caption uppercase tracking-[0.15em] text-charcoal-200 font-sans font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-cream-200 border border-cream-400 rounded-sm text-body-sm font-sans text-roast-500 placeholder:text-charcoal-200 focus:outline-none focus:border-ember-300 transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2.5 px-7 py-4 bg-ember-300 text-white font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-ember-400 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </RevealSection>

          {/* Contact Info */}
          <RevealSection delay={150}>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-h3 text-roast-500 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    { icon: Mail, label: 'Email', value: 'hello@emberandorigin.com', href: 'mailto:hello@emberandorigin.com' },
                    { icon: Phone, label: 'Phone', value: '(503) 555-0142', href: 'tel:+15035550142' },
                    { icon: MapPin, label: 'Roastery', value: '1847 SE Division St, Portland, OR 97202', href: '#' },
                    { icon: Clock, label: 'Hours', value: 'Mon–Fri 7am–5pm, Sat 8am–4pm', href: '#' },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-start gap-4 p-4 bg-cream-100 border border-cream-400 rounded-sm hover:border-ember-300/30 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-ember-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-ember-300" />
                      </div>
                      <div>
                        <p className="text-caption uppercase tracking-[0.15em] text-charcoal-200 font-sans font-medium mb-1">{label}</p>
                        <p className="text-body-sm font-sans text-roast-500 group-hover:text-ember-300 transition-colors">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-cream-300 rounded-sm overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our roastery location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-roast-500/30 flex items-center justify-center">
                  <div className="bg-cream-100/95 backdrop-blur-sm px-6 py-4 rounded-sm text-center">
                    <MapPin className="w-5 h-5 text-ember-300 mx-auto mb-2" />
                    <p className="font-serif text-base text-roast-500">Visit Our Roastery</p>
                    <p className="text-caption text-charcoal-200 font-sans">Portland, Oregon</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>

        {/* FAQ Section */}
        <div>
          <RevealSection>
            <div className="text-center mb-10">
              <SectionLabel label="FAQ" className="justify-center mb-4" />
              <h2 className="font-serif text-h1 text-roast-500 mb-4">Frequently asked questions</h2>
              <p className="text-body font-sans text-charcoal-300 max-w-lg mx-auto">
                Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
              </p>
            </div>
          </RevealSection>

          {/* FAQ Category Filter */}
          <RevealSection>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {faqCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setFaqCategory(cat); setOpenFaq(null); }}
                  className={`px-4 py-2 text-[11px] font-sans font-medium uppercase tracking-[0.1em] rounded-sm border transition-colors ${
                    faqCategory === cat
                      ? 'bg-roast-500 text-cream-100 border-roast-500'
                      : 'border-cream-400 text-roast-400 hover:border-roast-300'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </RevealSection>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFaq.map((item, i) => (
              <RevealSection key={i} delay={i * 50}>
                <div className="border border-cream-400 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-cream-100 hover:bg-cream-50 transition-colors"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-serif text-h4 text-roast-500 pr-4">{item.question}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-4 h-4 text-ember-300 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-200 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 md:px-6 pb-5 md:pb-6 bg-cream-100">
                      <p className="text-body font-sans text-charcoal-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
