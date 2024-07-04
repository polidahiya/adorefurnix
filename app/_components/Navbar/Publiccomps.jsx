"use client";
import React from "react";
import { AppContextfn } from "@/app/Context";

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
