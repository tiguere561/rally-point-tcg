import HeroSection from '@/components/HeroSection';
import CategoryTile from '@/components/CategoryTile';
import CardProduct from '@/components/CardProduct';
import { categories, cards } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  const featuredCards = cards.filter((card) => card.featured).slice(0, 4);
  const newCards = cards.filter((card) => card.isNew).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Cards Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          <span className="text-neon-cyan">Featured</span> Cards
        </h2>
        <p className="text-text-secondary mb-10">
          Check out our hottest cards right now
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCards.map((card) => (
            <CardProduct key={card.id} card={card} />
          ))}
        </div>
      </section>

      {/* Veteran Banner */}
      <section className="bg-dark-card border-t border-b border-neon-cyan/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neon-purple text-sm font-bold mb-2">RALLY POINT PRIDE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-neon-cyan">Veteran Owned</span>. Veteran Proud.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Every transaction supports a veteran-owned small business. We bring the same discipline,
            integrity, and mission focus to trading cards that we brought to our service.
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Shop by <span className="text-neon-cyan">Game</span>
        </h2>
        <p className="text-text-secondary mb-10">
          Browse our complete collection across all major TCGs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryTile key={category.slug} category={category} />
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              <span className="text-neon-cyan">New</span> Arrivals
            </h2>
            <p className="text-text-secondary">
              Fresh inventory just added to our vault
            </p>
          </div>
          <Link href="/shop?filter=new">
            <button className="hidden md:block px-6 py-2 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded transition-all">
              View All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newCards.map((card) => (
            <CardProduct key={card.id} card={card} />
          ))}
        </div>

        <div className="flex justify-center md:hidden mt-10">
          <Link href="/shop?filter=new">
            <button className="px-6 py-2 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded transition-all">
              View All New Arrivals
            </button>
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-dark-card border-t border-neon-cyan/20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Level Up Your Collection?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Browse thousands of cards, from classic favorites to the latest releases.
          </p>
          <Link href="/shop">
            <button className="inline-block px-8 py-4 bg-neon-pink text-white font-bold rounded-lg hover:shadow-neon-pink-lg transform hover:scale-105 transition-all duration-300">
              EXPLORE ALL CARDS
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
