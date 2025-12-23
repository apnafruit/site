# Apna Fruit Box - Premium Design System

## Overview
Modern, premium e-commerce website for fresh fruit boxes and natural juices using a white-first interface with green and yellow accents. The design feels clean, organic, calm, and trustworthy.

---

## 🎨 Color Palette

### Brand Greens (Trust & Freshness)
- **Primary Green (Brand Anchor)**: `#1A8F4E` (`brand-primary`)
  - Used sparingly for authority and trust
  - Navigation links, product titles, headings
  
- **Soft Green (UI Accent)**: `#34C759` (`brand-soft`)
  - Friendly, fresh, inviting
  - Icon highlights, benefit badges
  
- **Deep Green (Footer / Emphasis)**: `#0F3D2E` (`brand-deep`)
  - Grounding, premium, calm
  - Footer background, text on footer

### Fresh Yellow (Energy & Highlight)
- **Fruit Yellow (Accent / CTA)**: `#F5C518` (`fruit-yellow`)
  - Warm, joyful, appetizing
  - Primary CTA "Add to Cart" button
  - Hover states, active elements

- **Soft Yellow Tint**: `#FFF6D8` (`yellow-soft`)
  - Subtle warmth without overpowering white
  - CTA section backgrounds

### Neutrals (Breathing Space)
- **Pure White**: `#FFFFFF` (`pure-white`)
  - Primary background throughout
  
- **Off-White**: `#FAFAF7` (`off-white`)
  - Card backgrounds, section dividers
  
- **Text Gray**: `#4A4A4A` (`text-gray`)
  - Body copy, secondary text
  
- **Card Hover**: `#E6F4EA` (`card-hover`)
  - Hover states, borders, dividers

### Special Colors
- **Link Light**: `#DFF5E8` (`link-light`)
  - Footer links, light text on dark
  
- **WhatsApp Green**: `#25D366` (`whatsapp-green`)
  - WhatsApp button brand color
  
- **Green Dark**: `#157A42` (`green-dark`)
  - Hover state for primary green buttons
  
- **Yellow Dark**: `#E0B400` (`yellow-dark`)
  - Hover state for yellow buttons

---

## 🧭 Color Usage by Component

