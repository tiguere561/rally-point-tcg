import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gold/20 bg-dark-card mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer: Links | Logo | Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left Links */}
          <div className="flex flex-col items-center md:items-start gap-6 flex-1">
            <div>
              <h3 className="font-bold text-brand-gold mb-3 text-center md:text-left">Quick Links</h3>
              <ul className="space-y-2 text-text-secondary text-sm text-center md:text-left">
                <li>
                  <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-brand-gold transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/cart" className="hover:text-brand-gold transition-colors">Cart</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand-gold mb-3 text-center md:text-left">Legal</h3>
              <ul className="space-y-2 text-text-secondary text-sm text-center md:text-left">
                <li>
                  <a href="/privacy.html" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms.html" className="hover:text-brand-gold transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="mailto:support@rallypointtcg.com" className="hover:text-brand-gold transition-colors">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center flex-shrink-0 order-first md:order-none">
            <Image
              src="/header-logo.png"
              alt="Rally Point TCG"
              width={560}
              height={160}
              className="h-40 md:h-48 w-auto mb-4"
            />
            <p className="text-text-secondary text-sm text-center">
              Veteran Owned. Mission Ready. Game On.
            </p>
            <a
              href="https://www.instagram.com/rallypointtcg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-secondary hover:text-brand-gold transition-colors mt-4"
            >
              <Instagram size={24} />
              <span className="text-sm">@rallypointtcg</span>
            </a>
          </div>

          {/* Right Links */}
          <div className="flex flex-col items-center md:items-end flex-1">
            <h3 className="font-bold text-brand-gold mb-3 text-center md:text-right">Categories</h3>
            <ul className="space-y-2 text-text-secondary text-sm text-center md:text-right">
              <li>
                <Link href="/categories/pokemon" className="hover:text-brand-gold transition-colors">Pokémon</Link>
              </li>
              <li>
                <Link href="/categories/onepiece" className="hover:text-brand-gold transition-colors">One Piece</Link>
              </li>
              <li>
                <Link href="/categories/naruto" className="hover:text-brand-gold transition-colors">Naruto</Link>
              </li>
              <li>
                <Link href="/categories/lorcana" className="hover:text-brand-gold transition-colors">Lorcana</Link>
              </li>
              <li>
                <Link href="/categories/baseball" className="hover:text-brand-gold transition-colors">Baseball</Link>
              </li>
              <li>
                <Link href="/categories/football" className="hover:text-brand-gold transition-colors">Football</Link>
              </li>
              <li>
                <Link href="/categories/basketball" className="hover:text-brand-gold transition-colors">Basketball</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-gold/20 mt-10 pt-6 text-center">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} Rally Point TCG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
