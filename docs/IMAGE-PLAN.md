# Pita Bowl — Image Plan

## 1. Codebase inspection summary

### Where images are used today

| Location | Current content | Purpose |
|----------|-----------------|--------|
| **`src/components/HeroSection.tsx`** | Unsplash URL: Mediterranean bowl (salad-like) | Homepage hero image |
| **`src/app/page.tsx`** | Unsplash URL: beach/coastal (map placeholder) | Homepage “Visit Us” section |
| **`src/components/JsonLdRestaurant.tsx`** | `https://pitabowlsd.com/og-image.jpg` | SEO/schema (file does not exist in repo) |
| **`src/components/MenuItemCard.tsx`** | No image | Menu item cards are text-only (name, description, price, tags) |
| **`src/app/location/page.tsx`** | Imports `Image` but only uses Google Maps iframe | No static image used |

### Menu structure

- **Data:** `src/data/menu.ts`
- **Types:** `MenuItem` has `id`, `name`, `description`, `tags`, `price?`, `categoryId` — **no `image` field yet**.
- **Categories and item counts:**

| Category ID   | Name                    | # Items |
|---------------|-------------------------|--------|
| featured      | Featured Items          | 3      |
| appetizers    | Appetizers              | 5      |
| wraps         | Wraps                   | 5      |
| bowls         | Bowls                   | 4      |
| extras        | Build Your Own Extras   | 9      |
| kids          | Kids Meal              | 1      |
| desserts      | Dessert — Sweet Treats  | 10     |
| drinks        | Drinks                  | 20     |
| **Total**     |                         | **57** |

### Static assets

- **`public/`** folder does **not** exist. Next.js serves files from `public/` at the site root (e.g. `public/hero.jpg` → `/hero.jpg`).
- **`next.config.js`** allows remote images from `images.unsplash.com` and `*.google.com` only. Local images in `public/` work by default.

---

## 2. Requirements (from you)

1. **Hero:** One new hero image — must be a **pita bowl menu item** (e.g. signature bowl or wrap).
2. **Menu:** One picture per menu item — **57 images** (one per item in `menu.ts`).
3. **Inspect code and put a plan together first** — this document is that plan.

---

## 3. Plan

### Phase 1 — Repo and data setup

1. **Create `public/` and subfolders**
   - `public/images/` — all generated/curated images.
   - Optional: `public/images/hero/`, `public/images/menu/` for clarity.

2. **Extend menu data**
   - In `src/data/menu.ts`:
     - Add optional `image?: string` to `MenuItem` (path under `public/`, e.g. `/images/menu/chicken-pita-bowl.jpg`).
   - Populate `image` for each of the 57 items (after images exist), or leave empty and use a fallback in the UI.

3. **Update `MenuItemCard`**
   - In `src/components/MenuItemCard.tsx`:
     - If `item.image` is set: show image (e.g. top of card) using `next/image` with `src={item.image}`.
     - If no image: show a placeholder (same aspect ratio) or skip image area so layout stays consistent.
   - Use a consistent aspect ratio (e.g. 4/3 or 1/1) and `object-cover` so all cards look uniform.

4. **Hero**
   - Add one hero asset, e.g. `public/images/hero-pita-bowl.jpg` (or similar).
   - In `HeroSection.tsx`, replace the current Unsplash `src` with the new local path (e.g. `/images/hero-pita-bowl.jpg`).

5. **SEO / OG**
   - Add or replace `public/og-image.jpg` (or `og-image.png`) so `JsonLdRestaurant` and future Open Graph tags point to a real file (e.g. hero or a dedicated OG image).

6. **Homepage “Visit Us”**
   - Decide: keep current Unsplash “map placeholder” or replace with a real map screenshot / storefront photo. Optional; can stay as-is for now.

---

### Phase 2 — Image creation and placement

**Option A — Generate (AI image tool)**  
- Generate **1 hero image**: “Pita bowl menu item” (e.g. “signature chicken pita bowl, Mediterranean, fresh, restaurant photography, top-down”).  
- Generate **57 menu images**: one per item, with descriptions aligned to item name (e.g. “Chicken Pita Bowl, white rice, greens, hummus, chicken, restaurant photo”).  
- Save into `public/images/` (or `public/images/hero/` and `public/images/menu/`) with clear filenames (e.g. `chicken-pita-bowl.jpg` matching `MenuItem.id` or slug).  
- Add the corresponding paths to each `MenuItem` in `menu.ts` and set the hero path in `HeroSection.tsx`.

