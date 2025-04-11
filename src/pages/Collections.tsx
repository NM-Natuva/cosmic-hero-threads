
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductGrid from '@/components/ProductGrid';
import { Product } from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';

const Collections: React.FC = () => {
  const { collectionType } = useParams();
  const { totalCartItems, setIsCartOpen, addToCart } = useCart();
  
  // Collection titles based on route parameter
  const collectionTitles: Record<string, string> = {
    'marvel': 'Marvel Universe',
    'dc': 'DC Comics',
    'anime': 'Anime Heroes',
    'limited-edition': 'Limited Edition',
    'vintage': 'Vintage Heroes',
    'movie-adaptations': 'Movie Adaptations',
    'comic-art': 'Comic Book Art',
    'team-ups': 'Superhero Team-ups'
  };
  
  // Collection descriptions
  const collectionDescriptions: Record<string, string> = {
    'marvel': 'Avengers assemble! Gear up with our exclusive Marvel collection featuring your favorite superheroes.',
    'dc': 'Channel your inner superhero with our DC Comics inspired apparel. From Batman to Wonder Woman.',
    'anime': 'Bring your favorite anime characters to life with our collection of high-quality graphic tees.',
    'limited-edition': 'Our exclusive superhero collaboration series. Limited stock available - don\'t miss out!',
    'vintage': 'Classic superhero designs from the golden age of comics. Nostalgic styles with modern comfort.',
    'movie-adaptations': 'Shirts inspired by your favorite superhero blockbusters. Straight from the big screen.',
    'comic-art': 'Featuring original artwork from legendary comic book artists. Wearable masterpieces.',
    'team-ups': 'Celebrating iconic superhero partnerships and team-ups from across comic universes.'
  };
  
  // Collection products
  const collectionProducts: Record<string, Product[]> = {
    'marvel': [
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
      }
    ],
    'dc': [
      {
        id: '1',
        name: 'Batman Shadow Knight T-Shirt',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1000',
        category: 'Men',
        tags: ['DC Comics', 'Graphic Print']
      },
      {
        id: '3',
        name: 'Wonder Woman Star Power T-Shirt',
        price: 27.99,
        image: 'https://images.unsplash.com/photo-1577655197620-704858b270da?q=80&w=1000',
        category: 'Women',
        tags: ['DC Comics', 'Crop Top']
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
      {
        id: '10',
        name: 'The Flash Lightning Bolt Shirt',
        price: 25.99,
        originalPrice: 32.99,
        image: 'https://images.unsplash.com/photo-1561052967-61fc91e48d79?q=80&w=1000',
        category: 'Men',
        tags: ['DC Comics', 'Athletic Fit']
      }
    ],
    'anime': [
      {
        id: '19',
        name: 'One Punch Hero Tee',
        price: 27.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000',
        category: 'Men',
        tags: ['Anime', 'Limited Edition']
      },
      {
        id: '20',
        name: 'My Hero Academia Plus Ultra Shirt',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1000',
        category: 'Women',
        tags: ['Anime', 'Exclusive']
      },
      {
        id: '21',
        name: 'Demon Slayer Graphic Tee',
        price: 31.99,
        originalPrice: 38.99,
        image: 'https://images.unsplash.com/photo-1579269879098-9fc406c3aac1?q=80&w=1000',
        category: 'Men',
        tags: ['Anime', 'Premium']
      },
      {
        id: '22',
        name: 'Dragon Ball Z Power Level Shirt',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1000',
        category: 'Unisex',
        tags: ['Anime', 'Classic']
      }
    ],
    'limited-edition': [
      {
        id: '23',
        name: 'Infinity Gauntlet Collector Tee',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=1000',
        category: 'Unisex',
        tags: ['Marvel', 'Limited Edition', 'Numbered']
      },
      {
        id: '24',
        name: 'Dark Knight Returns Special Edition',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1606041008023-472dfb5b530f?q=80&w=1000',
        category: 'Men',
        tags: ['DC Comics', 'Limited Edition', 'Frank Miller']
      },
      {
        id: '25',
        name: 'Stan Lee Tribute Collection',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?q=80&w=1000',
        category: 'Unisex',
        tags: ['Marvel', 'Limited Edition', 'Collector Item']
      },
      {
        id: '26',
        name: 'Comic-Con Exclusive Hero Mashup',
        price: 55.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000',
        category: 'Unisex',
        tags: ['Special Event', 'Limited Edition', 'Numbered']
      }
    ]
  };
  
  const title = collectionTitles[collectionType || ''] || 'Collections';
  const description = collectionDescriptions[collectionType || ''] || 'Explore our various superhero-themed collections.';
  const products = collectionType ? collectionProducts[collectionType] || [] : [];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        cartItemCount={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-hero-bg to-black py-16 text-white">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-4 group">
              <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-white/80 max-w-2xl">{description}</p>
          </div>
        </section>
        
        {/* Collection Content */}
        {products.length > 0 ? (
          <ProductGrid 
            title={`${title} Collection`}
            products={products}
            onAddToCart={addToCart}
          />
        ) : (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">All Collections</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(collectionTitles).map(([slug, title]) => (
                  <Link 
                    to={`/collections/${slug}`} 
                    key={slug}
                    className="bg-gradient-to-br from-hero-bg/80 to-black/90 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2">{title}</h3>
                      <p className="text-sm text-white/70 mb-4">{collectionDescriptions[slug]}</p>
                      <span className="inline-block bg-white/20 hover:bg-white/30 transition-colors text-white rounded-full px-4 py-2 text-sm">
                        Browse Collection
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;
