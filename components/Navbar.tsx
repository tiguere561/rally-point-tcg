'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-gold/20 bg-dark-surface/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/header-logo.png"
              alt="Rally Point TCG"
              width={240}
              height={70}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-text-secondary hover:text-brand-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-text-secondary hover:text-brand-gold transition-colors"
            >
              Shop
            </Link>
            <div className="relative group">
              <button className="text-text-secondary hover:text-brand-gold transition-colors flex items-center gap-1">
                Categories
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-dark-card border border-brand-gold/30 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/categories/pokemon"
                  className="block px-4 py-2 text-text-secondary hover:text-brand-gold hover:bg-brand-gold/10"
                >
                  Pokémon
                </Link>
                <Link
                  href="/categories/onepiece"
                  className="block px-4 py-2 text-text-secondary hover:text-brand-gold hover:bg-brand-gold/10"
                >
                  One Piece
                </Link>
                <Link
                  href="/categories/naruto"
                  className="block px-4 py-2 text-text-secondary hover:text-brand-gold hover:bg-brand-gold/10"
                >
                  Naruto
                </Link>
                <Link
                  href="/categories/lorcana"
                  className="block px-4 py-2 text-text-secondary hover:text-brand-gold hover:bg-brand-gold/10"
                >
                  Lorcana
                </Link>
                <Link
                  href="/categories/baseball"
                  className="block px-4 py-2 text-text-secondary hover:text-brand-gold hover:bg-brand-gold/10"
                >
                  Baseball
                </Link>
                <Link
                  href="/categories/football"
                  className="block px-4 py-2 text-text-secondary hover:text-brand-gold hover:bg-brand-gold/10"
                >
                  Football
                </Link>
                <Link
                  href="/categories/basketball"
                  className="block px-4 py-2 text-text-secondary hover:text-brand-gold hover:bg-brand-gold/10"
                >
                  Basketball
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="text-text-secondary hover:text-brand-gold transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative text-text-secondary hover:text-brand-gold transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-gold"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link
              href="/"
              className="block text-text-secondary hover:text-brand-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block text-text-secondary hover:text-brand-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <div className="text-text-secondary text-sm">Categories:</div>
            <div className="pl-4 space-y-2">
              <Link
                href="/categories/pokemon"
                className="block text-text-secondary hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pokémon
              </Link>
              <Link
                href="/categories/onepiece"
                className="block text-text-secondary hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                One Piece
              </Link>
              <Link
                href="/categories/naruto"
                className="block text-text-secondary hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Naruto
              </Link>
              <Link
                href="/categories/lorcana"
                className="block text-text-secondary hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Lorcana
              </Link>
              <Link
                href="/categories/baseball"
                className="block text-text-secondary hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Baseball
              </Link>
              <Link
                href="/categories/football"
                className="block text-text-secondary hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Football
              </Link>
              <Link
                href="/categories/basketball"
                className="block text-text-secondary hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Basketball
              </Link>
            </div>
            <Link
              href="/about"
              className="block text-text-secondary hover:text-brand-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
