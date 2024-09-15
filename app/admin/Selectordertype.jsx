import React from "react";
import { BiRefresh } from "react-icons/bi";

function Selectordertype({ ordertype, setordertype, setrefresh }) {
  return (
    <div className="sticky top-[50px] bg-white w-full flex items-center gap-[10px]  p-[10px] px-[40px] shadow-md z-20 border-t border-t-slate-300">
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[5px] ${
          ordertype == 0 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(0);
        }}
      >
        All orders
      </button>
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[5px] ${
          ordertype == 1 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(1);
        }}
      >
        Processing orders
      </button>
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[5px] ${
          ordertype == 2 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(2);
        }}
      >
        Shipped orders
      </button>
      <button
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[5px] ${
          ordertype == 3 && "bg-theme text-white"
        }`}
        onClick={() => {
          setordertype(3);
        }}
      >
        Delivered orders
      </button>
      {/* refresh orders */}
      <button
        className="h-full aspect-square border border-slate-300 px-[10px] py-[5px] rounded-[5px] ml-auto"
        title="Refresh Orderes"
        onClick={() => {
          setrefresh((pre) => pre + 1);
        }}
      >
        <BiRefresh />
      </button>
    </div>
  );
}

export default Selectordertype;
