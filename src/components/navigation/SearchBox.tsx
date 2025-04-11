
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-1 pl-8 pr-2 rounded-md bg-white/10 focus:bg-white/20 focus:outline-none text-sm w-40 transition-all duration-300 focus:w-60"
        />
        <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70" />
      </form>
    </div>
  );
};

export default SearchBox;
