
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/components/ui/use-toast';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for: ${searchQuery}`,
    });
  };
  
  return (
    <nav className="bg-hero-bg/95 text-white sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="hero-title text-xl md:text-2xl font-bold">ZIDIO</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link group">Home</Link>
            <Link to="/men" className="nav-link group">Men</Link>
            <Link to="/women" className="nav-link group">Women</Link>
            <Link to="/collections" className="nav-link group">Collections</Link>
            <Link to="/themes" className="nav-link group">Themes</Link>
            <Link to="/membership" className="nav-link group">Membership</Link>
          </div>
          
          {/* Search, User, Cart Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="py-1 pl-8 pr-2 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none text-sm w-40 transition-all duration-300 focus:w-60"
                />
                <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70" />
              </form>
            </div>
            <button className="p-2 hover:text-primary transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 hover:text-primary transition-colors">
              <Heart size={20} />
            </button>
            <button 
              className="p-2 hover:text-primary transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button 
              className="p-2 hover:text-primary transition-colors relative"
              onClick={onCartClick}
            >
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button className="p-2" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && isMobile && (
        <div className="md:hidden bg-hero-bg/95 backdrop-blur-sm border-t border-white/10 animate-accordion-down overflow-hidden">
          <div className="container px-4 py-3 flex flex-col space-y-4">
            {/* Search in Mobile */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="py-2 pl-10 pr-2 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none text-sm w-full"
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
            </form>
            
            <Link to="/" className="py-2 border-b border-white/10">Home</Link>
            <Link to="/men" className="py-2 border-b border-white/10">Men</Link>
            <Link to="/women" className="py-2 border-b border-white/10">Women</Link>
            <Link to="/collections" className="py-2 border-b border-white/10">Collections</Link>
            <Link to="/themes" className="py-2 border-b border-white/10">Themes</Link>
            <Link to="/membership" className="py-2">Membership</Link>
            
            <div className="flex space-x-4 py-2">
              <Button variant="outline" size="sm" className="flex-1">
                <User size={16} className="mr-2" /> Account
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Heart size={16} className="mr-2" /> Wishlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
