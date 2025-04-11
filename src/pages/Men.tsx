
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
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1743078788_7044700.jpg?w=480&dpr=1.5',
      category: 'Men',
      tags: ['DC Comics', 'Graphic Print']
    },
    {
      id: '2',
      name: 'Spider-Man Classic Logo Tee',
      price: 24.99,
      originalPrice: 34.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1695459061_4692972.jpg?format=webp&w=900&dpr=1.5',
      category: 'Men',
      tags: ['Marvel', 'Oversized Fit']
    },
    {
      id: '4',
      name: 'Iron Man Tech Suit Tee',
      price: 32.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1741861875_8361423.png?format=webp&w=480&dpr=1.5',
      category: 'Men',
      tags: ['Marvel', 'Long Sleeve']
    },
    {
      id: '5',
      name: 'Superman Classic Symbol Tee',
      price: 26.99,
      originalPrice: 35.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1740579063_6627508.jpg?format=webp&w=480&dpr=1.5',
      category: 'Men',
      tags: ['DC Comics', 'Sleeveless']
    },
    // New products added
    {
      id: '9',
      name: 'Hulk Smash Edition Tee',
      price: 28.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1742319137_1011186.jpg?format=webp&w=480&dpr=1.5',
      category: 'Men',
      tags: ['Marvel', 'Premium Fit']
    },
    {
      id: '10',
      name: 'The Flash Lightning Bolt Shirt',
      price: 25.99,
      originalPrice: 32.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1686370323_2426660.jpg?format=webp&w=480&dpr=1.5',
      category: 'Men',
      tags: ['DC Comics', 'Athletic Fit']
    },
    {
      id: '11',
      name: 'Black Panther Wakanda Tech Tee',
      price: 34.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1657992255_4455089.jpg?format=webp&w=480&dpr=1.5',
      category: 'Men',
      tags: ['Marvel', 'Limited Edition']
    },
    {
      id: '12',
      name: 'Joker Chaos Premium T-Shirt',
      price: 39.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1685447774_9691775.jpg?format=webp&w=480&dpr=1.5',
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
