
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-hero-pattern py-16 md:py-24 text-white">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/public/lovable-uploads/29008383-8b9d-40ee-bfe7-e61f50c0d5c4.png" 
          alt="Hero background" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-bg/90 to-hero-bg/60"></div>
      </div>
      
      {/* Animated cosmic particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-star-twinkle opacity-70"></div>
        <div className="absolute top-40 left-[30%] w-1 h-1 bg-white rounded-full animate-star-twinkle opacity-60 animation-delay-200"></div>
        <div className="absolute top-60 left-[80%] w-2 h-2 bg-white rounded-full animate-star-twinkle opacity-80 animation-delay-700"></div>
        <div className="absolute top-80 left-[50%] w-1 h-1 bg-white rounded-full animate-star-twinkle opacity-50 animation-delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-hero-accent/20 rounded-full text-hero-accent font-semibold text-sm backdrop-blur-sm">
              Unleash Your Inner Hero
            </div>
            <h1 className="hero-title leading-tight">
              Superhero Threads <br /> For The Bold
            </h1>
            <p className="text-lg text-hero-text/80 max-w-md">
              Express your fandom with our exclusive collection of superhero-themed tees. From Marvel to DC, anime to custom designs - wear your power.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-hero-accent hover:bg-hero-accent/90 text-white py-6 px-8 rounded-md group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/20 bg-transparent hover:bg-white/10 text-white py-6 px-8 rounded-md"
              >
                Join Membership
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative w-full h-[500px] animate-float">
              <img 
                src="/public/lovable-uploads/ac167788-081a-4272-8aa2-db0272de9049.png" 
                alt="Superhero T-shirt" 
                className="object-contain w-full h-full"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cosmic-purple/20 blur-3xl animate-pulse-slow -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
