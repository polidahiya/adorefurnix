"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heart from "../_svgs/Heart";
import Rating from "./Ratingstars";

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
  rating,
  liked,
}) {
  let pricebeforediscount = null;
  if (discount > 0) {
    pricebeforediscount = Math.floor((price / (100 - discount)) * 100);
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
      className={`relative w-full  max-w-[350px] min-w-[250px] shadow-md rounded-[10px] overflow-hidden bg-white duration-300 ${
        showproduct ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      {/* discount */}
      {pricebeforediscount && (
        <div className="absolute top-[10px] left-[10px] bg-green-600 text-white p-[5px] rounded-[5px]">
          {discount}
          {"%"} OFF
        </div>
      )}
      {/* availabe */}
      {!available && (
        <div
          className={`absolute  left-[10px] bg-red-600 text-white p-[5px] rounded-[5px]
             ${pricebeforediscount ? "top-[50px]" : "top-[10px]"}`}
        >
          Out of Stock!
        </div>
      )}
      {/* like button */}
      {liked && (
        <button
          className="absolute right-[10px] top-[10px] bg-white rounded-full p-[3px] "
          title="Add to favourites"
        >
          <Heart
            styles={`h-[25px]  w-[25px]  translate-y-[1px]
            ${
              liked
                ? "fill-red-500 stroke-none"
                : "fill-white stroke-[5px] stroke-red-600  "
            }
              `}
          />
        </button>
      )}

      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="aspect-[4/3] w-full object-cover object-center rounded-b-[10px]"
      ></Image>
      <div className="p-[10px]">
        <h3 className="py-[10px] font-semibold text-center w-full whitespace-nowrap text-ellipsis overflow-hidden">
          {name}
        </h3>
        <Rating rating={rating} />
        <div className=" mt-[10px]">
          <span className="font-bold text-[20px]">
            ₹{parseInt(price, 10).toLocaleString("en-IN")}
          </span>
          {pricebeforediscount && (
            <>
              <span className="line-through text-[#878787] ml-3">
              ₹{parseInt(pricebeforediscount, 10).toLocaleString("en-IN")}
              </span>
              <span className="font-bold text-[#388e3c] ml-3">{discount}% off</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
// bg-[#c1d0e4]


export default Productcard;
