import React from 'react';
import { ArrowRight, Heart, Globe, Sprout, Flame } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutPageProps {
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

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const team = [
    { name: 'Elena Vasquez', role: 'Founder & Head Roaster', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Marcus Chen', role: 'Green Buyer & QC Lead', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Amara Osei', role: 'Operations Manager', image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Kai Nakamura', role: 'Head Barista & Educator', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  return (
    <main className="pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative py-22 md:py-34 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Coffee roasting process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight-500/75" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="max-w-2xl">
            <SectionLabel label="Our Story" className="mb-6" />
            <h1 className="font-serif text-display text-cream-100 mb-6 text-balance">
              Roasted with<br /><em className="text-terra-200">intention</em>
            </h1>
            <p className="text-body-lg font-sans text-cream-300/80 leading-relaxed">
              Ember & Origin was born from a simple belief: great coffee should taste like where it comes from. We're a small-batch roastery dedicated to honoring the farmers, the land, and the craft behind every cup.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-18 md:py-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealSection>
              <div className="aspect-[4/5] bg-cream-300 rounded-sm overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Coffee cherries on the plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </RevealSection>
            <RevealSection delay={150}>
              <div>
                <SectionLabel label="Philosophy" className="mb-6" />
                <h2 className="font-serif text-h1 text-midnight-500 mb-6">
                  Terroir over trend
                </h2>
                <div className="space-y-4 text-body font-sans text-midnight-200 leading-relaxed">
                  <p>
                    We don't chase the latest processing fad or the most exotic variety. Instead, we seek coffees that express their origin — the soil, the altitude, the climate, the hands that grew them.
                  </p>
                  <p>
                    Our roasting philosophy is one of restraint. We develop each lot just enough to reveal its inherent character, never to impose our own. Light enough to preserve acidity and floral notes, developed enough to ensure sweetness and balance.
                  </p>
                  <p>
                    Every bag we sell is roasted within 48 hours of your order. We believe freshness isn't a luxury — it's a baseline.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-18 md:py-30 bg-cream-100 grain-overlay">
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <div className="text-center mb-14">
              <SectionLabel label="What We Stand For" className="justify-center mb-4" />
              <h2 className="font-serif text-h1 text-midnight-500">Our commitments</h2>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Direct Sourcing',
                text: 'We buy directly from producers in 8 countries, visiting origin twice yearly to cup, select, and build lasting partnerships.',
                accent: 'bg-teal-50 text-teal-300',
              },
              {
                icon: Heart,
                title: 'Fair Pricing',
                text: 'We pay 30-50% above commodity prices, ensuring farmers can invest in quality, their families, and their land.',
                accent: 'bg-rose-50 text-rose-400',
              },
              {
                icon: Sprout,
                title: 'Sustainability',
                text: 'Carbon-neutral shipping, compostable packaging, and partnerships with reforestation programs at origin.',
                accent: 'bg-teal-50 text-teal-300',
              },
              {
                icon: Flame,
                title: 'Small Batch',
                text: 'Every lot is roasted in batches of 25kg or less, profiled individually, and shipped within 48 hours of roasting.',
                accent: 'bg-terra-50 text-terra-300',
              },
            ].map(({ icon: Icon, title, text, accent }, i) => (
              <RevealSection key={title} delay={i * 100}>
                <div className="p-6 md:p-8">
                  <div className={`w-10 h-10 ${accent.split(' ')[0]} rounded-full flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${accent.split(' ')[1]}`} />
                  </div>
                  <h3 className="font-serif text-h4 text-midnight-500 mb-3">{title}</h3>
                  <p className="text-body-sm font-sans text-midnight-200 leading-relaxed">{text}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-18 md:py-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <SectionLabel label="The Process" className="mb-4" />
            <h2 className="font-serif text-h1 text-midnight-500 mb-14">From cherry to cup</h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: '01',
                title: 'Sourcing',
                text: 'We travel to origin, cup hundreds of samples, and select only lots that tell a story. Direct relationships mean full traceability and fair compensation.',
                image: 'https://images.pexels.com/photos/2067630/pexels-photo-2067630.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                step: '02',
                title: 'Roasting',
                text: 'Each lot gets its own roast profile, developed through iterative cupping. We roast on a vintage Probat, balancing tradition with precision data logging.',
                image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
              {
                step: '03',
                title: 'Delivery',
                text: 'Roasted to order, packed in compostable bags with a one-way valve, and shipped within 48 hours. Your coffee arrives at peak freshness.',
                image: 'https://images.pexels.com/photos/4820769/pexels-photo-4820769.jpeg?auto=compress&cs=tinysrgb&w=600',
              },
            ].map((item, i) => (
              <RevealSection key={item.step} delay={i * 120}>
                <div className="group">
                  <div className="aspect-[3/2] bg-cream-300 rounded-sm overflow-hidden mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-caption text-terra-300 font-sans font-medium tracking-[0.15em]">{item.step}</span>
                  <h3 className="font-serif text-h3 text-midnight-500 mt-2 mb-3">{item.title}</h3>
                  <p className="text-body-sm font-sans text-midnight-200 leading-relaxed">{item.text}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-18 md:py-30 bg-midnight-500 grain-overlay">
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <SectionLabel label="The Team" className="mb-4" />
            <h2 className="font-serif text-h1 text-cream-100 mb-14">The people behind the roast</h2>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <RevealSection key={member.name} delay={i * 100}>
                <div className="group">
                  <div className="aspect-[3/4] bg-midnight-400 rounded-sm overflow-hidden mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-h4 text-cream-100">{member.name}</h3>
                  <p className="text-body-sm font-sans text-rose-300 mt-1">{member.role}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-18 md:py-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 text-center">
          <RevealSection>
            <h2 className="font-serif text-h1 text-midnight-500 mb-4">Ready to taste the difference?</h2>
            <p className="text-body-lg font-sans text-midnight-200 max-w-lg mx-auto mb-8">
              Start with our best sellers or build a subscription tailored to your palate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('shop')}
                className="flex items-center gap-2.5 px-7 py-4 bg-terra-300 text-white font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-terra-400 transition-colors"
              >
                Shop Coffee
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('subscription')}
                className="flex items-center gap-2.5 px-7 py-4 border border-midnight-400 text-midnight-500 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-midnight-500 hover:text-cream-100 transition-colors"
              >
                Start a Subscription
              </button>
            </div>
          </RevealSection>
        </div>
      </section>
    </main>
  );
}
