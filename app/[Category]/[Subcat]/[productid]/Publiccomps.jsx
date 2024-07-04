"use client";
import React from "react";
import { AppContextfn } from "@/app/Context";
import Cartsvg from "@/app/_svgs/Cartsvg";
import Lighteningsvg from "@/app/_svgs/Lighteningsvg";

export function Addtocartbuttons({ filteredproducts, color }) {
  const { setcart } = AppContextfn();
  return (
    <div className="sticky bottom-0 top-[130px] flex gap-[10px] mt-[20px] bg-white">
      <button
        className="flex items-center justify-center gap-[10px] w-full h-[40px] bg-[#ff9f00] text-white"
        onClick={() => {
          const editedproduct = { ...filteredproducts };
          delete editedproduct.desc;
          setcart((pre) => ({
            ...pre,
            [filteredproducts._id + "," + color]: {
              ...editedproduct,
              selectedcolor: color,
              quantity: 1,
            },
          }));
        }}
      >
        <Cartsvg styles="fill-white h-[16px]" /> <span>Add to Cart</span>
      </button>
      <button className="flex items-center justify-center gap-[10px] w-full h-[40px] bg-[#fb641b] text-white">
        <Lighteningsvg styles="fill-white h-[20px]" /> <span>Buy Now</span>
      </button>
    </div>
  );
}
