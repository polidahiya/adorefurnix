"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Searchsvg from "../_svgs/Searchsvg";
import Seacrchsuggestionarrowsvg from "../_svgs/Seacrchsuggestionarrowsvg";
import { useRouter } from "next/navigation";
import { AppContextfn } from "../Context";

function Searchbox({ productsname }) {
  const router = useRouter();

  const { setshowsearch, searchinputref } = AppContextfn();
  const [search, setSearch] = useState("");
  const [showsuggestions, setshowsuggestions] = useState([false, false]);
  const [arrowselectedsuggest, setarrowselectedsuggest] = useState(null);

  const suggesionsarray = [
    "Living Room",
    "Sofa sets",
    "Sofa cum bed",
    "Wing chairs",
    "Ottoman",
    "Chairs",
    "Bedroom",
    "King Size Bed",
    "Queen Size Bed",
    "Single Bed",
    "Kids Bed",
    "Wardrobe",
    "Bedside Table",
    "Chest of Drawers",
    "Dressing Tables",
    "Dining",
    "2-Seater Dining Set",
    "4-Seater Dining Set",
    "6-Seater Dining Set",
    "Tables",
    "Coffee Tables",
    "End Tables",
    "Console Tables",
    "Nesting Tables",
    "Storage",
    "Shoe Rack",
    "Tv and Entertainment Unit",
    "Cabinet",
    "Book Shelf",
    "Crockery Cabinet",
    "Bar Furniture",
    "Bar Units",
    "Bar Cabinets",
    "Bar Trolly",
    "Bar Wall hanging Shelf",
    "Bar Chairs & Stools",
    "Study and Bookshelf",
    "Study Tables",
    "BookShelf",
    "Computer Tables",
    "Office Furniture",
    "Office Chairs",
    "Study & Laptop Tables",
    "Office Sofa",
    "Home Decor & More",
    ,
    ...productsname,
  ];

  const filtersearch = (words) => {
    let temp;
    const permanentowrds = [
      "King Size Bed",
      "4-Seater Dining Set",
      "Coffee Tables",
      "Flora kids bed",
      "Home Decor & More",
    ];
    if (words.trim() == "") {
      return permanentowrds;
    }
    words.split(" ").forEach((word, i) => {
      if (word.trim() !== "") {
        temp = suggesionsarray.filter((product) =>
          product?.toLowerCase().includes(word.toLowerCase())
        );
      }
    });

    if (temp.length == 0) {
      return permanentowrds;
    } else {
      return temp;
    }
  };

  const closesuggestions = () => {
    setshowsuggestions([true, false]);
    setTimeout(() => {
      setshowsuggestions([false, false]);
    }, 300);
  };

  const fivefiltersuggestion = filtersearch(search).slice(0, 5);

  useEffect(() => {
    if (typeof window != undefined) {
      const params = new URLSearchParams(window.location.search);
      setSearch(params.get("query") || "");
    }
  }, []);

  return (
    <div className="relative  h-full w-full  p-[2px] border border-gray-300 rounded-full">
      <div className="flex h-full w-full rounded-full overflow-hidden bg-white p-[2px]">
        <input
          ref={searchinputref}
          type="text"
          className="w-full px-[20px] outline-none"
          placeholder="Search your Products here!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (arrowselectedsuggest == null) {
                if (search.trim() != "")
                  router.push(`/main/Search?query=${search}`);
              } else {
                setSearch(fivefiltersuggestion[arrowselectedsuggest]);
                router.push(
                  `/main/Search?query=${fivefiltersuggestion[arrowselectedsuggest]}`
                );
              }
              searchinputref.current.blur();
            }
            //

            if (e.key == "ArrowDown") {
              if (arrowselectedsuggest == null) {
                setarrowselectedsuggest(0);
              } else {
                if (arrowselectedsuggest != fivefiltersuggestion.length - 1) {
                  setarrowselectedsuggest((pre) => pre + 1);
                } else {
                  setarrowselectedsuggest(0);
                }
              }
            }
            if (e.key == "ArrowUp") {
              if (arrowselectedsuggest == null) {
                setarrowselectedsuggest(fivefiltersuggestion.length - 1);
              } else {
                if (arrowselectedsuggest != 0) {
                  setarrowselectedsuggest((pre) => pre - 1);
                } else {
                  setarrowselectedsuggest(fivefiltersuggestion.length - 1);
                }
              }
            }
          }}
          onFocus={() => {
            setshowsuggestions([true, false]);
            setTimeout(() => {
              setshowsuggestions([true, true]);
            }, 100);
            setarrowselectedsuggest(null);
          }}
          onBlur={() => {
            setTimeout(() => {
              closesuggestions();
              setshowsearch(false);
            }, 100);
          }}
        />
        <Link
          href={search?.trim() != "" ? `/main/Search?query=${search}` : "#"}
          className="flex items-center justify-center bg-theme h-full aspect-square md:aspect-auto md:gap-[5px] md:px-[10px] rounded-full"
        >
          <Searchsvg styles="h-[20px] stroke-white" />
          <span className="text-white hidden md:block">Search</span>
        </Link>
      </div>
      {/* suggestions */}
      {showsuggestions[0] && (
        <div
          className={`absolute top-[calc(100%+2px)] left-0  w-full p-[2px] border border-gray-300 rounded-[10px] duration-300  ${
            showsuggestions[1]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[10px]"
          }`}
        >
          <div className=" h-full w-full rounded-[8px] overflow-hidden bg-white  ">
            {fivefiltersuggestion.map((item, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setSearch(item);
                  }}
                  className={`${
                    arrowselectedsuggest == i ? "bg-slate-200" : ""
                  }`}
                >
                  <Link
                    href={`/main/Search?query=${item}`}
                    className="w-full flex items-center justify-between h-[40px] lg:hover:bg-slate-100 pl-[20px] pr-[10px] "
                  >
                    <p className="  text-start max-w-[calc(100%-50px)] text-ellipsis overflow-hidden whitespace-nowrap">
                      {item}
                    </p>
                    <Seacrchsuggestionarrowsvg styles="h-[20px] stroke-slate-600 rotate-[-90deg]" />
                  </Link>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchbox;
