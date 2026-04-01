'use client';

import { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { Minus, Plus, X } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 pb-4 border-b border-brand-gold/20 last:border-b-0">
      {/* Image */}
      <div
        className="w-24 h-32 rounded-lg flex-shrink-0"
        style={{ background: item.image }}
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-white mb-1">{item.name}</h3>
        <p className="text-text-secondary text-sm mb-2">{item.game}</p>
        <p className="text-brand-red font-bold">${item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-text-secondary hover:text-brand-red transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2 bg-dark-card border border-brand-gold/30 rounded">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-1 text-text-secondary hover:text-brand-gold transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center text-white font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-1 text-text-secondary hover:text-brand-gold transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>

        <p className="text-brand-gold font-bold text-lg">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
