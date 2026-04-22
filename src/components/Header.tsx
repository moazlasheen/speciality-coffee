import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Search, Coffee } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  cartCount: number;
  onCartOpen: () => void;
}

const navLinks = [
  { id: 'shop', label: 'Shop' },
  { id: 'subscription', label: 'Subscribe' },
  { id: 'about', label: 'Our Story' },
  { id: 'blog', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ currentPage, onNavigate, cartCount, onCartOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream-200/95 backdrop-blur-md shadow-[0_1px_0_rgba(44,24,16,0.08)]'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => { onNavigate('home'); setIsMobileOpen(false); }}
              className="flex items-center gap-2.5 group"
              aria-label="Ember & Origin — Home"
            >
              <Coffee className="w-6 h-6 text-ember-300 transition-transform duration-300 group-hover:rotate-12" />
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl text-roast-500 leading-none tracking-tight">
                  Ember & Origin
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-charcoal-200 font-sans font-medium hidden sm:block">
                  Specialty Roasters
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-4 py-2 text-[13px] font-sans font-medium uppercase tracking-[0.1em] transition-colors duration-200 rounded ${
                    currentPage === link.id
                      ? 'text-ember-300'
                      : 'text-roast-400 hover:text-ember-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2.5 text-roast-400 hover:text-ember-300 transition-colors hidden md:flex"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>

              <button
                onClick={onCartOpen}
                className="relative p-2.5 text-roast-400 hover:text-ember-300 transition-colors"
                aria-label={`Shopping cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-[18px] h-[18px]" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-ember-300 text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2.5 text-roast-400 hover:text-ember-300 transition-colors lg:hidden"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-cream-400 bg-cream-100/95 backdrop-blur-md">
            <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-4">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-200" />
                <input
                  type="search"
                  placeholder="Search coffees, origins, brewing guides..."
                  className="w-full pl-11 pr-4 py-3 bg-cream-200 border border-cream-400 rounded-sm text-sm font-sans text-roast-500 placeholder:text-charcoal-200 focus:outline-none focus:border-ember-300 transition-colors"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          isMobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-roast-500/40 transition-opacity duration-500 ${
            isMobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-cream-100 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 px-8">
            <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <button
                  key={link.id}
                  onClick={() => { onNavigate(link.id); setIsMobileOpen(false); }}
                  className={`text-left py-3 font-serif text-2xl transition-all duration-300 ${
                    currentPage === link.id ? 'text-ember-300' : 'text-roast-500'
                  }`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-10 pt-8 border-t border-cream-400">
              <p className="text-caption uppercase text-charcoal-200 font-sans font-medium mb-3">
                Follow Us
              </p>
              <div className="flex gap-4 text-body-sm text-roast-300 font-sans">
                <a href="#" className="hover:text-ember-300 transition-colors">Instagram</a>
                <a href="#" className="hover:text-ember-300 transition-colors">Twitter</a>
                <a href="#" className="hover:text-ember-300 transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
