/* =============================================================
   SANDRA LUXE — script.js
   ============================================================= */

'use strict';

/* ─────────────────────────────────────────────
   DATA — Products & Testimonials
───────────────────────────────────────────── */

const PRODUCTS = [
  {
    id: 1,
    name: "NIVEA Body Lotion",
    category: "skincare",
    categoryLabel: "Skincare",
    price: 30000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "A silky serum infused with Ugandan rose water and hyaluronic acid. Deeply hydrates, plumps fine lines, aA deeply nourishing body lotion enriched with moisturizing ingredients that hydrate dry skin, leaving it soft, smooth, and healthy-looking all daynd leaves skin luminously dewy.",
    rating: 4,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/Nivea.png"
  },
   {
    id: 2,
    name: "Vaseline Body Lotion",
    category: "skincare",
    categoryLabel: "Skincare",
    price: 33000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "A fast-absorbing lotion designed to restore dry and damaged skin. Helps lock in moisture and improve skin texture for a naturally radiant glow.A silky serum infused with Ugandan rose water and hyaluronic acid. Deeply hydrates, plumps fine lines, aA deeply nourishing body lotion enriched with moisturizing ingredients that hydrate dry skin, leaving it soft, smooth, and healthy-looking all daynd leaves skin luminously dewy.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/Vaseline.png"
  },
   {
    id: 3,
    name: "Nice & Lovely Lotion",
    category: "skincare",
    categoryLabel: "Skincare",
    price: 19000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "A lightweight, skin-enhancing lotion that moisturizes while improving skin tone and brightness, giving your skin a smooth and even appearance.A fast-absorbing lotion designed to restore dry and damaged skin. Helps lock in moisture and improve skin texture for a naturally radiant glow.A silky serum infused with Ugandan rose water and hyaluronic acid. Deeply hydrates, plumps fine lines, aA deeply nourishing body lotion enriched with moisturizing ingredients that hydrate dry skin, leaving it soft, smooth, and healthy-looking all daynd leaves skin luminously dewy.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/Nice & Lovely Lotion.png"
  },
   {
    id: 4,
    name: "Clear Shampoo",
    category: "Haircare",
    categoryLabel: "Haircare",
    price: 17500,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "An anti-dandruff shampoo that cleanses the scalp deeply, removes flakes, and keeps hair fresh, clean, and healthy with long-lasting protection.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/Clear Shampoo.png"
  },
  
  {
    id: 5,
    name: "Geisha Soap",
    category: "skincare",
    categoryLabel: "skincare",
    price: 3500,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "A gentle beauty soap enriched with nourishing ingredients that cleanse the skin while maintaining moisture, leaving it soft, smooth, and refreshed.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/Geisha Soap.png"
  },
   {
    id: 6,
    name: "Deodorants (Various)",
    category: "Fragrance ",
    categoryLabel: "Fragrance ",
    price:  18000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "Refreshing body sprays designed to keep you feeling fresh and confident all day. Provides long-lasting fragrance and helps control body odor.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/Deodorants.png"
  },
  
  
  {
    id: 7,
    name: "VEET Gold Turmeric",
    category: "skincare ",
    categoryLabel: "skincare ",
    price:  26000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "Experience the perfect blend of beauty and skincare with Veet Gold Turmeric Body Care—a premium yet affordable solution designed for those who want silky-smooth skin without compromising on care.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/Tumeric.png"
  },
   {
    id: 8,
    name: "PAW PAW Papaya",
     category: "skincare",
    categoryLabel: "Skincare",
    price:  24000,
    oldPrice: 26000,
    badge: "new",
    emoji: "🌹",
    description: "Upgrade your daily shower routine with the refreshing power of Paw Paw Papaya Brightening Shower Gel—a perfect balance of gentle cleansing and skin nourishment at a price that fits your budget in Uganda.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/pawa pawa.png"
  },
    {
    id: 9,
    name: "WHITE SECRET Brightening",
    category: "skincare",
    categoryLabel: "Skincare",
    price:  40000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "Transform your skincare routine with the powerful results of White Secret Brightening & Exfoliating Body Care—a premium-feel solution designed to give you smoother, clearer, and more radiant skin at a reasonable mid-range price in Uganda.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/WHITE SECRET.png"
  },
   {
    id: 10,
    name: "COCOA BUTTER",
    category: "skincare",
    categoryLabel: "Skincare",
    price:  45000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "Unlock soft, glowing skin with American Dream Cocoa Butter Lemon Cream — a rich, deeply hydrating skin cream specially formulated to nourish, brighten, and protect your skin every day.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/COCO.png"
  },
    {
    id: 11,
    name: "Turmeric Super Whitening",
     category: "skincare",
    categoryLabel: "Skincare",
    price:  30000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "Elevate your daily shower routine with Turmeric Super Whitening Shower Cream, a luxurious blend designed to cleanse, brighten, and nourish your skin in one easy step. Infused with the natural goodness of turmeric, known for its skin-brightening and antioxidant properties, this shower cream helps reduce dullness while leaving your skin soft, smooth, and radiant.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/TRMERIC SUPER.png"
  },

   {
    id: 12,
    name: "Caro Light Brightening Cream",
     category: "skincare",
    categoryLabel: "Skincare",
    price:  45000,
    oldPrice: 50000,
    badge: "new",
    emoji: "🌹",
    description: " Reveal a brighter, smoother complexion with Caro Light Brightening Cream—a trusted skincare solution designed to hydrate, nourish, and improve skin tone for a naturally radiant look.Enriched with carrot oil (beta-carotene) and essential vitamins like A and E",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/caro light.png"
  },
  
  
  

  {
    id: 29,
    name: "Rose Glow Serum",
    category: "skincare",
    categoryLabel: "Skincare",
    price: 85000,
    oldPrice: null,
    badge: "new",
    emoji: "🌹",
    description: "A silky serum infused with Ugandan rose water and hyaluronic acid. Deeply hydrates, plumps fine lines, and leaves skin luminously dewy.",
    rating: 5,
    svgColor: "#f8c8dc",
    svgAccent: "#e88fa8",
    image: "media/1.png"
  },
  {
    id: 31,
    name: "Velvet Lip Rouge",
    category: "makeup",
    categoryLabel: "Makeup",
    price: 42000,
    oldPrice: 55000,
    badge: "sale",
    emoji: "💄",
    description: "Long-lasting matte lip color in 12 stunning shades. Enriched with shea butter for an all-day comfortable wear.",
    rating: 5,
    svgColor: "#c85f80",
    svgAccent: "#8b1a4a",
    image: "media/2.png"
  },
  {
    id: 32,
    name: "24K Gold Eye Palette",
    category: "makeup",
    categoryLabel: "Makeup",
    price: 128000,
    oldPrice: null,
    badge: "hot",
    emoji: "✨",
    description: "12 highly-pigmented eyeshadows ranging from nude satin to bold metallic. Gold-infused formula for luminous, all-day eye looks.",
    rating: 5,
    svgColor: "#d4af37",
    svgAccent: "#b8942f",
    image: "media/3.png"
  },
  {
    id: 33,
    name: "Nile Bloom Perfume",
    category: "fragrances",
    categoryLabel: "Fragrance",
    price: 165000,
    oldPrice: null,
    badge: "new",
    emoji: "🌸",
    description: "An intoxicating floral fragrance inspired by Uganda's lush gardens. Notes of jasmine, frangipani, and warm musk. Lasts 12+ hours.",
    rating: 4,
    svgColor: "#b8942f",
    svgAccent: "#8a6020",
    image: "media/4.png"
  },
  {
    id: 34,
    name: "Shea Butter Cream",
    category: "skincare",
    categoryLabel: "Skincare",
    price: 55000,
    oldPrice: 68000,
    badge: "sale",
    emoji: "🧴",
    description: "Rich body cream with raw Ugandan shea butter, coconut oil, and vitamin E. Transforms dry skin overnight for silky-smooth results.",
    rating: 5,
    svgColor: "#fffaf5",
    svgAccent: "#f5ede0",
    image: "media/5.png"
  },
  {
    id: 35,
    name: "Glow Foundation",
    category: "makeup",
    categoryLabel: "Makeup",
    price: 98000,
    oldPrice: null,
    badge: null,
    emoji: "🌟",
    description: "Buildable, skin-tint foundation in 20 inclusive shades. Lightweight formula with SPF 30 and a natural satin finish.",
    rating: 4,
    svgColor: "#f0d060",
    svgAccent: "#d4af37",
    image: "media/6.png"
  },
  {
    id: 36,
    name: "Lash Amplify Mascara",
    category: "makeup",
    categoryLabel: "Makeup",
    price: 48000,
    oldPrice: null,
    badge: "new",
    emoji: "👁️",
    description: "Volumizing mascara that lifts, lengthens, and defines every lash. Waterproof formula with biotin for lash nourishment.",
    rating: 5,
    svgColor: "#1a0a12",
    svgAccent: "#5c3a4a",
    image: "media/7.png"
  },
  {
    id: 37,
    name: "Turmeric Glow Mask",
    category: "skincare",
    categoryLabel: "Skincare",
    price: 72000,
    oldPrice: 88000,
    badge: "sale",
    emoji: "🌿",
    description: "A brightening face mask with Ugandan turmeric, kaolin clay, and wild honey. Reveals glowing, even-toned skin in 20 minutes.",
    rating: 5,
    svgColor: "#f0c030",
    svgAccent: "#d4a020",
    image: "media/8.png"
  },
];

