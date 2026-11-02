/**
 * SEO landing page copy for diet pages (/dietary/[slug]) and catering occasion pages (/catering/[slug]).
 * Only verified business facts are stated here. Do not add nutrition numbers,
 * certifications, allergen guarantees, or catering policies that are not confirmed.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface DietCopy {
  slug: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  howToOrder: string[];
  faqs: Faq[];
  relatedGuides: string[];
}

export interface CateringCopy {
  slug: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string[];
  whatToOrder: { dish: string; why: string }[];
  planningTips: string[];
  faqs: Faq[];
  relatedGuides: string[];
}

export const dietCopy: DietCopy[] = [
  {
    slug: "seed-oil-free",
    h1: "Seed-Oil-Free Food in Mission Beach",
    seoTitle: "Seed-Oil-Free Restaurant in Mission Beach, San Diego",
    metaDescription:
      "Pita Bowl cooks with olive oil and avocado oil only. No canola, no soybean oil. Shawarma bowls, wraps and dips on Mission Blvd in San Diego.",
    intro: [
      "At Pita Bowl, there is no canola, soybean, or other seed oil in our kitchen. We cook with olive oil and avocado oil, and that goes for everything: the shawarma, the falafel, the fries, the dressings. You don't have to ask for a special version or pick from a short list of safe items. The whole menu works.",
      "We made that choice because we wanted simpler, less-processed ingredients in the food we serve and eat ourselves. Our ingredients are prepped fresh in-house every day, so we know what goes into each dip, sauce, and protein.",
      "If you have been reading labels and quietly skipping restaurant meals because of the oil question, this is an easy place to eat. We're at 3833 Mission Blvd, a few minutes' walk from Belmont Park, open for pickup and takeout every day.",
    ],
    howToOrder: [
      "Order anything on the menu. There is no seed-oil-free substitution to request because there is nothing to swap out.",
      "Fries and falafel are fair game. They are cooked in the same olive and avocado oils as everything else.",
      "Build Your Own Bowl lets you pick each part yourself: base, dip, protein, toppings, and sauce.",
      "Bottled drinks in the cooler are made by other brands, so check the label on those if it matters to you.",
      "Questions about a specific item? Call us at 858-210-9524 and we'll walk you through it.",
    ],
    faqs: [
      {
        q: "Is everything at Pita Bowl really seed-oil-free?",
        a: "Yes. We do not use canola, soybean, or any other seed oil in anything we make. Our cooking oils are olive oil and avocado oil.",
      },
      {
        q: "What do you fry the fries and falafel in?",
        a: "The same oils we use for everything else: olive oil and avocado oil. No seed oils in the fryer.",
      },
      {
        q: "Are the sauces and dressings seed-oil-free too?",
        a: "Yes. Our dips, sauces, and dressings are made in-house, and none of them use seed oils.",
      },
      {
        q: "Can I order seed-oil-free food online?",
        a: "Yes. Every item on our online ordering menu is seed-oil-free, so you can order for pickup without any special notes.",
      },
    ],
    relatedGuides: ["what-are-seed-oils", "what-is-tahini", "high-protein-bowl"],
  },
  {
    slug: "vegan",
    h1: "Vegan Options at Pita Bowl in Mission Beach",
    seoTitle: "Vegan Food in Mission Beach, San Diego",
    metaDescription:
      "Vegan falafel wraps and plant-based bowls in Mission Beach. How to order vegan at Pita Bowl: which dips to pick, what to skip, and what to ask us.",
    intro: [
      "Falafel is the center of the vegan menu here. It's our plant-based protein, and you can put it in a wrap, a bowl, or order it as a side. The Falafel Delight Wrap comes in a tortilla with hummus, greens, falafel, pickled onions, tomato, and pickles.",
      "Most of the rest of the menu can go vegan with a few choices. Hummus and roasted eggplant dip are the dips to look at. Tzatziki is made with yogurt, and feta shows up on several bowls, including the Earth Bowl, so those are the parts to leave off.",
      "Sauces are where it's worth asking. Tell us you're eating vegan when you order and we'll point you to the right sauce for your bowl or wrap. Everything is cooked in olive oil or avocado oil, never seed oils.",
    ],
    howToOrder: [
      "Start with the Falafel Wrap, or a Build Your Own Bowl or Wrap with falafel as the protein.",
      "Pick hummus or roasted eggplant dip. Skip tzatziki, which is made with yogurt.",
      "Ordering the Earth Bowl? Ask for it without feta.",
      "Ask which sauces are vegan before you choose one. We'd rather tell you than have you guess.",
      "Add avocado if you want something richer on top.",
    ],
    faqs: [
      {
        q: "Is the Earth Bowl vegan?",
        a: "Not as it comes. The Earth Bowl includes feta, so it's vegetarian. Ask for it without feta and check the dressing with us when you order.",
      },
      {
        q: "Is the falafel vegan?",
        a: "Our falafel is listed as vegan on the menu, and it's cooked in olive oil or avocado oil. If you have a specific concern, ask us when you order.",
      },
      {
        q: "Which dips are vegan?",
        a: "Hummus and roasted eggplant dip are the ones to pick. Tzatziki contains yogurt, so it isn't vegan.",
      },
    ],
    relatedGuides: ["what-is-falafel", "hummus-tzatziki-eggplant-dip", "what-is-tahini"],
  },
  {
    slug: "vegetarian",
    h1: "Vegetarian Food at Pita Bowl in Mission Beach",
    seoTitle: "Vegetarian Restaurant in Mission Beach, San Diego",
    metaDescription:
      "Vegetarian bowls, falafel wraps, dips with warm pita and housemade baklava at Pita Bowl in Mission Beach. Cooked in olive and avocado oil, never seed oils.",
    intro: [
      "Vegetarians don't get a side menu here. The Earth Bowl was built as a full meal: black lentils, mixed greens, falafel, hummus, eggplant dip, pickled onions, cucumbers, feta, and a jalapeno cilantro dressing. It's filling and it has a lot going on.",
      "Beyond that, falafel can stand in for meat in any bowl or wrap, and all three dips are meat-free: hummus, tzatziki, and roasted eggplant. A Dip & Pita order with warm pita works well as a starter or a light lunch.",
      "Dessert counts too. The pistachio and walnut baklava are made in-house with phyllo, nuts, honey, and butter. If you want to double check any item, ask us at the counter or call the shop. Everything is cooked in olive oil or avocado oil.",
    ],
    howToOrder: [
      "Order the Earth Bowl as it comes. It already has falafel, lentils, and feta.",
      "Swap falafel in for the meat on any bowl or wrap, or start with Build Your Own and pick falafel as your protein.",
      "Choose any dip. Hummus, tzatziki, and roasted eggplant are all vegetarian.",
      "Want more protein? Add a side of 3 or 5 falafel.",
    ],
    faqs: [
      {
        q: "What is the best vegetarian bowl at Pita Bowl?",
        a: "The Earth Bowl is the one most vegetarians order. It has black lentils, falafel, hummus, eggplant dip, feta, and fresh vegetables.",
      },
      {
        q: "Can I get the Chicken Pita Bowl with falafel instead?",
        a: "Yes. Bowls and wraps are customizable, so you can ask for falafel in place of the meat.",
      },
      {
        q: "Is the baklava vegetarian?",
        a: "Yes. Our pistachio and walnut baklava are made with phyllo, nuts, honey, and butter.",
      },
    ],
    relatedGuides: ["what-is-falafel", "hummus-tzatziki-eggplant-dip", "what-is-baklava"],
  },
  {
    slug: "high-protein",
    h1: "High-Protein Bowls and Wraps in Mission Beach",
    seoTitle: "High-Protein Meals in Mission Beach, San Diego",
    metaDescription:
      "Chicken shawarma, steak shawarma and chicken tikka bowls and wraps in Mission Beach. Add extra protein to any order. FIT members get 15% off.",
    intro: [
      "If you're coming off a run on the boardwalk or a session at the gym, the protein options are the reason to stop by. We have four: chicken shawarma, steak shawarma, chicken tikka, and falafel. Each one can go in a bowl or a wrap, and you can add an extra side of any meat to any order.",
      "Bowls are the easiest way to build a big plate. The Steak Shawarma Bowl and Chicken Tikka Bowl come on saffron rice with greens and hummus. The Chicken Pita Bowl adds tzatziki, feta, and corn. If you'd rather choose every piece, Build Your Own Bowl lets you set the base, dip, protein, toppings, and sauce.",
      "Everything is cooked in olive oil or avocado oil, with no seed oils. And if you're a FIT member, you get 15% off.",
    ],
    howToOrder: [
      "Pick a bowl over a wrap if you want more room for protein and toppings.",
      "Add a side of chicken shawarma, steak shawarma, or chicken tikka to double up.",
      "Ask for mixed greens as your base if you want a lighter bowl with the same protein.",
      "Choose hummus or tzatziki as your dip. Tzatziki is yogurt-based.",
      "FIT member? Mention it to get your 15% off.",
    ],
    faqs: [
      {
        q: "Which Pita Bowl dishes are highest in protein?",
        a: "The meat bowls and wraps: Chicken Pita Bowl, Steak Shawarma Bowl, Chicken Tikka Bowl, and the shawarma wraps. Adding a side of meat is the simplest way to get more.",
      },
      {
        q: "Can I add extra meat to my bowl?",
        a: "Yes. Side chicken shawarma, side steak shawarma, and side chicken tikka are all on the menu as add-ons.",
      },
      {
        q: "Do you have a discount for FIT members?",
        a: "Yes. FIT members get 15% off at Pita Bowl.",
      },
      {
        q: "Is there a vegetarian high-protein option?",
        a: "Falafel is our plant-based protein. Order it in a bowl or wrap, or add a side of 3 or 5 falafel.",
      },
    ],
    relatedGuides: ["high-protein-bowl", "chicken-tikka-vs-shawarma", "what-is-shawarma"],
  },
  {
    slug: "gluten-friendly",
    h1: "Gluten-Friendly Bowls in Mission Beach",
    seoTitle: "Gluten-Friendly Food in Mission Beach, San Diego",
    metaDescription:
      "Gluten-friendly rice and greens bowls at Pita Bowl in Mission Beach. How to order without pita, and what celiac guests should ask about shared prep.",
    intro: [
      "Our bowls are the natural pick if you're avoiding gluten. The Chicken Pita Bowl, Steak Shawarma Bowl, Chicken Tikka Bowl, and Earth Bowl are built on rice, lentils, or greens instead of bread, and we mark them as gluten-friendly on the menu.",
      "Gluten-friendly is not the same as gluten-free. We make pita, tortillas, pita chips, and other items with gluten in the same kitchen, so we can't promise there's no cross-contact. If you have celiac disease or a serious sensitivity, please talk to us before you order so we can tell you how a dish is prepared and you can decide what's right for you.",
      "For most people cutting back on bread, a bowl with a protein, a dip, and a sauce is a full meal with nothing missing. Everything is cooked in olive oil or avocado oil.",
    ],
    howToOrder: [
      "Order a bowl rather than a wrap. Wraps come in pita or tortilla.",
      "Skip the side of pita or pita chips with your dip and ask what you can have instead.",
      "If you have celiac disease, call 858-210-9524 or ask at the counter about shared prep and fryers before ordering.",
      "Ask about specific sauces and the falafel if you're unsure. We'll tell you what we know.",
    ],
    faqs: [
      {
        q: "Is Pita Bowl gluten-free?",
        a: "We are not a gluten-free kitchen. Several bowls are gluten-friendly, meaning they're made without bread, but they're prepared in a kitchen that also handles pita and tortillas.",
      },
      {
        q: "Which dishes are gluten-friendly?",
        a: "The Chicken Pita Bowl, Steak Shawarma Bowl, Chicken Tikka Bowl, and Earth Bowl are marked gluten-friendly on our menu.",
      },
      {
        q: "I have celiac disease. Can I eat here?",
        a: "Please ask us before you order. We'll explain how the dish you want is prepared, including shared surfaces and fryers, so you can make the call.",
      },
    ],
    relatedGuides: ["high-protein-bowl", "hummus-tzatziki-eggplant-dip"],
  },
  {
    slug: "kid-friendly",
    h1: "Kid-Friendly Food in Mission Beach",
    seoTitle: "Kid-Friendly Restaurant in Mission Beach, San Diego",
    metaDescription:
      "Chicken tenders and fries, simple bowls, warm pita and dips. Kid-friendly takeout at Pita Bowl, a short walk from Belmont Park in Mission Beach.",
    intro: [
      "A day at Belmont Park or on the sand tends to end with hungry kids and not much patience. We're a few minutes' walk away on Mission Blvd, and our kids meal is simple: three chicken tenders and fries with a side of sauce.",
      "For kids who want what the grown-ups are having, a plain Build Your Own Bowl works well. Pick rice, chicken shawarma, and one dip, and leave off anything they won't eat. Warm pita with hummus is an easy one for picky eaters, and Chicken Shawarma Fries are good for sharing.",
      "Parents ask us about oil a lot, so here's the answer: there are no seed oils in anything we make. The tenders and fries are cooked in olive oil or avocado oil, same as the rest of the menu.",
    ],
    howToOrder: [
      "The Chicken Tenders and Fries kids meal comes with three tenders, fries, and a side of sauce.",
      "For a kid-sized bowl, use Build Your Own and keep it simple: rice, chicken, one dip.",
      "Ask for sauce on the side so they can try it first.",
      "Baklava is made with pistachios or walnuts. Tell us about any nut allergies before ordering dessert.",
      "Order ahead online and pick up on your way back from the beach.",
    ],
    faqs: [
      {
        q: "Do you have a kids menu?",
        a: "Yes. Our kids meal is three chicken tenders and fries with a side of sauce.",
      },
      {
        q: "How far is Pita Bowl from Belmont Park?",
        a: "We're at 3833 Mission Blvd, a few minutes' walk from Belmont Park and the Mission Beach boardwalk.",
      },
      {
        q: "Is there anything mild for picky eaters?",
        a: "Warm pita with hummus, chicken tenders and fries, or a plain bowl with rice and chicken shawarma. You can leave off any topping or sauce.",
      },
    ],
    relatedGuides: ["food-near-belmont-park", "what-is-shawarma", "hummus-tzatziki-eggplant-dip"],
  },
];

export const cateringCopy: CateringCopy[] = [
  {
    slug: "office-lunch",
    h1: "Office Lunch Catering in San Diego",
    seoTitle: "Office Lunch Catering in San Diego",
    metaDescription:
      "Shawarma bowls, falafel and dips for your office lunch in San Diego. Seed-oil-free, customizable, and easy for mixed diets. Request a quote from Pita Bowl.",
    intro: [
      "Ordering lunch for an office means feeding people who eat very differently. One person wants steak, another is vegetarian, someone else is avoiding bread. Our menu handles that without a lot of special requests. Bowls are built from a base, dip, protein, toppings, and sauce, so most diets fit inside the same order.",
      "We have four proteins: chicken shawarma, steak shawarma, chicken tikka, and falafel. The dips are hummus, tzatziki, and roasted eggplant. Several bowls are gluten-friendly and falafel covers your vegetarian guests. Nothing is cooked in seed oils, only olive oil and avocado oil, which is one less question to field from the team.",
      "To get started, fill out the Request a Quote form on our catering page. Give us your headcount, date, timing, where you are, and any dietary needs in the notes. We'll get back to you with details and pricing, and you can adjust from there.",
    ],
    whatToOrder: [
      {
        dish: "chicken-pita-bowl",
        why: "A safe middle-of-the-road pick that most people like: rice, greens, chicken shawarma, hummus, tzatziki, and feta.",
      },
      {
        dish: "earth-bowl",
        why: "Covers vegetarians with a full meal of lentils, falafel, hummus, and eggplant dip. Contains feta.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "For the people who want something heartier. Saffron rice, steak shawarma, hummus, and eggplant dip.",
      },
      {
        dish: "zesty-chicken-wrap",
        why: "Easier to eat at a desk or in a meeting than a bowl.",
      },
      {
        dish: "dip-and-pita",
        why: "Something to share on the table while people grab their plates.",
      },
    ],
    planningTips: [
      "Do a quick dietary poll before you request a quote, and put the results in the notes.",
      "Mix bowls and wraps. Wraps suit people eating on the go, bowls suit people sitting down.",
      "Include the exact time you want food ready so we can plan around it.",
      "Ask us about delivery and setup when you request a quote rather than assuming either way.",
    ],
    faqs: [
      {
        q: "How do I order catering for my office?",
        a: "Fill out the Request a Quote form on our catering page with your date, headcount, and any notes. We'll get back to you with details and pricing.",
      },
      {
        q: "Can you handle vegetarian and gluten-free requests?",
        a: "We have vegetarian options and several gluten-friendly bowls. We're not a gluten-free kitchen, so list any celiac guests in the notes and we'll talk through options.",
      },
      {
        q: "How much does office catering cost?",
        a: "It depends on what you order and how many people you're feeding. Send a quote request and we'll reply with pricing.",
      },
    ],
    relatedGuides: ["what-is-shawarma", "high-protein-bowl", "what-are-seed-oils"],
  },
  {
    slug: "corporate-events",
    h1: "Corporate Event Catering in San Diego",
    seoTitle: "Corporate Event Catering in San Diego",
    metaDescription:
      "Mediterranean catering for San Diego corporate events, meetings and offsites. Seed-oil-free shawarma, falafel and dips. Request a quote from Pita Bowl.",
    intro: [
      "A corporate event has a different shape than a regular team lunch. There may be clients or guests you've never met, a schedule built around talks or meetings, and more people than usual with dietary needs you won't hear about until the day. The food should be easy to serve and hard to get wrong.",
      "Mediterranean food helps here. Shawarma, falafel, rice, greens, and dips cover a lot of ground, and our dishes are customizable down to the sauce. We cook everything with olive oil and avocado oil and never use seed oils. Ingredients are prepped fresh in-house every day. For something to end the day on, our housemade baklava travels well.",
      "We don't publish set catering packages. Use the Request a Quote form on our catering page and tell us about the event: the date, the number of guests, the timing, the address, and any dietary requirements. We'll follow up with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-tikka-bowl",
        why: "A crowd-pleasing main with saffron rice, hummus, tzatziki, and feta. Marked gluten-friendly.",
      },
      {
        dish: "falafel-wrap",
        why: "A plant-based option that's easy to hand out and eat standing up.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "A heartier option for guests who want red meat.",
      },
      {
        dish: "dip-and-pita",
        why: "Works as a starter during networking or before a program begins.",
      },
      {
        dish: "pistachio-baklava",
        why: "A small, housemade sweet to finish. It contains nuts, so label it for guests.",
      },
    ],
    planningTips: [
      "Collect dietary needs during RSVP and paste them into the notes field.",
      "Tell us when people will actually eat, not just when the event starts.",
      "Ask us about delivery, setup, and serving supplies when you request a quote.",
      "Label anything with nuts or dairy for guests. Baklava has nuts, and tzatziki and feta contain dairy.",
    ],
    faqs: [
      {
        q: "Do you cater corporate events in San Diego?",
        a: "Yes. Send us the details through the Request a Quote form on our catering page and we'll get back to you with options and pricing.",
      },
      {
        q: "What information should I include in my quote request?",
        a: "Your name, email, phone, event date, number of guests, and any notes such as dietary needs, address, and timing.",
      },
      {
        q: "Is your food seed-oil-free?",
        a: "Yes. We cook everything with olive oil and avocado oil and use no seed oils in anything we make.",
      },
    ],
    relatedGuides: ["mediterranean-vs-middle-eastern-food", "what-are-seed-oils", "what-is-baklava"],
  },
  {
    slug: "birthday-parties",
    h1: "Birthday Party Catering in San Diego",
    seoTitle: "Birthday Party Catering in San Diego",
    metaDescription:
      "Shawarma, chicken tenders, pita nachos and housemade desserts for birthday parties in San Diego. Seed-oil-free. Request a catering quote from Pita Bowl.",
    intro: [
      "Birthday parties usually mean feeding a mix of kids and adults, and the two groups don't always want the same thing. We have food for both. Chicken tenders and fries are on our menu for kids, while the adults can have shawarma bowls, wraps, and something to share like Pita Nachos.",
      "Then there's dessert. Our sweets are made in-house: pistachio and walnut baklava, tiramisu, hazelnut tiramisu, lazy cake, and a Dubai chocolate brownie. If you're doing a cake anyway, a few of these on the side give people options. If you're not, they can be the dessert.",
      "Everything we make is cooked with olive oil or avocado oil, with no seed oils, which some parents will be glad to hear. To plan the food, fill out the Request a Quote form on our catering page. Tell us how many guests, how many are kids, and what you have in mind, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "kids-chicken-tenders",
        why: "Three tenders and fries with a side of sauce. The simplest win for younger guests.",
      },
      {
        dish: "pita-nachos",
        why: "Crispy pita chips with feta, steak shawarma, and garlic sauce. Made for sharing.",
      },
      {
        dish: "chicken-pita-bowl",
        why: "A filling plate for the adults that most people will eat.",
      },
      {
        dish: "lazy-cake",
        why: "A housemade chocolate and biscuit dessert that goes over well with kids.",
      },
      {
        dish: "pistachio-baklava",
        why: "A housemade treat for adults. Contains nuts.",
      },
    ],
    planningTips: [
      "Give us separate counts for kids and adults in the notes.",
      "Mention any allergies, especially nut allergies if you want baklava.",
      "Let us know the party start time and when you plan to serve food.",
      "Ask about desserts in your quote request if you'd like several kinds.",
    ],
    faqs: [
      {
        q: "Do you have kid-friendly catering options?",
        a: "Yes. Chicken tenders and fries are on our menu, and plain bowls with rice and chicken work well for kids too.",
      },
      {
        q: "Can I order desserts for a birthday party?",
        a: "Yes. Our desserts are housemade. Include what you'd like in your quote request and we'll follow up.",
      },
      {
        q: "How do I get a price for party food?",
        a: "Fill out the Request a Quote form on our catering page with your date, guest count, and notes. We'll get back to you with details and pricing.",
      },
    ],
    relatedGuides: ["what-is-baklava", "what-is-shawarma", "food-near-belmont-park"],
  },
  {
    slug: "beach-parties",
    h1: "Food for Beach Days in Mission Beach",
    seoTitle: "Beach Party Food in Mission Beach and Mission Bay",
    metaDescription:
      "Planning a group day on Mission Beach or Mission Bay? Pita Bowl on Mission Blvd makes wraps, bowls and dips for groups. Request a quote or order for pickup.",
    intro: [
      "We're on Mission Blvd, a few minutes' walk from the boardwalk and Belmont Park, so a lot of our customers come in with sand on their feet. If you're planning a group day on Mission Beach or around Mission Bay, we're close by and can help with the food.",
      "Wraps tend to be the best fit for the beach. They're easy to hold, they come in warm pita or toasted tortilla, and nobody needs a table. Dips with pita and falafel are good for passing around. If your group is set up for plates, bowls work too.",
      "For a smaller group, ordering online for pickup may be all you need. For a bigger day, fill out the Request a Quote form on our catering page. Tell us how many people, the date, when you want to eat, and where you'll be. We'll get back to you with details and pricing. We're open until 8 PM Sunday through Thursday and 9 PM on Friday and Saturday.",
    ],
    whatToOrder: [
      {
        dish: "cali-shawarma-wrap",
        why: "Steak shawarma, pepper jack, fries, guacamole, and garlic aioli in one wrap. A full meal you can eat on a towel.",
      },
      {
        dish: "falafel-wrap",
        why: "A vegan-tagged wrap with hummus, greens, and falafel for the plant-based people in your group.",
      },
      {
        dish: "zesty-chicken-wrap",
        why: "Chicken shawarma, hummus, pickles, and garlic sauce. Easy to hold, easy to like.",
      },
      {
        dish: "dip-and-pita",
        why: "Something to pass around while everyone settles in.",
      },
      {
        dish: "falafel",
        why: "Good finger food for sharing.",
      },
    ],
    planningTips: [
      "Wraps are easier than bowls when people are sitting on sand.",
      "Bring a cooler for anything with tzatziki or other dairy.",
      "Give us a clear time and where your group will be in the notes so we can talk through pickup or other options.",
      "For a small group, online ordering for pickup is often the quickest route.",
    ],
    faqs: [
      {
        q: "How close is Pita Bowl to the beach?",
        a: "We're at 3833 Mission Blvd, a few minutes' walk from the Mission Beach boardwalk and Belmont Park.",
      },
      {
        q: "Can you bring food to the beach?",
        a: "Ask us when you request a quote. Include where your group will be and when you want to eat, and we'll let you know what we can do.",
      },
      {
        q: "What food travels best for a beach day?",
        a: "Wraps. They're easy to hold and don't need plates. Falafel and dip with pita are good for sharing.",
      },
    ],
    relatedGuides: ["food-near-belmont-park", "what-is-falafel", "what-is-shawarma"],
  },
  {
    slug: "team-and-sports",
    h1: "Team and Sports Catering in San Diego",
    seoTitle: "Team Meals and Sports Catering in San Diego",
    metaDescription:
      "High-protein shawarma and chicken tikka bowls for teams, clubs and tournaments in San Diego. Seed-oil-free cooking. Request a quote from Pita Bowl.",
    intro: [
      "Feeding a team after a game, a practice, or a tournament day is mostly about volume and protein. Our bowls do well here. Chicken shawarma, steak shawarma, and chicken tikka on rice with greens, a dip, and a sauce make a real meal, and falafel is there for players who don't eat meat.",
      "Coaches and team parents also deal with a lot of individual preferences. Some athletes are cutting bread, some are vegetarian, some just want plain chicken and rice. Since our bowls and wraps are customizable down to each part, those requests fit into the same order without much fuss.",
      "We cook with olive oil and avocado oil and use no seed oils in anything, and our ingredients are prepped fresh each day. To plan a team meal, fill out the Request a Quote form on our catering page with your headcount, date, timing, and any dietary needs. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-tikka-bowl",
        why: "Chicken tikka on saffron rice with greens, hummus, and tzatziki. A solid post-game plate.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "For athletes who want red meat with their rice.",
      },
      {
        dish: "build-your-own-bowl",
        why: "Lets players with specific needs pick their own base, protein, and toppings.",
      },
      {
        dish: "chicken-shawarma-fries",
        why: "Fries topped with chicken shawarma and garlic sauce. Good for refueling and sharing.",
      },
    ],
    planningTips: [
      "Ask players for dietary restrictions ahead of time and list them in the notes.",
      "Plan for bigger appetites after games and practices.",
      "Give us a realistic time window, especially if your game might run long.",
      "Ask us about extra protein when you request a quote.",
    ],
    faqs: [
      {
        q: "What's a good high-protein meal for a sports team?",
        a: "Our chicken shawarma, steak shawarma, and chicken tikka bowls are the usual picks. Falafel bowls work for vegetarian players.",
      },
      {
        q: "Can each player customize their meal?",
        a: "Our bowls and wraps are fully customizable. Describe what you need in the quote request notes and we'll work out how to handle it.",
      },
      {
        q: "Do you offer a discount for teams?",
        a: "FIT members get 15% off. For team orders, ask us about pricing when you request a quote.",
      },
    ],
    relatedGuides: ["high-protein-bowl", "chicken-tikka-vs-shawarma", "what-is-shawarma"],
  },
  {
    slug: "holiday-parties",
    h1: "Holiday Party Catering in San Diego",
    seoTitle: "Holiday Party Catering in San Diego",
    metaDescription:
      "Shawarma, dips with warm pita, bourak and housemade baklava for holiday parties in San Diego. Seed-oil-free. Request a catering quote from Pita Bowl.",
    intro: [
      "Holiday parties tend to run on shared food: small things to pick at while people talk, then something more filling once everyone has arrived. Our menu covers both. Dips with warm pita and bourak, our Middle Eastern egg rolls stuffed with steak, work well early on. Shawarma bowls and wraps take care of the main meal.",
      "Dessert is a big part of most holiday spreads, and ours are made in-house. Pistachio and walnut baklava are layered phyllo with nuts and honey. Tiramisu, hazelnut tiramisu, lazy cake, and the Dubai chocolate brownie round it out.",
      "The holidays are busy for everyone, so it helps to reach out early. Fill out the Request a Quote form on our catering page with your date, guest count, timing, and any dietary needs. We'll get back to you with details and pricing. Everything is cooked with olive oil or avocado oil, never seed oils.",
    ],
    whatToOrder: [
      {
        dish: "dip-and-pita",
        why: "Hummus, tzatziki, or roasted eggplant with warm pita. Easy to set out and share.",
      },
      {
        dish: "bourak",
        why: "Middle Eastern egg rolls stuffed with steak. A good handheld appetizer.",
      },
      {
        dish: "chicken-pita-bowl",
        why: "A filling main that suits most guests.",
      },
      {
        dish: "walnut-baklava",
        why: "Housemade with phyllo, walnuts, and honey. Contains nuts.",
      },
      {
        dish: "hazelnut-tiramisu",
        why: "A richer dessert option for the end of the night.",
      },
    ],
    planningTips: [
      "Send your quote request as early as you can. The holiday season gets busy.",
      "Plan appetizers and mains separately if guests will arrive over a few hours.",
      "List dietary needs in the notes, and label nut and dairy items for guests.",
      "Ask about desserts in your quote request if you'd like a mix.",
    ],
    faqs: [
      {
        q: "Do you cater holiday parties?",
        a: "Yes. Fill out the Request a Quote form on our catering page and we'll get back to you with details and pricing.",
      },
      {
        q: "What appetizers do you have for a party?",
        a: "Dip & Pita, bourak, Pita Nachos, and falafel are good for sharing.",
      },
      {
        q: "Are your desserts made in-house?",
        a: "Yes. Our baklava, tiramisu, lazy cake, and brownies are housemade.",
      },
    ],
    relatedGuides: ["what-is-baklava", "hummus-tzatziki-eggplant-dip", "mediterranean-vs-middle-eastern-food"],
  },
];
