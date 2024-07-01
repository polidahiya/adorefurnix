"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heart from "../_svgs/Heart";

function Productcard(props) {
  let discountper = null;
  if (props.preprice) {
    discountper = Math.floor(
      ((props.preprice - props.price) / props.preprice) * 100
    );
  }

  const [showproduct, setshowproduct] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setshowproduct(true);
    }, props.index * 100);

    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <Link
      href={"/"}
      className={`relative w-full shadow-[4px_4px_5px_#bababa7f] rounded-[10px] overflow-hidden bg-white duration-300 ${
        showproduct ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      {/* discount */}
      {props.preprice && (
        <div className="absolute top-[10px] left-[10px] bg-green-600 text-white p-[5px] rounded-[5px]">
          {discountper}
          {"%"} OFF
        </div>
      )}
      {/* availabe */}
      {!props.available && (
        <div
          className={`absolute  left-[10px] bg-red-600 text-white p-[5px] rounded-[5px]
             ${discountper ? "top-[50px]" : "top-[10px]"}`}
        >
          Out of Stock!
        </div>
      )}
      {/* like button */}
      <button
        className="absolute right-[10px] top-[10px] bg-white rounded-full p-[3px] "
        title="Add to favourites"
        // onClick={async () => {
        //   let res = await likeproduct(productid, liked);
        //   if (res) {
        //     if (res.message == "Added to favourites") {
        //       setliked(true);
        //     }
        //     if (res.message == "Removed from favourites") {
        //       setliked(false);
        //     }

        //     setnotifictionarr([
        //       ...notifictionarr,
        //       {
        //         id: new Date() + new Date().getMilliseconds(),
        //         content: res.message,
        //       },
        //     ]);
        //   }
        // }}
      >
        <Heart
          // styles={`h-[30px]  w-[30px]  ${
          //   liked
          //     ? "fill-red-500 stroke-none"
          //     : "fill-white stroke-[5px] stroke-textcolor "
          // }`}
          styles={`h-[25px]  w-[25px]  translate-y-[1px]
            ${
              props.liked
                ? "fill-red-500 stroke-none"
                : "fill-white stroke-[5px] stroke-red-600  "
            }
              `}
        />
      </button>

      <Image
        src={props.image}
        alt=""
        width={300}
        height={300}
        className="aspect-[4/3] w-full object-cover object-center rounded-b-[10px]"
      ></Image>
      <div className="p-[10px]">
        <h3 className="text-center  font-bold">{props?.name}</h3>
        <div className="flex items-center gap-[10px] text-[18px]">
          {props.preprice && (
            <span className="line-through text-slate-400">
              ₹{props.preprice}
            </span>
          )}
          <span className="">₹{props.price}</span>
        </div>
      </div>
    </Link>
  );
}
// bg-[#c1d0e4]
export default Productcard;
