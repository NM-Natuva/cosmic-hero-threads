import React, { useState } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import CategoryCard from '@/components/CategoryCard';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import { Product } from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      // Check if product already in cart
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Increment quantity if already in cart
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        return updatedItems;
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  const handleUpdateCartItemQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const handleRemoveCartItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // Sample products data
  const newArrivals: Product[] = [
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
      id: '3',
      name: 'Wonder Woman Star Power T-Shirt',
      price: 27.99,
      image: '/public/lovable-uploads/d8fbbcf3-deb1-4ff3-9823-45c51368b511.png',
      category: 'Women',
      tags: ['DC Comics', 'Crop Top']
    },
    {
      id: '4',
      name: 'Iron Man Tech Suit Tee',
      price: 32.99,
      image: '/public/lovable-uploads/ac167788-081a-4272-8aa2-db0272de9049.png',
      category: 'Men',
      tags: ['Marvel', 'Long Sleeve']
    }
  ];
  
  const bestSellers: Product[] = [
    // Replacing Superman t-shirt image with Iron Man image
    {
      id: '5',
      name: 'Superman Classic Symbol Tee',
      price: 26.99,
      originalPrice: 35.99,
      image: '/public/lovable-uploads/ac167788-081a-4272-8aa2-db0272de9049.png', // Changed from Superman to Iron Man image
      category: 'Men',
      tags: ['DC Comics', 'Sleeveless']
    },
    {
      id: '6',
      name: 'Black Panther Vibranium Tech Tee',
      price: 34.99,
      image: '/public/lovable-uploads/053c6a6e6-b65e-4055-970b-6313d59e8554.png',
      category: 'Men',
      tags: ['Marvel', 'Acid Wash']
    },
    {
      id: '7',
      name: 'Captain America Shield Tee',
      price: 28.99,
      image: '/public/lovable-uploads/ede317e2-fedb-4004-b72d-5ee730357f0a.png',
      category: 'Men',
      tags: ['Marvel', 'Graphic Print']
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
        <section className="py-16 bg-gradient-to-b from-hero-bg to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              <span className="inline-block relative">
                Shop By Universe
                <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-full"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CategoryCard 
                title="Marvel Universe" 
                image="/public/lovable-uploads/053c6a6e6-b65e-4055-970b-6313d59e8554.png"
                link="/collections/marvel"
                description="Avengers assemble! Gear up with our exclusive Marvel collection."
              />
              <CategoryCard 
                title="DC Comics" 
                image="/public/lovable-uploads/ede317e2-fedb-4004-b72d-5ee730357f0a.png"
                link="/collections/dc"
                description="Channel your inner superhero with our DC Comics inspired apparel."
              />
              <CategoryCard 
                title="Anime Heroes" 
                image="/public/lovable-uploads/87cdf70a-2c37-404f-bda5-f2480d52b8ab.png"
                link="/collections/anime"
                description="Bring your favorite anime characters to life with our collection."
              />
            </div>
            
            <div className="mt-12 flex justify-center">
              <a href="/collections" className="inline-flex items-center text-cosmic-purple hover:text-cosmic-pink font-semibold group">
                View All Collections
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
        
        {/* New Arrivals */}
        <ProductGrid 
          title="New Arrivals" 
          products={newArrivals}
          onAddToCart={handleAddToCart}
        />
        
        {/* Featured Banner */}
        <section className="py-12 bg-cosmic-bg text-white starry-bg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Limited Edition Collection</h2>
                <p className="text-white/80">
                  Discover our exclusive superhero collaboration series. 
                  Limited stock available - don't miss out on these collector's items!
                </p>
                <div className="pt-4">
                  <a 
                    href="/collections/limited-edition" 
                    className="inline-flex items-center bg-white text-cosmic-bg py-2 px-4 rounded-md hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Shop Limited Edition
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/public/lovable-uploads/054bbef6-ff23-4c4e-9fa6-a4a98238c276.png" 
                  alt="Limited Edition T-Shirts"
                  className="rounded-md shadow-lg animate-float"
                />
                <div className="absolute -bottom-4 -right-4 bg-cosmic-purple text-white px-4 py-2 rounded shadow-lg">
                  <span className="font-bold">NEW</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Best Sellers */}
        <ProductGrid 
          title="Best Sellers" 
          products={bestSellers}
          onAddToCart={handleAddToCart}
        />
        
        {/* Product Types */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="inline-block relative">
                T-Shirt Styles
                <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-full"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src="/public/lovable-uploads/a4dc2ee2-9ef6-4ea8-bc1a-25b79993a68e.png" 
                  alt="Oversized T-Shirts" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-center">Oversized Fit</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src="/public/lovable-uploads/ede317e2-fedb-4004-b72d-5ee730357f0a.png" 
                  alt="Graphic Print T-Shirts" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-center">Graphic Print</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src="/public/lovable-uploads/ac167788-081a-4272-8aa2-db0272de9049.png" 
                  alt="Acid Wash T-Shirts" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-center">Acid Wash</h3>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img 
                  src="/public/lovable-uploads/d8fbbcf3-deb1-4ff3-9823-45c51368b511.png" 
                  alt="Crop Top T-Shirts" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-center">Crop Tops</h3>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <a href="/t-shirt-styles" className="inline-flex items-center text-cosmic-purple hover:text-cosmic-pink font-semibold group">
                View All Styles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
        
        {/* Membership/Subscription Banner */}
        <section className="py-16 bg-gradient-to-r from-cosmic-purple to-cosmic-pink text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join The Hero Club</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              Become a member and unlock exclusive benefits: early access to new designs,
              member-only discounts, free shipping, and limited edition merchandise.
            </p>
            <a 
              href="/membership" 
              className="inline-flex items-center bg-white text-cosmic-purple py-3 px-6 rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Join Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Shopping Cart Sidebar */}
      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartItemQuantity}
        onRemoveItem={handleRemoveCartItem}
      />
    </div>
  );
};

export default Index;
