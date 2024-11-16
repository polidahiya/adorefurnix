function Categorydescription({ category, subcat, location }) {
  return (
    <div>
      <p className="text-sm md:text-base text-center p-5 font-serif italic">
       
      </p>
    </div>
  );
}

export default Categorydescription;

function categorydescr(category, subcategory, city = "Delhi") {
  const descriptions = {
    "Living Room": {
      description: `Explore the finest selection of Living Room Furniture in ${city} at Adorefurnix, your go-to destination where quality meets contemporary design. Whether you're searching for plush sofa sets, multifunctional sofa cum beds, or elegant wing chairs, we provide a curated range of premium furniture designed to transform your living space in ${city}. Our collection features luxurious sectional sofas, stylish coffee tables, and media units, perfect for creating a comfortable and visually appealing living room. 
      From modern sofa sets to classic armchairs, we offer something to suit every style, ensuring that your living room reflects your personal taste. Add a touch of sophistication with our stylish ottomans and accent chairs, blending seamlessly with both modern and traditional interiors. Looking for storage solutions? Our range of entertainment units, console tables, and bookshelves offers both functionality and style, helping you keep your living room organized and clutter-free. 
      At Adorefurnix, we prioritize both comfort and aesthetics, offering ergonomic furniture that enhances your relaxation experience. Our recliners and lounge chairs are perfect for unwinding after a long day, while our coffee tables and side tables add the perfect finishing touch to any living room layout. For those in ${city} seeking to create a cozy and inviting atmosphere, we have the perfect mix of modern design and timeless elegance.Shop now to discover the best living room furniture options in ${city} for any home decor, whether you're furnishing a cozy apartment, a spacious family home, or a trendy urban loft. With Adorefurnix, you're guaranteed to find high-quality, stylish furniture that elevates your living space and enhances your lifestyle.`,
      subcategories: {
        "Sofa sets": `Upgrade your living room in ${city} with Adorefurnix’s premium sofa sets. Our collection offers a variety of styles and sizes, ensuring comfort and elegance for any space. Choose from classic, modern, or contemporary designs to match your home decor.`,
        "Sofa cum bed": `Maximize functionality in your living room in ${city} with a versatile sofa cum bed from Adorefurnix. Ideal for small spaces or guest rooms, our sofa beds offer comfort and style, transforming easily from seating to sleeping space.`,
        "Wing chairs": `Add a touch of luxury to your living room in ${city} with our stylish wing chairs. Designed for comfort and aesthetic appeal, these chairs make a perfect statement piece, offering both style and support.`,
        Ottoman: `Complete your living room setup in ${city} with a chic ottoman. Ideal for additional seating, leg rest, or as a coffee table, our ottomans are available in various designs and materials to fit any home decor.`,
        Chairs: `Discover a wide range of living room chairs in ${city} at Adorefurnix. Our collection includes accent chairs, lounge chairs, and more, combining comfort and style to enhance any room in your home.`,
      },
    },
    Bedroom: {
      description: `Redefine your bedroom in ${city} with luxurious and affordable Bedroom Furniture from Adorefurnix. Whether you&apos;re looking for spacious king-size beds, elegant queen-size beds, or practical single beds, we have options for every bedroom in ${city}. Complete your space with stylish wardrobes, bedside tables, chest of drawers, and more.`,
      subcategories: {
        "King Size Bed": `Sleep like royalty in a king-size bed from Adorefurnix in ${city}. Our beds offer ample space, comfort, and elegance, making them the perfect centerpiece for any master bedroom.`,
        "Queen Size Bed": `Bring style and comfort to your bedroom in ${city} with our queen-size beds. Perfect for both spacious and compact rooms, these beds offer a balance of luxury and functionality.`,
        "Single Bed": `Ideal for guest rooms or children&apos;s rooms in ${city}, our single beds offer style and comfort in a compact size. Choose from a variety of designs to suit your home.`,
        "Kids Bed": `Create a fun and functional space for your children with Adorefurnix’s kids&apos; beds in ${city}. Designed with safety and style in mind, our beds are perfect for any child&apos;s room.`,
        Wardrobe: `Organize your bedroom in ${city} with our stylish and spacious wardrobes. Our designs offer plenty of storage while complementing the aesthetics of your room.`,
        "Bedside Table": `Add convenience and style to your bedroom in ${city} with our bedside tables. Perfect for keeping essentials within reach, our tables come in a variety of designs to match any decor.`,
        "Chest of Drawers": `Keep your bedroom in ${city} tidy and organized with a chest of drawers from Adorefurnix. Our range combines functionality with elegance, providing ample storage in a sleek design.`,
        "Dressing Tables": `Complete your bedroom setup in ${city} with a stylish dressing table from Adorefurnix. Our tables offer storage and elegance, perfect for organizing your beauty essentials.`,
      },
    },
    Dining: {
      description: `Elevate your dining experience in ${city} with Adorefurnix’s stylish Dining Furniture. Whether you&apos;re looking for a cozy 2-seater dining set or a spacious 6-seater table, our collection in ${city} offers the perfect blend of comfort and design for your home.`,
      subcategories: {
        "2-Seater Dining Set": `Perfect for small spaces or intimate meals, our 2-seater dining sets in ${city} provide style and comfort in a compact design. Ideal for cozy dining areas.`,
        "4-Seater Dining Set": `Enjoy family meals around a 4-seater dining set from Adorefurnix in ${city}. Our sets offer a perfect balance of style and function for everyday use.`,
        "6-Seater Dining Set": `Host in style with a spacious 6-seater dining set from Adorefurnix in ${city}. Ideal for large families or entertaining guests, these sets are designed for both comfort and elegance.`,
      },
    },
    Tables: {
      description: `Find the perfect table for your home in ${city} with Adorefurnix’s diverse collection. Whether you need a stylish coffee table, a functional end table, or a space-saving nesting table, we offer high-quality designs that complement any decor in ${city}.`,
      subcategories: {
        "Coffee Tables": `Enhance your living room in ${city} with a stylish coffee table from Adorefurnix. Our designs range from minimalist to bold, providing a perfect centerpiece for your space.`,
        "End Tables": `Add functionality and style to your living room in ${city} with our elegant end tables. Perfect for placing lamps, books, or decor, these tables complete your home’s look.`,
        "Console Tables": `Make a statement in your entryway or living room in ${city} with a sleek console table from Adorefurnix. Ideal for decor or storage, these tables combine beauty and function.`,
        "Nesting Tables": `Maximize space and versatility in ${city} with our nesting tables. Perfect for small spaces or as additional surfaces, these tables offer practicality without compromising style.`,
      },
    },
    Storage: {
      description: `Keep your home in ${city} organized and stylish with Adorefurnix’s Storage Furniture. Our collection includes shoe racks, TV units, cabinets, bookshelves, and more, providing smart storage solutions that enhance the aesthetic of any room in ${city}.`,
      subcategories: {
        "Shoe Rack": `Organize your entryway in ${city} with a stylish and functional shoe rack from Adorefurnix. Our designs keep your shoes neatly stored while adding a touch of style to your home.`,
        "Tv and Entertainment Unit": `Create a stylish and functional media center in ${city} with a TV and entertainment unit from Adorefurnix. Our units offer plenty of storage for your electronics and decor.`,
        Cabinet: `Add extra storage and elegance to your home in ${city} with a cabinet from Adorefurnix. Our cabinets are perfect for storing dishes, linens, or decor in style.`,
        "Book Shelf": `Display your books and decor in style with a bookshelf from Adorefurnix in ${city}. Our designs are perfect for organizing and showcasing your collection.`,
        "Crockery Cabinet": `Keep your kitchen or dining room in ${city} organized with a sleek crockery cabinet from Adorefurnix. Our cabinets provide ample storage for your dishes while enhancing the room&apos;s decor.`,
      },
    },
    "Bar Furniture": {
      description: `Transform your home bar or entertainment space in ${city} with Adorefurnix’s exclusive Bar Furniture collection. From bar units to stools, our range in ${city} offers stylish and functional options to create the perfect space for entertaining.`,
      subcategories: {
        "Bar Units": `Elevate your home bar in ${city} with a stylish and functional bar unit from Adorefurnix. Our units provide ample storage for your spirits and glassware, making entertaining a breeze.`,
        "Bar Cabinets": `Keep your bar essentials organized in ${city} with a sleek bar cabinet from Adorefurnix. Our designs offer both storage and style, perfect for any home bar setup.`,
        "Bar Trolly": `Add mobility and style to your home bar in ${city} with a bar trolley from Adorefurnix. Ideal for entertaining, our trolleys offer both functionality and charm.`,
        "Bar Wall hanging Shelf": `Maximize space in your bar area in ${city} with a wall-hanging bar shelf from Adorefurnix. Perfect for storing and displaying your favorite spirits, these shelves are both stylish and practical.`,
        "Bar Chairs & Stools": `Complete your home bar in ${city} with comfortable and stylish bar chairs and stools from Adorefurnix. Designed for both elegance and comfort, our seating options are perfect for entertaining.`,
      },
    },
    "Study and Bookshelf": {
      description: `Create a productive and stylish workspace in ${city} with Adorefurnix’s Study and Bookshelf Furniture. Whether you need a functional study table, a spacious bookshelf, or a sleek computer table, we offer the perfect solutions for your home office in ${city}.`,
      subcategories: {
        "Study Tables": `Enhance your productivity in ${city} with a functional and stylish study table from Adorefurnix. Our tables are designed to provide a comfortable workspace while complementing your home decor.`,
        BookShelf: `Organize your books and decor in ${city} with a stylish bookshelf from Adorefurnix. Our designs offer both storage and display solutions for your home office or living space.`,
        "Computer Tables": `Maximize your home office setup in ${city} with a sleek and functional computer table from Adorefurnix. Our tables provide ample workspace and storage for all your office essentials.`,
      },
    },
    "Office Furniture": {
      description: `Enhance your workspace in ${city} with Adorefurnix’s premium Office Furniture. From ergonomic chairs to sleek desks and cozy office sofas, our collection in ${city} offers everything you need to create a productive and stylish office environment.`,
      subcategories: {
        "Office Chairs": `Stay comfortable and productive in ${city} with an ergonomic office chair from Adorefurnix. Our chairs offer superior support and style for any workspace.`,
        "Study & Laptop Tables": `Upgrade your home office in ${city} with a stylish and functional study or laptop table from Adorefurnix. Our tables are designed to provide a comfortable workspace that fits any room.`,
        "Office Sofas": `Create a comfortable and professional office environment in ${city} with an office sofa from Adorefurnix. Perfect for waiting areas or personal workspaces, our sofas offer both style and comfort.`,
      },
    },
    "Home Decor & More": {
      description: `Add personality and charm to your home in ${city} with Adorefurnix’s Home Decor collection. From mirror frames to wall art and planters, our decorative pieces help transform any room into a stylish and welcoming space in ${city}.`,
      subcategories: {
        "Mirror Frame": `Brighten up any room in ${city} with a stylish mirror frame from Adorefurnix. Our designs add depth and elegance to your home decor.`,
        "Wall Arts": `Make a statement in your home in ${city} with Adorefurnix’s unique wall art. Perfect for adding a personal touch to any room.`,
        "Wall Hangings": `Add a creative touch to your walls in ${city} with decorative wall hangings from Adorefurnix. Our collection features unique designs to complement any decor.`,
        Planters: `Bring a touch of nature into your home in ${city} with stylish planters from Adorefurnix. Perfect for indoor plants, our planters add greenery and style to any space.`,
      },
    },
  };

  if (subcategory) return descriptions[category]?.subcategories[subcategory];
  return descriptions[category]?.description;
}
