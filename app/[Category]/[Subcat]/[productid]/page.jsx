import React from "react";
import Link from "next/link";
import Image from "next/image";

function page() {
  return (
    <div className="p-[10px] ">
      <div className="flex items-start">
        {/* image component */}
        <div className=" w-[40%] h-[200px] test"></div>
        {/* details */}
        <div className="w-[60%] p-[10px] ">
          <div className=" flex gap-[10px] text-[#87878] text-[14px] ">
            <Link href={"/"}>Home</Link> {">"}
            <Link href={"/"}>Category</Link> {">"}
            <Link href={"/"}>Subcategory</Link> {">"}
            <span>Product</span>
          </div>
          <h1 className="py-[10px] font-semibold">
            Solid Sheesham Wood Diamond Bed King Size 6X6.5 feet
          </h1>
          <div className="">
            <span className="font-semibold text-slate-400">Rating</span> :
            ⭐⭐⭐⭐⭐{" "}
            <span className="p-[3px] px-[10px] bg-green-600 text-white rounded-[5px] font-semibold ">
              4{" / "}5
            </span>
          </div>
          <div className="font-bold">
            <span className="text-[30px]">₹32,000</span>
            <span className="line-through text-[#878787] ml-3">35,000</span>
            <span className="text-[#388e3c] ml-3">34% off</span>
          </div>

          {/* colors */}
          <div className="flex gap-[50px] mt-[30px]">
            <span className="font-semibold text-slate-400">Color :</span>
            <div className="flex gap-[10px]">
              <div className="flex items-center gap-[10px] p-[5px] border-[2px] border-slate-300">
                <Image
                  src="/categoriesimages/tables.jpg"
                  className="h-[100px] aspect-square  object-contain object-center "
                  alt="sdjfjds"
                  height={100}
                  width={100}
                ></Image>
                <div className="flex flex-col items-center text-center font-semibold ">
                  <div className="w-[35px] aspect-square bg-red-400 rounded-full"></div>
                  <p>Pink Rose</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] p-[5px] border-[2px] border-slate-300">
                <Image
                  src="/categoriesimages/tables.jpg"
                  className="h-[100px] aspect-square  object-contain object-center "
                  alt="sdjfjds"
                  height={100}
                  width={100}
                ></Image>
                <div className="flex flex-col items-center text-center font-semibold ">
                  <div className="w-[35px] aspect-square bg-red-400 rounded-full"></div>
                  <p>Pink Rose</p>
                </div>
              </div>
            </div>
          </div>
          {/* dimension */}
          <div className="flex gap-[10px] mt-[30px] font-semibold">
            <span className=" text-slate-400">Dimension :</span>
            34 X 34 X 25
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
