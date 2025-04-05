
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import FeaturedCategories from '@/components/FeaturedCategories';
import FeaturedBanner from '@/components/FeaturedBanner';
import ProductTypes from '@/components/ProductTypes';
import MembershipBanner from '@/components/MembershipBanner';
import { useCart } from '@/context/CartContext';
import { newArrivals, bestSellers } from '@/data/catalogData';

const Index = () => {
  const { 
    cartItems,
    isCartOpen,
    totalCartItems,
    setIsCartOpen,
    addToCart,
    updateCartItemQuantity,
    removeCartItem
  } = useCart();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        cartItemCount={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Categories */}
        <FeaturedCategories />
        
        {/* New Arrivals */}
        <ProductGrid 
          title="New Arrivals" 
          products={newArrivals}
          onAddToCart={addToCart}
        />
        
        {/* Featured Banner */}
        <FeaturedBanner />
        
        {/* Best Sellers */}
        <ProductGrid 
          title="Best Sellers" 
          products={bestSellers}
          onAddToCart={addToCart}
        />
        
        {/* Product Types */}
        <ProductTypes />
        
        {/* Membership/Subscription Banner */}
        <MembershipBanner />
      </main>
      
      <Footer />
      
      {/* Shopping Cart Sidebar */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeCartItem}
      />
    </div>
  );
};

export default Index;
