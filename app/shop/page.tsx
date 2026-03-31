'use client';

import { useState, useMemo } from 'react';
import CardProduct from '@/components/CardProduct';
import FilterSidebar from '@/components/FilterSidebar';
import SearchBar from '@/components/SearchBar';
import { cards } from '@/lib/data';
import { Filter } from 'lucide-react';

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter and sort logic
  const filteredCards = useMemo(() => {
    let result = [...cards];

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (card) =>
          card.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
          card.set.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((card) => selectedCategories.includes(card.game));
    }

    // Price filter
    result = result.filter((card) => card.price >= minPrice && card.price <= maxPrice);

    // Condition filter
    if (selectedConditions.length > 0) {
      result = result.filter((card) => selectedConditions.includes(card.condition));
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategories, minPrice, maxPrice, selectedConditions, sortBy]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const handleConditionChange = (condition: string, checked: boolean) => {
    setSelectedConditions((prev) =>
      checked ? [...prev, condition] : prev.filter((c) => c !== condition)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          <span className="text-neon-cyan">Shop</span> Cards
        </h1>
        <p className="text-text-secondary">
          Showing {filteredCards.length} of {cards.length} cards
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <div className="flex gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceChange={(min, max) => {
              setMinPrice(min);
              setMaxPrice(max);
            }}
            selectedConditions={selectedConditions}
            onConditionChange={handleConditionChange}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6 w-full">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-neon-cyan text-dark-bg font-bold rounded transition-all"
          >
            <Filter size={20} />
            {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {showMobileFilters && (
            <div className="mt-4">
              <FilterSidebar
                onClose={() => setShowMobileFilters(false)}
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onPriceChange={(min, max) => {
                  setMinPrice(min);
                  setMaxPrice(max);
                }}
                selectedConditions={selectedConditions}
                onConditionChange={handleConditionChange}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map((card) => (
                <CardProduct key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg mb-4">No cards found matching your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategories([]);
                  setSelectedConditions([]);
                  setMinPrice(0);
                  setMaxPrice(500);
                }}
                className="px-6 py-2 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
