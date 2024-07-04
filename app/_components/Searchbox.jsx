"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Searchsvg from "../_svgs/Searchsvg";
import Seacrchsuggestionarrowsvg from "../_svgs/Seacrchsuggestionarrowsvg";
import { useRouter } from "next/navigation";

function Searchbox() {
  const router = useRouter();
  const searchinputref = useRef();
  const [search, setSearch] = useState("");
  const [showsuggestions, setshowsuggestions] = useState([false, false]);

  const suggesionsarray = [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "ugli",
    "vanilla",
    "watermelon",
    "xigua",
    "yam",
    "zucchini",
    "almond",
    "blueberry",
    "coconut",
    "dragonfruit",
    "eggplant",
    "feijoa",
    "guava",
    "huckleberry",
    "imbe",
    "jackfruit",
    "kumquat",
    "lime",
    "mulberry",
    "nectar",
    "olive",
    "pineapple",
    "quinoa",
    "rambutan",
    "soursop",
    "tomato",
    "ugli",
    "violet",
    "wheat",
    "xylocarp",
    "yuzu",
    "zebra",
    "apricot",
    "blackberry",
    "cantaloupe",
    "durian",
    "elder",
    "fig",
    "grapefruit",
    "honeyberry",
    "ita",
    "jabuticaba",
    "kiwano",
    "loquat",
    "melon",
    "nance",
    "olive",
    "persimmon",
    "quandong",
    "rosehip",
    "sugarcane",
    "tomatillo",
    "umbu",
    "victor",
    "walnut",
    "ximenia",
    "yellow",
    "ziziphus",
    "acerola",
    "bilberry",
    "clementine",
    "damson",
    "elderflower",
    "fennel",
    "goumi",
    "hawthorn",
    "inkberry",
    "jostaberry",
    "kaffir",
    "loganberry",
    "medlar",
    "nance",
    "osage",
    "peach",
    "quassia",
    "rowan",
    "sapote",
    "tamarind",
    "umbu",
    "voavanga",
    "watercress",
    "xigua",
    "yacon",
    "zostera",
  ];

  const filtersearch = (words) => {
    let temp;
    const permanentowrds = ["table", "bed", "sofa", "tshirt", "helllo"];
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
      setSearch(params.get("query") || "")
    }
  }, []);

  return (
    <div className="relative h-full min-w-[500px]  p-[2px] border border-gray-300 rounded-[10px]">
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
          }}
        />
        <Link
          href={search?.trim() != "" ? `/main/Search?query=${search}` : "#"}
          className="flex items-center justify-center w-[50px] bg-white border-l border-l-black "
        >
          <Searchsvg styles="h-[25px] " />
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
                  <div key={i}>
                    <Link
                      href={`/main/Search?query=${item}`}
                      className="w-full flex items-center justify-between h-[40px] lg:hover:bg-slate-100 pl-[20px] pr-[10px] "
                    >
                      <p className="  text-start max-w-[calc(100%-50px)] text-ellipsis overflow-hidden whitespace-nowrap">{item}</p>
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
