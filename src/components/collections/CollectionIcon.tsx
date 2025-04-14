
import React from 'react';
import { Star, Clapperboard, Book, Users } from 'lucide-react';

interface CollectionIconProps {
  type: string;
}

const CollectionIcon: React.FC<CollectionIconProps> = ({ type }) => {
  switch(type) {
    case 'vintage':
      return <Star className="h-8 w-8 mb-2 text-white/70" />;
    case 'movie-adaptations':
      return <Clapperboard className="h-8 w-8 mb-2 text-white/70" />;
    case 'comic-art':
      return <Book className="h-8 w-8 mb-2 text-white/70" />;
    case 'team-ups':
      return <Users className="h-8 w-8 mb-2 text-white/70" />;
    default:
      return null;
  }
};

export default CollectionIcon;
