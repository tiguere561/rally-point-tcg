import Link from 'next/link';
import { Category } from '@/lib/types';

interface CategoryTileProps {
  category: Category;
}

export default function CategoryTile({ category }: CategoryTileProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="group cursor-pointer bg-dark-card border border-brand-gold/10 rounded-lg p-6 hover:border-brand-gold hover:shadow-brand-gold transition-all duration-300 h-full">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="text-xl font-bold text-brand-gold group-hover:text-brand-gold mb-2">
          {category.name}
        </h3>
        <p className="text-text-secondary text-sm mb-4">{category.description}</p>
        <p className="text-brand-red text-sm font-semibold">
          {category.cardCount} cards in stock
        </p>
      </div>
    </Link>
  );
}
