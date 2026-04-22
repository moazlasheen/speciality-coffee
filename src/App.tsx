import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import SubscriptionPage from './pages/SubscriptionPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import { useCart } from './hooks/useCart';
import { Product } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const cart = useCart();

  const navigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const viewProduct = useCallback((productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleAddToCart = useCallback((product: Product, quantity = 1, grind = 'Whole Bean') => {
    cart.addItem(product, quantity, grind);
  }, [cart]);

  // Cookie consent
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent) setShowCookieConsent(false);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowCookieConsent(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} onAddToCart={handleAddToCart} onViewProduct={viewProduct} />;
      case 'shop':
        return <ShopPage onAddToCart={handleAddToCart} onViewProduct={viewProduct} />;
      case 'product':
        return (
          <ProductPage
            productId={selectedProductId}
            onNavigate={navigate}
            onAddToCart={handleAddToCart}
            onViewProduct={viewProduct}
          />
        );
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'subscription':
        return <SubscriptionPage onNavigate={navigate} />;
      case 'blog':
        return <BlogPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} onAddToCart={handleAddToCart} onViewProduct={viewProduct} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-200">
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        cartCount={cart.totalItems}
        onCartOpen={() => cart.setIsOpen(true)}
      />

      {renderPage()}

      <Footer onNavigate={navigate} />

      <CartDrawer
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
        totalPrice={cart.totalPrice}
      />

      {/* Cookie Consent */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-roast-500/97 backdrop-blur-md border-t border-roast-400/30">
          <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-body-sm font-sans text-cream-300/80 text-center sm:text-left">
              We use cookies to enhance your experience and analyze site traffic. By continuing, you agree to our{' '}
              <button className="text-ember-200 underline underline-offset-2 hover:text-ember-100">privacy policy</button>.
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={acceptCookies}
                className="px-5 py-2.5 bg-ember-300 text-white text-body-sm font-sans font-medium rounded-sm hover:bg-ember-400 transition-colors"
              >
                Accept
              </button>
              <button
                onClick={acceptCookies}
                className="px-5 py-2.5 border border-cream-300/20 text-cream-300 text-body-sm font-sans font-medium rounded-sm hover:bg-cream-100/10 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
