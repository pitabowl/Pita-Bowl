# Pita Bowl — Image Regeneration Plan

Proteins: **Chicken Shawerma**, **Beef Shawerma**, **Falafel**, **Chicken Tikka**.

All images: **enterprise-level restaurant food photography**, same style as current menu (plated food, warm lighting, 4:3 aspect). Ingredients from PDF + `menu.ts`.

---

## Image locations (codebase)

| Source | Path | Purpose |
|--------|------|--------|
| `HeroSection.tsx` | `/images/hero-pita-bowl.jpg` | Homepage hero (4:3) |
| `src/data/menu.ts` | `/images/menu/<id>.jpg` | 57 menu item cards (4:3 each) |

**Total: 58 images** → 15 tasks (14 × 4 + 1 × 2).

---

## Tasks (4 images per task)

### Task 1 — Hero + Featured (4)
| # | Filename | Item | Ingredients / prompt focus |
|---|----------|------|----------------------------|
| 1 | `hero-pita-bowl.jpg` | Signature hero bowl | Pita bowl signature dish: saffron or white rice, mixed greens, hummus, chicken shawerma or chicken tikka, pickled toppings, fresh herbs. Restaurant hero shot. |
| 2 | `build-your-own-bowl.jpg` | Build Your Own Bowl | Bowl with base (rice/greens), dip (hummus), protein (chicken shawerma / beef shawerma / falafel / chicken tikka), toppings, sauce. Customizable bowl. |
| 3 | `earth-bowl.jpg` | Earth Bowl (featured) | Mixed greens, lentils, falafel, hummus, eggplant dip, pickled onions, cucumbers, feta, jalapeño cilantro dressing. |
| 4 | `chicken-tikka-bowl-featured.jpg` | Chicken Tikka Bowl (featured) | Saffron rice, chicken tikka, toppings. |

### Task 2 — Appetizers (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 5 | `dip-pita.jpg` | Dip & Pita | Hummus or house dips with warm pita. |
| 6 | `bourak.jpg` | 2 Bourak | Middle Eastern egg roll, savory filling. |
| 7 | `pita-nachos.jpg` | Pita Nachos | Seasoned crispy pita chips, feta cheese, steak or chicken shawerma, sauce. |
| 8 | `shawarma-fries.jpg` | Shawarma Fries | Fries topped with shawarma and sauce. |

### Task 3 — Appetizers + Wraps (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 9 | `fries.jpg` | Fries | Crispy fries, side of sauce. |
| 10 | `zesty-chicken-wrap.jpg` | Zesty Chicken Wrap | Warm pita or tortilla, zesty chicken (chicken tikka / chicken shawerma), toppings. |
| 11 | `beef-wrap.jpg` | Beef Wrap | Warm pita or tortilla, beef shawarma, toppings. |
| 12 | `falafel-delight-wrap.jpg` | Falafel Delight Wrap | Warm pita or tortilla, falafel, fresh toppings. |

### Task 4 — Wraps + Bowls (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 13 | `cali-shawarma-wrap.jpg` | Cali Shawarma Wrap | Toasted tortilla, shawarma (chicken or beef), California-style toppings. |
| 14 | `build-your-own-wrap.jpg` | Build Your Own Wrap | Warm pita or tortilla, build-your-own style. |
| 15 | `chicken-pita-bowl.jpg` | Chicken Pita Bowl | White rice, mixed greens, hummus, chicken (shawerma/tikka), toppings. |
| 16 | `steak-shawarma-bowl.jpg` | Steak Shawarma Bowl | White rice, mixed greens, hummus, eggplant dip, beef shawarma, pickled toppings. |

### Task 5 — Bowls + Extras (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 17 | `earth-bowl-bowls.jpg` | Earth Bowl (bowls cat.) | Mixed greens, lentils, falafel, hummus, eggplant dip, pickled onions, cucumbers, feta, jalapeño cilantro dressing. |
| 18 | `chicken-tikka-bowl.jpg` | Chicken Tikka Bowl (bowls) | Saffron rice, chicken tikka, toppings. |
| 19 | `side-pita-chips.jpg` | Side of Pita / Pita Chips | Warm pita or crispy pita chips. |
| 20 | `side-3-falafel.jpg` | Side 3 Falafel | Three falafel balls. |

