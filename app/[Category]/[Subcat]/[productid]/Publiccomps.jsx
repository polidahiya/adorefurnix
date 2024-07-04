"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "@/app/Context";
import Cartsvg from "@/app/_svgs/Cartsvg";
import Lighteningsvg from "@/app/_svgs/Lighteningsvg";
import { useRouter } from "next/navigation";

export function Addtocartbuttons({ filteredproducts, color }) {
  const router = useRouter();

  const { cart, setcart } = AppContextfn();
  const [availableincart, setavailableincart] = useState(false);

  useEffect(() => {
    Object.keys(cart).forEach((item) => {
      const [id, selectedcolor] = item.split(",");
      if (filteredproducts._id == id && color == selectedcolor) {
        setavailableincart(true);
      }
    });
  }, [cart]);

  return (
    <div className="sticky bottom-0 top-[130px] flex gap-[10px] mt-[20px] bg-white">
      <button
        className="flex items-center justify-center gap-[10px] w-full h-[40px] bg-[#ff9f00] text-white"
        onClick={() => {
          if (availableincart) {
            router.push("/main/cart");
            return;
          }
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
        <Cartsvg styles="fill-white h-[16px]" />{" "}
        <span>{availableincart ? "Go" : "Add"} to Cart</span>
      </button>
      <button
        className="flex items-center justify-center gap-[10px] w-full h-[40px] bg-[#fb641b] text-white"
        onClick={() => {
          if (!availableincart) {
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
          }

          router.push("/main/cart");
        }}
      >
        <Lighteningsvg styles="fill-white h-[20px]" /> <span>Buy Now</span>
      </button>
    </div>
  );
}
