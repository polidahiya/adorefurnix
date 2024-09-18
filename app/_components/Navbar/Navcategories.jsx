"use client";
import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
import Image from "next/image";
import { AppContextfn } from "@/app/Context";
// import Image from "next/image";

function Navcategories({ category }) {
  const { showcat, setshowcat } = AppContextfn();

  return (
    <div
      className={` grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] lg:flex lg:items-center lg:justify-between lg:h-[30px] lg:mt-[20px] overflow-hidden duration-300 ${
        showcat ? "h-[400px] md:h-[313px] mt-[20px]" : "h-0"
      }`}
    >
      {Object.keys(categorylist).map((item, i) => {
        return (
          <div
            key={i}
            className={`group`}
            onClick={() => {
              setshowcat(false);
            }}
          >
            <Link
              key={i}
              href={"/" + item}
              className={`lg:h-[30px] w-full flex flex-col items-center justify-start lg:justify-center  text-[14px] text-white p-[5px]  lg:px-[10px] lg:py-[5px] rounded-[10px] lg:rounded-full text-center ${
                category == item ? "bg-theme" : ""
              }`}
            >
              <Image
                src={categorylist?.[item]?.image}
                className="w-full aspect-[4/3] object-cover rounded-[5px] lg:hidden"
                alt={item}
                height={100}
                width={100}
              ></Image>
              <span className="text-[12px] md:text-[14px] mt-1 lg:mt-0 whitespace-nowrap">{item}</span>
            </Link>
            {/* {categorylist[item].subcat.length > 0 && (
              <div className="fixed top-[90px] left-[50%] translate-x-[-50%] w-full opacity-0 pointer-events-none translate-y-[50px]  lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 duration-300 ">
                <div className="w-full  flex items-center justify-center flex-wrap gap-[20px]  bg-white  mt-[12px] overflow-hidden p-[20px]">
                  {categorylist[item].subcat.map((subcat, j) => {
                    return (
                      <Link
                        key={j}
                        href={`/${item}/${subcat.name}`}
                        className="w-[200px]  overflow-hidden bg-white rounded-[10px] lg:shadow-[0px_0px_10px_#bababa7f] duration-200"
                      >
                        <Image
                          src={subcat.image}
                          width={300}
                          height={300}
                          alt={subcat.name}
                          className="w-full aspect-[4/3] object-cover object-center "
                        ></Image>
                        <div className="text-center text-[13px] md:text-[16px] py-[5px] md:py-[10px]">
                          {subcat.name}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )} */}
          </div>
        );
      })}
    </div>
  );
}

export default Navcategories;
