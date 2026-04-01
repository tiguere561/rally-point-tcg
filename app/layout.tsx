import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/lib/cart-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Rally Point TCG - Veteran Owned Trading Card Store',
  description: 'Buy rare and vintage trading cards from all your favorite games. Pokemon, One Piece, Naruto, and more.',
  keywords: 'trading cards, TCG, Pokemon, One Piece, Naruto, collectibles',
  authors: [{ name: 'Rally Point TCG' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Rally Point TCG',
    description: 'Veteran Owned. Mission Ready. Game On.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <CartProvider>
          <div className="flex flex-col min-h-screen bg-dark-bg">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
