import React from 'react';
import { Plus, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewProduct: (productId: string) => void;
  variant?: 'default' | 'featured';
}

const roastColors: Record<string, string> = {
  light: 'bg-amber-100 text-amber-800',
  medium: 'bg-orange-100 text-orange-800',
  'medium-dark': 'bg-orange-200 text-orange-900',
  dark: 'bg-stone-200 text-stone-800',
};

export default function ProductCard({ product, onAddToCart, onViewProduct, variant = 'default' }: ProductCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`group relative ${isFeatured ? 'md:grid md:grid-cols-2 md:gap-0' : ''}`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden bg-cream-300 cursor-pointer ${
          isFeatured ? 'aspect-[4/5] md:aspect-auto md:h-full' : 'aspect-[3/4]'
        }`}
        onClick={() => onViewProduct(product.id)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roast-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 px-3 py-1.5 bg-ember-300 text-white text-[10px] font-sans font-medium uppercase tracking-[0.15em] rounded-sm">
            {product.badge}
          </span>
        )}

        {/* Quick Add */}
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-4 right-4 w-10 h-10 bg-cream-100/95 backdrop-blur-sm text-roast-500 rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-ember-300 hover:text-white"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className={`${isFeatured ? 'p-6 md:p-10 flex flex-col justify-center bg-cream-100' : 'pt-5'}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-0.5 text-[10px] font-sans font-medium uppercase tracking-[0.1em] rounded-sm ${roastColors[product.roastLevel]}`}>
            {product.roastLevel.replace('-', ' ')}
          </span>
          <span className="text-caption text-charcoal-200 font-sans">{product.origin}</span>
        </div>

        <button
          onClick={() => onViewProduct(product.id)}
          className="text-left group/title"
        >
          <h3 className={`font-serif text-roast-500 leading-tight ${isFeatured ? 'text-h2 mb-3' : 'text-h4 mb-1'}`}>
            {product.name}
          </h3>
        </button>

        <p className={`text-charcoal-300 font-sans leading-relaxed ${isFeatured ? 'text-body mb-4' : 'text-body-sm mb-3 line-clamp-2'}`}>
          {product.description}
        </p>

        {/* Tasting Notes */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tastingNotes.map(note => (
            <span
              key={note}
              className="px-2.5 py-1 bg-cream-300/60 text-[11px] font-sans font-medium text-roast-300 rounded-sm"
            >
              {note}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-serif text-lg text-roast-500">
            ${product.price.toFixed(2)}
            <span className="text-caption text-charcoal-200 font-sans ml-1.5">/ {product.weight}</span>
          </p>
          {isFeatured && (
            <button
              onClick={() => onViewProduct(product.id)}
              className="flex items-center gap-1.5 text-body-sm font-sans font-medium text-ember-300 hover:text-ember-400 transition-colors"
            >
              View Details
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
