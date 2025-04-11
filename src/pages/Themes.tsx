
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface Theme {
  id: string;
  title: string;
  description: string;
  image: string;
  count: number;
}

const Themes: React.FC = () => {
  const { totalCartItems, setIsCartOpen } = useCart();
  const { toast } = useToast();
  
  // Theme data
  const themes: Theme[] = [
    {
      id: 'heroes',
      title: 'Classic Heroes',
      description: 'Featuring the most iconic superheroes from the golden age of comics.',
      image: 'https://img.freepik.com/premium-photo/collection-vintage-comic-book-pages-featuring-superheroes-scenes-action_36682-88371.jpg',
      count: 24
    },
    {
      id: 'villains',
      title: 'Supervillains',
      description: 'Dark and dramatic apparel showcasing the most notorious comic book villains.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/x-villain-banner.jpg',
      count: 18
    },
    {
      id: 'cosmic',
      title: 'Cosmic Adventures',
      description: 'Space-themed superhero designs featuring galactic battles and cosmic entities.',
      image: 'https://cdn.marvel.com/content/2x/immortal-thor-desktop.jpg',
      count: 15
    },
    {
      id: 'retro',
      title: 'Retro Comic Style',
      description: 'Vintage comic book art styles with classic panel layouts and retro graphics.',
      image: 'https://img.freepik.com/premium-photo/comic-stamp-wallpaper_1134901-185767.jpg',
      count: 20
    },
    {
      id: 'urban',
      title: 'Urban Heroes',
      description: 'Street-level heroes with an urban aesthetic and gritty design elements.',
      image: 'https://www.pantoscripts.biz/wp-content/uploads/2021/02/robinhood1000x600.jpg',
      count: 16
    },
    {
      id: 'minimalist',
      title: 'Minimalist Heroes',
      description: 'Clean, modern designs with simplified hero logos and minimal color palettes.',
      image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/s/g/z/small-spos7518-poster-superheroes-minimalist-sl-7519-wall-poster-original-imaghnjpb9ughxpf.jpeg?q=90&crop=false',
      count: 12
    },
    {
      id: 'animated',
      title: 'Animated Series',
      description: 'Inspired by popular superhero cartoon shows with vibrant colors and stylized art.',
      image: 'https://staticg.sportskeeda.com/editor/2024/03/b6d96-17112948165399-1920.jpg',
      count: 22
    },
    {
      id: 'crossover',
      title: 'Crossover Events',
      description: 'Epic team-ups and crossover events featuring heroes from different universes.',
      image: 'https://media.cnn.com/api/v1/images/stellar/prod/dcvsmarvelomni-adv-rev2-3-copy.jpg?q=w_1110,c_fill',
      count: 14
    }
  ];
  
  const handleThemeClick = (theme: Theme) => {
    toast({
      title: `Exploring ${theme.title}`,
      description: `This would show you the ${theme.count} products in this theme.`,
    });
  };
  
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Browse by Theme</h1>
            <p className="text-white/80 max-w-2xl">
              Discover our curated selections of superhero merchandise organized by themes, art styles, and story arcs.
            </p>
          </div>
        </section>
        
        {/* Themes Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative">
              <span className="inline-block relative">
                Discover Our Themes
                <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-full"></span>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {themes.map((theme) => (
                <div 
                  key={theme.id}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => handleThemeClick(theme)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={theme.image} 
                      alt={theme.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{theme.title}</h3>
                      <p className="text-sm text-white/80 mt-1">{theme.count} Products</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-gray-600 text-sm">{theme.description}</p>
                    <Button variant="link" className="mt-2 p-0 h-auto flex items-center text-cosmic-purple">
                      Explore Theme <ExternalLink size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Theme Spotlight */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Theme: Crossover Events</h2>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://cdn.flickeringmyth.com/wp-content/uploads/2024/08/Deadpool-Team-Up-1-3-1.jpg" 
                    alt="Crossover Events" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="text-2xl font-bold mb-4">Epic Hero Team-ups</h3>
                  <p className="text-gray-600 mb-6">
                    Our Crossover Events collection features the most epic team-ups in comic book history. 
                    From unexpected alliances to universe-shattering battles, these shirts celebrate the 
                    moments when heroes and villains from different worlds collide.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Each design is carefully crafted to capture the essence of these monumental events, 
                    with high-quality prints that showcase the dramatic action and iconic characters.
                  </p>
                  <Button variant="default" className="bg-cosmic-purple hover:bg-cosmic-pink">
                    Shop Crossover Collection
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Themes;
