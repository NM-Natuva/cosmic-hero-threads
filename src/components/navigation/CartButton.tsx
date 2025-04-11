
import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface CartButtonProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ cartItemCount, onCartClick }) => {
  return (
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
  );
};

export default CartButton;
