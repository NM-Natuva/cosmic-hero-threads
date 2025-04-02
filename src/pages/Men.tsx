
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/components/ProductCard';

const Men: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  
  // Sample men's products
  const mensProducts: Product[] = [
    {
      id: '1',
      name: 'Batman Shadow Knight T-Shirt',
      price: 29.99,
      image: '/public/lovable-uploads/ede317e2-fedb-4004-b72d-5ee730357f0a.png',
      category: 'Men',
      tags: ['DC Comics', 'Graphic Print']
    },
    {
      id: '2',
      name: 'Spider-Man Classic Logo Tee',
      price: 24.99,
      originalPrice: 34.99,
      image: '/public/lovable-uploads/a4dc2ee2-9ef6-4ea8-bc1a-25b79993a68e.png',
      category: 'Men',
      tags: ['Marvel', 'Oversized Fit']
    },
    {
      id: '4',
      name: 'Iron Man Tech Suit Tee',
      price: 32.99,
      image: '/public/lovable-uploads/ac167788-081a-4272-8aa2-db0272de9049.png',
      category: 'Men',
      tags: ['Marvel', 'Long Sleeve']
    },
    {
      id: '5',
      name: 'Superman Classic Symbol Tee',
      price: 26.99,
      originalPrice: 35.99,
      image: '/public/lovable-uploads/87cdf70a-2c37-404f-bda5-f2480d52b8ab.png',
      category: 'Men',
      tags: ['DC Comics', 'Sleeveless']
    }
  ];
  
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        cartItemCount={cartItems.length} 
        onCartClick={() => console.log('Cart clicked')} 
      />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-hero-bg to-black py-16 text-white">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-4 group">
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Men's Collection</h1>
            <p className="text-white/80 max-w-2xl">
              Explore our exclusive range of superhero-themed t-shirts for men. From classics to limited editions.
            </p>
          </div>
        </section>
        
        {/* Men's Products */}
        <ProductGrid 
          title="Men's T-Shirts" 
          products={mensProducts}
          onAddToCart={handleAddToCart}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Men;
