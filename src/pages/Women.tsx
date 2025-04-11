
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
      image: 'https://m.media-amazon.com/images/I/616dm19XZUL._AC_UY1100_.jpg',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    {
      id: '8',
      name: 'Harley Quinn Pop Art T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1733916119_7579563.jpg?format=webp&w=480&dpr=1.5',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    // New products added
    {
      id: '13',
      name: 'Black Widow Stealth Tee',
      price: 31.99,
      image: 'https://m.media-amazon.com/images/I/614bBKygwuL._AC_UY1000_.jpg',
      category: 'Women',
      tags: ['Marvel', 'Fitted']
    },
    {
      id: '14',
      name: 'Captain Marvel Cosmic Power Shirt',
      price: 28.99,
      originalPrice: 37.99,
      image: 'https://assets.ajio.com/medias/sys_master/root/20231221/7nyg/6583470dafa4cf41f5deffa3/-1117Wx1400H-466901670-black-MODEL.jpg',
      category: 'Women',
      tags: ['Marvel', 'Premium']
    },
    {
      id: '15',
      name: 'Supergirl Logo Crop Top',
      price: 26.99,
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/345704089/CP/XN/LQ/20865161/super-girl-t-shirt.jpg',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    {
      id: '16',
      name: 'Scarlet Witch Hex Pattern Tee',
      price: 32.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VcoBd2Eu_oE_zuWycQcmsOQHSDKIwv3Czg&s',
      category: 'Women',
      tags: ['Marvel', 'Limited Edition']
    },
    {
      id: '17',
      name: 'Batgirl Vigilante Top',
      price: 29.99,
      image: 'https://i.ebayimg.com/images/g/maYAAOSw~XpZW61G/s-l1200.jpg',
      category: 'Women',
      tags: ['DC Comics', 'Premium']
    },
    {
      id: '18',
      name: 'Storm X-Men Weather Goddess Tee',
      price: 33.99,
      originalPrice: 42.99,
      image: 'https://i.etsystatic.com/36234370/r/il/d9c016/6342445681/il_1588xN.6342445681_hje4.jpg',
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
