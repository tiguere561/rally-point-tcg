'use client';

import { useCart } from '@/lib/cart-context';
import CartItem from '@/components/CartItem';
import Link from 'next/link';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, cartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag size={64} className="mx-auto text-text-secondary mb-6" />
        <h1 className="text-3xl font-bold text-white mb-4">Your cart is empty</h1>
        <p className="text-text-secondary mb-8">
          Looks like you haven't added any cards yet. Time to go on a mission!
        </p>
        <Link href="/shop">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-dark-bg font-bold rounded-lg hover:shadow-brand-gold-lg transform hover:scale-105 transition-all">
            Continue Shopping <ArrowRight size={20} />
          </button>
        </Link>
      </div>
    );
  }

  const estimatedShipping = cartTotal > 100 ? 0 : 9.99;
  const tax = cartTotal * 0.1; // Rough estimate
  const finalTotal = cartTotal + estimatedShipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Shopping <span className="text-brand-gold">Cart</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-dark-card border border-brand-gold/20 rounded-lg p-6">
          <div className="space-y-6">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="border-t border-brand-gold/20 mt-6 pt-6">
            <button
              onClick={() => clearCart()}
              className="text-brand-red hover:text-brand-red/80 text-sm font-semibold transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-dark-card border border-brand-gold/20 rounded-lg p-6 h-fit sticky top-20">
          <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

          <div className="space-y-4 mb-6 pb-6 border-b border-brand-gold/20">
            <div className="flex justify-between">
              <span className="text-text-secondary">Subtotal</span>
              <span className="text-white font-semibold">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">
                Shipping
                {estimatedShipping === 0 && (
                  <span className="text-brand-gold text-xs ml-1">(FREE)</span>
                )}
              </span>
              <span className="text-white font-semibold">${estimatedShipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Estimated Tax</span>
              <span className="text-white font-semibold">${tax.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <span className="text-lg font-bold text-white">Total</span>
            <span className="text-2xl font-bold text-brand-red">${finalTotal.toFixed(2)}</span>
          </div>

          <button className="w-full px-6 py-4 bg-brand-gold text-dark-bg font-bold rounded-lg hover:shadow-brand-gold-lg transform hover:scale-105 transition-all mb-4">
            Proceed to Checkout
          </button>

          <Link href="/shop">
            <button className="w-full px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold/10 font-semibold rounded-lg transition-all">
              Continue Shopping
            </button>
          </Link>

          {estimatedShipping > 0 && (
            <p className="text-brand-gold text-xs text-center mt-4">
              Free shipping on orders over $100!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