/* ─────────────────────────────────────────────
   TESTIMONIALS — avatar images replace emojis
   Uses ui-avatars.com: reliable, free, no auth needed
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Amara Nakato",
    location: "Kampala, Uganda",
    avatarUrl: "https://ui-avatars.com/api/?name=Amara+Nakato&background=f8c8dc&color=8b1a4a&size=100&bold=true&rounded=true",
    quote: "The Rose Glow Serum completely transformed my skin! Within a week my complexion was brighter and so hydrated. Sandra Luxe is genuinely magical.",
    stars: 4,
  },
  {
    name: "Zara Achieng",
    location: "Entebbe, Uganda",
    avatarUrl: "https://ui-avatars.com/api/?name=Zara+Achieng&background=e88fa8&color=ffffff&size=100&bold=true&rounded=true",
    quote: "I finally found a foundation that matches my beautiful dark skin tone. The Glow Foundation is everything! Plus the packaging is absolutely stunning.",
    stars: 3,
  },
  {
    name: "Blessing Namutebi",
    location: "Jinja, Uganda",
    avatarUrl: "https://ui-avatars.com/api/?name=Blessing+Namutebi&background=d4af37&color=ffffff&size=100&bold=true&rounded=true",
    quote: "Nile Bloom is my signature scent now. Every single time I wear it, I get so many compliments. It's feminine, long-lasting, and absolutely divine.",
    stars: 5,
  },
  {
    name: "Grace Nalubega",
    location: "Gulu, Uganda",
    avatarUrl: "https://ui-avatars.com/api/?name=Grace+Nalubega&background=c85f80&color=ffffff&size=100&bold=true&rounded=true",
    quote: "The Shea Butter Cream saved my skin during the dry season. And knowing it's made with local Ugandan shea butter makes me feel so proud. Love this brand!",
    stars: 4,
  },
  {
    name: "Sharon Tendo",
    location: "Mbarara, Uganda",
    avatarUrl: "https://ui-avatars.com/api/?name=Sharon+Tendo&background=b8942f&color=ffffff&size=100&bold=true&rounded=true",
    quote: "The 24K Gold Palette is breathtaking. The pigments are rich, the fallout is minimal, and the packaging is so luxurious. Worth every shilling!",
    stars: 5,
  },
];

/* ─────────────────────────────────────────────
   CART STATE
───────────────────────────────────────────── */
let cart = JSON.parse(localStorage.getItem('sandra_cart') || '[]');

