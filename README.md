# Pita Bowl — San Diego Restaurant Website

Full redesign and redevelopment of the Pita Bowl restaurant website. Built to drive online orders via Toast, with a conversion-focused UX inspired by CAVA and Sweetgreen.

## Design System

**Premium, modern, sleek aesthetic:**
- Sophisticated Mediterranean color palette with warm terracotta primary (#C85A3C) and refined neutrals
- Generous whitespace and generous border-radius for modern feel
- Layered shadows with subtle depth (shadow-md, shadow-xl)
- Typography: Inter with enhanced leading and tracking for premium readability
- Smooth transitions and micro-interactions (scale on hover, fade-in animations)
- Gradient accents on key sections (hero, page headers)
- Backdrop blur effects for sticky elements (header, mobile bar, category nav)

## Stack

- **Next.js 14+** (App Router) + TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui**-style components (Radix primitives + CVA + Tailwind)
- **Framer Motion** for light animations
- **next/image** for all images
- SEO: metadata, OpenGraph, JSON-LD LocalBusiness/Restaurant schema

## Setup

```bash
cd pita-bowl
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
npm start
```

Vercel-ready: connect the repo and deploy.

**If port 3000 is already in use** (e.g. another dev server or previous `npm start`), free it first:
```bash
lsof -ti:3000 | xargs kill
```
Then run `npm start` again.

## Project structure

- `src/app/` — App Router pages and API routes
- `src/components/` — Reusable UI (Header, Footer, OrderButton, Badge, Section, MenuCategoryNav, MenuItemCard, PromoStrip, TestimonialCard, FAQ, MobileOrderBar)
- `src/config/links.ts` — Single source of truth for ORDER_ONLINE_URL and all site links
- `src/data/menu.ts` — Typed menu data (Bowls & wraps, Sides, Sauces, Drinks)
- `src/lib/utils.ts` — `cn()` and helpers

## Routes

| Route       | Description                    |
|------------|--------------------------------|
| `/`        | Home (hero, value props, categories, how it works, promo, social proof, location teaser) |
| `/menu`    | Menu with category nav and item cards |
| `/catering`| Catering hero + inquiry form + “Order individual meals” CTA |
| `/location`| Address, hours, map placeholder, Order Online CTA |
| `/about`   | Brand story, seed oil free, fresh daily, FAQ |
| `/offers`  | FIT 15% off + seasonal promo placeholders |
| `/contact` | Contact form + email/phone placeholders |
| `/privacy` | Privacy policy placeholder |
| `/terms`   | Terms of use placeholder |

## Order Online CTA

All “Order Online” buttons use the Toast link from `src/config/links.ts` and open in a new tab with `target="_blank" rel="noopener noreferrer"`. Data attributes: `data-cta="order-online"` and `data-location="header|hero|footer|menu-top|menu-bottom|mobile-sticky|offers|catering"` for tracking.

A sticky mobile bottom bar shows “Order Online” on viewports below `lg`.

## API routes

- `POST /api/catering` — Catering form submission (logs to console; wire to email later)
- `POST /api/contact` — Contact form submission (logs to console; wire to email later)

## Customization

- **Links:** Edit `src/config/links.ts` (ORDER_ONLINE_URL, etc.).
- **Menu:** Edit `src/data/menu.ts` (categories and items). Menu was sourced from the Toast ordering PDF; to re-extract text from a new PDF, run from project root: `python3 extract_menu_from_pdf.py` (requires `pip install pypdf`).
- **Brand/SEO:** Update `metadata` and JSON-LD in `src/app/layout.tsx` and `src/components/JsonLdRestaurant.tsx`.
- **Address/hours:** Update Footer, Location page, and JSON-LD when real data is available.
