
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Product } from '@/components/ProductCard';

const Women: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  
  // Enhanced women's products with more options
  const womensProducts: Product[] = [
    {
      id: '3',
      name: 'Wonder Woman Star Power T-Shirt',
      price: 27.99,
      image: 'https://images.unsplash.com/photo-1577655197620-704858b270da?q=80&w=1000',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    {
      id: '8',
      name: 'Harley Quinn Pop Art T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=1000',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    // New products added
    {
      id: '13',
      name: 'Black Widow Stealth Tee',
      price: 31.99,
      image: 'https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?q=80&w=1000',
      category: 'Women',
      tags: ['Marvel', 'Fitted']
    },
    {
      id: '14',
      name: 'Captain Marvel Cosmic Power Shirt',
      price: 28.99,
      originalPrice: 37.99,
      image: 'https://images.unsplash.com/photo-1541257710737-06d667133a53?q=80&w=1000',
      category: 'Women',
      tags: ['Marvel', 'Premium']
    },
    {
      id: '15',
      name: 'Supergirl Logo Crop Top',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?q=80&w=1000',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    {
      id: '16',
      name: 'Scarlet Witch Hex Pattern Tee',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=1000',
      category: 'Women',
      tags: ['Marvel', 'Limited Edition']
    },
    {
      id: '17',
      name: 'Batgirl Vigilante Top',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000',
      category: 'Women',
      tags: ['DC Comics', 'Premium']
    },
    {
      id: '18',
      name: 'Storm X-Men Weather Goddess Tee',
      price: 33.99,
      originalPrice: 42.99,
      image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=1000',
      category: 'Women',
      tags: ['Marvel', 'X-Men Collection']
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