function saveCart() {
  localStorage.setItem('sandra_cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((total, item) => total + item.price * item.qty, 0);
}

function formatPrice(ugx) {
  return 'UGX ' + ugx.toLocaleString('en-UG');
}

/* ─────────────────────────────────────────────
   DOM HELPERS
───────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ─────────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────────── */
const themeToggle = $('#themeToggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('sandra_theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('sandra_theme', next);
});

/* ─────────────────────────────────────────────
   NAVBAR — SCROLL & ACTIVE LINKS
───────────────────────────────────────────── */
const navbar = $('#navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNavLink();
}, { passive: true });

function updateActiveNavLink() {
  const sections = $$('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  $$('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}

/* ─────────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────────── */
const hamburger   = $('#hamburger');
const mobileMenu  = $('#mobileMenu');
const mobileClose = $('#mobileClose');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  hamburger.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);
$$('.mobile-link').forEach(link => link.addEventListener('click', closeMobileMenu));

/* ─────────────────────────────────────────────
   SMOOTH SCROLLING
───────────────────────────────────────────── */
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;
  const target = document.querySelector(anchor.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
});

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function initReveal() {
  $$('.reveal').forEach(el => revealObserver.observe(el));
}

/* ─────────────────────────────────────────────
   PRODUCT GRID
───────────────────────────────────────────── */
function buildProductCard(product, index) {
  const badge = product.badge
    ? `<span class="card-badge badge-${product.badge}">${product.badge === 'new' ? 'New' : product.badge === 'hot' ? '🔥 Hot' : 'Sale'}</span>`
    : '';

  const oldPrice = product.oldPrice
    ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
    : '';

  return `
    <div class="product-card" 
         data-id="${product.id}" 
         data-category="${product.category}"
         style="transition-delay: ${index * 0.06}s">
      ${badge}
      <div class="card-img">
        <img src="${product.image || 'media/default.png'}" alt="${product.name}" class="product-image"/>
        <div class="card-img-overlay"></div>
      </div>
      <div class="card-body">
        <p class="card-category">${product.categoryLabel}</p>
        <h3 class="card-name">${product.name}</h3>
        <p class="card-desc">${product.description.slice(0, 70)}…</p>
        <div class="card-footer">
          <div class="card-price">
            ${formatPrice(product.price)}
            ${oldPrice}
          </div>
          <button class="card-add" data-id="${product.id}" aria-label="Add ${product.name} to cart" title="Add to cart">+</button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(filter = 'all') {
  const grid = $('#productGrid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = filtered.map((p, i) => buildProductCard(p, i)).join('');

  $$('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-add')) return;
      openProductModal(parseInt(card.dataset.id));
    });
  });

  $$('.card-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id));
    });
  });

  setTimeout(() => {
    $$('.product-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('card-visible'), i * 60);
    });
  }, 50);
}

$$('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

/* ─────────────────────────────────────────────
   PRODUCT MODAL
───────────────────────────────────────────── */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalGallery = document.getElementById('modalGallery');
const modalInfo    = document.getElementById('modalInfo');

function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  modalGallery.innerHTML = `
    <img 
      src="${product.image}" 
      alt="${product.name}"
      class="modal-product-img"
      onerror="this.onerror=null; this.style.display='none';"
    />
  `;

  const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
  const oldPrice = product.oldPrice
    ? `<span style="font-size:1rem; color:var(--fg-muted); text-decoration:line-through; margin-left:0.5em;">${formatPrice(product.oldPrice)}</span>`
    : '';

  modalInfo.innerHTML = `
    <p class="modal-category">${product.categoryLabel}</p>
    <h2 class="modal-name">${product.name}</h2>
    <div class="modal-rating">${stars}</div>
    <p class="modal-price">${formatPrice(product.price)} ${oldPrice}</p>
    <p class="modal-desc">${product.description}</p>
    <div class="modal-ctas">
      <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal();">Add to Bag</button>
      <button class="btn btn-ghost" onclick="closeProductModal()">Continue Browsing</button>
    </div>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProductModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeProductModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProductModal(); });

