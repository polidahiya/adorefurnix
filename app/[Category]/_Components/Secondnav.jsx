import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categorylist, filterlist } from "@/app/commondata";

function Secondnav({ category, subcat, searchParams }) {
  if (searchParams.pricerange == undefined) {
    searchParams.pricerange = 0;
  }

  return (
    <div className="p-[10px]">
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[5px] ">
        {categorylist[category]?.subcat.map((itemsubcat, i) => {
          return (
            <Link
              href={`/${category}/${itemsubcat.name}`}
              key={i}
              className={`flex items-center justify-between rounded-[10px] h-[50px] border border-slate-300 overflow-hidden ${
                subcat == itemsubcat.name
                  ? "bg-theme bg-clip-text text-transparent"
                  : ""
              }`}
            >
              <Image
                src={itemsubcat.image}
                width={100}
                height={100}
                alt={itemsubcat.name}
                className="h-full aspect-square object-cover object-center"
              ></Image>
              <div className="h-full w-full flex items-center justify-center text-center px-[10px] text-[14px]">
                {itemsubcat.name}
              </div>
            </Link>
          );
        })}
      </div>
      {/* price range */}
      <div className="min-w-[370px] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[5px] mt-[10px]">
        {filterlist.map((item, i) => {
          return (
            <Link
              key={i}
              href={`/${
                category + (subcat ? "/" + subcat : "")
              }?pricerange=${i}`}
              className={`flex items-center justify-center border border-slate-300  p-[5px] rounded-[10px] ${
                i == searchParams.pricerange
                  ? "bg-theme bg-clip-text text-transparent "
                  : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Secondnav;
