"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navcategories from "./Navcategories";
import Animatingmobilenemubutton from "./_comps/Animatingmobilenemubutton";
import Logedinusermenu from "./_comps/Logedinusermenu";
import { FaCartShopping } from "react-icons/fa6";
import { AppContextfn } from "@/app/Context";
import { FiSearch } from "react-icons/fi";
import Searchbox from "../Searchbox";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

function Navbar({ params, productsname, token, userdata }) {
  const router = useRouter();
  const slug = params?.Category;
  const category =
    slug && slug[0] ? decodeURIComponent(slug[0]).replace(/_/g, " ") : null;

  const { showsearch, setshowsearch, showcat, setshowcat, searchinputref } =
    AppContextfn();

  useEffect(() => {
    const hidemenu2 = () => {
      setshowcat(false);
      setshowsearch(false);
    };
    window.addEventListener("popstate", hidemenu2);
    return () => {
      window.removeEventListener("popstate", hidemenu2);
    };
  }, []);

  return (
    <nav className="sticky bg-graygradient top-0 left-0 w-full p-[10px] lg:px-[40px] z-40">
      <div className="relative flex h-[40px] items-center justify-between ">
        {/* firstcomp */}
        <div className="flex items-center gap-0 md:gap-[10px] w-full h-full">
          <Animatingmobilenemubutton setshowsearch={setshowsearch} />
          {/* search button */}
          <button
            className="h-full aspect-square  flex items-center justify-center md:hidden "
            onClick={() => {
              history.pushState(null, "", "");
              setshowsearch(true);
              setTimeout(() => {
                searchinputref.current.focus();
              }, 100);
            }}
          >
            <FiSearch className="h-full text-[25px] text-white aspect-square " />
          </button>
          {/* logo */}
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
        <div
          className={`absolute top-[calc(100%+20px)] md:static w-full h-full lg:min-w-[500px] md:block lg:z-20 ${
            showsearch ? "block z-40" : "hidden"
          }`}
        >
          <Searchbox productsname={productsname} />
        </div>

        {/* third comp */}
        <div className="w-full h-full flex items-center justify-end gap-[5px] md:gap-[10px]">
          {/* cart */}
          <Cartlink />

          {/* loged in user menu */}
          <Logedinusermenu userdata={userdata} token={token} />
        </div>
        {/* exit back screen */}
        {(showcat || showsearch) && (
          <div
            className="block lg:hidden fixed top-0 left-0 bg-black opacity-40 h-screen w-screen z-30"
            onClick={() => {
              window.history.back();
            }}
          ></div>
        )}
      </div>
      {/* categories */}
      <Navcategories category={category} />

      {/* backbutton */}
      {!showsearch && (
        <button
          className="absolute bottom-0 left-[10px] translate-y-[calc(100%+10px)] h-[40px] aspect-square bg-theme rounded-full text-[20px] text-white grid place-content-center lg:hidden"
          onClick={() => {
            router.back();
          }}
        >
          <IoMdArrowRoundBack />
        </button>
      )}
    </nav>
  );
}

export const Cartlink = () => {
  const { cart } = AppContextfn();
  let cartlength = 0;
  Object.keys(cart).forEach((item) => {
    cartlength += cart[item].quantity;
  });

  return (
    <Link
      href="/cart"
      className="relative flex items-center justify-center h-full aspect-square "
    >
      <FaCartShopping className="text-[25px] text-white " />
      {Object.keys(cart).length > 0 && (
        <div className="absolute top-0 right-0 h-[15px] aspect-square bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center ">
          {cartlength}
        </div>
      )}
    </Link>
  );
};

export default Navbar;
