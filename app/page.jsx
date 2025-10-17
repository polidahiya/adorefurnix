import React from "react";
import Blogscomp from "./_components/Homepage/Blogscomp";
import Promices from "./_components/Homepage/Promices";
import Bestselling from "./_components/Homepage/Bestselling";
import Categories from "./_components/Homepage/Categories";
import { Cachedproducts } from "./_serveractions/Getcachedata";
import Footer from "./_components/Footer";
import Newarrival from "./_components/Homepage/Newarrival";
import { cookies } from "next/headers";
import Allproducts from "./_components/Homepage/Allproducts";
import Roundcategories from "./_components/Homepage/Roundcategories";
import Citiesdescription from "./_components/Homepage/Citiesdescription";
import Herosection from "./_components/Homepage/Herosection";
import Reviews from "./_components/Homepage/Reviews";
import Comp1 from "./_components/Homepage/Comp1";

// import Blackfridaybanner from "./_components/Homepage/Blackfridaybanner";
// import Posters from "./_components/Homepage/Posters";

export default async function Home({ searchParams }) {
  const allcookies = cookies();
  const token = allcookies?.get("token")?.value;
  const userdata = allcookies?.get("userdata")?.value;

  const products = await Cachedproducts();

  const comp1productslist = [
    "68cd1f46cdd9963d24f58d10",
    "68cd2072546b3a8deddc5491",
    "68f09256232ab81da129d4b1",
  ];
  let comp1products = [];
  const productsname = products?.map((item) => {
    if (comp1productslist.includes(item._id)) {
      comp1products.push(item);
    }
    return item?.name;
  });
  return (
    <div className="flex flex-col gap-16 lg:gap-20">
      <Herosection
        token={token}
        userdata={userdata}
        productsname={productsname}
      />
      <Roundcategories />
      {/* <Blackfridaybanner /> */}
      {/* <Posters /> */}
      <Categories />
      <Newarrival products={products} />
      {/* <Comp1 comp1products={comp1products}/> */}
      <Bestselling products={products} />
      <Allproducts products={products.sort(() => Math.random() - 0.5)} />
      <Reviews />
      <Blogscomp />
      <div>
        <h2 className="text-center font-bold text-2xl md:text-4xl  font-recline">
          Why Choose Us?
        </h2>
        <Promices />
      </div>
      <Citiesdescription city={searchParams?.location} />
      <Footer />
    </div>
  );
}
