import React from 'react';
import { ArrowRight, MapPin, Leaf, Award, Truck } from 'lucide-react';
import { products } from '../data/products';
import { reviews } from '../data/reviews';
import { blogPosts } from '../data/blog';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import SectionLabel from '../components/SectionLabel';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Product } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product) => void;
  onViewProduct: (productId: string) => void;
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

export default function HomePage({ onNavigate, onAddToCart, onViewProduct }: HomePageProps) {
  const featuredProduct = products[0];
  const shopProducts = products.slice(1, 5);
  const pressLogos = ['Bon Appétit', 'Eater', 'Food & Wine', 'NYT Cooking'];

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-end grain-overlay overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Coffee beans being roasted"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-500 via-midnight-500/60 to-midnight-500/20" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 pb-16 md:pb-22 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 editorial-fade">
              <div className="w-8 h-px bg-terra-300" />
              <span className="text-caption uppercase tracking-[0.25em] text-terra-200 font-sans font-medium">
                Specialty Coffee Roasters
              </span>
            </div>
            <h1 className="font-serif text-display text-cream-100 mb-6 editorial-fade delay-100 text-balance">
              Coffee with a<br />
              <em className="text-terra-200">sense of place</em>
            </h1>
            <p className="text-body-lg font-sans text-cream-300/80 max-w-lg mb-10 editorial-fade delay-200 leading-relaxed">
              Single-origin beans sourced directly from farmers, roasted in small batches to reveal the terroir of each origin.
            </p>
            <div className="flex flex-wrap gap-4 editorial-fade delay-300">
              <button
                onClick={() => onNavigate('shop')}
                className="flex items-center gap-2.5 px-7 py-4 bg-terra-300 text-white font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-terra-400 transition-colors"
              >
                Shop Coffee
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('subscription')}
                className="flex items-center gap-2.5 px-7 py-4 border border-cream-300/30 text-cream-200 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-cream-100/10 transition-colors"
              >
                Start a Subscription
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-cream-400/50 font-sans rotate-90 origin-center translate-x-3 mb-6">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-cream-400/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-midnight-500 border-b border-midnight-300/15">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: MapPin, text: 'Direct Trade Sourcing' },
              { icon: Leaf, text: 'Carbon Neutral Shipping' },
              { icon: Award, text: 'Roasted to Order' },
              { icon: Truck, text: 'Free Shipping $40+' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-terra-300 flex-shrink-0" />
                <span className="text-body-sm font-sans text-cream-300">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCT ===== */}
      <section className="py-18 md:py-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <SectionLabel label="Featured" className="mb-8" />
          </RevealSection>
          <RevealSection delay={100}>
            <ProductCard
              product={featuredProduct}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
              variant="featured"
            />
          </RevealSection>
        </div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="pb-18 md:pb-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel label="The Collection" className="mb-4" />
                <h2 className="font-serif text-h2 text-midnight-500">
                  Explore our origins
                </h2>
              </div>
              <button
                onClick={() => onNavigate('shop')}
                className="hidden md:flex items-center gap-1.5 text-body-sm font-sans font-medium text-terra-300 hover:text-terra-400 transition-colors"
              >
                View All
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {shopProducts.map((product, i) => (
              <RevealSection key={product.id} delay={i * 80}>
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onViewProduct={onViewProduct}
                />
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <div className="mt-10 text-center md:hidden">
              <button
                onClick={() => onNavigate('shop')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-midnight-400 text-midnight-500 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-midnight-500 hover:text-cream-100 transition-colors"
              >
                View All Coffee
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== ORIGIN STORY BAND ===== */}
      <section className="relative py-22 md:py-34 grain-overlay overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Coffee farm landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-midnight-500/80" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <RevealSection>
              <div>
                <SectionLabel label="Our Philosophy" className="mb-6" />
                <h2 className="font-serif text-h1 text-cream-100 mb-6 text-balance">
                  From seed to cup,<br />every step matters
                </h2>
                <p className="text-body-lg font-sans text-cream-300/80 leading-relaxed mb-8">
                  We travel to origin, build relationships with farmers, and pay premiums that sustain communities. Then we roast each lot to honor its unique character — never to mask it.
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="flex items-center gap-2.5 px-7 py-4 border border-cream-300/30 text-cream-200 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-cream-100/10 transition-colors"
                >
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '8', label: 'Origin Countries' },
                  { number: '47', label: 'Partner Farms' },
                  { number: '30-50%', label: 'Above Market Price' },
                  { number: '72hr', label: 'Roast to Door' },
                ].map(stat => (
                  <div key={stat.label} className="p-5 md:p-6 border border-cream-300/15 rounded-sm">
                    <p className="font-serif text-h2 text-terra-200 mb-1">{stat.number}</p>
                    <p className="text-caption uppercase tracking-[0.1em] text-cream-400/60 font-sans">{stat.label}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== SUBSCRIPTION CTA ===== */}
      <section className="py-18 md:py-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <div className="bg-cream-100 border border-cream-400 rounded-sm overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 aspect-[4/3] md:aspect-auto">
                  <img
                    src="https://images.pexels.com/photos/4820769/pexels-photo-4820769.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Fresh coffee being poured"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-14 flex flex-col justify-center">
                  <SectionLabel label="Subscribe & Save 15%" className="mb-5" />
                  <h2 className="font-serif text-h2 text-midnight-500 mb-4 text-balance">
                    Never run out of<br />exceptional coffee
                  </h2>
                  <p className="text-body font-sans text-midnight-200 leading-relaxed mb-8 max-w-md">
                    Choose your frequency, pick your roast (or let us surprise you), and enjoy freshly roasted coffee delivered to your door. Pause or cancel anytime.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => onNavigate('subscription')}
                      className="flex items-center gap-2.5 px-7 py-4 bg-midnight-500 text-cream-100 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-midnight-600 transition-colors"
                    >
                      Build Your Subscription
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 text-body-sm font-sans text-midnight-200">
                      <span>From</span>
                      <span className="font-serif text-lg text-midnight-500">$16.95</span>
                      <span>/ bag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="pb-18 md:pb-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel label="Testimonials" className="mb-4" />
                <h2 className="font-serif text-h2 text-midnight-500">
                  What our community says
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2">
                {pressLogos.map(name => (
                  <span key={name} className="px-4 py-2 text-caption font-sans font-medium text-midnight-200 uppercase tracking-[0.1em]">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review, i) => (
              <RevealSection key={review.id} delay={i * 100}>
                <ReviewCard review={review} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOURNAL PREVIEW ===== */}
      <section className="pb-18 md:pb-30">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel label="The Journal" className="mb-4" />
                <h2 className="font-serif text-h2 text-midnight-500">
                  Stories & guides
                </h2>
              </div>
              <button
                onClick={() => onNavigate('blog')}
                className="hidden md:flex items-center gap-1.5 text-body-sm font-sans font-medium text-terra-300 hover:text-terra-400 transition-colors"
              >
                All Articles
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <RevealSection key={post.id} delay={i * 100}>
                <article className="group cursor-pointer" onClick={() => onNavigate('blog')}>
                  <div className="aspect-[3/2] overflow-hidden rounded-sm mb-5 bg-cream-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-caption uppercase tracking-[0.15em] text-teal-300 font-sans font-medium">
                      {post.category}
                    </span>
                    <span className="text-caption text-midnight-200 font-sans">{post.readTime}</span>
                  </div>
                  <h3 className="font-serif text-h4 text-midnight-500 mb-2 group-hover:text-terra-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-body-sm font-sans text-midnight-200 line-clamp-2">
                    {post.excerpt}
                  </p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