**Option B — Placeholder + you supply photos**  
- Add a single hero placeholder and 57 placeholders (e.g. generic bowl, wrap, drink icons or stock) under `public/images/`.  
- Wire `MenuItem.image` and hero as above.  
- You replace files later with real photos (same filenames = no code change).

**Option C — Hybrid**  
- Generate hero + a few key menu items (e.g. 1–2 per category) to establish look and layout.  
- Use a default “category” or “no image” placeholder for the rest until you have real photos.  
- Then replace placeholders and fill `MenuItem.image` for the rest.

---

## 4. Suggested file naming

- **Hero:**  
  `public/images/hero-pita-bowl.jpg` (or `.webp`)  
  → Use in code as `/images/hero-pita-bowl.jpg`.

- **Menu items:**  
  Use `MenuItem.id` for consistency, e.g.  
  `public/images/menu/build-your-own-bowl.jpg`,  
  `public/images/menu/chicken-pita-bowl.jpg`,  
  …  
  → In data: `image: "/images/menu/build-your-own-bowl.jpg"`.

- **OG / schema:**  
  `public/og-image.jpg`  
  → Keeps `JsonLdRestaurant` and future OG tags correct.

---

## 5. Code changes checklist (no images yet)

- [ ] Create `public/` and `public/images/` (and optionally `public/images/menu/`).
- [ ] In `src/data/menu.ts`: add `image?: string` to `MenuItem`; add `image` to each item (or leave `undefined` and handle in UI).
- [ ] In `src/components/MenuItemCard.tsx`: render `next/image` when `item.image` exists; optional placeholder when not.
- [ ] In `src/components/HeroSection.tsx`: switch hero `src` to new path (e.g. `/images/hero-pita-bowl.jpg`).
- [ ] Ensure `next.config.js` does not block local images (default is allow). If you later use external URLs for images, add their hostnames to `images.domains` or `images.remotePatterns`.
- [ ] Add or update `public/og-image.jpg` and keep `JsonLdRestaurant` pointing to it.

---

## 6. Image list (57 menu items)

For reference, every item that should get a picture:

**Featured (3):** build-your-own-bowl, earth-bowl, chicken-tikka-bowl-featured  
**Appetizers (5):** dip-pita, bourak, pita-nachos, shawarma-fries, fries  
**Wraps (5):** zesty-chicken-wrap, beef-wrap, falafel-delight-wrap, cali-shawarma-wrap, build-your-own-wrap  
**Bowls (4):** chicken-pita-bowl, steak-shawarma-bowl, earth-bowl-bowls, chicken-tikka-bowl  
**Extras (9):** side-pita-chips, side-3-falafel, side-5-falafel, side-chicken, side-steak, side-chicken-tikka, avocado, sauce-side, dip-side  
**Kids (1):** chicken-tenders-fries  
**Desserts (10):** pistachio-baklava, walnut-baklava, cake-pop, mini-cupcake, cupcake, tiramisu, dubau-chocolate-brownie, hazelnut-tiramisu, marshmallow-brownie, lazy-cake  
**Drinks (20):** yerba-mate, celcius, joy-burst, coca-cola-bottle, diet-coke-bottle, canada-dry, bai, sanpellegrino, water-1l, kombucha, na-sip-beer, perrier, sparkling-water, olipop, bodyarmor, coconut-water, water, pineapple, mini-sanpellegrino, glow-sparkling  

---

## 7. Next step

Choose how you want to proceed:

1. **Implement Phase 1 only** (data + UI + folders, no new assets) — then you add images manually.  
2. **Phase 1 + generate hero + all 57 menu images** (Option A) — long run of generations.  
3. **Phase 1 + generate hero + placeholders for menu** (Option B/C) — you replace with real photos later.  

Once you pick an option, the next steps are: create `public/images/`, update `menu.ts` and `MenuItemCard`, wire the hero and OG image, then create or drop in the images accordingly.
