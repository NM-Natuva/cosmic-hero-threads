
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  description?: string;
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  image, 
  link, 
  description,
  className
}) => {
  return (
    <Link 
      to={link} 
      className={`group relative overflow-hidden rounded-lg shadow-lg ${className}`}
    >
      <div className="aspect-square md:aspect-auto md:h-80 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
          <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
          {description && (
            <p className="mt-2 text-sm text-white/80 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          )}
          <div className="mt-3 inline-block">
            <span className="text-sm font-semibold inline-flex items-center transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">SHOP NOW</span>
              <span className="w-full h-0.5 bg-white absolute bottom-0 left-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
