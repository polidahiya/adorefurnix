"use client";
import React from "react";
import { categorylist } from "@/app/commondata";
import Link from "next/link";
// import Subcategorycard from "../Subcategorycard";
import { AppContextfn } from "@/app/Context";

function Navcategories({ category }) {
  const { showcat,setshowcat } = AppContextfn();

  return (
    <div className={`overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between lg:h-[30px] lg:mt-[20px] duration-300 ${showcat?"h-[270px] mt-[20px]":"h-0"}`}>
      {Object.keys(categorylist).map((item, i) => {
        return (
          <div key={i} className={`group h-full`}
          onClick={()=>{
            setshowcat(false)
          }}>
            <Link
              key={i}
              href={"/" + item}
              className={`h-[30px] w-full flex items-center justify-center  text-[14px] text-white  px-[20px] py-[5px] rounded-full ${
                category == item ? "bg-theme " : ""
              }`}
             
            >
              {item}
            </Link>
            {/* {categorylist[item].subcat.length > 0 && (
              <div className="fixed top-[110px] left-[50%] translate-x-[-50%] w-full opacity-0 pointer-events-none translate-y-[50px]  lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 duration-300 ">
                <div className="w-full  flex items-center justify-center flex-wrap gap-[20px]  bg-graygradient mt-[12px] overflow-hidden p-[20px]">
                  {categorylist[item].subcat.map((subcat, j) => {
                    return (
                      <Subcategorycard
                        key={j}
                        styles="w-[200px]  overflow-hidden bg-white rounded-[10px] duration-200"
                        link={`/${item}/${subcat.name}`}
                        imgsrc={subcat.image}
                        proname={subcat.name}
                      />
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
