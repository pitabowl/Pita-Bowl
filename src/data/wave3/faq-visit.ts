/**
 * Visit and ordering FAQ pages (/faq/[slug]): delivery, seating, payment and the like.
 * Facts confirmed by the owner on 2026-11-01. Don't add specifics (delivery fees,
 * app names, seat counts, Wi-Fi details) without checking with them first.
 */
import type { FaqPage } from "./types";
import { GIFT_CARD_URL } from "@/config/links";

export const visitFaqs: FaqPage[] = [
  {
    slug: "does-pita-bowl-deliver",
    q: "Does Pita Bowl deliver?",
    seoTitle: "Does Pita Bowl Deliver? Delivery in Mission Beach",
    metaDescription:
      "Yes. Get Pita Bowl delivered through our online ordering or the delivery apps, or pick up or eat in at 3833 Mission Blvd in Mission Beach, San Diego.",
    answer:
      "Yes. You can order delivery through our online ordering on Toast, and Pita Bowl is also on the delivery apps. Pickup and dine-in at 3833 Mission Blvd are always options too.",
    details: [
      "Ordering through our own website is the most direct route. The order button opens our Toast online ordering menu, where you can choose delivery or pickup, customize your bowls and wraps, and pay at checkout.",
      "If you already use a delivery app, you can find us there as well. Delivery areas, fees and timing are set at checkout and depend on your address and how busy it is, so check them when you place the order.",
      "Some dishes travel better than others. Bowls hold up well on the way, and asking for dressing or sauce on the side keeps greens crisp. Fries are best eaten soon after they arrive.",
      "For large group orders and events, use the catering page instead. A quote request lets us plan the food and timing for your headcount, which works better than a very large app order.",
    ],
    relatedDishes: ["chicken-pita-bowl", "steak-shawarma-bowl"],
    relatedPaths: ["/faq/how-do-i-order-online", "/faq/do-you-offer-pickup", "/faq/can-i-order-by-phone", "/catering"],
  },
  {
    slug: "where-do-i-park",
    q: "Where do I park for Pita Bowl?",
    seoTitle: "Parking Near Pita Bowl in Mission Beach",
    metaDescription:
      "Pita Bowl doesn't have its own lot. Park on the street along Mission Blvd and side streets, or in the public lots near Belmont Park and the beach.",
    answer:
      "We don't have a private lot. Most customers use street parking on and around Mission Blvd or the public lots near Belmont Park and the beach, a short walk from 3833 Mission Blvd.",
    details: [
      "Parking in Mission Beach depends on the season and time of day. On weekday afternoons and outside summer, you can usually find street parking within a short walk. On sunny summer weekends, nearby streets and lots can fill by late morning.",
      "Read the signs on every block before you leave your car. Curb colors, time limits, street sweeping and any fees vary, and the city's posted rules are the final word. Our Mission Beach parking guide covers the basics.",
      "If parking is tight, ordering ahead helps. Place your order online or by phone, and it'll be ready in about 10 to 15 minutes, so you're not circling the block while you wait in line. Delivery is another option if you'd rather skip the car entirely.",
      "Biking, walking the boardwalk or getting dropped off by rideshare are often the easiest ways to arrive on peak days. We're a few minutes' walk from Belmont Park.",
    ],
    relatedDishes: [],
    relatedPaths: ["/guides/mission-beach-parking-guide", "/location", "/faq/how-long-does-pickup-take", "/faq/where-are-you-located"],
  },
  {
    slug: "is-your-meat-halal",
    q: "Is your meat halal?",
    seoTitle: "Is Pita Bowl Halal? Chicken and Falafel Explained",
    metaDescription:
      "Pita Bowl's chicken shawarma, chicken tikka and falafel are halal. Our steak and beef are not halal. Here's which menu items fit a halal diet.",
    answer:
      "Our chicken shawarma, chicken tikka and falafel are halal. Our steak and beef are not halal, so dishes made with steak shawarma aren't halal options.",
    details: [
      "Halal choices include the Chicken Pita Bowl, Chicken Tikka Bowl, Zesty Chicken Wrap, Chicken Shawarma Fries, the Earth Bowl and the Falafel Delight Wrap. When you build your own bowl or wrap, choose chicken shawarma, chicken tikka or falafel as your protein.",
      "Dishes made with steak aren't halal. That includes the Steak Shawarma Bowl, Beef Wrap, Cali Shawarma Wrap, Steak Shawarma Fries, Pita Nachos and Bourak, which is stuffed with steak.",
      "If you're ordering the kids' chicken tenders, or you need to know how halal and non-halal items are handled in our kitchen, ask us when you order. Call 858-210-9524 and we'll tell you what we know.",
      "Planning an iftar or a group event? Our catering team can build an order around the halal proteins. Mention it in your quote request so we plan around it from the start.",
    ],
    relatedDishes: ["chicken-tikka-bowl", "chicken-pita-bowl", "falafel"],
    relatedPaths: ["/catering/ramadan-iftar-catering", "/faq/what-proteins-do-you-have", "/faq/is-your-falafel-vegan"],
  },
  {
    slug: "do-you-take-reservations",
    q: "Do you take reservations?",
    seoTitle: "Does Pita Bowl Take Reservations?",
    metaDescription:
      "Pita Bowl doesn't take reservations. Walk in and order at the counter, or order ahead online or by phone for pickup at 3833 Mission Blvd.",
    answer:
      "No. Pita Bowl is walk-in only. Order at the counter and grab a seat inside or outside, or order ahead online or by phone so your food is ready when you arrive.",
    details: [
      "We're a counter-service restaurant, so there's no table booking. You order and pay at the counter, then eat in at our indoor or outdoor seating or take your food to go.",
      "If you're coming with a group, ordering ahead is the easiest way to keep things moving. One person can place the full order online or by phone, and pickup orders are usually ready in about 10 to 15 minutes.",
      "For bigger gatherings like birthdays, team lunches or office events, our catering page is the right place to start. Send a quote request with your date and headcount, and we'll get back to you with details.",
      "Our hours are Sunday through Thursday 11 AM to 8 PM, and Friday and Saturday 11 AM to 9 PM. Summer weekends are our busiest times.",
    ],
    relatedDishes: ["build-your-own-bowl"],
    relatedPaths: ["/faq/can-i-eat-in", "/faq/can-i-order-for-a-large-group", "/faq/what-are-your-hours", "/catering"],
  },
  {
    slug: "can-i-eat-in",
    q: "Can I eat in at Pita Bowl?",
    seoTitle: "Dine-In Seating at Pita Bowl in Mission Beach",
    metaDescription:
      "Yes. Pita Bowl has indoor and outdoor seating at 3833 Mission Blvd in Mission Beach. Eat in, take it to go, order pickup, or get it delivered.",
    answer:
      "Yes. We have indoor and outdoor seating at 3833 Mission Blvd, so you can eat in after you order at the counter. Takeout, pickup and delivery are available too.",
    details: [
      "Order at the counter, then pick a table inside or outside. There's no table service or reservations, so seating is first come, first served.",
      "The outdoor seating is popular on sunny days, and dogs are welcome there. Inside is the better pick on cooler evenings or when you want to get out of the sun for a bit.",
      "Plenty of people still take their food to go, because the boardwalk and the bay are both a short walk away. Bowls, wraps and desserts are all packed to travel.",
      "Free Wi-Fi is available if you want to work or check your phone while you eat. Ask at the counter for the network details.",
    ],
    relatedDishes: ["chicken-pita-bowl", "cali-shawarma-wrap"],
    relatedPaths: ["/faq/are-dogs-allowed", "/faq/do-you-have-wifi", "/faq/do-you-take-reservations", "/location"],
  },
  {
    slug: "what-payment-methods-do-you-accept",
    q: "What payment methods do you accept?",
    seoTitle: "Payment Methods at Pita Bowl: Cards, Cash, Phone Pay",
    metaDescription:
      "Pita Bowl accepts credit and debit cards, cash, Apple Pay and Google Pay in store. Online orders are paid at checkout when you order through our website.",
    answer:
      "In store we accept credit and debit cards, cash, Apple Pay and Google Pay. Online orders are paid at checkout when you order through our website.",
    details: [
      "Pay however is easiest for you at the counter. Tap your phone or card, insert or swipe a card, or pay with cash.",
      "When you order online through our website, you pay during checkout on our Toast ordering page, so your food is ready to pick up without stopping to pay. Delivery app orders are paid in the app.",
      "Gift cards are available in store and online through our Toast gift card page, and they make an easy gift for anyone who spends time in Mission Beach.",
      "FIT members get 15% off. See our offers page for how the discount works.",
    ],
    relatedDishes: [],
    relatedPaths: ["/faq/do-you-sell-gift-cards", "/faq/what-is-the-fit-member-discount", "/offers", "/faq/how-do-i-order-online"],
  },
  {
    slug: "do-you-sell-gift-cards",
    q: "Do you sell gift cards?",
    seoTitle: "Pita Bowl Gift Cards: Buy In Store or Online",
    metaDescription:
      "Yes. Pita Bowl sells gift cards in store and online. They're good for bowls, wraps, desserts and drinks at 3833 Mission Blvd in Mission Beach.",
    answer:
      "Yes. You can buy Pita Bowl gift cards in store at the counter or online through our Toast gift card page, where you can send an eGift card by email.",
    cta: { label: "Buy a gift card", href: GIFT_CARD_URL },
    details: [
      "A gift card is an easy present for a friend who lives near the beach, a coworker, or someone who's always looking for a seed-oil-free meal. It covers the whole menu, from bowls and wraps to housemade desserts and drinks.",
      "To buy one in person, ask at the counter when you visit 3833 Mission Blvd. You can pay with a card, cash, Apple Pay or Google Pay.",
      "To buy online, use the Buy a gift card button on this page. It opens our Toast gift card page, where you choose an amount and send it by email. If you have a question about a gift card, call us at 858-210-9524 or email orders@thepitabowl.com.",
      "Gift cards make a good thank-you for volunteers or a team too. For feeding a group directly, our catering page lets you request a quote instead.",
    ],
    relatedDishes: ["pistachio-baklava", "tiramisu"],
    relatedPaths: ["/faq/what-payment-methods-do-you-accept", "/faq/how-do-i-contact-pita-bowl", "/offers"],
  },
  {
    slug: "do-you-have-wifi",
    q: "Do you have Wi-Fi?",
    seoTitle: "Does Pita Bowl Have Free Wi-Fi?",
    metaDescription:
      "Yes. Pita Bowl has free Wi-Fi for customers at 3833 Mission Blvd in Mission Beach. Ask at the counter for the network details when you order.",
    answer:
      "Yes. We have free Wi-Fi for customers. Ask at the counter for the network details when you order.",
    details: [
      "Wi-Fi is handy if you're eating in and want to catch up on email, look up beach plans or upload photos from the boardwalk. Grab a seat inside or outside after you order.",
      "A bowl makes an easy working lunch. Something like the Chicken Pita Bowl or the Earth Bowl is filling without being heavy, and it's easy to eat at a table with a laptop nearby.",
      "During the busiest times, like summer weekends at lunch, tables turn over quickly. Weekday afternoons are usually calmer if you want to stay a while.",
      "We're open Sunday through Thursday 11 AM to 8 PM, and Friday and Saturday 11 AM to 9 PM.",
    ],
    relatedDishes: ["chicken-pita-bowl", "earth-bowl"],
    relatedPaths: ["/faq/can-i-eat-in", "/faq/what-are-your-hours", "/location"],
  },
  {
    slug: "are-dogs-allowed",
    q: "Are dogs allowed at Pita Bowl?",
    seoTitle: "Is Pita Bowl Dog-Friendly? Dogs Welcome Outside",
    metaDescription:
      "Dogs are welcome at Pita Bowl's outdoor seating in Mission Beach. Inside, only service animals are allowed. Here's how to visit with your dog.",
    answer:
      "Yes, dogs are welcome at our outdoor seating. Only service animals are allowed inside.",
    details: [
      "If you're walking the boardwalk with your dog, you can grab a table outside and eat with them next to you. Keep your dog leashed and close so other customers have room to get by.",
      "Want to eat inside? Have someone wait with your dog outside, or order ahead online or by phone so pickup takes only a minute.",
      "Beach rules for dogs in San Diego are separate from ours and vary by beach and time of year. Check posted signs and the city's current rules before you take your dog onto the sand.",
      "Bring water for your dog on hot days, and note that our food is made for people. Garlic and onion, which are in many of our sauces and toppings, aren't safe for dogs.",
    ],
    relatedDishes: [],
    relatedPaths: ["/faq/can-i-eat-in", "/guides/san-diego-beach-rules-to-know", "/guides/biking-the-mission-beach-boardwalk"],
  },
  {
    slug: "how-long-does-pickup-take",
    q: "How long does a pickup order take?",
    seoTitle: "How Long Does a Pita Bowl Pickup Order Take?",
    metaDescription:
      "Most Pita Bowl pickup orders are ready in about 10 to 15 minutes. Busy times like summer weekends can take longer, and big orders need more time.",
    answer:
      "Most pickup orders are ready in about 10 to 15 minutes. It can take longer during busy times, like summer weekends at lunch, and for large orders.",
    details: [
      "The easiest way to time it is to order online or call 858-210-9524 before you leave. By the time you've found parking and walked over, your food is usually ready at the counter.",
      "Big orders take more time. If you're feeding a group, place the order earlier, and for events use the catering page so we can plan ahead.",
      "Lunchtime on summer weekends is our busiest stretch. Ordering ahead then saves the most time.",
      "Check your order before you leave, especially if you customized it, and ask for dressing on the side if you won't eat right away.",
    ],
    relatedDishes: ["build-your-own-bowl"],
    relatedPaths: ["/faq/do-you-offer-pickup", "/faq/can-i-order-ahead-and-skip-the-line", "/faq/can-i-order-by-phone", "/guides/how-to-order-ahead-for-pickup"],
  },
  {
    slug: "can-i-order-by-phone",
    q: "Can I order by phone?",
    seoTitle: "Can I Order Pita Bowl by Phone?",
    metaDescription:
      "Yes. Call Pita Bowl at 858-210-9524 to place an order for pickup at 3833 Mission Blvd. Most orders are ready in about 10 to 15 minutes.",
    answer:
      "Yes. Call us at 858-210-9524 to place an order, then pick it up at 3833 Mission Blvd. Most orders are ready in about 10 to 15 minutes.",
    details: [
      "Calling is a good option when you have a question before ordering, like an allergy, a customization or whether a dish is halal. We can answer it and take your order on the same call.",
      "Have your order ready when you call, including any changes such as a different protein, sauce on the side or extra avocado. If you're building your own bowl or wrap, know your base, dip, protein, toppings and sauce.",
      "If you'd rather browse the full menu with photos and prices, online ordering through our website works just as well, and it's where you can choose delivery.",
      "We take calls during open hours: Sunday through Thursday 11 AM to 8 PM, and Friday and Saturday 11 AM to 9 PM.",
    ],
    relatedDishes: ["build-your-own-wrap"],
    relatedPaths: ["/faq/how-do-i-contact-pita-bowl", "/faq/how-do-i-order-online", "/faq/how-long-does-pickup-take", "/contact"],
  },
  {
    slug: "is-your-food-spicy",
    q: "Is your food spicy?",
    seoTitle: "Is Pita Bowl's Food Spicy? Mild, Hot Sauce on Request",
    metaDescription:
      "Pita Bowl's food is mild, seasoned with herbs, garlic and warm spices rather than heat. Ask for hot sauce if you want to add a kick.",
    answer:
      "No. Our food is mild, seasoned with garlic, herbs and warm spices rather than heat. If you like it spicy, ask for hot sauce.",
    details: [
      "Shawarma and tikka are full of flavor without being hot. The seasoning is savory and aromatic, and the sauces are cool or creamy, like tzatziki, tahini and garlic sauce.",
      "The Earth Bowl comes with jalapeño cilantro dressing, which is fresh and herby. If you're very sensitive to chiles, ask for it on the side.",
      "Mild food makes it easy to order for kids and mixed groups. Anyone who wants more heat can add hot sauce to their own plate.",
      "Not sure which sauce to pick? Our sauces page explains each one, from bold garlic sauce to nutty tahini.",
    ],
    relatedDishes: ["chicken-tikka-bowl", "earth-bowl", "zesty-chicken-wrap"],
    relatedPaths: ["/faq/what-sauces-do-you-have", "/faq/is-pita-bowl-good-for-kids", "/guides/what-is-jalapeno-cilantro-sauce"],
  },
];
