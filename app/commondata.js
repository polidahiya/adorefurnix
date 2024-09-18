export const mail = "adorefurnix@gmail.com";
export const mobile = "+91 95822 14574";
export const address = "Plot no. 1081 sector 3A, Gurgaon Haryana 122001";

export const sociallinks = {
  insta: "https://www.instagram.com/adorefurnix?igsh=emc0cmUwcHVsdXR2",
  facebook: "https://www.facebook.com/share/VN5R1yTY3ZHarwW9/?mibextid=qi2Omg",
  twitter: "https://x.com/Adorefurnix?t=VQWPT4ltjY2cAcHw40xLmw&s=09",
};

export const categorylist = {
  "Living Room": {
    image: "/categoriesimages/livingroom.jpg",
    subcat: [
      { image: "/categoriesimages/subcats/sofasets.webp", name: "Sofa sets" },
      {
        image: "/categoriesimages/subcats/sofacumbed.jpg",
        name: "Sofa cum bed",
      },
      { image: "/categoriesimages/subcats/wingchair.jpg", name: "Wing chairs" },
      { image: "/categoriesimages/subcats/ottoman.jpg", name: "Ottoman" },
      { image: "/categoriesimages/subcats/charis.jpg", name: "Chairs" },
    ],
  },
  Bedroom: {
    image: "/categoriesimages/bedroom.jpg",
    subcat: [
      {
        image: "/categoriesimages/subcats/kingbed.webp",
        name: "King Size Bed",
      },
      {
        image: "/categoriesimages/subcats/queenbed.jpeg",
        name: "Queen Size Bed",
      },
      { image: "/categoriesimages/subcats/singlebed.webp", name: "Single Bed" },
      { image: "/categoriesimages/subcats/kidsbed.webp", name: "Kids Bed" },
      { image: "/categoriesimages/subcats/wardrobe.jpg", name: "Wardrobe" },
      {
        image: "/categoriesimages/subcats/bedsidetable.jpg",
        name: "Bedside Table",
      },
      {
        image: "/categoriesimages/subcats/chestofdrawers.avif",
        name: "Chest of Drawers",
      },
      {
        image: "/categoriesimages/subcats/dressingtable.jpg",
        name: "Dressing Tables",
      },
    ],
  },
  Dining: {
    image: "/categoriesimages/Dining.jpg",
    subcat: [
      {
        image: "/categoriesimages/subcats/2-SeaterDiningSet.webp",
        name: "2-Seater Dining Set",
      },
      {
        image: "/categoriesimages/subcats/4-SeaterDiningSet.webp",
        name: "4-Seater Dining Set",
      },
      {
        image: "/categoriesimages/subcats/6-SeaterDiningSet.jpg",
        name: "6-Seater Dining Set",
      },
    ],
  },
  Tables: {
    image: "/categoriesimages/tables.jpg",
    subcat: [
      {
        image: "/categoriesimages/subcats/CoffeeTables.avif",
        name: "Coffee Tables",
      },
      { image: "/categoriesimages/subcats/EndTables.webp", name: "End Tables" },
      {
        image: "/categoriesimages/subcats/ConsoleTables.jpg",
        name: "Console Tables",
      },
      {
        image: "/categoriesimages/subcats/NestingTables.webp",
        name: "Nesting Tables",
      },
    ],
  },
  Storage: {
    image: "/categoriesimages/storage.avif",
    subcat: [
      { image: "/categoriesimages/subcats/ShoeRack.webp", name: "Shoe Rack" },
      {
        image: "/categoriesimages/subcats/tvandentertainmentunits.webp",
        name: "Tv and Entertainment Unit",
      },
      { image: "/categoriesimages/subcats/Cabinet.jpg", name: "Cabinet" },
      { image: "/categoriesimages/subcats/BookShelf.jpg", name: "Book Shelf" },
      {
        image: "/categoriesimages/subcats/CrockeryCabinet.jpg",
        name: "Crockery Cabinet",
      },
    ],
  },
  "Bar Furniture": {
    image: "/categoriesimages/barfurniture.jpg",
    subcat: [
      { image: "/categoriesimages/subcats/BarUnits.png", name: "Bar Units" },
      {
        image: "/categoriesimages/subcats/BarCabinets.webp",
        name: "Bar Cabinets",
      },
      { image: "/categoriesimages/subcats/BarTrolly.webp", name: "Bar Trolly" },
      {
        image: "/categoriesimages/subcats/BarWallhangingShelf.jpg",
        name: "Bar Wall hanging Shelf",
      },
      {
        image: "/categoriesimages/subcats/BarChairs&Stools.jpeg",
        name: "Bar Chairs & Stools",
      },
    ],
  },
  "Study and Bookshelf": {
    image: "/categoriesimages/studybookshelf.jpg",
    subcat: [
      {
        image: "/categoriesimages/subcats/StudyTables.jpg",
        name: "Study Tables",
      },
      { image: "/categoriesimages/subcats/BookShelf.jpg", name: "BookShelf" },
      {
        image: "/categoriesimages/subcats/ComputerTables.jpg",
        name: "Computer Tables",
      },
    ],
  },
  "Office Furniture": {
    image: "/categoriesimages/officefurniture.webp",
    subcat: [
      {
        image: "/categoriesimages/subcats/OfficeChairs.webp",
        name: "Office Chairs",
      },
      {
        image: "/categoriesimages/subcats/Study&LaptopTables.webp",
        name: "Study & Laptop Tables",
      },
      {
        image: "/categoriesimages/subcats/OfficeSofa.webp",
        name: "Office Sofa",
      },
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

export const sortinglist = [
  { name: "Default" },
  { name: "Discount" },
  { name: "Rating" },
  { name: "Price : low to high" },
  { name: "Price : hight to low" },
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
