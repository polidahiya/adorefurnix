"use client";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "@/app/Context";
import { FaCartShopping } from "react-icons/fa6";
import { BsLightningChargeFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function Addtocartbuttons({ filteredproducts, color }) {
  const router = useRouter();
  const { cart, setcart, setmessagefn } = AppContextfn();
  const [availableincart, setavailableincart] = useState(false);
  console.log(cart);

  useEffect(() => {
    const itemKey = `${filteredproducts._id},${color}`;
    setavailableincart(!!cart[itemKey]);
  }, [cart, filteredproducts._id, color]);

  const updateCart = () => {
    const editedproduct = { ...filteredproducts };
    delete editedproduct?.desc;
    delete editedproduct?.available;
    delete editedproduct?.keywords;

    const itemKey = `${filteredproducts._id},${color}`;
    const cartdata = {
      ...cart,
      [itemKey]: {
        ...editedproduct,
        selectedcolor: color,
        quantity: 1,
      },
    };

    Cookies.set("cart", JSON.stringify(cartdata), { expires: 7 });
    setcart(cartdata);
  };

  const Addtocart = () => {
    if (!filteredproducts.available) {
      setmessagefn("Product is not available");
      return;
    }

    if (availableincart) {
      router.push("/cart");
      return;
    }

    updateCart();
    setmessagefn("Added to Cart");
  };

  const Buynow = () => {
    if (!filteredproducts.available) {
      setmessagefn("Product is not available");
      return;
    }

    if (!availableincart) {
      updateCart();
    }

    router.push("/cart");
  };

  return (
    <div className="sticky bottom-0 top-[130px] flex gap-[10px] mt-[20px] bg-white">
      <button
        className="flex items-center justify-center gap-[10px] w-full h-[40px] bg-[#ff9f00] text-white"
        onClick={Addtocart}
      >
        <FaCartShopping className="text-[20px]" />
        <span>{availableincart ? "Go" : "Add"} to Cart</span>
      </button>
      <button
        className="flex items-center justify-center gap-[10px] w-full h-[40px] bg-[#fb641b] text-white"
        onClick={Buynow}
      >
        <BsLightningChargeFill className="text-[20px]" />
        <span>Buy Now</span>
      </button>
    </div>
  );
}
