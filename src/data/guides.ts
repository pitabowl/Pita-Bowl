/**
 * Informational guide articles. Answer-first: each `summary` directly answers
 * the question in the title.
 */

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string; // H1
  seoTitle: string;
  metaDescription: string;
  summary: string; // 1–2 sentence direct answer
  sections: GuideSection[]; // 3–5
  relatedDishes: string[]; // 2–4 dish slugs
  relatedGuides: string[]; // 1–3 other guide slugs from this file
  faqs: GuideFaq[]; // 3
}

export const guides: Guide[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-shawarma",
    title: "What is shawarma?",
    seoTitle: "What Is Shawarma? Origins, Meats and How to Eat It",
    metaDescription:
      "Shawarma is seasoned meat stacked on a vertical spit, slow-roasted and shaved thin. Learn where it comes from, which meats are used and how it's served.",
    summary:
      "Shawarma is a Middle Eastern dish of seasoned meat, usually chicken, beef or lamb, that is stacked on a vertical rotisserie, roasted slowly as it turns, and shaved off in thin slices. It's served in pita or flatbread, over rice, or on a plate with sauces and pickles.",
    sections: [
      {
        heading: "How shawarma is made",
        paragraphs: [
          "The classic method starts with thin slices of marinated meat threaded onto a tall vertical skewer. The stack turns slowly in front of a heat source, so the outside browns and crisps while the inside stays moist. The cook shaves off the cooked outer layer as orders come in, and the next layer starts browning.",
          "Marinades vary by region and by cook. Common ingredients include lemon juice, garlic, yogurt or vinegar, and warm spices such as cumin, coriander, paprika, cinnamon, cardamom, allspice and turmeric. Chicken shawarma often leans on garlic and lemon, while beef and lamb versions tend to use more of the warm, earthy spices.",
          "Not every restaurant uses a vertical spit. Many kitchens cook marinated meat on a grill or flat-top and slice it the same way. The flavor is similar, though you lose some of the crisp edges that come from the rotating stack.",
        ],
      },
      {
        heading: "Where shawarma comes from",
        paragraphs: [
          "Shawarma is most closely tied to the Levant, the region that includes Lebanon, Syria, Jordan, Palestine and Israel. The name is generally traced to the Turkish word çevirme, meaning turning, a reference to the rotating spit.",
          "The vertical rotisserie itself is usually credited to the Ottoman Empire, where döner kebab developed in the 1800s. Historians disagree on the exact town and inventor, but most accounts agree that the technique spread from Anatolia across the former Ottoman lands. Over time it became döner in Turkey, shawarma in the Arab world and gyros in Greece.",
          "The idea kept traveling. Lebanese immigrants brought spit-roasted meat to Mexico in the early 20th century, and it is widely considered an ancestor of tacos al pastor, which uses pork and Mexican chiles instead.",
        ],
      },
      {
        heading: "Shawarma vs gyro vs döner",
        paragraphs: [
          "All three come from the same cooking method, so the differences are mostly about seasoning, meat and toppings. Döner, the Turkish version, is often lamb or beef and is served with salad and yogurt or chili sauces. Greek gyros are commonly pork or chicken and come with tzatziki, tomato, onion and sometimes fries tucked into the pita.",
          "Shawarma usually carries a more heavily spiced marinade and is paired with garlic sauce or tahini, plus pickles, pickled turnips or onions, tomatoes and greens. In the United States, gyro meat is also often a pressed cone of ground beef and lamb, which has a different texture from the stacked slices used for shawarma.",
        ],
      },
      {
        heading: "How shawarma is served",
        paragraphs: [
          "The most common form is a wrap: shaved meat rolled in thin pita or flatbread with sauce and pickles. Plates and bowls put the meat over rice or greens with dips like hummus on the side. Shawarma also shows up on fries and other loaded dishes, which is a newer but very popular way to eat it.",
          "The sauces matter as much as the meat. Garlic sauce is the standard partner for chicken, while tahini is more traditional with beef and lamb, though plenty of people mix and match.",
          "If you want to make shawarma at home without a rotisserie, marinate thin cuts like chicken thighs or flank steak for several hours, cook them hot in a pan, on a grill or under the broiler until the edges char, then slice thinly across the grain. Spreading the meat on a sheet pan and roasting it at high heat gets you surprisingly close to the crisp edges of a spit. Warm the pita just before serving so it stays soft enough to roll.",
          "At Pita Bowl in Mission Beach you can try chicken or steak shawarma in a bowl, a wrap, or piled on fries, and both are cooked with olive oil and avocado oil rather than seed oils.",
        ],
      },
    ],
    relatedDishes: ["chicken-pita-bowl", "steak-shawarma-bowl", "beef-shawarma-wrap", "chicken-shawarma-fries"],
    relatedGuides: ["chicken-tikka-vs-shawarma", "what-is-tahini", "mediterranean-vs-middle-eastern-food"],
    faqs: [
      {
        q: "Is shawarma healthy?",
        a: "It can be a solid meal. Shawarma is mostly lean grilled or roasted meat, so it's high in protein. How healthy it ends up depends on portions, sauces, the bread or rice it's served with, and the oil it's cooked in.",
      },
      {
        q: "What does shawarma taste like?",
        a: "Savory and well-seasoned, with crisp browned edges and tender meat. Depending on the marinade you'll taste garlic, lemon and warm spices like cumin, coriander and cinnamon.",
      },
      {
        q: "What sauce goes with shawarma?",
        a: "Garlic sauce is the classic choice for chicken shawarma and tahini is the classic choice for beef or lamb. Hummus, pickles and hot sauce are common additions.",
      },
    ],
  },

  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-falafel",
    title: "What is falafel?",
    seoTitle: "What Is Falafel? Ingredients, Origins and Tips",
    metaDescription:
      "Falafel are fried balls or patties of ground chickpeas or fava beans with herbs and spices. Learn how they're made, where they come from and how to eat them.",
    summary:
      "Falafel are crisp fritters made from ground chickpeas or fava beans mixed with fresh herbs, onion, garlic and spices, then shaped into balls or patties and cooked until golden. They are a staple of Middle Eastern street food and are naturally plant-based.",
    sections: [
      {
        heading: "What falafel is made of",
        paragraphs: [
          "Traditional falafel uses dried legumes that are soaked overnight but not cooked. The soaked chickpeas or fava beans are ground with parsley, cilantro, onion and garlic, then seasoned with spices such as cumin and coriander. A little baking soda is often added to make the inside lighter.",
          "Using soaked rather than canned or cooked chickpeas is the step most home cooks get wrong. Cooked beans are too wet and soft, so the mixture falls apart. Raw soaked beans hold together and give falafel its crumbly, fluffy interior.",
          "The color of the inside tells you a lot. A bright green center means plenty of fresh herbs. A tan or beige center usually means fewer herbs and more chickpea.",
        ],
      },
      {
        heading: "Chickpea vs fava bean falafel",
        paragraphs: [
          "In Egypt, falafel is often called ta'ameya and is made mostly or entirely from dried fava beans. It tends to be greener and softer. In Lebanon, Syria, Palestine, Israel and Jordan, chickpeas are the usual base, and some cooks blend both.",
          "Chickpea falafel is what most people in the United States know. It's a little nuttier and firmer, and it holds its crunch well in a wrap.",
        ],
      },
      {
        heading: "Where falafel comes from",
        paragraphs: [
          "The origins of falafel are genuinely uncertain. A common theory points to Egypt, where fava bean fritters have a long history, and some writers link them to Coptic Christians who needed meat-free food during fasting periods. Others argue the evidence is thin and that the dish may be younger than often claimed.",
          "What is clear is that falafel spread across the eastern Mediterranean and became a shared street food, sold in pita with salad and sauce. Several countries now consider it part of their national cuisine, which is one reason its history can be a sensitive topic.",
        ],
      },
      {
        heading: "Is falafel vegan and gluten-free?",
        paragraphs: [
          "Traditional falafel contains no meat, dairy or eggs, so it is naturally vegan. It is often a good choice for vegetarians and vegans looking for a filling protein.",
          "Gluten is less predictable. Classic recipes don't need flour, but some cooks add flour or breadcrumbs as a binder, and falafel may share fryers or prep space with wheat products. If you avoid gluten for medical reasons, ask the restaurant how theirs is made and cooked.",
          "Falafel is usually deep-fried, so the cooking oil affects how heavy it feels. At Pita Bowl, falafel is cooked without seed oils, using olive oil and avocado oil instead.",
        ],
      },
      {
        heading: "How to eat falafel",
        paragraphs: [
          "The classic way is in pita with tahini sauce, tomato, cucumber, pickles and greens. Falafel also works crumbled over a salad, served in a bowl with hummus and grains, or on its own as a snack with a dip. Pita Bowl offers it as a side of three or five, in the Earth Bowl, in the Falafel Delight Wrap, or as the protein in a build-your-own bowl or wrap.",
          "Falafel is best eaten soon after cooking, when the outside is still crisp. If you are taking it to go, keep sauces on the side so the crust doesn't soften.",
          "Leftover falafel can be revived in a hot oven or air fryer for a few minutes. Avoid the microwave, which turns the crust soft and chewy. At home, many cooks also bake or pan-fry falafel instead of deep-frying it. The texture is a little denser and less crunchy, but it still works well in wraps and salads, especially if you brush the patties with olive oil first.",
        ],
      },
    ],
    relatedDishes: ["falafel", "falafel-wrap", "earth-bowl"],
    relatedGuides: ["what-is-tahini", "hummus-tzatziki-eggplant-dip", "high-protein-bowl"],
    faqs: [
      {
        q: "Is falafel high in protein?",
        a: "Falafel has a fair amount of plant protein because it's made from chickpeas or fava beans, but it's also fairly high in carbohydrates and absorbs oil when fried. Pairing it with hummus or lentils raises the protein in a meal.",
      },
      {
        q: "Why is my homemade falafel falling apart?",
        a: "The most common cause is using canned or cooked chickpeas. Use dried chickpeas soaked overnight, drain them well, and chill the mixture before shaping.",
      },
      {
        q: "What sauce goes with falafel?",
        a: "Tahini sauce is the traditional pairing. Hummus, garlic sauce, yogurt sauces and hot sauce are also common.",
      },
    ],
  },

  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: "hummus-tzatziki-eggplant-dip",
    title: "Hummus vs tzatziki vs eggplant dip",
    seoTitle: "Hummus vs Tzatziki vs Eggplant Dip Explained",
    metaDescription:
      "Hummus is chickpeas and tahini, tzatziki is yogurt and cucumber, and eggplant dip is smoky roasted eggplant. Compare taste, diet notes and best pairings.",
    summary:
      "Hummus is a thick, nutty purée of chickpeas and tahini; tzatziki is a cool, tangy yogurt dip with cucumber and garlic; and roasted eggplant dip is a soft, smoky spread made from charred eggplant. Hummus is the most filling, tzatziki is the most refreshing, and eggplant dip is the most savory and smoky.",
    sections: [
      {
        heading: "Hummus: creamy, nutty and filling",
        paragraphs: [
          "Hummus is made from cooked chickpeas blended with tahini (sesame paste), lemon juice, garlic and usually olive oil. The full Arabic name, hummus bi tahina, simply means chickpeas with tahini.",
          "It's thick and rich, with a mild, nutty flavor that goes with nearly everything. Because it's made from chickpeas, it adds plant protein and fiber, which makes it the most filling of the three. Traditional hummus contains no dairy, so it's typically vegan. It does contain sesame, a common allergen.",
        ],
      },
      {
        heading: "Tzatziki: cool, tangy and light",
        paragraphs: [
          "Tzatziki is a Greek dip of strained yogurt mixed with grated cucumber, garlic, olive oil and herbs, usually dill or mint, sometimes with lemon or vinegar. Similar yogurt and cucumber dishes appear across the region, such as cacık in Turkey.",
          "It's the lightest and most refreshing option. The cool tang cuts through rich or spicy food, which is why it's so often served with grilled meats. Tzatziki contains dairy, so it's not vegan, but it is vegetarian.",
        ],
      },
      {
        heading: "Roasted eggplant dip: smoky and savory",
        paragraphs: [
          "Eggplant dips start with eggplant that is roasted or charred until the inside collapses and turns soft. The flesh is then mashed or blended with other ingredients. The best-known version is baba ghanoush, which in many places is eggplant with tahini, lemon and garlic. Names and recipes vary by country, and some versions use yogurt, peppers, tomato or pomegranate instead.",
          "The flavor is deeper and smokier than hummus, with a looser, silkier texture. Because recipes vary so much, it's worth asking whether a particular eggplant dip contains tahini or dairy if you have allergies or dietary limits. Pita Bowl's version is listed on the menu as roasted eggplant dip.",
        ],
      },
      {
        heading: "Side-by-side comparison",
        paragraphs: [
          "Base: hummus uses chickpeas, tzatziki uses yogurt, eggplant dip uses roasted eggplant. Texture: hummus is thick and smooth, tzatziki is creamy but thin, eggplant dip is soft and slightly stringy. Flavor: hummus is nutty, tzatziki is tangy and fresh, eggplant dip is smoky and savory.",
          "Diet notes: hummus is usually vegan and contains sesame. Tzatziki is vegetarian and contains dairy. Eggplant dip is often vegan, but check, since some versions use yogurt, and many use tahini.",
          "If you want something filling, choose hummus. If your meal is spicy or rich, choose tzatziki. If you want the most flavor in a small amount, choose eggplant dip.",
          "Storage is different too. Tzatziki tends to get watery after a day or two as the cucumber releases liquid, so it's best fresh; stir it before serving. Hummus and eggplant dip keep a few days in the fridge, covered, and benefit from a fresh drizzle of olive oil when you serve them. Any of the three should be kept cold and not left out in the sun for long, which matters if you're packing them for a picnic or the beach.",
        ],
      },
      {
        heading: "How to pair them",
        paragraphs: [
          "With chicken: tzatziki and hummus are a classic pairing, cool and creamy against savory meat. With steak or lamb: eggplant dip or hummus stand up to the richer flavor. With falafel: hummus is the traditional match, with eggplant dip as a good second.",
          "You don't have to choose just one. Many bowls use two dips together. At Pita Bowl, the Chicken Pita Bowl comes with hummus and tzatziki, the Steak Shawarma Bowl and Earth Bowl come with hummus and eggplant dip, and the Dip and Pita starter lets you try any of the three with warm pita.",
        ],
      },
    ],
    relatedDishes: ["dip-and-pita", "chicken-pita-bowl", "steak-shawarma-bowl", "earth-bowl"],
    relatedGuides: ["what-is-tahini", "what-is-falafel"],
    faqs: [
      {
        q: "Which is healthiest: hummus, tzatziki or eggplant dip?",
        a: "Each has strengths. Hummus has the most protein and fiber, tzatziki is usually the lowest in calories, and eggplant dip is vegetable-based. The amount of oil and tahini added makes the biggest difference.",
      },
      {
        q: "Is tzatziki the same as Greek yogurt?",
        a: "No. Tzatziki is made from Greek-style strained yogurt, but it also includes cucumber, garlic, olive oil and herbs, so it's a savory dip rather than plain yogurt.",
      },
      {
        q: "Is baba ghanoush the same as eggplant dip?",
        a: "Baba ghanoush is one type of eggplant dip. Other regional eggplant dips use different ingredients, so not every eggplant dip is baba ghanoush.",
      },
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: "what-are-seed-oils",
    title: "What are seed oils, and why does Pita Bowl skip them?",
    seoTitle: "What Are Seed Oils? A Plain-English Explainer",
    metaDescription:
      "Seed oils are cooking oils pressed or extracted from plant seeds, like canola and soybean. Here's how they're made, what the debate is about and our approach.",
    summary:
      "Seed oils are cooking oils taken from the seeds of plants, such as canola, soybean, corn, sunflower, safflower, cottonseed, grapeseed and rice bran oil, and most are made with industrial extraction and refining. Pita Bowl cooks with olive oil and avocado oil instead, as a preference for less-processed ingredients, not because seed oils are proven harmful.",
    sections: [
      {
        heading: "Which oils count as seed oils",
        paragraphs: [
          "In everyday conversation, seed oils usually means a group of common vegetable oils: canola (rapeseed), soybean, corn, cottonseed, sunflower, safflower, grapeseed and rice bran. They are inexpensive, neutral in flavor, and handle high heat, which is why they're used so widely in restaurants and packaged foods.",
          "Olive oil and avocado oil are not seed oils. They come from the fleshy part of a fruit rather than a seed. Coconut oil also comes from a fruit, and butter and ghee are animal fats.",
        ],
      },
      {
        heading: "How seed oils are made",
        paragraphs: [
          "Seeds are small and relatively low in oil, so pressing alone doesn't get much out of them. Most large-scale seed oil production uses a solvent, typically hexane, to pull the oil from crushed seeds. The solvent is then removed.",
          "The crude oil is usually refined, bleached and deodorized. These steps remove impurities, color and strong flavors, and they give the oil a long shelf life and a high smoke point. The result is the clear, neutral oil you find in most grocery stores.",
          "Not every seed oil is made this way. Expeller-pressed and cold-pressed versions use mechanical pressing without chemical solvents. They cost more and are less common in restaurant kitchens.",
        ],
      },
      {
        heading: "What the debate is about",
        paragraphs: [
          "Critics raise a few concerns. Seed oils are high in omega-6 linoleic acid, and some people argue that modern diets contain too much of it relative to omega-3s. Others point to the heavy processing, or to the fact that oils high in polyunsaturated fat can break down when heated repeatedly, as in commercial deep fryers.",
          "Mainstream nutrition and heart health organizations, including the American Heart Association, do not consider seed oils harmful as part of a normal diet. Their position is that replacing saturated fat with unsaturated fats, including those in many seed oils, is linked to better heart health. Research on the specific concerns above is ongoing, and scientists continue to disagree on some points.",
          "The honest summary is that the evidence does not show seed oils are dangerous in normal amounts, and the conversation is not settled. Overall diet quality, how often you eat fried food, and how much ultra-processed food you eat matter more than any single oil.",
        ],
      },
      {
        heading: "Why Pita Bowl uses olive and avocado oil",
        paragraphs: [
          "Pita Bowl doesn't use seed oils in anything on the menu. The kitchen cooks with olive oil and avocado oil, and ingredients are prepped fresh in-house each day.",
          "It's a choice about ingredients, not a health claim. Olive oil and avocado oil can be produced by pressing the fruit, which is a simpler process than solvent extraction, and olive oil in particular has been a core part of eastern Mediterranean cooking for thousands of years. Many guests also simply prefer to know exactly what their food is cooked in.",
        ],
      },
      {
        heading: "How to spot seed oils when eating out",
        paragraphs: [
          "Restaurants rarely list cooking oil on the menu, so the easiest way is to ask. Fryers, sauces, dressings and mayonnaise-based spreads are the most common places seed oils show up. A dish labeled as cooked in vegetable oil almost always means soybean, canola or a blend.",
          "On packaged food, check the ingredient list for canola, soybean, sunflower, safflower, corn, cottonseed or vegetable oil.",
          "Keep in mind that olive oil comes in grades too. Extra virgin olive oil is extracted mechanically, while refined and pomace olive oils go through more processing. If less-processed oil is what you care about, the grade matters as much as the source.",
        ],
      },
    ],
    relatedDishes: ["chicken-shawarma-fries", "falafel", "build-your-own-bowl"],
    relatedGuides: ["high-protein-bowl", "mediterranean-vs-middle-eastern-food"],
    faqs: [
      {
        q: "Is canola oil a seed oil?",
        a: "Yes. Canola oil is pressed or extracted from the seeds of the canola plant, a type of rapeseed, and it's one of the most common seed oils.",
      },
      {
        q: "Are seed oils bad for you?",
        a: "Major health organizations say they are fine as part of a normal diet, and some research links them to heart benefits when they replace saturated fat. Some researchers and consumers have concerns about processing and omega-6 intake, and that debate is ongoing.",
      },
      {
        q: "Is anything at Pita Bowl cooked in seed oil?",
        a: "No. Pita Bowl cooks everything with olive oil and avocado oil, including fried items like fries and falafel.",
      },
    ],
  },

  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: "chicken-tikka-vs-shawarma",
    title: "Chicken tikka vs chicken shawarma",
    seoTitle: "Chicken Tikka vs Chicken Shawarma: Key Differences",
    metaDescription:
      "Chicken tikka is South Asian, yogurt-marinated and cooked in chunks. Chicken shawarma is Levantine, stacked and shaved thin. Compare flavor, cooking and uses.",
    summary:
      "Chicken tikka is a South Asian dish of bite-size chicken pieces marinated in yogurt and spices and cooked at high heat, traditionally in a tandoor oven. Chicken shawarma is a Middle Eastern dish of marinated chicken stacked on a rotating spit and shaved into thin slices, so the main differences are the spice profile, the shape of the meat and how it's cooked.",
    sections: [
      {
        heading: "Where each one comes from",
        paragraphs: [
          "Tikka comes from the cooking traditions of the Indian subcontinent, and especially the Punjab region shared by India and Pakistan. The word tikka refers to small pieces or chunks. It is closely related to tandoori chicken, which uses a similar marinade on larger bone-in pieces.",
          "Shawarma comes from the Levant and the wider former Ottoman world, where meat roasted on a vertical spit became a street food staple. The word is usually traced to a Turkish term for turning.",
          "Chicken tikka is also the starting point for chicken tikka masala, the curry with a creamy tomato sauce. Plain chicken tikka has no sauce; it's just the marinated, cooked chicken.",
        ],
      },
      {
        heading: "Marinade and flavor",
        paragraphs: [
          "Tikka marinades are built on yogurt, ginger, garlic and spices such as garam masala, cumin, coriander, turmeric and Kashmiri chili, which gives the chicken its red-orange color. The yogurt tenderizes the meat, and the high heat chars the edges. The flavor is bold, warm and often gently spicy.",
          "Chicken shawarma marinades usually feature lemon juice, garlic and olive oil, sometimes with yogurt, plus spices like cumin, paprika, allspice, cinnamon and cardamom. The result is savory and garlicky with a bright, citrusy edge, and usually less heat than tikka.",
          "Both vary a lot from one cook to the next, so these are typical profiles rather than fixed rules.",
        ],
      },
      {
        heading: "Cooking method and texture",
        paragraphs: [
          "Tikka is cut into chunks before cooking and threaded onto skewers. In a tandoor, a clay oven that gets extremely hot, the outside chars quickly while the inside stays juicy. Many restaurants use grills or ovens instead. You end up with thick, tender pieces with charred spots.",
          "Shawarma is layered onto a vertical rotisserie and roasted slowly as it turns. Thin slices are shaved off the outside, giving a mix of crisp edges and soft meat. Many kitchens also cook shawarma-style chicken on a grill or flat-top and then slice it. Either way, the meat is thinner and more shredded than tikka.",
        ],
      },
      {
        heading: "How they're usually served",
        paragraphs: [
          "Chicken tikka is traditionally served with naan, sliced onions, lemon and a mint or cilantro chutney, or used in curries. Chicken shawarma is typically wrapped in pita with garlic sauce or tahini and pickles, or served on a plate with rice, salad and hummus.",
          "Both work well in modern bowls. Tikka's chunky texture holds up next to rice and creamy dips, and shawarma's thin slices spread evenly through a wrap.",
          "Pita Bowl offers both as protein choices. Chicken shawarma comes in the Chicken Pita Bowl and Zesty Chicken Wrap, and chicken tikka comes in the Chicken Tikka Bowl with saffron rice, tzatziki and hummus. You can choose either in a build-your-own bowl or wrap.",
        ],
      },
      {
        heading: "Which should you pick?",
        paragraphs: [
          "Choose chicken tikka if you like bolder spice, a bit of heat and thicker, juicy pieces. Choose chicken shawarma if you prefer garlic and lemon flavors and thin, tender slices that work well in a wrap. If you can't decide, a bowl with one and a side of the other is an easy way to compare them.",
          "Think about pairings as well. Tikka's warm spice goes well with cooling partners like tzatziki, cucumber and rice. Shawarma's garlic and lemon flavors pair naturally with tahini, pickles and garlic sauce. Both are good choices for a high-protein meal, so the decision usually comes down to whether you're in the mood for something spiced and smoky or something bright and garlicky.",
        ],
      },
    ],
    relatedDishes: ["chicken-tikka-bowl", "chicken-pita-bowl", "zesty-chicken-wrap"],
    relatedGuides: ["what-is-shawarma", "high-protein-bowl"],
    faqs: [
      {
        q: "Is chicken tikka spicy?",
        a: "It's usually more spiced than spicy. Many versions have mild to moderate heat from chili, but the main flavors are warm spices, ginger, garlic and yogurt.",
      },
      {
        q: "Is chicken tikka the same as chicken tikka masala?",
        a: "No. Chicken tikka is the marinated, cooked chicken on its own. Chicken tikka masala is that chicken served in a creamy, spiced tomato sauce.",
      },
      {
        q: "Which has more protein, tikka or shawarma?",
        a: "Both are mostly chicken, so protein is similar. The difference depends on the cut of chicken, the portion size and the marinade more than the style.",
      },
    ],
  },

  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: "high-protein-bowl",
    title: "How to build a high-protein Mediterranean bowl",
    seoTitle: "How to Build a High-Protein Mediterranean Bowl",
    metaDescription:
      "Build a high-protein Mediterranean bowl by starting with a lean protein, adding legumes, choosing a protein-rich dip and keeping the base balanced. Here's how.",
    summary:
      "To build a high-protein Mediterranean bowl, start with a generous portion of lean protein like chicken, steak or falafel, add a legume such as lentils or chickpeas, choose a protein-rich dip like hummus or a yogurt-based one like tzatziki, then fill out the bowl with vegetables and a modest amount of sauce.",
    sections: [
      {
        heading: "Step 1: Start with the protein",
        paragraphs: [
          "The protein is where most of a bowl's protein comes from, so start there and make it the largest part. Grilled or roasted chicken is the leanest common option. Steak and lamb bring more protein per bite along with more fat. Falafel gives you plant protein but also more carbohydrates and oil, so it's often best paired with another protein source.",
          "If you want more, double the protein. Most bowl restaurants will let you add an extra serving, and it's usually the most direct way to raise the total.",
        ],
      },
      {
        heading: "Step 2: Pick a base that works for you",
        paragraphs: [
          "Rice gives you energy and makes the bowl more filling, which is useful after exercise or a long day outside. Greens keep it lighter. A mix of half rice and half greens is a common middle ground.",
          "Lentils are an underrated base. They add plant protein and fiber, so they raise the protein of the bowl even before you add meat. Chickpeas do the same if they're available as a topping.",
        ],
      },
      {
        heading: "Step 3: Choose your dip with protein in mind",
        paragraphs: [
          "Dips are not just flavor. Hummus is made from chickpeas and tahini, so it adds plant protein and fiber. Tzatziki is made from strained yogurt, which contributes some protein and keeps the bowl cool and fresh. Eggplant dip is mostly vegetable, so it adds flavor more than protein.",
          "Using two dips, such as hummus and tzatziki, is a simple way to add protein and creaminess at the same time.",
        ],
      },
      {
        heading: "Step 4: Add toppings and keep sauce in check",
        paragraphs: [
          "Vegetables like cucumber, tomato, pickled onions and greens add volume, crunch and fiber without much else. Feta adds flavor and a small amount of protein. Olives and avocado add healthy fats but are calorie-dense, so use them for flavor rather than bulk.",
          "Sauces like garlic sauce and tahini are rich. If you're watching calories, ask for sauce on the side and add it as you eat. You'll usually use less than what comes poured on.",
        ],
      },
      {
        heading: "Example high-protein builds",
        paragraphs: [
          "Lean and light: greens base, chicken shawarma, a side of extra chicken, tzatziki, cucumber, tomato and pickled onions, with tahini on the side. Post-workout: rice and greens, steak shawarma, hummus, feta and pickled onions. Plant-forward: black lentils, falafel, hummus, greens, cucumbers and a bright dressing, similar to Pita Bowl's Earth Bowl.",
          "At Pita Bowl you can build any of these with the Build Your Own Bowl, choosing from chicken shawarma, steak shawarma, chicken tikka or falafel, and add a side of chicken shawarma ($5), steak shawarma ($7) or chicken tikka ($7) for a second serving. Prices may change, so check the current menu when you order.",
          "The same steps work at home. Batch-cook a protein and a pot of lentils at the start of the week, make or buy hummus and tzatziki, and you can assemble a bowl in a few minutes.",
          "One common mistake is a bowl that looks healthy but is mostly rice and sauce with a small portion of protein on top. Check the ratio: protein and vegetables should take up most of the bowl. Another is relying on falafel alone for protein; it helps, but it works best alongside lentils, hummus or a second protein. Finally, don't forget fiber and color. Greens, cucumbers, tomatoes and pickled vegetables make a protein-heavy bowl feel balanced and keep you full longer.",
        ],
      },
    ],
    relatedDishes: ["build-your-own-bowl", "chicken-tikka-bowl", "steak-shawarma-bowl", "earth-bowl"],
    relatedGuides: ["chicken-tikka-vs-shawarma", "hummus-tzatziki-eggplant-dip", "what-is-falafel"],
    faqs: [
      {
        q: "What is the highest-protein option in a Mediterranean bowl?",
        a: "Meat proteins such as chicken, steak or lamb carry the most protein. Doubling the meat and adding lentils or hummus raises the total further.",
      },
      {
        q: "Can a vegetarian bowl be high in protein?",
        a: "Yes. Combine falafel with lentils, chickpeas or hummus, and add feta or a yogurt dip if you eat dairy. Each adds protein, and together they make a filling meal.",
      },
      {
        q: "Is rice or greens better in a protein bowl?",
        a: "It depends on your goal. Greens keep calories lower, and rice adds energy and makes the bowl more filling. Neither changes the protein much, so pick based on how hungry you are.",
      },
    ],
  },

  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-baklava",
    title: "What is baklava? Pistachio vs walnut",
    seoTitle: "What Is Baklava? Pistachio vs Walnut Compared",
    metaDescription:
      "Baklava is a pastry of thin phyllo layers, chopped nuts and butter, soaked in syrup or honey. Learn its history and how pistachio and walnut versions differ.",
    summary:
      "Baklava is a sweet pastry made from many thin layers of phyllo dough brushed with butter, filled with chopped nuts, baked until crisp, and soaked in syrup or honey. Pistachio baklava is greener, more delicate and slightly richer, while walnut baklava is earthier and a little more bitter, which balances the sweetness.",
    sections: [
      {
        heading: "How baklava is made",
        paragraphs: [
          "Baklava starts with phyllo, a paper-thin dough made from flour, water and a little oil or vinegar. Sheets are stacked one at a time, each brushed with melted butter, with a layer of chopped nuts in the middle or spread between several layers.",
          "Before baking, the pastry is cut into diamonds or squares so the syrup can soak in later. It bakes until golden and crisp, and then a syrup is poured over it, either a sugar syrup often flavored with lemon, rose water or orange blossom water, or honey. The contrast between the hot pastry and the syrup, or the reverse, is what lets it absorb without going soggy.",
          "Good baklava is crisp on top, moist in the middle, and sweet without being sticky all the way through.",
        ],
      },
      {
        heading: "Where baklava comes from",
        paragraphs: [
          "The baklava most people know today took shape in the kitchens of the Ottoman Empire, where it was a prized dessert in Istanbul's palace kitchens. From there it spread across the empire, which is why Turkey, Greece, Lebanon, Syria, the Balkans and other places all have their own versions.",
          "Earlier roots are debated. Food historians point to layered bread and nut desserts from Central Asia, Persia and the Byzantine world as possible ancestors, but there's no single agreed origin. Several countries claim it, and each one's version is a little different.",
        ],
      },
      {
        heading: "Pistachio baklava",
        paragraphs: [
          "Pistachio baklava is often associated with Gaziantep in southeastern Turkey, a region known for growing pistachios. It's usually made with bright green pistachios and tends to be more delicate, with a buttery, slightly sweet nut flavor.",
          "Pistachios cost more than walnuts, so pistachio baklava is often treated as the premium version. It's the one many people picture when they think of Turkish baklava.",
        ],
      },
      {
        heading: "Walnut baklava",
        paragraphs: [
          "Walnut baklava is common in Greek, Balkan and many home recipes. Walnuts have a deeper, earthier flavor with a slight bitterness from their skins, which balances the sweet syrup well. Greek versions often add cinnamon or cloves.",
          "If you find baklava too sweet in general, walnut is often the better place to start because the nut flavor pushes back against the sugar.",
        ],
      },
      {
        heading: "Which to try, and how to eat it",
        paragraphs: [
          "Choose pistachio if you want something rich, buttery and a bit more refined. Choose walnut if you like a stronger nut flavor and a little less sweetness. Many people end up ordering one of each.",
          "Pita Bowl makes both in-house. The menu lists phyllo, nuts, honey and butter as the ingredients, so they're sweetened with honey and contain dairy and tree nuts. Both are vegetarian.",
          "Baklava keeps well at room temperature, covered, for several days. Refrigerating it can make the phyllo lose its crispness.",
          "Baklava is rich, so pieces are usually small, a few bites each. In Turkey and the Levant it's traditionally served with strong coffee or black tea, which balances the sweetness. Some places serve it with a scoop of ice cream or clotted cream. Eat it with your fingers or a small fork, and expect it to be a little sticky.",
          "If you're trying baklava for the first time, start with one piece of each nut so you can compare them side by side. Look for a golden, crisp top and nuts that taste fresh rather than dusty. Baklava that is soggy all the way through usually had too much syrup or sat too long.",
        ],
      },
    ],
    relatedDishes: ["pistachio-baklava", "walnut-baklava", "lazy-cake"],
    relatedGuides: ["mediterranean-vs-middle-eastern-food", "what-is-tahini"],
    faqs: [
      {
        q: "Is baklava Greek or Turkish?",
        a: "Both countries have long baklava traditions. The modern form is usually traced to Ottoman kitchens, and today Greek, Turkish, Levantine and Balkan versions all exist with their own differences.",
      },
      {
        q: "Is baklava made with honey or syrup?",
        a: "Either. Many Turkish and Levantine versions use sugar syrup, often with lemon or rose water, while many Greek versions use honey. Pita Bowl's baklava lists honey as an ingredient.",
      },
      {
        q: "Does baklava contain nuts and dairy?",
        a: "Traditional baklava contains tree nuts and is usually made with butter, so it's not suitable for people with nut allergies, and most versions are not vegan.",
      },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-tahini",
    title: "What is tahini?",
    seoTitle: "What Is Tahini? Taste, Uses and Allergy Notes",
    metaDescription:
      "Tahini is a smooth paste made from ground sesame seeds. Learn how it's made, what it tastes like, how tahini sauce differs and how to use it at home.",
    summary:
      "Tahini is a smooth paste made from ground sesame seeds, usually hulled and lightly toasted. It tastes nutty and slightly bitter, and it's the base of hummus, tahini sauce, many eggplant dips and the sweet confection halva.",
    sections: [
      {
        heading: "How tahini is made",
        paragraphs: [
          "Sesame seeds are soaked, hulled to remove the outer skin, lightly toasted and then ground until they release their oil and turn into a pourable paste. That's it. Good tahini usually has a single ingredient: sesame.",
          "Unhulled tahini is made with the skins left on. It's darker, more bitter and a little coarser. Some tahini is made from untoasted or only lightly toasted seeds, which gives it a paler color and milder taste.",
          "It's normal for the oil to separate and rise to the top of the jar. Stir it back in before using.",
        ],
      },
      {
        heading: "What tahini tastes like",
        paragraphs: [
          "Tahini is rich and nutty with a gentle bitterness. Fresh, high-quality tahini is smooth and only mildly bitter. Old or overly toasted tahini can taste harsh. It's not sweet on its own, which is why it works in both savory and sweet dishes.",
          "If you've tried peanut butter, the texture is similar but looser, and the flavor is more earthy and less sweet.",
        ],
      },
      {
        heading: "Tahini vs tahini sauce",
        paragraphs: [
          "Plain tahini is just the sesame paste. Tahini sauce, sometimes called tarator in parts of the Levant, is tahini thinned with lemon juice, water and garlic, usually with salt. Adding lemon and water first makes it seize and thicken, then more water loosens it into a pale, creamy sauce.",
          "Tahini sauce is what's drizzled over falafel, shawarma, roasted vegetables and bowls. It's tangier and lighter than straight tahini. Recipes vary, so restaurant versions may include other ingredients.",
          "On Pita Bowl's menu, tahini shows up as tahini dressing on the Chicken Pita Bowl and tahini sauce on the Chicken Tikka Bowl and the Beef Wrap. It's also a common base ingredient in hummus.",
        ],
      },
      {
        heading: "Allergy and diet notes",
        paragraphs: [
          "Tahini is made from sesame, which is one of the major food allergens in the United States and must be labeled on packaged foods. People with a sesame allergy should avoid tahini and dishes made with it, which often include hummus, tahini sauce, baba ghanoush and halva. Ask when ordering, since tahini isn't always obvious from a dish name.",
          "Sesame is a seed, not a tree nut or peanut, though some people are allergic to more than one. Plain tahini is vegan and naturally gluten-free.",
        ],
      },
      {
        heading: "How to use tahini at home",
        paragraphs: [
          "Whisk it with lemon, garlic and water for a quick sauce for bowls, salads and roasted vegetables. Blend it into hummus or eggplant dip. Stir it into salad dressings in place of some of the oil. Drizzle it over yogurt with honey, or add it to cookies, brownies and smoothies for a nutty flavor.",
          "A basic tahini sauce takes about two minutes. Stir together a few spoonfuls of tahini with lemon juice, a small grated garlic clove and a pinch of salt. It will thicken and look broken at first. Keep adding cold water a little at a time, whisking, until it turns smooth and pale and pours like heavy cream. Taste and adjust the lemon and salt.",
          "Store an opened jar in a cool, dark cupboard and use it within a few months, or refrigerate it to keep it fresh longer, though it will get thicker when cold.",
          "When buying tahini, look for a short ingredient list, ideally just sesame seeds, and a pourable texture. Tahini styles vary by country and producer, so it's worth trying a couple to find one you like; some are thick and toasty, others thin and mild. Taste it straight from the spoon: good tahini should be nutty and mild, not sharply bitter. If a jar has hardened into a solid block at the bottom, it's usually old or was stored too long without stirring.",
        ],
      },
    ],
    relatedDishes: ["chicken-pita-bowl", "chicken-tikka-bowl", "beef-shawarma-wrap", "dip-and-pita"],
    relatedGuides: ["hummus-tzatziki-eggplant-dip", "what-is-falafel", "what-is-shawarma"],
    faqs: [
      {
        q: "Is tahini the same as sesame paste?",
        a: "Mostly. Tahini is sesame paste, but Middle Eastern tahini is usually made from hulled, lightly toasted seeds, while East Asian sesame paste is often made from more deeply toasted seeds and tastes stronger.",
      },
      {
        q: "Is tahini healthy?",
        a: "Tahini contains healthy unsaturated fats, some protein, and minerals like calcium and iron. It's also calorie-dense, so a little goes a long way.",
      },
      {
        q: "Can I substitute tahini in hummus?",
        a: "You can use another nut or seed butter, or leave it out, but the hummus will taste noticeably different. Tahini is what gives traditional hummus its nutty depth.",
      },
    ],
  },

  // 9 ─────────────────────────────────────────────────────────────
  {
    slug: "mediterranean-vs-middle-eastern-food",
    title: "Mediterranean vs Middle Eastern food",
    seoTitle: "Mediterranean vs Middle Eastern Food: What Differs",
    metaDescription:
      "Mediterranean food spans southern Europe, North Africa and the Levant; Middle Eastern food covers the Levant, Gulf, Iran and Turkey. Here's where they overlap.",
    summary:
      "Mediterranean food refers to cuisines around the Mediterranean Sea, including Greece, Italy, Spain, Turkey, North Africa and the Levant, while Middle Eastern food covers a region stretching from Egypt and the Levant to Turkey, Iraq, the Gulf and Iran. They overlap heavily in the eastern Mediterranean, which is why dishes like hummus, falafel and shawarma get called both.",
    sections: [
      {
        heading: "Geography: where the two overlap",
        paragraphs: [
          "Mediterranean is a geographic label for countries with a coastline on the Mediterranean Sea. That includes southern Europe (Spain, France, Italy, Greece), North Africa (Morocco, Algeria, Tunisia, Libya, Egypt) and the eastern Mediterranean (Turkey, Syria, Lebanon, Israel, Palestine).",
          "Middle Eastern refers to a region that usually includes Egypt, the Levant, Turkey, Iraq, Iran and the Arabian Peninsula. Several of those countries don't touch the Mediterranean at all.",
          "The overlap is the Levant and Turkey, plus Egypt. Food from Lebanon, for example, is both Mediterranean and Middle Eastern. Food from Italy is Mediterranean but not Middle Eastern, and food from Iran or the Gulf is Middle Eastern but not Mediterranean.",
        ],
      },
      {
        heading: "Shared ingredients",
        paragraphs: [
          "Across both regions you'll find olive oil, lemon, garlic, fresh herbs, chickpeas and lentils, yogurt, eggplant, tomatoes, cucumbers, flatbreads and grilled meats. Grains like bulgur, rice and couscous are common, along with nuts in both savory and sweet dishes.",
          "That shared base is why a dish like grilled meat with a yogurt sauce, salad and bread exists in some form from Greece to Iran.",
        ],
      },
      {
        heading: "Where the flavors differ",
        paragraphs: [
          "Southern European Mediterranean cooking often leans on olive oil, oregano, basil, rosemary, wine, cheese and seafood. Greek food uses lots of lemon, oregano, dill and feta. Italian and Spanish cooking bring tomatoes, cured meats and pasta or rice dishes.",
          "Middle Eastern cooking uses more warm spices: cumin, coriander, cinnamon, allspice, cardamom and blends like baharat. Levantine food features sumac, za'atar, tahini and pomegranate molasses. Persian cooking is known for saffron, dried limes, herbs and fruit with meat. Gulf cuisines often feature spiced rice dishes and dried limes.",
          "Many dishes have close cousins across the line. Greek tzatziki, Turkish cacık and Levantine yogurt and cucumber salads are related. Greek gyros, Turkish döner and Arab shawarma come from the same spit-roasting method.",
        ],
      },
      {
        heading: "Mediterranean diet vs Mediterranean food",
        paragraphs: [
          "The Mediterranean diet is a nutrition pattern, not a cuisine. It was popularized by researchers including Ancel Keys, whose studies in the mid 20th century looked at traditional eating habits in places like Crete and southern Italy. It emphasizes vegetables, fruit, legumes, whole grains, nuts, olive oil and fish, with moderate dairy and less red meat.",
          "Many Middle Eastern home-cooking traditions share those same building blocks, so the line between them is blurry in practice. A restaurant calling itself Mediterranean doesn't necessarily follow the diet, and plenty of Middle Eastern meals fit it well.",
        ],
      },
      {
        heading: "Why US restaurants use both labels",
        paragraphs: [
          "In the United States, Mediterranean is often used as a broad umbrella for food from Greece, Turkey and the Levant, partly because it is familiar to more diners. You'll often see hummus, falafel, shawarma, tzatziki and baklava on the same menu, even though they come from different traditions.",
          "Pita Bowl in Mission Beach is a good example of that mix: shawarma and falafel from the Levant, tzatziki from Greece, chicken tikka from South Asia, and tiramisu from Italy, served as customizable bowls and wraps. Neither label is wrong. They just describe overlapping circles.",
          "If you want to explore beyond the familiar menu, look for regional names. Lebanese, Turkish, Persian, Greek, Moroccan and Egyptian restaurants each focus on their own traditions, and dishes that share a name can taste quite different from one country to the next. Trying the same dish, like a stuffed grape leaf or a yogurt dip, in two different cuisines is one of the easiest ways to see how the regions connect and where they part ways.",
        ],
      },
    ],
    relatedDishes: ["chicken-pita-bowl", "falafel-wrap", "pistachio-baklava"],
    relatedGuides: ["what-is-shawarma", "hummus-tzatziki-eggplant-dip", "what-is-baklava"],
    faqs: [
      {
        q: "Is Lebanese food Mediterranean or Middle Eastern?",
        a: "Both. Lebanon is on the Mediterranean coast and is also part of the Middle East, so its food fits either description.",
      },
      {
        q: "Is hummus Mediterranean or Middle Eastern?",
        a: "Hummus is a Levantine dish, so it is both Middle Eastern and eastern Mediterranean. It's now eaten widely across both regions and beyond.",
      },
      {
        q: "Is Greek food Middle Eastern?",
        a: "Greek food is usually classed as Mediterranean and Southern European, not Middle Eastern. It does share many dishes and ingredients with Turkish and Levantine cooking because of a long shared history.",
      },
    ],
  },

  // 10 ────────────────────────────────────────────────────────────
  {
    slug: "food-near-belmont-park",
    title: "Where to eat near Belmont Park in Mission Beach",
    seoTitle: "Where to Eat Near Belmont Park in Mission Beach",
    metaDescription:
      "Tips for grabbing food near Belmont Park in Mission Beach: when to go, parking in summer, ordering ahead for pickup, and the best spots to eat by the water.",
    summary:
      "The easiest way to eat near Belmont Park is to pick a spot within walking distance on or around Mission Boulevard, order ahead for pickup, and eat on the boardwalk, the beach or the bay side. Go before noon or after the late-afternoon rush on summer weekends, and expect parking to be the hardest part.",
    sections: [
      {
        heading: "What's around Belmont Park",
        paragraphs: [
          "Belmont Park is the seaside amusement park in Mission Beach, best known for the Giant Dipper, a historic wooden roller coaster that has been a local landmark for decades. It sits right on the Mission Beach boardwalk, with the Pacific Ocean on one side and Mission Bay a short walk to the east.",
          "Mission Boulevard runs north and south through the neighborhood, parallel to the boardwalk, and most food options are along it or on the side streets nearby. Head north on the boardwalk and you'll reach Pacific Beach, which has more places to eat but also more crowds.",
          "You'll find a mix of quick counter-service spots, casual sit-down restaurants and snack stands. On a beach day, takeout is usually the most practical choice because you can eat wherever you've set up.",
        ],
      },
      {
        heading: "When to go",
        paragraphs: [
          "Summer weekends and holidays are the busiest times in Mission Beach. Lunch lines tend to build from around noon to early afternoon, and again around sunset when people come off the sand.",
          "If you can, eat a little early, before noon, or in the mid-afternoon lull. Weekdays outside summer are much calmer, and many local spots are quiet enough that you can walk in and order without a wait.",
        ],
      },
      {
        heading: "Parking and getting there",
        paragraphs: [
          "Parking is the biggest challenge in Mission Beach from late spring through summer. Lots near Belmont Park fill early on warm weekends, and street parking on the narrow residential blocks is limited. Read posted signs carefully, since rules and time limits vary.",
          "If you're already parked for the beach, it's usually easier to walk to food than to move the car. Biking along the boardwalk, using a rideshare, or taking a bus also avoids the hunt for a spot. If you do drive, arriving in the morning gives you the best chance of finding parking.",
        ],
      },
      {
        heading: "Order ahead and keep it simple",
        paragraphs: [
          "Ordering online for pickup is the simplest way to skip lines on a busy day. Place the order before you pack up, then walk over and grab it. Food that travels well, like bowls, wraps and dips with pita, holds up better on a beach trip than anything fried that needs to be eaten immediately.",
          "Pita Bowl is one option here, at 3833 Mission Blvd, a few minutes' walk from Belmont Park and the boardwalk. It's takeout and pickup with online ordering, open 11 AM to 8 PM Sunday through Thursday and 11 AM to 9 PM Friday and Saturday. Bowls and wraps are easy to carry, and the kids chicken tenders work for families coming out of the park.",
          "Wherever you order, ask for sauces on the side so wraps don't get soggy, and grab extra napkins.",
        ],
      },
      {
        heading: "Where to eat once you have your food",
        paragraphs: [
          "The boardwalk seawall is the classic spot: sit and watch the bikes, skaters and waves go by. The beach itself is fine too, though wind and sand can be a problem, and gulls are quick to grab unattended food.",
          "For a calmer meal, walk a few blocks east to Mission Bay. The bay side has gentler water, more shade on some stretches, and is usually quieter than the ocean side, which makes it easier with kids. Check posted city rules before you set up; San Diego beaches restrict things like glass containers and alcohol. Pack out your trash when you're done.",
        ],
      },
    ],
    relatedDishes: ["build-your-own-bowl", "cali-shawarma-wrap", "dip-and-pita", "kids-chicken-tenders"],
    relatedGuides: ["high-protein-bowl", "what-is-shawarma"],
    faqs: [
      {
        q: "Is there food inside Belmont Park?",
        a: "Belmont Park has its own food and snack options, and there are many more restaurants within a short walk along Mission Boulevard and the boardwalk.",
      },
      {
        q: "Where can I park near Belmont Park?",
        a: "There are lots near the park and limited street parking in the surrounding blocks. On summer weekends they fill early, so arrive in the morning or consider biking, rideshare or the bus.",
      },
      {
        q: "Can you eat on the Mission Beach boardwalk?",
        a: "Yes. Many people eat takeout on the boardwalk seawall or on the sand. Follow posted rules, which include restrictions on glass and alcohol on city beaches.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
