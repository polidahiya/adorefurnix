import React from "react";
import { categorylist } from "@/app/commondata";
import { AppContextfn } from "@/app/Context";

function Selectcubcategory() {
  const { addproduct, setaddproduct } = AppContextfn();
  return (
    <>
      <h2 className="text-center mt-[30px] text-[20px] font-bold">
        Select Subcategory
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[10px] p-[20px]">
        {categorylist[addproduct?.category]?.subcat?.map((item, i) => {
          return (
            <button
              key={i}
              className={`border border-slate-300 rounded-[10px] p-[5px] text-[12px] ${
                addproduct?.subcat == item.name && "bg-slate-600 text-white"
              }`}
              onClick={() => {
                setaddproduct({ ...addproduct, subcat: item.name });
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Selectcubcategory;
