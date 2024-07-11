import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cartsvg from "../../_svgs/Cartsvg";
import { Cartproductcount, Showmobilecategorymenubutton } from "./Publiccomps";
import Navcategories from "./Navcategories";
import { Centralnav } from "./Publiccomps";
import { Showsearchbutton } from "./Publiccomps";
import { Exitblackscreen } from "./Publiccomps";
import { Logedinusermenu } from "./Publiccomps";

function Navbar({ params, productsname, token, userdata }) {
  const category = params?.Category?.replace(/%20/g, " ")?.replace(/%26/g, "&");

  return (
    <nav className="sticky bg-graygradient top-0 left-0 w-full p-[10px] md:px-[40px] z-40">
      <div className="relative flex h-[40px] items-center justify-between ">
        {/* firstcomp */}
        <div className="flex items-center gap-[10px] w-full h-full">
          <Showmobilecategorymenubutton />
          <Link href="/" className="h-full w-fit flex ">
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
          <Showsearchbutton />
          <Link
            href="/main/cart"
            className="relative flex items-center justify-center h-full aspect-square "
          >
            <Cartsvg styles="fill-white h-[20px]" />
            <Cartproductcount />
          </Link>
          <Logedinusermenu userdata={userdata} token={token} />
        </div>
        <Exitblackscreen />
      </div>
      {/* categories */}
      <Navcategories category={category} />
    </nav>
  );
}

export default Navbar;
