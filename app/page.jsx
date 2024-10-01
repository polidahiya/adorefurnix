import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blogscomp from "./_components/Homepage/Blogscomp";
import Promices from "./_components/Homepage/Promices";
import Bestselling from "./_components/Homepage/Bestselling";
import Collage from "./_components/Homepage/Collage";
import Categories from "./_components/Homepage/Categories";
import Searchbox from "./_components/Searchbox";
import { FaCartShopping } from "react-icons/fa6";
import { Cachedproducts } from "./_serveractions/Getcachedata";
import { Cartproductcount } from "./_components/Navbar/Publiccomps";
import { Logedinusermenu } from "./_components/Navbar/Publiccomps";
import Footer from "./_components/Footer";
import { cookies } from "next/headers";

export default async function Home() {
  const token = cookies()?.get("token")?.value;
  const userdata = cookies()?.get("userdata")?.value;

  const products = await Cachedproducts();
  const productsname = products?.map((item) => item?.name);
  return (
    <div>
      <div className="relative w-full box-content h-fit " id="home">
        <Navbar userdata={userdata} token={token} />
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
        <img
          className="w-full  md:h-[100vh]  object-cover top-0 z-[-1] hidden md:inline-block"
          src="/images/pullokkaran-banner-01.jpg"
          alt="homepageslide"
          height={1000}
          width={1000}
        ></img>
        {/* mobile */}
        <img
          className="w-full  md:h-[100vh]  object-cover top-0 z-[-1] md:hidden"
          src="/images/mobilehomepageimage.jpg"
          alt="homepageslide"
          height={1000}
          width={1000}
        ></img>
        {/* gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-[10vw] z-[1]"
          style={{
            backgroundImage: "linear-gradient(0deg, white, transparent)",
          }}
        ></div>
      </div>

      <Categories />

      <Bestselling />
      <Collage />
      <Blogscomp />
      <div>
        <h2 className="text-center font-bold text-[25px] md:text-[40px] italic font-serif mt-24 ">
          Why Choose Us?
        </h2>
        <Promices />
      </div>

      <Footer />
    </div>
  );
}

function Navbar({ userdata, token }) {
  return (
    <nav className="absolute top-0 left-0 h-[40px] w-full flex items-center justify-between px-[10px] md:px-[40px] mt-[10px] md:mt-[20px] z-20 ">
      <Image
        className="h-[30px] w-auto md:h-[40px] "
        src="/logo3.png"
        alt="adorefurnix logo"
        height={50}
        width={200}
      ></Image>
      <ul className="absolute hidden md:flex top-0 left-[50%] translate-x-[-50%] h-full items-center justify-center gap-[50px] text-[18px] text-white">
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
          href="#home"
        >
          Home
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
          href="/Blogs"
        >
          Blogs
        </Link>
        <Link
          className="text-white hover:bg-clip-text hover:text-transparent hover:font-bold hover:bg-theme"
          href="#categories"
        >
          Categories
        </Link>
      </ul>
      <div className="flex items-center justify-end gap-[10px] h-full ">
        <Link
          href="/cart"
          className="relative flex items-center justify-center h-full aspect-square "
        >
          <FaCartShopping className="text-[25px] text-white " />

          <Cartproductcount />
        </Link>
        <Logedinusermenu userdata={userdata} token={token} />
      </div>
    </nav>
  );
}
