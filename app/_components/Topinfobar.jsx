import React from "react";
import { HiOutlineTruck, HiOutlineCube, HiOutlineClock } from "react-icons/hi";

function Topinfobar() {
  return (
    <div className="relative h-10 w-full flex items-center justify-between md:justify-center gap-1 md:gap-10 text-[10px] md:text-sm px-4 overflow-hidden bg-slate-50 lg:px-10">
      <span className="flex items-center gap-1 md:gap-2">
        <HiOutlineTruck /> Pan India Shipping
      </span>
      |
      <span className="flex items-center gap-1 md:gap-2">
        <HiOutlineCube /> Bulk Buy Discounts
      </span>
      |
      <span className="flex items-center gap-1 md:gap-2">
        <HiOutlineClock /> Delivery in 7-15 days
      </span>
      <div className="absolute imgloader h-full w-full top-0 left-0"></div>
    </div>
  );
}

export default Topinfobar;
