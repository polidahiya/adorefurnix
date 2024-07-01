import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";

function Categories() {
  return (
    <div id="categories">
      <h3 className="text-[40px] font-bold p-0 text-center ">
        Shop By Categories
      </h3>
      <div className="grid grid-cols-5 gap-[5px] md:gap-[20px] p-[5px] md:px-[20px] mt-[30px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <Link
              href={item}
              key={i}
              className="min-h-[100px]  w-full rounded-[10px] md:rounded-[15px] overflow-hidden border border-slate-300 hover:shadow-[4px_4px_5px_#bababa7f] duration-200"
            >
              <img
                src={categorylist[item].image}
                alt={item}
                className="w-full aspect-[4/3] object-cover object-center"
              />
              <h4 className="text-center py-[5px] md:py-[10px]">{item}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
