import { useState, useCallback } from 'react';
import { CartItem, Product } from '../types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, quantity = 1, grind = 'Whole Bean', format = 'whole-bean') => {
    setItems(prev => {
      const existing = prev.find(
        item => item.product.id === product.id && item.grind === grind && item.format === format
      );
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.grind === grind && item.format === format
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, grind, format }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, grind: string) => {
    setItems(prev => prev.filter(item => !(item.product.id === productId && item.grind === grind)));
  }, []);

  const updateQuantity = useCallback((productId: string, grind: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, grind);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId && item.grind === grind
          ? { ...item, quantity }
          : item
      )
    );
  }, [removeItem]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
  };
}
