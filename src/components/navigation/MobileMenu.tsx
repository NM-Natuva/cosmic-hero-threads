
import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Package, LogIn, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  isLoggedIn: boolean;
  user: any;
  handleLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  isLoggedIn,
  user,
  handleLogout,
}) => {
  return (
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
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
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
                {/* My Orders Link for Mobile */}
                <Link to="/my-orders">
                  <Button variant="ghost" size="sm" className="text-white flex items-center mr-2">
                    <Package size={16} className="mr-1" />
                    Orders
                  </Button>
                </Link>
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
  );
};

export default MobileMenu;
