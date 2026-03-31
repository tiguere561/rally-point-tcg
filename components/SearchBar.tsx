'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search cards..."
        value={query}
        onChange={handleChange}
        className="w-full px-4 py-3 pl-10 bg-dark-card border border-neon-cyan/30 rounded-lg text-white placeholder-text-secondary focus:outline-none focus:border-neon-cyan focus:shadow-neon-cyan transition-all"
      />
      <Search className="absolute left-3 top-3 text-text-secondary" size={18} />
    </div>
  );
}
