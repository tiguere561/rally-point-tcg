import Link from 'next/link';
import { Category } from '@/lib/types';

interface CategoryTileProps {
  category: Category;
}

export default function CategoryTile({ category }: CategoryTileProps) {
  return (
    <Link href={`/categories/${category.slug}`}>
      <div className="group cursor-pointer bg-dark-card border border-neon-cyan/10 rounded-lg p-6 hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 h-full">
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="text-xl font-bold text-neon-cyan group-hover:text-neon-cyan mb-2">
          {category.name}
        </h3>
        <p className="text-text-secondary text-sm mb-4">{category.description}</p>
        <p className="text-neon-purple text-sm font-semibold">
          {category.cardCount} cards in stock
        </p>
      </div>
    </Link>
  );
}
