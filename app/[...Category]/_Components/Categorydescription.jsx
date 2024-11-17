const categoryComponents = {
  "Living Room": Livingroomdesc,
  Bedroom: Bedroomdesc,
  Dining: Diningdesc,
  Tables: Tablesdesc,
  Storage: Storagedesc,
  "Bar Furniture": Barfurnituredesc,
  "Study and Bookshelf": Studyandbookshelfdesc,
  "Office Furniture": Officefurnituredesc,
  "Home Decor & More": Homedecorandmoredesc,
};

const subcategoryComponents = {
  "Sofa sets": sofaSets,
  "Sofa cum bed": sofaCumBed,
  "Wing chairs": wingChairs,
  Ottoman: ottoman,
  Chairs: chairs,
  "King Size Bed": kingSizeBed,
  "Queen Size Bed": queenSizeBed,
  "Single Bed": singleBed,
  "Kids Bed": kidsBed,
  Wardrobe: wardrobe,
  "Bedside Table": bedsideTable,
  "Chest of Drawers": chestOfDrawers,
  "Dressing Tables": dressingTables,
  "2-Seater Dining Set": twoSeaterDiningSet,
  "4-Seater Dining Set": fourSeaterDiningSet,
  "6-Seater Dining Set": sixSeaterDiningSet,
  "Coffee Tables": coffeeTables,
  "End Tables": endTables,
  "Console Tables": consoleTables,
  "Nesting Tables": nestingTables,
  "Shoe Rack": shoeRack,
  "Tv and Entertainment Unit": tvAndEntertainmentUnit,
  Cabinet: cabinet,
  "Book Shelf": bookShelf,
  "Crockery Cabinet": crockeryCabinet,
  "Bar Units": barUnits,
  "Bar Cabinets": barCabinets,
  "Bar Trolly": barTrolly,
  "Bar Wall hanging Shelf": barWallHangingShelf,
  "Bar Chairs & Stools": barChairsAndStools,
  "Study Tables": studyTables,
  BookShelf: bookShelf,
  "Computer Tables": computerTables,
  "Office Chairs": officeChairs,
  "Study & Laptop Tables": studyAndLaptopTables,
  "Office Sofa": officeSofa,
  "Mirror Frame": mirrorFrame,
  "Wall Arts": wallArts,
  "Wall Hangings": wallHangings,
  Planters: planters,
};

const h1classes = "font-bold text-lg";
const h2classes = "font-bold text-base";
const h3classes = "font-bold";
const paraclasses = "";
const listclasses = "";
const strongclasses = "text-cyan-500 font-bold";

function Categorydescription({ category, subcat, location }) {
  const CategoryComponent = categoryComponents[category];
  const SubcatComponent = subcategoryComponents[subcat];

  return (
    <div className="px-5 md:px-10 text-sm font-serif italic mb-10">
      {subcat ? (
        <SubcatComponent location={location} />
      ) : (
        <CategoryComponent location={location} />
      )}
    </div>
  );
}

export default Categorydescription;

