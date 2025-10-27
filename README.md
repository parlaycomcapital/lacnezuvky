# LACNÉ ŽUVKY - E-commerce Catalog

A playful, modern e-commerce catalog website for "LACNÉ ŽUVKY" (Cheap Chewing Gums) with password protection, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔐 Password-protected access (password: `lz25`)
- 🛍️ Product catalog with search and filters
- 📱 Fully responsive design
- 🎨 Playful design inspired by the mascot logo
- 🏷️ Product categories and tags
- 📊 Stock management
- 🔍 Advanced search and filtering
- ⚡ Fast and optimized

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd lz
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
lz/
├── app/                    # Next.js app directory
│   ├── catalog/           # Catalog pages
│   │   ├── product/[id]/  # Product detail pages
│   │   └── page.tsx       # Main catalog page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Password gate
├── components/            # Reusable components
│   ├── CategoryFilter.tsx
│   ├── ProductCard.tsx
│   └── SearchBar.tsx
├── lib/                   # Utility functions
│   └── products.ts        # Product data and functions
├── types/                 # TypeScript types
│   └── product.ts
├── public/                # Static assets
└── styles/                # Additional styles

```

## Configuration

### Changing the Password

To change the password, edit the following file:

**File:** `app/page.tsx`

Find this line:
```typescript
if (password === 'lz25') {
```

Replace `'lz25'` with your desired password.

### Updating Product Data

Currently, products are stored in `lib/products.ts`. To update products:

1. Open `lib/products.ts`
2. Edit the `products` array
3. Each product should follow the `Product` interface defined in `types/product.ts`

### Using the Excel Spreadsheet

To import products from the Excel spreadsheet:

1. Install the `xlsx` package (already included)
2. Create an API route to read and parse the Excel file
3. Update the products data structure

Example implementation:

```typescript
import * as XLSX from 'xlsx'

export function loadProductsFromExcel(filePath: string) {
  const workbook = XLSX.readFile(filePath)
  const sheetName = workbook.SheetNames[0]
  const worksheet = workbook.Sheets[sheetName]
  const data = XLSX.utils.sheet_to_json(worksheet)
  
  // Map Excel columns to Product interface
  return data.map((row: any) => ({
    id: row.id || generateId(),
    name: row.name || '',
    description: row.description || '',
    price: parseFloat(row.price) || 0,
    imageUrl: row.imageUrl || '',
    category: row.category || 'Other',
    sku: row.sku || '',
    stock: parseInt(row.stock) || 0,
    tags: row.tags ? row.tags.split(',') : [],
  }))
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

Vercel will automatically:
- Detect Next.js
- Build your project
- Deploy to production

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Create a new site from Git
4. Build command: `npm run build`
5. Publish directory: `.next`

### Environment Variables

If you need to add environment variables (e.g., API keys), create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
SECRET_KEY=your_secret_key
```

Add `.env.local` to your `.gitignore` to keep it secure.

## Design Guidelines

### Color Palette

- **Sky Blue:** `#B8E3F0` - Primary background
- **Soft Pink:** `#FF9BBE` - Headings and accents
- **Warm Orange:** `#FF6B4A` - CTAs and badges
- **Cream:** `#FFF9E6` - Secondary backgrounds
- **Deep Navy:** `#1A1A2E` - Text and outlines

### Typography

- **Display Font:** Comic Sans MS (for playful headings)
- **Body Font:** System fonts (for readability)

### Styling

- Sticker-like borders with `border: 3px solid var(--color-deep-navy)`
- Rounded corners with `border-radius: 20px`
- Drop shadows for depth
- Hover animations and transitions

## SEO & Accessibility

- Semantic HTML
- Alt text for images (from product data)
- Keyboard navigation support
- ARIA labels where needed
- Meta tags for social sharing

## Performance

- Static generation where possible
- Image optimization with Next.js Image component
- Lazy loading for images
- Code splitting
- Optimized bundles

## Security

- Password protection on client and server
- HTTPOnly cookies for session management
- Environment variable protection
- Input validation
- XSS prevention

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.

## Support

For questions or issues, please contact the project maintainer.

---

**Password:** `lz25`

**Remember:** In production, use environment variables for sensitive data and implement proper server-side authentication!

