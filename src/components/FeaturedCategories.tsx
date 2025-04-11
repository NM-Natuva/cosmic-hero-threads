
import React from 'react';
import CategoryCard from '@/components/CategoryCard';
import { ArrowRight } from 'lucide-react';

const FeaturedCategories: React.FC = () => {
  return (
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
            image="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1000"
            link="/collections/marvel"
            description="Avengers assemble! Gear up with our exclusive Marvel collection."
          />
          <CategoryCard 
            title="DC Comics" 
            image="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=1000"
            link="/collections/dc"
            description="Channel your inner superhero with our DC Comics inspired apparel."
          />
          <CategoryCard 
            title="Anime Heroes" 
            image="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000"
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
  );
};

export default FeaturedCategories;
