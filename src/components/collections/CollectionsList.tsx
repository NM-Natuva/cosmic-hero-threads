
import React from 'react';
import { Link } from 'react-router-dom';
import CollectionIcon from './CollectionIcon';

interface CollectionsListProps {
  collectionTitles: Record<string, string>;
  collectionDescriptions: Record<string, string>;
}

const CollectionsList: React.FC<CollectionsListProps> = ({ 
  collectionTitles, 
  collectionDescriptions 
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">All Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(collectionTitles).map(([slug, title]) => (
            <Link 
              to={`/collections/${slug}`} 
              key={slug}
              className="bg-gradient-to-br from-hero-bg/80 to-black/90 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <CollectionIcon type={slug} />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-white/70 mb-4">{collectionDescriptions[slug]}</p>
                <span className="inline-block bg-white/20 hover:bg-white/30 transition-colors text-white rounded-full px-4 py-2 text-sm">
                  Browse Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsList;