function Livingroomdesc({ location }) {
  return (
    <div>
      <h1>
        Explore a World of Living Room Furniture in {location} &ndash; Style,
        Comfort, and Affordability
      </h1>
      <p>
        Revamp your living space with an exquisite range of{" "}
        <strong>living room furniture in {location}</strong>, designed to suit
        every budget and style preference. Whether you&rsquo;re looking for
        premium, luxurious pieces or budget-friendly furniture, Adorefurnix
        offers endless choices to elevate your home decor.
      </p>
      <p>
        From modern <strong>sofa cum beds</strong> to elegant{" "}
        <strong>wing chairs</strong> with ottomans, discover multifunctional
        furniture that adds charm and utility to your living room. Find trendy{" "}
        <strong>ottomans</strong> and versatile{" "}
        <strong>wooden furniture chairs</strong>. Explore the finest selections
        from Adorefurnix to transform your living space.
      </p>

      <h2>Why Choose Living Room Furniture in {location}?</h2>
      <ul>
        <li>
          <strong>Affordable Variety:</strong> Whether you need{" "}
          <strong>cheap living room furniture in {location}</strong> or high-end
          luxury options, you&rsquo;ll find everything from{" "}
          <strong>folding sofa beds</strong> to{" "}
          <strong>stylish wing chair sets</strong> at Adorefurnix.
        </li>
        <li>
          <strong>Durability Meets Design:</strong> Choose{" "}
          <strong>wooden sofa cum beds</strong>,{" "}
          <strong>leather ottomans</strong>, and{" "}
          <strong>designer wing chairs</strong> for durability and timeless
          aesthetics.
        </li>
        <li>
          <strong>Customization Options:</strong> Adorefurnix offers{" "}
          <strong>customized living room furniture</strong>, ensuring every
          piece complements your unique style.
        </li>
        <li>
          <strong>Convenient Shopping:</strong> Explore{" "}
          <strong>living room furniture in {location} online</strong> or visit
          Adorefurnix for an extensive range of products.
        </li>
        <li>
          <strong>Budget-Friendly Choices:</strong> Find{" "}
          <strong>used furniture chairs</strong> and{" "}
          <strong>second-hand ottomans</strong> at affordable prices exclusively
          at Adorefurnix.
        </li>
      </ul>

      <h2>Popular Choices for Living Room Furniture</h2>
      <ul>
        <li>
          <strong>Sofa Sets:</strong> Luxurious leather sofas, space-saving
          sectional sofas, and versatile sofa cum beds.
        </li>
        <li>
          <strong>Sofa Cum Beds:</strong> Affordable options starting under
          &#8377;5,000, including durable wooden designs.
        </li>
        <li>
          <strong>Wing Chairs:</strong> Sophisticated designs, often paired with
          ottomans.
        </li>
        <li>
          <strong>Ottomans:</strong> Wooden, leather, and sofa ottoman options
          to suit your decor.
        </li>
        <li>
          <strong>Chairs:</strong> Options range from budget-friendly to premium
          designs.
        </li>
      </ul>

      <h2>FAQs About Living Room Furniture in {location}</h2>
      <ul>
        <li>
          <strong>Which quality of sofa is best?</strong>
          Opt for hardwood frames and high-density foam for durability and
          comfort. Leather sofas and wooden sofa sets are excellent choices for
          premium quality.
        </li>
        <li>
          <strong>What is the average price of a nice sofa?</strong> A
          good-quality sofa starts around &#8377;20,000, but options like sofa
          cum beds under &#8377;10,000 are available for budget buyers.
        </li>
        <li>
          <strong>How many years does a sofa last?</strong> With proper care, a
          high-quality sofa can last 7&ndash;15 years, depending on the
          material.
        </li>
        <li>
          <strong>
            What is the difference between a couch and a sofa set?
          </strong>{" "}
          A sofa set typically includes multiple matching pieces, while a couch
          is a standalone seating option, often more casual in design.
        </li>
        <li>
          <strong>Are sofa cum beds available under &#8377;5,000?</strong> Yes,
          budget-friendly options like folding sofa beds and sofa cum beds under
          &#8377;5,000 are available at Adorefurnix.
        </li>
      </ul>

      <p>
        Upgrade your home with the finest{" "}
        <strong>living room furniture in {location}</strong>. Create a space
        that&rsquo;s cozy, functional, and undeniably stylish with Adorefurnix!
      </p>
    </div>
  );
}
function Bedroomdesc({ location }) {
  return (
    <div>
      <main>
        <header>
          <h1>Bedroom Furniture in Delhi - AdoreFurnix</h1>
          <p>
            At AdoreFurnix, we offer a wide range of bedroom furniture to suit
            every budget and style. Whether you are looking for affordable
            options or luxury designs, our collection includes everything you
            need to transform your space, from beds and wardrobes to bedside
            tables and kids&apos; furniture.
          </p>
        </header>

        <section>
          <h2>Our Bedroom Furniture Collection</h2>
          <ul>
            <li>
              <strong>King Size Beds:</strong> Explore wooden king-size beds
              with hydraulic storage, priced under ₹10,000, with the latest
              designs.
            </li>
            <li>
              <strong>Queen Size Beds:</strong> Find queen-size beds with
              storage options, priced affordably under ₹10,000 or ₹5,000,
              including wooden styles.
            </li>
            <li>
              <strong>Wardrobes:</strong> Browse wooden wardrobes with mirrors,
              second-hand options, and custom designs for sale in Delhi.
            </li>
            <li>
              <strong>Kids&apos; Furniture:</strong> Special beds for boys and
              girls, including beds with study tables, available in various
              locations in Delhi.
            </li>
            <li>
              <strong>Accessories:</strong> Add bedside tables, chest of
              drawers, and dressing tables to complete your bedroom setup.
            </li>
          </ul>
        </section>

        <section>
          <h2>FAQs about Bedroom Furniture in Delhi</h2>
          <dl>
            <dt>Where can I find affordable bedroom furniture in Delhi?</dt>
            <dd>
              At AdoreFurnix, we provide budget-friendly bedroom furniture to
              suit every requirement and style.
            </dd>

            <dt>What is the price range for king-size beds in Delhi?</dt>
            <dd>
              King-size beds at AdoreFurnix start as low as ₹10,000, with
              hydraulic storage options and premium designs available.
            </dd>

            <dt>Are there second-hand wardrobes available?</dt>
            <dd>
              Yes, AdoreFurnix offers a variety of wardrobe options, including
              new and pre-owned styles.
            </dd>

            <dt>What is the minimum size of a single bed?</dt>
            <dd>
              A single bed typically measures 3 feet by 6 feet, making it
              suitable for adults and kids alike.
            </dd>

            <dt>Do you offer kids&apos; furniture in Delhi?</dt>
            <dd>
              Yes, we provide kids&apos; beds, including beds with study tables,
              in various designs for boys and girls.
            </dd>

            <dt>What are the best materials for bedroom furniture?</dt>
            <dd>
              Wooden furniture is a popular choice for its durability and
              timeless design.
            </dd>

            <dt>Are there luxury bedroom sets available?</dt>
            <dd>
              Yes, AdoreFurnix offers luxury bedroom furniture, including
              complete sets with wardrobes and dressing tables.
            </dd>
          </dl>
        </section>

        <section>
          <h2>Shop Online or Visit AdoreFurnix</h2>
          <p>
            Shop bedroom furniture online at AdoreFurnix or visit our store in
            Delhi for a personalized experience. We cater to all your needs,
            whether you&apos;re furnishing a master bedroom, kids&apos; room, or
            guest room.
          </p>
        </section>
      </main>

      <p>
        Visit AdoreFurnix, your trusted destination for bedroom furniture in
        Delhi, and explore our extensive collection.
      </p>
    </div>
  );
}
function Diningdesc({ location }) {
  return <div>Dining</div>;
}
function Tablesdesc({ location }) {
  return <div>Tables</div>;
}
function Storagedesc({ location }) {
  return <div>Storage</div>;
}
function Barfurnituredesc({ location }) {
  return <div>Bar Furniture</div>;
}
function Studyandbookshelfdesc({ location }) {
  return <div>Studyandbookshelf</div>;
}
function Officefurnituredesc({ location }) {
  return <div>Officefurniture</div>;
}
function Homedecorandmoredesc({ location }) {
  return <div>Homedecorandmore</div>;
}

