
import React from 'react';
import { X, ShoppingCart, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from './ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const { toast } = useToast();
  
  // Calculate totals
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const estimatedTax = subtotal * 0.1; // 10% tax example
  const total = subtotal + estimatedTax;
  
  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "Redirecting to payment page.",
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Your Cart {items.length > 0 && `(${items.length})`}
          </h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-lg font-medium text-gray-700">Your cart is empty</p>
              <p className="text-gray-500 mb-6">Add some cool superhero merch!</p>
              <Button onClick={onClose}>Continue Shopping</Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <div className="w-20 h-20 rounded overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.tags[0]}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 border-r"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 border-l"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 font-medium">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Cart summary */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-4 bg-gray-50">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-medium pt-2 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/payment" onClick={onClose}>
              <Button 
                onClick={handleCheckout}
                className="w-full py-6"
              >
                Proceed to Checkout
              </Button>
            </Link>
            <Button 
              variant="outline"
              onClick={onClose}
              className="w-full"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
