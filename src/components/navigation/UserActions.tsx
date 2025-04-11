
import React from 'react';
import { Link } from 'react-router-dom';
import { User, LogOut, Heart, Package, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface UserActionsProps {
  isLoggedIn: boolean;
  user: any;
  handleLogout: () => void;
}

const UserActions: React.FC<UserActionsProps> = ({ isLoggedIn, user, handleLogout }) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="text-white">
              <User size={20} className="mr-2" />
              <span className="text-sm">{user?.email?.split('@')[0]}</span>
            </Button>
          </div>
          {/* My Orders Link for Desktop */}
          <Link to="/my-orders" className="p-2 hover:text-primary transition-colors flex items-center">
            <Package size={20} className="mr-1" />
            <span>My Orders</span>
          </Link>
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
    </>
  );
};

export default UserActions;