// subcategories
function sofaSets({ location }) {
  console.log("Functionality for Sofa sets");
}

function sofaCumBed({ location }) {
  console.log("Functionality for Sofa cum bed");
}

function wingChairs({ location }) {
  console.log("Functionality for Wing chairs");
}

function ottoman({ location }) {
  console.log("Functionality for Ottoman");
}

function chairs({ location }) {
  console.log("Functionality for Chairs");
}

function kingSizeBed({ location }) {
  console.log("Functionality for King Size Bed");
}

function queenSizeBed({ location }) {
  console.log("Functionality for Queen Size Bed");
}

function singleBed({ location }) {
  console.log("Functionality for Single Bed");
}

function kidsBed({ location }) {
  console.log("Functionality for Kids Bed");
}

function wardrobe({ location }) {
  console.log("Functionality for Wardrobe");
}

function bedsideTable({ location }) {
  console.log("Functionality for Bedside Table");
}

function chestOfDrawers({ location }) {
  console.log("Functionality for Chest of Drawers");
}

function dressingTables({ location }) {
  console.log("Functionality for Dressing Tables");
}

function twoSeaterDiningSet({ location }) {
  console.log("Functionality for 2-Seater Dining Set");
}

function fourSeaterDiningSet({ location }) {
  console.log("Functionality for 4-Seater Dining Set");
}

function sixSeaterDiningSet({ location }) {
  console.log("Functionality for 6-Seater Dining Set");
}

function coffeeTables({ location }) {
  console.log("Functionality for Coffee Tables");
}

function endTables({ location }) {
  console.log("Functionality for End Tables");
}

function consoleTables({ location }) {
  console.log("Functionality for Console Tables");
}

function nestingTables({ location }) {
  console.log("Functionality for Nesting Tables");
}

