import React from "react";
import Link from "next/link";

function Selectordertype({ selected }) {
  return (
    <div className="sticky top-[50px] bg-white w-full flex items-center justify-evenly  p-[10px] shadow-md">
      <Link
        href="/"
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          selected == 0 && "bg-theme text-white"
        }`}
      >
        All orders
      </Link>
      <Link
        href="/admin/Processing"
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          selected == 1 && "bg-theme text-white"
        }`}
      >
        Processing orders
      </Link>
      <Link
        href="/admin/Shipped"
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          selected == 2 && "bg-theme text-white"
        }`}
      >
        Shipped orders
      </Link>
      <Link
        href="/admin/Delivered"
        className={`border border-slate-300 px-[10px] py-[5px] rounded-[10px] ${
          selected == 3 && "bg-theme text-white"
        }`}
      >
        Delivered orders
      </Link>
    </div>
  );
}

export default Selectordertype;
