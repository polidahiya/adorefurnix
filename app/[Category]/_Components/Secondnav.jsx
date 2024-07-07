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
      {/* price range */}
      <div className="bg-bg1 p-[10px] ">
        <h2 className="text-center font-bold text-[25px] md:text-[25px] flex items-center justify-center gap-[10px]">
          <Filtericon styles="h-[20px] aspect-square" />
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
      <div className="w-full grid grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center place-content-center gap-[5px] mt-[20px]">
        {categorylist[category]?.subcat.map((itemsubcat, i) => {
          return (
            <Link
              key={i}
              href={`/${category}/${itemsubcat.name}`}
              className={`w-full md:w-[150px] flex flex-col items-center rounded-[5px] md:rounded-[10px]  ${
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

function Filtericon({ styles }) {
  return (
    <svg
      className={styles}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <g fill="#000" fillRule="evenodd" clipRule="evenodd">
            <path d="M7.75 17.5a.75.75 0 00-.75-.75H2a.75.75 0 000 1.5h5a.75.75 0 00.75-.75z"></path>
            <path d="M16.25 6.5a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75z"></path>
            <path d="M22.75 17.5a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h9a.75.75 0 00.75-.75z"></path>
            <path d="M1.25 6.5A.75.75 0 012 5.75h9a.75.75 0 010 1.5H2a.75.75 0 01-.75-.75z"></path>
            <path d="M6.25 15.5c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0112 21.25H8a1.75 1.75 0 01-1.75-1.75v-4zM8 15.25a.25.25 0 00-.25.25v4c0 .138.112.25.25.25h4a.25.25 0 00.25-.25v-4a.25.25 0 00-.25-.25H8z"></path>
            <path d="M17.75 4.5A1.75 1.75 0 0016 2.75h-4a1.75 1.75 0 00-1.75 1.75v4c0 .966.784 1.75 1.75 1.75h4a1.75 1.75 0 001.75-1.75v-4zM16 4.25a.25.25 0 01.25.25v4a.25.25 0 01-.25.25h-4a.25.25 0 01-.25-.25v-4a.25.25 0 01.25-.25h4z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Secondnav;
