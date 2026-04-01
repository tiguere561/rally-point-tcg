import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gold/20 bg-dark-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/header-logo.png"
                alt="Rally Point TCG"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-text-secondary text-sm">
              Veteran Owned. Mission Ready. Game On.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-brand-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-brand-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-brand-gold transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-brand-gold mb-4">Categories</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>
                <Link
                  href="/categories/pokemon"
                  className="hover:text-brand-gold transition-colors"
                >
                  Pokémon
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/onepiece"
                  className="hover:text-brand-gold transition-colors"
                >
                  One Piece
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/naruto"
                  className="hover:text-brand-gold transition-colors"
                >
                  Naruto
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/lorcana"
                  className="hover:text-brand-gold transition-colors"
                >
                  Lorcana
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/baseball"
                  className="hover:text-brand-gold transition-colors"
                >
                  Baseball
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/football"
                  className="hover:text-brand-gold transition-colors"
                >
                  Football
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/basketball"
                  className="hover:text-brand-gold transition-colors"
                >
                  Basketball
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-brand-gold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-secondary hover:text-brand-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-brand-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-brand-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-brand-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
            <p>&copy; {currentYear} Rally Point TCG. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy.html" className="hover:text-brand-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms.html" className="hover:text-brand-gold transition-colors">
                Terms of Service
              </a>
              <a href="mailto:support@rallypointtcg.com" className="hover:text-brand-gold transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
