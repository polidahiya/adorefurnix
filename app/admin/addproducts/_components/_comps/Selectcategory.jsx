import React from "react";
import { categorylist } from "@/app/commondata";
import { AppContextfn } from "@/app/Context";

function Selectcategory() {
  const { addproduct, setaddproduct } = AppContextfn();
  return (
    <>
      <h2 className="text-center mt-[30px] text-[20px] font-bold ">
        Select a category
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[10px] p-[20px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <button
              key={i}
              className={`border border-slate-300 rounded-[10px] p-[5px] text-[12px] 
                ${addproduct?.category == item && "bg-slate-600 text-white"}`}
              onClick={() => {
                setaddproduct({
                  ...addproduct,
                  category: item,
                  subcat: categorylist[item]?.subcat[0]?.name,
                });
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Selectcategory;
