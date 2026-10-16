

export type Cat =
  | "burger"
  | "tacos"
  | "crepe"
  | "sides"
  | "drinks"
  | "combo";

export interface Addon {
  id: string;
  name: string;
  price: number;
  cats: Cat[];
}

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  cat: Cat;
  emoji: string;
  image?: string;
  badge?: string;
  focus?: string;
}

export const restaurant = {
name: "Golden Bite",
tagline: "Every Craving. One Place.",
phone: "201009951597",
messenger: "goldenbite.thailand",
email: "goldenbite@gmail.com",
address: "Sukhumvit Road, Bangkok 10110, Thailand",
hours: "Daily: 11:00 AM – 11:00 PM",
mapQuery: "Sukhumvit Road, Bangkok, Thailand",
deliveryFee: 2.99,
};


export const categories: { id: Cat; label: string; emoji: string }[] = [
  { id: "burger", label: "Burgers", emoji: "🍔" },
  { id: "tacos", label: "Tacos", emoji: "🌮" },
  { id: "crepe", label: "Sweet Crepes", emoji: "🥞" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
  { id: "sides", label: "Sides", emoji: "🍟" },
  { id: "combo", label: "Combo Meals", emoji: "🎁" },
];



export const products: Product[] = [
  // Burgers
    {
    id: "b1",
    cat: "burger",
    emoji: "🍔",
    name: "Classic Burger",
    desc: "Juicy beef patty, cheddar cheese, lettuce, tomato, onion, and signature sauce.",
    price: 8.99,
    badge: "Best Seller",
    image: "/images/burgers/classic-burger.jpg",
  },
    {
    id: "b3",
    cat: "burger",
    emoji: "🍄",
    name: "Swiss Mushroom Burger",
    desc: "Beef patty, Swiss cheese, sautéed mushrooms, and creamy garlic sauce.",
    price: 10.49,
    image: "/images/burgers/swiss-mushroom-burger.jpg",
  },
    {
    id: "b2",
    cat: "burger",
    emoji: "🥓",
    name: "Beef Burger",
    desc: "Beef patty, cheddar cheese, smoky BBQ sauce, and onion rings.",
    price: 10.99,
    image: "/images/burgers/bbq-bacon-burger.jpg",
  },
  {
    id: "b4",
    cat: "burger",
    emoji: "🧀",
    name: "Double Cheeseburger",
    desc: "Two juicy beef patties, double cheddar, lettuce, tomato, onion, and signature sauce.",
    price: 11.99,
    badge: "Fan Favorite",
    image: "/images/burgers/double-cheeseburger.jpg",
  },

  {
    id: "b6",
    cat: "burger",
    emoji: "🔥",
    name: "Smoky chicken Burger",
    desc: "Crispy Chicken, smoked cheese, caramelized onions, and smoky signature sauce.",
    price: 12.49,
    image: "/images/burgers/smoky-master-burger.jpg",
  },
  {
    id: "b5",
    cat: "burger",
    emoji: "🌶️",
    name: "Spicy Jalapeño Burger",
    desc: "Seasoned beef patty, jalapeños, pepper jack cheese, and spicy sauce.",
    price: 10.49,
    image: "/images/burgers/spicy-jalapeno-burger.jpg",
  },



  // Tacos
  {
    id: "t1",
    cat: "tacos",
    emoji: "🌮",
    name: "Classic Beef Tacos",
    desc: "Seasoned ground beef, fresh lettuce, diced tomatoes, and shredded cheese in soft tortillas.",
    price: 9.99,
    badge: "Best Seller",
    image: "/images/tacos/classic-beef-tacos.jpg",
  },
  {
    id: "t2",
    cat: "tacos",
    emoji: "🌮",
    name: "Fresh Chicken Tacos",
    desc: "Tender seasoned chicken, fresh lettuce, tomatoes, and creamy taco sauce.",
    price: 8.99,
    image: "/images/tacos/fresh-chicken-tacos.jpg",
  },
  {
    id: "t3",
    cat: "tacos",
    emoji: "🌮",
    name: "Loaded Beef Tacos",
    desc: "Seasoned beef, melted cheese, fresh tomatoes, lettuce, and signature sauce.",
    price: 10.49,
    image: "/images/tacos/loaded-beef-tacos.jpg",
  },
  {
    id: "t4",
    cat: "tacos",
    emoji: "🌮",
    name: "Mexican Street Tacos",
    desc: "Flavorful seasoned beef, fresh onion, cilantro, and a squeeze of lime.",
    price: 10.99,
    image: "/images/tacos/mexican-street-tacos.jpg",
  },
  {
    id: "t5",
    cat: "tacos",
    emoji: "🌮",
    name: "Crispy Chicken Tacos",
    desc: "Crispy chicken pieces, crunchy lettuce, shredded cheese, and creamy spicy sauce.",
    price: 9.49,
    badge: "Crispy & Spicy",
    image: "/images/tacos/crispy-chicken-tacos.jpg",
  },

  // Sweet Crepes
  {
    id: "c1",
    cat: "crepe",
    emoji: "🍌",
    name: "Banana Nutella Crepe",
    desc: "A freshly made crepe filled with Nutella, sliced bananas, and chocolate drizzle.",
    price: 7.49,
    badge: "Best Seller",
    image: "/images/crepes/banana-nutella-crepe.jpg",
    focus: "center 60%",
  },
  {
    id: "c2",
    cat: "crepe",
    emoji: "🍓",
    name: "Strawberry Cream Crepe",
    desc: "Fresh strawberries, whipped cream, and rich chocolate drizzle.",
    price: 7.99,
    image: "/images/crepes/strawberry-cream-crepe.jpg",
    focus: "center 55%",
  },
  {
    id: "c3",
    cat: "crepe",
    emoji: "🍫",
    name: "Chocolate Fudge Crepe",
    desc: "A sweet crepe covered with rich chocolate fudge and creamy chocolate sauce.",
    price: 8.49,
    image: "/images/crepes/chocolate-fudge-crepe.jpg",
  },
  {
    id: "c4",
    cat: "crepe",
    emoji: "🫐",
    name: "Chocolate Berry Crepe",
    desc: "Chocolate-filled crepe topped with mixed berries and chocolate drizzle.",
    price: 8.99,
    image: "/images/crepes/chocolate-berry-crepe.jpg",
  },
  {
    id: "c5",
    cat: "crepe",
    emoji: "🍪",
    name: "Lotus Biscoff Crepe",
    desc: "Sweet crepe with Biscoff spread, cookie crumbs, and a scoop of ice cream.",
    price: 8.49,
    image: "/images/crepes/lotus-biscoff-crepe.jpg",
  },
  {
    id: "c6",
    cat: "crepe",
    emoji: "🍓",
    name: "Chocolate Strawberry Crepe",
    desc: "Fresh strawberries wrapped in a soft crepe with chocolate sauce.",
    price: 8.49,
    image: "/images/crepes/chocolate-strawberry-crepe.jpg",
  },
  {
    id: "c7",
    cat: "crepe",
    emoji: "🍌",
    name: "Chocolate Banana Crepe",
    desc: "Sliced bananas, smooth chocolate spread, and a generous chocolate drizzle.",
    price: 7.99,
    image: "/images/crepes/chocolate-banana-crepe.jpg",
  },
  {
    id: "c8",
    cat: "crepe",
    emoji: "🍫",
    name: "Nutella Crunch Crepe",
    desc: "Nutella-filled crepe topped with chocolate pieces and crunchy cookie crumbs.",
    price: 8.49,
    image: "/images/crepes/nutella-crunch-crepe.jpg",
  },
  {
    id: "c9",
    cat: "crepe",
    emoji: "🫐",
    name: "Mixed Berry Crepe",
    desc: "A sweet crepe topped with mixed berries and a light cream drizzle.",
    price: 8.99,
    image: "/images/crepes/mixed-berry-crepe.jpg",
  },
  {
    id: "c10",
    cat: "crepe",
    emoji: "🍫",
    name: "Chocolate Lovers Crepe",
    desc: "A chocolate-loaded crepe topped with chocolate sauce and whipped cream.",
    price: 9.49,
    image: "/images/crepes/chocolate-lovers-crepe.jpg",
  },

  // Sides
  {
    id: "s1",
    cat: "sides",
    emoji: "🍟",
    name: "Crispy French Fries",
    desc: "Golden, crispy fries lightly seasoned with salt and spices.",
    price: 3.49,
    image: "/images/sides/french-fries.jpg",
  },
  {
    id: "s2",
    cat: "sides",
    emoji: "🧅",
    name: "Onion Rings",
    desc: "Golden battered onion rings served with dipping sauce.",
    price: 4.49,
    image: "/images/sides/onion-rings.jpg",
  },
  {
    id: "s3",
    cat: "sides",
    emoji: "🧀",
    name: "Cheesy Fries",
    desc: "Crispy fries topped with warm cheddar cheese sauce.",
    price: 5.49,
    image: "/images/sides/cheesy-fries.jpg",
  },

  // Drinks
  {
    id: "d1",
    cat: "drinks",
    emoji: "🍫",
    name: "Chocolate Milkshake",
    desc: "Creamy chocolate milkshake topped with whipped cream and chocolate drizzle.",
    price: 5.49,
    image: "/images/drinks/chocolate-milkshake.jpg",
    focus: "center 30%",
  },
  {
    id: "d2",
    cat: "drinks",
    emoji: "🍓",
    name: "Strawberry Milkshake",
    desc: "Sweet strawberry milkshake topped with whipped cream and fresh strawberry.",
    price: 5.49,
    image: "/images/drinks/strawberry-milkshake.jpg",
    focus: "center 30%",
  },
  {
    id: "d3",
    cat: "drinks",
    emoji: "🍪",
    name: "Oreo Milkshake",
    desc: "Vanilla ice cream blended with Oreo cookies and finished with chocolate drizzle.",
    price: 5.99,
    image: "/images/drinks/oreo-milkshake.jpg",
    focus: "center 30%",
  },
  {
    id: "d4",
    cat: "drinks",
    emoji: "🍫",
    name: "Chocolate Fudge Milkshake",
    desc: "Rich chocolate shake topped with whipped cream and fudge sauce.",
    price: 5.99,
    image: "/images/drinks/chocolate-fudge-milkshake.jpg",
  },
  {
    id: "d5",
    cat: "drinks",
    emoji: "🍓",
    name: "Strawberry Cheesecake Milkshake",
    desc: "A creamy strawberry shake with cheesecake-inspired flavor and whipped cream.",
    price: 6.49,
    image: "/images/drinks/strawberry-cheesecake-milkshake.jpg",
  },
  {
    id: "d6",
    cat: "drinks",
    emoji: "🫐",
    name: "Blueberry Milkshake",
    desc: "Creamy blueberry milkshake finished with whipped cream and blueberry drizzle.",
    price: 6.49,
    image: "/images/drinks/blueberry-milkshake.jpg",
  },
  {
    id: "d7",
    cat: "drinks",
    emoji: "🍯",
    name: "Caramel Milkshake",
    desc: "Vanilla ice cream blended into a smooth shake with caramel sauce.",
    price: 5.99,
    image: "/images/drinks/caramel-milkshake.jpg",
  },
  {
    id: "d8",
    cat: "drinks",
    emoji: "🫐",
    name: "Mixed Berry Smoothie",
    desc: "A refreshing blended drink made with a mix of berries.",
    price: 5.99,
    image: "/images/drinks/mixed-berry-smoothie.jpg",
  },
  {
    id: "d9",
    cat: "drinks",
    emoji: "🫐",
    name: "Blueberry Smoothie",
    desc: "A smooth, fruity blueberry drink with a refreshing berry flavor.",
    price: 5.99,
    image: "/images/drinks/blueberry-smoothie.jpg",
  },
  {
    id: "d10",
    cat: "drinks",
    emoji: "🍫",
    name: "Chocolate Cookie Shake",
    desc: "A creamy chocolate shake topped with whipped cream and cookie pieces.",
    price: 5.99,
    image: "/images/drinks/chocolate-cookie-shake.jpg",
  },
  {
    id: "d11",
    cat: "drinks",
    emoji: "🍓",
    name: "Strawberry Banana Smoothie",
    desc: "A fruity blend of strawberries and bananas with a smooth, creamy texture.",
    price: 5.99,
    image: "/images/drinks/strawberry-banana-smoothie.jpg",
  },
  {
    id: "d12",
    cat: "drinks",
    emoji: "🥤",
    name: "Chocolate Cream Shake",
    desc: "A rich chocolate shake topped with whipped cream and chocolate drizzle.",
    price: 5.99,
    image: "/images/drinks/chocolate-cream-shake.jpg",
  },
  {
    id: "d13",
    cat: "drinks",
    emoji: "🍋",
    name: "Mint Lemonade",
    desc: "Freshly squeezed lemonade blended with mint.",
    price: 3.49,
    image: "/images/drinks/mint-lemonade.jpg",
  },
  {
    id: "d14",
    cat: "drinks",
    emoji: "☕",
    name: "Iced Mocha",
    desc: "Chilled espresso mixed with milk and chocolate.",
    price: 4.49,
    image: "/images/drinks/iced-mocha.jpg",
  },
  {
    id: "d15",
    cat: "drinks",
    emoji: "🥤",
    name: "Soft Drink",
    desc: "Choose from cola, lemon-lime soda, or orange soda.",
    price: 2.49,
    image: "/images/drinks/soft-drink.jpg",
  },

  // Combo Meals
  {
    id: "m1",
    cat: "combo",
    emoji: "🎁",
    name: "Classic Burger Combo",
    desc: "Classic burger served with French fries and a soft drink.",
    price: 13.49,
    badge: "Great Value",
    image: "/images/combos/classic-burger-combo.jpg",
  },
  {
    id: "m2",
    cat: "combo",
    emoji: "🎉",
    name: "Double Burger Combo",
    desc: "Double cheeseburger served with cheesy fries and a milkshake.",
    price: 16.99,
    badge: "Fan Favorite",
    image: "/images/combos/double-burger-combo.jpg",
  },
  {
    id: "m3",
    cat: "combo",
    emoji: "💛",
    name: "Sweet Crepe Combo",
    desc: "Banana Nutella crepe paired with an iced mocha.",
    price: 10.49,
    image: "/images/combos/sweet-crepe-combo.jpg",
  },
];

export const addons: Addon[] = [
  { id: "a1", name: "Extra Nutella", price: 1.0, cats: ["crepe"] },
  { id: "a2", name: "Mixed Nuts", price: 0.75, cats: ["crepe"] },
  {
    id: "a3",
    name: "Ice Cream Scoop",
    price: 1.5,
    cats: ["crepe", "drinks"],
  },
  {
    id: "a4",
    name: "Extra Cheddar Cheese",
    price: 1.0,
    cats: ["burger", "tacos", "sides"],
  },
  {
    id: "a5",
    name: "Bacon",
    price: 1.75,
    cats: ["burger"],
  },
  {
    id: "a6",
    name: "Extra Beef Patty",
    price: 3.0,
    cats: ["burger", "tacos"],
  },
  {
    id: "a7",
    name: "Garlic Sauce",
    price: 0.75,
    cats: ["burger", "tacos", "sides"],
  },
  {
    id: "a8",
    name: "Jalapeños",
    price: 0.75,
    cats: ["burger", "tacos"],
  },
  {
    id: "a9",
    name: "Whipped Cream",
    price: 0.75,
    cats: ["drinks", "crepe"],
  },
];

export const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);