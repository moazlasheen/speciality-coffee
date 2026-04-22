import React from 'react';
import { Coffee, ArrowUpRight, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-midnight-500 text-cream-300 grain-overlay" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Newsletter */}
        <div className="py-16 md:py-22 border-b border-midnight-300/20">
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div>
              <p className="text-caption uppercase tracking-[0.2em] text-terra-200 font-sans font-medium mb-3">
                Stay in the loop
              </p>
              <h3 className="font-serif text-h2 text-cream-100">
                First access to new<br />roasts & stories
              </h3>
            </div>
            <div>
              <form className="flex gap-3" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3.5 bg-midnight-400 border border-midnight-300/30 rounded-sm text-sm font-sans text-cream-200 placeholder:text-midnight-100/50 focus:outline-none focus:border-terra-300 transition-colors"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-terra-300 text-white text-sm font-sans font-medium uppercase tracking-[0.08em] rounded-sm hover:bg-terra-400 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-[11px] text-midnight-100/40 font-sans mt-3">
                No spam. Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="py-14 md:py-18 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-caption uppercase tracking-[0.2em] text-rose-300 font-sans font-medium mb-5">
              Shop
            </p>
            <ul className="space-y-3">
              {['All Coffee', 'Light Roasts', 'Medium Roasts', 'Dark Roasts', 'Subscriptions', 'Gift Cards'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate('shop')}
                    className="text-body-sm text-cream-400 hover:text-terra-200 transition-colors font-sans"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-caption uppercase tracking-[0.2em] text-rose-300 font-sans font-medium mb-5">
              Learn
            </p>
            <ul className="space-y-3">
              {['Brewing Guides', 'Origin Stories', 'Coffee Education', 'Our Process', 'Sustainability'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate('blog')}
                    className="text-body-sm text-cream-400 hover:text-terra-200 transition-colors font-sans"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-caption uppercase tracking-[0.2em] text-rose-300 font-sans font-medium mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {['Our Story', 'The Team', 'Careers', 'Press', 'Wholesale'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-body-sm text-cream-400 hover:text-terra-200 transition-colors font-sans"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-caption uppercase tracking-[0.2em] text-rose-300 font-sans font-medium mb-5">
              Support
            </p>
            <ul className="space-y-3">
              {['FAQ', 'Shipping & Returns', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-body-sm text-cream-400 hover:text-terra-200 transition-colors font-sans"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-midnight-300/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Coffee className="w-5 h-5 text-terra-300" />
            <span className="font-serif text-base text-cream-200">Ember & Origin</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-cream-400 hover:text-terra-200 transition-colors" aria-label="Instagram">
              <Instagram className="w-[18px] h-[18px]" />
            </a>
            <a href="#" className="text-cream-400 hover:text-terra-200 transition-colors" aria-label="YouTube">
              <Youtube className="w-[18px] h-[18px]" />
            </a>
            <a href="#" className="text-cream-400 hover:text-terra-200 transition-colors flex items-center gap-1 text-body-sm font-sans" aria-label="Twitter / X">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>X</span>
            </a>
          </div>
          <p className="text-[11px] text-midnight-100/40 font-sans">
            © 2025 Ember & Origin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
