import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionLabel from '../components/SectionLabel';
import { Product } from '../types';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
  onViewProduct: (productId: string) => void;
}

const roastFilters = ['all', 'light', 'medium', 'medium-dark', 'dark'] as const;
const originFilters = ['all', 'Ethiopia', 'Colombia', 'Guatemala', 'Kenya', 'Brazil', 'Sumatra', 'Costa Rica', 'Rwanda'] as const;
const brewFilters = ['all', 'Pour Over', 'Espresso', 'French Press', 'AeroPress', 'Cold Brew', 'Drip'] as const;
const formatFilters = ['all', 'whole-bean', 'ground', 'pods'] as const;
const sortOptions = ['featured', 'price-low', 'price-high', 'name'] as const;

export default function ShopPage({ onAddToCart, onViewProduct }: ShopPageProps) {
  const [roast, setRoast] = useState<string>('all');
  const [origin, setOrigin] = useState<string>('all');
  const [brew, setBrew] = useState<string>('all');
  const [format, setFormat] = useState<string>('all');
  const [sort, setSort] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];
    if (roast !== 'all') result = result.filter(p => p.roastLevel === roast);
    if (origin !== 'all') result = result.filter(p => p.origin === origin);
    if (brew !== 'all') result = result.filter(p => p.brewMethods.includes(brew));
    if (format !== 'all') result = result.filter(p => p.formats.includes(format as 'whole-bean' | 'ground' | 'pods'));

    switch (sort) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return result;
  }, [roast, origin, brew, format, sort]);

  const activeFilterCount = [roast, origin, brew, format].filter(f => f !== 'all').length;

  const clearFilters = () => {
    setRoast('all');
    setOrigin('all');
    setBrew('all');
    setFormat('all');
  };

  return (
    <main className="pt-24 md:pt-28 pb-18 md:pb-30">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <SectionLabel label="Shop" className="mb-4" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-h1 text-midnight-500 mb-2">Our Coffee</h1>
              <p className="text-body font-sans text-midnight-200 max-w-lg">
                Single-origin coffees roasted to order. Each bag is stamped with its roast date and ships within 48 hours.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2.5 border rounded-sm text-body-sm font-sans font-medium transition-colors ${
                  showFilters || activeFilterCount > 0
                    ? 'border-terra-300 text-terra-300 bg-terra-50'
                    : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 bg-terra-300 text-white text-[10px] rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="px-4 py-2.5 border border-cream-400 rounded-sm text-body-sm font-sans text-midnight-400 bg-cream-100 focus:outline-none focus:border-terra-300"
              >
                {sortOptions.map(opt => (
                  <option key={opt} value={opt}>
                    {opt === 'featured' ? 'Featured' : opt === 'price-low' ? 'Price: Low → High' : opt === 'price-high' ? 'Price: High → Low' : 'Name A–Z'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-10 p-6 md:p-8 bg-cream-100 border border-cream-400 rounded-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg text-midnight-500">Filter By</h3>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-body-sm font-sans text-terra-300 hover:text-terra-400"
                >
                  <X className="w-3 h-3" />
                  Clear all
                </button>
              )}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Roast */}
              <div>
                <p className="text-caption uppercase tracking-[0.15em] text-midnight-200 font-sans font-medium mb-3">Roast Level</p>
                <div className="flex flex-wrap gap-2">
                  {roastFilters.map(r => (
                    <button
                      key={r}
                      onClick={() => setRoast(r)}
                      className={`px-3 py-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.08em] rounded-sm border transition-colors ${
                        roast === r
                          ? 'bg-midnight-500 text-cream-100 border-midnight-500'
                          : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
                      }`}
                    >
                      {r === 'all' ? 'All' : r.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
              {/* Origin */}
              <div>
                <p className="text-caption uppercase tracking-[0.15em] text-midnight-200 font-sans font-medium mb-3">Origin</p>
                <div className="flex flex-wrap gap-2">
                  {originFilters.map(o => (
                    <button
                      key={o}
                      onClick={() => setOrigin(o)}
                      className={`px-3 py-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.08em] rounded-sm border transition-colors ${
                        origin === o
                          ? 'bg-midnight-500 text-cream-100 border-midnight-500'
                          : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
                      }`}
                    >
                      {o === 'all' ? 'All' : o}
                    </button>
                  ))}
                </div>
              </div>
              {/* Brew Method */}
              <div>
                <p className="text-caption uppercase tracking-[0.15em] text-midnight-200 font-sans font-medium mb-3">Brew Method</p>
                <div className="flex flex-wrap gap-2">
                  {brewFilters.map(b => (
                    <button
                      key={b}
                      onClick={() => setBrew(b)}
                      className={`px-3 py-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.08em] rounded-sm border transition-colors ${
                        brew === b
                          ? 'bg-midnight-500 text-cream-100 border-midnight-500'
                          : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
                      }`}
                    >
                      {b === 'all' ? 'All' : b}
                    </button>
                  ))}
                </div>
              </div>
              {/* Format */}
              <div>
                <p className="text-caption uppercase tracking-[0.15em] text-midnight-200 font-sans font-medium mb-3">Format</p>
                <div className="flex flex-wrap gap-2">
                  {formatFilters.map(f => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      className={`px-3 py-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.08em] rounded-sm border transition-colors ${
                        format === f
                          ? 'bg-midnight-500 text-cream-100 border-midnight-500'
                          : 'border-cream-400 text-midnight-400 hover:border-midnight-200'
                      }`}
                    >
                      {f === 'all' ? 'All' : f.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-body-sm font-sans text-midnight-200">
            {filtered.length} {filtered.length === 1 ? 'coffee' : 'coffees'}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-h3 text-midnight-400 mb-3">No coffees match your filters</p>
            <p className="text-body font-sans text-midnight-200 mb-6">Try adjusting your selection or browse all coffees.</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-midnight-500 text-cream-100 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-midnight-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
