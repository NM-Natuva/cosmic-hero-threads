
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import Logo from './navigation/Logo';
import DesktopNavLinks from './navigation/DesktopNavLinks';
import SearchBox from './navigation/SearchBox';
import UserActions from './navigation/UserActions';
import CartButton from './navigation/CartButton';
import MobileMenu from './navigation/MobileMenu';

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
          <Logo />
          
          {/* Desktop Navigation */}
          <DesktopNavLinks />
          
          {/* Search, User, Cart Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBox 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              handleSearch={handleSearch}
            />
            
            <UserActions 
              isLoggedIn={isLoggedIn}
              user={user}
              handleLogout={handleLogout}
            />
            
            <CartButton 
              cartItemCount={cartItemCount}
              onCartClick={onCartClick}
            />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <CartButton 
              cartItemCount={cartItemCount}
              onCartClick={onCartClick}
            />
            <button className="p-2" onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && isMobile && (
        <MobileMenu 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          isLoggedIn={isLoggedIn}
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </nav>
  );
};

export default Navbar;
