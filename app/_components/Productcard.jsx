"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heart from "../_svgs/Heart";

function Productcard({
  index,
  id,
  category,
  subcat,
  name,
  price,
  discount,
  available,
  image,
  liked,
}) {
  let discountprice = null;
  if (discount > 0) {
    discountprice = Math.floor((price * (100 - discount)) / 100);
  }

  const [showproduct, setshowproduct] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setshowproduct(true);
    }, index * 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Link
      href={`/${category}/${subcat}/${id}`}
      className={`relative w-full max-w-[350px] shadow-[4px_4px_5px_#bababa7f] rounded-[10px] overflow-hidden bg-white duration-300 ${
        showproduct ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      {/* discount */}
      {discountprice && (
        <div className="absolute top-[10px] left-[10px] bg-green-600 text-white p-[5px] rounded-[5px]">
          {discount}
          {"%"} OFF
        </div>
      )}
      {/* availabe */}
      {!available && (
        <div
          className={`absolute  left-[10px] bg-red-600 text-white p-[5px] rounded-[5px]
             ${discountprice ? "top-[50px]" : "top-[10px]"}`}
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
              liked
                ? "fill-red-500 stroke-none"
                : "fill-white stroke-[5px] stroke-red-600  "
            }
              `}
        />
      </button>

      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="aspect-[4/3] w-full object-cover object-center rounded-b-[10px]"
      ></Image>
      <div className="p-[10px]">
        <h3 className="text-center  font-bold">{name}</h3>
        <div className="flex items-center gap-[10px] text-[18px]">
          {discountprice && (
            <span className="line-through text-slate-400">₹{price}</span>
          )}
          <span className="">₹{discountprice ? discountprice : price}</span>
        </div>
      </div>
    </Link>
  );
}
// bg-[#c1d0e4]
export default Productcard;
