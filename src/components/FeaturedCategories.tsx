
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
            image="https://external-preview.redd.it/PWU60a0mHbiWvKvjyQjGeox4HMxQQXeSGyzvnaISbc0.jpg?auto=webp&s=14a478f1c09c6d17326710cf760826e40a9dded3"
            link="/collections/marvel"
            description="Avengers assemble! Gear up with our exclusive Marvel collection."
          />
          <CategoryCard 
            title="DC Comics" 
            image="https://staticg.sportskeeda.com/editor/2022/05/475a9-16521115740627-1920.jpg?w=640"
            link="/collections/dc"
            description="Channel your inner superhero with our DC Comics inspired apparel."
          />
          <CategoryCard 
            title="Anime Heroes" 
            image="https://wallpaper.dog/large/5467664.jpg"
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
