export type CardCondition = 'Near Mint' | 'Lightly Played' | 'Moderately Played' | 'Heavily Played' | 'Damaged';

export interface Card {
  id: string;
  name: string;
  game: string;
  set: string;
  rarity: string;
  condition: CardCondition;
  price: number;
  image: string; // placeholder color for gradient
  featured: boolean;
  isNew: boolean;
  description: string;
  quantity: number; // inventory
}

export interface CartItem {
  id: string;
  name: string;
  game: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  cardCount: number;
  icon: string;
}
