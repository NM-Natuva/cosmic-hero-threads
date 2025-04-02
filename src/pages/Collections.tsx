
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Collections: React.FC = () => {
  const { collectionType } = useParams();
  const [cartItems, setCartItems] = React.useState<any[]>([]);
  
  // Collection titles based on route parameter
  const collectionTitles: Record<string, string> = {
    'marvel': 'Marvel Universe',
    'dc': 'DC Comics',
    'anime': 'Anime Heroes',
    'limited-edition': 'Limited Edition'
  };
  
  // Collection descriptions
  const collectionDescriptions: Record<string, string> = {
    'marvel': 'Avengers assemble! Gear up with our exclusive Marvel collection featuring your favorite superheroes.',
    'dc': 'Channel your inner superhero with our DC Comics inspired apparel. From Batman to Wonder Woman.',
    'anime': 'Bring your favorite anime characters to life with our collection of high-quality graphic tees.',
    'limited-edition': 'Our exclusive superhero collaboration series. Limited stock available - don\'t miss out!'
  };
  
  const title = collectionTitles[collectionType || ''] || 'Collections';
  const description = collectionDescriptions[collectionType || ''] || 'Explore our various superhero-themed collections.';
  
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-white/80 max-w-2xl">{description}</p>
          </div>
        </section>
        
        {/* Collection Content - Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-8">Products Coming Soon</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We're currently updating our inventory for this collection.
              Check back soon for amazing superhero merchandise!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Collections;
