"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "./Ratingstars";
import { FaTags } from "react-icons/fa";

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
      className={`relative h-full w-full md:max-w-[350px] md:min-w-[270px] shadow-md rounded-[10px] overflow-hidden bg-white duration-300 ${
        showproduct ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      <div className="absolute top-[5px] left-[5px] md:top-[10px] md:left-[10px]  text-[8px] md:text-[14px] text-white">
        {/* discount */}
        {pricebeforediscount && (
          <div className="flex items-center gap-[5px]  bg-green-600 py-[5px] px-[5px] md:px-[10px] rounded-[5px]">
            <FaTags />
            {discount}% OFF
          </div>
        )}
        {/* available */}
        {!available && (
          <div
            className={` bg-red-600 py-[5px] px-[5px] md:px-[10px] rounded-[5px] mt-[5px]`}
          >
            Out of Stock!
          </div>
        )}
      </div>

      <Image
        src={imgSrc}
        alt={name}
        width={300}
        height={300}
        className="aspect-[4/3] w-full object-cover object-center rounded-b-[10px]"
        onError={handleImageError} // Handle image error
      />

      <div className="p-[5px] md:p-[10px]">
        <h3 className="py-[5px] md:py-[10px] text-[12px] md:text-[16px] font-semibold text-center w-full whitespace-nowrap text-ellipsis overflow-hidden">
          {name}
        </h3>
        <Rating rating={rating} />
        <div className="mt-[10px] flex flex-wrap items-center gap-[5px] md:gap-[10px]">
          <span className="font-bold text-[16px] md:text-[20px]">
            ₹{parseInt(price, 10).toLocaleString("en-IN")}
          </span>
          {pricebeforediscount && (
            <>
              <span className="line-through text-[12px] md:text-[16px] text-[#878787]">
                ₹{parseInt(pricebeforediscount, 10).toLocaleString("en-IN")}
              </span>
              <span className="font-bold text-[12px] md:text-[16px] text-[#388e3c]">
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
