/**
 * Wave 3 guides, batch 1: dishes of the region.
 */
import type { Guide } from "./types";

export const guides1: Guide[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-a-gyro-and-how-it-differs-from-shawarma",
    title: "What is a gyro? (And how it differs from shawarma)",
    seoTitle: "What Is a Gyro? How It Differs From Shawarma",
    metaDescription:
      "A gyro is Greek spit-roasted meat in pita with tzatziki. See how it compares to shawarma in meat, spices, sauces and toppings, and why the two get confused.",
    summary:
      "A gyro is a Greek dish of meat roasted on a vertical spit, shaved thin and wrapped in a thick pita with tzatziki, tomato and onion. Shawarma uses the same rotating-spit idea but comes from the Levant, with a more heavily spiced marinade and garlic sauce or tahini instead of tzatziki.",
    sections: [
      {
        heading: "The gyro, briefly",
        paragraphs: [
          "Gyros (the word is both singular and plural in Greek) comes from the Greek for \"turn,\" a nod to the spit. The dish took shape in Greece in the 20th century, and most food historians connect it to the döner kebab carried west by Greeks who left Anatolia after the population exchanges of the 1920s.",
          "In Greece today, gyros is usually pork, with chicken as the other common option. The meat is seasoned with oregano, garlic and pepper, roasted on the spit, then stuffed into a soft, oiled pita with tomato, red onion, tzatziki and, very often, a handful of fries right inside the wrap.",
          "Chicken gyros has become just as popular as pork in many parts of Greece, and you'll often be asked whether you want your pita \"with everything,\" which usually means tomato, onion, tzatziki and fries. A gyros plate (merida) serves the same meat with pita on the side, plus salad and extra tzatziki, for people who'd rather use a fork.",
        ],
      },
      {
        heading: "The American gyro is its own thing",
        paragraphs: [
          "If you order a gyro at a diner or food cart in the United States, you will probably get something different from the Athens version. The standard American gyro is a factory-formed cone of finely ground beef and lamb, pressed together, roasted on a spit and sliced into flat, uniform strips.",
          "That cone became common in the 1970s, especially around Chicago, and it gives the meat a dense, almost sausage-like texture. It is good in its own right, but it is a long way from stacked slices of marinated whole meat, which is what both traditional gyros and shawarma use.",
        ],
      },
      {
        heading: "Gyro vs shawarma, side by side",
        paragraphs: [
          "Both dishes descend from the same Ottoman-era technique, so the differences come down to seasoning and what goes with the meat.",
          "Spices: gyro seasoning leans Greek, with oregano, thyme, garlic and black pepper. Shawarma marinades usually carry warmer, deeper spices such as cumin, coriander, cardamom, allspice, cinnamon and turmeric, plus lemon, vinegar or yogurt.",
          "Meat: Greek gyros is mostly pork or chicken, American gyros is a beef-lamb blend, and shawarma is chicken, beef or lamb. Pork is not used in traditional shawarma.",
          "Sauce and toppings: gyros goes with tzatziki, tomato and onion. Shawarma goes with garlic sauce (toum) or tahini, plus pickles, pickled turnips or onions, and sometimes hummus spread inside the wrap.",
          "Bread: gyro pita is thick, fluffy and pocketless, usually grilled with oil. Shawarma is typically rolled in thinner flatbread or pocket pita, and often toasted after rolling.",
        ],
      },
      {
        heading: "Which one should you order?",
        paragraphs: [
          "If you like herby, cool flavors and a soft, bready wrap, a gyro is your lane. If you want something more aromatic and tangy, with pickles and garlic cutting through the meat, go for shawarma.",
          "Pita Bowl in Mission Beach doesn't serve gyros, but it does cover the shawarma side of the family. The Zesty Chicken Wrap pairs chicken shawarma with hummus, pickles and garlic sauce, and the Beef Wrap puts steak shawarma with tahini sauce. Tzatziki fans can still get it as a dip in any build-your-own bowl or wrap, which lands you somewhere between the two traditions.",
        ],
      },
    ],
    relatedDishes: ["zesty-chicken-wrap", "beef-shawarma-wrap", "build-your-own-wrap"],
    relatedGuides: ["what-is-shawarma", "what-is-doner-kebab", "gyro-vs-shawarma"],
    faqs: [
      {
        q: "Is a gyro the same as shawarma?",
        a: "No, though they are related. Both use meat roasted on a vertical spit, but gyros is Greek, uses different spices and is served with tzatziki, while shawarma is Levantine and usually comes with garlic sauce or tahini and pickles.",
      },
      {
        q: "How do you pronounce gyro?",
        a: "The Greek pronunciation is close to \"YEE-ro.\" In the US you'll also hear \"JY-ro,\" and most people behind the counter will know what you mean either way.",
      },
      {
        q: "What meat is in a gyro?",
        a: "In Greece it is usually pork or chicken. In the United States it is most often a pressed cone of ground beef and lamb.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-doner-kebab",
    title: "What is doner kebab?",
    seoTitle: "What Is Doner Kebab? The Turkish Spit-Roast",
    metaDescription:
      "Doner kebab is Turkish meat roasted on a vertical spit and shaved thin. Learn its origins, how it became a Berlin staple, and how it compares to shawarma.",
    summary:
      "Doner kebab (döner kebap in Turkish) is seasoned meat stacked on a vertical rotisserie, roasted as it turns and sliced off in thin shavings. It is the Turkish dish that gyros and shawarma are generally thought to descend from, and it's served on a plate, in bread or rolled in a thin flatbread.",
    sections: [
      {
        heading: "What the name means",
        paragraphs: [
          "Döner means \"turning\" in Turkish, and kebap is the broad word for grilled or roasted meat. So döner kebap is, quite literally, turning roast meat.",
          "The traditional version uses lamb or beef, sometimes with a layer of lamb fat between slices to baste the stack as it cooks. Chicken döner is now just as common, especially outside Turkey.",
          "In Turkey the meat is usually cut with a long, flat knife, though electric shaving tools are now common in busy shops. A good döner stack is built by hand from thin, marinated slices rather than ground meat, and the cook shaves only the browned outer layer, which is why the best pieces have both crisp edges and juicy centers.",
          "Ground-meat cones do exist, especially in mass-produced European döner, and they give a softer, more uniform texture.",
        ],
      },
      {
        heading: "Where it came from",
        paragraphs: [
          "Spit-roasting meat horizontally is ancient, but turning the spit upright is usually credited to cooks in the Ottoman Empire in the 19th century. The city of Bursa in northwest Turkey is often named as the birthplace, and a cook there is widely said to have popularized the vertical method, though historians note that earlier references exist and the full story is hard to pin down.",
          "Bursa is also home to İskender kebap, a classic plate of döner slices laid over cubes of pide bread, covered in tomato sauce and browned butter, with yogurt on the side.",
        ],
      },
      {
        heading: "The Berlin döner",
        paragraphs: [
          "For many people outside Turkey, döner means a sandwich, and that version owes a lot to Germany. Turkish immigrants who arrived in West Berlin as guest workers in the 1960s and 70s began selling döner stuffed into a wedge of toasted flatbread, loaded with cabbage, lettuce, tomato, onion and a choice of garlic, herb or chili sauces.",
          "That format spread across Europe and became one of the continent's most popular late-night foods. Today you'll also see the dürüm, where the same fillings are rolled tightly in a thin lavash-style flatbread rather than stuffed into bread.",
        ],
      },
      {
        heading: "Döner, shawarma and gyros",
        paragraphs: [
          "As the technique traveled through the former Ottoman lands, each region adapted it. In the Arab world it became shawarma, a name that likely comes from çevirme, another Turkish word for turning. In Greece it became gyros.",
          "The biggest differences are in the marinade and the sauces. Döner seasoning tends to be fairly restrained, letting the meat lead, with yogurt, paprika and onion in many recipes. Shawarma leans harder on warm spices and garlic sauce or tahini, and adds pickles. Gyros goes in a Greek direction with oregano and tzatziki.",
          "If you want the closest thing to döner at Pita Bowl, the Steak Shawarma Bowl and Beef Wrap use shaved steak shawarma, and a build-your-own bowl with tzatziki gets you the yogurt note that many döner plates include. Pita Bowl cooks its proteins with olive oil and avocado oil rather than seed oils.",
        ],
      },
    ],
    relatedDishes: ["steak-shawarma-bowl", "beef-shawarma-wrap", "build-your-own-bowl"],
    relatedGuides: ["what-is-shawarma", "what-is-a-gyro-and-how-it-differs-from-shawarma", "what-is-turkish-food"],
    faqs: [
      {
        q: "Is doner kebab the same as shawarma?",
        a: "They share an ancestor and a cooking method, but they're seasoned and served differently. Döner is the Turkish original, while shawarma is the Levantine version with stronger spices, garlic sauce or tahini, and pickles.",
      },
      {
        q: "What meat is used in doner kebab?",
        a: "Traditionally lamb or beef, or a mix. Chicken döner is very common today, especially in Europe.",
      },
      {
        q: "What sauce goes on a doner kebab?",
        a: "In Turkey, yogurt and tomato-based sauces are common. In Berlin-style döner sandwiches, the usual choices are garlic, herb yogurt and chili sauce.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-shish-tawook",
    title: "What is shish tawook?",
    seoTitle: "What Is Shish Tawook? Lebanese Chicken Skewers",
    metaDescription:
      "Shish tawook is chicken marinated in yogurt, lemon and garlic, then grilled on skewers. Learn how it's made, what to eat it with, and how it differs from tikka.",
    summary:
      "Shish tawook is a Levantine dish of boneless chicken cubes marinated in yogurt, lemon, garlic and spices, threaded onto skewers and grilled until charred at the edges. It's usually served with garlic sauce, pickles and fries or rice, either on a plate or rolled in flatbread.",
    sections: [
      {
        heading: "Breaking down the name",
        paragraphs: [
          "The name is borrowed from Turkish, where şiş means skewer and tavuk means chicken. Şiş tavuk is a common Turkish dish too, but in Lebanon, Syria and the wider Levant, shish tawook has developed its own character, with a tangier marinade and a strong association with garlic sauce.",
          "Tawook is one of the most common items at Lebanese grill restaurants and sandwich counters, and it's popular across the Gulf states as well. In many cities it's the default chicken order, the way chicken shawarma is in others. Because it's grilled rather than spit-roasted, it's also one of the easiest Levantine meats to make at home, needing nothing more than a grill pan, a bowl of marinade and some patience.",
        ],
      },
      {
        heading: "What goes into the marinade",
        paragraphs: [
          "Most recipes start with plain yogurt, lemon juice, plenty of garlic and olive oil. Tomato paste and paprika are common additions and give the chicken its orange-red color. Some cooks add a little oregano, thyme, white pepper or allspice.",
          "The yogurt and lemon do real work here. Their acidity helps tenderize the chicken and keeps it from drying out on a hot grill, which is why tawook is usually made with breast meat even though thigh would be more forgiving. Several hours of marinating, or overnight, is typical.",
          "The chicken is cut into cubes, threaded tightly onto skewers, sometimes with onion or peppers between pieces, and cooked over charcoal or a very hot grill. You want dark, slightly charred edges and a juicy center.",
        ],
      },
      {
        heading: "How it's served",
        paragraphs: [
          "In Lebanese grill houses, tawook usually arrives as a platter with toum (a whipped garlic sauce), pickles, grilled tomato and onion, and fries or rice. As a sandwich, the chicken is slid off the skewer into thin flatbread with toum, pickles and fries, then rolled and toasted.",
          "It also shows up as one item on a mixed grill, alongside kafta and lamb or beef skewers, which is a good way to try several Levantine grilled meats at once.",
          "Leftover tawook makes a good next-day salad or wrap filling, since the yogurt marinade keeps it moist. Reheat it briefly in a hot pan rather than the microwave to keep some of the char.",
        ],
      },
      {
        heading: "Tawook vs chicken shawarma vs chicken tikka",
        paragraphs: [
          "All three are marinated chicken, which is why they get mixed up. Tawook is cubed and grilled on a skewer, with a yogurt-lemon-garlic profile. Chicken shawarma is thinly sliced meat, either roasted on a vertical spit or cooked and then sliced, with a warmer spice blend. Chicken tikka is South Asian: also yogurt-marinated cubes, but seasoned with garam masala, chili, turmeric and ginger, and traditionally cooked in a tandoor.",
          "In practice, if you like tawook, you will probably enjoy both of the others. Pita Bowl doesn't sell shish tawook, but it offers chicken shawarma and chicken tikka. The Zesty Chicken Wrap, with chicken shawarma, pickles and garlic sauce, is the closest match to a tawook sandwich, and the Chicken Tikka Bowl gives you the yogurt-marinated, cubed-chicken experience with a different spice direction.",
        ],
      },
    ],
    relatedDishes: ["zesty-chicken-wrap", "chicken-tikka-bowl", "chicken-pita-bowl"],
    relatedGuides: ["what-is-chicken-shawarma", "what-is-toum-garlic-sauce", "chicken-tikka-vs-shawarma"],
    faqs: [
      {
        q: "Is shish tawook spicy?",
        a: "Usually not. The marinade is tangy and garlicky with paprika for color, but it isn't built around chili heat. People often add hot sauce at the table.",
      },
      {
        q: "What is the best sauce for shish tawook?",
        a: "Toum, the whipped Lebanese garlic sauce, is the classic pairing. Tahini sauce and pickles are common as well.",
      },
      {
        q: "Can I make shish tawook without a grill?",
        a: "Yes. A very hot oven, broiler or cast-iron pan works. Cook the skewers or loose cubes at high heat so they brown before they dry out.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-kofta",
    title: "What is kofta?",
    seoTitle: "What Is Kofta? Spiced Ground Meat, Explained",
    metaDescription:
      "Kofta is spiced ground meat shaped into balls or logs and grilled, baked or simmered. Learn the regional versions, from Levantine kafta to Indian kofta curry.",
    summary:
      "Kofta is ground meat, usually lamb or beef, mixed with onion, herbs and spices and shaped into balls, patties or long logs that are grilled, fried, baked or simmered in sauce. Versions exist from the Balkans to South Asia, and the name changes from place to place: köfte, kafta, kufta, kofta.",
    sections: [
      {
        heading: "One word, a lot of territory",
        paragraphs: [
          "The word is usually traced to Persian, where it relates to pounding or grinding meat. As the idea moved across Persian, Ottoman, Arab and Mughal kitchens, it picked up local spellings and local habits.",
          "In Turkey, köfte is a whole category, with dozens of regional styles, from small grilled patties to meatballs in broth. In Lebanon and Syria it's usually kafta, often grilled on flat skewers. In Iran, kufteh can be huge stuffed meatballs. In India and Pakistan, kofta is commonly a meatball or vegetable dumpling in a rich curry sauce. In the Balkans you'll hear ćufte or qofte.",
        ],
      },
      {
        heading: "What's in a classic Levantine kafta",
        paragraphs: [
          "A typical Lebanese kafta mixes ground beef or lamb, often with some fat for juiciness, with finely chopped onion and a large handful of parsley. Seasoning is usually allspice, black pepper, cinnamon and sometimes a seven-spice blend called baharat. The onion and parsley are squeezed dry or chopped very fine so the mixture holds together.",
          "The meat is pressed around flat metal skewers into long fingers and grilled over charcoal. Kafta is also baked in a tray with sliced potatoes and tomatoes, or covered with tahini sauce and baked, two home-style dishes common in Lebanese and Palestinian cooking.",
          "The fat content matters more than people expect. Very lean meat tends to make dry, crumbly kafta, so many cooks use beef or lamb with around 15 to 20 percent fat. Chilling the mixture for half an hour before shaping makes it easier to press onto skewers, and wet hands keep it from sticking.",
          "Turkish köfte styles vary by city. İnegöl köfte is small and dense, while Izmir köfte is baked with potatoes and peppers in tomato sauce.",
        ],
      },
      {
        heading: "Kofta vs kebab vs meatballs",
        paragraphs: [
          "Kofta is a kind of kebab when it's grilled on a skewer, which is why menus say \"kofta kebab.\" The key difference from shish kebab is that kofta is ground meat, while shish uses whole cubes.",
          "Compared with an Italian or American meatball, kofta usually skips the breadcrumbs and egg, relying on finely minced onion and kneading to bind the meat. It also carries much more spice and fresh herbs. Persian koobideh, a long ground-meat skewer, is a close cousin.",
          "Vegetarian kofta is common in South Asia, made from paneer, potato, squash or mixed vegetables, then fried and added to curry.",
        ],
      },
      {
        heading: "How to eat it",
        paragraphs: [
          "Grilled kofta goes well in warm pita with tahini, tomato, onion, parsley and sumac, or on a plate with rice, hummus and salad. It also works chopped into a bowl, where the juices soak into the grain.",
          "Pita Bowl's menu doesn't include kofta, so if you're looking for something similar there, the closest options are the steak shawarma dishes for a spiced red-meat bowl or wrap, or Bourak, a Middle Eastern egg roll stuffed with steak, for a handheld snack. For a plant-based ground-and-spiced option, falafel takes a similar idea in a different direction.",
        ],
      },
    ],
    relatedDishes: ["steak-shawarma-bowl", "bourak", "falafel"],
    relatedGuides: ["what-are-kebabs-a-guide-to-the-main-types", "falafel-vs-kofta", "what-is-kibbeh"],
    faqs: [
      {
        q: "What meat is kofta made from?",
        a: "Most often lamb, beef or a mix of the two. Chicken and turkey kofta exist, and vegetarian versions are common in South Asian cooking.",
      },
      {
        q: "Is kofta the same as kafta?",
        a: "Yes, they are the same family of dish. Kafta is the usual Lebanese and Syrian spelling, köfte is Turkish, and kofta is common in English and South Asian usage.",
      },
      {
        q: "Does kofta have breadcrumbs?",
        a: "Traditional Levantine kafta usually doesn't. Some recipes add soaked bread or egg, so ask if you avoid wheat.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-are-kebabs-a-guide-to-the-main-types",
    title: "What are kebabs? A guide to the main types",
    seoTitle: "Types of Kebab: A Guide to Shish, Döner and More",
    metaDescription:
      "Kebab covers grilled and roasted meats from Turkey to India. A plain guide to shish, döner, adana, kofta, seekh, koobideh and more, and how to tell them apart.",
    summary:
      "Kebab is a broad name for meat that is grilled, roasted or cooked on a skewer or spit, found across the Middle East, Central Asia and South Asia. The main types are skewered cubes (shish), spit-roasted shavings (döner and its relatives), ground-meat skewers (kofta, adana, seekh, koobideh) and a range of regional specialties.",
    sections: [
      {
        heading: "Where the word comes from",
        paragraphs: [
          "Kebab comes through Persian and Arabic, and medieval cookbooks from Baghdad already describe grilled meat dishes in this family. The Ottomans spread many styles across their territory, and Mughal cooks developed their own branch in South Asia.",
          "Because the word is so old and widespread, it doesn't point to one recipe. In Turkey, kebap can describe a casserole or a stew as well as grilled meat. In the US and UK, \"kebab\" often just means meat on a stick, or a döner sandwich.",
        ],
      },
      {
        heading: "Skewered whole pieces",
        paragraphs: [
          "Shish kebab: cubes of lamb, beef or chicken threaded onto a skewer, often marinated, sometimes alternated with onion and peppers. Şiş is Turkish for skewer.",
          "Shish tawook: the Levantine chicken version, marinated in yogurt, lemon and garlic and served with garlic sauce.",
          "Joojeh kabab: Persian saffron-and-lemon chicken skewers, typically eaten with buttery rice.",
          "Chicken tikka: South Asian yogurt-marinated chicken pieces cooked in a tandoor. It isn't always called a kebab, but it belongs to the same grilled-meat tradition.",
        ],
      },
      {
        heading: "Spit-roasted and shaved",
        paragraphs: [
          "Döner kebab: Turkish meat stacked on a vertical spit and sliced thin. It is generally considered the parent of shawarma, which is the Levantine version with stronger spices and garlic sauce or tahini, and of Greek gyros.",
          "Cağ kebabı: a regional Turkish style from Erzurum where the stack is turned horizontally over a wood fire and the slices are served on small skewers.",
          "Tacos al pastor in Mexico belong here too. Lebanese immigrants brought spit-roasting to Mexico in the early 20th century, and local cooks adapted it with pork, dried chiles and pineapple. It isn't usually called a kebab, but the family resemblance is clear.",
          "Iskender kebap, from Bursa, takes döner slices and serves them over bread cubes with tomato sauce, melted butter and yogurt. It's a good example of how a single cooking method can become a sit-down plate rather than street food.",
        ],
      },
      {
        heading: "Ground meat on a skewer",
        paragraphs: [
          "Kofta or kafta: ground meat mixed with onion, parsley and spices, pressed onto a skewer or shaped into logs.",
          "Adana kebab: a long, hand-minced lamb skewer from southern Turkey, seasoned with red pepper flakes and known for its heat. Urfa kebab is the milder neighbor from the same region.",
          "Koobideh: the Persian ground-meat skewer, usually lamb or beef with grated onion, served with rice, grilled tomato and sumac.",
          "Seekh kebab: the South Asian version, spiced with ginger, green chili and garam masala and cooked in a tandoor. Shami kebab, a pan-fried patty of meat and lentils, is another South Asian favorite.",
          "If you're ordering from a grill menu and see \"mixed grill,\" you'll usually get a sampler of several of these, which is a good way to learn your preferences.",
          "At Pita Bowl, the spit-roast branch of the family shows up as chicken and steak shawarma, and the tikka branch as chicken tikka. You can try either in a bowl, a wrap or over fries.",
        ],
      },
    ],
    relatedDishes: ["chicken-tikka-bowl", "steak-shawarma-bowl", "chicken-shawarma-fries"],
    relatedGuides: ["what-is-kofta", "what-is-doner-kebab", "shawarma-vs-kebab"],
    faqs: [
      {
        q: "Is shawarma a kind of kebab?",
        a: "Broadly, yes. Shawarma comes from the döner kebab tradition of spit-roasting meat, though in everyday use people usually treat it as its own dish.",
      },
      {
        q: "What's the difference between shish kebab and kofta kebab?",
        a: "Shish kebab uses whole cubes of meat on a skewer. Kofta kebab uses seasoned ground meat pressed onto the skewer.",
      },
      {
        q: "Which kebab is the spiciest?",
        a: "Adana kebab from Turkey and many South Asian seekh kebabs are known for real chili heat. Most other styles are seasoned rather than hot.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-tabbouleh",
    title: "What is tabbouleh?",
    seoTitle: "What Is Tabbouleh? The Lebanese Parsley Salad",
    metaDescription:
      "Tabbouleh is a Lebanese salad of finely chopped parsley, mint, tomato, onion and a little bulgur in lemon and olive oil. Learn how it's made and served.",
    summary:
      "Tabbouleh is a Levantine salad, most closely tied to Lebanon, made mostly of finely chopped flat-leaf parsley with mint, tomato, green onion and a small amount of fine bulgur wheat, dressed with lemon juice and olive oil. Done the traditional way, it's a green herb salad, not a grain salad.",
    sections: [
      {
        heading: "The parsley is the point",
        paragraphs: [
          "The most common surprise for people who first try tabbouleh in Lebanon is how green it is. Many supermarket versions in the US are mostly bulgur with flecks of herbs. The traditional ratio flips that: a large pile of parsley, with bulgur used almost like a seasoning to soak up the lemony juices.",
          "Flat-leaf parsley is chopped very finely by hand, ideally with a sharp knife rather than a food processor, which bruises the leaves and turns them watery. Mint is added in a smaller amount. Ripe tomatoes are diced small, and green onion or a little white onion adds bite.",
          "Curly parsley is sometimes used, but flat-leaf is standard in Lebanon because it's more tender and has a cleaner flavor.",
        ],
      },
      {
        heading: "How it's put together",
        paragraphs: [
          "Fine bulgur, which is cracked, parboiled wheat, is rinsed or briefly soaked rather than cooked, then often mixed with the tomatoes so it softens in their juice. Some cooks season the bulgur with a pinch of allspice or cinnamon, a Lebanese touch.",
          "The dressing is simple: fresh lemon juice, good olive oil and salt. Tabbouleh is usually dressed close to serving so the parsley stays bright. It is eaten as part of a mezze spread, often scooped up with small inner leaves of romaine or cabbage instead of a fork.",
          "A few practical tips help at home. Wash the parsley well and dry it completely before chopping, because wet herbs turn to paste. Use only the leaves and the thin upper stems. Salt the tomatoes lightly and let them sit so their juice softens the bulgur. And taste for lemon at the end: good tabbouleh should be noticeably tart, not just herby.",
          "In Lebanon, tabbouleh is taken seriously enough that it's a common point of friendly debate between families, mostly over how much bulgur is too much.",
        ],
      },
      {
        heading: "Regional and modern versions",
        paragraphs: [
          "Syrian and Palestinian tabbouleh are similar to Lebanese, with small differences in the amount of bulgur, onion and lemon. In Turkey, a related salad called kısır is much heavier on bulgur and uses tomato or pepper paste, so it's closer to what many Americans picture when they hear tabbouleh.",
          "Quinoa tabbouleh, cauliflower rice tabbouleh and other swaps have become popular in the US. They're fine salads, though purists would say a parsley salad without bulgur is a different dish. Because bulgur is wheat, traditional tabbouleh isn't gluten-free.",
        ],
      },
      {
        heading: "Where it fits in a meal",
        paragraphs: [
          "Tabbouleh's sharp, fresh flavor makes it a natural partner for rich or grilled food: kibbeh, kafta, shawarma and falafel all benefit from a forkful on the side. It's also a good balance to creamy dips like hummus and baba ganoush.",
          "Tabbouleh isn't on Pita Bowl's menu. If you're after the same fresh, lemony contrast in a bowl there, a build-your-own bowl with mixed greens, cucumbers, tomatoes, pickled onions and a bright sauce gets you in that territory, and the Earth Bowl pairs greens and herbs with falafel and lentils.",
        ],
      },
    ],
    relatedDishes: ["build-your-own-bowl", "earth-bowl"],
    relatedGuides: ["what-is-fattoush", "what-is-a-mezze-platter", "what-is-lebanese-food"],
    faqs: [
      {
        q: "Is tabbouleh gluten-free?",
        a: "Not traditionally. It contains bulgur, which is wheat. Versions made with quinoa or extra vegetables instead can be gluten-free, but they are a modern adaptation.",
      },
      {
        q: "How long does tabbouleh keep?",
        a: "It's best the day it's made. After that the parsley softens and releases water. Storing the dressing separately helps if you need to make it ahead.",
      },
      {
        q: "What's the difference between tabbouleh and fattoush?",
        a: "Tabbouleh is a finely chopped parsley salad with bulgur. Fattoush is a chunkier mixed vegetable salad with toasted or fried pita and a sumac dressing.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-fattoush",
    title: "What is fattoush?",
    seoTitle: "What Is Fattoush? The Levantine Bread Salad",
    metaDescription:
      "Fattoush is a Levantine salad of crisp pita, greens, tomato, cucumber and radish in a lemon-sumac dressing. Here's what's in it and why the pita matters.",
    summary:
      "Fattoush is a Levantine chopped salad of lettuce, tomato, cucumber, radish, herbs and pieces of toasted or fried pita bread, tossed in a tangy dressing of lemon, olive oil and sumac. It's one of the best-known ways the region uses up day-old bread.",
    sections: [
      {
        heading: "A salad built around bread",
        paragraphs: [
          "The name is usually linked to the Arabic verb for crumbling or breaking into pieces, the same root behind fatteh, a family of dishes layered with broken bread. In fattoush, the bread is pita that has gone a little stale, torn or cut into pieces, then toasted, baked or fried until crisp.",
          "Those crisp pieces are what make fattoush different from a regular garden salad. They soak up some of the dressing and soften at the edges while staying crunchy in the middle. Add them just before serving if you want them to keep their crunch.",
        ],
      },
      {
        heading: "What else goes in",
        paragraphs: [
          "The vegetables are chopped in larger pieces than in tabbouleh. Romaine or other crisp lettuce, tomato, cucumber, radish and green onion are the usual base. Many cooks add bell pepper, parsley and mint.",
          "Purslane, a lemony succulent green, is traditional in Lebanon and Syria when it's in season, though it's hard to find in many US stores.",
          "The dressing is where fattoush gets its personality. Lemon juice, olive oil, garlic and salt are standard, and sumac, a dried, deep red berry with a tart, lemony flavor, is sprinkled over the top or mixed in. Many versions also add a spoonful of pomegranate molasses, which gives a sweet-sour depth.",
          "Fattoush is flexible by design. It was historically a way to use whatever vegetables and bread were on hand, so you'll see versions with arugula, cabbage, green peppers or extra herbs. What stays constant is the crisp bread, the tart dressing and a mix of fresh, crunchy vegetables cut into bite-size pieces.",
          "Toss the salad with the dressing first, then fold in the bread at the last moment. Some cooks also dust the toasted pita itself with sumac and salt so every piece carries flavor.",
        ],
      },
      {
        heading: "Fattoush vs tabbouleh vs panzanella",
        paragraphs: [
          "Fattoush and tabbouleh often appear together on mezze tables, and they do different jobs. Tabbouleh is fine, green and herb-driven. Fattoush is chunky, crunchy and tangy, more of a mixed salad.",
          "If fattoush reminds you of Italian panzanella, you're not wrong. Both are thrifty ways to use stale bread in a salad. Panzanella uses soaked crusty bread with tomatoes and basil, while fattoush keeps the bread crisp and leans on sumac and lemon.",
          "Fattoush is also more forgiving to make. You can cut the vegetables quickly and roughly, while tabbouleh rewards slow, careful knife work.",
        ],
      },
      {
        heading: "Making it work as a meal",
        paragraphs: [
          "On its own, fattoush is a side dish. Add grilled chicken, falafel or shawarma and it becomes a full meal. It pairs especially well with garlicky or rich proteins, because the acidic dressing cuts through them.",
          "Pita Bowl doesn't have fattoush on the menu, but you can get close with what's there. Order a build-your-own bowl with a mixed greens base, cucumbers, tomatoes and pickled onions, then add a side of crispy pita chips and crumble them on top just before you eat. Pick chicken shawarma or falafel to make it filling.",
        ],
      },
    ],
    relatedDishes: ["build-your-own-bowl", "pita-nachos", "dip-and-pita"],
    relatedGuides: ["what-is-tabbouleh", "what-are-pita-chips", "how-to-use-leftover-pita"],
    faqs: [
      {
        q: "What does sumac taste like?",
        a: "Tart and lemony, with a slight fruity, earthy note. It adds sourness without extra liquid, which is why it's often sprinkled over salads and grilled meat.",
      },
      {
        q: "Is fattoush vegan?",
        a: "Traditional fattoush is usually vegan, since it's vegetables, bread, olive oil, lemon and sumac. Check the bread and any added cheese if you're ordering it somewhere.",
      },
      {
        q: "Should the pita in fattoush be fried or baked?",
        a: "Both are traditional. Fried pita is richer and crunchier. Baked or toasted pita brushed with olive oil is lighter and easier at home.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-baba-ganoush",
    title: "What is baba ganoush?",
    seoTitle: "What Is Baba Ganoush? The Smoky Eggplant Dip",
    metaDescription:
      "Baba ganoush is a smoky dip of charred, mashed eggplant. Learn how it's made, why recipes disagree on tahini, and how it compares with hummus and mutabal.",
    summary:
      "Baba ganoush is a Levantine dip made from eggplant that's charred until smoky and soft, then mashed and seasoned with lemon, garlic and olive oil. In the US it usually includes tahini, though in parts of the Levant that version is called mutabal and baba ganoush refers to a tahini-free eggplant salad.",
    sections: [
      {
        heading: "Why the smoke matters",
        paragraphs: [
          "The defining step is cooking whole eggplants directly over a flame, on a grill or gas burner, until the skin is blackened and the flesh collapses. This gives the dip its signature smoky taste, which an oven alone can't fully copy.",
          "Once cool enough to handle, the eggplant is peeled, drained of its bitter juices for a few minutes, and mashed with a fork or chopped with a knife. Many cooks prefer a slightly chunky texture to a smooth puree, so you can still tell it's eggplant.",
          "Choosing eggplants helps too. Look for ones that feel heavy, with tight, glossy skin and few seeds. Medium-size globe eggplants are the usual choice. Prick them a few times before roasting so steam can escape.",
          "Seasoning is done after mashing: crushed garlic, lemon juice, salt and olive oil, plus tahini in the American-style version. Taste and adjust, because eggplant can vary from sweet to slightly bitter.",
        ],
      },
      {
        heading: "The name and the naming confusion",
        paragraphs: [
          "Baba ghanouj in Arabic is often translated along the lines of \"pampered father\" or \"spoiled papa.\" There are several folk stories behind the name, none of them confirmed, so treat them as charming rather than historical.",
          "The confusion that matters for ordering is this: in Lebanon and Syria, baba ghanouj is often a chopped salad of grilled eggplant mixed with tomato, onion, parsley, pomegranate molasses and olive oil, with no tahini. The creamy tahini dip is called mutabal. In most American restaurants, \"baba ganoush\" means the creamy tahini version. If it matters to you, ask what's in it.",
        ],
      },
      {
        heading: "Baba ganoush vs hummus",
        paragraphs: [
          "The two dips sit side by side on most mezze tables and are often both made with tahini, garlic and lemon, but they taste quite different. Hummus is chickpea-based, creamy and nutty. Baba ganoush is lighter, smokier and a little sweet from the roasted eggplant.",
          "Baba ganoush is naturally lower in protein than hummus because eggplant has very little, while chickpeas are a legume. Both are typically vegan and gluten-free on their own, though the pita you eat them with is not.",
          "Texture is the other giveaway. Hummus is usually smooth and thick enough to swirl. Baba ganoush is looser, with soft strands of eggplant, and it often has a slightly glossy look from the olive oil.",
        ],
      },
      {
        heading: "How to eat it",
        paragraphs: [
          "Serve it in a shallow bowl with a well of olive oil on top, maybe some pomegranate seeds, parsley or a pinch of paprika. Scoop it with warm pita, cucumber slices or pita chips. It's also good spread inside a wrap, or as a cool, smoky partner to grilled meat.",
          "At Pita Bowl, the roasted eggplant dip is one of the three house dips, alongside hummus and tzatziki. You can order it with warm pita as Dip & Pita, pick it as the dip in a build-your-own bowl, or find it in the Steak Shawarma Bowl and the Earth Bowl. If you need to know exactly what's in it, for example whether it contains tahini, ask the staff.",
        ],
      },
    ],
    relatedDishes: ["dip-and-pita", "steak-shawarma-bowl", "earth-bowl"],
    relatedGuides: ["what-is-mutabal", "hummus-vs-baba-ganoush", "hummus-tzatziki-eggplant-dip"],
    faqs: [
      {
        q: "Does baba ganoush have tahini?",
        a: "In most US restaurants, yes. In Lebanon and Syria, the tahini version is usually called mutabal, and baba ghanouj may be a tahini-free eggplant salad. Ask if you need to know.",
      },
      {
        q: "Is baba ganoush healthy?",
        a: "It's mostly vegetables, olive oil and tahini, so it's a plant-based, fiber-containing dip. Like any dip, the portion and what you scoop it with make a difference.",
      },
      {
        q: "Can you make baba ganoush in the oven?",
        a: "Yes, roasting whole eggplants at high heat works. You'll get less smoke, so some cooks finish the skins under the broiler or add a pinch of smoked paprika.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-mutabal",
    title: "What is mutabal?",
    seoTitle: "What Is Mutabal? Smoky Eggplant With Tahini",
    metaDescription:
      "Mutabal is a creamy Levantine dip of smoky roasted eggplant, tahini, garlic and lemon. See how it's made and how it differs from baba ganoush in the Levant.",
    summary:
      "Mutabal is a Levantine dip of fire-roasted eggplant mashed with tahini, garlic, lemon and sometimes yogurt, finished with olive oil. It's the creamy eggplant dip most Americans call baba ganoush.",
    sections: [
      {
        heading: "What the word means",
        paragraphs: [
          "Mutabbal (also spelled moutabal or mtabbal) comes from an Arabic word meaning seasoned or spiced. That's why the name isn't limited to eggplant: in Syria, Lebanon and Jordan you'll also find mutabal made with beets, zucchini or other cooked vegetables blended with tahini.",
          "When someone just says mutabal, though, they almost always mean the eggplant version.",
          "In Syria and Lebanon, mutabal is a fixture of the mezze table at family meals and restaurants, served alongside hummus, tabbouleh and pickles. It's one of the dishes people order without thinking, the way Americans might order chips and salsa.",
        ],
      },
      {
        heading: "Mutabal vs baba ganoush",
        paragraphs: [
          "This is where most of the confusion lives. In much of the Levant, the two are separate dishes. Mutabal is creamy, rich with tahini and often yogurt, with a pale beige color. Baba ghanouj is a chopped, tahini-free eggplant salad, often with tomato, onion, peppers, parsley and pomegranate molasses.",
          "Outside the region, and on most American menus, \"baba ganoush\" has come to mean the tahini dip, which is really mutabal. Neither usage is wrong, but if you ask for baba ganoush in Beirut you might get something different from what you expect.",
        ],
      },
      {
        heading: "How it's made",
        paragraphs: [
          "The process starts the same way as baba ganoush: whole eggplants are charred over an open flame until the skin is black and the inside is collapsing. The smoky flesh is scooped out, drained and mashed.",
          "Then the tahini goes in, often a generous amount, along with crushed garlic, lemon juice and salt. Some cooks stir in yogurt for extra creaminess and tang, which also lightens the color. The texture can range from almost smooth to slightly chunky.",
          "To serve, it's spread in a shallow plate, swirled, and topped with olive oil, and sometimes pomegranate seeds, chopped parsley or a sprinkle of paprika or sumac.",
          "A practical tip if you make it at home: let the roasted eggplant drain in a colander for ten to fifteen minutes before mashing. Eggplant holds a lot of liquid, and skipping this step is the most common reason homemade mutabal turns out thin and watery.",
        ],
      },
      {
        heading: "Eating mutabal, and what to check",
        paragraphs: [
          "Mutabal is a mezze dip first, eaten with warm bread, raw vegetables or alongside grilled meat. It also works as a spread in wraps and as a creamy layer in grain bowls.",
          "If you avoid dairy, ask whether the mutabal you're ordering contains yogurt, since many versions do. If you have a sesame allergy, note that tahini is made from sesame seeds, so it's not a safe swap for hummus.",
          "Pita Bowl's roasted eggplant dip is one of its three house dips and is available with warm pita, in bowls, and as a side. The menu calls it eggplant dip rather than mutabal or baba ganoush, so if you need the exact ingredients, especially for sesame or dairy, ask the staff before ordering.",
        ],
      },
    ],
    relatedDishes: ["dip-and-pita", "earth-bowl", "build-your-own-bowl"],
    relatedGuides: ["what-is-baba-ganoush", "what-is-tahini", "how-to-eat-out-with-a-sesame-allergy"],
    faqs: [
      {
        q: "Is mutabal vegan?",
        a: "It can be. Many versions are just eggplant, tahini, lemon, garlic and olive oil, but some add yogurt, so check.",
      },
      {
        q: "Does mutabal contain sesame?",
        a: "Yes. Tahini, which is ground sesame seeds, is a core ingredient.",
      },
      {
        q: "What do you eat mutabal with?",
        a: "Warm pita, raw vegetables like cucumber and peppers, or alongside grilled meats and falafel.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-muhammara",
    title: "What is muhammara?",
    seoTitle: "What Is Muhammara? Red Pepper and Walnut Dip",
    metaDescription:
      "Muhammara is a Syrian dip of roasted red peppers, walnuts, breadcrumbs and pomegranate molasses. Learn how it tastes, how it's made and what to pair it with.",
    summary:
      "Muhammara is a thick, brick-red dip from Syria, most closely associated with Aleppo, made from roasted red peppers, walnuts, breadcrumbs, pomegranate molasses, olive oil and mild chili. It's sweet, smoky, tangy and gently spicy all at once.",
    sections: [
      {
        heading: "Red, and named for it",
        paragraphs: [
          "Muhammara comes from an Arabic word meaning reddened, which describes it well. The color comes from roasted red bell peppers and Aleppo pepper, a dried chili with moderate heat and a fruity, slightly oily character.",
          "Aleppo, in northern Syria, has a deep tradition of red-pepper cooking, and muhammara is one of its signature mezze. It's also popular in Lebanon, Turkey (where it's sometimes called acuka or muhammara) and across the Syrian diaspora.",
          "Aleppo pepper has become easier to find in US grocery stores and spice shops. Because of the war in Syria, much of what's sold under the name now comes from neighboring Turkey, where a similar pepper called pul biber is grown. Either works in muhammara. If you can't find it, a mix of sweet paprika and a pinch of red pepper flakes is a common stand-in.",
        ],
      },
      {
        heading: "What goes into it",
        paragraphs: [
          "The base is roasted red peppers, charred and peeled, or in some recipes a red pepper paste. Toasted walnuts give body and richness. Breadcrumbs, or toasted bread blitzed into crumbs, thicken the mixture so it holds its shape.",
          "Pomegranate molasses is the ingredient that makes muhammara taste like itself. It's a thick, dark syrup of reduced pomegranate juice with a sharp sweet-sour flavor. Olive oil, cumin, garlic, lemon and salt round it out.",
          "Texture varies. Some cooks pound everything by hand for a coarse, nubbly dip. Others blend it smooth. Both are traditional.",
          "Some cooks add a little red pepper paste for deeper color, and a few skip the breadcrumbs in favor of more walnuts.",
        ],
      },
      {
        heading: "How it tastes and how it's served",
        paragraphs: [
          "Expect sweetness from the peppers and molasses, earthiness from walnuts and cumin, a little smoke, and a slow, mild heat from the Aleppo pepper. It's richer than hummus and more assertive than baba ganoush.",
          "On a mezze table, muhammara is usually spread in a shallow dish, topped with olive oil and whole walnut halves, and eaten with warm bread. It's also excellent alongside grilled chicken or lamb, spread in sandwiches, spooned over roasted vegetables, or thinned with a little water and lemon as a sauce for fish.",
          "Muhammara often tastes better the next day, once the flavors settle. It keeps for several days in the fridge with a thin layer of olive oil on top. Let it come to room temperature before serving, because cold dulls the pepper and molasses.",
        ],
      },
      {
        heading: "Allergy and diet notes",
        paragraphs: [
          "Muhammara contains tree nuts (walnuts) and, in most versions, wheat breadcrumbs. Anyone avoiding nuts or gluten should skip it or ask carefully. It's usually vegan, since it's built from vegetables, nuts, bread, oil and molasses.",
          "Muhammara isn't on Pita Bowl's menu. Pita Bowl's three dips are hummus, tzatziki and roasted eggplant dip, and if you're avoiding nuts, note that the baklava contains them and ask the staff about other desserts and shared prep. If you enjoy muhammara's sweet-smoky side, the roasted eggplant dip is the closest in spirit on the menu.",
        ],
      },
    ],
    relatedDishes: ["dip-and-pita", "walnut-baklava"],
    relatedGuides: ["what-is-a-mezze-platter", "how-to-eat-out-with-a-nut-allergy", "what-is-baba-ganoush"],
    faqs: [
      {
        q: "Is muhammara spicy?",
        a: "Mildly. Aleppo pepper gives a gentle, warming heat rather than a sharp burn. Some cooks add more chili, so heat varies by recipe.",
      },
      {
        q: "Does muhammara contain nuts?",
        a: "Yes. Walnuts are a standard ingredient, so it isn't suitable for people with tree nut allergies.",
      },
      {
        q: "What can I use instead of pomegranate molasses?",
        a: "A mix of lemon juice and a little honey or date syrup gets you part of the way, but pomegranate molasses has a distinct flavor worth seeking out.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-kibbeh",
    title: "What is kibbeh?",
    seoTitle: "What Is Kibbeh? Lebanon's Bulgur and Meat Dish",
    metaDescription:
      "Kibbeh is a Levantine dish of bulgur and finely ground meat, often shaped into stuffed, fried shells. Learn the main types: fried, baked, raw and vegetarian.",
    summary:
      "Kibbeh is a Levantine dish made from fine bulgur wheat kneaded with very finely ground lamb or beef and onion. It's most famous as football-shaped fried shells stuffed with spiced meat and pine nuts, but it's also baked in trays, served raw, or made without meat.",
    sections: [
      {
        heading: "The basic idea",
        paragraphs: [
          "Kibbeh starts with a dough-like paste: lean ground meat, soaked fine bulgur, grated onion and spices such as allspice, cinnamon and black pepper, pounded or processed until smooth. Traditionally this was done with a stone mortar and wooden pestle, which is why kibbeh making has a reputation as skilled, patient work.",
          "Kibbeh is considered a national dish in both Lebanon and Syria, and it's widely made in Palestine, Jordan and Iraq. Iraqi kubba often uses a rice or semolina shell instead of bulgur.",
          "Each region has its own pride points. Zgharta and other towns in northern Lebanon are well known for kibbeh, and Aleppo in Syria has long been famous for the sheer number of kibbeh varieties its cooks make, including versions with quince, sour cherries or pomegranate. Food processors have made the shell much easier for home cooks, though many older cooks still swear by pounding.",
        ],
      },
      {
        heading: "The main types",
        paragraphs: [
          "Fried kibbeh (kibbeh maqliyeh): the shell paste is shaped around a finger into a hollow torpedo, filled with sautéed ground meat, onion and pine nuts, sealed and deep-fried until crunchy. These are the ones you'll see on mezze platters.",
          "Baked kibbeh (kibbeh bil sayniyeh): a layer of shell paste is pressed into a tray, topped with the meat-and-pine-nut filling, covered with another layer, scored into diamonds, drizzled with fat or oil and baked. It's sliced and served like a savory pie.",
          "Raw kibbeh (kibbeh nayyeh): very fresh, very lean lamb or beef pounded with bulgur and spices and eaten raw with olive oil, mint and onion, a celebratory dish in Lebanon. It carries the usual food-safety cautions of any raw meat.",
          "Meatless kibbeh: pumpkin, potato or lentil kibbeh is made during fasting periods and by vegetarian cooks, with a filling of onions, chickpeas, spinach or walnuts.",
        ],
      },
      {
        heading: "What it tastes like",
        paragraphs: [
          "Fried kibbeh has a crisp, slightly nutty shell from the bulgur, with a juicy, warmly spiced interior. The pine nuts add a soft crunch. It's usually eaten with plain yogurt, a squeeze of lemon, or alongside tabbouleh and hummus.",
          "Baked kibbeh is heartier and more family-style, often served with a salad and yogurt as a main course.",
          "Shaping fried kibbeh by hand is the hardest part. The cook rolls a ball of the shell paste, pokes a finger into it and rotates it against the palm to hollow out a thin, even wall, then spoons in filling and pinches the end to a point. Cracks let oil in during frying, so the paste needs to stay cold and smooth. Many families make kibbeh in big batches and freeze them before frying.",
          "Kibbeh also appears in soups and stews, such as kibbeh labanieh, where small kibbeh balls are simmered in a garlicky yogurt sauce.",
        ],
      },
      {
        heading: "If you like kibbeh",
        paragraphs: [
          "Kibbeh contains wheat (bulgur), and many fillings include pine nuts, so it's not a fit for gluten-free or nut-free diets.",
          "Pita Bowl doesn't serve kibbeh, but its Bourak scratches a similar itch: a crispy Middle Eastern egg roll stuffed with steak, sold as an order of two. Pair it with a dip like hummus or tzatziki the way kibbeh is often paired with yogurt.",
        ],
      },
    ],
    relatedDishes: ["bourak", "dip-and-pita"],
    relatedGuides: ["what-is-lebanese-food", "what-is-kofta", "what-is-borek"],
    faqs: [
      {
        q: "Is kibbeh the same as kofta?",
        a: "No. Both use spiced ground meat, but kibbeh is mixed with bulgur wheat to form a shell or layer, while kofta is mostly meat, onion and herbs shaped into logs or balls.",
      },
      {
        q: "Is kibbeh gluten-free?",
        a: "Traditional kibbeh isn't, since bulgur is cracked wheat. Some Iraqi versions use rice shells, but check how any specific kibbeh is made.",
      },
      {
        q: "What do you eat with kibbeh?",
        a: "Plain yogurt, lemon, tabbouleh, hummus or a simple salad. Fried kibbeh is often part of a mezze spread.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-manakish",
    title: "What is manakish?",
    seoTitle: "What Is Manakish? Lebanese Za'atar Flatbread",
    metaDescription:
      "Manakish is a Levantine flatbread baked with za'atar and olive oil, cheese or other toppings. Learn the main kinds and why it's a breakfast staple.",
    summary:
      "Manakish (singular man'oushe) is a Levantine flatbread topped before baking, most classically with za'atar and olive oil, or with melty white cheese. It's a breakfast and street-food staple in Lebanon, Syria, Palestine and Jordan, often folded and eaten on the go.",
    sections: [
      {
        heading: "Where the name comes from",
        paragraphs: [
          "The word comes from an Arabic root meaning to engrave or carve, a reference to the way the baker presses fingertips into the dough to make little dimples before adding the topping. Those dips hold the olive oil and keep the topping from sliding off.",
          "Manakish are baked in hot ovens at neighborhood bakeries, sometimes on a domed metal griddle called a saj, which produces a thinner, larger flatbread.",
        ],
      },
      {
        heading: "The main toppings",
        paragraphs: [
          "Za'atar: the most iconic version. Za'atar is a blend of dried wild thyme or oregano, toasted sesame seeds, sumac and salt. Mixed with olive oil and spread on the dough, it bakes into a fragrant, herby, slightly tart crust.",
          "Cheese (jibneh): usually akkawi, a mild, salty white cheese, sometimes mixed with mozzarella for stretch. Half-za'atar, half-cheese is a popular order.",
          "Kishk: a tangy topping made from fermented yogurt and bulgur, mixed with onion, tomato and spices. It has a strong, savory, sour flavor that people tend to love or skip.",
          "Ground meat: thin dough with a layer of spiced minced meat, tomato and onion, often called lahm bi ajeen. Some people count it as a separate dish rather than a type of manakish.",
        ],
      },
      {
        heading: "How it's eaten",
        paragraphs: [
          "In Lebanon, a za'atar man'oushe is the classic morning bite, often rolled or folded around fresh tomato, cucumber, mint and olives, sometimes with a smear of labneh. It's cheap, quick and eaten standing up at the bakery or walking to work or school.",
          "At home, manakish is often part of a slow weekend breakfast with labneh, olives, eggs, ful and tea.",
          "Bakeries that sell manakish usually bake them to order in a few minutes, so they come out hot and blistered. Many also sell small cheese and spinach pies called fatayer from the same ovens. Toppings can be mixed on one flatbread, and some bakeries offer extras like sliced vegetables or a drizzle of chili oil.",
          "Like a lot of breakfast foods, manakish is tied to routine. Plenty of people buy the same one from the same bakery most mornings.",
        ],
      },
      {
        heading: "Diet notes and a local angle",
        paragraphs: [
          "Manakish dough is wheat-based, so it isn't gluten-free. The za'atar blend contains sesame seeds, which matters if you have a sesame allergy. Za'atar manakish without cheese is usually vegan, while cheese and kishk versions contain dairy.",
          "Manakish isn't on Pita Bowl's menu. If what you love about it is warm bread with something savory, the Dip & Pita plate pairs warm pita with your choice of hummus, tzatziki or roasted eggplant dip, and it's an easy thing to share before a bowl or wrap.",
          "If you want to try manakish at home, store-bought pizza dough is a reasonable shortcut. Press it thin, dimple it with your fingertips, spread a paste of za'atar and olive oil, and bake it in a very hot oven until the edges are golden.",
        ],
      },
    ],
    relatedDishes: ["dip-and-pita", "build-your-own-wrap"],
    relatedGuides: ["what-is-middle-eastern-breakfast", "what-is-pita-bread", "what-is-labneh"],
    faqs: [
      {
        q: "Is manakish the same as pizza?",
        a: "They're both topped flatbreads, but manakish is usually thinner, has simpler toppings like za'atar or white cheese, and has no tomato sauce base.",
      },
      {
        q: "Does manakish contain sesame?",
        a: "The za'atar version does, because za'atar blends include toasted sesame seeds.",
      },
      {
        q: "When do people eat manakish?",
        a: "Mostly for breakfast or as a quick snack, though it's eaten at any time of day.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-shakshuka",
    title: "What is shakshuka?",
    seoTitle: "What Is Shakshuka? Eggs in Spiced Tomato Sauce",
    metaDescription:
      "Shakshuka is eggs poached in a spiced tomato and pepper sauce, from North Africa and popular across the Middle East. Learn its origins and how to make it well.",
    summary:
      "Shakshuka is a one-pan dish of eggs gently poached in a sauce of tomatoes, peppers, onion, garlic and spices such as cumin and paprika. It comes from North Africa, especially Tunisia and Libya, and is now a breakfast and brunch favorite across the Middle East and beyond.",
    sections: [
      {
        heading: "Origins",
        paragraphs: [
          "Shakshuka is most often traced to the Maghreb, the North African region that includes Tunisia, Libya, Algeria and Morocco. Tunisia is the country most commonly named as its home. The word is often said to mean something like \"mixture\" or \"shaken,\" though sources differ on its exact roots.",
          "The dish became especially popular in Israel after Jewish immigrants from Tunisia and Libya brought it with them in the mid-20th century, and it's now a standard breakfast there. Similar egg-in-tomato dishes exist elsewhere, such as Turkish menemen, where the eggs are scrambled into the sauce instead of poached.",
          "Today shakshuka is a fixture of brunch menus far beyond the Middle East and North Africa, partly because it's easy to make in one skillet and looks good served straight from the pan. That spread has brought plenty of creative versions, but the basic formula of a thick, well-seasoned tomato and pepper sauce with gently cooked eggs hasn't changed much.",
        ],
      },
      {
        heading: "How it's made",
        paragraphs: [
          "Start by softening onion and sweet peppers in olive oil, then add garlic, cumin, paprika and often a chili, harissa or caraway. Canned or fresh tomatoes go in next and simmer until the sauce thickens enough that a spoon leaves a trail.",
          "Make small wells in the sauce, crack an egg into each, cover the pan and cook on low heat until the whites set and the yolks are still runny. This last part is where most home versions go wrong: too much heat or too long and the yolks go hard.",
          "Finish with chopped parsley or cilantro and, if you like, crumbled feta. Serve straight from the pan.",
          "A wide skillet is better than a deep pot, since it gives the eggs room and lets the sauce reduce. Cast iron works well, but very acidic tomato sauce can take on a metallic taste if it sits in bare iron for a long time, so serve it promptly or use an enameled pan.",
          "If you like your whites fully set and yolks soft, spoon a little hot sauce over the whites as they cook.",
        ],
      },
      {
        heading: "Variations",
        paragraphs: [
          "Green shakshuka swaps the tomato base for wilted spinach, chard, leeks and herbs, sometimes with a little cream or feta. Some cooks add merguez sausage, chickpeas, eggplant or potatoes to make it heartier.",
          "Spice level varies a lot. Tunisian-style versions with harissa can be quite hot, while many café versions are mild and sweet from the peppers.",
        ],
      },
      {
        heading: "What to eat it with",
        paragraphs: [
          "Bread is non-negotiable. Warm pita, challah or crusty bread is used to scoop up the egg and mop up the sauce. A side of hummus, labneh or a chopped cucumber-tomato salad turns it into a full spread.",
          "Shakshuka is naturally vegetarian and, without the bread, gluten-free. It's a good protein-forward breakfast because of the eggs.",
          "Pita Bowl's menu is built around bowls and wraps rather than breakfast dishes, so shakshuka isn't on it. It's a handy recipe to know, though, and a side of warm pita from any Mediterranean spot is the right tool for eating it.",
        ],
      },
    ],
    relatedDishes: ["dip-and-pita", "earth-bowl"],
    relatedGuides: ["what-is-middle-eastern-breakfast", "what-is-ful-medames", "what-is-pita-bread"],
    faqs: [
      {
        q: "Is shakshuka healthy?",
        a: "It's mostly vegetables, eggs and olive oil, so it's a fairly balanced, protein-containing meal. Portions of bread and cheese change the picture.",
      },
      {
        q: "Is shakshuka spicy?",
        a: "It can be, but doesn't have to be. Heat comes from chili or harissa, and many versions are mild.",
      },
      {
        q: "What's the difference between shakshuka and menemen?",
        a: "Both are eggs cooked with tomato and peppers. In shakshuka the eggs are poached whole in the sauce. In Turkish menemen they're stirred in and softly scrambled.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-mujadara",
    title: "What is mujadara?",
    seoTitle: "What Is Mujadara? Lentils, Rice and Onions",
    metaDescription:
      "Mujadara is a Levantine dish of lentils and rice or bulgur topped with deeply caramelized onions. Learn how it's made, its long history and how to serve it.",
    summary:
      "Mujadara is a Levantine dish of lentils cooked with rice or bulgur, seasoned with cumin and topped with a big pile of deeply browned, crispy onions. It's cheap, filling, naturally vegan and one of the region's most loved comfort foods.",
    sections: [
      {
        heading: "Three ingredients, done carefully",
        paragraphs: [
          "At its simplest, mujadara is lentils, a grain and onions. Brown or green lentils are most common. They're partly cooked, then rice or coarse bulgur is added to the same pot so both finish together, absorbing a bit of the onion oil and cumin.",
          "The onions are what people remember. They're sliced thin and cooked slowly in olive oil until they turn dark brown and sweet, with some pieces crisp. Part of the onions often goes into the pot for flavor, and the rest is piled on top just before serving. Rushing this step is the main way mujadara turns out bland.",
          "Good mujadara onions take time, often 30 to 45 minutes over medium-low heat, stirring now and then. Some cooks fry a portion at higher heat at the end for extra crunch. Salt them only after they've browned, because salt draws out water and slows the process.",
          "The ratio of lentils to grain is flexible. Many home cooks use roughly equal amounts, while others make it mostly lentils.",
        ],
      },
      {
        heading: "An old dish with many spellings",
        paragraphs: [
          "Mujadara (also mujaddara or mejadra) is found across Lebanon, Syria, Palestine and Jordan. A version of lentils and rice appears in a well-known 13th-century cookbook from Baghdad, which suggests the idea is very old.",
          "The name is often linked to the Arabic word for smallpox, because the lentils dotted through the rice looked pockmarked to someone. Not the most appetizing origin story, but a widely repeated one.",
          "In Lebanon, a related dish called mudardara keeps the lentils and rice whole and separate-looking, while some Lebanese mujadara is cooked until soft and almost porridge-like. Egyptian koshari takes a similar lentils-and-rice base in a very different direction.",
        ],
      },
      {
        heading: "How to serve it",
        paragraphs: [
          "Mujadara is usually eaten warm or at room temperature with a sharp, cool side: plain yogurt, a cucumber and tomato salad, pickles, or a cabbage salad dressed with lemon. The acidity balances the earthy lentils and sweet onions.",
          "Because lentils are a legume and paired here with a grain, mujadara is a common protein source in meatless meals, and it's traditionally eaten during Lent and on fasting days by Christians in the Levant.",
          "Mujadara also keeps and reheats well, which makes it a practical make-ahead dish. Store the crispy onions separately so they don't go soft, and warm the lentils and rice with a splash of water. It's good cold the next day too, packed with salad and yogurt for lunch.",
          "Spicing is usually light. Cumin is the most common addition, sometimes with allspice, cinnamon or black pepper, so the onions stay the main flavor.",
        ],
      },
      {
        heading: "A lentil bowl in Mission Beach",
        paragraphs: [
          "Pita Bowl doesn't make mujadara, but its Earth Bowl is built on a related idea. It starts with black lentils and mixed greens, then adds falafel, hummus, eggplant dip, pickled onions, cucumbers, feta and a jalapeño cilantro dressing. It's vegetarian rather than vegan because of the feta, so ask for it without if you need it dairy-free.",
          "For a fully custom version, a build-your-own bowl lets you pick your base, dip, protein and toppings.",
        ],
      },
    ],
    relatedDishes: ["earth-bowl", "build-your-own-bowl", "falafel"],
    relatedGuides: ["black-lentils-vs-brown-lentils", "what-is-koshari", "how-to-build-a-vegetarian-bowl"],
    faqs: [
      {
        q: "Is mujadara vegan?",
        a: "Yes, traditionally. It's lentils, rice or bulgur, onions, olive oil and spices. Yogurt on the side is optional.",
      },
      {
        q: "Is mujadara gluten-free?",
        a: "The rice version usually is. The bulgur version isn't, because bulgur is wheat.",
      },
      {
        q: "What lentils are best for mujadara?",
        a: "Brown or green lentils, which hold their shape. Red lentils fall apart and give a mushier result.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-maqluba",
    title: "What is maqluba?",
    seoTitle: "What Is Maqluba? The Upside-Down Rice Dish",
    metaDescription:
      "Maqluba is a layered pot of rice, fried vegetables and meat that's flipped onto a platter to serve. Learn its Palestinian roots and how the famous flip works.",
    summary:
      "Maqluba is a Levantine one-pot dish of layered meat or chicken, fried vegetables and spiced rice that's cooked together, then turned upside down onto a large platter so it comes out as a tall, cake-like mound. It's especially associated with Palestine and Jordan.",
    sections: [
      {
        heading: "Upside down, literally",
        paragraphs: [
          "Maqluba means \"upside down\" or \"flipped\" in Arabic. The flip is the whole show: the pot is inverted onto a tray at the table, left to settle for a moment, then lifted to reveal the layers. Family members often gather around for it, and a clean unmolding is a point of pride for the cook.",
          "It's a festive, feed-a-crowd dish, common at Friday family lunches, gatherings and holidays in Palestinian, Jordanian and Syrian homes. A version with similar layering is also made in Iraq.",
        ],
      },
      {
        heading: "What goes inside",
        paragraphs: [
          "Most maqluba has three layers. At the bottom of the pot (which becomes the top once flipped) is the meat, usually bone-in chicken or lamb that's been simmered with spices to make a flavorful broth.",
          "Next comes a layer of fried or roasted vegetables. Eggplant is the classic, and cauliflower is the other common choice. Potatoes, tomatoes and carrots also appear.",
          "Rice goes on top, usually medium or long-grain, seasoned with spices like turmeric, allspice, cinnamon, cardamom or a baharat blend. The reserved broth is poured over everything and the pot simmers until the rice is tender and has absorbed the liquid.",
          "The vegetables are traditionally fried before they go into the pot, which gives them a deep, almost sweet flavor and helps them hold their shape. Many home cooks now roast them in the oven with olive oil instead. It takes less oil and less attention, and the result is still good, if a little lighter.",
          "Some cooks line the bottom of the pot with tomato slices before adding the meat. Once flipped, those tomatoes end up on top, slightly caramelized, and they help the whole mound release from the pot cleanly.",
        ],
      },
      {
        heading: "How it's served",
        paragraphs: [
          "Once flipped, maqluba is usually topped with toasted almonds or pine nuts and chopped parsley. It's eaten with a bowl of plain yogurt or a yogurt-cucumber salad and a simple chopped salad of tomato and cucumber.",
          "The bottom rice, which becomes the top, often has a lightly crisp, golden crust, a part many people fight over.",
          "Because it's built for a crowd, maqluba usually comes out on a platter big enough to feed a whole family, and leftovers are common. It reheats well with a splash of broth or water, though the crisp bottom layer won't come back the same way.",
          "Chicken maqluba with cauliflower is one of the most common home versions, while lamb with eggplant is often saved for special occasions.",
        ],
      },
      {
        heading: "Making it at home, and what's similar nearby",
        paragraphs: [
          "Tips cooks share: rinse and soak the rice so it cooks evenly, pack the layers firmly, use a heavy pot with straight sides, and let the pot rest for several minutes before flipping so the layers set. Vegetarian maqluba skips the meat and uses vegetable broth.",
          "Pita Bowl doesn't make maqluba, but if a spiced-rice-and-meat meal is what you're craving, the Steak Shawarma Bowl and Chicken Tikka Bowl both use saffron rice as a base with greens and dips, and you can build your own bowl around rice, a protein and roasted eggplant dip.",
        ],
      },
    ],
    relatedDishes: ["steak-shawarma-bowl", "chicken-tikka-bowl", "build-your-own-bowl"],
    relatedGuides: ["what-is-mansaf", "what-is-saffron-rice", "what-is-levantine-food"],
    faqs: [
      {
        q: "How do you flip maqluba without it falling apart?",
        a: "Pack the layers firmly, let the pot rest off the heat for five to ten minutes, place a large platter over the top, and flip in one confident motion. Tap the pot before lifting.",
      },
      {
        q: "Is maqluba spicy?",
        a: "Not usually. It's warmly spiced with things like allspice, cinnamon and turmeric, but not hot.",
      },
      {
        q: "Can maqluba be vegetarian?",
        a: "Yes. Leave out the meat, add extra vegetables or chickpeas, and use vegetable broth.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-mansaf",
    title: "What is mansaf?",
    seoTitle: "What Is Mansaf? Jordan's National Dish",
    metaDescription:
      "Mansaf is Jordan's national dish: lamb cooked in a tangy dried-yogurt sauce, served over rice and flatbread with nuts. Learn its roots and how it's eaten.",
    summary:
      "Mansaf is Jordan's national dish: lamb cooked in a sauce made from jameed, a dried, fermented yogurt, then served on a large platter over thin flatbread and rice, topped with toasted almonds or pine nuts. It's a dish for big gatherings and important occasions.",
    sections: [
      {
        heading: "Rooted in Bedouin hospitality",
        paragraphs: [
          "Mansaf grew out of Bedouin cooking in the region that's now Jordan, where lamb and preserved dairy were central foods. Serving it is a sign of generosity and respect, and it's the meal people expect at weddings, Eid, graduations, funerals and when honoring a guest.",
          "It's also widely made in Palestine, especially around Hebron and in the south, and among Jordanian and Palestinian families abroad.",
          "Mansaf is so tied to national identity in Jordan that it is often the first dish people mention when asked about Jordanian food, and it has been put forward for recognition as part of the country's cultural heritage. Families often have strong opinions about the right jameed, the right cut of lamb and the right ratio of sauce to rice.",
          "The name is usually linked to an Arabic word for a large tray or platter, which is fitting for a dish meant to be shared.",
        ],
      },
      {
        heading: "Jameed, the ingredient that defines it",
        paragraphs: [
          "Jameed is yogurt that has been strained, salted, shaped into hard balls and dried in the sun, a way to preserve milk for months in a hot climate. To use it, cooks soak and dissolve it back into a thick, tangy, salty liquid.",
          "The lamb, often bone-in pieces, is simmered in this jameed sauce until tender, so the meat absorbs its sharp, savory flavor. The sauce is a little like a richer, saltier cousin of yogurt sauces found elsewhere in the region. Outside Jordan, some cooks substitute liquid jameed or a mix of yogurt and labneh, though many consider the real thing essential.",
        ],
      },
      {
        heading: "How mansaf is assembled",
        paragraphs: [
          "A huge round tray is lined with shrak, a very thin flatbread. Rice, often tinted yellow with turmeric or saffron, is piled on top, then the lamb pieces are arranged over the rice. Toasted almonds or pine nuts and chopped parsley go on last, and extra hot jameed sauce is poured over or served alongside so diners can add more.",
          "One platter typically feeds a whole group.",
          "Cooks often make extra sauce on purpose, because guests pour more over their portion as they eat.",
        ],
      },
      {
        heading: "How it's traditionally eaten",
        paragraphs: [
          "The customary way is standing around the tray and eating with the right hand. Diners gather rice, meat and sauce, roll it into a ball with their fingers, and pop it into their mouth. Using the left hand is avoided. Many families today also use spoons, and nobody expects a visitor to master the technique on the first try.",
          "Mansaf contains dairy, so it's not suitable for dairy-free diets, and the nut topping can be left off for nut allergies.",
          "Pita Bowl doesn't cook mansaf. The menu items closest in spirit are its rice bowls with tzatziki, which brings a cool, tangy yogurt note: the Chicken Pita Bowl and the Chicken Tikka Bowl both include it. For a group meal, Pita Bowl's catering request form at /catering is the place to ask what's possible.",
        ],
      },
    ],
    relatedDishes: ["chicken-pita-bowl", "chicken-tikka-bowl"],
    relatedGuides: ["what-is-maqluba", "what-is-labneh", "what-is-levantine-food"],
    faqs: [
      {
        q: "What does mansaf taste like?",
        a: "Rich, savory and tangy. The jameed sauce is salty and sour like a concentrated yogurt, which balances the lamb and plain rice.",
      },
      {
        q: "What is jameed made from?",
        a: "Yogurt, usually from sheep or goat milk, that's strained, salted and dried into hard balls, then rehydrated for cooking.",
      },
      {
        q: "Is mansaf eaten with your hands?",
        a: "Traditionally yes, with the right hand, but spoons are common and perfectly acceptable.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-koshari",
    title: "What is koshari?",
    seoTitle: "What Is Koshari? Egypt's Lentil and Pasta Bowl",
    metaDescription:
      "Koshari is Egypt's street-food classic of rice, lentils, pasta and chickpeas with spiced tomato sauce, garlic vinegar and crispy onions. Here's how it works.",
    summary:
      "Koshari is an Egyptian dish of rice, brown lentils and small pasta layered together and topped with chickpeas, a spiced tomato sauce, a sharp garlic-vinegar dressing and crispy fried onions. It's often called Egypt's national dish and is sold everywhere as cheap, filling street food.",
    sections: [
      {
        heading: "What's in the bowl",
        paragraphs: [
          "Koshari is a pile of carbs and legumes that somehow works together. The base is rice and brown lentils, often cooked together. On top go elbow macaroni or short pasta and sometimes vermicelli toasted in oil.",
          "Then come the toppings that give it character. A tomato sauce seasoned with cumin, garlic and often chili. Da'a, a thin, sharp sauce of garlic, vinegar and cumin. Whole chickpeas. And a generous handful of onions fried until dark and crunchy. Most shops also set out a hot chili sauce so you can adjust the heat.",
        ],
      },
      {
        heading: "Where it came from",
        paragraphs: [
          "Koshari became popular in Egypt in the 19th century. A commonly cited theory links its name and idea to khichdi, the South Asian dish of rice and lentils, possibly brought through British colonial-era connections. The pasta and tomato sauce are often credited to Italian influence in Egypt at the time. Food historians present these as likely influences rather than settled fact.",
          "Whatever the exact path, koshari is now thoroughly Egyptian. It's sold from carts and specialty shops in Cairo and Alexandria, and it's a dish many Egyptians abroad miss most.",
          "Many Cairo shops specialize in koshari and nothing else. Orders come in sizes, and the components are assembled in seconds from big pots kept warm behind the counter. Watching a koshari cook layer a bowl is part of the experience, with each scoop landing in the same order every time.",
          "In Egypt, koshari is also a common meal during Coptic Christian fasting periods, when many families avoid meat and dairy. That makes sense: every part of the dish is plant-based, and the lentils and chickpeas make it filling enough to stand alone.",
        ],
      },
      {
        heading: "How to eat it",
        paragraphs: [
          "Shops typically build it to order in a bowl, layering each component, then hand you the sauces to add yourself. The trick is to mix as you go: a bit of the vinegar-garlic sauce brightens the whole bowl, the tomato sauce adds depth, and the onions bring crunch.",
          "Because it's built from rice, lentils, chickpeas and pasta, koshari is naturally vegan and very filling. It isn't gluten-free because of the pasta.",
          "A typical shop gives you more sauce than you think you need, and that's intentional. Koshari without sauce is dry and plain. Start with a spoonful of da'a and tomato sauce, mix, taste, then add chili sauce a little at a time. The fried onions go on last so they stay crunchy.",
          "It's also common to see koshari served in layers in a takeaway container, with sauces packed separately.",
        ],
      },
      {
        heading: "Making it at home",
        paragraphs: [
          "Koshari takes time mostly because each part is cooked separately. Many cooks fry the onions first, then use the flavored oil to cook the rice and toast the vermicelli. Lentils, pasta and the tomato sauce happen in parallel. Canned chickpeas are a reasonable shortcut.",
          "Pita Bowl doesn't serve koshari, but if you like the lentil-and-crunch idea, the Earth Bowl is built on black lentils with falafel, hummus, pickled onions and a jalapeño cilantro dressing. It's a very different dish, closer to a salad, though it shares the plant-protein foundation.",
        ],
      },
    ],
    relatedDishes: ["earth-bowl", "falafel"],
    relatedGuides: ["what-is-mujadara", "what-is-ful-medames", "how-to-eat-mediterranean-on-a-budget"],
    faqs: [
      {
        q: "Is koshari vegan?",
        a: "Yes, traditional koshari contains no meat, dairy or eggs.",
      },
      {
        q: "Is koshari spicy?",
        a: "The base isn't very spicy. Heat comes from the chili sauce served on the side, so you control it.",
      },
      {
        q: "How do you pronounce koshari?",
        a: "Roughly \"KOH-sha-ree.\" You'll also see it spelled kushari or koshary.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "what-is-ful-medames",
    title: "What is ful medames?",
    seoTitle: "What Is Ful Medames? Egypt's Fava Bean Breakfast",
    metaDescription:
      "Ful medames is slow-cooked fava beans mashed with olive oil, cumin, lemon and garlic. Learn how this ancient Egyptian breakfast is made, served and eaten.",
    summary:
      "Ful medames is a dish of small fava beans cooked slowly until very soft, then mashed and seasoned with olive oil, cumin, lemon juice, garlic and salt. It's a classic breakfast in Egypt and Sudan and is widely eaten across the Levant, usually scooped up with flatbread.",
    sections: [
      {
        heading: "Slow beans, simple seasoning",
        paragraphs: [
          "Ful (also foul or fool) is the Arabic word for fava beans, and medames is usually understood to mean buried or slow-cooked, a reference to the old practice of cooking the pot for hours in embers. In Egypt, ful has long been simmered overnight in large pots and sold in the morning from street carts.",
          "The beans used are small, brown, dried favas, not the large green ones sold fresh in spring. They're soaked and then cooked low and slow until creamy. Many home cooks today use canned ful, which is perfectly common.",
          "Once soft, the beans are partly mashed and dressed with olive oil, cumin, lemon, garlic and salt. That's the core recipe, and everything after it is personal choice.",
          "Cooking dried ful at home takes planning. The beans need an overnight soak, then several hours of gentle simmering, sometimes with a handful of red lentils or a little rice added to thicken the pot. A slow cooker or pressure cooker makes it more practical.",
          "Ful is mashed at the table in many homes, so each person can choose how smooth or chunky they want their portion. A bottle of olive oil, a plate of lemon wedges and a small dish of cumin are usually close by.",
        ],
      },
      {
        heading: "Toppings and regional styles",
        paragraphs: [
          "Egyptian ful might be topped with chopped tomato, onion, parsley, chili, tahini or a boiled egg. Alexandrian style often adds sautéed vegetables. In Sudan, ful is a daily staple, sometimes served with feta, oil and onion.",
          "In Lebanon, Syria, Palestine and Jordan, ful mudammas is usually more lemony and garlicky, sometimes mixed with chickpeas and topped with tahini or plenty of olive oil, and eaten alongside hummus, pickles and fresh vegetables at a weekend breakfast.",
        ],
      },
      {
        heading: "Why it's a breakfast staple",
        paragraphs: [
          "Ful is inexpensive, filling and keeps people going until a late lunch. Like other legume dishes, it provides plant protein and fiber, which helps explain why it's been a daily food in Egypt for generations. Its roots there are often described as ancient, though precise historical claims vary.",
          "It's also the root of Egyptian falafel. In Egypt, falafel, called ta'ameya, is traditionally made from fava beans rather than chickpeas.",
          "In Egypt, ful sandwiches stuffed into baladi bread, a round whole-wheat flatbread, are a standard workday breakfast, often bought from a cart on the way to work. In Ramadan, ful is a common suhoor meal, eaten before dawn because it's filling and slow to digest.",
          "Pairing ful with bread, eggs and vegetables makes for a full, balanced plate rather than just a side.",
        ],
      },
      {
        heading: "How to eat it",
        paragraphs: [
          "Tear off a piece of warm flatbread and use it to scoop the beans, along with a bit of whatever is on the table: raw onion, pickles, fresh herbs, tomatoes or eggs. Ful is also good stuffed into pita as a sandwich.",
          "Pita Bowl doesn't serve ful medames. The closest thing on its menu is falafel, available as a side of three or five, in the Falafel Delight Wrap or in the Earth Bowl. Ask the staff whether Pita Bowl's falafel is made with chickpeas, fava beans or both if that matters to you.",
        ],
      },
    ],
    relatedDishes: ["falafel", "falafel-wrap", "dip-and-pita"],
    relatedGuides: ["what-is-middle-eastern-breakfast", "what-is-falafel", "what-is-koshari"],
    faqs: [
      {
        q: "Are fava beans the same as broad beans?",
        a: "Yes, fava beans and broad beans are the same plant. Ful medames uses a small dried variety.",
      },
      {
        q: "Is ful medames vegan?",
        a: "The basic dish is, since it's beans, olive oil, lemon, garlic and cumin. Toppings like eggs or cheese change that.",
      },
      {
        q: "Can I use canned fava beans?",
        a: "Yes. Canned ful is widely used, even in Egypt. Warm the beans with some of their liquid, then mash and season.",
      },
    ],
  },
];
