# Rally Point TCG - Complete Feature List

## Pages & Routes

### Public Pages
- **`/`** - Homepage
  - Neon glow hero section with CTA
  - Featured cards carousel (4 cards)
  - "Veteran Owned" banner section
  - 7 category tiles with icons and card counts
  - New arrivals grid (6 cards)
  - Call-to-action section

- **`/shop`** - Product Catalog
  - Full product grid (all 29 cards)
  - Advanced sidebar filters (desktop)
  - Mobile filter drawer
  - Real-time search bar
  - Sort options: Featured, Newest, Price (Low-High), Price (High-Low), Name (A-Z)
  - Filter by: Game/Category, Price Range ($0-$500), Card Condition
  - Dynamic results counter
  - Empty state with clear filters button

- **`/shop/[id]`** - Product Detail
  - Large card image (gradient placeholder)
  - Card name, game, price
  - Detailed specs grid: Set, Rarity, Condition, Stock
  - Quantity selector with +/- buttons
  - "Add to Cart" button with success feedback
  - Stock warning ("Only X left!")
  - Related products section (4 similar cards)
  - Breadcrumb navigation

- **`/categories/[slug]`** - Category Pages (7 total)
  - Category header with icon and description
  - Filtered product grid for that category only
  - Same filters as shop page (excluding game filter)
  - Search within category
  - Back to shop navigation

  **Available Categories:**
  - `/categories/pokemon` - Pokémon cards
  - `/categories/onepiece` - One Piece cards
  - `/categories/naruto` - Naruto cards
  - `/categories/lorcana` - Lorcana cards
  - `/categories/baseball` - Baseball cards
  - `/categories/football` - Football cards
  - `/categories/basketball` - Basketball cards

- **`/cart`** - Shopping Cart
  - List of cart items with images
  - Quantity controls (-, quantity display, +)
  - Remove button for each item
  - Item subtotals
  - Order summary sidebar:
    - Subtotal
    - Shipping (free over $100)
    - Estimated tax (10%)
    - Total
  - "Proceed to Checkout" button
  - "Continue Shopping" button
  - Empty cart state with link to shop
  - Clear cart button

- **`/about`** - About/Mission Page
  - Hero section with mission statement
  - "Rally Point Story" narrative section
  - 3-column values section: Service First, Integrity, Community
  - "Why Rally Point?" section with 6 selling points
  - Call-to-action section
  - All brand messaging and storytelling

## Components

### Navigation & Layout
- **Navbar**
  - Logo/brand name (cyan "RALLY" + white "POINT")
  - Desktop nav links: Home, Shop, Categories (dropdown), About
  - Cart icon with item count badge
  - Mobile hamburger menu
  - Mobile category dropdown in menu
  - Sticky positioning with dark background
  - Border with neon cyan accent

- **Footer**
  - 4-column layout (Brand, Quick Links, Categories, Social Media)
  - Social media icons (Facebook, Twitter, Instagram, LinkedIn)
  - Copyright year (dynamic)
  - Links to Privacy, Terms, Contact
  - Dark theme with neon accents

### Product Display
- **CardProduct**
  - Card image placeholder (gradient)
  - Featured/New badges
  - Hover overlay with "Add to Cart" button
  - Card name, game, condition, set, price
  - Hover scale and glow effect
  - Click to detail page

- **CategoryTile**
  - Category icon
  - Category name and description
  - Card count in stock
  - Hover border and glow effect
  - Link to category page

### Shopping Features
- **SearchBar**
  - Text input with search icon
  - Real-time search (onChange)
  - Placeholder text
  - Focus border glow

- **FilterSidebar**
  - Sort dropdown (6 options)
  - Price range sliders ($0-$500)
  - Game/Category checkboxes (7 options)
  - Condition checkboxes (5 options)
  - Mobile close button
  - Dark theme with neon styling

- **CartItem**
  - Item image, name, game, price
  - Quantity controls with +/- buttons
  - Remove button (X icon)
  - Item total
  - Flex layout for responsive stacking

### Sections
- **HeroSection**
  - Large gradient background blobs
  - "RALLY POINT TCG" heading (multi-color)
  - Tagline and description
  - "SHOP NOW" CTA button
  - Neon glow effects on heading

