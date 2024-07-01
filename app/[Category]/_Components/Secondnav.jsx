import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categorylist } from "@/app/commondata";
import Pricerange from "./Pricerange";

function Secondnav({ category, selectedsubcat }) {
  return (
    <div className="flex items-start gap-[20px] p-[20px]">
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[5px] ">
        {categorylist[category]?.subcat.map((subcat, i) => {
          return (
            <Link
              href={`/${category}/${subcat.name}`}
              key={i}
              className={`flex items-center justify-between rounded-[10px] h-[50px] border border-slate-300 overflow-hidden ${
                selectedsubcat == subcat.name ? "bg-theme bg-clip-text text-transparent" : ""
              }`}
            >
              <Image
                src={subcat.image}
                width={100}
                height={100}
                alt={subcat.name}
                className="h-full aspect-square object-cover object-center"
              ></Image>
              <div className="h-full w-full flex items-center justify-center text-center px-[10px] text-[14px]">
                {subcat.name}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="h-[60px] self-center w-[1px] bg-slate-300"></div>
      <Pricerange />
    </div>
  );
}

export default Secondnav;
