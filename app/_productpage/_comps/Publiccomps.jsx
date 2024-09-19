"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "@/app/Context";
import { FaCartShopping } from "react-icons/fa6";
import { BsLightningChargeFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export function Addtocartbuttons({ filteredproducts, color }) {
  const router = useRouter();

  const { cart, setcart, setmessagefn } = AppContextfn();
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
          // check available
          if (!filteredproducts.available) {
            setmessagefn("Product is not available");
            return;
          }
          //
          if (availableincart) {
            router.push("/cart");
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
          setmessagefn("Added to Cart");
        }}
      >
        <FaCartShopping className="text-[20px]" />{" "}
        <span>{availableincart ? "Go" : "Add"} to Cart</span>
      </button>
      <button
        className="flex items-center justify-center gap-[10px] w-full h-[40px] bg-[#fb641b] text-white"
        onClick={() => {
          // check available
          if (!filteredproducts.available) {
            setmessagefn("Product is not available");
            return;
          }
          //
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

          router.push("/cart");
        }}
      >
        
        <BsLightningChargeFill className="text-[20px]" /> <span>Buy Now</span>
      </button>
    </div>
  );
}