## Features in Detail

### Shopping Cart
- Add items from product cards or detail pages
- Persistent storage using localStorage
- Update quantities (-, +, direct input)
- Remove individual items
- Clear entire cart
- Real-time item count in navbar badge
- Cart total calculation
- Context API for global state
- Survives page reloads

### Search & Filter
- Real-time search across:
  - Card names
  - Set names
  - Game titles
- Filter by:
  - Game (7 categories) - single or multiple
  - Price range (min/max sliders, $0-$500)
  - Condition (5 options) - single or multiple
- Sort by:
  - Featured (default)
  - Newest first
  - Price (Low to High)
  - Price (High to Low)
  - Name (A-Z)
- Filters work in:
  - Shop page (full catalog)
  - Category pages (filtered to category)
- Mobile-friendly filter drawer
- Clear filters button

### Product Information
- Card name and game
- Set name
- Rarity level
- Condition (Near Mint, Lightly Played, etc.)
- Price ($59.99 - $449.99 range)
- Stock quantity
- Description/flavor text
- Featured/New badges

### Responsive Design
- **Desktop:**
  - Sidebar filters
  - Multi-column grids (3-4 columns)
  - Full dropdown menus

- **Tablet:**
  - Adjusted layouts
  - 2-column grids
  - Touch-friendly buttons

- **Mobile:**
  - Single column layouts
  - Hamburger menu
  - Filter drawer (modal)
  - Collapsible sections
  - Optimized touch targets

### Styling & Theme
- Dark neon gamer aesthetic
- Smooth transitions (300ms default)
- Hover animations:
  - Scale up on cards
  - Color change on text
  - Glow effect on hover
- Neon shadows on interactive elements
- Custom Tailwind config with:
  - Dark color palette
  - Neon accent colors
  - Box shadow utilities
  - Typography from Inter font

## Interactive Elements

### Buttons
- Primary: Cyan background, white text on dark
- Secondary: Cyan border, transparent background
- Danger/Alert: Hot pink accent
- Hover states with scale (1.05) and shadow
- Active feedback (Add to Cart changes to "Added!")

### Form Controls
- Search input with clear focus state
- Price sliders with visual feedback
- Checkboxes with accent color
- Select dropdowns with dark theme
- Quantity input with +/- buttons

### Navigation
- Breadcrumb links on detail and category pages
- Mobile hamburger menu animation
- Category dropdown on hover (desktop)
- Mobile category menu expansion
- "Back to Shop" navigation

## Data & Inventory

### Sample Data Included
- **7 Game Categories**
- **29 Trading Cards** with:
  - Unique ID
  - Name
  - Game/Category
  - Set name
  - Rarity
  - Condition
  - Price
  - Quantity in stock
  - Description
  - Featured flag
  - New flag
  - Image (gradient placeholder)

### Card Prices
- Range: $59.99 to $449.99
- Realistic market values
- Mix of recent and vintage cards
- Featured and new items highlighted

## Accessibility Features
- Semantic HTML
- Color contrast (WCAG AA compliant)
- Focus visible states
- Alt text for images (placeholders)
- ARIA labels where appropriate
- Keyboard navigation support
- Mobile-friendly touch targets (48px minimum)

## Performance
- Next.js optimizations
- Static page generation where possible
- Image optimization (placeholders)
- CSS-in-JS with Tailwind (critical CSS inlined)
- Minimal JavaScript bundle
- localStorage for cart (no server calls)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Fallbacks for older CSS features

## Future Enhancement Hooks
- Firebase integration ready (.env template)
- Stripe payment integration ready (.env template)
- User authentication structure
- Order management system
- Admin dashboard structure
- Analytics tracking points
- Email notification system
- Wishlist functionality
- Review/rating system
- Inventory sync backend

## Testing Ready
- TypeScript strict mode (catches errors early)
- Component isolation (easy to test)
- Clear data structure (lib/types.ts)
- Predictable state management (React Context)
- Sample data in one file (easy to mock)

---

**Everything is built, styled, and fully functional. Ready to run with `npm install && npm run dev`.**
