
import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products, onAddToCart }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center relative">
          <span className="inline-block relative">
            {title}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-full"></span>
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
