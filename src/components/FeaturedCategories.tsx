
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            title="Vintage Heroes" 
            image="https://i.pinimg.com/originals/ed/01/a9/ed01a99acf6591de88f31ff38b562c25.jpg"
            link="/collections/vintage"
            description="Classic superhero designs from the golden age of comics."
            className="aspect-[4/3] md:aspect-auto"
          />
          <CategoryCard 
            title="Movie Adaptations" 
            image="https://cdn.shopify.com/s/files/1/0057/6840/9075/products/avengers-endgame-quantum-realm-white-suit-mens-t-shirt-628951_800x.jpg"
            link="/collections/movie-adaptations"
            description="Shirts inspired by your favorite superhero blockbusters."
            className="aspect-[4/3] md:aspect-auto"
          />
          <CategoryCard 
            title="Comic Book Art" 
            image="https://cdn.shopify.com/s/files/1/0190/0156/6660/files/jim-lee-x-men-21-jim-lee-signed-personal-collection-cgc-9-8-comic-kings_882.jpg"
            link="/collections/comic-art"
            description="Featuring original artwork from legendary comic book artists."
            className="aspect-[4/3] md:aspect-auto"
          />
          <CategoryCard 
            title="Superhero Team-ups" 
            image="https://cdn.shopify.com/s/files/1/0057/6840/9075/products/justice-league-symbol-dc-comics-mens-t-shirt-651732_500x.jpg"
            link="/collections/team-ups"
            description="Celebrating iconic superhero partnerships and team-ups."
            className="aspect-[4/3] md:aspect-auto"
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
