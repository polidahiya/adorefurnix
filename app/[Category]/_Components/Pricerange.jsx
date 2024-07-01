"use client";
import React from "react";
import { AppContextfn } from "@/app/Context";

function Pricerange() {
  const { filters, setfilters } = AppContextfn();
  const filterlist = [
    "No Filter",
    "Less than 10k",
    "10k - 25k",
    "25k - 40k",
    "40k - 50k",
    "More than 50k",
  ];

  return (
    <div className="min-w-[370px] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[5px]">
      {filterlist.map((item, i) => {
        return (
          <button
            key={i}
            className={`border border-slate-300  p-[5px] rounded-[10px] ${
              filters.pricerange == i
                ? "bg-theme bg-clip-text text-transparent "
                : ""
            }`}
            onClick={() => {
              setfilters((pre) => {
                return { ...pre, pricerange: i };
              });
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Pricerange;
