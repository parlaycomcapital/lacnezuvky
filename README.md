# Lacné Žuvky - Premium Snus E-commerce

A secure, professional dark-mode e-commerce website for premium snus products with advanced security features and anonymous operation capabilities.

## 🔒 Security Features

- **Password Protection**: Secure access control with session management
- **Security Headers**: Comprehensive HTTP security headers (CSP, HSTS, X-Frame-Options, etc.)
- **Anonymous Operation**: No personal data collection, Signal-only contact
- **Privacy-First**: Minimal data collection, encrypted communications
- **DDoS Protection**: Built-in protection against common attacks
- **Content Security Policy**: Strict CSP to prevent XSS attacks

## 🛍️ Features

- 🔐 Password-protected access (password: `lz25`)
- 🛍️ Product catalog with real images and data
- 🎨 Professional dark mode design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 Advanced search and filtering
- 💰 Dynamic tiered pricing (1-10: €4, 11-49: €3.5, 50+: €3)
- 🛒 Shopping cart functionality
- 📞 Signal contact integration (@golo.21)
- 📄 Privacy policy and terms of service
- 🚫 Professional 404 and loading pages
- 🔍 SEO optimized with sitemap and robots.txt

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Data**: SheetJS (xlsx parsing)
- **State**: Zustand
- **Security**: Next.js Middleware, Security Headers
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Product Data

Products are loaded from `Snus catalog.xlsx` and automatically parsed into `lib/products-data.json`. The script maps product categories to real images:

- **PABLO** products → `/images/products/pablo.png`
- **KILLA** products → `/images/products/killa.png`
- **CUBA** products → `/images/products/cuba.png`
- **ICEBERG** products → `/images/products/iceberg.png`
- **SIBERIA** products → `/images/products/siberia.png`

## 🔧 Configuration

### Password Change
To change the access password, update the value in `middleware.ts`:
```typescript
if (!password || password !== 'YOUR_NEW_PASSWORD') {
```

### Security Headers
Security headers are configured in `middleware.ts` and `next.config.js` for maximum protection.

### Product Data Update
1. Update `Snus catalog.xlsx` with new products
2. Run: `node scripts/generate-products.js`
3. Commit and push changes

## 🌐 Deployment

The site is deployed on Vercel with automatic updates from the main branch.

### Security Considerations for Anonymous Operation:
- Use VPN when managing the repository
- Consider using anonymous hosting services
- Use encrypted email services for communications
- Regularly rotate access credentials
- Monitor access logs for suspicious activity

## 📞 Contact

For inquiries, contact us via Signal: **@golo.21**

## ⚖️ Legal

- Privacy Policy: `/privacy`
- Terms of Service: `/terms`
- Age verification required (18+)
- Products for personal use only

## 🔐 Security Best Practices

1. **Regular Updates**: Keep dependencies updated
2. **Access Monitoring**: Monitor who accesses the admin functions
3. **Data Minimization**: Only collect necessary data
4. **Encryption**: All data encrypted in transit and at rest
5. **Anonymous Operations**: No personal information stored
6. **Secure Communications**: Signal-only contact method

---

**⚠️ Important**: This website is designed for anonymous operation. Always use secure practices when managing the site and consider using VPN and anonymous hosting services for maximum security.