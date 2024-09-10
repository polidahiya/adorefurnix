export const categorylist = {
  "Living Room": {
    image: "/categoriesimages/livingroom.jpg",
    subcat: [
      { image: "/categoriesimages/livingroom.jpg", name: "Sofa sets" },
      { image: "/categoriesimages/livingroom.jpg", name: "Sofa cum bed" },
      { image: "/categoriesimages/livingroom.jpg", name: "Wing chairs" },
      { image: "/categoriesimages/livingroom.jpg", name: "Ottoman" },
      { image: "/categoriesimages/livingroom.jpg", name: "Chairs" },
    ],
  },
  Bedroom: {
    image: "/categoriesimages/bedroom.jpg",
    subcat: [
      { image: "/categoriesimages/bedroom.jpg", name: "King Size Bed" },
      { image: "/categoriesimages/bedroom.jpg", name: "Queen Size Bed" },
      { image: "/categoriesimages/bedroom.jpg", name: "Single Bed" },
      { image: "/categoriesimages/bedroom.jpg", name: "Kids Bed" },
      { image: "/categoriesimages/bedroom.jpg", name: "Wardrobe" },
      { image: "/categoriesimages/bedroom.jpg", name: "Bedside Table" },
      { image: "/categoriesimages/bedroom.jpg", name: "Chest of Drawers" },
      { image: "/categoriesimages/bedroom.jpg", name: "Dressing Tables" },
    ],
  },
  Dining: {
    image: "/categoriesimages/Dining.jpg",
    subcat: [
      { image: "/categoriesimages/Dining.jpg", name: "2-Seater Dining Set" },
      { image: "/categoriesimages/Dining.jpg", name: "4-Seater Dining Set" },
      { image: "/categoriesimages/Dining.jpg", name: "6-Seater Dining Set" },
    ],
  },
  Tables: {
    image: "/categoriesimages/tables.jpg",
    subcat: [
      { image: "/categoriesimages/tables.jpg", name: "Coffee Tables" },
      { image: "/categoriesimages/tables.jpg", name: "End Tables" },
      { image: "/categoriesimages/tables.jpg", name: "Console Tables" },
      { image: "/categoriesimages/tables.jpg", name: "Nesting Tables" },
    ],
  },
  Storage: {
    image: "/categoriesimages/storage.avif",
    subcat: [
      { image: "/categoriesimages/storage.avif", name: "Shoe Rack" },
      {
        image: "/categoriesimages/storage.avif",
        name: "Tv and Entertainment Unit",
      },
      { image: "/categoriesimages/storage.avif", name: "Cabinet" },
      { image: "/categoriesimages/storage.avif", name: "Book Shelf" },
      { image: "/categoriesimages/storage.avif", name: "Crockery Cabinet" },
    ],
  },
  "Bar Furniture": {
    image: "/categoriesimages/barfurniture.jpg",
    subcat: [
      { image: "/categoriesimages/barfurniture.jpg", name: "Bar Units" },
      { image: "/categoriesimages/barfurniture.jpg", name: "Bar Cabinets" },
      { image: "/categoriesimages/barfurniture.jpg", name: "Bar Trolly" },
      {
        image: "/categoriesimages/barfurniture.jpg",
        name: "Bar Wall hanging Shelf",
      },
      {
        image: "/categoriesimages/barfurniture.jpg",
        name: "Bar Chairs & Stools",
      },
    ],
  },
  "Study and Bookshelf": {
    image: "/categoriesimages/studybookshelf.jpg",
    subcat: [
      { image: "/categoriesimages/studybookshelf.jpg", name: "Study Tables" },
      { image: "/categoriesimages/studybookshelf.jpg", name: "BookShelf" },
      {
        image: "/categoriesimages/studybookshelf.jpg",
        name: "Computer Tables",
      },
    ],
  },
  "Office Furniture": {
    image: "/categoriesimages/officefurniture.webp",
    subcat: [
      {
        image: "/categoriesimages/officefurniture.webp",
        name: "Office Chairs",
      },
      {
        image: "/categoriesimages/officefurniture.webp",
        name: "Study & Laptop Tables",
      },
      { image: "/categoriesimages/officefurniture.webp", name: "Office Sofa" },
    ],
  },
  "Home Decor & More": {
    image: "/categoriesimages/homedecoreandmore.webp",
    subcat: [],
  },
};

export const filterlist = [
  {
    name: "No Filter",
    min: 0,
    max: 500000,
  },
  {
    name: "Less than 10k",
    min: 0,
    max: 10000,
  },
  {
    name: "10k - 25k",
    min: 10000,
    max: 25000,
  },
  {
    name: "25k - 40k",
    min: 25000,
    max: 40000,
  },
  {
    name: "40k - 50k",
    min: 40000,
    max: 50000,
  },
  {
    name: "More than 50k",
    min: 50000,
    max: 500000,
  },
];

// fixed search options
export const searchoptions = [
  "Living Room",
  "Sofa sets",
  "Sofa cum bed",
  "Wing chairs",
  "Ottoman",
  "Chairs",
  "Bedroom",
  "King Size Bed",
  "Queen Size Bed",
  "Single Bed",
  "Kids Bed",
  "Wardrobe",
  "Bedside Table",
  "Chest of Drawers",
  "Dressing Tables",
  "Dining",
  "2-Seater Dining Set",
  "4-Seater Dining Set",
  "6-Seater Dining Set",
  "Tables",
  "Coffee Tables",
  "End Tables",
  "Console Tables",
  "Nesting Tables",
  "Storage",
  "Shoe Rack",
  "Tv and Entertainment Unit",
  "Cabinet",
  "Book Shelf",
  "Crockery Cabinet",
  "Bar Furniture",
  "Bar Units",
  "Bar Cabinets",
  "Bar Trolly",
  "Bar Wall hanging Shelf",
  "Bar Chairs & Stools",
  "Study and Bookshelf",
  "Study Tables",
  "BookShelf",
  "Computer Tables",
  "Office Furniture",
  "Office Chairs",
  "Study & Laptop Tables",
  "Office Sofa",
  "Home Decor & More",
];

export const permanentsearchoptions = [
  "King Size Bed",
  "4-Seater Dining Set",
  "Coffee Tables",
  "Flora kids bed",
  "Home Decor & More",
];

// login time
export const logintime = [3600 * 24 * 2, "48h"];

// ordere stages
export const orderstages = [
  "Order Placed",
  "Order Processing",
  "Order Shipped",
  "Order Delivered",
];
