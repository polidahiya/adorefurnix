import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
import Image from "next/image";

function Navcategories({category}) {
  return (
    <div className=" flex items-center justify-between h-[40px] mt-[20px]">
      {Object.keys(categorylist).map((item, i) => {
        return (
          <div key={i} className={`group h-full`}>
            <Link
              key={i}
              href={"/" + item}
              className={`h-full w-full flex items-center justify-center  text-[14px] text-white  px-[20px] py-[5px] rounded-full ${
                category == item ? "bg-theme " : ""
              }`}
            >
              {item}
            </Link>
            {categorylist[item].subcat.length > 0 && (
              <div className="fixed top-[110px] left-[50%] translate-x-[-50%] w-full opacity-0 pointer-events-none translate-y-[50px]  lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 duration-300 ">
                <div className="w-full  flex items-center justify-center flex-wrap gap-[20px]  bg-graygradient mt-[12px] overflow-hidden p-[20px]">
                  {categorylist[item].subcat.map((subcat, j) => {
                    return (
                      <Link
                        key={j}
                        href={`/${item}/${subcat.name}`}
                        className={`w-[200px]  overflow-hidden bg-white rounded-[10px] duration-200`}
                      >
                        <Image
                          src={subcat.image}
                          width={300}
                          height={300}
                          alt={subcat.name}
                          className="w-full aspect-[4/3] object-cover object-center "
                        ></Image>
                        <div className="text-center py-[5px] md:py-[10px]">
                          {subcat.name}
                        </div>
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