### Header
- **Background**: Pure White
- **Logo**: Full-color brand logo
- **Nav Links**: Primary Green (#1A8F4E)
- **Active State**: Yellow underline (#F5C518)
- **Border**: Light card-hover (#E6F4EA)

### Footer
- **Background**: Deep Green (#0F3D2E)
- **Text**: White
- **Links**: Link Light (#DFF5E8) - hover to Yellow (#F5C518)
- **Dividers**: Primary Green (#1A8F4E)
- **Icons**: Yellow on hover

### Product Cards
- **Background**: Pure White
- **Border**: Card Hover (#E6F4EA) on hover
- **Title**: Primary Green (#1A8F4E)
- **Price**: Deep Green (#0F3D2E)
- **Description**: Text Gray (#4A4A4A)
- **Benefits badges**: Card Hover background, Primary Green text

### Buttons

#### Primary CTA (Buy Now)
- **Background**: Primary Green (#1A8F4E)
- **Text**: White
- **Hover**: Darker Green (#157A42)
- **Focus Ring**: Soft Green glow

#### Secondary CTA (Add to Cart)
- **Background**: Fruit Yellow (#F5C518)
- **Text**: Deep Green (#0F3D2E)
- **Hover**: Darker Yellow (#E0B400)
- **Border Radius**: Pill-shaped (rounded-full)
- **Glow**: Gold shadow on hover

### WhatsApp Button
- **Background**: WhatsApp Green (#25D366)
- **Icon**: White
- **Hover**: Darker WhatsApp Green (#1EBE5D)
- **Shadow**: Soft green glow

### CTA Sections

#### Green CTA (Primary)
- **Background**: Primary Green (#1A8F4E)
- **Text**: White
- **Button**: Fruit Yellow (#F5C518)
- **Button Text**: Deep Green (#0F3D2E)

#### Yellow CTA (Subtle)
- **Background**: Soft Yellow (#FFF6D8)
- **Heading**: Primary Green (#1A8F4E)
- **Button**: Primary Green (#1A8F4E)

### Hero Section
- **Background**: White to Off-White gradient (#FFFFFF → #FAFAF7)
- **Text**: Deep Green (#0F3D2E)
- **Accent Line / Badge**: Yellow (#F5C518)
- **Image Overlay**: White or Green at 20-40% opacity

---

## 🎯 Tailwind Classes Reference

### Background Colors
```
bg-pure-white       // #FFFFFF - Primary background
bg-off-white        // #FAFAF7 - Card backgrounds
bg-brand-primary    // #1A8F4E - Green sections
bg-brand-deep       // #0F3D2E - Dark backgrounds
bg-yellow-soft      // #FFF6D8 - Yellow highlights
bg-card-hover       // #E6F4EA - Hover states
```

### Text Colors
```
text-brand-primary  // #1A8F4E - Headings, primary text
text-brand-soft     // #34C759 - Secondary text, highlights
text-brand-deep     // #0F3D2E - Emphasis, price
text-text-gray      // #4A4A4A - Body copy
text-link-light     // #DFF5E8 - Footer links
text-fruit-yellow   // #F5C518 - Highlight text
```

### Border Colors
```
border-card-hover   // #E6F4EA - Dividers, borders
border-brand-primary // #1A8F4E - Strong borders
border-fruit-yellow // #F5C518 - CTA borders
```

### Shadow Classes
```
shadow-premium      // 0 4px 20px rgba(0, 0, 0, 0.08)
shadow-premium-lg   // 0 8px 30px rgba(0, 0, 0, 0.12)
shadow-green-glow   // 0 0 20px rgba(26, 143, 78, 0.3)
shadow-gold-glow    // 0 0 20px rgba(245, 197, 24, 0.3)
```

### Button Classes
```
btn-primary         // Green button with white text
btn-secondary       // Yellow button with green text
btn-gold            // Yellow button (legacy)
```

---

## 🧘 Motion & Interaction

### Hover Effects
- **Green buttons**: Darken to #157A42
- **Yellow buttons**: Darken to #E0B400
- **Cards**: Subtle scale (1.02) and shadow increase
- **Links**: Color transition to fruit yellow

### Active States
- **Navigation**: Yellow underline (#F5C518)
- **Cart badges**: Yellow background with pulse animation
- **Buttons**: Slight scale increase

### Focus States
- **Green glow** on primary buttons
- **Ring outline** for keyboard navigation
- **Smooth transitions** (200-300ms)

### Animations
- `fade-in-up`: Elements slide up and fade in
- `pulse-glow`: Cart badge pulses with green glow
- `float`: Logo floats gently
- `slide-up`: Staggered animations on scroll

---

## 🚫 Design Constraints

### Avoid
- ❌ Dark backgrounds outside footer & CTA sections
- ❌ Neon green or overly bright yellow
- ❌ Yellow for body text
- ❌ More than 2 accent colors per section
- ❌ Aggressive animations or transitions

### Do
- ✅ Use plenty of white space
- ✅ Keep text hierarchy clean and clear
- ✅ Make CTAs obvious with color contrast
- ✅ Maintain consistent spacing and sizing
- ✅ Use smooth, organic transitions

---

## 📱 Responsive Design

All colors and components maintain consistency across:
- Mobile (320px)
- Tablet (768px)
- Desktop (1024px+)

No color changes based on screen size - only typography and spacing scale.

---

## 🎁 Brand Feeling

**Clean** like white space, **fresh** like fruit, **confident** like green, **joyful** like yellow.

Every color choice serves a purpose:
- Green builds trust and suggests freshness
- Yellow draws attention to actions
- White gives the design room to breathe
- The palette is warm, inviting, and organic

---

## Implementation Files

### Tailwind Config
- `tailwind.config.js` - Color definitions and tokens

### CSS
- `src/index.css` - Button styles, animations, utilities

### Components
- `src/components/Header.tsx` - Navigation with brand colors
- `src/components/Footer.tsx` - Deep green footer
- `src/components/ProductCard.tsx` - Product showcase
- `src/components/WhatsAppButton.tsx` - WhatsApp CTA

### Pages
- `src/pages/HomePage.tsx` - Hero and CTA sections
- `src/pages/AboutPage.tsx` - Values showcase
- `src/pages/ContactPage.tsx` - Contact with WhatsApp
- `src/pages/CartPage.tsx` - Shopping cart
- `src/pages/PoliciesPage.tsx` - Legal pages

---

## Version
Design System v1.0 - December 2025
Premium Fresh Fruit & Juice Brand
