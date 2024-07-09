import React from "react";
import { categorylist } from "@/app/commondata";
import Subcategorycard from "../Subcategorycard";

function Categories() {
  return (
    <div id="categories">
      <h3 className="text-[25px] md:text-[40px] font-bold p-0 text-center italic font-serif ">
        Shop By Categories
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[5px] md:gap-[20px] p-[5px] md:px-[20px] mt-[30px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <Subcategorycard
              key={i}
              styles=" w-full rounded-[10px] md:rounded-[15px] overflow-hidden border border-slate-300 lg:hover:shadow-[4px_4px_5px_#bababa7f] duration-200"
              link={`/${item}`}
              imgsrc={categorylist[item].image}
              proname={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
