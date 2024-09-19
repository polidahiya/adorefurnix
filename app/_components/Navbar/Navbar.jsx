import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cartproductcount,
  Showmobilecategorymenubutton,
  Centralnav,
} from "./Publiccomps";
import Navcategories from "./Navcategories";
import {
  Showsearchbutton,
  Exitblackscreen,
  Logedinusermenu,
} from "./Publiccomps";
import { FaCartShopping } from "react-icons/fa6";
import { Mobilebackbutton } from "./Publiccomps";

function Navbar({ params, productsname, token, userdata }) {
  const slug = params?.Category;

  const category = slug && slug[0] ? decodeURIComponent(slug[0]) : null;

  return (
    <nav className="sticky bg-graygradient top-0 left-0 w-full p-[10px] lg:px-[40px] z-40">
      <div className="relative flex h-[40px] items-center justify-between ">
        {/* firstcomp */}
        <div className="flex items-center gap-0 md:gap-[10px] w-full h-full">
          <Showmobilecategorymenubutton />
          <Showsearchbutton />
          <Link
            href="/"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px] md:static md:flex  md:translate-x-0 md:translate-y-0 md:h-full md:w-fit "
          >
            <Image
              className=" w-auto h-full "
              src="/logo3.png"
              alt="adorefurnix logo"
              height={50}
              width={200}
            ></Image>
          </Link>
        </div>
        {/* searchbar */}
        <Centralnav productsname={productsname} />

        {/* third comp */}
        <div className="w-full h-full flex items-center justify-end gap-0 md:gap-[10px]">
          <Link
            href="/cart"
            className="relative flex items-center justify-center h-full aspect-square "
          >
            <FaCartShopping className="text-[25px] text-white " />
            <Cartproductcount />
          </Link>
          <Logedinusermenu userdata={userdata} token={token} />
        </div>
        <Exitblackscreen />
      </div>
      {/* categories */}
      <Navcategories category={category} />

      {/* backbutton */}
      <Mobilebackbutton />
    </nav>
  );
}

export default Navbar;
