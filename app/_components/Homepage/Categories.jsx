import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
import Image from "next/image";

function Categories() {
  return (
    <div id="categories" className="mt-[50px] md:mt-[100px]">
      <h3 className="text-2xl md:text-4xl font-bold p-0 text-center italic font-serif ">
        Shop By Categories
      </h3>
      <div className=" flex items-stretch justify-center flex-wrap  gap-[1.4vw] px-[1.4vw] mt-[30px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <Link
              key={i}
              href={`/${item}`.replace(/ /g, "_")}
              className={`item w-[30vw] md:w-[23vw] lg:w-[15vw] bg-white rounded-md lg:rounded-[1vw] lg:overflow-hidden lg:shadow-[0px_0px_10px_#bababa7f] lg:hover:scale-[103%] duration-200 `}
            >
              <Image
                src={categorylist[item].image}
                width={300}
                height={300}
                quality={10}
                alt={item}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover object-center rounded-[2.5vw] md:rounded-[1vw] bg-bg1"
              ></Image>
              <div className="text-center text-[14px] md:text-[16px] py-[10px]">{item}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
