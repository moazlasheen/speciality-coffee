import React, { useState } from 'react';
import { Check, ArrowRight, Gift, Repeat, Zap } from 'lucide-react';
import { products } from '../data/products';
import { subscriptionPlans } from '../data/subscriptions';
import SectionLabel from '../components/SectionLabel';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SubscriptionPageProps {
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

const grindOptions = ['Whole Bean', 'Coarse', 'Medium', 'Fine'];

export default function SubscriptionPage({ onNavigate }: SubscriptionPageProps) {
  const [selectedPlan, setSelectedPlan] = useState('ritual');
  const [selectedCoffee, setSelectedCoffee] = useState('surprise');
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');
  const [bags, setBags] = useState(1);

  const plan = subscriptionPlans.find(p => p.id === selectedPlan)!;
  const totalPerDelivery = (plan.pricePerBag * bags);

  return (
    <main className="pt-24 md:pt-28 pb-18 md:pb-30">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <SectionLabel label="Subscribe & Save 15%" className="justify-center mb-4" />
          <h1 className="font-serif text-h1 text-midnight-500 mb-4 text-balance">
            Build your coffee ritual
          </h1>
          <p className="text-body-lg font-sans text-midnight-200 max-w-xl mx-auto">
            Freshly roasted coffee delivered on your schedule. Customize everything, commit to nothing.
          </p>
        </div>

        {/* Benefits */}
        <RevealSection>
          <div className="grid sm:grid-cols-3 gap-6 mb-18">
            {[
              { icon: Zap, title: 'Always Fresh', text: 'Roasted after you order, never before', accent: 'bg-terra-50 text-terra-300' },
              { icon: Repeat, title: 'Fully Flexible', text: 'Pause, skip, swap, or cancel anytime', accent: 'bg-teal-50 text-teal-300' },
              { icon: Gift, title: 'Save 15%', text: 'Every bag, every delivery, automatically', accent: 'bg-rose-50 text-rose-400' },
            ].map(({ icon: Icon, title, text, accent }) => (
              <div key={title} className="flex items-start gap-4 p-6 bg-cream-100 border border-cream-400 rounded-sm">
                <div className={`w-10 h-10 ${accent.split(' ')[0]} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${accent.split(' ')[1]}`} />
                </div>
                <div>
                  <h3 className="font-serif text-h4 text-midnight-500 mb-1">{title}</h3>
                  <p className="text-body-sm font-sans text-midnight-200">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Builder */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Configuration */}
          <div className="lg:col-span-2 space-y-10">
            {/* Step 1: Frequency */}
            <RevealSection>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 bg-midnight-500 text-cream-100 text-body-sm font-sans font-medium rounded-full flex items-center justify-center">1</span>
                  <h2 className="font-serif text-h3 text-midnight-500">Choose your frequency</h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {subscriptionPlans.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPlan(p.id)}
                      className={`p-5 text-left rounded-sm border-2 transition-all ${
                        selectedPlan === p.id
                          ? 'border-terra-300 bg-terra-50'
                          : 'border-cream-400 bg-cream-100 hover:border-cream-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif text-h4 text-midnight-500">{p.name}</h3>
                        {selectedPlan === p.id && (
                          <div className="w-5 h-5 bg-terra-300 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-body-sm font-sans text-midnight-200 mb-3">{p.description}</p>
                      <p className="font-serif text-lg text-midnight-500">
                        ${p.pricePerBag.toFixed(2)}
                        <span className="text-caption text-midnight-200 font-sans ml-1">/ bag</span>
                      </p>
                      <p className="text-caption text-terra-300 font-sans font-medium mt-1">
                        {p.frequency === 'weekly' ? 'Every week' : p.frequency === 'biweekly' ? 'Every 2 weeks' : 'Every month'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Step 2: Coffee */}
            <RevealSection>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 bg-midnight-500 text-cream-100 text-body-sm font-sans font-medium rounded-full flex items-center justify-center">2</span>
                  <h2 className="font-serif text-h3 text-midnight-500">Pick your coffee</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedCoffee('surprise')}
                    className={`p-5 text-left rounded-sm border-2 transition-all ${
                      selectedCoffee === 'surprise'
                        ? 'border-terra-300 bg-terra-50'
                        : 'border-cream-400 bg-cream-100 hover:border-cream-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-h4 text-midnight-500">Roaster's Choice</h3>
                      {selectedCoffee === 'surprise' && (
                        <div className="w-5 h-5 bg-terra-300 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-body-sm font-sans text-midnight-200">
                      Let us surprise you with our current favorite single origin.
                    </p>
                  </button>
                  {products.slice(0, 5).map(product => (
                    <button
                      key={product.id}
                      onClick={() => setSelectedCoffee(product.id)}
                      className={`p-5 text-left rounded-sm border-2 transition-all ${
                        selectedCoffee === product.id
                          ? 'border-terra-300 bg-terra-50'
                          : 'border-cream-400 bg-cream-100 hover:border-cream-500'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-serif text-h4 text-midnight-500">{product.name}</h3>
                        {selectedCoffee === product.id && (
                          <div className="w-5 h-5 bg-terra-300 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-body-sm font-sans text-midnight-200">
                        {product.origin} · {product.tastingNotes.join(', ')}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Step 3: Grind & Quantity */}
            <RevealSection>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 bg-midnight-500 text-cream-100 text-body-sm font-sans font-medium rounded-full flex items-center justify-center">3</span>
                  <h2 className="font-serif text-h3 text-midnight-500">Customize</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-caption uppercase tracking-[0.15em] text-midnight-200 font-sans font-medium mb-3">Grind Preference</p>
                    <div className="space-y-2">
                      {grindOptions.map(grind => (
                        <button
                          key={grind}
                          onClick={() => setSelectedGrind(grind)}
                          className={`w-full px-4 py-3 text-left text-body-sm font-sans rounded-sm border transition-colors ${
                            selectedGrind === grind
                              ? 'border-midnight-500 bg-midnight-500 text-cream-100'
                              : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
                          }`}
                        >
                          {grind}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-caption uppercase tracking-[0.15em] text-midnight-200 font-sans font-medium mb-3">Bags per Delivery</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map(n => (
                        <button
                          key={n}
                          onClick={() => setBags(n)}
                          className={`px-4 py-3 text-center text-body font-sans font-medium rounded-sm border transition-colors ${
                            bags === n
                              ? 'border-midnight-500 bg-midnight-500 text-cream-100'
                              : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
                          }`}
                        >
                          {n} {n === 1 ? 'bag' : 'bags'}
                        </button>
                      ))}
                    </div>
                    <p className="text-caption text-midnight-200 font-sans mt-3">
                      Each bag is 340g (12oz) of freshly roasted coffee.
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 p-6 md:p-8 bg-cream-100 border border-cream-400 rounded-sm">
              <h3 className="font-serif text-h3 text-midnight-500 mb-6">Your Subscription</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2 border-b border-cream-300">
                  <span className="text-body-sm font-sans text-midnight-200">Plan</span>
                  <span className="text-body-sm font-sans font-medium text-midnight-500">{plan.name}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-cream-300">
                  <span className="text-body-sm font-sans text-midnight-200">Frequency</span>
                  <span className="text-body-sm font-sans font-medium text-midnight-500">
                    {plan.frequency === 'weekly' ? 'Weekly' : plan.frequency === 'biweekly' ? 'Bi-weekly' : 'Monthly'}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-cream-300">
                  <span className="text-body-sm font-sans text-midnight-200">Coffee</span>
                  <span className="text-body-sm font-sans font-medium text-midnight-500">
                    {selectedCoffee === 'surprise' ? "Roaster's Choice" : products.find(p => p.id === selectedCoffee)?.name}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-cream-300">
                  <span className="text-body-sm font-sans text-midnight-200">Grind</span>
                  <span className="text-body-sm font-sans font-medium text-midnight-500">{selectedGrind}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-cream-300">
                  <span className="text-body-sm font-sans text-midnight-200">Quantity</span>
                  <span className="text-body-sm font-sans font-medium text-midnight-500">{bags} {bags === 1 ? 'bag' : 'bags'}</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-2">
                <span className="text-body font-sans text-midnight-200">Per delivery</span>
                <span className="font-serif text-h2 text-midnight-500">${totalPerDelivery.toFixed(2)}</span>
              </div>
              <p className="text-caption text-teal-300 font-sans font-medium mb-6">
                You save ${(totalPerDelivery * 0.15 / 0.85).toFixed(2)} vs. one-time purchase
              </p>

              <button className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-terra-300 text-white font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-terra-400 transition-colors mb-3">
                Start Subscription
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-midnight-200 font-sans text-center">
                Free shipping on all subscriptions. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
