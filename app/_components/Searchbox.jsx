"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Searchsvg from "../_svgs/Searchsvg";
import Seacrchsuggestionarrowsvg from "../_svgs/Seacrchsuggestionarrowsvg";
import { useRouter } from "next/navigation";
import { AppContextfn } from "../Context";

function Searchbox() {
  const router = useRouter();

  const { setshowsearch, searchinputref } = AppContextfn();
  const [search, setSearch] = useState("");
  const [showsuggestions, setshowsuggestions] = useState([false, false]);

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
    // 
    "Merlin mose full cushion bed",
    "Premium Ureka 3+1+1 sofa set",
    "Mahira 3 seater sofa",
    "Macle Sofa 3+2 seater",
    "Rosle Sofa 2+2 seater",
    "Kyle L shape sofa set 5 seater",
    "Pyrin 3+2 seater sofa set",
    "Flora kids bed",
    "Wing chair",
    "Louts wing chair",
    "Sofa cum bed in full upholstery",
    "Sofa cum bed full cushion",
    "Round Ottoman",
    "Ottoman cylindrical",
    "Ottoman square",
    "Upholstery chairs",
    "Chair upholstery with metal legs",
  ];

  const filtersearch = (words) => {
    let temp;
    const permanentowrds = ["King Size Bed", "4-Seater Dining Set", "Coffee Tables", "Flora kids bed", "Home Decor & More"];
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

  useEffect(() => {
    if (typeof window != undefined) {
      const params = new URLSearchParams(window.location.search);
      setSearch(params.get("query") || "");
    }
  }, []);

  return (
    <div className="relative  h-full w-full  p-[2px] border border-gray-300 rounded-[10px]">
      <div className="flex h-full w-full rounded-[8px] overflow-hidden">
        <input
          ref={searchinputref}
          type="text"
          className="w-full px-[20px] outline-none"
          placeholder="Search your Products here!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && search.trim() != "") {
              //   settogglemobilesearch(!togglemobilesearch);
              router.push(`/main/Search?query=${search}`);
              searchinputref.current.blur();
            }
          }}
          onFocus={() => {
            setshowsuggestions([true, false]);
            setTimeout(() => {
              setshowsuggestions([true, true]);
            }, 100);
          }}
          onBlur={() => {
            setTimeout(() => {
              closesuggestions();
            }, 100);
            setshowsearch(false);
          }}
        />
        <Link
          href={search?.trim() != "" ? `/main/Search?query=${search}` : "#"}
          className="flex items-center justify-center w-[50px] bg-white border-l border-l-black "
        >
          <Searchsvg styles="h-[20px] stroke-black" />
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
            {filtersearch(search)
              .slice(0, 5)
              .map((item, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      setSearch(item);
                    }}
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
