import React from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

function Searchbox() {
  return (
    <div className="test h-9">
      this is search box
      <Link
        href="/admin/searchproducts"
        className=" grid place-content-center h-full aspect-square  border border-slate-300 rounded-[5px]  ml-auto"
      >
        <IoSearchOutline />
      </Link>
    </div>
  );
}

export default Searchbox;
