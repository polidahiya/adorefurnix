"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
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
}) {
  const [showproduct, setshowproduct] = useState(false);
  const [imgSrc, setImgSrc] = useState(image);

  // Fallback image URL
  const fallbackImage = "/default-fallback-image.png";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setshowproduct(true);
    }, index * 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [index]);

  const handleImageError = () => {
    setImgSrc(fallbackImage);
  };

  let pricebeforediscount = null;
  if (discount > 0) {
    pricebeforediscount = Math.floor((price / (100 - discount)) * 100);
  }

  return (
    <Link
      href={`/${category}/${subcat}/${id}`}
      className={`relative w-full max-w-[350px] min-w-[250px] shadow-md rounded-[10px] overflow-hidden bg-white duration-300 ${
        showproduct ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      {/* discount */}
      {pricebeforediscount && (
        <div className="absolute top-[10px] left-[10px] bg-green-600 text-white text-[14px] py-[5px] px-[10px] rounded-[5px]">
          {discount}% OFF
        </div>
      )}
      {/* available */}
      {!available && (
        <div
          className={`absolute left-[10px] bg-red-600 text-white text-[14px] py-[5px] px-[10px] rounded-[5px]
             ${pricebeforediscount ? "top-[50px]" : "top-[10px]"}`}
        >
          Out of Stock!
        </div>
      )}

      <Image
        src={imgSrc}
        alt={name}
        width={300}
        height={300}
        className="aspect-[4/3] w-full object-cover object-center rounded-b-[10px]"
        onError={handleImageError} // Handle image error
      />

      <div className="p-[10px]">
        <h3 className="py-[10px] font-semibold text-center w-full whitespace-nowrap text-ellipsis overflow-hidden">
          {name}
        </h3>
        <Rating rating={rating} />
        <div className="mt-[10px]">
          <span className="font-bold text-[20px]">
            ₹{parseInt(price, 10).toLocaleString("en-IN")}
          </span>
          {pricebeforediscount && (
            <>
              <span className="line-through text-[#878787] ml-3">
                ₹{parseInt(pricebeforediscount, 10).toLocaleString("en-IN")}
              </span>
              <span className="font-bold text-[#388e3c] ml-3">
                {discount}% off
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Productcard;
