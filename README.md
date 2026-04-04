# Sandra-luxe
Sandra Luxe is a high-end beauty e-commerce front-end experience featuring immersive animations, a functional shopping cart, WhatsApp checkout integration, and a dual-theme design system. Built entirely with vanilla web technologies — no frameworks, no dependencies — just clean, performant code.


The website features:
- A sophisticated **dual-theme design** (dark mode default, light mode with a distinct hero layout)
- **Immersive 3D animations** on navigation, scroll, and theme toggle
- A fully functional **shopping cart** with localStorage persistence
- **WhatsApp Business checkout** integration
- **Exploding product modals** with particle burst effects
- Zero external JavaScript libraries

---
https://github.com/Karangwa125/Sandra-luxe

## 🎨 Theme System
- **Dark mode** as the default — deep plum backgrounds with gold and blush accents
- **Light mode** with a fully unique hero layout — separate background image, left-aligned text block, and adjusted overlays
- **3D flip transition** when switching themes — `rotateY`, `scale`, and `brightness` transforms with a `clip-path` curtain overlay
- Theme preference persisted via `localStorage` across sessions

### 🚀 Navigation & Page Transitions
- **Gold-to-pink curtain wipe** — a full-screen `clip-path` sweep animation on every nav link click
- **3D section exit/enter** — current section slides out with `rotateY + translateZ + scale`, new section enters from depth
- **Scroll-triggered 3D reveals** — each section lifts in with `rotateX + translateY` via `IntersectionObserver`
- Smooth scroll with offset compensation for fixed navbar
- Active nav link highlighting based on scroll position

### 🛍️ Product Catalog
- **8 products** across Skincare, Makeup, and Fragrance categories
- **Filter tabs** — animated category switching with staggered card re-entrance
- **Card animations** — staggered `translateY` entrance with `card-visible` observer
- Real product images with emoji fallback on load failure
- Quick **Add to Bag** button with cart count bump animation

### 💥 Product Modal — Exploding Detail View
- **Particle burst** — 18 branded color particles explode from the exact click position
- Real **product image** displayed in the modal gallery (same as card)
- **Staggered info reveal** — category, name, stars, price, description, tags, and benefits each animate in sequentially
- **Benefit tags** (e.g. "Hydrating", "12hr Wear", "Vegan") per product
- **Bullet benefit list** with gold ✦ markers
- Add to Bag from modal with instant cart update

### 🛒 Shopping Cart
- Slide-in **cart panel** from the right with backdrop overlay
- **Persistent cart** via `localStorage` — survives page refresh
- Quantity increment / decrement with live total recalculation
- One-click item removal
- Cart count badge with **bump animation** on add
- Empty state with illustrated prompt

### 📱 WhatsApp Checkout
- Checkout button opens **WhatsApp** with a pre-formatted order message
- Message includes product names, quantities per item, per-item total, and grand total
- Properly URL-encoded for all characters
- Works on both **mobile** (opens WhatsApp app) and **desktop** (opens WhatsApp Web)

### 💬 Testimonials
- **Auto-playing carousel** cycling every 5 seconds
- **Touch / swipe** support on mobile
- Dot navigation with active indicator pill animation
- Avatar images from UI Avatars API with initial-letter fallback

### 📬 Contact Form
- **Real-time validation** on blur and on input (after first error)
- Field-level error messages with red highlight state
- Success state with animated confirmation message
- Toast notification system

### ✨ Micro-interactions
- **Cursor sparkle trail** — branded pink/gold particles follow the mouse on desktop
- **Magnetic buttons** — primary buttons follow cursor with subtle transform
- **Button ripple** — material-style radial ripple on every primary CTA click
- **Parallax blobs** — soft background orbs move at different speeds on scroll
- **Count-up stats** — hero numbers animate from 0 with eased timing on first viewport entry
- **Scrolling category strip** — infinite marquee of product categories
- **Spinning logo icon** — ✦ rotates continuously in the navbar
- **Floating badges** — hero badges float with staggered vertical animation
- **Orb glow pulse** — hero product orb breathes with scale + opacity animation

## 📁 Project Structure

```
sandra-luxe/
│
├── index.html              # Single-page application — all sections
├── style.css               # Complete design system + all animations
├── script.js               # All JavaScript logic and interactivity
│
└── media/                  # All image assets
    ├── model.png           # Dark mode hero background (model image)
    ├── model2.png          # Hero orb floating image
    ├── hero-light.jpg      # Light mode hero background image
    ├── owner.jpg           # About section — founder photo
    ├── 1.png               # Product: Rose Glow Serum
    ├── 2.png               # Product: Velvet Lip Rouge
    ├── 3.png               # Product: 24K Gold Eye Palette
    ├── 4.png               # Product: Nile Bloom Perfume
    ├── 5.png               # Product: Shea Butter Cream
    ├── 6.png               # Product: Glow Foundation
    ├── 7.png               # Product: Lash Amplify Mascara
    └── 8.png               # Product: Turmeric 
```



# 🚀 Getting Started

### Prerequisites

No build tools. No Node.js required. Just a browser.
2. Navigate into the project folder
cd sandra-luxe

# 3. Open directly in your browser
open index.html




# ⚙️ Configuration

Before deploying to production, update the following:

### 1. WhatsApp Phone Number

Open `script.js` and find the `checkout()` function:

```js
// Replace with your real WhatsApp business number
// Format: country code + number, digits only — no +, no spaces, no dashes
const WHATSAPP_NUMBER = '256700000000';

// Example for Uganda (+256):
const WHATSAPP_NUMBER = '256712345678';
```

### 2. Contact Details

In `index.html`, update the contact section:

```html
<!-- Email -->
<p>hello@sandraluxe.ug</p>

<!-- WhatsApp display number -->
<p>+256 700 000 000</p>

<!-- Location -->
<p>Kampala, Uganda</p>
```

### 3. Social Media Links

In `index.html`, find the `.social-links` block and replace each `href="#"` with your real profile URLs:
```
