
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/components/ProductCard';

const Women: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  
  // Sample women's products
  const womensProducts: Product[] = [
    {
      id: '3',
      name: 'Wonder Woman Star Power T-Shirt',
      price: 27.99,
      image: '/public/lovable-uploads/d8fbbcf3-deb1-4ff3-9823-45c51368b511.png',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    {
      id: '8',
      name: 'Harley Quinn Pop Art T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: '/public/lovable-uploads/d8fbbcf3-deb1-4ff3-9823-45c51368b511.png',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Women's Collection</h1>
            <p className="text-white/80 max-w-2xl">
              Discover our stylish range of superhero-themed t-shirts for women. From crop tops to graphic tees.
            </p>
          </div>
        </section>
        
        {/* Women's Products */}
        <ProductGrid 
          title="Women's T-Shirts" 
          products={womensProducts}
          onAddToCart={handleAddToCart}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Women;
