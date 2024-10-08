import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
import Image from "next/image";

function Categories() {
  return (
    <div id="categories" className="mt-[30px] md:mt-[100px]">
      <h3 className="text-3xl md:text-4xl font-bold p-0 text-center italic font-serif ">
        Shop By Categories
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-[5px] md:gap-[20px] p-[10px] md:px-[20px] mt-[30px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <Link
              key={i}
              href={`/${item}`}
              className={`item w-full rounded-[10px] md:rounded-[15px] overflow-hidden shadow-[0px_0px_10px_#bababa7f] hover:scale-[103%] duration-200`}
            >
              <Image
                src={categorylist[item].image}
                width={300}
                height={300}
                quality={10}
                alt={item}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover object-center rounded-[10px] md:rounded-[15px]"
              ></Image>
              <div className="text-center text-[13px] md:text-[16px] py-[5px] md:py-[10px]">
                {item}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
