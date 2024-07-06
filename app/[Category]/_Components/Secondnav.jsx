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
      <div className="w-full grid grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center place-content-center gap-[5px] ">
        {categorylist[category]?.subcat.map((itemsubcat, i) => {
          return (
            <Link
              href={`/${category}/${itemsubcat.name}`}
              key={i}
              className={` md:w-[150px] flex flex-col items-center rounded-[5px] md:rounded-[10px] overflow-hidden border border-slate-300 shadow-md ${
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
                className="w-full aspect-[4/3] object-cover object-center"
              ></Image>
              <div className="h-full w-full  text-center p-[5px]  text-[14px] text-ellipsis whitespace-nowrap overflow-hidden">
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
              className={`flex items-center justify-center border border-slate-300  py-[5px] md:px-[5px] text-[14px] md:text-[16px] rounded-[5px] md:rounded-[10px] ${
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
