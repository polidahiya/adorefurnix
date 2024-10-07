import React from "react";
import Blogscomp from "./_components/Homepage/Blogscomp";
import Promices from "./_components/Homepage/Promices";
import Bestselling from "./_components/Homepage/Bestselling";
// import Collage from "./_components/Homepage/Collage";
// import Animation from "./_components/Homepage/Animation";
import Categories from "./_components/Homepage/Categories";
import Searchbox from "./_components/Searchbox";
import { Cachedproducts } from "./_serveractions/Getcachedata";
import Homenavbar from "./_components/Homepage/Homenavbar";
import Footer from "./_components/Footer";
import Newarrival from "./_components/Homepage/Newarrival";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const token = cookies()?.get("token")?.value;
  const userdata = cookies()?.get("userdata")?.value;

  const products = await Cachedproducts();
  const productsname = products?.map((item) => item?.name);
  return (
    <div>
      <div className="relative w-full box-content h-fit " id="home">
        <Homenavbar userdata={userdata} token={token} />
        {/*  */}
        <div className="absolute top-[25%] md:top-[20%] w-full z-10">
          <h2 className="text-[3vw] text-center mx-auto italic text-white font-serif">
            Furnish with Love, Live with Elegance
          </h2>
          <center>
            <div className="w-[70%] max-w-[650px] h-[35px] md:h-[40px] mt-[10px]">
              <Searchbox productsname={productsname} />
            </div>
          </center>
        </div>

        {/* bg image */}
        <Image
          className="w-full  md:h-[100vh]  object-cover top-0 z-[-1] hidden md:inline-block"
          src="/images/pullokkaran-banner-01.jpg"
          alt="homepageslide"
          height={1000}
          width={1000}
        />
        {/* mobile */}
        <Image
          className="w-full  md:h-[100vh]  object-cover top-0 z-[-1] md:hidden"
          src="/images/mobilehomepageimage.jpg"
          alt="homepageslide"
          height={1000}
          width={1000}
        />
        {/* gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-[10vw] z-[1]"
          style={{
            backgroundImage: "linear-gradient(0deg, white, transparent)",
          }}
        ></div>
      </div>

      <Categories />
      {/* <Collage /> */}
      <Newarrival Cachedproducts={Cachedproducts} />
      <Bestselling Cachedproducts={Cachedproducts} />
      <Blogscomp />
      <div>
        <h2 className="text-center font-bold text-3xl md:text-4xl italic font-serif mt-24 ">
          Why Choose Us?
        </h2>
        <Promices />
      </div>

      <Footer />
    </div>
  );
}

// const categories = [
//   { name: 'Living Room', image: '/images/pullokkaran-banner-01.jpg' },
//   { name: 'Bedroom', image: '/images/pullokkaran-banner-01.jpg' },
//   { name: 'Dining', image: '/images/pullokkaran-banner-01.jpg' },
//   { name: 'Office', image: '/images/pullokkaran-banner-01.jpg' },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="py-12 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-8">Shop by Categories</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
//         {categories.map((category) => (
//           <div key={category.name} className="relative group">
//             <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded-lg shadow-lg" />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//               <h3 className="text-white text-xl font-semibold">{category.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };
