"use client";
import React, { useState } from "react";
import Link from "next/link";
import { categorylist, filterlist, sortinglist } from "@/app/commondata";
import { FaChevronRight } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";
import { TbSortAscendingSmallBig } from "react-icons/tb";
import { AppContextfn } from "@/app/Context";

function Secondnav({ category, subcat, searchParams }) {
  const { setshowcat } = AppContextfn();

  if (searchParams.pricerange == undefined) searchParams.pricerange = 0;
  if (searchParams.sort == undefined) searchParams.sort = 0;

  const [showfilter, setshowfilter] = useState(false);

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

  // filter link

  const generateLink = (params) => {
    const { category, subcat, searchParams } = params;
    const basePath = `/${category}${subcat ? "/" + subcat : ""}`;
    const queryParams = new URLSearchParams(searchParams).toString();

    return `${basePath}?${queryParams}`;
  };

  const filterlink = (priceRange) => {
    return generateLink({
      category,
      subcat,
      searchParams: {
        ...searchParams,
        pricerange: priceRange,
      },
    });
  };

  const sortlink = (sortOrder) => {
    return generateLink({
      category,
      subcat,
      searchParams: {
        ...searchParams,
        sort: sortOrder,
      },
    });
  };

  return (
    <div className="lg:w-[300px]  p-[10px]">
      {/* mobile backbutton */}
      <div className=" relative flex items-center justify-end h-[40px] bg-white lg:hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 ">
          <Link href={backbardlink}>
            <FaChevronRight className=" h-[40px] w-[40px] p-[13px] rotate-180" />
          </Link>
          <span
            className="text-center text-[20px] font-semibold font-serif italic whitespace-nowrap select-none"
            onClick={() => {
              setshowcat(true);
            }}
          >
            {category}
          </span>
          <Link href={forwardlink}>
            <FaChevronRight className=" h-[40px] w-[40px] p-[13px] " />
          </Link>
        </div>

        <button
          className="h-full aspect-square text-[20px] grid place-content-center rounded-full text-white bg-theme"
          onClick={() => {
            setshowfilter((pre) => !pre);
          }}
        >
          <VscSettings />
        </button>
      </div>
      <section
        className={`flex flex-col md:flex-row lg:flex-col md:gap-[10px] lg:gap-0 fixed lg:static bottom-0 left-0 w-full z-50 bg-white p-[10px] lg:p-0 duration-300 ${
          showfilter ? "translate-y-0" : " translate-y-full lg:translate-y-0"
        }`}
        onClick={() => {
          setshowfilter(false);
        }}
      >
        {/* price range */}
        <div className="w-full bg-bg1 p-[10px] mt-[10px] lg:mt-0">
          <h2 className="text-center font-bold text-[20px] flex items-center justify-center gap-[10px]">
            <VscSettings />
            <span>Price Range</span>
          </h2>

          <div className="flex flex-col gap-[5px] mt-[10px] ">
            {filterlist.map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-300 rounded-[5px] md:rounded-[10px]"
                >
                  <Link
                    href={filterlink(i)}
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

        {/* sorting */}
        <div className="w-full bg-bg1 p-[10px] mt-[10px] ">
          <h2 className="text-center font-bold text-[20px] flex items-center justify-center gap-[10px]">
            <TbSortAscendingSmallBig />
            <span>Sort</span>
          </h2>

          <div className="flex flex-col gap-[5px] mt-[10px] ">
            {sortinglist.map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-300 rounded-[5px] md:rounded-[10px]"
                >
                  <Link
                    href={sortlink(i)}
                    className={`flex items-center justify-center  py-[5px] md:px-[5px] text-[14px] md:text-[16px]  ${
                      i == searchParams.sort
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
      </section>
      {/* blackscreen */}
      {showfilter && (
        <div
          className="fixed top-0 left-0 h-full w-full bg-black opacity-40 z-40 lg:hidden"
          onClick={() => {
            setshowfilter(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default Secondnav;
