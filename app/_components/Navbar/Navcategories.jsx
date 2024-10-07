"use client";
import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
import Image from "next/image";
import { AppContextfn } from "@/app/Context";

function Navcategories({ category }) {
  const { showcat, setshowcat } = AppContextfn();

  return (
    <div
      className={`fixed bottom-0 left-0 lg:static w-full bg-white lg:bg-transparent grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] lg:flex lg:items-center lg:justify-between lg:h-[30px] lg:mt-[20px] p-[10px] lg:p-0  duration-300 ${
        showcat ? "translate-y-0 z-40" : "translate-y-full lg:translate-y-0"
      }`}
    >
      {Object.keys(categorylist).map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setshowcat(false);
            }}
            className="group relative"
          >
            <Link
              key={i}
              href={"/" + item}
              className={`lg:h-[30px] w-full flex flex-col items-center justify-start lg:justify-center  text-[14px] lg:text-white p-[5px]  lg:px-[10px] lg:py-[5px] rounded-[10px] lg:rounded-full lg:group-hover:hover:bg-slate-700 text-center ${
                category == item && "bg-theme text-white"
              }`}
            >
              <Image
                src={categorylist?.[item]?.image}
                className="w-full aspect-[4/3] object-cover rounded-[5px] lg:hidden"
                alt={item}
                height={100}
                width={100}
                loading="lazy"
              ></Image>
              <span className="text-[12px] md:text-[14px] mt-1 lg:mt-0 whitespace-nowrap">
                {item}
              </span>
            </Link>
            {/* subcategories */}
            {categorylist[item].subcat.length > 0 && (
              <div
                className={`absolute top-0 hidden lg:group-hover:block -z-10 ${
                  i == 0 ? "left-0" : "left-1/2 -translate-x-1/2"
                }`}
              >
                <div className="p-2 rounded-lg bg-graygradient text-white flex flex-col shadow-lg mt-12">
                  {categorylist[item].subcat.map((subcat, j) => {
                    return (
                      <Link
                        key={j}
                        href={`/${item}/${subcat.name}`}
                        className="p-2 hover:bg-slate-700 w-52 text-center text-[14px]"
                      >
                        {subcat?.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Navcategories;
