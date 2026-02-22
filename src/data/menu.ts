export interface MenuItem {
  name: string;
  description: string;
  price: number;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: "To Begin",
    description: "Small plates to awaken the palate",
    items: [
      {
        name: "Midnight Oysters",
        description: "Half dozen fresh oysters with champagne mignonette, citrus pearls, and black salt",
        price: 28,
        tags: ["signature"],
      },
      {
        name: "Burrata Nera",
        description: "Creamy burrata with charred tomatoes, aged balsamic, basil oil, and grilled sourdough",
        price: 22,
        tags: ["vegetarian"],
      },
      {
        name: "Tuna Tartare",
        description: "Sashimi-grade ahi tuna, avocado mousse, sesame crisp, and wasabi tobiko",
        price: 26,
      },
      {
        name: "Wild Mushroom Velouté",
        description: "Silky forest mushroom soup with truffle cream and chive oil",
        price: 18,
        tags: ["vegetarian"],
      },
      {
        name: "Foie Gras Terrine",
        description: "House-made terrine with fig compote, toasted brioche, and Sauternes gelée",
        price: 34,
        tags: ["signature"],
      },
    ],
  },
  {
    id: "mains",
    name: "The Journey",
    description: "Main courses crafted with passion",
    items: [
      {
        name: "Wagyu Tenderloin",
        description: "A5 Japanese wagyu, bone marrow butter, roasted shallots, and black garlic jus",
        price: 95,
        tags: ["signature"],
      },
      {
        name: "Butter-Poached Lobster",
        description: "Maine lobster tail with saffron risotto, asparagus, and champagne beurre blanc",
        price: 78,
      },
      {
        name: "Duck Two Ways",
        description: "Pan-seared breast and confit leg, cherry gastrique, parsnip purée, and micro greens",
        price: 58,
      },
      {
        name: "Chilean Sea Bass",
        description: "Miso-glazed sea bass with bok choy, shiitake mushrooms, and ginger dashi",
        price: 62,
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Arborio rice with porcini, chanterelle, truffle shavings, and aged parmesan",
        price: 42,
        tags: ["vegetarian"],
      },
      {
        name: "Lamb Rack",
        description: "Herb-crusted New Zealand lamb, ratatouille, olive tapenade, and rosemary jus",
        price: 68,
      },
    ],
  },
  {
    id: "desserts",
    name: "Sweet Secrets",
    description: "Indulgent finales to your evening",
    items: [
      {
        name: "Chocolate Noir",
        description: "70% dark chocolate fondant with salted caramel, vanilla bean ice cream, and gold leaf",
        price: 18,
        tags: ["signature"],
      },
      {
        name: "Crème Brûlée",
        description: "Classic Madagascar vanilla custard with caramelized sugar and fresh berries",
        price: 14,
      },
      {
        name: "Tarte Tatin",
        description: "Caramelized apple tart with calvados cream and cinnamon ice cream",
        price: 16,
      },
      {
        name: "Cheese Selection",
        description: "Curated artisan cheeses, honeycomb, fig paste, and walnut bread",
        price: 24,
      },
    ],
  },
  {
    id: "cocktails",
    name: "Elixirs",
    description: "Crafted cocktails and libations",
    items: [
      {
        name: "The Hidden Key",
        description: "Aged rum, elderflower liqueur, lime, ginger beer, and edible gold",
        price: 19,
        tags: ["signature"],
      },
      {
        name: "Smoky Negroni",
        description: "Mezcal, Campari, sweet vermouth, with a smoked rosemary sprig",
        price: 17,
      },
      {
        name: "Midnight Garden",
        description: "Gin, violet liqueur, fresh lemon, lavender bitters, and champagne float",
        price: 18,
      },
      {
        name: "Old Fashioned Noir",
        description: "Japanese whisky, demerara, activated charcoal, orange, and Luxardo cherry",
        price: 21,
        tags: ["signature"],
      },
      {
        name: "Virgin's Secret",
        description: "Passion fruit, coconut cream, lime, and sparkling water with edible flowers",
        price: 12,
        tags: ["non-alcoholic"],
      },
    ],
  },
  {
    id: "wines",
    name: "From the Cellar",
    description: "Curated wines by the glass",
    items: [
      {
        name: "Château Margaux 2015",
        description: "Bordeaux, France — Elegant with blackcurrant, violet, and silky tannins",
        price: 85,
        tags: ["red"],
      },
      {
        name: "Cloudy Bay Sauvignon Blanc",
        description: "Marlborough, New Zealand — Crisp citrus, tropical fruit, and mineral finish",
        price: 22,
        tags: ["white"],
      },
      {
        name: "Dom Pérignon 2012",
        description: "Champagne, France — Toasted brioche, citrus, and refined effervescence",
        price: 75,
        tags: ["champagne"],
      },
      {
        name: "Barolo Riserva 2016",
        description: "Piedmont, Italy — Powerful with rose, tar, and dried cherry notes",
        price: 45,
        tags: ["red"],
      },
    ],
  },
];
