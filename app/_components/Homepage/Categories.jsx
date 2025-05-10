import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
import Nextimage from "@/app/_components/Nextimage";

function Categories() {
  return (
    <div id="categories" className="">
      <h3 className="text-2xl md:text-4xl font-bold p-0 text-center  font-recline ">
        Shop By Categories
      </h3>
      <div className=" flex items-stretch justify-center flex-wrap  gap-[1.4vw] px-[1.4vw] mt-[30px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <Link
              key={i}
              href={`/${item}`.replace(/ /g, "-")}
              className={`item w-[30vw] md:w-[23vw] lg:w-[15vw] bg-white rounded-md lg:rounded-[1vw] lg:overflow-hidden lg:shadow-[0px_0px_10px_#bababa7f] lg:hover:scale-[103%] duration-200 `}
            >
              <Nextimage
                src={categorylist[item].image}
                width={300}
                height={300}
                quality={10}
                alt={item}
                priority={true}
                
                className="w-full aspect-[4/3] object-cover object-center rounded-[2.5vw] md:rounded-[1vw] bg-bg1"
              ></Nextimage>
              <div className="text-center text-[14px] md:text-[16px] py-[10px]">{item}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