### Task 6 — Extras (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 21 | `side-5-falafel.jpg` | Side 5 Falafel | Five falafel balls. |
| 22 | `side-chicken.jpg` | Side Chicken | Extra chicken (shredded chicken shawerma/tikka). |
| 23 | `side-steak.jpg` | Side Steak | Extra beef shawarma. |
| 24 | `side-chicken-tikka.jpg` | Side Chicken Tikka | Extra chicken tikka. |

### Task 7 — Extras + Kids (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 25 | `avocado.jpg` | Avocado | Fresh avocado add-on (halved or slices). |
| 26 | `sauce-side.jpg` | Sauce side | Side sauce or dip in small cup. |
| 27 | `dip-side.jpg` | Dip Side | Side of house dip (hummus/dip). |
| 28 | `chicken-tenders-fries.jpg` | Chicken Tenders and Fries | 3 chicken tenders, fries, side sauce. |

### Task 8 — Desserts (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 29 | `pistachio-baklava.jpg` | Pistachio Baklava | Housemade pistachio baklava. |
| 30 | `walnut-baklava.jpg` | Walnut Baklava | Housemade walnut baklava. |
| 31 | `cake-pop.jpg` | Cake Pop | Single cake pop. |
| 32 | `mini-cupcake.jpg` | Mini Cupcake | Mini cupcake. |

### Task 9 — Desserts (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 33 | `cupcake.jpg` | Cupcake | Full-size cupcake. |
| 34 | `tiramisu.jpg` | Tiramisu | Classic tiramisu. |
| 35 | `dubau-chocolate-brownie.jpg` | Dubau Chocolate Brownie | Rich chocolate brownie. |
| 36 | `hazelnut-tiramisu.jpg` | Hazelnut Tiramisu | Tiramisu with hazelnut. |

### Task 10 — Desserts + Drinks (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 37 | `marshmallow-brownie.jpg` | Marshmallow Brownie | Chocolate brownie with marshmallow. |
| 38 | `lazy-cake.jpg` | Lazy Cake | Housemade lazy cake. |
| 39 | `yerba-mate.jpg` | Yerba Mate | Yerba Mate can/bottle. |
| 40 | `celcius.jpg` | Celcius | Celcius energy drink. |

### Task 11 — Drinks (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 41 | `joy-burst.jpg` | Joy Burst | Joy Burst drink. |
| 42 | `coca-cola-bottle.jpg` | Coca-Cola, Bottle | Coca-Cola bottle. |
| 43 | `diet-coke-bottle.jpg` | Diet Coke, Bottle | Diet Coke bottle. |
| 44 | `canada-dry.jpg` | Bottled Canada Dry | Canada Dry ginger ale. |

### Task 12 — Drinks (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 45 | `bai.jpg` | Bai | Bai antioxidant drink. |
| 46 | `sanpellegrino.jpg` | Sanpellegrino | Sanpellegrino sparkling. |
| 47 | `water-1l.jpg` | 1L Water bottle | 1 liter water bottle. |
| 48 | `kombucha.jpg` | Kombucha | Kombucha bottle. |

### Task 13 — Drinks (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 49 | `na-sip-beer.jpg` | NA Drink / Sip Beer | Non-alcoholic drink or sip beer. |
| 50 | `perrier.jpg` | Perrier Sparkling | Perrier sparkling water. |
| 51 | `sparkling-water.jpg` | Sparkling Water | Sparkling water. |
| 52 | `olipop.jpg` | Olipop | Olipop soda. |

### Task 14 — Drinks (4)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 53 | `bodyarmor.jpg` | BODYARMOR | BODYARMOR sports drink. |
| 54 | `coconut-water.jpg` | Coconut water | Coconut water. |
| 55 | `water.jpg` | Water | Water bottle/cup. |
| 56 | `pineapple.jpg` | Pineapple | Pineapple drink. |

### Task 15 — Drinks (2)
| # | Filename | Item | Ingredients |
|---|----------|------|-------------|
| 57 | `mini-sanpellegrino.jpg` | Mini Sanpellegrino | Mini Sanpellegrino. |
| 58 | `glow-sparkling.jpg` | Glow Sparkling | Glow Sparkling drink. |

---

## Style brief (all images)

- **Style:** Professional restaurant food photography, editorial quality.
- **Lighting:** Warm, soft, appetizing; no harsh shadows.
- **Framing:** Plated dish (or product for drinks/sides); 4:3 aspect; top-down or 45°.
- **Aesthetic:** Mediterranean / Middle Eastern / California fresh; seed-oil-free, health-forward brand.
- **No:** seed oils, messy plating, artificial look.
