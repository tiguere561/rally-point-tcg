# Rally Point TCG - E-Commerce Platform

A modern, dark-themed trading card game e-commerce web app built with Next.js 15, React 19, and Tailwind CSS v4.

## Features

- **Dark Neon/RGB Gamer Design** - Electric cyan, neon purple, and hot pink accents on dark backgrounds
- **Product Catalog** - 29+ trading cards across 7 categories (Pokémon, One Piece, Naruto, Lorcana, Baseball, Football, Basketball)
- **Advanced Filtering** - Filter by game, condition, price range, and sort options
- **Search Functionality** - Real-time search across card names, sets, and games
- **Shopping Cart** - Persistent cart using localStorage with quantity controls
- **Product Details** - Detailed card pages with related products
- **Category Pages** - Dynamic category browsing with filtered inventory
- **Responsive Design** - Mobile-first approach with full mobile menu support
- **Veteran-Owned Brand** - Mission-driven messaging throughout

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 with custom neon color palette
- **Icons**: Lucide React
- **State Management**: React Context (Cart)
- **TypeScript**: Full type safety throughout

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
cd rally-point-tcg

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rally-point-tcg/
├── app/
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── page.tsx             # Homepage
│   ├── shop/
│   │   ├── page.tsx         # Shop with filters
│   │   └── [id]/page.tsx    # Product detail page
│   ├── categories/
│   │   └── [slug]/page.tsx  # Category pages
│   ├── cart/page.tsx        # Shopping cart
│   └── about/page.tsx       # About/mission page
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── CardProduct.tsx      # Product card component
│   ├── CategoryTile.tsx     # Category card
│   ├── SearchBar.tsx        # Search input
│   ├── FilterSidebar.tsx    # Filter controls
│   ├── CartItem.tsx         # Cart line item
│   └── HeroSection.tsx      # Homepage hero
├── lib/
│   ├── types.ts             # TypeScript types
│   ├── data.ts              # Sample card inventory
│   └── cart-context.tsx     # Cart state management
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.mjs       # PostCSS config
├── tsconfig.json            # TypeScript config
└── .env.example             # Environment variables template
```

## Features in Detail

### Shopping Experience
- Browse products across 7 gaming categories
- Filter by price range, condition, and game type
- Sort by price, newest, name, or featured status
- View detailed product information with card specs
- Add items to cart with quantity control
- Persistent cart with local storage

### Design
- Dark background (#0a0a0f) with neon cyan (#00f0ff) primary accent
- Secondary neon purple (#b347ff) for badges and secondary actions
- Hot pink (#ff2d7b) for sale prices and highlights
- Smooth transitions and hover animations
- Neon glow effects on interactive elements
- Mobile-responsive layout

### Brand
- Veteran-owned narrative throughout
- Military terminology (rally point, mission, service)
- Community-focused messaging
- Trust and integrity positioning

## Next Steps / Future Enhancements

- [ ] Firebase integration for backend
- [ ] Stripe payment processing
- [ ] User authentication and accounts
- [ ] Order history and tracking
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Admin dashboard for inventory management
- [ ] Email notifications
- [ ] Inventory synchronization
- [ ] Advanced analytics

## Environment Variables

Create a `.env.local` file in the root directory with the following variables (see `.env.example`):

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

## Sample Data

The app comes with 29 curated trading cards across all categories:

- **Pokémon**: Charizard VMAX, Pikachu VSTAR, Mewtwo ex, Lugia V, Umbreon VMAX
- **One Piece**: Luffy, Zoro, Nami, Shanks, Boa Hancock
- **Naruto**: Naruto, Sasuke, Kakashi, Itachi
- **Lorcana**: Elsa, Mickey Mouse, Stitch
- **Baseball**: Mike Trout, Shohei Ohtani, Ronald Acuña Jr., Babe Ruth
- **Football**: Patrick Mahomes, CJ Stroud, Tyreek Hill, Saquon Barkley
- **Basketball**: LeBron James, Victor Wembanyama, Luka Dončić, Stephen Curry

Prices range from $59.99 to $449.99 with realistic conditions and rarity levels.

## License

MIT License - Feel free to use this as a template for your own e-commerce projects.

## Support

For questions or issues, feel free to reach out. Rally Point TCG is built with pride and passion.

**Veteran Owned. Mission Ready. Game On.**
