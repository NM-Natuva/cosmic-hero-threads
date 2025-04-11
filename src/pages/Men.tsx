
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/components/ProductCard';

const Men: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  
  // Enhanced men's products with more options
  const mensProducts: Product[] = [
    {
      id: '1',
      name: 'Batman Shadow Knight T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1000',
      category: 'Men',
      tags: ['DC Comics', 'Graphic Print']
    },
    {
      id: '2',
      name: 'Spider-Man Classic Logo Tee',
      price: 24.99,
      originalPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1000',
      category: 'Men',
      tags: ['Marvel', 'Oversized Fit']
    },
    {
      id: '4',
      name: 'Iron Man Tech Suit Tee',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000',
      category: 'Men',
      tags: ['Marvel', 'Long Sleeve']
    },
    {
      id: '5',
      name: 'Superman Classic Symbol Tee',
      price: 26.99,
      originalPrice: 35.99,
      image: 'https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?q=80&w=1000',
      category: 'Men',
      tags: ['DC Comics', 'Sleeveless']
    },
    // New products added
    {
      id: '9',
      name: 'Hulk Smash Edition Tee',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1000',
      category: 'Men',
      tags: ['Marvel', 'Premium Fit']
    },
    {
      id: '10',
      name: 'The Flash Lightning Bolt Shirt',
      price: 25.99,
      originalPrice: 32.99,
      image: 'https://images.unsplash.com/photo-1561052967-61fc91e48d79?q=80&w=1000',
      category: 'Men',
      tags: ['DC Comics', 'Athletic Fit']
    },
    {
      id: '11',
      name: 'Black Panther Wakanda Tech Tee',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=1000',
      category: 'Men',
      tags: ['Marvel', 'Limited Edition']
    },
    {
      id: '12',
      name: 'Joker Chaos Premium T-Shirt',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?q=80&w=1000',
      category: 'Men',
      tags: ['DC Comics', 'Collector Item']
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
