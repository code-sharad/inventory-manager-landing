# FormFlow Inventory Manager - Landing Page Content & Design System

## 🎨 Color Palette

### Primary Colors
| Color Name | Light Mode | Dark Mode | Usage |
|------------|------------|-----------|-------|
| **Primary** | `hsl(0, 85%, 43%)` - Deep Red | `hsl(207, 90%, 54%)` - Vibrant Blue | CTAs, buttons, links |
| **Primary Foreground** | `hsl(211, 100%, 99%)` | `hsl(211, 100%, 99%)` | Text on primary backgrounds |

### Background Colors
| Color Name | Light Mode | Dark Mode | Usage |
|------------|------------|-----------|-------|
| **Background** | `hsl(0, 0%, 100%)` - Pure White | `hsl(220, 17%, 17%)` - Dark Slate | Page backgrounds |
| **Card** | `hsl(0, 0%, 100%)` | `hsl(220, 17%, 17%)` | Card components |
| **Muted** | `hsl(60, 4.8%, 95.9%)` | `hsl(220, 10%, 22%)` | Secondary backgrounds |

### Accent Colors
| Color Name | Hex Value | Usage |
|------------|-----------|-------|
| **Gradient Gold** | `#ffae00` | Gradient accent, borders |
| **Gradient Purple** | `#7e03aa` | Gradient accent, borders |
| **Gradient Cyan** | `#00fffb` | Gradient accent, borders |

### Wave Animation Colors (Login Background)
| Wave | Color | Animation |
|------|-------|-----------|
| Wave 1 | `#fcea04` (Yellow) | 20s rotation |
| Wave 2 | `#ff006a` (Pink) | 25s reverse |
| Wave 3 | `#c400ff` (Purple) | 22s rotation |
| Wave 4 | `#00e6ff` (Cyan) | 18s reverse |

---

## 🎯 UI Components & Styles

### Button Styles

#### Gradient Border Button (Primary CTA)
```css
.btn-gradient-border {
  --border-color: linear-gradient(-45deg, #ffae00, #7e03aa, #00fffb);
  --bg: #000000;
  --color: #ffffff;
  border-radius: 0.375rem;
  padding: 0.5em 1.5em;
  font-weight: normal;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
}
```

#### Black Hover Button (Secondary CTA)
- Background: `#1f1f1f`
- Text: White
- Hover: Animated gradient glow effect

### Card Styles
- Dark background: `#000000`
- Gradient border animation: 5s ease infinite
- Border radius: `0.5rem`

---

## 📝 Landing Page Content

### Hero Section

**Headline:**
> **Transform Your Inventory Management**

**Subheadline:**
> The all-in-one platform for tracking, organizing, and optimizing your inventory with powerful features and intuitive design.

**CTA Buttons:**
- Primary: "Get Started Free"
- Secondary: "View Demo"

---

### Features Section

#### Feature 1: Smart Inventory Tracking
**Icon:** 📦
**Title:** Smart Inventory Tracking
**Description:** Real-time tracking of all your items with instant updates. Never lose track of your assets again with our powerful search and filtering capabilities.

#### Feature 2: QR Code Labels
**Icon:** 📱
**Title:** QR Code Labels
**Description:** Generate and print custom QR code labels for every item. Scan with any device to instantly access item details, history, and more.

#### Feature 3: Location Management
**Icon:** 📍
**Title:** Location Management
**Description:** Organize items by locations with hierarchical structure. Easily move items between locations and track their journey.

#### Feature 4: Team Collaboration
**Icon:** 👥
**Title:** Team Collaboration
**Description:** Invite team members with role-based permissions. Control who can view, edit, or manage your inventory securely.

#### Feature 5: Activity Logs
**Icon:** 📊
**Title:** Activity Logs & Reports
**Description:** Complete audit trail of all inventory changes. Generate detailed reports and analytics to optimize your operations.

#### Feature 6: Custom Fields
**Icon:** ⚙️
**Title:** Custom Fields
**Description:** Extend your inventory with custom fields tailored to your needs. Track any data that matters to your business.

---

### Stats Section

| Stat | Value | Label |
|------|-------|-------|
| Items Tracked | 10,000+ | Active items managed |
| Uptime | 99.9% | System reliability |
| Users | 500+ | Active users |
| Locations | 1,000+ | Managed locations |

---

### Testimonials Section

**Testimonial 1:**
> "FormFlow Inventory has completely transformed how we manage our equipment. The QR code feature alone has saved us countless hours."
>
> — **John Smith**, Operations Manager @ TechCorp

**Testimonial 2:**
> "Finally, an inventory system that's both powerful and easy to use. The custom fields feature lets us track everything we need."
>
> — **Sarah Johnson**, Warehouse Director @ LogiFlow

---

### Pricing Section

#### Free Plan
- **Price:** $0/month
- **Features:**
  - Up to 100 items
  - 1 user
  - Basic reporting
  - QR code generation

#### Pro Plan
- **Price:** $29/month
- **Features:**
  - Unlimited items
  - Up to 10 users
  - Advanced analytics
  - Priority support
  - Custom fields

#### Enterprise Plan
- **Price:** Custom pricing
- **Features:**
  - Everything in Pro
  - Unlimited users
  - API access
  - Dedicated support
  - Custom integrations

---

### Footer Content

**Company Links:**
- About Us
- Careers
- Blog
- Contact

**Product Links:**
- Features
- Pricing
- Security
- Documentation

**Legal Links:**
- Privacy Policy
- Terms of Service
- Cookie Policy

**Social Links:**
- Twitter
- LinkedIn
- GitHub

**Copyright:**
> © 2024 FormFlow Inventory. All rights reserved.

---

## 🎨 Typography

### Fonts
- **Primary Font:** System UI / Sans-serif stack
- **Code Font:** Monospace

### Font Sizes
| Element | Size | Weight |
|---------|------|--------|
| H1 (Hero) | 3rem+ | 700 (Bold) |
| H2 (Section) | 2rem | 600 (Semibold) |
| H3 (Feature) | 1.5rem | 600 |
| Body | 1rem | 400 |
| Small | 0.875rem | 400 |

---

## ⚡ Animations

### Gradient Animation
```css
@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Wave Rotation (Hero Background)
```css
@keyframes wave-rotate {
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| sm | 640px | Mobile |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large Desktop |
| 2xl | 1536px | Extra Large |

---

## 🔗 Navigation

### Navbar Items
1. **Features** → #features
2. **Pricing** → #pricing
3. **About** → #about
4. **Contact** → #contact
5. **Login** → /login (links to main app)
6. **Get Started** → /login (CTA button)

---

## 🌙 Theme Support

The application supports both **Light** and **Dark** modes with CSS variables:

```css
:root {
  /* Light mode defaults */
  --background: 0 0% 100%;
  --foreground: 20 14.3% 4.1%;
  /* ... */
}

.dark {
  /* Dark mode overrides */
  --background: 220 17% 17%;
  --foreground: 0 0% 98%;
  /* ... */
}
```
