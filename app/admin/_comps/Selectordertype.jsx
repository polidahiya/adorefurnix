import Link from "next/link";
import React from "react";
import Ordersrefreshbutton from "./Ordersrefreshbutton";

function Selectordertype({ ordertype, Refreshorders }) {
  return (
    <div className="sticky top-[50px] h-[40px] bg-white w-full flex items-center flex-wrap gap-[10px]  py-[5px] px-[40px] shadow-md z-20 border-t border-t-slate-300">
      <Link
        href={"/admin/?order=0"}
        className={`h-full grid place-content-center border border-slate-300 px-[10px] rounded-[5px] ${
          ordertype == 0 && "bg-theme text-white"
        }`}
      >
        All orders
      </Link>
      <Link
        href={"/admin/?order=1"}
        className={`h-full grid place-content-center border border-slate-300 px-[10px] rounded-[5px] ${
          ordertype == 1 && "bg-theme text-white"
        }`}
      >
        Processing orders
      </Link>
      <Link
        href={"/admin/?order=2"}
        className={`h-full grid place-content-center border border-slate-300 px-[10px] rounded-[5px] ${
          ordertype == 2 && "bg-theme text-white"
        }`}
      >
        Shipped orders
      </Link>
      <Link
        href={"/admin/?order=3"}
        className={`h-full grid place-content-center border border-slate-300 px-[10px] rounded-[5px] ${
          ordertype == 3 && "bg-theme text-white"
        }`}
      >
        Delivered orders
      </Link>
      <Link
        href={"/admin/?order=4"}
        className={`h-full grid place-content-center border border-slate-300 px-[10px] rounded-[5px] ${
          ordertype == 4 && "bg-theme text-white"
        }`}
      >
        Canceled orders
      </Link>
      <Link
        href={"/admin/?order=5"}
        className={`h-full grid place-content-center border border-slate-300 px-[10px] rounded-[5px] ${
          ordertype == 5 && "bg-theme text-white"
        }`}
      >
        Refunded orders
      </Link>
      {/* refresh orders */}
      <Ordersrefreshbutton Refreshorders={Refreshorders} />
    </div>
  );
}

export default Selectordertype;
