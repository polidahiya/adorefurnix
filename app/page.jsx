import React from "react";
import Blogscomp from "./_components/Homepage/Blogscomp";
import Promices from "./_components/Homepage/Promices";
import Bestselling from "./_components/Homepage/Bestselling";
import Categories from "./_components/Homepage/Categories";
import Searchbox from "./_components/Searchbox";
import { Cachedproducts } from "./_serveractions/Getcachedata";
import Homenavbar from "./_components/Homepage/Homenavbar";
import Footer from "./_components/Footer";
import Newarrival from "./_components/Homepage/Newarrival";
import { cookies } from "next/headers";
import Image from "next/image";
import Allproducts from "./_components/Homepage/Allproducts";
import Roundcategories from "./_components/Homepage/Roundcategories";
// import Posters from "./_components/Homepage/Posters";

export default async function Home() {
  const token = cookies()?.get("token")?.value;
  const userdata = cookies()?.get("userdata")?.value;

  const products = await Cachedproducts();
  const productsname = products?.map((item) => item?.name);
  return (
    <div>
      <div className="relative w-full box-content h-fit">
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
          className="w-full  md:h-[100vh] max-h-[600px]  object-cover top-0 z-[-1] hidden md:inline-block"
          src="/images/pullokkaran-banner-01.jpg"
          alt="homepageslide"
          height={1000}
          width={1000}
        />
        {/* mobile */}
        <Image
          className="w-full  md:h-[100vh] max-h-[600px]  object-cover top-0 z-[-1] md:hidden"
          src="/images/mobilehomepageimage.jpg"
          alt="homepageslide"
          height={1000}
          width={1000}
        />
        {/* gradient full*/}
        <div
          className="absolute bottom-0 translate-y-1/2 left-0 w-full h-[10vw] z-10"
          style={{
            backgroundImage:
              "linear-gradient(0deg,transparent, white, transparent)",
          }}
        ></div>
      </div>
      <Roundcategories />
      {/* <Posters /> */}
      <Categories />
      <Newarrival products={products} />
      <Bestselling products={products} />
      <Allproducts products={products.sort(() => Math.random() - 0.5)} />
      <Blogscomp />
      <div>
        <h2 className="text-center font-bold text-2xl md:text-4xl italic font-serif mt-24 ">
          Why Choose Us?
        </h2>
        <Promices />
      </div>
      <Footer />
    </div>
  );
}
