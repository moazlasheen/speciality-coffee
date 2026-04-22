import React from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, grind: string, quantity: number) => void;
  onRemove: (productId: string, grind: string) => void;
  totalPrice: number;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove, totalPrice }: CartDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-roast-500/40 transition-opacity duration-400 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 w-full max-w-md h-full bg-cream-100 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-cream-400">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-[18px] h-[18px] text-roast-400" />
              <h2 className="font-serif text-xl text-roast-500">Your Cart</h2>
              <span className="text-caption text-charcoal-200 font-sans">({items.length})</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-charcoal-300 hover:text-roast-500 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-cream-400 mb-4" />
                <p className="font-serif text-lg text-roast-400 mb-2">Your cart is empty</p>
                <p className="text-body-sm text-charcoal-200 font-sans">
                  Discover our single-origin coffees and find your perfect cup.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={`${item.product.id}-${item.grind}`} className="flex gap-4">
                    <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 bg-cream-300">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-base text-roast-500 leading-tight">{item.product.name}</h3>
                          <p className="text-caption text-charcoal-200 font-sans mt-0.5">
                            {item.product.origin} · {item.grind}
                          </p>
                        </div>
                        <button
                          onClick={() => onRemove(item.product.id, item.grind)}
                          className="p-1 text-charcoal-200 hover:text-roast-500 transition-colors"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-cream-400 rounded-sm">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.grind, item.quantity - 1)}
                            className="p-1.5 text-charcoal-300 hover:text-roast-500 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-body-sm font-sans font-medium text-roast-500">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.grind, item.quantity + 1)}
                            className="p-1.5 text-charcoal-300 hover:text-roast-500 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-sans font-medium text-roast-500">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="px-6 py-6 border-t border-cream-400 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-body-sm text-charcoal-300 font-sans">Subtotal</span>
                <span className="font-serif text-xl text-roast-500">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-charcoal-200 font-sans">
                Free shipping on orders over $40. Tax calculated at checkout.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-roast-500 text-cream-100 font-sans font-medium text-sm uppercase tracking-[0.08em] rounded-sm hover:bg-roast-600 transition-colors">
                Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
