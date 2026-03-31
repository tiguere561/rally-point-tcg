'use client';

import { useState, useEffect, useRef, use } from 'react';
import { cards } from '@/lib/data';
import CardProduct from '@/components/CardProduct';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { ChevronLeft, ShoppingCart, Plus, Minus } from 'lucide-react';

interface ProductDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = use(params);
  const card = cards.find((c) => c.id === id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!card) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Card not found</h1>
        <Link href="/shop">
          <button className="px-6 py-2 bg-neon-cyan text-dark-bg font-bold rounded transition-all">
            Back to Shop
          </button>
        </Link>
      </div>
    );
  }

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: card.id,
      name: card.name,
      game: card.game,
      price: card.price,
      quantity: quantity,
      image: card.image,
    });
    setAdded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAdded(false), 2000);
  };

  // Related cards
  const relatedCards = cards
    .filter((c) => c.game === card.game && c.id !== card.id)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <Link href="/shop" className="flex items-center gap-1 text-neon-cyan hover:text-neon-cyan/80 mb-6">
        <ChevronLeft size={20} />
        Back to Shop
      </Link>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div
          className="w-full aspect-[2/3] rounded-lg shadow-neon-cyan-lg"
          style={{ background: card.image }}
        />

        {/* Details */}
        <div>
          {/* Name and Category */}
          <h1 className="text-4xl font-bold text-white mb-2">{card.name}</h1>
          <p className="text-neon-purple text-lg mb-6">{card.game}</p>

          {/* Price */}
          <p className="text-5xl font-bold text-neon-pink mb-6">${card.price.toFixed(2)}</p>

          {/* Description */}
          <p className="text-text-secondary mb-8">{card.description}</p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-dark-card p-6 rounded-lg border border-neon-cyan/20">
            <div>
              <p className="text-text-secondary text-sm mb-1">Set</p>
              <p className="text-white font-semibold">{card.set}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Rarity</p>
              <p className="text-neon-purple font-semibold">{card.rarity}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">Condition</p>
              <p className="text-neon-purple font-semibold">{card.condition}</p>
            </div>
            <div>
              <p className="text-text-secondary text-sm mb-1">In Stock</p>
              <p className="text-neon-cyan font-semibold">{card.quantity} available</p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-white font-semibold">Quantity:</span>
            <div className="flex items-center gap-2 bg-dark-card border border-neon-cyan/30 rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-text-secondary hover:text-neon-cyan transition-colors"
              >
                <Minus size={20} />
              </button>
              <span className="w-8 text-center text-white font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(card.quantity, quantity + 1))}
                className="p-2 text-text-secondary hover:text-neon-cyan transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-neon-cyan text-dark-bg hover:shadow-neon-cyan-lg transform hover:scale-105'
            }`}
          >
            <ShoppingCart size={24} />
            {added ? 'Added to Cart!' : 'Add to Cart'}
          </button>

          {/* Stock Warning */}
          {card.quantity <= 3 && (
            <p className="text-neon-pink text-sm mt-4 text-center font-semibold">
              Only {card.quantity} left in stock!
            </p>
          )}
        </div>
      </div>

      {/* You Might Also Like */}
      {relatedCards.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCards.map((relatedCard) => (
              <CardProduct key={relatedCard.id} card={relatedCard} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
