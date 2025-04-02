
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tags: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    onAddToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    });
  };
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : null;
  
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md card-hover">
      {/* Discount tag */}
      {discountPercentage && (
        <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded z-10">
          {discountPercentage}% OFF
        </div>
      )}
      
      {/* Image container */}
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Wishlist button */}
        <button 
          onClick={handleAddToWishlist}
          className="absolute top-2 left-2 bg-white/80 p-2 rounded-full shadow-sm transition-transform hover:scale-110"
        >
          <Heart size={16} className="text-gray-600 hover:text-destructive transition-colors" />
        </button>
        
        {/* Quick add button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 flex items-end justify-center transition-all opacity-0 group-hover:opacity-100">
          <button 
            onClick={handleAddToCart}
            className="bg-primary text-white py-2 px-3 rounded-full mb-4 flex items-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart size={16} className="mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-4">
        <h3 className="font-semibold text-sm truncate">{product.name}</h3>
        <div className="flex items-center mt-1">
          <span className="font-bold text-cosmic-purple">${product.price}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
