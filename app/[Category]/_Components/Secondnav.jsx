import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categorylist, filterlist } from "@/app/commondata";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";

function Secondnav({ category, subcat, searchParams }) {
  if (searchParams.pricerange == undefined) {
    searchParams.pricerange = 0;
  }
  const categoryarray = Object.keys(categorylist);
  const currentcategoryindex = categoryarray.indexOf(category);

  const forwardlink = `/${
    currentcategoryindex == categoryarray.length - 1
      ? categoryarray[0]
      : categoryarray[currentcategoryindex + 1]
  }`;
  
  const backbardlink = `/${
    currentcategoryindex == 0
      ? categoryarray[categoryarray.length - 1]
      : categoryarray[currentcategoryindex - 1]
  }`;

  return (
    <div className="p-[10px]">
      <div className=" relative flex items-center justify-end h-[40px] bg-white lg:hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 ">
          <Link href={backbardlink}>
            <IoMdArrowDropleft className=" h-[40px] w-[40px]" />
          </Link>
          <span className="text-center text-[20px] font-semibold font-serif italic whitespace-nowrap">
            {category}
          </span>
          <Link href={forwardlink}>
            <IoMdArrowDropright className=" h-[40px] w-[40px]" />
          </Link>
        </div>
        <div></div>
      </div>
      {/* price range */}
      <div className="bg-bg1 p-[10px] mt-[10px] lg:mt-0">
        <h2 className="text-center font-bold text-[25px] md:text-[25px] flex items-center justify-center gap-[10px]">
          <VscSettings />
          <span> Filters</span>
        </h2>

        <div className="min-w-[370px] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[5px] mt-[10px] ">
          {filterlist.map((item, i) => {
            return (
              <div
                key={i}
                className="bg-white border border-slate-300 rounded-[5px] md:rounded-[10px]"
              >
                <Link
                  href={`/${
                    category + (subcat ? "/" + subcat : "")
                  }?pricerange=${i}`}
                  className={`flex items-center justify-center  py-[5px] md:px-[5px] text-[14px] md:text-[16px]  ${
                    i == searchParams.pricerange
                      ? "bg-theme bg-clip-text text-transparent "
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* subcategories */}
      <div className="w-full grid grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center place-content-center gap-[5px] mt-[20px]">
        {categorylist[category]?.subcat.map((itemsubcat, i) => {
          return (
            <Link
              key={i}
              href={`/${category}/${itemsubcat.name}`}
              className={`w-full md:w-[150px] flex flex-col items-center rounded-[5px] md:rounded-[10px]  ${
                subcat == itemsubcat.name &&
                "bg-theme bg-clip-text text-transparent"
              }`}
            >
              <Image
                src={itemsubcat.image}
                width={100}
                height={100}
                alt={itemsubcat.name}
                className="w-full aspect-[4/3] object-cover object-center rounded-[5px] md:rounded-[10px]"
              ></Image>
              <div className="h-full w-full  text-center p-[5px]  text-[14px] text-ellipsis whitespace-nowrap overflow-hidden">
                {itemsubcat.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Secondnav;
