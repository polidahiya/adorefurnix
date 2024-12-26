import React from "react";
import Homenavbar from "./Homenavbar";
import Searchbox from "../Searchbox";
import Image from "next/image";
import { HiOutlineTruck, HiOutlineCube, HiOutlineClock } from "react-icons/hi";

function Herosection({ token, userdata, productsname }) {
  return (
    <div>
      {/* top bar */}
      <Topbar />
      {/* herosection */}
      <div className="relative w-full box-content h-fit">
        <Homenavbar userdata={userdata} token={token} />
        {/*  */}
        <div className="absolute top-20 md:top-24 w-full z-10">
          <h2 className="text-2xl md:text-4xl text-center mx-auto text-white w-72 md:w-96">
            <p className="w-full text-start font-recline ">
              Furnish with Love,
            </p>
            <p className="w-full text-end font-recline ">Live with Elegance</p>
          </h2>
          <div className="flex justify-center">
            <div className="w-[90%] max-w-[650px] h-[35px] md:h-[40px] mt-[10px]">
              <Searchbox productsname={productsname} />
            </div>
          </div>
        </div>

        {/* bg image */}
        <Image
          className="w-full  md:h-[100vh] max-h-[600px]  object-cover bg-graygradient top-0 z-[-1] hidden md:inline-block"
          src="/images/desktophomepageimage.webp"
          alt="homepageslide"
          height={1000}
          width={1000}
          layout="responsive"
          priority={true}
        />
        {/* mobile */}
        <Image
          className="w-full  md:h-[100vh] max-h-[600px]  object-cover bg-graygradient top-0 z-[-1] md:hidden"
          src="/images/mobilehomepageimage2.webp"
          alt="homepageslide"
          height={1000}
          width={1000}
          layout="responsive"
          priority={true}
        />
        {/* gradient full*/}
        <div
          className="absolute bottom-0 translate-y-1/2 left-0 w-full h-[10vw] "
          style={{
            backgroundImage:
              "linear-gradient(0deg,transparent, white, transparent)",
          }}
        ></div>
      </div>
    </div>
  );
}

const Topbar = () => {
  return (
    <div className="h-10 w-full flex items-center justify-between md:justify-center gap-1 md:gap-10 text-[10px] md:text-sm px-4 bg-slate-50 lg:px-10">
      <span className="flex items-center gap-1 md:gap-2">
        <HiOutlineTruck /> Pan India Shipping
      </span>
      |
      <span className="flex items-center gap-1 md:gap-2">
        <HiOutlineCube /> Bulk Buy Discounts
      </span>
      |
      <span className="flex items-center gap-1 md:gap-2">
        <HiOutlineClock /> Delivery in 7-15 days
      </span>
    </div>
  );
};

export default Herosection;
