import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categorylist } from "../../commondata";
import Searchbox from "../Searchbox";
import Cartsvg from "../../_svgs/Cartsvg";
import { Cartproductcount } from "./Publiccomps";

function Navbar({ params }) {
  const category = params?.Category?.replace(/%20/g, " ")?.replace(/%26/g, "&");

  return (
    <nav className="sticky bg-graygradient top-0 left-0 w-full p-[10px] md:px-[40px] z-40 ">
      <div className="relative flex h-[40px] items-center justify-between ">
        <div className="w-full h-full ">
          <Link href="/">
            <Image
              className=" w-auto h-[40px] "
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
      <div className="flex items-center justify-between mt-[20px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <Link
              key={i}
              href={"/" + item}
              className={` text-white px-[20px] py-[5px] rounded-full text-[14px] whitespace-nowrap ${
                category == item ? "bg-theme " : ""
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
