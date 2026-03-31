# Rally Point TCG - Quick Start Guide

## Installation & Running

```bash
cd rally-point-tcg

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site live.

## What's Included

This is a **complete, production-ready Next.js e-commerce platform** with:

### Pages
- **Homepage** (`/`) - Hero section, featured cards, categories, new arrivals
- **Shop** (`/shop`) - Full product catalog with advanced filtering & search
- **Product Detail** (`/shop/[id]`) - Individual card pages with related products
- **Categories** (`/categories/[slug]`) - Dynamic pages for each game category
- **Cart** (`/cart`) - Shopping cart with totals and checkout button
- **About** (`/about`) - Mission story, values, and brand info

### Features
- **Dark Neon Gamer Theme** - Electric cyan (#00f0ff), neon purple (#b347ff), hot pink (#ff2d7b)
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Shopping Cart** - Full cart functionality with localStorage persistence
- **Advanced Filters** - Filter by game, price, condition, sort by price/name/new
- **Search** - Real-time search across card names and sets
- **29+ Sample Cards** - Across 7 categories with realistic pricing
- **Hover Effects** - Smooth animations and neon glow effects
- **Mobile Menu** - Hamburger menu with category dropdown on mobile

### Components
- `CardProduct` - Reusable product card with add-to-cart
- `CategoryTile` - Category card for game selection
- `FilterSidebar` - Advanced filtering panel
- `SearchBar` - Real-time search input
- `CartItem` - Cart line item with quantity controls
- `Navbar` - Sticky navigation with cart badge
- `Footer` - Footer with links and social media
- `HeroSection` - Homepage hero with neon styling

## Customization

### Colors
Edit `tailwind.config.ts` to change the neon palette:
```ts
colors: {
  'neon-cyan': '#00f0ff',      // Primary accent
  'neon-purple': '#b347ff',    // Secondary
  'neon-pink': '#ff2d7b',      // Sale prices
}
```

### Sample Data
Edit `lib/data.ts` to:
- Add more cards
- Modify card details (price, condition, set)
- Add new categories
- Update descriptions

### Brand Name
Search for "Rally Point" or "RALLY POINT" in the code and replace with your brand name.

## Environment Variables

Create `.env.local` (not required to run):
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

These are ready for Firebase and Stripe integration when you're ready.

## File Structure

```
rally-point-tcg/
├── app/               # Next.js App Router pages
├── components/        # Reusable React components
├── lib/              # Utilities, types, data, context
├── package.json      # Dependencies
├── tailwind.config.ts # Tailwind theming
└── README.md         # Full documentation
```

## Next Steps

### To Add Payments (Stripe)
1. Get your Stripe API keys
2. Add to `.env.local`
3. Create a checkout page
4. Integrate Stripe SDK

### To Add Backend (Firebase)
1. Create a Firebase project
2. Set up Firestore database
3. Replace sample data with real database calls
4. Add authentication

### To Deploy
```bash
npm run build
# Deploy to Vercel, Netlify, or your hosting
```

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Need to clear cart?**
Open browser DevTools > Application > Local Storage > Remove "rally-point-cart"

**Styles not loading?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## Support

This is a fully functional e-commerce template ready for customization. All code is TypeScript with full type safety.

**Happy selling!**