/* ─────────────────────────────────────────────
   CART FUNCTIONALITY
───────────────────────────────────────────── */
const cartBtn      = $('#cartBtn');
const cartPanel    = $('#cartPanel');
const cartOverlay  = $('#cartOverlay');
const cartClose    = $('#cartClose');
const cartItems    = $('#cartItems');
const cartEmpty    = $('#cartEmpty');
const cartFooter   = $('#cartFooter');
const cartCount    = $('#cartCount');
const cartBadge    = $('#cartBadge');
const cartTotal    = $('#cartTotal');
const cartShopLink = $('#cartShopLink');

function openCart() {
  cartPanel.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}
function closeCart() {
  cartPanel.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
cartShopLink && cartShopLink.addEventListener('click', closeCart);

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = total;
  cartBadge.textContent = total;
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth;
  cartCount.classList.add('bump');
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  }
  saveCart();
  updateCartCount();
  renderCartItems();
  showToast(`${product.emoji} ${product.name} added to bag!`);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartCount();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartCount(); renderCartItems(); }
}

function renderCartItems() {
  $$('.cart-item').forEach(el => el.remove());

  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
    cartTotal.textContent = formatPrice(0);
    return;
  }

  cartEmpty.style.display = 'none';
  cartFooter.style.display = 'block';

  cart.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="cart-item-img"><img src="${PRODUCTS.find(p => p.id === item.id)?.image}" alt="${item.name}" 
      style="width:100%; height:100%; object-fit:cover; border-radius:var(--r-sm);" onerror="this.onerror=null; this.parentElement.textContent='${item.emoji}';" /></div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, +1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">✕</button>
    `;
    cartItems.appendChild(el);
  });

  cartTotal.textContent = formatPrice(getCartTotal());
}

function checkout() {
  const WHATSAPP_NUMBER = '+256754760954'; // ← owner: replace with real number (digits only)

  const lines = cart.map(item =>
    `• ${item.name} (${item.qty}x) — ${formatPrice(item.price * item.qty)}`
  ).join('\n');

  const total = formatPrice(getCartTotal());

  const message =
    `Hello Sandra Luxe! 🌸\n\nI'd like to place an order:\n\n${lines}\n\n*Total: ${total}*\n\nPlease confirm my order. Thank you!`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  showToast('🌸 Opening WhatsApp…');
  setTimeout(() => {
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    cart = [];
    saveCart();
    updateCartCount();
    renderCartItems();
    closeCart();
  }, 600);
}