function shoeRack({ location }) {
  console.log("Functionality for Shoe Rack");
}

function tvAndEntertainmentUnit({ location }) {
  console.log("Functionality for TV and Entertainment Unit");
}

function cabinet({ location }) {
  console.log("Functionality for Cabinet");
}

function bookShelf({ location }) {
  console.log("Functionality for Book Shelf");
}

function crockeryCabinet({ location }) {
  console.log("Functionality for Crockery Cabinet");
}

function barUnits({ location }) {
  console.log("Functionality for Bar Units");
}

function barCabinets({ location }) {
  console.log("Functionality for Bar Cabinets");
}

function barTrolly({ location }) {
  console.log("Functionality for Bar Trolly");
}

function barWallHangingShelf({ location }) {
  console.log("Functionality for Bar Wall hanging Shelf");
}

function barChairsAndStools({ location }) {
  console.log("Functionality for Bar Chairs & Stools");
}

function studyTables({ location }) {
  console.log("Functionality for Study Tables");
}

function computerTables({ location }) {
  console.log("Functionality for Computer Tables");
}

function officeChairs({ location }) {
  console.log("Functionality for Office Chairs");
}

function studyAndLaptopTables({ location }) {
  console.log("Functionality for Study & Laptop Tables");
}

function officeSofa({ location }) {
  console.log("Functionality for Office Sofa");
}

function mirrorFrame({ location }) {
  console.log("Functionality for Mirror Frame");
}

function wallArts({ location }) {
  console.log("Functionality for Wall Arts");
}

function wallHangings({ location }) {
  console.log("Functionality for Wall Hangings");
}

function planters({ location }) {
  console.log("Functionality for Planters");
}

