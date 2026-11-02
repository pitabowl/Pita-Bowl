/**
 * Wave 3 catering occasion pages (/catering/[slug]), batch 1:
 * life events, holidays, campus, school and youth sports.
 * Only verified business facts. Delivery, setup, minimums and holiday hours
 * are always "ask when you request a quote". No halal claims.
 */
import type { CateringCopy } from "./types";

export const catering1: CateringCopy[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "graduation-party-catering",
    h1: "Graduation Party Catering in San Diego",
    seoTitle: "Graduation Party Catering in San Diego",
    metaDescription:
      "Food for open-house graduation parties in San Diego: wraps, falafel, dips and housemade baklava that hold up as guests come and go. Request a quote.",
    intro: [
      "Most graduation parties run like an open house. Guests drift in over three or four hours, often after stopping at two or three other parties that same weekend, so some arrive hungry and some only want a bite and a piece of cake. The food has to look good at hour one and still be worth eating at hour three.",
      "That points toward food that sits well and doesn't need assembly. Dips with pita, falafel, and Pita Nachos hold their own on a buffet table. Bowls suit the relatives who stay all afternoon and want a real plate, while wraps suit the friends who show up between other parties and eat standing. Our savory food is cooked with olive oil and avocado oil, never seed oils, and our desserts are housemade, which gives you a companion or an alternative to the sheet cake.",
      "Graduation season bunches up on a handful of weekends in late spring and early summer, so send your quote request early. Include the party window, not just the start time, and a rough guess at how many people will be there during the busiest hour. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "dip-and-pita",
        why: "Hummus, tzatziki, or roasted eggplant dip with pita. Easy to set out early and top up as the afternoon goes on.",
      },
      {
        dish: "falafel",
        why: "Finger food that works for the vegetarian and vegan guests. Tagged vegan.",
      },
      {
        dish: "zesty-chicken-wrap",
        why: "Chicken shawarma, hummus, pickles, and garlic sauce in one hand, for guests who are only staying half an hour.",
      },
      {
        dish: "chicken-pita-bowl",
        why: "A full plate for the family members who settle in for the whole party.",
      },
      {
        dish: "walnut-baklava",
        why: "Small, housemade, and easy to grab next to the cake. Contains nuts, butter, and wheat.",
      },
    ],
    planningTips: [
      "Plan food for your busiest hour, not the total guest list. At an open house, not everyone is there at once.",
      "Ask in your quote request whether it makes sense to split the order so some food is fresh later in the party.",
      "If the party is outdoors, keep tzatziki and other dairy items chilled and set out smaller amounts at a time.",
      "Label the baklava for nuts. A graduation crowd is full of teenagers whose allergies you won't know.",
    ],
    faqs: [
      {
        q: "How much food do I need for an open-house graduation party?",
        a: "It depends on how long the party runs and how many people are there at the same time. Share your guest list size and party window in the quote request and we'll help you think it through.",
      },
      {
        q: "Can I order dessert instead of a cake?",
        a: "Yes. Our baklava, tiramisu, lazy cake, and Dubai chocolate brownie are housemade. Ask about quantities in your quote request.",
      },
      {
        q: "Do you have vegetarian options for a graduation party?",
        a: "Yes. The Earth Bowl, falafel, and Dip & Pita are vegetarian, and the Falafel Delight Wrap is tagged vegan.",
      },
    ],
    relatedGuides: ["how-to-order-food-for-a-group", "how-to-serve-mezze-at-a-party", "what-is-baklava"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "baby-shower-catering",
    h1: "Baby Shower Catering in San Diego",
    seoTitle: "Baby Shower Catering in San Diego",
    metaDescription:
      "Baby shower food in San Diego: fork-friendly bowls, falafel, dips and housemade desserts for a daytime crowd, with ingredient answers for the parent-to-be.",
    intro: [
      "A baby shower is usually a daytime event with a loose schedule: guests arrive, mingle, play a game or two, watch gifts get opened, and eat somewhere in the middle. People often sit in a living room or backyard with a plate on their lap, so food that is easy to eat with a fork and doesn't drip matters more than food that impresses.",
      "The guest of honor comes first. Many pregnant people follow food guidance from their doctor, such as avoiding certain cheeses, and they shouldn't have to interrogate the buffet. Our bowls are built from components, so items like feta or tzatziki can be left off a plate. If something specific is on their avoid list, ask us about that ingredient when you request a quote. Desserts too: classic tiramisu recipes often use raw egg, so ask how ours is made if that matters.",
      "Showers also draw a wide range of ages, from grandparents to toddlers. A spread of bowls, one or two shared dips, and a small dessert tray covers most of them. Send your date, guest count, and serving time through the Request a Quote form, and we'll follow up with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-pita-bowl",
        why: "White rice, greens, chicken shawarma, hummus, and vegetables. Fork-friendly, and the feta and tzatziki can be left off.",
      },
      {
        dish: "earth-bowl",
        why: "A vegetarian plate with black lentils, falafel, hummus, and eggplant dip. Contains feta.",
      },
      {
        dish: "dip-and-pita",
        why: "Something to share during the first round of mingling, before the main food comes out.",
      },
      {
        dish: "lazy-cake",
        why: "A housemade chocolate and biscuit dessert that sits well beside a cake or replaces one.",
      },
      {
        dish: "pistachio-baklava",
        why: "A small housemade sweet for the dessert table. Contains nuts, butter, and wheat.",
      },
    ],
    planningTips: [
      "Ask the parent-to-be privately what they're avoiding and put it in the notes, so their plate is sorted before anyone arrives.",
      "Choose bowls over wraps if guests will be eating on couches with plates on their knees.",
      "Set food out after the first round of mingling or games so it isn't sitting the whole time.",
      "Label dairy and nut items. Tzatziki and feta contain dairy, and baklava has nuts.",
    ],
    faqs: [
      {
        q: "Can you leave feta or tzatziki off bowls for a pregnant guest?",
        a: "Our bowls are built from components, so leaving items off is usually simple. Note it in your quote request and ask about any ingredient you're unsure of.",
      },
      {
        q: "Is your tiramisu made with raw eggs?",
        a: "Recipes vary, and we'd rather answer that directly than guess here. Ask us before ordering it for a pregnant guest.",
      },
      {
        q: "What should I serve at a daytime baby shower?",
        a: "Fork-friendly bowls, a shared dip with warm pita, and a few housemade desserts cover most guests without much fuss.",
      },
    ],
    relatedGuides: ["what-is-a-mediterranean-bowl", "what-is-tiramisu", "hummus-tzatziki-eggplant-dip"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "bridal-shower-catering",
    h1: "Bridal Shower Catering in San Diego",
    seoTitle: "Bridal Shower Catering in San Diego",
    metaDescription:
      "Bridal shower catering in San Diego: a mezze-style table of dips, falafel and Earth Bowls, plus housemade baklava and tiramisu for a long, social afternoon.",
    intro: [
      "Bridal showers lean social. The guest list is often a mix of friends, coworkers, and older relatives from both families, some meeting for the first time, and most of the afternoon goes to talking. People eat in small rounds rather than one big meal, so grazing food fits the rhythm better than a single plated course.",
      "A mezze-style table works well: a couple of dips with warm pita, falafel, and a bowl or two for anyone who wants something more filling. Lighter dishes like the Earth Bowl, with black lentils, greens, falafel, hummus, and eggplant dip, suit an afternoon event. Dessert is often the centerpiece of a shower table, and ours are housemade, from pistachio baklava to hazelnut tiramisu.",
      "Showers are usually hosted by a friend, a sister, or the bridal party rather than the bride, so the person ordering may not know everyone's diet. Ask around in the invitation or the group chat and put what you learn in the notes on the Request a Quote form. We'll come back with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "earth-bowl",
        why: "A lighter, vegetarian bowl that still counts as lunch. Contains feta.",
      },
      {
        dish: "dip-and-pita",
        why: "The base of a grazing table. Pick hummus, tzatziki, or roasted eggplant.",
      },
      {
        dish: "falafel",
        why: "Easy to pick up while holding a glass. Tagged vegan.",
      },
      {
        dish: "pistachio-baklava",
        why: "Housemade, small, and photographs well on a dessert table. Contains nuts.",
      },
      {
        dish: "hazelnut-tiramisu",
        why: "A richer dessert to bring out for gifts or toasts. Contains dairy and hazelnut.",
      },
    ],
    planningTips: [
      "Collect dietary needs with the RSVPs and list them in the notes.",
      "Serve savory food first and bring desserts out for gifts or toasts, so the dessert table is full when it matters.",
      "Ask whether wraps can be cut in halves for a grazing table when you request a quote.",
      "If the shower is outdoors, keep tzatziki and other dairy on ice.",
    ],
    faqs: [
      {
        q: "What's good finger food for a bridal shower?",
        a: "Falafel, Dip & Pita, and bourak are easy to pick up. Pair them with a few bowls for guests who want a full plate.",
      },
      {
        q: "Do you have vegan options for a shower?",
        a: "The Falafel Delight Wrap and our falafel sides are tagged vegan. The Earth Bowl is vegetarian and contains feta.",
      },
      {
        q: "Can I order only desserts?",
        a: "Ask us in your quote request. Our desserts are housemade, and we'll tell you what we can put together.",
      },
    ],
    relatedGuides: ["what-is-a-mezze-platter", "how-to-serve-mezze-at-a-party", "pistachio-vs-walnut-baklava"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "rehearsal-dinner-catering",
    h1: "Rehearsal Dinner Catering in San Diego",
    seoTitle: "Rehearsal Dinner Catering in San Diego",
    metaDescription:
      "A relaxed rehearsal dinner in San Diego: family-style steak shawarma, chicken tikka and falafel bowls, dips and baklava for the wedding party. Request a quote.",
    intro: [
      "The rehearsal dinner happens the night before the wedding, usually right after a run-through at the ceremony site. The group is smaller than the wedding: the couple, the wedding party, immediate family, and often out-of-town guests who just landed. Everyone is a little tired and tomorrow starts early, so the meal should be relaxed and shouldn't run late.",
      "A casual, family-style dinner suits that mood, especially at a rental, a backyard, or a beach house. Steak shawarma, chicken tikka, and falafel bowls give people a proper dinner with a clear vegetarian choice, and dips with warm pita fill the table during toasts. A tray of baklava is an easy dessert that won't compete with the wedding cake.",
      "Timing matters more than usual. Rehearsals run over, and you'll want food ready when people actually sit down. Our hours are 11 AM to 8 PM Sunday through Thursday and until 9 PM on Friday and Saturday, so put your expected dinner time in the Request a Quote form and we'll follow up with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "steak-shawarma-bowl",
        why: "Saffron rice, steak shawarma, hummus, and eggplant dip. The heartiest plate for a dinner crowd.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "A second main most guests will happily eat. Marked gluten-friendly.",
      },
      {
        dish: "earth-bowl",
        why: "A full vegetarian dinner rather than a side dish. Contains feta.",
      },
      {
        dish: "dip-and-pita",
        why: "Something on the table while the toasts run long.",
      },
      {
        dish: "walnut-baklava",
        why: "A light, housemade finish that leaves room for tomorrow's cake. Contains nuts.",
      },
    ],
    planningTips: [
      "Tell us when you expect to eat after the rehearsal, not when the rehearsal is scheduled to end.",
      "Gather dietary needs from the wedding party along with their other details and include them in the notes.",
      "Keep the menu short. Three bowl types and a shared dip are easier to serve the night before a wedding than a long spread.",
      "Ask about pickup, delivery, and serving supplies when you request a quote rather than assuming.",
    ],
    faqs: [
      {
        q: "Can Pita Bowl cater a casual rehearsal dinner?",
        a: "Yes. Use the Request a Quote form on our catering page with your date, headcount, and timing, and we'll get back to you with details and pricing.",
      },
      {
        q: "What if the rehearsal runs late?",
        a: "Put your expected dinner time in the quote request. We close at 8 PM Sunday through Thursday and 9 PM Friday and Saturday, so evening timing is worth talking through with us.",
      },
      {
        q: "Is there a vegetarian option for the wedding party?",
        a: "Yes. The Earth Bowl is vegetarian, and falafel can go in any build-your-own bowl or wrap.",
      },
    ],
    relatedGuides: ["chicken-vs-steak-shawarma", "what-is-mezze-culture", "what-is-baklava"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "wedding-after-party-food",
    h1: "Wedding After-Party Food in San Diego",
    seoTitle: "Wedding After-Party Food in San Diego",
    metaDescription:
      "Late-night food for a wedding after-party in San Diego: shawarma fries, wraps and bourak picked up before we close and reheated later. Request a quote.",
    intro: [
      "After a long reception, people get hungry again. Dinner was hours ago, there's been dancing and drinking, and the group heading to the after-party wants something salty, warm, and easy to hold. Shawarma became a late-night staple in a lot of cities for exactly this reason.",
      "Here's the honest catch: we close at 8 PM Sunday through Thursday and 9 PM on Friday and Saturday, and most after-parties start later than that. So this works best as food picked up before we close and served later. Pick dishes that hold up. Wraps travel well, bourak and shawarma fries can be reheated in an oven, and dips with pita don't need heat at all. Fries soften as they sit, so plan to reheat them or serve them first. If more than a couple of hours will pass, refrigerate the food and reheat it instead of leaving it out.",
      "A member of the wedding party or the planner is usually the right person to coordinate this, since the couple will be busy. Fill out the Request a Quote form with the date, headcount, and when you'd like to pick up, and ask what holds best for your timing. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "steak-shawarma-fries",
        why: "Fries topped with steak shawarma and garlic sauce. The classic late-night plate. Reheat in an oven.",
      },
      {
        dish: "cali-shawarma-wrap",
        why: "Steak shawarma, pepper jack, fries, guacamole, and garlic aioli. A full meal for anyone who skipped dinner while hosting.",
      },
      {
        dish: "beef-shawarma-wrap",
        why: "Steak shawarma, hummus, pickles, and tahini sauce. Holds together well when eaten standing.",
      },
      {
        dish: "bourak",
        why: "Middle Eastern egg rolls stuffed with steak. Handheld, and they crisp back up in the oven.",
      },
      {
        dish: "dip-and-pita",
        why: "Needs no reheating. Keep the dip cold until it goes out.",
      },
    ],
    planningTips: [
      "Pick up before we close and plan to reheat. Ask in your quote request what holds best for the gap you have.",
      "Line up an oven or a few warming trays at the after-party spot if you can.",
      "Keep anything with garlic sauce, aioli, or tzatziki in the fridge until it's served.",
      "Put one person in charge of the food so the couple doesn't have to think about it.",
    ],
    faqs: [
      {
        q: "Are you open late enough for an after-party?",
        a: "We're open until 8 PM Sunday through Thursday and 9 PM Friday and Saturday. Most after-parties start later, so plan on picking food up before close and serving it later.",
      },
      {
        q: "How do I reheat shawarma for a late-night crowd?",
        a: "An oven or skillet keeps texture better than a microwave. Our guide on reheating shawarma covers the details.",
      },
      {
        q: "What holds up best for late-night serving?",
        a: "Bourak, wraps, and dips with pita hold up well. Fries are best served soon after pickup or reheated in a hot oven.",
      },
    ],
    relatedGuides: ["how-to-reheat-shawarma", "how-shawarma-became-a-street-food-staple", "how-to-keep-wraps-from-getting-soggy"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "engagement-party-catering",
    h1: "Engagement Party Catering in San Diego",
    seoTitle: "Engagement Party Catering in San Diego",
    metaDescription:
      "Engagement party catering in San Diego: falafel, bourak, dips and Pita Nachos for a standing crowd where two families are meeting. Request a quote.",
    intro: [
      "An engagement party is often the first time both families and both friend groups are in the same room. People spend the evening introducing themselves, holding a drink, and moving around. That makes it a cocktail-party problem: the food has to be eaten standing, ideally with one hand, without anyone worrying about sauce on their shirt in the photos.",
      "Small shared plates work best. Falafel, bourak (our Middle Eastern egg rolls stuffed with steak), and dips with warm pita can go out on a table and be refilled. Pita Nachos, with steak shawarma, feta, and garlic sauce over crispy pita chips, are a heartier plate for later in the evening. If the party runs through the dinner hour, add a few bowls for guests who want to sit down with a full meal.",
      "Two families can also mean two sets of food traditions and dietary rules. Ask the couple what to expect, and list vegetarian, dairy-free, or other needs in the notes when you fill out the Request a Quote form. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "bourak",
        why: "A handheld appetizer people can eat mid-conversation.",
      },
      {
        dish: "falafel",
        why: "Bite-sized and tagged vegan, so it covers guests who don't eat meat.",
      },
      {
        dish: "dip-and-pita",
        why: "The anchor of the snack table. Order a few, one of each dip.",
      },
      {
        dish: "pita-nachos",
        why: "A shared plate with steak shawarma and feta for when the room gets hungrier.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "For the guests who want dinner, not snacks. Marked gluten-friendly.",
      },
    ],
    planningTips: [
      "Lead with handheld food, and add bowls only if the party covers dinner.",
      "Spread the food over two spots so guests don't bunch up at one table.",
      "Ask the couple about any family dietary practices and include them in the notes.",
      "Label which plates contain meat, since bourak and Pita Nachos both have steak.",
    ],
    faqs: [
      {
        q: "What finger foods work for an engagement party?",
        a: "Falafel, bourak, and Dip & Pita are the easiest to eat standing. Pita Nachos work as a shared plate later in the night.",
      },
      {
        q: "Can I get a mix of appetizers and full meals?",
        a: "Yes. Many hosts pair shared plates with a few bowls. Describe your plan in the quote request and we'll follow up.",
      },
      {
        q: "Is there anything dairy-free?",
        a: "Falafel and the Falafel Delight Wrap are tagged vegan. Several dishes include feta or tzatziki, so list dairy-free guests in the notes and we'll go over options.",
      },
    ],
    relatedGuides: ["what-is-a-mezze-platter", "what-is-borek", "how-to-serve-mezze-at-a-party"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "anniversary-party-catering",
    h1: "Anniversary Party Catering in San Diego",
    seoTitle: "Anniversary Party Catering in San Diego",
    metaDescription:
      "Anniversary party food in San Diego for every generation: chicken and steak bowls, an Earth Bowl, kids' tenders and housemade desserts. Request a quote.",
    intro: [
      "Milestone anniversary parties, the 25th, 40th, or 50th, are often planned by grown children for their parents, and the guest list can span four generations. You may have grandparents who'd rather sit and eat with a fork, young cousins who only want chicken tenders, and longtime friends of the couple who have given up red meat or dairy along the way.",
      "That calls for a seated, simple spread. Bowls are the easiest format for older guests: rice or lentils, a protein, a dip, and vegetables, with no wrap to hold together. The Chicken Pita Bowl is a familiar crowd-pleaser, the Steak Shawarma Bowl covers the beef eaters, and the Earth Bowl is there for vegetarians. Chicken tenders and fries keep the youngest guests happy. Finish with housemade desserts set out next to whatever cake you're cutting.",
      "Smaller anniversary dinners at home work too, for the couple and a few close friends. Either way, fill out the Request a Quote form with the date, headcount, and how many guests are kids, and we'll follow up with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-pita-bowl",
        why: "Rice, greens, chicken shawarma, hummus, and tzatziki. The safest pick for a mixed-age table.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "A heartier plate with saffron rice and eggplant dip for guests who want beef.",
      },
      {
        dish: "earth-bowl",
        why: "A complete vegetarian meal. Contains feta.",
      },
      {
        dish: "kids-chicken-tenders",
        why: "Three tenders and fries for the great-grandkids.",
      },
      {
        dish: "tiramisu",
        why: "A housemade classic that suits an older crowd. Contains dairy and coffee.",
      },
    ],
    planningTips: [
      "Ask about ages when you collect RSVPs so you can give a separate count for kids in the notes.",
      "Seat the meal if older guests are coming. Bowls are easier at a table than wraps on a lap.",
      "If someone has a strict dietary need, ask us about the specific ingredients rather than going by dish names.",
      "Serve food before the toasts and speeches so nobody sits through them hungry.",
    ],
    faqs: [
      {
        q: "Can one order cover grandparents and young kids?",
        a: "Yes. Bowls work well for older guests, and chicken tenders and fries are on our menu for kids. Give us both counts in the quote request.",
      },
      {
        q: "Can I order desserts to go with a cake?",
        a: "Yes. Our desserts are housemade, including baklava, tiramisu, and lazy cake. Add what you'd like to your quote request.",
      },
      {
        q: "How do I get a price for an anniversary party?",
        a: "Fill out the Request a Quote form on our catering page with your date, guest count, and notes, and we'll get back to you with details and pricing.",
      },
    ],
    relatedGuides: ["what-is-the-mediterranean-diet", "how-to-order-food-for-a-group", "what-is-tiramisu"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "retirement-party-catering",
    h1: "Retirement Party Catering in San Diego",
    seoTitle: "Retirement Party Catering in San Diego",
    metaDescription:
      "Retirement party catering in San Diego, for an office send-off or a weekend gathering: shawarma bowls, wraps, dips and housemade baklava. Request a quote.",
    intro: [
      "Retirement parties come in two forms. One is the workplace send-off: an hour in a conference room or break area during the workday, with coworkers stepping away from their desks, a few speeches, and a card going around. The other is the evening or weekend gathering, where coworkers past and present mix with the retiree's family and friends. They call for different food.",
      "For the office version, think quick and tidy. Wraps and bowls people can grab, eat in twenty minutes, and carry back to their desk if they have to. A Dip & Pita on the table keeps the room social while the speeches happen. For the bigger gathering, lean toward a fuller meal with steak, chicken, and falafel, plus a dessert tray.",
      "Either way, ask the retiree, or someone who knows them well, what they like. After thirty years of team lunches, they have opinions, and building the menu around their favorite is a small way to make the day about them. Office send-offs often run on a department budget, so give us the number and the headcount in your quote request. We'll reply with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "zesty-chicken-wrap",
        why: "Easy to eat between speeches or carry back to a desk.",
      },
      {
        dish: "falafel-wrap",
        why: "A vegan-tagged wrap so plant-based coworkers aren't left with chips.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "A sit-down plate for the evening version of the party.",
      },
      {
        dish: "dip-and-pita",
        why: "Something for the table while people gather and the card goes around.",
      },
      {
        dish: "pistachio-baklava",
        why: "A housemade sweet that's easier to serve than slicing a cake for forty people. Contains nuts.",
      },
    ],
    planningTips: [
      "Schedule the office version when most people can step away, and tell us exactly when food should be ready.",
      "Find out the retiree's favorite dish and make it the main option.",
      "Count former and remote coworkers who are coming in for the day.",
      "Ask about plates, napkins, and utensils when you request a quote.",
    ],
    faqs: [
      {
        q: "Can you cater a retirement party at the office?",
        a: "Yes. Fill out the Request a Quote form with the date, time, headcount, and address, and we'll get back to you with details and pricing.",
      },
      {
        q: "What if I'm working with a fixed budget?",
        a: "Include your budget and headcount in the quote request notes. We'll get back to you with what we can put together and the pricing.",
      },
      {
        q: "Do you have dessert for a send-off?",
        a: "Yes. Our baklava, tiramisu, lazy cake, and brownies are housemade. Baklava contains nuts, so label it for guests.",
      },
    ],
    relatedGuides: ["bowl-vs-wrap-which-should-you-order", "how-to-order-food-for-a-group", "what-is-baklava"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "housewarming-party-catering",
    h1: "Housewarming Party Catering in San Diego",
    seoTitle: "Housewarming Party Catering in San Diego",
    metaDescription:
      "Housewarming food for a half-unpacked San Diego home: wraps, falafel, dips and shawarma fries that need few plates and no kitchen. Request a quote.",
    intro: [
      "Housewarmings tend to happen before the house is really ready. The boxes are mostly gone, but the kitchen may not be fully stocked, there may be four chairs for twenty people, and the host is giving tours instead of cooking. Guests come and go through the afternoon or evening, wander from room to room, and eat wherever they end up standing.",
      "That makes food with no assembly the right call. Wraps come individually wrapped and barely need a plate. Falafel and dips with pita sit on a counter and get picked at between tours. For something more substantial, a tray of Pita Nachos or Chicken Shawarma Fries gets shared fast. Bowls work too, but only if people have somewhere to sit or set them down.",
      "If you've just moved to Mission Beach, Pacific Beach, or anywhere nearby, we're at 3833 Mission Blvd. For a small gathering, ordering online for pickup may be all you need. For a larger one, fill out the Request a Quote form with the date, time, guest count, and dietary notes, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "zesty-chicken-wrap",
        why: "A whole meal in one hand for a guest halfway through a house tour.",
      },
      {
        dish: "falafel-wrap",
        why: "The plant-based version. Tagged vegan.",
      },
      {
        dish: "falafel",
        why: "Counter snacking that doesn't need a fork.",
      },
      {
        dish: "dip-and-pita",
        why: "Set it out before the doorbell starts ringing.",
      },
      {
        dish: "chicken-shawarma-fries",
        why: "A shared plate that disappears quickly. Best eaten soon after pickup.",
      },
    ],
    planningTips: [
      "Ask about plates, napkins, and utensils when you request a quote, especially if yours are still in boxes.",
      "Choose wraps over bowls if seating is limited.",
      "Clear one counter for food before guests arrive so it doesn't end up on the stove.",
      "Refrigerate leftovers within a couple of hours. Shawarma and hummus both make a decent next-day lunch.",
    ],
    faqs: [
      {
        q: "What's the easiest food for a housewarming?",
        a: "Wraps and shared plates like falafel and Dip & Pita. They don't need much setup, plates, or seating.",
      },
      {
        q: "Can I order online for a small housewarming?",
        a: "Yes. For a smaller group, online ordering for pickup is often simplest. For a bigger party, use the Request a Quote form on our catering page.",
      },
      {
        q: "How long do leftovers keep?",
        a: "Refrigerate them within a couple of hours. Our guides on how long shawarma and hummus last cover the details.",
      },
    ],
    relatedGuides: ["how-long-does-shawarma-last-in-the-fridge", "how-to-order-ahead-for-pickup", "how-long-does-hummus-last"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "game-day-catering",
    h1: "Game Day Catering in San Diego",
    seoTitle: "Game Day Catering in San Diego",
    metaDescription:
      "Game day food for San Diego watch parties: shawarma fries, Pita Nachos, bourak and an Earth Bowl for the non-meat eaters, served in rounds. Request a quote.",
    intro: [
      "A football Sunday or a college Saturday is a long stretch of eating. On the West Coast, early NFL games kick off in the morning and the late ones run into the evening, and people drop in and out depending on which team they care about. Food that comes out once at noon and sits for six hours doesn't work well.",
      "Plan in rounds instead. Start with shareable plates that can sit out for a bit, like Dip & Pita and falafel. Bring the hot, heavy food, like Steak Shawarma Fries, Pita Nachos, and bourak, for the game the room actually cares about. We open at 11 AM, so an early-kickoff spread will need to be planned around that, while a late-afternoon game is easy to time.",
      "Watch parties usually include a few people who don't eat meat or are trying to eat lighter, and they end up living on chips. Falafel and the Earth Bowl give them a real plate. If you host every week of the season, keep track of what disappears first and adjust the next order. Fill out the Request a Quote form with your date, headcount, and kickoff time, and we'll follow up with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "steak-shawarma-fries",
        why: "Fries with steak shawarma and garlic sauce, built for passing around the couch.",
      },
      {
        dish: "pita-nachos",
        why: "Crispy pita chips, feta, steak shawarma, and garlic sauce. The obvious nacho stand-in.",
      },
      {
        dish: "bourak",
        why: "Steak-stuffed egg rolls you can eat without looking away from the screen.",
      },
      {
        dish: "dip-and-pita",
        why: "The early-round snack that holds while people trickle in.",
      },
      {
        dish: "earth-bowl",
        why: "A real vegetarian meal for the guest who'd otherwise eat only chips. Contains feta.",
      },
    ],
    planningTips: [
      "Split the food into an early round and a main-game round rather than putting everything out at once.",
      "We open at 11 AM, so plan morning-kickoff food around that.",
      "Fries soften as they sit. Serve them first or reheat them on a sheet pan in a hot oven.",
      "Include a vegetarian main, not only snacks, for guests who skip meat.",
    ],
    faqs: [
      {
        q: "What's the best shareable game day food on your menu?",
        a: "Pita Nachos and shawarma fries are made for sharing. Bourak, falafel, and Dip & Pita round out the table.",
      },
      {
        q: "Can I pick up food for a morning kickoff?",
        a: "We open at 11 AM every day. For morning games, plan on a pickup at or after opening and serve food from the second game on.",
      },
      {
        q: "How do I keep fries from getting soggy?",
        a: "Serve them as soon as they arrive, or spread them on a sheet pan and reheat in a hot oven rather than a microwave.",
      },
    ],
    relatedGuides: ["what-are-shawarma-fries", "what-is-borek", "how-to-reheat-shawarma"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "super-bowl-party-food",
    h1: "Super Bowl Party Food in San Diego",
    seoTitle: "Super Bowl Party Food in San Diego",
    metaDescription:
      "Super Bowl party food in San Diego: pick up Pita Nachos, shawarma fries, bourak and wraps before kickoff and feed the room through halftime. Request a quote.",
    intro: [
      "The Super Bowl is one of the biggest food days of the year in the U.S., and it runs on a fixed clock. Kickoff lands in the mid-afternoon on the West Coast, guests start showing up an hour or two before, and the party peaks around halftime. You get one shot at it, so the plan is mostly about timing.",
      "Pick up before kickoff, not at halftime. A lot of people are ordering food that day, and nobody wants to be in the car during the second quarter. Shareable plates do the heavy lifting: Pita Nachos with steak shawarma and feta, chicken and steak shawarma fries, bourak, and Dip & Pita. Add a stack of wraps for guests who want a real meal and don't want to hover at the snack table. Half the room may care more about the commercials than the game. They still need to eat.",
      "Because so many people host on the same Sunday, get your quote request in well before game week. Tell us your headcount, when you'd like to pick up, and any dietary needs, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "pita-nachos",
        why: "The centerpiece of the snack table. Steak shawarma, feta, and garlic sauce over crispy pita chips.",
      },
      {
        dish: "chicken-shawarma-fries",
        why: "A shared tray that goes fast at kickoff.",
      },
      {
        dish: "bourak",
        why: "Handheld steak egg rolls that reheat well for the second half.",
      },
      {
        dish: "cali-shawarma-wrap",
        why: "A full meal with steak shawarma, pepper jack, fries, and guacamole for the guests who came hungry.",
      },
      {
        dish: "falafel",
        why: "A vegan-tagged option so plant-based guests have more than chips.",
      },
    ],
    planningTips: [
      "Send your quote request well before game week. A lot of people host that Sunday.",
      "Schedule pickup before kickoff so food is out by the end of the first quarter.",
      "Put the hot food out in two rounds, one at kickoff and one near halftime, reheating the second round in the oven.",
      "Keep sauces and dips cold between rounds.",
    ],
    faqs: [
      {
        q: "When should I pick up Super Bowl food?",
        a: "Before kickoff. Tell us your timing in the quote request and we'll confirm the details with you.",
      },
      {
        q: "What's the best shared dish for a Super Bowl party?",
        a: "Pita Nachos and shawarma fries are built for sharing. Bourak and Dip & Pita fill out a snack table.",
      },
      {
        q: "How far ahead should I order?",
        a: "As early as you can. Send your quote request well before the game so there's time to plan.",
      },
    ],
    relatedGuides: ["what-are-shawarma-fries", "what-are-pita-chips", "how-to-order-food-for-a-group"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "fourth-of-july-party-food",
    h1: "Fourth of July Party Food in Mission Beach",
    seoTitle: "Fourth of July Party Food in Mission Beach",
    metaDescription:
      "Fourth of July food for Mission Beach and San Diego parties: wraps, falafel and dips that handle heat and crowds. Plan pickup early and request a quote.",
    intro: [
      "Mission Beach is one of the busiest places in San Diego on the Fourth of July. The boardwalk fills, traffic on Mission Blvd crawls, and parking anywhere near the sand is hard to find by late morning. If your party is in the area, the biggest planning question isn't the menu. It's when and how you'll get the food.",
      "Get it early. Driving or walking a few blocks on the Fourth is nothing like doing it on a normal weekday, so build in extra time and talk through timing when you request a quote. Holiday hours can differ from our regular schedule, so confirm those too.",
      "Then think about heat. Food safety guidance says perishable food shouldn't sit out more than two hours, or one hour when it's above 90°F. Wraps and falafel handle an outdoor afternoon better than anything delicate, and tzatziki, garlic sauce, and dips belong in a cooler between servings. If you're staying for fireworks, eat before dark rather than balancing food in a crowd. Fill out the Request a Quote form with your headcount, location, and when you want to eat, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "zesty-chicken-wrap",
        why: "Contained, easy to hold, and fine on a blanket or a crowded patio.",
      },
      {
        dish: "cali-shawarma-wrap",
        why: "A big all-in-one wrap with steak shawarma, fries, and guacamole for a long day outside.",
      },
      {
        dish: "falafel-wrap",
        why: "The vegan-tagged wrap for plant-based guests.",
      },
      {
        dish: "falafel",
        why: "Easy to share out of a container.",
      },
      {
        dish: "dip-and-pita",
        why: "Good for grazing, as long as the dip stays in the cooler between rounds.",
      },
    ],
    planningTips: [
      "Plan pickup well before the afternoon crowds, and confirm holiday hours when you request a quote.",
      "Bring a cooler with ice for dips and sauces.",
      "Follow the two-hour rule for food left out, or one hour above 90°F.",
      "Choose wraps over bowls for a beach blanket or a packed balcony.",
    ],
    faqs: [
      {
        q: "Are you open on the Fourth of July?",
        a: "Holiday hours can differ from our regular schedule. Call us at 858-210-9524 or ask when you request a quote.",
      },
      {
        q: "How busy is Mission Beach on the Fourth?",
        a: "Very. Expect heavy traffic on Mission Blvd and packed beaches, and plan your food pickup early.",
      },
      {
        q: "What food holds up best in the heat?",
        a: "Wraps and falafel. Keep anything with dairy or sauce in a cooler and don't leave food out longer than food safety guidance allows.",
      },
    ],
    relatedGuides: ["how-to-pack-a-beach-lunch-that-holds-up", "mission-beach-parking-guide", "san-diego-beach-rules-to-know"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "memorial-day-party-food",
    h1: "Memorial Day Party Food in San Diego",
    seoTitle: "Memorial Day Weekend Party Food in San Diego",
    metaDescription:
      "Memorial Day weekend food in San Diego: wraps, bowls and falafel for a backyard, Mission Bay park or beach gathering, or next to the grill. Request a quote.",
    intro: [
      "Memorial Day falls on the last Monday in May and honors members of the U.S. military who died in service. San Diego has deep military ties, and for many families the day starts with a ceremony or a cemetery visit before turning into a gathering. It's also the unofficial start of summer, and the three-day weekend brings some of the first big beach crowds of the year to Mission Beach and Mission Bay.",
      "Gatherings that weekend run long and loose: a backyard, a park on Mission Bay, or a beach setup, with people arriving at different times. A mix of formats helps. Wraps for the people coming straight from the water, bowls for the ones sitting at a table, and a shared plate or two for the middle of the afternoon. If you're grilling anyway, our food can take pressure off the host or fill the vegetarian gap next to the burgers.",
      "Late May along the coast is often overcast in the morning, the pattern locals call May Gray, so a beach plan may start cool and warm up later. Send your date, headcount, location, and timing through the Request a Quote form, and ask about holiday hours. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "beef-shawarma-wrap",
        why: "Steak shawarma, hummus, and tahini sauce. Holds together for people eating on the move.",
      },
      {
        dish: "chicken-pita-bowl",
        why: "A sit-down plate for the backyard table.",
      },
      {
        dish: "falafel",
        why: "Covers the vegetarians a grill usually forgets. Tagged vegan.",
      },
      {
        dish: "pita-nachos",
        why: "A shared plate for the long middle of the afternoon.",
      },
    ],
    planningTips: [
      "Confirm holiday hours when you request a quote, since they can differ from our regular schedule.",
      "If you're grilling, add falafel or Earth Bowls to cover vegetarian guests.",
      "Bring a cooler for dips and sauces if you'll be outside.",
      "Expect heavier beach traffic than usual and plan pickup time with that in mind.",
    ],
    faqs: [
      {
        q: "Are you open on Memorial Day?",
        a: "Holiday hours can change. Call us at 858-210-9524 or ask when you request a quote.",
      },
      {
        q: "Can I mix your food with my own barbecue?",
        a: "Sure. A lot of hosts add a few bowls, wraps, or falafel next to what they're grilling, especially to cover vegetarian guests.",
      },
      {
        q: "What's good for a picnic on Mission Bay?",
        a: "Wraps and falafel travel well. Our guide to planning a beach picnic in Mission Beach has more tips.",
      },
    ],
    relatedGuides: ["how-to-plan-a-beach-picnic-in-mission-beach", "best-time-of-year-to-visit-mission-beach", "what-is-a-falafel-wrap"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "labor-day-party-food",
    h1: "Labor Day Party Food in San Diego",
    seoTitle: "Labor Day Party Food in San Diego",
    metaDescription:
      "Labor Day food for an end-of-summer party in San Diego: Earth Bowls, wraps, chicken tikka and lazy cake that suit a hot September day. Request a quote.",
    intro: [
      "Labor Day lands on the first Monday in September and closes out summer for a lot of families. In San Diego, school has often started already, so the weekend can feel like the last free days before routines fully take over. Gatherings tend to be relaxed: one more backyard party, one more beach day, one more late afternoon by the bay.",
      "Early September is typically one of the warmer stretches of the year on the San Diego coast, and that shapes the food. Dishes that are fine at cool or room temperature, like the Earth Bowl and wraps, hold up better outdoors than anything that needs to stay piping hot. Fresh greens and lentils feel right on a hot day. For dessert, housemade baklava or lazy cake beats ice cream melting on the table.",
      "If your Monday involves hosting and then packing lunches for the week, consider ordering a few extra bowls on purpose; our meal prep guide covers storage. Fill out the Request a Quote form with the date, headcount, and timing, and ask about holiday hours. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "earth-bowl",
        why: "Black lentils, greens, falafel, and dips. A lighter plate for a hot afternoon. Contains feta.",
      },
      {
        dish: "zesty-chicken-wrap",
        why: "Easy to eat at the beach or standing by the cooler.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "A full meal that also makes a good Tuesday lunch.",
      },
      {
        dish: "steak-shawarma-fries",
        why: "A shared plate for the group, best served soon after pickup.",
      },
      {
        dish: "lazy-cake",
        why: "A housemade chocolate and biscuit dessert. Keep it shaded so the chocolate doesn't soften.",
      },
    ],
    planningTips: [
      "Plan for heat. Keep dairy-based items chilled and don't leave food out more than two hours, or one hour above 90°F.",
      "Confirm holiday hours when you request a quote.",
      "Order a few extra bowls for the week if you want leftovers on purpose.",
      "Shade the food table. Direct sun warms dips and sauces quickly.",
    ],
    faqs: [
      {
        q: "Are you open on Labor Day?",
        a: "Holiday hours can differ from our regular schedule. Call 858-210-9524 or ask in your quote request.",
      },
      {
        q: "Can I order extra for meal prep?",
        a: "Yes. Add it to your order or quote request. Our guide on meal prepping with Mediterranean bowls covers storage.",
      },
      {
        q: "What dessert works on a hot day?",
        a: "Baklava travels well and won't melt like ice cream. It contains nuts, butter, and wheat.",
      },
    ],
    relatedGuides: ["how-to-meal-prep-with-mediterranean-bowls", "how-long-does-shawarma-last-in-the-fridge", "what-is-lazy-cake"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "new-years-eve-party-food",
    h1: "New Year's Eve Party Food in San Diego",
    seoTitle: "New Year's Eve Party Food in San Diego",
    metaDescription:
      "New Year's Eve party food in San Diego: bourak, falafel, dips and baklava to pick up before we close and serve in batches until midnight. Request a quote.",
    intro: [
      "A New Year's Eve party is a marathon. Guests arrive somewhere between eight and ten, few of them have eaten a proper dinner, and the snacking continues until midnight and sometimes past it. The host's real job is keeping a steady supply of food that still tastes good at 11:30 PM without being stuck in the kitchen all night.",
      "Our hours set the plan. We close at 8 PM Sunday through Thursday and 9 PM on Friday and Saturday, and holiday hours can change, so this is food to pick up early and serve through the night. That favors dishes that reheat well or don't need heat at all. Bourak and falafel crisp back up in a hot oven. Dips and pita can go out and be refilled. Housemade baklava holds at room temperature and makes an easy midnight sweet next to the champagne.",
      "Keep cold items in the fridge and bring them out in batches rather than all at once. Send your Request a Quote form early, since December is busy for everyone, with your headcount and preferred pickup time, and confirm our hours for the 31st. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "bourak",
        why: "Steak-stuffed egg rolls that reheat well in a hot oven for the late rounds.",
      },
      {
        dish: "falafel",
        why: "A vegan-tagged snack that also crisps back up in the oven.",
      },
      {
        dish: "dip-and-pita",
        why: "No heat needed. Bring out fresh dip in batches through the night.",
      },
      {
        dish: "pistachio-baklava",
        why: "Holds at room temperature and is easy to plate at midnight. Contains nuts.",
      },
      {
        dish: "dubai-chocolate-brownie",
        why: "A rich housemade chocolate option next to the baklava.",
      },
    ],
    planningTips: [
      "Confirm our hours for December 31 when you request a quote, and plan pickup around them.",
      "Refrigerate what you won't serve in the next couple of hours and reheat it in batches.",
      "Use the oven, not the microwave, to bring falafel and bourak back to crisp.",
      "Put the sweets out around 11 PM so they're on the table for the countdown.",
    ],
    faqs: [
      {
        q: "Are you open late on New Year's Eve?",
        a: "Holiday hours can change, and our regular closing time is 8 PM or 9 PM depending on the day. Call 858-210-9524 or ask in your quote request.",
      },
      {
        q: "What reheats best for a late party?",
        a: "Bourak and falafel crisp up well in a hot oven. Our guide on reheating falafel has the details.",
      },
      {
        q: "What should I serve at midnight?",
        a: "Something small and sweet. Baklava and our Dubai chocolate brownie are housemade and easy to plate.",
      },
    ],
    relatedGuides: ["how-to-reheat-falafel", "how-to-serve-mezze-at-a-party", "what-is-dubai-chocolate"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "thanksgiving-week-team-lunch",
    h1: "Thanksgiving Week Team Lunch in San Diego",
    seoTitle: "Thanksgiving Week Team Lunch in San Diego",
    metaDescription:
      "A Thanksgiving week team lunch that isn't turkey: chicken tikka, shawarma and falafel bowls plus baklava for a San Diego office before the holiday.",
    intro: [
      "The days before Thanksgiving are an odd week to feed a team. Half the office is on vacation, the other half is wrapping things up before a long weekend, and Wednesday may end early. Headcount changes by the day, and almost everyone is about to sit down to a large turkey dinner, so another plate of turkey and stuffing is the last thing they want.",
      "A Mediterranean lunch is a welcome break. Chicken tikka, shawarma, and falafel bowls taste nothing like the holiday menu, and there's enough range that vegetarians and meat eaters both get a real meal. If the lunch is meant as a thank-you before the break, a tray of housemade baklava or a tiramisu gives it a sense of occasion without another pie.",
      "Pick the day carefully. Monday or Tuesday usually has the most people in the office, and you can confirm headcount closer to the date. Send the Request a Quote form with your best estimate and a note that the number may move, and ask about our hours around Thanksgiving if your timing is tight. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-tikka-bowl",
        why: "Chicken tikka on saffron rice with hummus and tzatziki. About as far from turkey as lunch gets.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "A hearty option for the people who want beef.",
      },
      {
        dish: "earth-bowl",
        why: "A full vegetarian lunch. Contains feta.",
      },
      {
        dish: "build-your-own-bowl",
        why: "For the coworker who is already eating light ahead of Thursday.",
      },
      {
        dish: "walnut-baklava",
        why: "A housemade thank-you dessert. Contains nuts.",
      },
    ],
    planningTips: [
      "Hold the lunch early in the week, when the most people are still around.",
      "Send a quick RSVP instead of counting from the team roster, since vacation days thin the room.",
      "Mention in the notes that your headcount may change, and ask how late you can adjust it.",
      "Ask about holiday hours around Thanksgiving when you request a quote.",
    ],
    faqs: [
      {
        q: "What's a good team lunch the week of Thanksgiving?",
        a: "Something that isn't turkey. Chicken tikka, shawarma, and falafel bowls give everyone a real meal without repeating Thursday's menu.",
      },
      {
        q: "Can I change my headcount after I request a quote?",
        a: "Ask us when you request a quote how close to the date we can adjust, and note that your number may shift.",
      },
      {
        q: "Do you have vegetarian options for the team?",
        a: "Yes. The Earth Bowl is vegetarian, and falafel can replace the protein in a build-your-own bowl or wrap.",
      },
    ],
    relatedGuides: ["chicken-tikka-vs-shawarma", "what-is-chicken-tikka", "how-to-order-food-for-a-group"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "ramadan-iftar-catering",
    h1: "Ramadan Iftar Catering in San Diego",
    seoTitle: "Ramadan Iftar Catering in San Diego",
    metaDescription:
      "Iftar catering in San Diego during Ramadan: chicken tikka, shawarma, falafel and lentil bowls timed for sunset. Ask us directly about ingredients and meat.",
    intro: [
      "During Ramadan, many Muslims fast from dawn until sunset, and iftar is the meal that breaks the fast each evening. Many people begin with dates and water, following the practice of the Prophet Muhammad, then pray the sunset prayer, maghrib, before sitting down to a fuller meal. Community iftars at mosques, student associations, and workplaces gather people around that moment, and guests of other faiths are often welcome too.",
      "Timing is everything. Sunset shifts a little each day, and Ramadan moves roughly eleven days earlier each year on the Gregorian calendar, so iftar can fall in the early evening one year and much later some years on. Food needs to be ready at a fixed moment for people who haven't eaten or had water since before dawn. We close at 8 PM Sunday through Thursday and 9 PM on Friday and Saturday, so plan pickup around both sunset and our hours.",
      "Halal is a requirement for many people observing Ramadan. We don't make halal claims on this site, so ask us directly about our meat before ordering and decide what's right for your guests. Falafel and the Earth Bowl contain no meat. Fill out the Request a Quote form with the date, headcount, and sunset time, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "earth-bowl",
        why: "Black lentils, falafel, hummus, and eggplant dip. A filling, meat-free plate after a long fast. Contains feta.",
      },
      {
        dish: "falafel",
        why: "Meat-free and easy to share at the table. Tagged vegan.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "Chicken tikka on saffron rice for guests who want meat. Ask us about our meat first if halal matters to them.",
      },
      {
        dish: "dip-and-pita",
        why: "Hummus or eggplant dip with warm pita, a familiar start to a shared meal.",
      },
      {
        dish: "pistachio-baklava",
        why: "Sweets are part of iftar in many households. Housemade, and contains nuts, butter, and wheat.",
      },
    ],
    planningTips: [
      "Look up the sunset time for your date and put it in the notes, along with when you want food on the table.",
      "Ask us directly about our meat if halal is a requirement for your guests. We don't make halal claims here.",
      "Dates aren't on our menu, so plan to bring your own for breaking the fast.",
      "Have water and drinks at every seat before sunset. That's what guests reach for first.",
      "Hosting several iftars during the month? Put the full schedule in one quote request.",
    ],
    faqs: [
      {
        q: "Is your food halal?",
        a: "We don't make halal claims on this site. Please ask us directly about our meat before ordering so you can decide what works for your guests.",
      },
      {
        q: "Can you have food ready for sunset?",
        a: "Give us your date and the sunset time in the quote request. We close at 8 PM Sunday through Thursday and 9 PM Friday and Saturday, so we'll talk timing through with you.",
      },
      {
        q: "Do you have meat-free options for iftar?",
        a: "Yes. Falafel, the Earth Bowl, Dip & Pita, and the Falafel Delight Wrap contain no meat.",
      },
    ],
    relatedGuides: ["what-is-mezze-culture", "what-is-levantine-food", "middle-eastern-desserts-guide"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "eid-celebration-catering",
    h1: "Eid Celebration Catering in San Diego",
    seoTitle: "Eid Celebration Catering in San Diego",
    metaDescription:
      "Food for Eid gatherings in San Diego: housemade baklava, shared bowls, dips and kids' meals for family and friends after Eid prayer. Request a quote.",
    intro: [
      "Muslims celebrate two Eids each year. Eid al-Fitr marks the end of Ramadan and its month of fasting. Eid al-Adha falls during the Hajj pilgrimage season and remembers Ibrahim's willingness to sacrifice his son at God's command; many families share meat with relatives, neighbors, and people in need. Both days usually start with a special morning prayer, followed by visits, new clothes, gifts or money for the children, and a lot of food.",
      "Eid gatherings often move from house to house, so a host can end up feeding a rotating crowd of relatives, friends, and kids for most of the day. Sweets carry special weight, especially at Eid al-Fitr, which is sometimes called the sweet Eid. A tray of baklava sits naturally beside homemade cookies like ma'amoul, while bowls and shared dips cover the meal itself. We open at 11 AM, which lines up with gatherings after the morning prayer.",
      "Both Eids follow the lunar calendar, and in many communities the exact day depends on the moon sighting, so families sometimes don't know the date until the night before. Tell us in your quote request if your date might shift by a day. We don't make halal claims on this site, so ask us directly about our meat if that matters for your family. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "pistachio-baklava",
        why: "Layered phyllo, pistachios, and honey. Housemade, and a natural fit for an Eid sweets table. Contains nuts.",
      },
      {
        dish: "walnut-baklava",
        why: "The walnut version, for a mixed tray. Contains nuts, butter, and wheat.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "A full plate for guests who stay for the meal. Ask about our meat first if halal matters to you.",
      },
      {
        dish: "dip-and-pita",
        why: "Something to set out as visitors come and go through the day.",
      },
      {
        dish: "kids-chicken-tenders",
        why: "Three tenders and fries for the youngest guests in their new Eid clothes.",
      },
    ],
    planningTips: [
      "Say in your notes that the date may move by a day, and ask how we can handle that.",
      "Plan the meal for midday or later. We open at 11 AM, after most morning Eid prayers have finished.",
      "Ask us directly about our meat if halal is a requirement. We don't make halal claims here.",
      "Order more sweets than you think you need. Visitors who have already eaten elsewhere still stop for dessert.",
    ],
    faqs: [
      {
        q: "Can I get halal food from Pita Bowl for Eid?",
        a: "We don't make halal claims on this site. Ask us directly about our meat before you order, and choose what's right for your family.",
      },
      {
        q: "Can I order for Eid if the date isn't confirmed yet?",
        a: "Yes, send the quote request with your likely date and a note that it may shift by a day, and we'll talk it through with you.",
      },
      {
        q: "Which desserts are good for Eid?",
        a: "Pistachio and walnut baklava are the natural pick. Our tiramisu, lazy cake, and Dubai chocolate brownie are housemade too.",
      },
    ],
    relatedGuides: ["what-is-baklava", "baklava-vs-kunafa", "middle-eastern-desserts-guide"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "graduation-lunch-for-ucsd-families",
    h1: "Graduation Lunch for UCSD Families in San Diego",
    seoTitle: "UCSD Graduation Lunch for Visiting Families",
    metaDescription:
      "Hosting family after UC San Diego commencement? Pita Bowl in Mission Beach has bowls, falafel and dips for a post-ceremony lunch where you're staying.",
    intro: [
      "UC San Diego commencement brings families from across the state and around the world to La Jolla, usually in June. After the ceremony the graduate is pulled in five directions, relatives are tired from a morning in the sun, and restaurants near campus fill up fast. A lot of families end up hosting lunch back at a rental, a hotel suite, or a relative's house instead.",
      "That's where a catering or large pickup order helps. Pita Bowl is in Mission Beach, south of La Jolla and a drive down I-5, and plenty of families stay along the coast for graduation weekend. Choose food that can wait an hour while photos run long: bowls with rice and greens, a couple of shared dips, and a dessert tray. International and multi-generational families often bring a wide mix of diets, from vegetarian grandparents to cousins who only eat chicken, and a customizable menu handles that without separate orders.",
      "Give us the ceremony time and when you expect to actually eat, which is usually later than planned. Fill out the Request a Quote form with your headcount and dietary needs, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-pita-bowl",
        why: "A familiar plate that works for relatives of every age.",
      },
      {
        dish: "earth-bowl",
        why: "A complete vegetarian meal for the grandparents or cousins who don't eat meat. Contains feta.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "A bigger plate for the graduate who skipped breakfast.",
      },
      {
        dish: "dip-and-pita",
        why: "Something on the table while everyone trickles back from campus.",
      },
      {
        dish: "hazelnut-tiramisu",
        why: "A housemade dessert to toast the graduate with. Contains dairy and hazelnut.",
      },
    ],
    planningTips: [
      "Leave at least an hour between the end of the ceremony and your meal. Photos and goodbyes take longer than anyone expects.",
      "Host lunch where your family is staying rather than near campus, where roads and restaurants are crowded after ceremonies.",
      "Collect dietary needs from relatives traveling in and include them in the notes.",
      "Send your quote request early. Graduation weekends are busy across San Diego.",
    ],
    faqs: [
      {
        q: "How far is Pita Bowl from UC San Diego?",
        a: "We're at 3833 Mission Blvd in Mission Beach, south of La Jolla. The drive is usually via I-5 and depends a lot on traffic.",
      },
      {
        q: "Can you bring food to a hotel or vacation rental?",
        a: "Ask when you request a quote. Include the address and time and we'll let you know what we can do.",
      },
      {
        q: "What works for a family with very different diets?",
        a: "A mix of bowls. Chicken, steak, and the vegetarian Earth Bowl cover most people, and build-your-own bowls handle the rest.",
      },
    ],
    relatedGuides: ["a-first-timers-guide-to-mission-beach", "how-to-order-food-for-a-group", "what-is-a-mediterranean-bowl"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "usd-event-catering",
    h1: "USD Event Catering in San Diego",
    seoTitle: "University of San Diego Event Catering",
    metaDescription:
      "Catering for University of San Diego club meetings, department receptions and team dinners: wraps, bowls and falafel from Pita Bowl. Request a quote.",
    intro: [
      "The University of San Diego sits on the mesa above Mission Valley in Linda Vista, a short drive from Mission Bay. Events there range from a student organization's weekly meeting to a department reception, a team dinner, or a club fundraiser. The crowds differ, but most share a few traits: a set start time, a limited budget, and a guest list that includes vegetarians, athletes, and people who just want something filling.",
      "For a meeting where people eat while someone presents, wraps are the easy choice. They don't need a table, don't need utensils, and don't make noise. For a reception or a longer evening, bowls give guests a real meal, and a shared Dip & Pita or a tray of falafel sets the room up while people arrive. Our savory food is cooked with olive oil and avocado oil, and ingredients are prepped fresh in-house every day.",
      "If your organization pays through a university purchasing or reimbursement process, mention it in your notes and ask what paperwork we can provide. Fill out the Request a Quote form with the event date, headcount, and where on campus you'll be, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "zesty-chicken-wrap",
        why: "Quiet, tidy, and easy to eat during a presentation.",
      },
      {
        dish: "falafel-wrap",
        why: "The vegan-tagged wrap for plant-based members.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "A full meal for receptions and longer events.",
      },
      {
        dish: "falafel",
        why: "Easy to set out as people arrive.",
      },
      {
        dish: "dip-and-pita",
        why: "A low-effort shared starter for a mixer or open house.",
      },
    ],
    planningTips: [
      "Ask your department or student activities office what paperwork you need, like an invoice or receipt, before you order.",
      "Plan for no-shows and drop-ins. Campus events rarely match the RSVP count exactly.",
      "Order wraps for meetings with a speaker and bowls for receptions or longer events.",
      "Ask about delivery to campus when you request a quote rather than assuming.",
    ],
    faqs: [
      {
        q: "How far is Pita Bowl from USD?",
        a: "We're at 3833 Mission Blvd in Mission Beach. USD is on the mesa above Mission Valley, a short drive away depending on traffic.",
      },
      {
        q: "Can my student organization order catering?",
        a: "Yes. Fill out the Request a Quote form with your event details. If you need specific paperwork for reimbursement, mention it in the notes.",
      },
      {
        q: "Do you have vegan options for a club event?",
        a: "Yes. The Falafel Delight Wrap and our falafel sides are tagged vegan.",
      },
    ],
    relatedGuides: ["mission-beach-for-college-students", "what-is-a-falafel-wrap", "how-to-order-food-for-a-group"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "sdsu-event-catering",
    h1: "SDSU Event Catering in San Diego",
    seoTitle: "SDSU Event Catering From Mission Beach",
    metaDescription:
      "Catering for San Diego State student orgs, cultural club nights and department mixers: shawarma, chicken tikka, falafel and fries. Request a quote.",
    intro: [
      "San Diego State is a big campus, with tens of thousands of students, out east along I-8 in the College Area. Event food there tends to come in larger numbers: general meetings for large student organizations, Greek life events, cultural club nights, and department mixers where a crowd might show up for a sign-up sheet and a plate.",
      "With a group that size, simple beats fancy. Two or three bowl types plus wraps cover nearly everyone, falafel and the Falafel Delight Wrap handle vegan students, and shared plates like Pita Nachos or Chicken Shawarma Fries disappear quickly when a meeting breaks. For a cultural night with a Middle Eastern, Mediterranean, or South Asian theme, shawarma, falafel, and chicken tikka tie the food to the program, and our guides on each dish can help with the talking points.",
      "We're in Mission Beach, so SDSU is a fair drive east from us along I-8. If timing or distance is a question, ask about it when you request a quote. Include your headcount, event time, and whether your organization pays through a university process, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-pita-bowl",
        why: "The workhorse for a large group. Most people will eat it.",
      },
      {
        dish: "falafel-wrap",
        why: "Covers vegan members without a separate order. Tagged vegan.",
      },
      {
        dish: "chicken-shawarma-fries",
        why: "A shared tray that goes quickly at the end of a meeting.",
      },
      {
        dish: "pita-nachos",
        why: "Steak shawarma and feta over pita chips. Good for a social night.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "A natural fit for a South Asian or fusion-themed cultural event.",
      },
    ],
    planningTips: [
      "Order for the people who will actually eat, not the full member roster. Large org meetings have a lot of drop-off.",
      "Decide whether food comes out before or after the main program. It changes how many people stay.",
      "Check with your treasurer about what documentation the university requires before you order.",
      "Ask about delivery to campus when you request a quote, since we're on the coast and SDSU is inland.",
    ],
    faqs: [
      {
        q: "How far is Pita Bowl from SDSU?",
        a: "We're at 3833 Mission Blvd in Mission Beach. SDSU is east of us along I-8, and drive time depends on traffic.",
      },
      {
        q: "Can you feed a large student org meeting?",
        a: "Send your headcount and event details through the Request a Quote form and we'll reply with details and pricing.",
      },
      {
        q: "What's good for a cultural club night?",
        a: "Shawarma, falafel, chicken tikka, and Dip & Pita all fit a Middle Eastern, Mediterranean, or South Asian theme.",
      },
    ],
    relatedGuides: ["mission-beach-for-college-students", "the-history-of-shawarma", "what-is-chicken-tikka"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "school-staff-lunch-catering",
    h1: "School Staff Lunch Catering in San Diego",
    seoTitle: "School Staff Lunch Catering in San Diego",
    metaDescription:
      "Lunch for teachers and school staff in San Diego: wraps and bowls that fit a short, staggered lunch period, with vegan and vegetarian picks. Request a quote.",
    intro: [
      "Feeding school staff is different from feeding an office. Lunch periods are short, often around half an hour, and staggered by grade, so the spread you set up at 11 AM is being eaten by a different group at 12:45. Some staff spend half their break on supervision or a parent phone call and grab food on the way back to class.",
      "That favors food that holds for a couple of hours and can be eaten fast. Wraps are the clearest fit, since they can be carried back to a classroom and eaten at a desk between periods. Bowls work for the staff who get to sit in the lounge. And count the people who often get forgotten: custodians, office staff, cafeteria workers, aides, and whoever is at the front desk.",
      "Most school staffs include a wide mix of diets, and teachers rarely get to pick their own lunch on a school day, so variety is a kindness. Our bowls and wraps can be customized, and falafel covers vegetarian and vegan staff. Fill out the Request a Quote form with your school's lunch schedule, headcount, and dietary notes, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "zesty-chicken-wrap",
        why: "Can be carried back to a classroom and eaten between bells.",
      },
      {
        dish: "falafel-wrap",
        why: "A vegan-tagged wrap for plant-based staff.",
      },
      {
        dish: "beef-shawarma-wrap",
        why: "A heartier wrap for staff who've been on their feet all morning.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "For the staff who get to sit down in the lounge. Marked gluten-friendly.",
      },
      {
        dish: "earth-bowl",
        why: "A vegetarian bowl with lentils and falafel. Contains feta.",
      },
    ],
    planningTips: [
      "Share your lunch schedule in the notes so food is ready before the first group breaks.",
      "Count every adult on campus, including classified staff, aides, and custodians.",
      "Check your school's nut policy before adding baklava, and label anything with nuts.",
      "Keep later groups' portions in the staff fridge and set them out fresh for each lunch period.",
    ],
    faqs: [
      {
        q: "What works best for a staggered school lunch?",
        a: "Wraps. They hold up over a couple of lunch periods and can be eaten quickly or carried back to a classroom.",
      },
      {
        q: "Can I order for a school with nut restrictions?",
        a: "Baklava contains nuts, so leave it off for a nut-free school. For other dishes, ask about specific ingredients and shared prep before you order.",
      },
      {
        q: "How do I get a quote for a staff lunch?",
        a: "Fill out the Request a Quote form on our catering page with the date, headcount, lunch times, and dietary notes. We'll reply with details and pricing.",
      },
    ],
    relatedGuides: ["how-to-keep-wraps-from-getting-soggy", "how-to-eat-out-with-a-nut-allergy", "bowl-vs-wrap-which-should-you-order"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "teacher-appreciation-lunch",
    h1: "Teacher Appreciation Lunch in San Diego",
    seoTitle: "Teacher Appreciation Lunch in San Diego",
    metaDescription:
      "A teacher appreciation lunch in San Diego that feels like a treat: shawarma bowls, build-your-own wraps and housemade tiramisu and brownies. Request a quote.",
    intro: [
      "Teacher Appreciation Week usually falls in the first full week of May, and at many schools the parent group runs it. One day of the week is often a catered lunch, organized by a room parent or PTA volunteer who is juggling money pooled from families, a sign-up sheet, and the school's bell schedule.",
      "The goal is for it to feel like a treat, not another sandwich tray. Dessert does a lot of that work. Ours are housemade, and a table with baklava, tiramisu, and a Dubai chocolate brownie turns lunch into an event. For the main meal, a mix of bowls and wraps lets teachers choose for themselves, and the build-your-own options handle the teacher who has been vegetarian for twenty years or is skipping bread this month.",
      "If you're collecting money from families, put the total budget in the notes along with the headcount so we can talk through what fits. Fill out the Request a Quote form with the date and the school's lunch times, and we'll get back to you with details and pricing. A stack of thank-you notes from the kids on the table goes a long way too.",
    ],
    whatToOrder: [
      {
        dish: "chicken-pita-bowl",
        why: "A dependable main that most teachers will be happy to see.",
      },
      {
        dish: "build-your-own-wrap",
        why: "Lets teachers with specific diets pick their own protein, dip, and wrap.",
      },
      {
        dish: "earth-bowl",
        why: "A real vegetarian lunch instead of a side salad. Contains feta.",
      },
      {
        dish: "tiramisu",
        why: "A housemade dessert that makes the lunch feel special. Contains dairy and coffee.",
      },
      {
        dish: "dubai-chocolate-brownie",
        why: "A rich, housemade chocolate treat for the dessert table.",
      },
    ],
    planningTips: [
      "Send your quote request a few weeks ahead. Teacher Appreciation Week is the same week at most schools.",
      "Put your pooled budget and headcount in the notes.",
      "Ask the front office for staff dietary needs instead of guessing.",
      "If the school is nut-aware, leave out the baklava or keep it labeled and separate.",
    ],
    faqs: [
      {
        q: "When is Teacher Appreciation Week?",
        a: "In the U.S. it's usually the first full week of May. Check your school's calendar, since some schools celebrate on different dates.",
      },
      {
        q: "Can parents split the cost?",
        a: "How you collect money is up to your group. Include the total budget in your quote request and we'll reply with details and pricing.",
      },
      {
        q: "Which of your desserts are housemade?",
        a: "Our baklava, tiramisu, hazelnut tiramisu, lazy cake, and Dubai chocolate brownie are all housemade.",
      },
    ],
    relatedGuides: ["what-is-dubai-chocolate", "tiramisu-vs-hazelnut-tiramisu", "what-is-a-mediterranean-bowl"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "pta-meeting-food",
    h1: "PTA Meeting Food in San Diego",
    seoTitle: "PTA Meeting Food in San Diego",
    metaDescription:
      "Food for evening PTA meetings in San Diego: dips with pita, falafel, wraps and kids' tenders for parents arriving from work with children in tow.",
    intro: [
      "Most PTA meetings happen in the evening, right around dinnertime, in a school library or multipurpose room. Parents come straight from work, some with kids in tow, and stay for an hour of budget updates and event planning. A little food helps attendance, and a hungry room has a short attention span.",
      "You usually aren't serving a full dinner, just enough to take the edge off. Dip & Pita and falafel are easy to set on a table by the sign-in sheet. A few wraps help the parents who skipped dinner to get there, and chicken tenders and fries keep the kids who came along busy in the back of the room. Skip anything saucy that needs a fork and a table; school rooms usually aren't set up for it.",
      "Watch the clock. We close at 8 PM Sunday through Thursday, so for a weeknight meeting, pick up before the meeting starts rather than after. Fill out the Request a Quote form with your expected attendance and start time, or order online for pickup if the group is small. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "dip-and-pita",
        why: "The easiest thing to set out by the sign-in sheet.",
      },
      {
        dish: "falafel",
        why: "Finger food that covers vegetarian and vegan parents. Tagged vegan.",
      },
      {
        dish: "zesty-chicken-wrap",
        why: "Dinner in one hand for a parent who came straight from work.",
      },
      {
        dish: "kids-chicken-tenders",
        why: "Keeps the kids busy while the adults talk budgets.",
      },
    ],
    planningTips: [
      "Estimate attendance from past meetings, not the full membership list.",
      "Check the school's food and nut policies for the room you're using.",
      "Add a few kids' meals if parents usually bring children.",
      "Pick up before the meeting. We close at 8 PM Sunday through Thursday.",
    ],
    faqs: [
      {
        q: "What's good food for a PTA meeting?",
        a: "Light, handheld food: Dip & Pita, falafel, and a few wraps. It's enough to take the edge off without turning the meeting into a dinner.",
      },
      {
        q: "Can I get kid-friendly food for the meeting?",
        a: "Yes. Chicken tenders and fries are on our menu, and a plain chicken and rice bowl works for kids too.",
      },
      {
        q: "Is there something nut-free?",
        a: "Baklava contains nuts, so leave it out. For everything else, ask us about ingredients and shared prep before ordering, especially for a school with a nut policy.",
      },
    ],
    relatedGuides: ["how-to-feed-picky-eaters-mediterranean-food", "how-to-eat-out-with-a-nut-allergy", "how-to-order-ahead-for-pickup"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "youth-soccer-team-meals",
    h1: "Youth Soccer Team Meals in San Diego",
    seoTitle: "Youth Soccer Team Meals in San Diego",
    metaDescription:
      "Post-game meals for youth soccer teams in San Diego: chicken tenders, plain chicken and rice bowls for players, and wraps for parents. Request a quote.",
    intro: [
      "Youth soccer runs on weekend mornings, and the end-of-season party or tournament lunch usually comes right after the last whistle. You're feeding a dozen or so kids plus siblings and the parents who've been standing on the sideline since early morning. The kids are hungry, sweaty, and in no mood to try something new.",
      "Keep the kids' food simple. Chicken tenders and fries are on our menu, and a build-your-own bowl with just rice and chicken shawarma suits the player who wants everything plain and nothing touching. Older players with bigger appetites can handle a full chicken tikka bowl. The parents can order what they actually like. Halftime orange slices are still up to the team snack schedule.",
      "Since we open at 11 AM, this works best as a lunch after morning games or an afternoon team party. If you're eating at the park, a cooler keeps sauces and tzatziki safe. The team parent coordinating it can fill out the Request a Quote form with the date, separate counts for kids and adults, and any allergies, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "kids-chicken-tenders",
        why: "Three tenders and fries with a side of sauce. The easy win for younger players.",
      },
      {
        dish: "build-your-own-bowl",
        why: "Rice and chicken shawarma, nothing else, for the plain-food crowd.",
      },
      {
        dish: "chicken-tikka-bowl",
        why: "A bigger plate for older players coming off a full game.",
      },
      {
        dish: "zesty-chicken-wrap",
        why: "Something for the parents that's easy to eat in a camp chair.",
      },
    ],
    planningTips: [
      "Give separate counts for players, siblings, and adults.",
      "Collect allergies from parents at the start of the season so you have them ready.",
      "Games and tournament rounds run late. Tell us a realistic time rather than the scheduled end.",
      "Bring wipes and trash bags to the field. Kids eat with their hands.",
    ],
    faqs: [
      {
        q: "Do you have food for picky young players?",
        a: "Yes. Chicken tenders and fries are on our menu, and a build-your-own bowl can be as plain as rice and chicken.",
      },
      {
        q: "Can we pick up right after a morning game?",
        a: "We open at 11 AM every day, so plan pickup at or after opening.",
      },
      {
        q: "Can parents order something different from the kids?",
        a: "Yes. Put the kids' and adults' orders separately in the quote request notes and we'll follow up with details and pricing.",
      },
    ],
    relatedGuides: ["how-to-feed-picky-eaters-mediterranean-food", "things-to-do-near-mission-beach-with-kids", "what-is-chicken-shawarma"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "surf-team-and-surf-camp-lunches",
    h1: "Surf Team and Surf Camp Lunches in Mission Beach",
    seoTitle: "Surf Camp and Surf Team Lunches in Mission Beach",
    metaDescription:
      "Lunch for surf camps and surf teams in Mission Beach: wraps and falafel that handle sand, wind and wet hands, a few minutes from the boardwalk.",
    intro: [
      "Surfing makes people hungry in a way few sports do. Hours of paddling in cool water, getting tumbled, and paddling back out, and campers come out of the ocean shivering and starving. Summer surf camps and school surf teams along Mission Beach and Pacific Beach usually break for lunch between the morning and afternoon sessions, right there on the sand.",
      "Sand, wet hands, and wind make bowls hard work. Wraps are the better call: they're contained, they come wrapped, and a kid in a wetsuit can eat one standing up. Falafel is good for passing around, and a build-your-own wrap with plain chicken shawarma is a safe bet for younger campers. Pack drinks too. Bottled water and coconut water are on our menu, and a morning of sun and paddling is thirsty work.",
      "We're at 3833 Mission Blvd, a few minutes' walk from the Mission Beach boardwalk, which helps when your camp sets up nearby. For a camp that runs all summer, mention your weekly schedule. Fill out the Request a Quote form with your headcount, lunch time, and where you'll be on the beach, and ask how pickup or other options would work. We'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "zesty-chicken-wrap",
        why: "Contained, easy to hold with sandy hands, and filling after a session.",
      },
      {
        dish: "build-your-own-wrap",
        why: "Plain chicken shawarma in a warm pita or toasted tortilla for younger campers.",
      },
      {
        dish: "falafel-wrap",
        why: "The vegan-tagged wrap for plant-based surfers.",
      },
      {
        dish: "cali-shawarma-wrap",
        why: "Steak shawarma, fries, and guacamole. Built for older team surfers with big appetites.",
      },
      {
        dish: "falafel",
        why: "Easy to pass around the group.",
      },
    ],
    planningTips: [
      "Choose wraps over bowls for anyone eating on the sand.",
      "Keep food in a cooler in the shade until campers are out of the water.",
      "Give us an exact lunch time. Late food means cold, hungry kids waiting on the sand.",
      "For a recurring camp schedule, include all the dates in one quote request.",
      "Bring wipes or a rinse jug. Saltwater and sand get into everything.",
    ],
    faqs: [
      {
        q: "How close is Pita Bowl to the beach for a surf camp lunch?",
        a: "We're at 3833 Mission Blvd, a few minutes' walk from the Mission Beach boardwalk.",
      },
      {
        q: "What's easiest for surfers to eat on the beach?",
        a: "Wraps. They're contained and easy to hold with wet or sandy hands. Falafel is good for sharing.",
      },
      {
        q: "Can we set up lunches for a whole summer camp?",
        a: "Include your full schedule and headcount in the quote request and ask. We'll get back to you with details and pricing.",
      },
    ],
    relatedGuides: ["how-to-pack-a-beach-lunch-that-holds-up", "how-to-eat-a-shawarma-wrap-without-the-mess", "mission-bay-vs-ocean-beaches"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "volleyball-tournament-food",
    h1: "Volleyball Tournament Food in San Diego",
    seoTitle: "Volleyball Tournament Food in San Diego",
    metaDescription:
      "Food for beach and club volleyball tournaments in San Diego: light bites between matches, bigger shawarma bowls after, and wraps for the sand.",
    intro: [
      "A volleyball tournament is a long day with unpredictable gaps. Pool play can leave a team sitting for an hour and then put them on the court for three matches in a row. At a beach tournament in Mission Beach, players are in the sun all day; at an indoor club event, they're in a gym from morning to evening. Either way, few players want a heavy meal right before they play.",
      "So split the food by timing. Between matches, players tend to want something light: a few falafel, part of a wrap, a bowl that's mostly greens and chicken. Save the bigger plates, like a Steak Shawarma Bowl, for after the team is knocked out or the day is done. Build-your-own bowls let each player decide what sits well before a match and skip what doesn't.",
      "Parents and coaches usually run the food for the whole team, so think in terms of a grab-and-go spread rather than individual orders. Fill out the Request a Quote form with your team size, tournament date and location, and when you'd like food, and we'll get back to you with details and pricing. For a beach tournament nearby, we're on Mission Blvd near Belmont Park.",
    ],
    whatToOrder: [
      {
        dish: "falafel",
        why: "Small and easy to eat a few at a time between matches. Tagged vegan.",
      },
      {
        dish: "build-your-own-bowl",
        why: "Lets each player choose a lighter or bigger bowl depending on when they play next.",
      },
      {
        dish: "zesty-chicken-wrap",
        why: "Can be eaten in halves across two breaks.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "The end-of-day plate, with saffron rice and steak shawarma.",
      },
    ],
    planningTips: [
      "Set out light food between matches and save the full meal for after the last one.",
      "On the sand, keep everything in a cooler and under a canopy. Beach tournaments have little shade.",
      "Ask players what they like to eat between matches. Some won't eat at all until they're done.",
      "Brackets shift. Ask how much flexibility there is on timing when you request a quote.",
    ],
    faqs: [
      {
        q: "What should volleyball players eat between matches?",
        a: "Most players prefer something light, like a few falafel or part of a bowl, and a bigger meal afterward. Let each player decide what works for them.",
      },
      {
        q: "Are you close to Mission Beach tournaments?",
        a: "We're at 3833 Mission Blvd, a few minutes' walk from Belmont Park and the boardwalk, so beach events in Mission Beach are close by.",
      },
      {
        q: "Can each player pick their own meal?",
        a: "Our bowls and wraps are customizable. Describe what your team needs in the quote request notes and we'll work out how to handle it.",
      },
    ],
    relatedGuides: ["how-to-order-for-a-post-workout-meal", "what-makes-food-high-protein", "is-falafel-healthy"],
  },
  // ─────────────────────────────────────────────────────────────
  {
    slug: "running-club-breakfast-and-brunch",
    h1: "Running Club Breakfast and Brunch in San Diego",
    seoTitle: "Running Club Brunch Near Mission Bay",
    metaDescription:
      "Pita Bowl opens at 11 AM, so think post-long-run brunch, not breakfast: protein bowls, wraps and drinks for San Diego running clubs. Request a quote.",
    intro: [
      "The honest part first: we open at 11 AM every day, so we're not the place for a 7 AM post-run breakfast. Where we fit is the late-morning brunch after a long run, or the group meal after a race once everyone has showered and regrouped. For weekend long runs that start early and finish mid-morning, an 11 AM table lines up well.",
      "The routes nearby are popular with runners for good reason. The Mission Beach boardwalk runs along the ocean, and the paths around Mission Bay are long and flat. After ten or fifteen miles, most runners want carbohydrates and protein. A chicken tikka or steak shawarma bowl with saffron rice gives them both, the Earth Bowl with black lentils and falafel is the plant-based alternative, and a build-your-own bowl lets the runner with a specific recovery plan get exactly what they want.",
      "Coconut water, kombucha, and sparkling water are on our drinks menu. FIT members get 15% off. For a small group, ordering online for pickup may be all you need. For a bigger club meal, fill out the Request a Quote form with your group size and expected finish time, and we'll get back to you with details and pricing.",
    ],
    whatToOrder: [
      {
        dish: "chicken-tikka-bowl",
        why: "Chicken tikka on saffron rice. Carbs and protein in one bowl after a long run.",
      },
      {
        dish: "steak-shawarma-bowl",
        why: "For the runners who want red meat after a big mileage week.",
      },
      {
        dish: "earth-bowl",
        why: "Black lentils and falafel for plant-based runners. Contains feta.",
      },
      {
        dish: "build-your-own-bowl",
        why: "Double the protein or change the base to fit your own recovery routine.",
      },
      {
        dish: "falafel-wrap",
        why: "A vegan-tagged option that's easy to carry if you're eating on the walk back to the car.",
      },
    ],
    planningTips: [
      "Plan for 11 AM or later. We don't open earlier for breakfast.",
      "Give us your expected finish time and a headcount buffer. Race-day groups tend to grow.",
      "If runners will shower first, set the meal about an hour after the run ends.",
      "Ask about extra protein. Sides of chicken shawarma, steak, chicken tikka, and falafel are on the menu.",
    ],
    faqs: [
      {
        q: "Do you serve breakfast?",
        a: "No. We open at 11 AM every day, so we're a late-morning brunch option rather than a breakfast spot.",
      },
      {
        q: "What's a good meal after a long run?",
        a: "Many runners look for a mix of carbohydrates and protein, like a rice bowl with chicken, steak, or falafel. For specific needs, check with a coach or dietitian.",
      },
      {
        q: "Do you have a discount for fitness groups?",
        a: "FIT members get 15% off. For a group order, ask about pricing when you request a quote.",
      },
    ],
    relatedGuides: ["how-to-order-for-a-post-workout-meal", "high-protein-bowl", "saffron-rice-vs-white-rice"],
  },
];
