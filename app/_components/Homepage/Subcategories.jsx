"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { categorylist } from "@/app/commondata";
import { gsap } from "gsap";
import { HiArrowSmRight } from "react-icons/hi";

function Subcategories() {
  const [index, setIndex] = useState(0);
  const categorykeys = Object.keys(categorylist);
  const categoryvalues = Object.values(categorylist);
  const imageRef = useRef(null);
  const subcatRef = useRef(null);
  const autoslideRef = useRef(null); // Use useRef to persist autoslide

  const nextcategory = () => {
    setIndex((prev) => (prev < categoryvalues.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    // Set up auto-slide
    autoslideRef.current = setInterval(nextcategory, 10 * 1000);

    return () => {
      clearInterval(autoslideRef.current);
    };
  }, []);

  const handleNextCategory = () => {
    // Reset the interval when the user clicks the button
    clearInterval(autoslideRef.current);
    autoslideRef.current = setInterval(nextcategory, 10 * 1000);
    nextcategory();
  };

  // GSAP animation effect
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    if (subcatRef.current) {
      gsap.fromTo(
        subcatRef.current.children,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.3, stagger: 0.1 }
      );
    }
  }, [index]);

  return (
    <div className="w-full px-6 md:px-10 py-10 bg-gray-100">
      <h3 className="text-3xl md:text-4xl font-bold text-center italic font-serif mb-8">
        Jump to Sub-categories
      </h3>

      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
        {/* Main category image with buttons */}
        <div className="relative w-full max-w-lg aspect-[4/3] rounded-lg overflow-hidden shadow-md">
          <Image
            ref={imageRef}
            className="h-full w-full object-cover rounded-lg"
            src={categoryvalues[index]?.image}
            alt={categoryvalues[index]?.name}
            loading="lazy"
            width={400}
            height={300}
          />
          <div className="absolute inset-x-0 bottom-4 flex justify-between px-4">
            <button
              className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-600 transition duration-300"
              onClick={() =>
                setIndex((prev) =>
                  prev > 0 ? prev - 1 : categoryvalues.length - 1
                )
              }
            >
              <HiArrowSmRight className="rotate-180" />
            </button>
            <Link
              href={`/${categorykeys[index]}`}
              className="h-[40px] flex justify-center items-center rounded-full bg-gray-800 text-white px-5 shadow-md hover:bg-gray-600 transition duration-300"
            >
              {categorykeys[index]}
            </Link>
            <button
              onClick={handleNextCategory}
              className="h-[40px] w-[40px] flex justify-center items-center rounded-full bg-gray-800 text-white shadow-md hover:bg-gray-600 transition duration-300"
            >
              <HiArrowSmRight />
            </button>
          </div>
        </div>

        {/* Sub-categories grid */}
        <div
          ref={subcatRef}
          className="w-full lg:w-[50%] grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categoryvalues[index].subcat.map((item, i) => (
            <Link
              key={i}
              href={`/${categorykeys[index]}/${categoryvalues[index]?.subcat[i]?.name}`}
              className="group"
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  width={300}
                  height={200}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-center text-sm md:text-base py-2 font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                {item?.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-10 italic text-center text-gray-600 text-[14px] md:text-[16px]">
        {categoryvalues[index]?.desc}
      </p>
    </div>
  );
}

export default Subcategories;