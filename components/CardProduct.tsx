'use client';

import Link from 'next/link';
import { Card } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { ShoppingCart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface CardProductProps {
  card: Card;
}

export default function CardProduct({ card }: CardProductProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: card.id,
      name: card.name,
      game: card.game,
      price: card.price,
      quantity: 1,
      image: card.image,
    });
    setAdded(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link href={`/shop/${card.id}`}>
      <div className="group cursor-pointer">
        {/* Card Image */}
        <div
          className="relative w-full aspect-[2/3] rounded-lg mb-4 overflow-hidden shadow-lg card-glow"
          style={{ background: card.image }}
        >
          {/* Badges */}
          <div className="absolute top-3 right-3 flex flex-col gap-2">
            {card.featured && (
              <div className="bg-neon-pink px-3 py-1 rounded text-white text-xs font-bold shadow-neon-pink">
                FEATURED
              </div>
            )}
            {card.isNew && (
              <div className="bg-neon-cyan px-3 py-1 rounded text-dark-bg text-xs font-bold shadow-neon-cyan">
                NEW
              </div>
            )}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                added
                  ? 'bg-green-500 text-white'
                  : 'bg-neon-cyan text-dark-bg hover:shadow-neon-cyan-lg'
              }`}
            >
              <ShoppingCart size={16} />
              {added ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>

        {/* Card Info */}
        <h3 className="font-bold text-lg text-white group-hover:text-neon-cyan transition-colors line-clamp-2 mb-1">
          {card.name}
        </h3>

        <p className="text-text-secondary text-sm mb-2">{card.game}</p>

        <div className="flex items-center justify-between mb-3">
          <p className="text-neon-purple text-xs font-semibold">{card.condition}</p>
          <p className="text-neon-purple text-xs">{card.set}</p>
        </div>

        <p className="text-2xl font-bold text-neon-pink">${card.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
