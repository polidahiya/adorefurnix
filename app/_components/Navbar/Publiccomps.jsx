"use client";
import React from "react";
import { AppContextfn } from "@/app/Context";
import Menusvg from "@/app/_svgs/Menusvg";
import Searchbox from "../Searchbox";
import Searchsvg from "@/app/_svgs/Searchsvg";

export const Cartproductcount = () => {
  const { cart } = AppContextfn();
  let cartlength = 0;
  Object.keys(cart).forEach((item) => {
    cartlength += cart[item].quantity;
  });

  if (Object.keys(cart).length > 0) {
    return (
      <div className="absolute top-0 right-0 h-[15px] aspect-square bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center ">
        {cartlength}
      </div>
    );
  }
};

export const Showmobilecategorymenubutton = () => {
  const { setshowcat, setshowsearch } = AppContextfn();
  return (
    <button
      className="lg:hidden h-full"
      onClick={() => {
        setshowcat((pre) => !pre);
        setshowsearch(false);
      }}
    >
      <Menusvg styles="h-[80%] aspect-square" />
    </button>
  );
};

export const Centralnav = () => {
  const { showsearch } = AppContextfn();
  return (
    <div
      className={`absolute top-[calc(100%+10px)] md:static w-full h-full md:block ${
        showsearch ? "block" : "hidden"
      }`}
    >
      {/* search bar */}
      <Searchbox />
    </div>
  );
};

export const Showsearchbutton = () => {
  const { setshowsearch, searchinputref, setshowcat } = AppContextfn();
  return (
    <button
      className="h-full aspect-square  flex items-center justify-center md:hidden "
      onClick={() => {
        setshowsearch((pre) => !pre);
        setshowcat(false);
        setTimeout(() => {
          searchinputref.current.focus();
        }, 100);
      }}
    >
      <Searchsvg styles="stroke-white h-[70%] aspect-square" />
    </button>
  );
};

export const Exitblackscreen = () => {
  const { showcat, showsearch, setshowsearch, setshowcat } = AppContextfn();
  if (showcat || showsearch) {
    return (
      <div
        className="block lg:hidden fixed top-0 left-0 h-screen w-screen z-[-1]"
        onClick={() => {
          setshowcat(false);
          setshowsearch(false);
        }}
      ></div>
    );
  }
};
