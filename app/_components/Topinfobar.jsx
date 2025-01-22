import React from "react";
import { HiOutlineTruck, HiOutlineCube, HiOutlineClock } from "react-icons/hi";

function Topinfobar() {
  return (
    <div className="h-10 w-full flex items-center justify-between md:justify-center gap-1 md:gap-10 text-[10px] md:text-sm px-4 bg-slate-50 lg:px-10">
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
    </div>
  );
}

export default Topinfobar;
