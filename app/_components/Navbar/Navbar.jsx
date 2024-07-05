import React from "react";
import Link from "next/link";
import Image from "next/image";
import Searchbox from "../Searchbox";
import Cartsvg from "../../_svgs/Cartsvg";
import { Cartproductcount } from "./Publiccomps";
import Navcategories from "./Navcategories";

function Navbar({ params }) {
  const category = params?.Category?.replace(/%20/g, " ")?.replace(/%26/g, "&");

  return (
    <nav className="sticky bg-graygradient top-0 left-0 w-full p-[10px] md:px-[40px] z-40 ">
      <div className="relative flex h-[40px] items-center justify-between ">
        <div className="w-full h-full ">
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
        <div className="w-full h-full ">
          {/* search bar */}
          <Searchbox />
        </div>
        <div className="w-full h-full flex items-center justify-end ">
          <Link
            href="/main/cart"
            className="relative flex items-center justify-center h-full aspect-square "
          >
            <Cartsvg styles="fill-white h-[20px]" />
            <Cartproductcount />
          </Link>
        </div>
      </div>
      {/* categories */}
      <Navcategories category={category}/>
    </nav>
  );
}

export default Navbar;

// ${
//   selectedsubcat == subcat.name
//     ? "bg-theme bg-clip-text text-transparent"
//     : ""
// }