function categorydescr(category, subcategory, city = "{location}") {
  const descriptions = {
    "Living Room": {
      description: `Explore the finest selection of Living Room Furniture in ${location} at Adorefurnix, your go-to destination where quality meets contemporary design. Whether you're searching for plush sofa sets, multifunctional sofa cum beds, or elegant wing chairs, we provide a curated range of premium furniture designed to transform your living space in ${location}. Our collection features luxurious sectional sofas, stylish coffee tables, and media units, perfect for creating a comfortable and visually appealing living room. 
      From modern sofa sets to classic armchairs, we offer something to suit every style, ensuring that your living room reflects your personal taste. Add a touch of sophistication with our stylish ottomans and accent chairs, blending seamlessly with both modern and traditional interiors. Looking for storage solutions? Our range of entertainment units, console tables, and bookshelves offers both functionality and style, helping you keep your living room organized and clutter-free. 
      At Adorefurnix, we prioritize both comfort and aesthetics, offering ergonomic furniture that enhances your relaxation experience. Our recliners and lounge chairs are perfect for unwinding after a long day, while our coffee tables and side tables add the perfect finishing touch to any living room layout. For those in ${location} seeking to create a cozy and inviting atmosphere, we have the perfect mix of modern design and timeless elegance.Shop now to discover the best living room furniture options in ${location} for any home decor, whether you're furnishing a cozy apartment, a spacious family home, or a trendy urban loft. With Adorefurnix, you're guaranteed to find high-quality, stylish furniture that elevates your living space and enhances your lifestyle.`,
      subcategories: {
        "Sofa sets": `Upgrade your living room in ${location} with Adorefurnix’s premium sofa sets. Our collection offers a variety of styles and sizes, ensuring comfort and elegance for any space. Choose from classic, modern, or contemporary designs to match your home decor.`,
        "Sofa cum bed": `Maximize functionality in your living room in ${location} with a versatile sofa cum bed from Adorefurnix. Ideal for small spaces or guest rooms, our sofa beds offer comfort and style, transforming easily from seating to sleeping space.`,
        "Wing chairs": `Add a touch of luxury to your living room in ${location} with our stylish wing chairs. Designed for comfort and aesthetic appeal, these chairs make a perfect statement piece, offering both style and support.`,
        Ottoman: `Complete your living room setup in ${location} with a chic ottoman. Ideal for additional seating, leg rest, or as a coffee table, our ottomans are available in various designs and materials to fit any home decor.`,
        Chairs: `Discover a wide range of living room chairs in ${location} at Adorefurnix. Our collection includes accent chairs, lounge chairs, and more, combining comfort and style to enhance any room in your home.`,
      },
    },
    Bedroom: {
      description: `Redefine your bedroom in ${location} with luxurious and affordable Bedroom Furniture from Adorefurnix. Whether you&apos;re looking for spacious king-size beds, elegant queen-size beds, or practical single beds, we have options for every bedroom in ${location}. Complete your space with stylish wardrobes, bedside tables, chest of drawers, and more.`,
      subcategories: {
        "King Size Bed": `Sleep like royalty in a king-size bed from Adorefurnix in ${location}. Our beds offer ample space, comfort, and elegance, making them the perfect centerpiece for any master bedroom.`,
        "Queen Size Bed": `Bring style and comfort to your bedroom in ${location} with our queen-size beds. Perfect for both spacious and compact rooms, these beds offer a balance of luxury and functionality.`,
        "Single Bed": `Ideal for guest rooms or children&apos;s rooms in ${location}, our single beds offer style and comfort in a compact size. Choose from a variety of designs to suit your home.`,
        "Kids Bed": `Create a fun and functional space for your children with Adorefurnix’s kids&apos; beds in ${location}. Designed with safety and style in mind, our beds are perfect for any child&apos;s room.`,
        Wardrobe: `Organize your bedroom in ${location} with our stylish and spacious wardrobes. Our designs offer plenty of storage while complementing the aesthetics of your room.`,
        "Bedside Table": `Add convenience and style to your bedroom in ${location} with our bedside tables. Perfect for keeping essentials within reach, our tables come in a variety of designs to match any decor.`,
        "Chest of Drawers": `Keep your bedroom in ${location} tidy and organized with a chest of drawers from Adorefurnix. Our range combines functionality with elegance, providing ample storage in a sleek design.`,
        "Dressing Tables": `Complete your bedroom setup in ${location} with a stylish dressing table from Adorefurnix. Our tables offer storage and elegance, perfect for organizing your beauty essentials.`,
      },
    },
    Dining: {
      description: `Elevate your dining experience in ${location} with Adorefurnix’s stylish Dining Furniture. Whether you&apos;re looking for a cozy 2-seater dining set or a spacious 6-seater table, our collection in ${location} offers the perfect blend of comfort and design for your home.`,
      subcategories: {
        "2-Seater Dining Set": `Perfect for small spaces or intimate meals, our 2-seater dining sets in ${location} provide style and comfort in a compact design. Ideal for cozy dining areas.`,
        "4-Seater Dining Set": `Enjoy family meals around a 4-seater dining set from Adorefurnix in ${location}. Our sets offer a perfect balance of style and function for everyday use.`,
        "6-Seater Dining Set": `Host in style with a spacious 6-seater dining set from Adorefurnix in ${location}. Ideal for large families or entertaining guests, these sets are designed for both comfort and elegance.`,
      },
    },
    Tables: {
      description: `Find the perfect table for your home in ${location} with Adorefurnix’s diverse collection. Whether you need a stylish coffee table, a functional end table, or a space-saving nesting table, we offer high-quality designs that complement any decor in ${location}.`,
      subcategories: {
        "Coffee Tables": `Enhance your living room in ${location} with a stylish coffee table from Adorefurnix. Our designs range from minimalist to bold, providing a perfect centerpiece for your space.`,
        "End Tables": `Add functionality and style to your living room in ${location} with our elegant end tables. Perfect for placing lamps, books, or decor, these tables complete your home’s look.`,
        "Console Tables": `Make a statement in your entryway or living room in ${location} with a sleek console table from Adorefurnix. Ideal for decor or storage, these tables combine beauty and function.`,
        "Nesting Tables": `Maximize space and versatility in ${location} with our nesting tables. Perfect for small spaces or as additional surfaces, these tables offer practicality without compromising style.`,
      },
    },
    Storage: {
      description: `Keep your home in ${location} organized and stylish with Adorefurnix’s Storage Furniture. Our collection includes shoe racks, TV units, cabinets, bookshelves, and more, providing smart storage solutions that enhance the aesthetic of any room in ${location}.`,
      subcategories: {
        "Shoe Rack": `Organize your entryway in ${location} with a stylish and functional shoe rack from Adorefurnix. Our designs keep your shoes neatly stored while adding a touch of style to your home.`,
        "Tv and Entertainment Unit": `Create a stylish and functional media center in ${location} with a TV and entertainment unit from Adorefurnix. Our units offer plenty of storage for your electronics and decor.`,
        Cabinet: `Add extra storage and elegance to your home in ${location} with a cabinet from Adorefurnix. Our cabinets are perfect for storing dishes, linens, or decor in style.`,
        "Book Shelf": `Display your books and decor in style with a bookshelf from Adorefurnix in ${location}. Our designs are perfect for organizing and showcasing your collection.`,
        "Crockery Cabinet": `Keep your kitchen or dining room in ${location} organized with a sleek crockery cabinet from Adorefurnix. Our cabinets provide ample storage for your dishes while enhancing the room&apos;s decor.`,
      },
    },
    "Bar Furniture": {
      description: `Transform your home bar or entertainment space in ${location} with Adorefurnix’s exclusive Bar Furniture collection. From bar units to stools, our range in ${location} offers stylish and functional options to create the perfect space for entertaining.`,
      subcategories: {
        "Bar Units": `Elevate your home bar in ${location} with a stylish and functional bar unit from Adorefurnix. Our units provide ample storage for your spirits and glassware, making entertaining a breeze.`,
        "Bar Cabinets": `Keep your bar essentials organized in ${location} with a sleek bar cabinet from Adorefurnix. Our designs offer both storage and style, perfect for any home bar setup.`,
        "Bar Trolly": `Add mobility and style to your home bar in ${location} with a bar trolley from Adorefurnix. Ideal for entertaining, our trolleys offer both functionality and charm.`,
        "Bar Wall hanging Shelf": `Maximize space in your bar area in ${location} with a wall-hanging bar shelf from Adorefurnix. Perfect for storing and displaying your favorite spirits, these shelves are both stylish and practical.`,
        "Bar Chairs & Stools": `Complete your home bar in ${location} with comfortable and stylish bar chairs and stools from Adorefurnix. Designed for both elegance and comfort, our seating options are perfect for entertaining.`,
      },
    },
    "Study and Bookshelf": {
      description: `Create a productive and stylish workspace in ${location} with Adorefurnix’s Study and Bookshelf Furniture. Whether you need a functional study table, a spacious bookshelf, or a sleek computer table, we offer the perfect solutions for your home office in ${location}.`,
      subcategories: {
        "Study Tables": `Enhance your productivity in ${location} with a functional and stylish study table from Adorefurnix. Our tables are designed to provide a comfortable workspace while complementing your home decor.`,
        BookShelf: `Organize your books and decor in ${location} with a stylish bookshelf from Adorefurnix. Our designs offer both storage and display solutions for your home office or living space.`,
        "Computer Tables": `Maximize your home office setup in ${location} with a sleek and functional computer table from Adorefurnix. Our tables provide ample workspace and storage for all your office essentials.`,
      },
    },
    "Office Furniture": {
      description: `Enhance your workspace in ${location} with Adorefurnix’s premium Office Furniture. From ergonomic chairs to sleek desks and cozy office sofas, our collection in ${location} offers everything you need to create a productive and stylish office environment.`,
      subcategories: {
        "Office Chairs": `Stay comfortable and productive in ${location} with an ergonomic office chair from Adorefurnix. Our chairs offer superior support and style for any workspace.`,
        "Study & Laptop Tables": `Upgrade your home office in ${location} with a stylish and functional study or laptop table from Adorefurnix. Our tables are designed to provide a comfortable workspace that fits any room.`,
        "Office Sofas": `Create a comfortable and professional office environment in ${location} with an office sofa from Adorefurnix. Perfect for waiting areas or personal workspaces, our sofas offer both style and comfort.`,
      },
    },
    "Home Decor & More": {
      description: `Add personality and charm to your home in ${location} with Adorefurnix’s Home Decor collection. From mirror frames to wall art and planters, our decorative pieces help transform any room into a stylish and welcoming space in ${location}.`,
      subcategories: {
        "Mirror Frame": `Brighten up any room in ${location} with a stylish mirror frame from Adorefurnix. Our designs add depth and elegance to your home decor.`,
        "Wall Arts": `Make a statement in your home in ${location} with Adorefurnix’s unique wall art. Perfect for adding a personal touch to any room.`,
        "Wall Hangings": `Add a creative touch to your walls in ${location} with decorative wall hangings from Adorefurnix. Our collection features unique designs to complement any decor.`,
        Planters: `Bring a touch of nature into your home in ${location} with stylish planters from Adorefurnix. Perfect for indoor plants, our planters add greenery and style to any space.`,
      },
    },
  };

  if (subcategory) return descriptions[category]?.subcategories[subcategory];
  return descriptions[category]?.description;
}
