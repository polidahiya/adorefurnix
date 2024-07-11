import React from "react";
import Refreshsvg from "../_svgs/Refreshsvg";

function Selectordertype({ ordertype, setordertype }) {
  return (
    <div className="sticky top-[50px] bg-white w-full flex items-center justify-evenly  p-[10px] shadow-md z-20 border-t border-t-slate-300">
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          ordertype == 0 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(0);
        }}
      >
        All orders
      </button>
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          ordertype == 1 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(1);
        }}
      >
        Processing orders
      </button>
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          ordertype == 2 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(2);
        }}
      >
        Shipped orders
      </button>
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          ordertype == 3 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(3);
        }}
      >
        Delivered orders
      </button>
      {/* refresh orders */}
      <button className="border border-slate-300 px-[10px] py-[5px] rounded-[10px] " title="Refresh Orderes">
        <Refreshsvg styles="h-[25px] " />
      </button>
    </div>
  );
}

export default Selectordertype;
