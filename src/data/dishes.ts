/**
 * Individual dish pages (/menu/[slug]). Price, ingredients and tags come from
 * menu.ts via itemId; this file holds the written copy for each page.
 * Only claim what's true for the item — no nutrition numbers we haven't measured.
 */

export interface DishFaq {
  q: string;
  a: string;
}

export interface Dish {
  slug: string;
  /** MenuItem.id in menu.ts */
  itemId: string;
  /** <title> (the layout appends "| Pita Bowl") */
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  /** Slugs of other dishes to suggest */
  pairsWith: string[];
  faqs: DishFaq[];
}

export const dishes: Dish[] = [
  // ── Bowls ──────────────────────────────────────────────────────────────
  {
    slug: "chicken-pita-bowl",
    itemId: "chicken-pita-bowl",
    seoTitle: "Chicken Shawarma Bowl in Mission Beach, San Diego",
    metaDescription:
      "Our Chicken Pita Bowl: chicken shawarma over white rice and greens with hummus, tzatziki, feta and tahini. Cooked with no seed oils on Mission Blvd.",
    intro: [
      "The Chicken Pita Bowl is the bowl most first-timers start with. Chicken shawarma is marinated and sliced in-house, then piled over white rice and mixed greens with a scoop of hummus and a scoop of tzatziki, so every bite has something creamy and something cool.",
      "Cucumbers, corn and feta add crunch and salt, and the whole thing is finished with tahini dressing. Like everything we make, it's cooked with olive or avocado oil instead of seed oils. If you want it lighter, ask for extra greens in place of rice; if you want more protein, add a side of chicken.",
    ],
    pairsWith: ["chicken-shawarma-fries", "dip-and-pita", "pistachio-baklava"],
    faqs: [
      {
        q: "Is the Chicken Pita Bowl gluten-friendly?",
        a: "The bowl itself is built on rice and greens with no pita in it, so it's one of our gluten-friendly options. If you're sensitive, let us know when you order so we can take extra care.",
      },
      {
        q: "Can I swap the rice?",
        a: "Usually, yes. Ask for extra greens instead of rice, or customize it when you order online. If you want full control over every ingredient, try Build Your Own Bowl.",
      },
    ],
  },
  {
    slug: "steak-shawarma-bowl",
    itemId: "steak-shawarma-bowl",
    seoTitle: "Steak Shawarma Bowl in San Diego — Seed-Oil-Free",
    metaDescription:
      "Steak shawarma over saffron rice and greens with hummus, roasted eggplant dip, olives and pickled onions. A Pita Bowl signature in Mission Beach.",
    intro: [
      "Our Steak Shawarma Bowl is the signature bowl on the menu. Thin-sliced steak shawarma goes over saffron rice and mixed greens, then gets two dips: classic hummus and our roasted eggplant dip, which is smoky and a little tangy.",
      "Olives and pickled onions cut through the richness of the steak. It's a hearty, high-protein plate that still feels clean, because we cook with olive and avocado oil and never seed oils. It travels well too, which makes it a regular for beach-day takeout from Mission Blvd.",
    ],
    pairsWith: ["steak-shawarma-fries", "bourak", "hazelnut-tiramisu"],
    faqs: [
      {
        q: "What is steak shawarma?",
        a: "Shawarma is a Middle Eastern way of seasoning and cooking meat, then slicing it thin. Ours is steak marinated with warm spices and cooked fresh each day.",
      },
      {
        q: "What's the eggplant dip like?",
        a: "It's roasted eggplant blended into a smoky, savory spread, similar to baba ghanoush. If you'd rather not have it, swap in tzatziki or extra hummus.",
      },
    ],
  },
  {
    slug: "chicken-tikka-bowl",
    itemId: "chicken-tikka-bowl",
    seoTitle: "Chicken Tikka Bowl in Mission Beach, San Diego",
    metaDescription:
      "Chicken tikka over saffron rice and greens with tzatziki, hummus, cucumber, corn, feta and tahini. Fresh daily and cooked with no seed oils.",
    intro: [
      "The Chicken Tikka Bowl brings a different kind of spice to the menu. Chicken tikka is traditionally marinated in yogurt and warm spices, and it tastes bolder and more aromatic than our shawarma. Ours is served over saffron rice and mixed greens.",
      "Tzatziki and hummus keep it cool and creamy, cucumber and corn add crunch, and feta and tahini sauce finish it off. It's one of our most popular high-protein bowls, and it's gluten-friendly as served.",
    ],
    pairsWith: ["dip-and-pita", "falafel", "walnut-baklava"],
    faqs: [
      {
        q: "Is chicken tikka spicy?",
        a: "It's flavorful rather than hot. Ask for a spicier sauce on the side if you want more of a kick.",
      },
      {
        q: "What's the difference between chicken tikka and chicken shawarma?",
        a: "Both are chicken prepped in-house every day. Tikka has a bolder, warmer spice profile; shawarma is seasoned more lightly and sliced thin.",
      },
    ],
  },
  {
    slug: "earth-bowl",
    itemId: "earth-bowl-bowls",
    seoTitle: "Earth Bowl — Vegetarian Falafel Bowl in San Diego",
    metaDescription:
      "A vegetarian falafel bowl with black lentils, greens, hummus, eggplant dip, feta and jalapeño cilantro dressing. Gluten-friendly, made with no seed oils.",
    intro: [
      "The Earth Bowl is our vegetarian bowl, and it's built to be filling without any meat. Instead of rice it starts with black lentils and mixed greens, then gets falafel, hummus and roasted eggplant dip.",
      "Pickled onions and cucumbers keep it fresh, feta adds salt, and the jalapeño cilantro dressing gives it a bright, herby finish. Between the lentils, falafel and hummus it carries plenty of plant protein, and it's gluten-friendly as served.",
    ],
    pairsWith: ["falafel", "dip-and-pita", "lazy-cake"],
    faqs: [
      {
        q: "Is the Earth Bowl vegan?",
        a: "As listed it's vegetarian because it includes feta. Ask for it without feta and it's plant-based.",
      },
      {
        q: "Is the falafel fried in seed oil?",
        a: "No. Nothing at Pita Bowl is cooked in seed oils. We use olive oil and avocado oil.",
      },
    ],
  },
  {
    slug: "build-your-own-bowl",
    itemId: "build-your-own-bowl",
    seoTitle: "Build Your Own Mediterranean Bowl in San Diego",
    metaDescription:
      "Pick your base, dip, protein, toppings and sauce. Build your own Mediterranean bowl at Pita Bowl in Mission Beach, all cooked with no seed oils.",
    intro: [
      "If you know exactly what you want, build it. Every custom bowl follows the same five steps: choose a base like rice or greens, a dip like hummus, tzatziki or roasted eggplant, a protein, your toppings, and a sauce.",
      "Proteins include chicken shawarma, steak shawarma, chicken tikka and falafel, and you can double up. It's the easiest way to hit your macros, eat around an allergy, or just get the combination you've been thinking about all day.",
    ],
    pairsWith: ["build-your-own-wrap", "chicken-pita-bowl", "earth-bowl"],
    faqs: [
      {
        q: "Can I get two proteins in one bowl?",
        a: "Yes. Add a side of chicken shawarma, steak shawarma, chicken tikka or falafel to any bowl when you order.",
      },
      {
        q: "What's the healthiest way to build a bowl?",
        a: "Most guests go greens or lentils as the base, a lean protein like chicken, lots of vegetables, and a dressing on the side. Everything is already made without seed oils.",
      },
    ],
  },

  // ── Wraps ──────────────────────────────────────────────────────────────
  {
    slug: "cali-shawarma-wrap",
    itemId: "cali-shawarma-wrap",
    seoTitle: "Cali Shawarma Wrap — Steak, Fries & Guac in San Diego",
    metaDescription:
      "Steak shawarma, pepper jack, fries, guacamole and garlic aioli in one wrap. The Cali Shawarma Wrap is a Pita Bowl favorite on Mission Blvd.",
    intro: [
      "The Cali Shawarma Wrap is what happens when a shawarma wrap meets a San Diego burrito. Steak shawarma, melted pepper jack, fries and guacamole get rolled together with garlic aioli.",
      "It's the most filling thing on the menu and one of the most ordered. The fries are cooked without seed oils like everything else here, so it's indulgent without the heavy, greasy feeling.",
    ],
    pairsWith: ["steak-shawarma-fries", "bourak", "dubai-chocolate-brownie"],
    faqs: [
      {
        q: "Why is it called the Cali wrap?",
        a: "It's our nod to the California burrito: fries and guacamole inside, but with steak shawarma and garlic aioli instead of carne asada.",
      },
      {
        q: "Can I make it with chicken?",
        a: "Yes. You can swap the steak for chicken shawarma or chicken tikka when you order.",
      },
    ],
  },
  {
    slug: "zesty-chicken-wrap",
    itemId: "zesty-chicken-wrap",
    seoTitle: "Zesty Chicken Shawarma Wrap in Mission Beach",
    metaDescription:
      "Chicken shawarma with hummus, pickles, pickled onions, greens and garlic sauce. The Zesty Chicken Wrap at Pita Bowl, cooked with no seed oils.",
    intro: [
      "The Zesty Chicken Wrap is our take on a classic chicken shawarma wrap. Hummus goes down first, then chicken shawarma, pickles, pickled onions and mixed greens, all tied together with garlic sauce.",
      "The pickles and pickled onions are what make it \"zesty\": they add a sharp, tangy bite against the garlic and chicken. It's lighter than the Cali wrap and easy to eat on the go.",
    ],
    pairsWith: ["chicken-shawarma-fries", "dip-and-pita", "pistachio-baklava"],
    faqs: [
      {
        q: "Is the garlic sauce made without seed oils?",
        a: "Yes. All of our sauces are made without seed oils.",
      },
      {
        q: "Pita or tortilla?",
        a: "You can choose a warm pita or a toasted tortilla for any wrap.",
      },
    ],
  },
  {
    slug: "beef-shawarma-wrap",
    itemId: "beef-wrap",
    seoTitle: "Beef Shawarma Wrap with Tahini in San Diego",
    metaDescription:
      "Steak shawarma, hummus, tomatoes, pickles, pickled onions and greens with tahini sauce. The Beef Wrap at Pita Bowl in Mission Beach.",
    intro: [
      "Our Beef Wrap is the traditional one: steak shawarma with hummus, tomatoes, pickles, pickled onions and mixed greens, finished with tahini sauce instead of garlic sauce.",
      "Tahini, a sauce made from sesame, is nutty and a little bitter, and it's the classic pairing for beef shawarma across the Middle East. If you've had shawarma abroad and want it the way you remember, this is the one to order.",
    ],
    pairsWith: ["bourak", "steak-shawarma-fries", "walnut-baklava"],
    faqs: [
      {
        q: "Is the beef wrap made with steak?",
        a: "Yes, it's made with our steak shawarma, sliced thin and cooked fresh daily.",
      },
      {
        q: "Does tahini contain nuts?",
        a: "Tahini is made from sesame seeds, not tree nuts. If you have a sesame allergy, ask for garlic sauce instead.",
      },
    ],
  },
  {
    slug: "falafel-wrap",
    itemId: "falafel-delight-wrap",
    seoTitle: "Vegan Falafel Wrap in Mission Beach, San Diego",
    metaDescription:
      "Falafel, hummus, greens, tomato, pickles and pickled onions in a toasted tortilla. Our vegan Falafel Delight Wrap, made with no seed oils.",
    intro: [
      "The Falafel Delight Wrap is our plant-based wrap. Crispy falafel goes into a toasted tortilla with hummus, mixed greens, tomato, pickles and pickled onions.",
      "Falafel are chickpea fritters seasoned with herbs and spices, and ours are cooked without seed oils. The result is crunchy outside and soft inside, and with hummus as well it's a filling, protein-rich vegan lunch.",
    ],
    pairsWith: ["falafel", "dip-and-pita", "earth-bowl"],
    faqs: [
      {
        q: "Is the falafel wrap vegan?",
        a: "Yes, as listed it's vegan. Sauces vary, so check the sauce you add if you're strictly plant-based.",
      },
      {
        q: "What is falafel made of?",
        a: "Falafel is made from ground chickpeas mixed with herbs and spices, formed into balls and cooked until crisp.",
      },
    ],
  },
  {
    slug: "build-your-own-wrap",
    itemId: "build-your-own-wrap",
    seoTitle: "Build Your Own Shawarma Wrap in San Diego",
    metaDescription:
      "Choose warm pita or toasted tortilla, then your dip, protein, toppings and sauce. Build your own wrap at Pita Bowl in Mission Beach.",
    intro: [
      "Build Your Own Wrap starts with a choice: warm pita or toasted tortilla. Then pick a dip, a protein (chicken shawarma, steak shawarma, chicken tikka or falafel), your toppings and a sauce.",
      "It's the same fresh, daily-prepped lineup as our bowls, just wrapped up to go. It's a good pick if you want a signature wrap but without one ingredient, or with double the protein.",
    ],
    pairsWith: ["build-your-own-bowl", "zesty-chicken-wrap", "chicken-shawarma-fries"],
    faqs: [
      {
        q: "What's the difference between the pita and the tortilla?",
        a: "The pita is soft and warm, closer to a traditional shawarma sandwich. The tortilla is toasted, holds more, and is easier to eat on the go.",
      },
      {
        q: "Can I get the wrap as a bowl instead?",
        a: "Yes, everything in the wrap can go in a bowl instead. Order Build Your Own Bowl.",
      },
    ],
  },

  // ── Appetizers ─────────────────────────────────────────────────────────
  {
    slug: "dip-and-pita",
    itemId: "dip-pita",
    seoTitle: "Hummus, Tzatziki & Eggplant Dip with Warm Pita",
    metaDescription:
      "Choose hummus, tzatziki or roasted eggplant dip served with warm pita. A fresh-daily starter at Pita Bowl in Mission Beach, San Diego.",
    intro: [
      "Dip & Pita is the simplest thing we make and one of the best ways to taste the kitchen. Pick hummus, tzatziki or roasted eggplant dip, and we serve it with warm pita.",
      "All three dips are made in-house every day. Hummus is chickpeas and tahini, tzatziki is yogurt with cucumber and herbs, and the eggplant dip is roasted and smoky. It's easy to share before bowls arrive, or to take home to the beach.",
    ],
    pairsWith: ["falafel", "pita-nachos", "chicken-tikka-bowl"],
    faqs: [
      {
        q: "Which dip should I get?",
        a: "Hummus if you want a classic, tzatziki if you want something cool and tangy, eggplant if you like smoky flavors. You can add extra dip sides to try more than one.",
      },
      {
        q: "Are the dips vegan?",
        a: "Hummus and eggplant dip are plant-based. Tzatziki is made with yogurt, so it's vegetarian.",
      },
    ],
  },
  {
    slug: "bourak",
    itemId: "bourak",
    seoTitle: "Bourak — Middle Eastern Steak Egg Rolls in San Diego",
    metaDescription:
      "Bourak are crispy Middle Eastern egg rolls stuffed with steak. Order two as a starter at Pita Bowl on Mission Blvd, cooked with no seed oils.",
    intro: [
      "Bourak (sometimes spelled borek) are crispy rolled pastries found all over the Middle East and Mediterranean. Ours are stuffed with steak and served two to an order.",
      "Think of them as a Middle Eastern egg roll: crunchy outside, savory and meaty inside. They're cooked without seed oils and make a quick starter or an add-on to any bowl.",
    ],
    pairsWith: ["steak-shawarma-bowl", "beef-shawarma-wrap", "dip-and-pita"],
    faqs: [
      {
        q: "What's inside bourak?",
        a: "Our bourak are filled with seasoned steak.",
      },
      {
        q: "How many come in an order?",
        a: "Two per order.",
      },
    ],
  },
  {
    slug: "pita-nachos",
    itemId: "pita-nachos",
    seoTitle: "Pita Nachos with Steak Shawarma & Feta in San Diego",
    metaDescription:
      "Crispy seasoned pita chips topped with steak shawarma, feta and garlic sauce. Pita Nachos are a Pita Bowl signature in Mission Beach.",
    intro: [
      "Pita Nachos swap tortilla chips for our own seasoned, crispy pita chips. They're piled with steak shawarma and feta and finished with garlic sauce.",
      "It's a shareable plate that can easily be a meal. The pita chips are cooked without seed oils, so they're crisp without tasting heavy.",
    ],
    pairsWith: ["dip-and-pita", "steak-shawarma-fries", "tiramisu"],
    faqs: [
      {
        q: "Can I get pita nachos with chicken?",
        a: "Yes, ask to swap the steak shawarma for chicken shawarma or chicken tikka.",
      },
      {
        q: "Are they good for sharing?",
        a: "Yes, it's one of our most-shared starters. It's sized for two as an appetizer.",
      },
    ],
  },
  {
    slug: "chicken-shawarma-fries",
    itemId: "shawarma-fries",
    seoTitle: "Chicken Shawarma Fries in Mission Beach, San Diego",
    metaDescription:
      "Fries topped with chicken shawarma and garlic sauce, cooked with no seed oils. Chicken Shawarma Fries at Pita Bowl on Mission Blvd.",
    intro: [
      "Chicken Shawarma Fries are exactly what they sound like: a full order of fries loaded with chicken shawarma and drizzled with garlic sauce.",
      "Most loaded fries are cooked in seed oil. Ours aren't. They're a favorite after a day on the sand, and big enough to share or eat as a meal.",
    ],
    pairsWith: ["zesty-chicken-wrap", "kids-chicken-tenders", "dip-and-pita"],
    faqs: [
      {
        q: "What oil are the fries cooked in?",
        a: "Our fries are cooked without seed oils. We use olive oil and avocado oil in the kitchen.",
      },
      {
        q: "Can I get them with steak?",
        a: "Yes. Order the Steak Shawarma Fries.",
      },
    ],
  },
  {
    slug: "steak-shawarma-fries",
    itemId: "steak-shawarma-fries",
    seoTitle: "Steak Shawarma Fries in Mission Beach, San Diego",
    metaDescription:
      "Fries loaded with steak shawarma and garlic sauce, made with no seed oils. Steak Shawarma Fries at Pita Bowl, 3833 Mission Blvd.",
    intro: [
      "Steak Shawarma Fries take our fries and load them with thin-sliced steak shawarma and garlic sauce.",
      "They're richer than the chicken version and one of the most filling things on the menu. Fries, steak and sauce are all made without seed oils.",
    ],
    pairsWith: ["cali-shawarma-wrap", "steak-shawarma-bowl", "bourak"],
    faqs: [
      {
        q: "Steak or chicken shawarma fries?",
        a: "Steak is richer and more savory; chicken is lighter and a little cheaper. Both get the same garlic sauce.",
      },
      {
        q: "Is it enough for a meal?",
        a: "For most people, yes. It's also easy to split as a starter.",
      },
    ],
  },
  {
    slug: "falafel",
    itemId: "side-3-falafel",
    seoTitle: "Falafel in Mission Beach, San Diego — No Seed Oils",
    metaDescription:
      "Crispy chickpea falafel cooked without seed oils. Order 3 or 5 on the side, or in our Earth Bowl and Falafel Wrap. Pita Bowl, Mission Blvd.",
    intro: [
      "Our falafel are made from ground chickpeas, herbs and spices, cooked until crisp without seed oils. You can order them on the side in threes or fives, or get them in a bowl or wrap.",
      "They're naturally plant-based and go with any of our dips. Try them with hummus for the classic combination, or with tzatziki if you're not strictly vegan.",
    ],
    pairsWith: ["earth-bowl", "falafel-wrap", "dip-and-pita"],
    faqs: [
      {
        q: "Is your falafel vegan and gluten-friendly?",
        a: "Our falafel is plant-based. It's chickpea-based rather than wheat-based. If you're celiac, ask us about shared prep before ordering.",
      },
      {
        q: "Where can I get falafel on the menu?",
        a: "As a side (3 or 5 pieces), in the Earth Bowl, in the Falafel Delight Wrap, or as the protein in any build-your-own bowl or wrap.",
      },
    ],
  },

  // ── Kids ───────────────────────────────────────────────────────────────
  {
    slug: "kids-chicken-tenders",
    itemId: "chicken-tenders-fries",
    seoTitle: "Kids Chicken Tenders & Fries in Mission Beach",
    metaDescription:
      "Three chicken tenders with fries and a side sauce, cooked with no seed oils. The kids meal at Pita Bowl on Mission Blvd, San Diego.",
    intro: [
      "Our kids meal keeps it simple: three chicken tenders, fries and a side sauce for dipping.",
      "It's cooked the same way as the rest of the menu, without seed oils, so parents can feel good about it too. It's an easy pick for families coming off the beach or out of Belmont Park.",
    ],
    pairsWith: ["dip-and-pita", "lazy-cake", "chicken-pita-bowl"],
    faqs: [
      {
        q: "What sauce comes with the tenders?",
        a: "Pick any of our sauces on the side when you order.",
      },
      {
        q: "Can adults order the kids meal?",
        a: "Of course.",
      },
    ],
  },

  // ── Desserts ───────────────────────────────────────────────────────────
  {
    slug: "pistachio-baklava",
    itemId: "pistachio-baklava",
    seoTitle: "Pistachio Baklava in San Diego — Housemade",
    metaDescription:
      "Housemade pistachio baklava: layered phyllo, pistachios, butter and honey. Get it after your bowl at Pita Bowl in Mission Beach.",
    intro: [
      "Baklava is layers of thin phyllo pastry brushed with butter, filled with chopped nuts and soaked with honey syrup. Ours is made in-house with pistachios.",
      "Pistachio baklava is a little richer and more fragrant than walnut, and the bright green filling makes it the one people photograph. One piece is the right size to finish a meal.",
    ],
    pairsWith: ["walnut-baklava", "hazelnut-tiramisu", "chicken-pita-bowl"],
    faqs: [
      {
        q: "Pistachio or walnut baklava?",
        a: "Pistachio is more fragrant and buttery; walnut is earthier and a bit less sweet. Can't decide? Get one of each.",
      },
      {
        q: "Does baklava contain nuts?",
        a: "Yes, it's filled with pistachios. It also contains butter (dairy) and wheat (phyllo).",
      },
    ],
  },
  {
    slug: "walnut-baklava",
    itemId: "walnut-baklava",
    seoTitle: "Walnut Baklava in San Diego — Housemade",
    metaDescription:
      "Housemade walnut baklava: flaky phyllo, walnuts, butter and honey. A classic Middle Eastern dessert at Pita Bowl on Mission Blvd.",
    intro: [
      "Walnut baklava is the classic version: layers of buttered phyllo, chopped walnuts and honey, baked until crisp and golden.",
      "Walnuts give it a deeper, slightly earthy flavor that balances the honey. We make it in-house, and it's a natural end to a shawarma bowl or wrap.",
    ],
    pairsWith: ["pistachio-baklava", "tiramisu", "beef-shawarma-wrap"],
    faqs: [
      {
        q: "What's in walnut baklava?",
        a: "Phyllo pastry, walnuts, honey and butter.",
      },
      {
        q: "Is it very sweet?",
        a: "Baklava is a sweet dessert, but the walnuts keep it from being one-note. One piece is plenty for most people.",
      },
    ],
  },
  {
    slug: "tiramisu",
    itemId: "tiramisu",
    seoTitle: "Housemade Tiramisu in Mission Beach, San Diego",
    metaDescription:
      "Classic tiramisu with espresso-soaked ladyfingers, mascarpone and cocoa, housemade at Pita Bowl in Mission Beach, San Diego.",
    intro: [
      "Our classic tiramisu is made in-house: ladyfingers soaked in espresso, layered with mascarpone cream and dusted with cocoa.",
      "It's a little unexpected at a shawarma spot, but it's become one of our signature desserts. It's light, not too sweet, and made for sharing.",
    ],
    pairsWith: ["hazelnut-tiramisu", "lazy-cake", "steak-shawarma-bowl"],
    faqs: [
      {
        q: "Does the tiramisu contain coffee?",
        a: "Yes, the ladyfingers are soaked in espresso, so there's a little caffeine.",
      },
      {
        q: "What's the difference between this and the hazelnut tiramisu?",
        a: "The hazelnut version adds hazelnut to the classic recipe for a nuttier, more chocolate-hazelnut flavor.",
      },
    ],
  },
  {
    slug: "hazelnut-tiramisu",
    itemId: "hazelnut-tiramisu",
    seoTitle: "Hazelnut Tiramisu in San Diego — Housemade",
    metaDescription:
      "Tiramisu with hazelnut: espresso ladyfingers, mascarpone, hazelnut and cocoa. A housemade signature dessert at Pita Bowl, Mission Beach.",
    intro: [
      "Hazelnut Tiramisu takes our classic tiramisu (espresso-soaked ladyfingers, mascarpone and cocoa) and layers in hazelnut.",
      "If you like the flavor of chocolate-hazelnut spread, this is the dessert to try. It's made in-house and is one of the signature sweets on our menu.",
    ],
    pairsWith: ["tiramisu", "pistachio-baklava", "cali-shawarma-wrap"],
    faqs: [
      {
        q: "Does the hazelnut tiramisu contain nuts?",
        a: "Yes, it contains hazelnuts. It also contains dairy, eggs and wheat.",
      },
      {
        q: "Is it sweeter than the classic?",
        a: "Slightly. The hazelnut adds richness and a bit more sweetness.",
      },
    ],
  },
  {
    slug: "lazy-cake",
    itemId: "lazy-cake",
    seoTitle: "Lazy Cake — Chocolate Biscuit Cake in San Diego",
    metaDescription:
      "Housemade lazy cake: a no-bake chocolate biscuit cake with condensed milk. A Middle Eastern favorite at Pita Bowl in Mission Beach.",
    intro: [
      "Lazy cake is a no-bake chocolate biscuit cake that's hugely popular across the Middle East. It's tea biscuits folded into a rich chocolate and condensed-milk mixture, chilled, and sliced.",
      "It's called \"lazy\" because it skips the oven, not because it's low effort to make. It's dense and fudgy, somewhere between a brownie and a chocolate bar, and we make ours in-house.",
    ],
    pairsWith: ["dubai-chocolate-brownie", "tiramisu", "kids-chicken-tenders"],
    faqs: [
      {
        q: "What is lazy cake?",
        a: "A chilled, no-bake cake made from biscuits, chocolate and condensed milk.",
      },
      {
        q: "Is it served cold?",
        a: "Yes, it's kept chilled so it slices cleanly and stays fudgy.",
      },
    ],
  },
  {
    slug: "dubai-chocolate-brownie",
    itemId: "dubau-chocolate-brownie",
    seoTitle: "Dubai Chocolate Brownie in San Diego",
    metaDescription:
      "A rich, housemade Dubai chocolate brownie at Pita Bowl in Mission Beach. Grab one with your shawarma bowl or wrap.",
    intro: [
      "Dubai chocolate became famous online for its rich chocolate and crunchy, nutty filling. Our Dubai Chocolate Brownie brings that idea to a housemade brownie that's rich, dense and very chocolatey.",
      "It's one of the more indulgent desserts on the menu. Split it, or keep it to yourself.",
    ],
    pairsWith: ["lazy-cake", "hazelnut-tiramisu", "cali-shawarma-wrap"],
    faqs: [
      {
        q: "Is the brownie made in-house?",
        a: "Yes, it's one of our housemade desserts.",
      },
      {
        q: "Does it contain nuts?",
        a: "Ask us when you order. Recipes can change and we'd rather confirm than guess about allergens.",
      },
    ],
  },
];

export function getDish(slug: string) {
  return dishes.find((d) => d.slug === slug);
}

/** Dish page slug for a menu item id, if that item has a page. */
export function dishSlugForItem(itemId: string) {
  // Featured duplicates point to the same page as their main entry
  const alias: Record<string, string> = {
    "earth-bowl": "earth-bowl-bowls",
    "chicken-tikka-bowl-featured": "chicken-tikka-bowl",
    "side-5-falafel": "side-3-falafel",
  };
  const id = alias[itemId] ?? itemId;
  return dishes.find((d) => d.itemId === id)?.slug;
}
