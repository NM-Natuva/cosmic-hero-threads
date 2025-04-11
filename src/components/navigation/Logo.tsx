
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
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
  );
};

export default Logo;
