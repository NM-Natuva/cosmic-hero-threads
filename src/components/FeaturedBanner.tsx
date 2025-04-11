
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedBanner: React.FC = () => {
  return (
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
              src="https://images.unsplash.com/photo-1601924582970-9238bcb495d9?q=80&w=1000" 
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
  );
};

export default FeaturedBanner;
