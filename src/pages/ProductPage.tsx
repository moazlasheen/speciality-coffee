import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, ShoppingBag, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import FlavorWheel from '../components/FlavorWheel';
import SectionLabel from '../components/SectionLabel';
import { Product } from '../types';

interface ProductPageProps {
  productId: string;
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product, quantity: number, grind: string) => void;
  onViewProduct: (productId: string) => void;
}

const grindOptions = ['Whole Bean', 'Coarse (French Press)', 'Medium (Drip/Pour Over)', 'Fine (Espresso)'];

export default function ProductPage({ productId, onNavigate, onAddToCart, onViewProduct }: ProductPageProps) {
  const product = products.find(p => p.id === productId) || products[0];
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'brewing' | 'origin'>('details');

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const roastLabel: Record<string, string> = {
    light: 'Light Roast',
    medium: 'Medium Roast',
    'medium-dark': 'Medium-Dark Roast',
    dark: 'Dark Roast',
  };

  return (
    <main className="pt-24 md:pt-28 pb-18 md:pb-30">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => onNavigate('shop')}
          className="flex items-center gap-2 text-body-sm font-sans text-midnight-200 hover:text-terra-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </button>

        {/* Product Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-22">
          {/* Image */}
          <div className="aspect-[4/5] bg-cream-300 rounded-sm overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="lg:py-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.1em] bg-cream-300 text-midnight-400 rounded-sm">
                {roastLabel[product.roastLevel]}
              </span>
              {product.badge && (
                <span className="px-3 py-1 text-[11px] font-sans font-medium uppercase tracking-[0.1em] bg-terra-300 text-white rounded-sm">
                  {product.badge}
                </span>
              )}
            </div>

            <p className="text-caption uppercase tracking-[0.15em] text-teal-300 font-sans font-medium mb-2">
              {product.origin} · {product.region}
            </p>
            <h1 className="font-serif text-h1 text-midnight-500 mb-4">{product.name}</h1>
            <p className="text-body-lg font-sans text-midnight-200 leading-relaxed mb-6">
              {product.longDescription}
            </p>

            {/* Tasting Notes */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tastingNotes.map(note => (
                <span
                  key={note}
                  className="px-3 py-1.5 bg-rose-50 text-body-sm font-sans font-medium text-rose-500 rounded-sm border border-rose-100"
                >
                  {note}
                </span>
              ))}
            </div>

            {/* Flavor Profile */}
            <div className="mb-8 p-6 bg-cream-100 border border-cream-400 rounded-sm">
              <FlavorWheel profile={product.flavorProfile} />
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-h2 text-midnight-500">${product.price.toFixed(2)}</span>
              <span className="text-body font-sans text-midnight-200">/ {product.weight}</span>
            </div>

            {/* Grind Selection */}
            <div className="mb-6">
              <p className="text-caption uppercase tracking-[0.15em] text-midnight-200 font-sans font-medium mb-3">
                Grind
              </p>
              <div className="grid grid-cols-2 gap-2">
                {grindOptions.map(grind => (
                  <button
                    key={grind}
                    onClick={() => setSelectedGrind(grind)}
                    className={`px-4 py-3 text-body-sm font-sans text-left rounded-sm border transition-colors ${
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

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center border border-cream-400 rounded-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-midnight-200 hover:text-midnight-500 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-body font-sans font-medium text-midnight-500 tabular-nums min-w-[2.5rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-midnight-200 hover:text-midnight-500 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => onAddToCart(product, quantity, selectedGrind)}
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 bg-terra-300 text-white font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-terra-400 transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Subscribe option */}
            <button
              onClick={() => onNavigate('subscription')}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border border-midnight-400 text-midnight-500 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-midnight-500 hover:text-cream-100 transition-colors mb-8"
            >
              Subscribe & Save 15%
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, label: 'Free shipping $40+' },
                { icon: RotateCcw, label: 'Roasted to order' },
                { icon: Shield, label: 'Satisfaction guaranteed' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2 py-3">
                  <Icon className="w-4 h-4 text-teal-300" />
                  <span className="text-[11px] font-sans text-midnight-200">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-22">
          <div className="flex border-b border-cream-400 mb-8">
            {(['details', 'brewing', 'origin'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-body-sm font-sans font-medium uppercase tracking-[0.08em] border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-terra-300 text-midnight-500'
                    : 'border-transparent text-midnight-200 hover:text-midnight-400'
                }`}
              >
                {tab === 'details' ? 'Details' : tab === 'brewing' ? 'Brewing Guide' : 'Origin Info'}
              </button>
            ))}
          </div>

          {activeTab === 'details' && (
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-serif text-h3 text-midnight-500 mb-4">Coffee Details</h3>
                <dl className="space-y-3">
                  {[
                    ['Origin', `${product.origin}, ${product.region}`],
                    ['Altitude', product.altitude],
                    ['Process', product.process],
                    ['Variety', product.variety],
                    ['Roast Level', roastLabel[product.roastLevel]],
                    ['Weight', product.weight],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-cream-300">
                      <dt className="text-body-sm font-sans text-midnight-200">{label}</dt>
                      <dd className="text-body-sm font-sans font-medium text-midnight-500">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="font-serif text-h3 text-midnight-500 mb-4">Tasting Notes</h3>
                <p className="text-body font-sans text-midnight-200 leading-relaxed mb-6">
                  {product.longDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tastingNotes.map(note => (
                    <span key={note} className="px-4 py-2 bg-cream-100 border border-cream-400 text-body-sm font-sans text-midnight-400 rounded-sm">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'brewing' && (
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-serif text-h3 text-midnight-500 mb-4">Recommended Methods</h3>
                <div className="space-y-3">
                  {product.brewMethods.map(method => (
                    <div key={method} className="flex items-center gap-3 p-4 bg-cream-100 border border-cream-400 rounded-sm">
                      <div className="w-2 h-2 bg-teal-300 rounded-full" />
                      <span className="text-body font-sans text-midnight-500">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-serif text-h3 text-midnight-500 mb-4">Brewing Tips</h3>
                <div className="space-y-4 text-body font-sans text-midnight-200 leading-relaxed">
                  <p><strong className="text-midnight-500">Water Temperature:</strong> {product.roastLevel === 'light' ? '200-205°F (93-96°C)' : product.roastLevel === 'dark' ? '195-200°F (90-93°C)' : '198-203°F (92-95°C)'}</p>
                  <p><strong className="text-midnight-500">Ratio:</strong> 1:16 (coffee to water) for pour over, 1:15 for immersion</p>
                  <p><strong className="text-midnight-500">Grind Size:</strong> {product.roastLevel === 'light' ? 'Medium-fine for pour over, fine for AeroPress' : 'Medium for drip, coarse for French press'}</p>
                  <p><strong className="text-midnight-500">Bloom:</strong> 30-45 seconds with twice the weight of coffee in water</p>
                  <p><strong className="text-midnight-500">Total Brew Time:</strong> 3-4 minutes for pour over, 4 minutes for French press</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'origin' && (
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-serif text-h3 text-midnight-500 mb-4">About {product.origin}</h3>
                <p className="text-body font-sans text-midnight-200 leading-relaxed mb-4">
                  This coffee comes from {product.region}, grown at {product.altitude} above sea level. The {product.process.toLowerCase()} processing method and {product.variety} variety combine to create the distinctive flavor profile you taste in every cup.
                </p>
                <p className="text-body font-sans text-midnight-200 leading-relaxed">
                  We source this coffee through direct relationships with producers, paying 30-50% above commodity market prices to ensure sustainable livelihoods and continued investment in quality.
                </p>
              </div>
              <div className="aspect-[4/3] bg-cream-300 rounded-sm overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.origin} coffee origin`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <SectionLabel label="You Might Also Like" className="mb-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={() => onAddToCart(p, 1, 'Whole Bean')}
                onViewProduct={onViewProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
