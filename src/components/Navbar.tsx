
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Menu, Search, ShoppingCart, User, X, LogIn, LogOut } from 'lucide-react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check login status from localStorage on component mount
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    
    if (loginStatus) {
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for: ${searchQuery}`,
    });
  };
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    setIsOpen(false); // Close mobile menu if open
    navigate('/');
  };
  
  return (
    <nav className="bg-hero-bg/95 text-white sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo with SVG */}
          <Link to="/" className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M20 5L5 20L20 35L35 20L20 5Z" fill="url(#paint0_linear)" />
              <path d="M20 12L12 20L20 28L28 20L20 12Z" fill="#0EA5E9" />
              <defs>
                <linearGradient id="paint0_linear" x1="5" y1="5" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8B5CF6" />
                  <stop offset="0.5" stopColor="#D946EF" />
                  <stop offset="1" stopColor="#0EA5E9" />
                </linearGradient>
              </defs>
            </svg>
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
            
            {isLoggedIn ? (
              <>
                <div className="flex items-center">
                  <Button variant="ghost" size="sm" className="text-white">
                    <User size={20} className="mr-2" />
                    <span className="text-sm">{user?.email?.split('@')[0]}</span>
                  </Button>
                </div>
                <button 
                  className="p-2 hover:text-primary transition-colors flex items-center"
                  onClick={handleLogout}
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <Link to="/login" className="p-2 hover:text-primary transition-colors flex items-center">
                <LogIn size={20} className="mr-1" />
                <span>Login</span>
              </Link>
            )}
            
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
            <Link to="/membership" className="py-2 border-b border-white/10">Membership</Link>
            
            <div className="flex flex-col space-y-2 py-2">
              {isLoggedIn ? (
                <>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <div className="flex items-center">
                      <User size={18} className="mr-2" />
                      <span>{user?.email?.split('@')[0]}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={handleLogout}
                      className="text-white flex items-center"
                    >
                      <LogOut size={16} className="mr-1" />
                      Logout
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" size="sm" className="flex-1 w-full">
                      <LogIn size={16} className="mr-2" /> Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="sm" className="flex-1 w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
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
