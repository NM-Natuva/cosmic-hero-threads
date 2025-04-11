
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProductTypes: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block relative">
            T-Shirt Styles
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-pink rounded-full"></span>
          </span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <img 
              src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1000" 
              alt="Oversized T-Shirts" 
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-center">Oversized Fit</h3>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <img 
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000" 
              alt="Graphic Print T-Shirts" 
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-center">Graphic Print</h3>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <img 
              src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=1000" 
              alt="Acid Wash T-Shirts" 
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-center">Acid Wash</h3>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <img 
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000" 
              alt="Crop Top T-Shirts" 
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-center">Crop Tops</h3>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <a href="/t-shirt-styles" className="inline-flex items-center text-cosmic-purple hover:text-cosmic-pink font-semibold group">
            View All Styles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductTypes;
