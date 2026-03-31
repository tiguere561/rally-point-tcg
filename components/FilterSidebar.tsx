'use client';

import { X } from 'lucide-react';

interface FilterSidebarProps {
  onClose?: () => void;
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
  selectedConditions: string[];
  onConditionChange: (condition: string, checked: boolean) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const CONDITIONS = ['Near Mint', 'Lightly Played', 'Moderately Played', 'Heavily Played', 'Damaged'];
const CATEGORIES = ['Pokémon', 'One Piece', 'Naruto', 'Lorcana', 'Baseball', 'Football', 'Basketball'];

export default function FilterSidebar({
  onClose,
  selectedCategories,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
  selectedConditions,
  onConditionChange,
  sortBy,
  onSortChange,
}: FilterSidebarProps) {
  return (
    <div className="relative bg-dark-card border border-neon-cyan/20 rounded-lg p-6 space-y-6">
      {/* Close button for mobile */}
      {onClose && (
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 text-neon-cyan"
        >
          <X size={24} />
        </button>
      )}

      {/* Sort */}
      <div>
        <h3 className="font-bold text-neon-cyan mb-4 flex items-center gap-2">
          Sort By
        </h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full bg-dark-bg border border-neon-cyan/30 rounded px-3 py-2 text-text-secondary focus:border-neon-cyan focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-bold text-neon-cyan mb-4">Price Range</h3>
        <div className="space-y-3">
          <div>
            <label className="text-text-secondary text-sm">Min: ${minPrice}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={minPrice}
              onChange={(e) => onPriceChange(parseInt(e.target.value), maxPrice)}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-text-secondary text-sm">Max: ${maxPrice}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={maxPrice}
              onChange={(e) => onPriceChange(minPrice, parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-bold text-neon-cyan mb-4">Game</h3>
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => onCategoryChange(category, e.target.checked)}
                className="w-4 h-4 rounded accent-neon-cyan"
              />
              <span className="text-text-secondary hover:text-neon-cyan transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition */}
      <div>
        <h3 className="font-bold text-neon-cyan mb-4">Condition</h3>
        <div className="space-y-2">
          {CONDITIONS.map((condition) => (
            <label key={condition} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedConditions.includes(condition)}
                onChange={(e) => onConditionChange(condition, e.target.checked)}
                className="w-4 h-4 rounded accent-neon-cyan"
              />
              <span className="text-text-secondary hover:text-neon-cyan transition-colors">
                {condition}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
