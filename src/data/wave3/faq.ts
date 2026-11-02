/**
 * FAQ pages (/faq/[slug]). Short direct answer first, then supporting detail.
 * Facts limited to what's verified in menu.ts, dishes.ts and the content brief.
 */
import type { FaqPage } from "./types";

export const faqPages: FaqPage[] = [
  {
    slug: "do-you-offer-pickup",
    q: "Do you offer pickup?",
    seoTitle: "Does Pita Bowl Offer Pickup? Takeout in Mission Beach",
    metaDescription:
      "Yes, Pita Bowl is a takeout and pickup spot at 3833 Mission Blvd. Order online through our site, then grab your bowls and wraps on the way to the beach.",
    answer:
      "Yes. Pita Bowl is a takeout and pickup restaurant at 3833 Mission Blvd in Mission Beach. You can order online from our website and pick your food up at the counter.",
    details: [
      "Pickup is how most people eat our food. Bowls, wraps, fries and desserts are all packed to go, which makes them easy to carry a few minutes down the street to the boardwalk or over to the bay. We're open Sunday through Thursday from 11 AM to 8 PM, and Friday and Saturday from 11 AM to 9 PM.",
      "The online menu runs through Toast and has the full lineup, including build-your-own bowls and wraps where you pick your base, dip, protein, toppings and sauce. Ordering ahead lets you customize everything without rushing at the counter.",
      "If you're picking up for a crowd, it helps to place the order early in the day. For bigger events, our catering team handles quotes separately through the catering page.",
      "A few things make pickup smoother. Check your order before you leave the counter, especially if you customized it, and ask for sauces and dressings on the side if the food will sit for a while before you eat. Fries are best eaten soon after pickup, while bowls hold up well for longer.",
    ],
    relatedDishes: ["chicken-pita-bowl", "cali-shawarma-wrap"],
    relatedPaths: ["/faq/how-do-i-order-online", "/faq/what-are-your-hours", "/guides/how-to-order-ahead-for-pickup", "/location"],
  },
  {
    slug: "how-do-i-order-online",
    q: "How do I order online?",
    seoTitle: "How to Order Pita Bowl Online for Pickup",
    metaDescription:
      "Order Pita Bowl online from our website through Toast. Pick a bowl, wrap or build your own, check out, and pick it up at 3833 Mission Blvd in Mission Beach.",
    answer:
      "Use the order button on our website, which takes you to our Toast online ordering menu. Choose your items, customize them, check out, and pick your order up at 3833 Mission Blvd.",
    details: [
      "The online menu mirrors what's on our boards: featured items, appetizers, wraps, bowls, build-your-own extras, a kids meal, desserts and drinks. Signature bowls like the Chicken Pita Bowl come ready to go, but you can still make adjustments, such as swapping rice for extra greens.",
      "For full control, choose Build Your Own Bowl or Build Your Own Wrap. You'll step through a base, a dip (hummus, tzatziki or roasted eggplant), a protein (chicken shawarma, steak shawarma, chicken tikka or falafel), toppings and a sauce. Wraps let you pick warm pita or toasted tortilla.",
      "Add-on sides are listed under extras, including more chicken shawarma, steak, chicken tikka, falafel by three or five, and avocado. If you have an allergy, use the notes or call 858-210-9524 before ordering so we can talk through it.",
      "A quick tip for first-timers: read the ingredient line on each item before adding it to your cart. Several bowls include feta, tzatziki or tahini, and it's easier to adjust them while ordering than after you've picked up. Desserts and drinks can be added to the same order at checkout.",
    ],
    relatedDishes: ["build-your-own-bowl", "build-your-own-wrap"],
    relatedPaths: ["/menu", "/faq/can-i-customize-my-bowl", "/faq/do-you-offer-pickup"],
  },
  {
    slug: "what-are-your-hours",
    q: "What are your hours?",
    seoTitle: "Pita Bowl Hours in Mission Beach, San Diego",
    metaDescription:
      "Pita Bowl is open Sunday to Thursday 11 AM to 8 PM and Friday to Saturday 11 AM to 9 PM at 3833 Mission Blvd, Mission Beach, San Diego.",
    answer:
      "We're open Sunday through Thursday from 11 AM to 8 PM, and Friday and Saturday from 11 AM to 9 PM.",
    details: [
      "Those hours cover lunch and dinner every day of the week. We open at 11 AM, so a late-morning beach session can end with a bowl right as the doors open. Weekends run an hour later, which helps if you're staying out to watch the sunset over the ocean.",
      "Holiday hours can differ from the regular schedule. If you're planning around a specific date, call 858-210-9524 to confirm before you head over.",
      "The fastest way to get food during busy stretches is to order online ahead of time through our website and pick it up when it's ready. Call ahead if you want to check on anything before you come in.",
      "Lunch hours tend to be a good time for a quick meal before heading back to the sand, while evenings suit a takeout dinner after a long beach day. Because we're a takeout and pickup spot, plan on taking your food with you, whether that's to the boardwalk, the bay or home. Our location page has the address and a map if you're coming from elsewhere in San Diego.",
    ],
    relatedDishes: [],
    relatedPaths: ["/location", "/faq/where-are-you-located", "/faq/can-i-order-ahead-and-skip-the-line", "/contact"],
  },
  {
    slug: "where-are-you-located",
    q: "Where are you located?",
    seoTitle: "Where Is Pita Bowl? 3833 Mission Blvd, San Diego",
    metaDescription:
      "Pita Bowl is at 3833 Mission Blvd, San Diego, CA 92109, on the bay side of Mission Blvd in Mission Beach, a few minutes' walk from Belmont Park.",
    answer:
      "Pita Bowl is at 3833 Mission Blvd, San Diego, CA 92109, in Mission Beach. We're on the bay side of Mission Blvd, a few minutes' walk from Belmont Park and the Mission Beach boardwalk.",
    details: [
      "Mission Beach is the narrow strip of land between the Pacific Ocean and Mission Bay, and Mission Blvd is the main road running down the middle of it. Being on the bay side puts us between the boardwalk to the west and the calm bay water to the east, both within easy walking distance.",
      "If you're driving in from elsewhere in San Diego, most routes come in from I-5 or I-8 toward Mission Bay Dr or W Mission Bay Dr, which lead onto the peninsula. Belmont Park, with its historic wooden roller coaster, is the easiest landmark to steer toward.",
      "Many people walk or bike over from the beach. Street parking in Mission Beach gets tight in summer, so check the Mission Beach parking guide before you go and give yourself extra time on weekends.",
      "The 92109 ZIP code also covers Pacific Beach to the north, so if you're staying there, the trip down Mission Blvd is short. From the south, the road runs up from the jetty area past Belmont Park. Look for us on the bay side rather than the ocean side of the street.",
    ],
    relatedDishes: [],
    relatedPaths: ["/location", "/guides/mission-beach-parking-guide", "/faq/how-far-is-pita-bowl-from-belmont-park", "/guides/a-first-timers-guide-to-mission-beach"],
  },
  {
    slug: "do-you-have-a-kids-menu",
    q: "Do you have a kids menu?",
    seoTitle: "Does Pita Bowl Have a Kids Menu?",
    metaDescription:
      "Pita Bowl's kids meal is three chicken tenders with fries and a side sauce for $12. Plenty of the regular menu also works for younger, pickier eaters.",
    answer:
      "Yes. Our kids meal is Chicken Tenders and Fries: three chicken tenders, fries and a side sauce, for $12.",
    details: [
      "The kids meal is the only item on the menu built specifically for children, and it's the familiar option for picky eaters. Kids can choose a sauce on the side for dipping.",
      "Plenty of other things work well for kids too. A plain side of fries is $4, and the Dip & Pita is warm pita with a dip like hummus, which many kids happily eat on its own. If your child likes to pick exactly what goes in, Build Your Own Bowl lets you keep it simple, for example rice, chicken shawarma and a mild dip.",
      "For something sweet, the dessert case has small options like a $2 cake pop and a $1.50 mini cupcake, alongside larger housemade cakes. If your child has a food allergy, ask us at the counter before ordering.",
      "Kids meals are cooked the same way as everything else on the savory menu, with olive or avocado oil and no seed oils. Parents often order a Chicken Pita Bowl or a wrap for themselves and share bites, which is an easy way for kids to try new flavors without committing to a whole meal.",
    ],
    relatedDishes: ["kids-chicken-tenders", "dip-and-pita", "build-your-own-bowl"],
    relatedPaths: ["/dietary/kid-friendly", "/faq/is-pita-bowl-good-for-kids", "/guides/how-to-feed-picky-eaters-mediterranean-food"],
  },
  {
    slug: "do-you-have-vegan-options",
    q: "Do you have vegan options?",
    seoTitle: "Vegan Options at Pita Bowl in Mission Beach",
    metaDescription:
      "Pita Bowl's vegan options include the Falafel Delight Wrap, sides of falafel and avocado, and build-your-own bowls with hummus or roasted eggplant dip.",
    answer:
      "Yes. The Falafel Delight Wrap, our falafel sides and avocado are marked vegan, and you can build a plant-based bowl or wrap with falafel, hummus or roasted eggplant dip.",
    details: [
      "The Falafel Delight Wrap is the ready-made vegan pick: a tortilla with hummus, mixed greens, falafel, pickled onions, tomato and pickles, for $15. Falafel is also sold on its own, three for $7 or five for $10.",
      "The Earth Bowl is listed as vegetarian because it comes with feta. Ask for it without feta and it becomes plant-based, with black lentils, greens, falafel, hummus, eggplant dip, pickled onions, cucumbers and jalapeño cilantro dressing.",
      "When you build your own, the safe dips are hummus and roasted eggplant dip; tzatziki is made with yogurt. Skip feta and pepper jack, and ask about any sauce you're unsure of. Our desserts mostly contain butter, mascarpone or condensed milk, so they aren't vegan. If you avoid animal products strictly, mention it when you order so we can check what touches your food.",
      "Avocado is marked vegan and is a good add-on at $2.50 for extra richness. Plain fries can round out the meal too, though it's worth asking which sauce comes on the side.",
    ],
    relatedDishes: ["falafel-wrap", "earth-bowl", "falafel"],
    relatedPaths: ["/dietary/vegan", "/faq/is-your-falafel-vegan", "/guides/how-to-build-a-vegetarian-bowl"],
  },
  {
    slug: "do-you-have-vegetarian-options",
    q: "Do you have vegetarian options?",
    seoTitle: "Vegetarian Options at Pita Bowl, San Diego",
    metaDescription:
      "Vegetarian picks at Pita Bowl include the Earth Bowl, Falafel Delight Wrap, Dip & Pita, falafel sides and build-your-own bowls with falafel as the protein.",
    answer:
      "Yes. The Earth Bowl, the Falafel Delight Wrap, Dip & Pita and our falafel sides are all vegetarian, and falafel can be the protein in any build-your-own bowl or wrap.",
    details: [
      "The Earth Bowl is the main vegetarian bowl. Instead of rice it starts with black lentils and mixed greens, then adds falafel, hummus, eggplant dip, pickled onions, cucumbers, feta and jalapeño cilantro dressing. At $15 it's filling enough to stand in for any meat bowl.",
      "Vegetarians also get the full range of dips, including tzatziki, which is yogurt-based. Dip & Pita ($11) comes with your choice of hummus, tzatziki or roasted eggplant and warm pita. Plain fries are on the menu too.",
      "On the sweet side, both baklavas are marked vegetarian. A few items look vegetarian at a glance but aren't: the Pita Nachos and bourak both contain steak. If you're unsure about a sauce or dessert, ask and we'll check.",
      "If you want to build your own vegetarian meal, start with Build Your Own Bowl or Wrap and choose falafel as the protein. Tzatziki, feta and hummus all fit a vegetarian diet. For extra substance, add a side of five falafel or a scoop of avocado, or pair the bowl with Dip & Pita for the table.",
    ],
    relatedDishes: ["earth-bowl", "falafel-wrap", "dip-and-pita"],
    relatedPaths: ["/dietary/vegetarian", "/guides/how-to-build-a-vegetarian-bowl", "/faq/what-is-the-earth-bowl"],
  },
  {
    slug: "is-your-food-gluten-free",
    q: "Is your food gluten-free?",
    seoTitle: "Is Pita Bowl Gluten-Free? Our Gluten-Friendly Options",
    metaDescription:
      "Pita Bowl isn't a certified gluten-free kitchen, but several bowls are gluten-friendly as served. Celiac guests should ask about shared prep before ordering.",
    answer:
      "We're gluten-friendly, not gluten-free. Several bowls are made without pita or wheat-based ingredients, but our kitchen also handles pita, tortillas and baked goods, so celiac guests should ask about shared prep before ordering.",
    details: [
      "Four bowls carry our gluten-friendly tag: the Chicken Pita Bowl, Steak Shawarma Bowl, Chicken Tikka Bowl and Earth Bowl. Each is built on rice, greens or black lentils rather than bread. Despite its name, the Chicken Pita Bowl doesn't come with pita inside.",
      "\"Gluten-friendly\" means the recipe doesn't call for gluten ingredients. It doesn't mean the food is tested or prepared in a separate space. Pita, pita chips, tortillas, bourak pastry and desserts like baklava are all handled in the same kitchen, so cross-contact is possible.",
      "If you're avoiding gluten for comfort, the bowls are an easy choice. If you have celiac disease or a serious sensitivity, tell us when you order, skip the pita and chips, and ask how a specific item is prepared. You can also call 858-210-9524 ahead of time.",
      "Wraps, Pita Nachos, Dip & Pita, bourak and most desserts are the items to skip if you're avoiding gluten, since they're built on pita, tortillas, pastry or cake. Planning for a group? Our gluten-friendly catering page has ideas for feeding guests who avoid gluten.",
    ],
    relatedDishes: ["chicken-tikka-bowl", "steak-shawarma-bowl", "earth-bowl"],
    relatedPaths: ["/dietary/gluten-friendly", "/guides/how-to-eat-out-gluten-friendly", "/catering/gluten-friendly-catering"],
  },
  {
    slug: "do-you-use-seed-oils",
    q: "Do you use seed oils?",
    seoTitle: "Does Pita Bowl Use Seed Oils? No, Here's What We Use",
    metaDescription:
      "Pita Bowl doesn't cook with seed oils like canola or soybean oil. The kitchen uses olive oil and avocado oil, and ingredients are prepped fresh daily.",
    answer:
      "No. We don't use seed oils such as canola or soybean oil in our cooking. Everything we cook is made with olive oil and avocado oil.",
    details: [
      "That covers the savory menu, from the shawarma and chicken tikka to the falafel and fries. Ingredients are prepped fresh in-house every day, and the oils we cook with are olive and avocado.",
      "One honest caveat: our desserts are housemade, but some include store-bought components such as biscuits or chocolate that may contain seed oils. If you avoid them strictly, ask about a specific dessert before ordering.",
      "\"Seed oils\" usually refers to industrially processed oils from seeds like canola, soybean, corn, sunflower and cottonseed. Whether they're harmful is debated; major health bodies such as the American Heart Association consider them fine in a normal diet, while others prefer to avoid them. Either way, if you'd rather skip them, our savory menu is an easy place to do it.",
      "Practically, that means you can order anything from the savory menu without asking about the oil. Bowls, wraps, falafel, bourak and fries are all covered. Our seed-oil-free dietary page lists the dishes and explains the approach in more detail.",
    ],
    relatedDishes: ["falafel", "chicken-shawarma-fries"],
    relatedPaths: ["/dietary/seed-oil-free", "/guides/what-are-seed-oils", "/guides/how-to-eat-out-without-seed-oils", "/faq/what-oil-do-you-cook-with"],
  },
  {
    slug: "what-oil-do-you-cook-with",
    q: "What oil do you cook with?",
    seoTitle: "What Oil Does Pita Bowl Cook With? Olive and Avocado",
    metaDescription:
      "Pita Bowl cooks with olive oil and avocado oil, never seed oils like canola or soybean. Learn how the two oils differ and where each one shows up.",
    answer:
      "We cook with olive oil and avocado oil. We don't use seed oils like canola or soybean oil in our cooking.",
    details: [
      "Olive oil is the classic fat of Mediterranean and Middle Eastern cooking, with a fruity, sometimes peppery flavor. Avocado oil is milder and is known for a high smoke point, which makes it well suited to high-heat cooking. Using both gives the kitchen a flavorful oil and a neutral, heat-tolerant one.",
      "Those two oils are behind everything savory we make, including the shawarma, chicken tikka, falafel, bourak and fries. Avocado also shows up as a fresh ingredient: you can add it to any bowl or wrap for $2.50, and the Cali Shawarma Wrap comes with guacamole.",
      "If you want to read more about the oils themselves, our guides compare olive and avocado oil, explain smoke points, and walk through olive oil grades. The desserts are the one area where store-bought components may include other oils, so ask if that matters to you.",
      "Extra virgin olive oil is the least processed grade and has the most flavor, while lighter, more refined grades are better suited to heat. Avocado oil is pressed from the fruit's flesh rather than a seed, which is part of why it's often grouped with olive oil instead of seed oils.",
    ],
    relatedDishes: ["falafel", "cali-shawarma-wrap"],
    relatedPaths: ["/guides/olive-oil-vs-avocado-oil", "/ingredients/avocado-oil", "/guides/what-is-the-smoke-point-of-cooking-oils", "/faq/do-you-use-seed-oils"],
  },
  {
    slug: "do-you-have-nut-free-options",
    q: "Do you have nut-free options?",
    seoTitle: "Nut-Free Options at Pita Bowl: What to Know",
    metaDescription:
      "Pita Bowl's savory menu lists no nuts, but baklava and hazelnut tiramisu do. We can't guarantee nut-free food, so ask about cross-contact before ordering.",
    answer:
      "Our bowls, wraps and appetizers don't list nuts as ingredients, but several desserts do, including both baklavas and the hazelnut tiramisu. We can't guarantee anything is nut-free, so please ask about cross-contact before you order.",
    details: [
      "Based on our menu, the nut-containing items are the Pistachio Baklava, the Walnut Baklava and the Hazelnut Tiramisu. Dubai chocolate desserts are traditionally associated with pistachio, so ask about the Dubai Chocolate Brownie before ordering it too. The savory side of the menu, from shawarma bowls to falafel and fries, doesn't list tree nuts or peanuts.",
      "That's not the same as nut-free. Desserts with nuts are handled in the same space as the rest of the food, and we haven't verified every sauce, spice blend and packaged component for traces. For a mild preference, the savory menu is straightforward. For a real allergy, tell us when you order and ask how the item is handled, or call 858-210-9524 first.",
      "Our guide to eating out with a nut allergy has general tips for asking the right questions at any restaurant.",
      "If you're ordering for a group where someone has a nut allergy, consider skipping the nut desserts for the whole order, and let us know about the allergy so we can tell you what we know about how each item is handled.",
    ],
    relatedDishes: ["chicken-pita-bowl", "pistachio-baklava", "hazelnut-tiramisu"],
    relatedPaths: ["/guides/how-to-eat-out-with-a-nut-allergy", "/ingredients/pistachios", "/contact"],
  },
  {
    slug: "do-you-have-dairy-free-options",
    q: "Do you have dairy-free options?",
    seoTitle: "Dairy-Free Options at Pita Bowl in Mission Beach",
    metaDescription:
      "Feta, tzatziki, pepper jack and most desserts contain dairy at Pita Bowl. The Falafel Delight Wrap and falafel sides are listed vegan. Ask about cross-contact.",
    answer:
      "Some items list no dairy, including the Falafel Delight Wrap and our falafel sides, which are marked vegan. Feta, tzatziki, pepper jack and most desserts do contain dairy, and we can't guarantee against cross-contact, so ask when you order.",
    details: [
      "From our menu, the dairy shows up in a few clear places. Feta is in the Chicken Pita Bowl, Chicken Tikka Bowl, Earth Bowl and Pita Nachos. Tzatziki is a yogurt dip, and it's in the Chicken Pita and Chicken Tikka bowls. The Cali Shawarma Wrap has pepper jack cheese. Chicken tikka is traditionally marinated in yogurt, so ask about ours if you're avoiding dairy.",
      "Desserts are mostly off the table: the baklavas contain butter, the tiramisus have mascarpone, the lazy cake uses condensed milk and the brownies list butter.",
      "To build something dairy-free, start with Build Your Own Bowl, choose hummus or roasted eggplant dip instead of tzatziki, and skip the cheese. We haven't verified every sauce for dairy, so ask about the one you want. If you have a milk allergy rather than a preference, tell us when you order.",
      "Hummus, roasted eggplant dip, falafel and avocado are the most dependable dairy-free building blocks on the menu, based on what we list.",
    ],
    relatedDishes: ["falafel-wrap", "build-your-own-bowl", "falafel"],
    relatedPaths: ["/dietary/vegan", "/guides/what-is-tzatziki-made-of", "/ingredients/feta-cheese"],
  },
  {
    slug: "do-you-have-sesame-free-options",
    q: "Do you have sesame-free options?",
    seoTitle: "Sesame-Free Options at Pita Bowl: Tahini and Hummus",
    metaDescription:
      "Tahini is sesame, and hummus traditionally contains tahini, so many Pita Bowl items include sesame. See which don't and why to ask about cross-contact.",
    answer:
      "Sesame is common on our menu: tahini is made from sesame, and hummus traditionally contains tahini. A few items don't list either, but we can't guarantee sesame-free food, so ask about cross-contact before ordering.",
    details: [
      "Items that include hummus or tahini as listed: the Chicken Pita Bowl, Steak Shawarma Bowl, Chicken Tikka Bowl and Earth Bowl, plus the Zesty Chicken Wrap, Beef Wrap and Falafel Delight Wrap. Our dish copy describes our hummus as chickpeas and tahini.",
      "Items that don't list hummus or tahini include the Cali Shawarma Wrap, the Chicken and Steak Shawarma Fries, plain fries and the kids chicken tenders. A build-your-own bowl with tzatziki or roasted eggplant dip and a non-tahini sauce avoids the obvious sources too. We haven't confirmed whether our pita, falafel, spice blends or other sauces contain sesame, so ask about those specifically.",
      "Because tahini and hummus are prepped in the same kitchen as everything else, cross-contact is possible. If you have a sesame allergy, tell us when you order or call 858-210-9524 first.",
      "Some sesame is easy to spot and some isn't. Tahini is often drizzled as a sauce, but it can also hide inside dips and dressings. That's why the safest approach is to name the allergy every time you order, even for something you've had before.",
    ],
    relatedDishes: ["cali-shawarma-wrap", "steak-shawarma-fries", "build-your-own-bowl"],
    relatedPaths: ["/guides/how-to-eat-out-with-a-sesame-allergy", "/guides/what-is-tahini", "/ingredients/sesame-seeds"],
  },
  {
    slug: "is-your-falafel-vegan",
    q: "Is your falafel vegan?",
    seoTitle: "Is Pita Bowl's Falafel Vegan?",
    metaDescription:
      "Pita Bowl's falafel is marked vegan on our menu. It's chickpea-based, cooked without seed oils, and sold in sides of 3 or 5 or in bowls and wraps.",
    answer:
      "Yes, our falafel is marked vegan on the menu. It's made from chickpeas, herbs and spices and cooked without seed oils.",
    details: [
      "You can order falafel three for $7 or five for $10, or get it inside the Falafel Delight Wrap or the Earth Bowl. It's also one of the four proteins in any build-your-own bowl or wrap.",
      "What you eat it with decides whether the whole meal stays vegan. Hummus and roasted eggplant dip are plant-based; tzatziki is made with yogurt. The Falafel Delight Wrap is marked vegan as served. The Earth Bowl comes with feta, so ask for it without.",
      "Falafel is traditionally made from soaked raw chickpeas or fava beans rather than canned ones, ground with herbs and onion and then fried. That's why good falafel is green inside and crisp outside. If you need to know about shared cooking surfaces, ask us when you order.",
      "Falafel reheats well in a hot oven or air fryer if you have leftovers, and it turns soggy in the microwave. Our guide on reheating falafel walks through the details.",
    ],
    relatedDishes: ["falafel", "falafel-wrap", "earth-bowl"],
    relatedPaths: ["/guides/what-is-falafel", "/dietary/vegan", "/guides/is-falafel-healthy"],
  },
  {
    slug: "is-your-hummus-made-in-house",
    q: "Is your hummus made in-house?",
    seoTitle: "Is Pita Bowl's Hummus Made In-House? Yes, Daily",
    metaDescription:
      "Pita Bowl makes its hummus in-house every day, along with tzatziki and roasted eggplant dip. Try it with warm pita or in most of our bowls and wraps.",
    answer:
      "Yes. Our hummus is made in-house every day, as are our tzatziki and roasted eggplant dip.",
    details: [
      "Hummus is built from chickpeas and tahini, the sesame paste that gives it its nutty, rich flavor. Because tahini is sesame, hummus isn't suitable for anyone with a sesame allergy.",
      "It shows up across the menu. It's in the Chicken Pita Bowl, Steak Shawarma Bowl, Chicken Tikka Bowl and Earth Bowl, and in the Zesty Chicken, Beef and Falafel Delight wraps. To taste it on its own, order Dip & Pita for $11 and choose hummus, or add an extra dip side for $1.50.",
      "Fresh hummus is best within a few days. If you're taking some home, keep it refrigerated and covered. Our guide on how long hummus lasts covers storage in more detail.",
      "If you're new to hummus, try it plain with warm pita first, then with a protein in a bowl. It pairs especially well with falafel and steak shawarma, and it balances out spicier or more acidic toppings like pickled onions and jalapeño cilantro dressing.",
    ],
    relatedDishes: ["dip-and-pita", "earth-bowl"],
    relatedPaths: ["/guides/what-is-hummus-made-of", "/guides/hummus-tzatziki-eggplant-dip", "/guides/how-long-does-hummus-last"],
  },
  {
    slug: "what-sauces-do-you-have",
    q: "What sauces do you have?",
    seoTitle: "What Sauces Does Pita Bowl Have?",
    metaDescription:
      "Pita Bowl's sauces include garlic sauce, garlic aioli, tahini and jalapeño cilantro dressing, plus three dips. Extra sauce sides are $1 each.",
    answer:
      "Our menu items use garlic sauce, garlic aioli, tahini sauce and jalapeño cilantro dressing, alongside three dips: hummus, tzatziki and roasted eggplant. The online ordering menu shows the full current sauce list when you build a bowl or wrap.",
    details: [
      "Each signature item comes with its own pairing. Garlic sauce tops the Pita Nachos, both shawarma fries and the Zesty Chicken Wrap. Garlic aioli goes on the Cali Shawarma Wrap. Tahini dressing finishes the Chicken Pita Bowl, Chicken Tikka Bowl and Beef Wrap, and the Earth Bowl gets the herby jalapeño cilantro dressing.",
      "The dips work almost like sauces too. Hummus is creamy and nutty, tzatziki is cool and tangy from yogurt and cucumber, and roasted eggplant dip is smoky.",
      "Extra sauce on the side is $1, and an extra dip side is $1.50. Ordering dressing on the side is also a good move if you're packing food for the beach, since it keeps greens crisp. Tahini is sesame-based, and tzatziki contains dairy, so keep that in mind if you have allergies.",
      "If you're not sure which to choose, garlic sauce is the boldest, tahini is nutty and mellow, and the jalapeño cilantro dressing is the freshest and brightest. Ask at the counter if you'd like to know what's in a particular sauce.",
    ],
    relatedDishes: ["build-your-own-bowl", "pita-nachos"],
    relatedPaths: ["/guides/what-is-toum-garlic-sauce", "/guides/what-is-jalapeno-cilantro-sauce", "/guides/how-to-choose-a-dip-for-your-bowl"],
  },
  {
    slug: "what-proteins-do-you-have",
    q: "What proteins do you have?",
    seoTitle: "What Proteins Does Pita Bowl Offer?",
    metaDescription:
      "Pita Bowl offers four proteins: chicken shawarma, steak shawarma, chicken tikka and falafel. Add extra protein to any bowl or wrap as a side.",
    answer:
      "We have four proteins: chicken shawarma, steak shawarma, chicken tikka and falafel. Any of them can go in a build-your-own bowl or wrap, or be added on the side.",
    details: [
      "Chicken shawarma is seasoned and sliced thin, and it's the protein in the Chicken Pita Bowl and Zesty Chicken Wrap. Steak shawarma is richer and goes into the Steak Shawarma Bowl, Beef Wrap, Cali Shawarma Wrap, Pita Nachos and bourak. Chicken tikka has a bolder, warmer spice profile and anchors the Chicken Tikka Bowl. Falafel is the plant-based option, made from chickpeas and herbs.",
      "As add-ons, a side of chicken shawarma is $5, a side of steak is $7, a side of chicken tikka is $7, and falafel is $7 for three or $10 for five.",
      "Everything is prepped in-house daily and cooked with olive or avocado oil. If you're torn between the two chicken options, our guide on chicken tikka versus shawarma breaks down the difference.",
      "For a lighter meal, chicken shawarma over greens is a common choice. For something heartier, steak shawarma over saffron rice fills you up. Falafel works well for vegetarians and vegans, and it also makes a good second protein alongside chicken.",
    ],
    relatedDishes: ["chicken-pita-bowl", "steak-shawarma-bowl", "chicken-tikka-bowl"],
    relatedPaths: ["/guides/chicken-tikka-vs-shawarma", "/guides/chicken-vs-steak-shawarma", "/faq/can-i-get-extra-protein"],
  },
  {
    slug: "can-i-customize-my-bowl",
    q: "Can I customize my bowl?",
    seoTitle: "Can I Customize My Bowl at Pita Bowl?",
    metaDescription:
      "Yes. Build Your Own Bowl lets you pick a base, dip, protein, toppings and sauce, and signature bowls can be adjusted, like swapping rice for greens.",
    answer:
      "Yes. Build Your Own Bowl lets you choose your base, dip, protein, toppings and sauce, and you can usually adjust our signature bowls too, such as swapping rice for extra greens.",
    details: [
      "Build Your Own Bowl starts at $15. You pick a base such as rice or greens, one of three dips (hummus, tzatziki or roasted eggplant), a protein (chicken shawarma, steak shawarma, chicken tikka or falafel), your toppings and a sauce.",
      "Signature bowls are flexible as well. Common requests include holding the feta, trading tzatziki for more hummus, or putting greens in place of rice for a lighter meal. Online ordering through our website shows the options for each item, which is the easiest way to get it exactly right.",
      "If you want more on top, add avocado for $2.50, extra dip for $1.50 or another serving of protein from the extras menu. Customizing is also the simplest way to eat around an allergy, but tell us about it directly rather than relying on removing an ingredient.",
      "If you can't decide, start from a signature bowl you like and make one or two changes rather than building from scratch. That keeps the flavors balanced while still getting the bowl you want.",
    ],
    relatedDishes: ["build-your-own-bowl", "chicken-pita-bowl"],
    relatedPaths: ["/guides/what-is-a-mediterranean-bowl", "/guides/how-to-choose-a-dip-for-your-bowl", "/faq/can-i-get-extra-protein"],
  },
  {
    slug: "can-i-get-extra-protein",
    q: "Can I get extra protein?",
    seoTitle: "Can I Add Extra Protein to My Bowl or Wrap?",
    metaDescription:
      "Add extra protein to any Pita Bowl order: chicken shawarma $5, steak $7, chicken tikka $7, or falafel at $7 for three and $10 for five.",
    answer:
      "Yes. You can add a side of chicken shawarma for $5, steak for $7, chicken tikka for $7, or falafel at three for $7 or five for $10.",
    details: [
      "Extra protein is listed under Build Your Own Extras on the menu, and you can add it to any bowl or wrap. Some guests mix proteins, for example a Chicken Tikka Bowl with a side of steak, or an Earth Bowl with extra falafel.",
      "Chicken shawarma is the least expensive way to bulk up an order. Steak and chicken tikka cost a little more. Falafel is the plant-based route and pairs with any dip.",
      "If you're eating after a workout or trying to hit a protein target, the simplest approach is a bowl with a lean protein, greens, and a side of extra chicken. Hummus and the Earth Bowl's black lentils add some plant protein on top. Add the extras when ordering online so they're packed with your meal.",
      "Extra protein also works on starters. A side of steak on the Pita Nachos or extra chicken on the shawarma fries turns a shareable plate into a full meal.",
    ],
    relatedDishes: ["chicken-tikka-bowl", "build-your-own-bowl"],
    relatedPaths: ["/dietary/high-protein", "/faq/what-proteins-do-you-have", "/guides/high-protein-bowl"],
  },
  {
    slug: "whats-your-most-popular-dish",
    q: "What's your most popular dish?",
    seoTitle: "What's Pita Bowl's Most Popular Dish?",
    metaDescription:
      "Pita Bowl's featured customer favorites are the Cali Shawarma Wrap, Earth Bowl and Chicken Tikka Bowl. The Chicken Pita Bowl is a common first order too.",
    answer:
      "Our featured customer favorites are the Cali Shawarma Wrap, the Earth Bowl and the Chicken Tikka Bowl. The Chicken Pita Bowl is the bowl most first-timers start with.",
    details: [
      "Each of the favorites suits a different appetite. The Cali Shawarma Wrap ($22) is the indulgent one, with steak shawarma, pepper jack, fries, guacamole and garlic aioli all rolled together. The Earth Bowl ($15) is vegetarian, with black lentils, falafel, hummus and eggplant dip. The Chicken Tikka Bowl ($19) is the bold, high-protein option over saffron rice.",
      "Among the appetizers, the Pita Nachos and the bourak are marked as signatures, and both are steak-based. On the sweet side, our pistachio baklava, walnut baklava, tiramisus and lazy cake are signatures as well.",
      "If you can't decide, pair a bowl with something to share, like Chicken Shawarma Fries or Dip & Pita, and you'll get a good sense of the kitchen in one order.",
      "Our menu page shows every item with ingredients and prices, so you can compare the favorites side by side before ordering. If you're with a group, ordering a few different favorites and sharing is a good way to find your own.",
    ],
    relatedDishes: ["cali-shawarma-wrap", "earth-bowl", "chicken-tikka-bowl"],
    relatedPaths: ["/menu", "/faq/what-should-i-order-on-my-first-visit", "/faq/what-is-the-cali-shawarma-wrap"],
  },
  {
    slug: "what-should-i-order-on-my-first-visit",
    q: "What should I order on my first visit?",
    seoTitle: "What to Order at Pita Bowl on Your First Visit",
    metaDescription:
      "First time at Pita Bowl? Start with the Chicken Pita Bowl or the Steak Shawarma Bowl, add Dip & Pita to share, and finish with pistachio baklava.",
    answer:
      "Start with the Chicken Pita Bowl, our most common first order, or the Steak Shawarma Bowl if you want something richer. Add Dip & Pita to share and a pistachio baklava for after.",
    details: [
      "The Chicken Pita Bowl ($16) is an easy introduction: chicken shawarma over white rice and greens with hummus, tzatziki, cucumbers, feta, corn and tahini dressing. The Steak Shawarma Bowl ($19) is our signature bowl, with saffron rice, hummus, roasted eggplant dip, olives and pickled onions.",
      "If you'd rather eat with your hands, the Cali Shawarma Wrap is the big, beach-day option, and the Zesty Chicken Wrap ($16) is lighter. Vegetarians should go straight to the Earth Bowl.",
      "For a group, add a Dip & Pita ($11) and an order of bourak, our steak-filled Middle Eastern egg rolls, two for $7. Then finish with baklava at $5 a piece. Ordering online ahead of time makes it easy to read through the full menu before you arrive.",
      "If you have dietary restrictions, check the ingredient list on each item first. Several bowls include feta, tzatziki or tahini, and it's easy to ask us to adjust them.",
    ],
    relatedDishes: ["chicken-pita-bowl", "steak-shawarma-bowl", "bourak"],
    relatedPaths: ["/menu", "/faq/whats-your-most-popular-dish", "/guides/what-is-shawarma"],
  },
  {
    slug: "do-you-have-a-high-protein-option",
    q: "Do you have a high-protein option?",
    seoTitle: "High-Protein Options at Pita Bowl in San Diego",
    metaDescription:
      "Pita Bowl's high-protein picks include the Chicken Tikka Bowl, Steak Shawarma Bowl and Chicken Pita Bowl. Add extra chicken or steak to any order.",
    answer:
      "Yes. The Chicken Tikka Bowl, Steak Shawarma Bowl and Chicken Pita Bowl are all marked high-protein, and you can add extra chicken, steak, chicken tikka or falafel to any bowl or wrap.",
    details: [
      "Most of the menu is built around a full serving of protein. Besides the three bowls, the Zesty Chicken Wrap, Beef Wrap, Cali Shawarma Wrap, Pita Nachos and both shawarma fries carry our high-protein tag.",
      "To push it further, stack a side of protein on top of a bowl. Chicken shawarma is $5 as an add-on; steak and chicken tikka are $7 each. A bowl with a double serving of chicken over greens is a simple way to go big on protein.",
      "Plant-based eaters have options too. The Earth Bowl combines falafel, hummus and black lentils, all of which bring protein, and you can add more falafel by three or five. We don't publish full nutrition facts for our dishes, so if you're tracking closely, treat any estimate as approximate.",
      "Our high-protein dietary page groups these dishes together, and our high-protein bowl guide explains how to build one around your goals.",
    ],
    relatedDishes: ["chicken-tikka-bowl", "steak-shawarma-bowl", "earth-bowl"],
    relatedPaths: ["/dietary/high-protein", "/guides/high-protein-bowl", "/faq/is-pita-bowl-good-after-a-workout"],
  },
  {
    slug: "do-you-have-low-carb-options",
    q: "Do you have low-carb options?",
    seoTitle: "Low-Carb Options at Pita Bowl: Bowls Without Rice",
    metaDescription:
      "Go low-carb at Pita Bowl by ordering a bowl with greens instead of rice, a meat protein, and lighter dips. Skip the pita, fries and tortilla wraps.",
    answer:
      "Yes, mostly by customizing. Order a bowl with greens instead of rice, choose chicken shawarma, steak or chicken tikka, and skip the pita, pita chips, fries and wraps.",
    details: [
      "Every signature bowl includes a starch: white rice in the Chicken Pita Bowl, saffron rice in the Steak Shawarma and Chicken Tikka bowls, and black lentils in the Earth Bowl. Asking for extra greens in place of rice is the simplest swap, or use Build Your Own Bowl to start from greens.",
      "From there, pile on protein and vegetables. Cucumbers, pickled onions, olives and the roasted eggplant dip keep it flavorful. Hummus is made from chickpeas and adds some carbs, so go easy if you're counting strictly. Corn adds a little too. Avocado ($2.50) is a good addition for fat and fullness.",
      "Wraps, fries, Pita Nachos and Dip & Pita are the higher-carb parts of the menu. Our low-carb bowl guide walks through a few combinations that still feel like a full meal.",
      "If you also want to skip the sauce sugar or extra oil, ask for dressing on the side and add as much as you like. Lean proteins like chicken shawarma and chicken tikka fit low-carb eating well.",
    ],
    relatedDishes: ["build-your-own-bowl", "steak-shawarma-bowl"],
    relatedPaths: ["/guides/how-to-build-a-low-carb-bowl", "/dietary/high-protein", "/faq/can-i-customize-my-bowl"],
  },
  {
    slug: "do-you-have-desserts",
    q: "Do you have desserts?",
    seoTitle: "Desserts at Pita Bowl: Baklava, Tiramisu and More",
    metaDescription:
      "Pita Bowl's housemade desserts include pistachio and walnut baklava, tiramisu, hazelnut tiramisu, lazy cake, brownies, cupcakes and cake pops.",
    answer:
      "Yes. We have housemade pistachio and walnut baklava ($5 each), classic and hazelnut tiramisu, lazy cake, a Dubai Chocolate Brownie and a marshmallow brownie ($12 each), plus cupcakes and cake pops.",
    details: [
      "Baklava is the traditional choice: layers of phyllo with nuts, honey and butter. Pistachio is richer and slightly floral; walnut is earthier. Both are $5 a piece, which makes them an easy add-on to any meal.",
      "The tiramisus are made with espresso-soaked ladyfingers and mascarpone, and the hazelnut version adds hazelnut. Lazy cake is a no-bake chocolate and biscuit cake made with condensed milk. For smaller treats, a cake pop is $2, a mini cupcake is $1.50 and a full cupcake is $6.",
      "Allergy notes: both baklavas contain nuts, butter and wheat, the hazelnut tiramisu contains hazelnut, and most desserts contain dairy. If you avoid seed oils strictly, ask about a specific dessert, since some components like biscuits or chocolate may contain them.",
      "Baklava travels better than the cream-based desserts, so it's the best pick if you're taking dessert to the beach. Tiramisu and lazy cake are best kept cool and eaten soon after pickup.",
    ],
    relatedDishes: ["pistachio-baklava", "tiramisu", "lazy-cake"],
    relatedPaths: ["/guides/middle-eastern-desserts-guide", "/guides/what-is-baklava", "/faq/are-your-desserts-made-in-house"],
  },
  {
    slug: "are-your-desserts-made-in-house",
    q: "Are your desserts made in-house?",
    seoTitle: "Are Pita Bowl's Desserts Made In-House?",
    metaDescription:
      "Pita Bowl's desserts are housemade, from pistachio and walnut baklava to tiramisu, lazy cake and brownies. Here's what's in each and allergy notes.",
    answer:
      "Yes. Our desserts are housemade, including the baklava, tiramisus, lazy cake, brownies, cupcakes and cake pops.",
    details: [
      "Some of them include ingredients like the biscuits in lazy cake, the ladyfingers in tiramisu or the chocolate in the brownies, and those can contain seed oils. Because of that, we don't make a seed-oil-free claim for desserts the way we do for our savory cooking. Ask about a specific item if that matters to you.",
      "What's in them, from our menu: the baklavas are phyllo, nuts, honey and butter. Tiramisu is espresso-soaked ladyfingers, mascarpone and cocoa, and the hazelnut version adds hazelnut. Lazy cake is biscuit, chocolate and condensed milk. The Dubai Chocolate Brownie lists chocolate, butter, flour and sugar.",
      "Baklava is the most traditional pairing with Middle Eastern food. Tiramisu is Italian, but it's become a favorite at many Mediterranean spots.",
      "If you can't decide, a single piece of baklava is a small, inexpensive way to finish a meal. The tiramisus and lazy cake are bigger and easier to share across the table.",
    ],
    relatedDishes: ["walnut-baklava", "hazelnut-tiramisu", "dubai-chocolate-brownie"],
    relatedPaths: ["/faq/do-you-have-desserts", "/guides/pistachio-vs-walnut-baklava", "/guides/what-is-lazy-cake"],
  },
  {
    slug: "what-drinks-do-you-have",
    q: "What drinks do you have?",
    seoTitle: "What Drinks Does Pita Bowl Have?",
    metaDescription:
      "Pita Bowl carries bottled drinks: Coca-Cola, Diet Coke, kombucha, Olipop, yerba mate, Celsius, sparkling waters, coconut water, sports drinks and more.",
    answer:
      "We carry bottled and canned drinks, including Coca-Cola, Diet Coke, Canada Dry ginger ale, kombucha, Olipop, yerba mate, Celsius, Bai, BODYARMOR, coconut water, Perrier, Sanpellegrino and water. Most drinks are $4.",
    details: [
      "Sodas: Coca-Cola and Diet Coke in bottles ($4), bottled Canada Dry ginger ale ($5) and Olipop prebiotic soda ($4).",
      "Energy and functional drinks: yerba mate ($4), Celsius energy drink ($4), Bai ($4), BODYARMOR sports drink ($4), kombucha ($5), Joy Burst ($4), Glow Sparkling ($5), a pineapple drink ($4) and a non-alcoholic option listed as NA Drink / Sip Beer ($5).",
      "Water: still water ($2), a 1-liter bottle ($4), sparkling water ($2), Perrier ($4), Sanpellegrino ($6), mini Sanpellegrino ($3) and coconut water ($4).",
      "For a beach day, the 1-liter water or coconut water is the practical pick. Stock can vary, so the online menu shows what's available today.",
      "If you're avoiding sugar, the waters, Perrier, Sanpellegrino and Diet Coke are the simplest options. Kombucha and Olipop are lighter on sugar than regular soda, while BODYARMOR and coconut water are popular after time in the sun. For caffeine, yerba mate and Celsius are the two picks.",
    ],
    relatedDishes: [],
    relatedPaths: ["/menu", "/faq/do-you-have-kombucha", "/guides/how-to-pack-a-beach-lunch-that-holds-up"],
  },
  {
    slug: "do-you-have-kombucha",
    q: "Do you have kombucha?",
    seoTitle: "Does Pita Bowl Have Kombucha?",
    metaDescription:
      "Yes, Pita Bowl sells kombucha for $5. It sits alongside Olipop, yerba mate, coconut water and sparkling waters in our drink lineup in Mission Beach.",
    answer:
      "Yes. We sell kombucha for $5.",
    details: [
      "Kombucha is fermented tea, made by adding a culture of bacteria and yeast to sweetened tea and letting it ferment. The result is lightly fizzy and tangy, and many people drink it as a lower-sugar alternative to soda. Flavors depend on what we have in stock, so check the online menu or ask at the counter.",
      "If kombucha isn't quite what you want, we have a few other drinks in the same spirit. Olipop is a prebiotic soda ($4), yerba mate is a caffeinated herbal tea ($4), and Glow Sparkling is $5. For something unsweetened, Perrier, Sanpellegrino and plain sparkling water are all on the menu.",
      "The tartness of kombucha goes well with richer dishes like the Steak Shawarma Bowl or the Cali Shawarma Wrap, where it cuts through the garlic and meat.",
      "Kombucha naturally contains a small amount of caffeine from the tea and traces of alcohol from fermentation, though commercial kombucha sold as non-alcoholic is kept below legal limits.",
    ],
    relatedDishes: ["steak-shawarma-bowl"],
    relatedPaths: ["/faq/what-drinks-do-you-have", "/menu", "/guides/how-to-make-takeout-healthier"],
  },
  {
    slug: "do-you-offer-catering",
    q: "Do you offer catering?",
    seoTitle: "Does Pita Bowl Offer Catering in San Diego?",
    metaDescription:
      "Yes, Pita Bowl offers catering. Send a quote request with your event date, guest count and notes, and we'll get back to you with details and pricing.",
    answer:
      "Yes. Fill out the Request a Quote form on our catering page with your event date, number of guests and any notes, and we'll get back to you with details and pricing.",
    details: [
      "Our food is a natural fit for groups because it's customizable. Bowls cover meat eaters, vegetarians and anyone keeping it gluten-friendly, and falafel gives plant-based guests a real main dish rather than a side salad.",
      "We don't publish fixed catering packages or prices. Every quote is based on what you tell us, so the more detail you put in the notes, the better: the kind of event, dietary needs, whether you want bowls, wraps or shareable items like Dip & Pita and falafel, and any timing details.",
      "Our catering pages walk through ideas for office lunches, birthday parties, team events and beach gatherings in Mission Beach, and the quote form lives at the bottom of the main catering page.",
      "If your event is small and you already know what everyone wants, a large online pickup order may be simpler than a catering quote. Either way, if you have questions before you start, call 858-210-9524 or email orders@thepitabowl.com.",
    ],
    relatedDishes: ["build-your-own-bowl", "falafel"],
    relatedPaths: ["/catering", "/faq/how-do-i-request-a-catering-quote", "/catering/office-lunch", "/catering/beach-parties"],
  },
  {
    slug: "how-do-i-request-a-catering-quote",
    q: "How do I request a catering quote?",
    seoTitle: "How to Request a Pita Bowl Catering Quote",
    metaDescription:
      "Request a Pita Bowl catering quote on our catering page. Add your name, email, phone, event date, guest count and notes, and we'll reply with pricing.",
    answer:
      "Go to the Request a Quote form on our catering page and enter your name, email, phone number, event date, number of guests and any notes. We'll get back to you with details and pricing.",
    details: [
      "The form is short, but the notes field is where a good quote comes from. Useful things to include: what the event is, roughly what time you want to eat, how many vegetarian, vegan or gluten-friendly guests you expect, any allergies, and whether you have dishes in mind, like the Steak Shawarma Bowl or falafel.",
      "An accurate guest count matters most. If it's still moving, give your best estimate and say so in the notes.",
      "Submitting the form doesn't commit you to anything. It just starts the conversation. If you'd rather ask a quick question first, email orders@thepitabowl.com or call 858-210-9524. For smaller groups you can also simply place a large online order for pickup.",
      "It's also worth mentioning in the notes if you're planning for a beach or park setting, since bowls and wraps travel differently. Bowls with sauces packed on the side usually hold up best for outdoor events in Mission Beach.",
    ],
    relatedDishes: [],
    relatedPaths: ["/catering", "/faq/do-you-offer-catering", "/guides/how-to-order-food-for-a-group"],
  },
  {
    slug: "do-you-have-discounts",
    q: "Do you have discounts?",
    seoTitle: "Does Pita Bowl Have Discounts? FIT Member 15% Off",
    metaDescription:
      "Pita Bowl's current discount is 15% off for FIT members. See our offers page for details, or ask at the counter about how to use it on your order.",
    answer:
      "Our known discount is 15% off for FIT members. Check the offers page for current details.",
    details: [
      "The FIT member discount is the standing offer we can confirm. If you're a member, mention it when you order and ask how to apply it, especially when ordering online, since the process can differ from ordering at the counter.",
      "We don't advertise other ongoing promotions here. Any new offers will appear on the offers page, so that's the place to check before you visit. You can also call 858-210-9524 if you're unsure whether something applies.",
      "If you're looking to stretch your budget without a discount, Build Your Own Bowl starts at $15, falafel sides start at $7, and Dip & Pita is $11 to share. Water is $2. Our guide on eating Mediterranean on a budget has more ideas.",
      "We'd rather be clear about what we know than suggest offers that may not apply. If you hear about a deal elsewhere, check with us directly before counting on it.",
    ],
    relatedDishes: ["build-your-own-bowl"],
    relatedPaths: ["/offers", "/faq/what-is-the-fit-member-discount", "/guides/how-to-eat-mediterranean-on-a-budget"],
  },
  {
    slug: "what-is-the-fit-member-discount",
    q: "What is the FIT member discount?",
    seoTitle: "Pita Bowl FIT Member Discount: 15% Off",
    metaDescription:
      "FIT members get 15% off at Pita Bowl in Mission Beach. Here's what we can confirm about the discount and where to check for details before you order.",
    answer:
      "FIT members get 15% off at Pita Bowl. Ask at the counter or check our offers page for how to use it.",
    details: [
      "That's the core of it: a 15% discount for FIT members. We'd rather point you to the offers page or a quick call than guess at details like how membership is verified or whether it stacks with anything else. Call 858-210-9524 if you need to confirm before ordering.",
      "If you're ordering with training in mind, the Chicken Tikka Bowl and Steak Shawarma Bowl are both high-protein, and adding a side of chicken shawarma is $5 before the discount. Everything savory is cooked with olive or avocado oil rather than seed oils.",
      "If you're coming after a workout, ordering ahead online means the food can be ready when you arrive. Our post-workout guide covers how to build a bowl around recovery.",
      "If you have questions about whether the discount covers a specific item or order, ask us when you place it rather than at the end, so there are no surprises at checkout.",
    ],
    relatedDishes: ["chicken-tikka-bowl", "steak-shawarma-bowl"],
    relatedPaths: ["/offers", "/faq/do-you-have-discounts", "/guides/how-to-order-for-a-post-workout-meal"],
  },
  {
    slug: "can-i-order-for-a-large-group",
    q: "Can I order for a large group?",
    seoTitle: "Can I Order Pita Bowl for a Large Group?",
    metaDescription:
      "Order for a group online for pickup, or request a catering quote for bigger events. Tips on mixing bowls, wraps and shareables for a crowd at Pita Bowl.",
    answer:
      "Yes. For a group you can place a large online order for pickup, and for events we take catering requests through the Request a Quote form on our catering page.",
    details: [
      "Which route to pick depends on size and planning. A handful of friends or a small team can order online like any other pickup. For a larger event, or when you'd like us to help plan quantities, the catering quote form is the better fit; we'll reply with details and pricing.",
      "A mix tends to work best for groups. Bowls hold up well and are easy to label, wraps are easy to eat standing up, and shareables like Dip & Pita, falafel by the five and Chicken Shawarma Fries fill the table. Include at least one vegetarian option, like the Earth Bowl or Falafel Delight Wrap.",
      "Put names or dietary notes on individual items when you order online, and give us a heads-up on allergies. For big pickups, ordering earlier in the day helps.",
      "If you're not sure how much to get, a rough rule of thumb is one bowl or wrap per person, plus a couple of shareable plates for every few guests. Desserts like baklava are easy to add at the end since they're priced per piece.",
    ],
    relatedDishes: ["earth-bowl", "chicken-shawarma-fries", "dip-and-pita"],
    relatedPaths: ["/catering", "/guides/how-to-order-food-for-a-group", "/catering/large-group-lunch-50-people", "/faq/how-do-i-request-a-catering-quote"],
  },
  {
    slug: "how-far-is-pita-bowl-from-the-beach",
    q: "How far is Pita Bowl from the beach?",
    seoTitle: "How Far Is Pita Bowl From the Beach?",
    metaDescription:
      "Pita Bowl sits on the bay side of Mission Blvd, a few minutes' walk from the Mission Beach boardwalk and ocean, with Mission Bay close by on the other side.",
    answer:
      "Just a few minutes on foot. We're on the bay side of Mission Blvd in Mission Beach, a short walk from the boardwalk and the ocean, with the Mission Bay shoreline close by in the other direction.",
    details: [
      "Mission Beach is a thin peninsula, only a few blocks wide, so you're never far from water. Walk west from 3833 Mission Blvd and you reach the boardwalk and the Pacific. Walk east and you reach the calmer bay side, which many families prefer for wading and paddling.",
      "That closeness is why most of our orders are takeout. Bowls travel well in the sand, and wraps are easy to eat with one hand. Ask for dressing on the side if you want greens to stay crisp for a while.",
      "On busy summer days, parking near the beach fills up early, and walking or biking down the boardwalk is often faster than driving between spots. Our guides cover beach parking and how to pack a lunch that holds up in the heat.",
      "If you're walking from farther up or down the peninsula, Mission Blvd is the main north-south route, and the boardwalk runs parallel to it along the ocean side.",
    ],
    relatedDishes: ["cali-shawarma-wrap", "chicken-pita-bowl"],
    relatedPaths: ["/guides/how-to-pack-a-beach-lunch-that-holds-up", "/guides/mission-bay-vs-ocean-beaches", "/location"],
  },
  {
    slug: "how-far-is-pita-bowl-from-belmont-park",
    q: "How far is Pita Bowl from Belmont Park?",
    seoTitle: "How Far Is Pita Bowl From Belmont Park?",
    metaDescription:
      "Pita Bowl is a few minutes' walk from Belmont Park in Mission Beach. Grab bowls, wraps or kids chicken tenders at 3833 Mission Blvd before or after the rides.",
    answer:
      "Pita Bowl is a few minutes' walk from Belmont Park, at 3833 Mission Blvd on the bay side of the street.",
    details: [
      "Belmont Park is the seaside amusement park in the middle of Mission Beach, best known for the Giant Dipper, its historic wooden roller coaster. It sits right by the boardwalk, so from the park you can stroll over to us on Mission Blvd without moving the car.",
      "A lot of families stop in before or after a day at the park. The kids meal (three chicken tenders and fries for $12) keeps younger riders happy, and adults tend to go for a shawarma bowl or the Cali Shawarma Wrap. Shawarma fries are easy to share while you decide what's next.",
      "If you're spending the whole day in the area, ordering ahead online lets you time pickup between rides or beach breaks. Our guide to food near Belmont Park has more on planning a day there.",
      "If you're arriving by car, the Belmont Park area is easy to reach from W Mission Bay Dr, which crosses onto the peninsula near the park.",
    ],
    relatedDishes: ["kids-chicken-tenders", "chicken-shawarma-fries"],
    relatedPaths: ["/guides/food-near-belmont-park", "/guides/things-to-do-near-mission-beach-with-kids", "/faq/where-are-you-located"],
  },
  {
    slug: "is-pita-bowl-good-for-kids",
    q: "Is Pita Bowl good for kids?",
    seoTitle: "Is Pita Bowl Good for Kids? Family Picks",
    metaDescription:
      "Pita Bowl works well for families: a kids meal of chicken tenders and fries, simple build-your-own bowls, warm pita with dip, and small treats like cake pops.",
    answer:
      "Yes. We have a kids meal of three chicken tenders with fries and a side sauce, and simple, customizable bowls and pita that most kids like.",
    details: [
      "Kids who are new to Middle Eastern food usually warm up through familiar textures. Warm pita with hummus, plain fries, or a bowl of rice with chicken shawarma are all easy starting points. Build Your Own Bowl lets you keep a child's order plain while the adults go for the full signature bowls.",
      "We're a few minutes' walk from Belmont Park and the boardwalk, so it's an easy stop on a family beach day. Everything savory is cooked with olive or avocado oil, and ingredients are prepped fresh each day.",
      "For dessert, a $2 cake pop or $1.50 mini cupcake is the right size for small kids. If your child has a nut, sesame, dairy or gluten allergy, ask before ordering: baklava and hazelnut tiramisu contain nuts, hummus and tahini contain sesame, and several dishes include feta or tzatziki.",
      "Sharing plates like Dip & Pita or shawarma fries also let kids try new foods without pressure.",
    ],
    relatedDishes: ["kids-chicken-tenders", "dip-and-pita", "build-your-own-bowl"],
    relatedPaths: ["/dietary/kid-friendly", "/guides/how-to-feed-picky-eaters-mediterranean-food", "/faq/do-you-have-a-kids-menu"],
  },
  {
    slug: "is-pita-bowl-good-after-a-workout",
    q: "Is Pita Bowl good after a workout?",
    seoTitle: "Is Pita Bowl Good After a Workout?",
    metaDescription:
      "A Pita Bowl bowl with chicken, steak or chicken tikka over rice and greens is a solid post-workout meal. Add extra protein for $5 to $7.",
    answer:
      "It's a good fit. Our bowls pair a full serving of chicken shawarma, steak or chicken tikka with rice and greens, and you can add extra protein from $5.",
    details: [
      "After a workout, most people want protein plus some carbohydrates to refuel. A Chicken Tikka Bowl or Steak Shawarma Bowl over saffron rice covers both. The Chicken Pita Bowl, over white rice, is a slightly lighter option.",
      "If you want more protein, add a side of chicken shawarma ($5), steak ($7) or chicken tikka ($7). If you'd rather keep carbs lower on a rest day, ask for greens instead of rice. Plant-based athletes can go with the Earth Bowl, which combines falafel, hummus and black lentils, and add extra falafel.",
      "We cook with olive and avocado oil, not seed oils, and prep everything fresh daily. We don't publish nutrition facts, so if you track macros precisely, treat any numbers as estimates. FIT members get 15% off.",
      "Hydration matters too. Water, coconut water and BODYARMOR are all on the drinks menu if you're coming in after a long run on the boardwalk or a session in the water.",
    ],
    relatedDishes: ["chicken-tikka-bowl", "steak-shawarma-bowl", "earth-bowl"],
    relatedPaths: ["/guides/how-to-order-for-a-post-workout-meal", "/dietary/high-protein", "/faq/what-is-the-fit-member-discount"],
  },
  {
    slug: "what-is-a-pita-bowl",
    q: "What is a Pita Bowl?",
    seoTitle: "What Is a Pita Bowl? Mediterranean Bowls Explained",
    metaDescription:
      "A pita bowl is a Mediterranean-style bowl: rice or greens, a dip like hummus, a protein like shawarma or falafel, toppings and sauce. Here's how ours work.",
    answer:
      "A pita bowl is a Mediterranean-style bowl that takes what you'd normally find in a pita sandwich, like shawarma, falafel, hummus and fresh vegetables, and serves it over rice or greens. Pita Bowl is also the name of our restaurant in Mission Beach.",
    details: [
      "Our bowls follow a simple structure: a base, a dip, a protein, toppings and a sauce. Bases include white rice, saffron rice, mixed greens and black lentils. Dips are hummus, tzatziki or roasted eggplant. Proteins are chicken shawarma, steak shawarma, chicken tikka or falafel.",
      "Our namesake dish, the Chicken Pita Bowl, is chicken shawarma over white rice and greens with hummus, tzatziki, cucumbers, feta, corn and tahini dressing. It doesn't actually contain pita, which is why it's tagged gluten-friendly. If you want bread with it, add a side of pita or pita chips.",
      "The bowl format grew popular because it's easy to customize and easy to eat on the go. Compared with a wrap, it's easier to split, adjust for diets and pack for the beach.",
      "If you're new to the format, the Build Your Own Bowl is a good way to learn what you like. Try a different dip or protein each time until you find your combination.",
    ],
    relatedDishes: ["chicken-pita-bowl", "build-your-own-bowl"],
    relatedPaths: ["/guides/what-is-a-mediterranean-bowl", "/about", "/faq/whats-the-difference-between-your-bowls-and-wraps"],
  },
  {
    slug: "whats-the-difference-between-your-bowls-and-wraps",
    q: "What's the difference between your bowls and wraps?",
    seoTitle: "Pita Bowl Bowls vs Wraps: What's the Difference?",
    metaDescription:
      "Bowls serve shawarma, falafel and dips over rice, greens or lentils. Wraps roll similar fillings in warm pita or a toasted tortilla. Here's how to choose.",
    answer:
      "Bowls serve the protein, dips and toppings over rice, greens or lentils. Wraps roll similar fillings into warm pita or a toasted tortilla, so they're easier to eat on the go.",
    details: [
      "Bowls are the more flexible format. They hold more toppings, they're simpler to split, and our four signature bowls are tagged gluten-friendly because they contain no bread. Bowls run $15 to $19.",
      "Wraps are built for walking. The Zesty Chicken Wrap ($16), Beef Wrap ($20), Falafel Delight Wrap ($15) and the loaded Cali Shawarma Wrap ($22) each come with their own sauce and fillings, and Build Your Own Wrap ($15) lets you choose warm pita or toasted tortilla. Pita is softer and closer to a classic shawarma sandwich; tortilla is toasted and holds a bit more.",
      "If you like a particular wrap but want it on a plate, ask for the same ingredients as a Build Your Own Bowl. For a long beach day, bowls with dressing on the side usually hold up better than wraps.",
      "Bowls are also easier to customize for diets. Wraps always include pita or tortilla, while bowls can be built entirely on greens, rice or lentils.",
    ],
    relatedDishes: ["build-your-own-bowl", "build-your-own-wrap", "zesty-chicken-wrap"],
    relatedPaths: ["/guides/bowl-vs-wrap-which-should-you-order", "/guides/how-to-keep-wraps-from-getting-soggy", "/faq/can-i-get-a-wrap-in-a-tortilla"],
  },
  {
    slug: "can-i-get-a-wrap-in-a-tortilla",
    q: "Can I get a wrap in a tortilla?",
    seoTitle: "Can I Get My Pita Bowl Wrap in a Tortilla?",
    metaDescription:
      "Yes. Build Your Own Wrap lets you choose warm pita or a toasted tortilla, and the Falafel Delight Wrap comes in a tortilla. Here's how they compare.",
    answer:
      "Yes. Build Your Own Wrap lets you choose between warm pita and a toasted tortilla, and the Falafel Delight Wrap comes in a tortilla as listed.",
    details: [
      "Our wraps are made in either warm pita or toasted tortilla. With Build Your Own Wrap ($15) you choose the wrap first, then a dip, protein, toppings and sauce. If you'd like one of the signature wraps, like the Zesty Chicken or Beef Wrap, in the other style, ask when you order or check the options online.",
      "The two feel quite different. Pita is soft, slightly chewy and closer to the traditional shawarma sandwich you'd find in the Levant. A toasted tortilla is thinner, a little crisp on the outside, and tends to hold a big filling together better, which is handy for a loaded wrap with fries inside.",
      "Neither is gluten-free. If you're avoiding gluten, choose a bowl instead. Our pita versus tortilla guide goes deeper into how each one holds up.",
      "If your wrap has a lot of sauce, eat it soon after pickup to keep it from getting soggy. Our guide to keeping wraps from getting soggy has a few more tips.",
    ],
    relatedDishes: ["build-your-own-wrap", "falafel-wrap"],
    relatedPaths: ["/guides/pita-vs-tortilla-for-wraps", "/guides/what-is-pita-bread", "/faq/whats-the-difference-between-your-bowls-and-wraps"],
  },
  {
    slug: "how-much-is-a-bowl",
    q: "How much is a bowl?",
    seoTitle: "How Much Is a Bowl at Pita Bowl? Current Prices",
    metaDescription:
      "Bowls at Pita Bowl cost $15 to $19: Build Your Own and Earth Bowl $15, Chicken Pita Bowl $16, Steak Shawarma and Chicken Tikka Bowls $19.",
    answer:
      "Our bowls are $15 to $19. Build Your Own Bowl and the Earth Bowl are $15, the Chicken Pita Bowl is $16, and the Steak Shawarma Bowl and Chicken Tikka Bowl are $19.",
    details: [
      "Here's what each price gets you. The Earth Bowl ($15) is black lentils, greens, falafel, hummus, eggplant dip and feta. The Chicken Pita Bowl ($16) is chicken shawarma over white rice with hummus and tzatziki. The Steak Shawarma Bowl and Chicken Tikka Bowl ($19 each) come over saffron rice with two dips or a dip and tahini.",
      "Build Your Own Bowl starts at $15, and add-ons change the total. Avocado is $2.50, an extra dip side is $1.50, an extra sauce side is $1, and extra protein runs $5 for chicken shawarma or $7 for steak or chicken tikka.",
      "Prices here match our current menu, but the online ordering page always has the most up-to-date total, including any tax. FIT members get 15% off.",
      "For comparison, wraps run $15 to $22, and appetizers like Dip & Pita or shawarma fries range from $11 to $15. Desserts start at $1.50 for a mini cupcake.",
    ],
    relatedDishes: ["build-your-own-bowl", "chicken-pita-bowl", "steak-shawarma-bowl"],
    relatedPaths: ["/menu", "/faq/is-pita-bowl-expensive", "/offers"],
  },
  {
    slug: "is-pita-bowl-expensive",
    q: "Is Pita Bowl expensive?",
    seoTitle: "Is Pita Bowl Expensive? Menu Prices Explained",
    metaDescription:
      "Most Pita Bowl meals cost $15 to $22. Bowls run $15 to $19, wraps $15 to $22, and appetizers $7 to $15. Here's how to eat well for less.",
    answer:
      "Most meals land between $15 and $22. Bowls are $15 to $19, wraps are $15 to $22, and appetizers range from $7 to $15.",
    details: [
      "Whether that feels expensive depends on what you compare it to. Every bowl and wrap is a full meal with a protein, dips and vegetables, made from ingredients prepped in-house daily and cooked in olive or avocado oil rather than cheaper seed oils.",
      "The most budget-friendly orders are Build Your Own Bowl ($15), the Earth Bowl ($15), the Falafel Delight Wrap ($15) and the Zesty Chicken Wrap ($16). A side of fries is $4, three falafel are $7, and water is $2. The Cali Shawarma Wrap ($22) and the $19 steak and tikka bowls are at the top of the range.",
      "To stretch a meal, share an appetizer like Dip & Pita ($11) across the table, or split a bowl and add a protein side. FIT members get 15% off, which is the only discount we currently offer.",
      "Every bowl already includes a protein, a dip and vegetables, so you don't need extras to make it a full meal, which keeps the total close to the menu price.",
    ],
    relatedDishes: ["earth-bowl", "falafel-wrap", "zesty-chicken-wrap"],
    relatedPaths: ["/faq/how-much-is-a-bowl", "/guides/how-to-eat-mediterranean-on-a-budget", "/menu"],
  },
  {
    slug: "do-you-have-fries",
    q: "Do you have fries?",
    seoTitle: "Does Pita Bowl Have Fries? Plain and Shawarma Fries",
    metaDescription:
      "Pita Bowl has plain fries for $4, Chicken Shawarma Fries for $13 and Steak Shawarma Fries for $15, all cooked without seed oils in Mission Beach.",
    answer:
      "Yes. Plain fries with a side of sauce are $4, Chicken Shawarma Fries are $13 and Steak Shawarma Fries are $15. They're cooked without seed oils.",
    details: [
      "The shawarma fries are the loaded version: a bed of fries topped with chicken or steak shawarma and garlic sauce. They're big enough to share, or to eat as a meal on their own. Plain fries come with your choice of sauce.",
      "Fries also show up inside the Cali Shawarma Wrap, where they're rolled up with steak shawarma, pepper jack, guacamole and garlic aioli. And the kids meal pairs three chicken tenders with fries.",
      "Shawarma fries are a common street-food dish in many Middle Eastern cities and have spread wherever shawarma shops have. Fries get soft as they sit, so if you're walking them down to the beach, eat them first.",
      "Want to dip them in something different? Add a side of hummus, tzatziki or roasted eggplant dip for $1.50. And if you're watching carbs, a bowl over greens is the better pick, since fries are one of the starchier things we make. Fries come up in other FAQs about our oils, so check those if that's why you're asking.",
    ],
    relatedDishes: ["chicken-shawarma-fries", "steak-shawarma-fries", "cali-shawarma-wrap"],
    relatedPaths: ["/guides/what-are-shawarma-fries", "/faq/are-your-fries-cooked-in-seed-oil", "/menu"],
  },
  {
    slug: "are-your-fries-cooked-in-seed-oil",
    q: "Are your fries cooked in seed oil?",
    seoTitle: "Are Pita Bowl's Fries Cooked in Seed Oil? No",
    metaDescription:
      "No. Pita Bowl doesn't use seed oils like canola or soybean in its cooking, fries included. The kitchen cooks with olive oil and avocado oil.",
    answer:
      "No. We don't use seed oils in our cooking, and that includes the fries. Our kitchen cooks with olive oil and avocado oil.",
    details: [
      "Fries are one of the main places seed oils show up in restaurant food, since many commercial fryers run on canola, soybean or blended vegetable oil. Those oils are inexpensive and neutral, which is why they're so common. We chose not to use them anywhere in our cooking.",
      "That applies to plain fries ($4), Chicken Shawarma Fries ($13), Steak Shawarma Fries ($15), the fries in the Cali Shawarma Wrap and the fries in the kids meal.",
      "Whether seed oils are worth avoiding is still debated. Mainstream groups like the American Heart Association consider them acceptable in a normal diet, while plenty of people prefer to skip them. If you're in the second group, our guides on seed oils and eating out without them go into more detail.",
      "If you have other questions about how a specific item is cooked, ask at the counter or call 858-210-9524. Our desserts are the one exception to keep in mind, since some components may contain seed oils.",
    ],
    relatedDishes: ["chicken-shawarma-fries", "steak-shawarma-fries", "kids-chicken-tenders"],
    relatedPaths: ["/dietary/seed-oil-free", "/guides/why-restaurants-use-seed-oils", "/faq/do-you-use-seed-oils"],
  },
  {
    slug: "what-is-bourak",
    q: "What is bourak?",
    seoTitle: "What Is Bourak? Middle Eastern Steak Egg Rolls",
    metaDescription:
      "Bourak is a crispy rolled Middle Eastern pastry, related to borek. At Pita Bowl it's stuffed with steak and sold two to an order for $7.",
    answer:
      "Bourak is a crispy rolled pastry found across the Middle East and Mediterranean, related to Turkish borek. Ours are stuffed with steak, like a Middle Eastern egg roll, and come two to an order for $7.",
    details: [
      "The name and style vary by region. Borek is the Turkish name for a large family of filled pastries made with thin dough, and versions spread across the former Ottoman world, from the Balkans to the Levant. Fillings are often cheese, spinach or spiced meat, and shapes range from coils and triangles to cigar-like rolls.",
      "Our bourak are rolled and crisp, with a savory steak filling. They're cooked without seed oils and make a good starter while you wait for bowls, or a side next to a wrap.",
      "They're marked as a signature appetizer. Try them with the Steak Shawarma Bowl or Beef Wrap if you want a steak-forward meal, or dip them in hummus or tzatziki. Pastry like this is typically wheat-based, so skip them if you're avoiding gluten.",
      "Because they're crisp, bourak are best eaten soon after pickup. If you're taking them home, reheat them in an oven or air fryer rather than the microwave to keep the outside crunchy.",
    ],
    relatedDishes: ["bourak", "steak-shawarma-bowl", "beef-shawarma-wrap"],
    relatedPaths: ["/guides/what-is-borek", "/ingredients/phyllo-dough", "/menu"],
  },
  {
    slug: "what-is-the-cali-shawarma-wrap",
    q: "What is the Cali Shawarma Wrap?",
    seoTitle: "What Is the Cali Shawarma Wrap at Pita Bowl?",
    metaDescription:
      "The Cali Shawarma Wrap is steak shawarma with pepper jack, fries, guacamole and garlic aioli, a California-style twist on shawarma. $22 at Pita Bowl.",
    answer:
      "The Cali Shawarma Wrap is our California-style shawarma wrap: steak shawarma, pepper jack cheese, fries, guacamole and garlic aioli rolled together. It's $22 and one of our featured customer favorites.",
    details: [
      "The idea borrows from San Diego's own food culture, where putting fries inside a wrap is a familiar move. Here that approach meets Middle Eastern steak shawarma. Pepper jack adds a little heat and melt, guacamole brings creaminess, and garlic aioli ties it together.",
      "It's one of the most filling items on the menu and the priciest wrap. It's tagged high-protein and customizable, so you can adjust fillings when you order. If you'd like more avocado, add it for $2.50.",
      "Allergy notes: it contains dairy from the pepper jack, and garlic aioli is traditionally made with egg. It doesn't list hummus or tahini, but ask about cross-contact if sesame is a concern. The wrap itself contains gluten.",
      "Because it has fries inside, the Cali is best eaten soon after pickup, before the fries soften. If you're walking it to the beach, keep it wrapped until you're ready to eat. Want it lighter? Build Your Own Wrap lets you keep the steak and guacamole but skip the fries.",
    ],
    relatedDishes: ["cali-shawarma-wrap", "beef-shawarma-wrap", "steak-shawarma-fries"],
    relatedPaths: ["/guides/what-is-a-california-style-shawarma-wrap", "/guides/what-is-garlic-aioli", "/faq/whats-your-most-popular-dish"],
  },
  {
    slug: "what-is-the-earth-bowl",
    q: "What is the Earth Bowl?",
    seoTitle: "What Is the Earth Bowl at Pita Bowl?",
    metaDescription:
      "The Earth Bowl is a $15 vegetarian bowl: black lentils, greens, falafel, hummus, eggplant dip, pickled onions, cucumbers, feta and jalapeño cilantro dressing.",
    answer:
      "The Earth Bowl is our vegetarian bowl: black lentils, mixed greens, falafel, hummus, roasted eggplant dip, pickled onions, cucumbers, feta and jalapeño cilantro dressing, for $15.",
    details: [
      "It skips rice in favor of black lentils, which hold their shape and add an earthy flavor along with plant protein. Falafel, hummus and lentils together make it filling enough for a full meal, and it's tagged gluten-friendly as served.",
      "It's vegetarian rather than vegan because of the feta. Ask for it without feta to make it plant-based. The jalapeño cilantro dressing is bright and herby rather than very hot.",
      "Allergy notes: hummus traditionally contains tahini, which is sesame, and feta is dairy. Celiac guests should still ask about shared prep. The Earth Bowl is one of our featured customer favorites, and it pairs well with an extra side of falafel or a walnut baklava.",
      "Black lentils, sometimes called beluga lentils for their small, glossy look, stay firm after cooking, which keeps the bowl from turning mushy. That also makes the Earth Bowl one of the better options to carry to the beach or eat a little later, especially with the dressing on the side.",
    ],
    relatedDishes: ["earth-bowl", "falafel", "walnut-baklava"],
    relatedPaths: ["/dietary/vegetarian", "/ingredients/black-lentils", "/faq/do-you-have-vegetarian-options"],
  },
  {
    slug: "can-i-order-ahead-and-skip-the-line",
    q: "Can I order ahead and skip the line?",
    seoTitle: "Can I Order Ahead at Pita Bowl and Skip the Line?",
    metaDescription:
      "Order ahead online through Pita Bowl's website, then pick up at 3833 Mission Blvd. It's the easiest way to avoid waiting to order during busy times.",
    answer:
      "Yes. Order ahead online through our website, then come to 3833 Mission Blvd to pick it up, so you don't have to wait in line to order.",
    details: [
      "Online ordering runs through Toast and covers the full menu during our regular hours: Sunday through Thursday 11 AM to 8 PM, and Friday and Saturday until 9 PM. You can browse, customize and pay before you leave home.",
      "Ordering ahead is most useful on summer weekends and around lunch, when Mission Beach is busiest. It also gives you time to customize properly, like building your own bowl, adding a protein, or noting that you want dressing on the side.",
      "When you arrive, head to the counter to collect it. If you're ordering for a lot of people, place the order earlier rather than at the last minute so the kitchen has time to prepare it.",
      "Ordering ahead also makes it easier to plan around Mission Beach parking, which fills up quickly on busy days. A quick stop to grab your food is simpler than waiting in line while you hold a spot.",
    ],
    relatedDishes: ["build-your-own-bowl"],
    relatedPaths: ["/guides/how-to-order-ahead-for-pickup", "/faq/how-do-i-order-online", "/faq/do-you-offer-pickup"],
  },
  {
    slug: "how-do-i-contact-pita-bowl",
    q: "How do I contact Pita Bowl?",
    seoTitle: "How to Contact Pita Bowl in Mission Beach",
    metaDescription:
      "Call Pita Bowl at 858-210-9524 or email orders@thepitabowl.com. We're at 3833 Mission Blvd, San Diego, CA 92109, open daily from 11 AM.",
    answer:
      "Call us at 858-210-9524 or email orders@thepitabowl.com. You can also visit us at 3833 Mission Blvd, San Diego, CA 92109.",
    details: [
      "Phone is the quickest way to reach us during open hours, which are Sunday through Thursday 11 AM to 8 PM and Friday and Saturday 11 AM to 9 PM. It's the best route for questions about allergies, holiday hours or anything time-sensitive.",
      "Email works well for questions that need a longer answer, or anything you'd like in writing. For catering, the Request a Quote form on our catering page is the fastest way to get pricing, since it collects your date, guest count and notes in one place.",
      "Our contact page also has these details in one place. To place a regular order, use online ordering on our website.",
      "If you're contacting us about an allergy, the more specific you are, the better. Name the allergen and the dish you're interested in, and we'll tell you what we know about how it's made. For directions, our location page has the address and how to find us near Belmont Park.",
    ],
    relatedDishes: [],
    relatedPaths: ["/contact", "/location", "/faq/how-do-i-request-a-catering-quote"],
  },
];