/* ─────────────────────────────────────────────
   TOAST
───────────────────────────────────────────── */
const toast = $('#toast');
let toastTimer = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ─────────────────────────────────────────────
   TESTIMONIALS SLIDER
   — Uses avatarUrl image instead of emoji
───────────────────────────────────────────── */
const testimonialTrack = $('#testimonialTrack');
const sliderPrev       = $('#sliderPrev');
const sliderNext       = $('#sliderNext');
const sliderDots       = $('#sliderDots');

let currentSlide = 0;
let slideTimer   = null;
let isSliding    = false;

function buildTestimonials() {
  testimonialTrack.innerHTML = TESTIMONIALS.map(t => `
    <div class="testimonial-card">
      <div class="testi-stars">${'★'.repeat(t.stars)}</div>
      <p class="testi-quote">${t.quote}</p>
      <div class="testi-author">
        <div class="testi-avatar testi-avatar--img">
          <img
            src="${t.avatarUrl}"
            alt="${t.name}"
            width="56"
            height="56"
            onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<span class=\\'avatar-initial\\'>${t.name.charAt(0)}</span>';"
          />
        </div>
        <strong class="testi-name">${t.name}</strong>
        <span class="testi-loc">${t.location}</span>
      </div>
    </div>
  `).join('');

  sliderDots.innerHTML = TESTIMONIALS.map((_, i) =>
    `<button class="dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
  ).join('');

  $$('.dot', sliderDots).forEach(dot => {
    dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
  });
}

function goToSlide(index) {
  if (isSliding) return;
  isSliding = true;
  currentSlide = (index + TESTIMONIALS.length) % TESTIMONIALS.length;
  testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  $$('.dot', sliderDots).forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
  setTimeout(() => { isSliding = false; }, 620);
  resetSlideTimer();
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

sliderNext.addEventListener('click', nextSlide);
sliderPrev.addEventListener('click', prevSlide);

let touchStartX = 0;
testimonialTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
testimonialTrack.addEventListener('touchend', e => {
  const delta = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(delta) > 50) delta > 0 ? nextSlide() : prevSlide();
});

function startSlideTimer() { slideTimer = setInterval(nextSlide, 5000); }
function resetSlideTimer() { clearInterval(slideTimer); startSlideTimer(); }

/* ─────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────── */
const contactForm = $('#contactForm');
const formSuccess = $('#formSuccess');

function validateField(input, errorEl, validator) {
  const error = validator(input.value.trim());
  errorEl.textContent = error || '';
  input.classList.toggle('error', !!error);
  return !error;
}

const validators = {
  fname:   v => !v ? 'First name is required.' : v.length < 2 ? 'Too short.' : null,
  lname:   v => !v ? 'Last name is required.'  : v.length < 2 ? 'Too short.' : null,
  email:   v => !v ? 'Email is required.' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email.' : null,
  subject: v => !v ? 'Subject is required.' : v.length < 3 ? 'Too short.' : null,
  message: v => !v ? 'Message is required.' : v.length < 10 ? 'Message is too short.' : null,
};

Object.keys(validators).forEach(name => {
  const input = contactForm.elements[name];
  const errorEl = $(`#${name}Error`);
  if (!input || !errorEl) return;
  input.addEventListener('blur', () => validateField(input, errorEl, validators[name]));
  input.addEventListener('input', () => {
    if (input.classList.contains('error')) validateField(input, errorEl, validators[name]);
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  Object.keys(validators).forEach(name => {
    const input = contactForm.elements[name];
    const errorEl = $(`#${name}Error`);
    if (!input || !errorEl) return;
    if (!validateField(input, errorEl, validators[name])) valid = false;
  });
  if (valid) {
    formSuccess.classList.add('show');
    contactForm.reset();
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
    showToast('💌 Message sent! We\'ll reply soon.');
  }
});

/* ─────────────────────────────────────────────
   NEWSLETTER
───────────────────────────────────────────── */
function subscribeNewsletter() {
  const input = $('#newsletterEmail');
  const msg   = $('#newsletterMsg');
  const email = input.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = '⚠️ Enter a valid email.';
    msg.style.color = '#e05c5c';
    return;
  }
  msg.textContent = '🌸 You\'re on the list!';
  msg.style.color = 'var(--gold)';
  input.value = '';
  setTimeout(() => { msg.textContent = ''; }, 4000);
}

/* ─────────────────────────────────────────────
   PARALLAX
───────────────────────────────────────────── */
function initParallax() {
  const blobs = $$('.hero-blob');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    blobs.forEach((blob, i) => {
      const speed = [0.12, 0.08, 0.15][i] || 0.1;
      blob.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

/* ─────────────────────────────────────────────
   CARD STAGGER
───────────────────────────────────────────── */
function initCardStagger() {
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('.product-card', entry.target).forEach((card, i) => {
          setTimeout(() => card.classList.add('card-visible'), i * 70);
        });
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  const grid = $('#productGrid');
  if (grid) cardObserver.observe(grid);
}

/* ─────────────────────────────────────────────
   BUTTON RIPPLE
───────────────────────────────────────────── */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-primary');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  const size = Math.max(rect.width, rect.height) * 2;
  ripple.style.cssText = `position:absolute;width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px;background:rgba(255,255,255,0.25);border-radius:50%;pointer-events:none;transform:scale(0);animation:rippleAnim 0.55s ease-out forwards;`;
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 560);
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes rippleAnim { to { transform: scale(1); opacity: 0; } }`;
document.head.appendChild(rippleStyle);

/* ─────────────────────────────────────────────
   MAGNETIC BUTTONS
───────────────────────────────────────────── */
function initMagneticBtns() {
  $$('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.14}px) scale(1.03)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });
}

/* ─────────────────────────────────────────────
   CURSOR SPARKLE (desktop only)
───────────────────────────────────────────── */
function initCursorSparkle() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const sparkleColors = ['#f8c8dc', '#d4af37', '#c85f80', '#f0d060'];
  let sparkleTimer = 0;
  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - sparkleTimer < 80) return;
    sparkleTimer = now;
    const s = document.createElement('div');
    const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    const size = 6 + Math.random() * 8;
    s.style.cssText = `position:fixed;left:${e.clientX - size/2}px;top:${e.clientY - size/2}px;width:${size}px;height:${size}px;border-radius:50%;background:${color};pointer-events:none;z-index:9999;opacity:0.85;transform:scale(0);animation:sparklePop 0.65s ease-out forwards;`;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 660);
  });
  const sk = document.createElement('style');
  sk.textContent = `@keyframes sparklePop{0%{transform:scale(0) rotate(0deg);opacity:.9}40%{transform:scale(1) rotate(60deg);opacity:.7}100%{transform:scale(.2) rotate(120deg);opacity:0}}`;
  document.head.appendChild(sk);
}

/* ─────────────────────────────────────────────
   COUNT-UP ANIMATION
───────────────────────────────────────────── */
function initCountUp() {
  const stats = $$('.stat strong');
  const targets = ['12000', '80', '100'];
  const labels  = ['12K+', '80+', '100%'];

  const countObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetNum = parseInt(targets[i]);
        const label = labels[i];
        const duration = 1800;
        const startTime = performance.now();
        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = Math.round(eased * targetNum);
          if (i === 0) el.textContent = val >= 1000 ? Math.round(val/1000) + 'K+' : val + '+';
          else if (i === 1) el.textContent = val + '+';
          else el.textContent = val + '%';
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = label;
        }
        requestAnimationFrame(update);
        countObserver.unobserve(el);
      }
    });
  }, { threshold: 1 });

  stats.forEach(stat => countObserver.observe(stat));
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  buildTestimonials();
  startSlideTimer();
  updateCartCount();
  renderCartItems();
  initReveal();
  initParallax();
  initCardStagger();
  initMagneticBtns();
  initCursorSparkle();
  initCountUp();
  updateActiveNavLink();

  console.log('%c Sandra Luxe — Built with ♥ in Uganda',
    'font-size:14px; color:#d4af37; background:#1a0a12; padding:8px 16px; border-radius:20px;');
});
