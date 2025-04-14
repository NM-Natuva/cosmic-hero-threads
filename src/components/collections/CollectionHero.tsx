
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface CollectionHeroProps {
  title: string;
  description: string;
}

const CollectionHero: React.FC<CollectionHeroProps> = ({ title, description }) => {
  return (
    <section className="bg-gradient-to-r from-hero-bg to-black py-16 text-white">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-white/70 hover:text-white mb-4 group">
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-white/80 max-w-2xl">{description}</p>
      </div>
    </section>
  );
};

export default CollectionHero;
