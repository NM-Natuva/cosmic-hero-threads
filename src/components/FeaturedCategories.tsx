
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
  );
};

export default FeaturedCategories;
