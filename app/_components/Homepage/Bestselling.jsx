import React from "react";
import Rating from "../Ratingstars";
import Link from "next/link";
import { LuArrowRightCircle } from "react-icons/lu";

function Bestselling() {
  const bestproducts = [
    {
      image: "/images/bestselling1.png",
      name: "Test name",
      price: "₹ 54999",
      stars: 4.8,
    },
    {
      image: "/images/bestselling2.png",
      name: "Test name",
      price: "₹ 8999",
      stars: 4.2,
    },
    {
      image:
        "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-modern-white-chair-object-png-image_10076590.png",
      name: "Test name",
      price: "₹ 11999",
      stars: 4,
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16  mt-[50px]">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold  mb-4 font-serif italic">
          Best Selling Products
        </h3>
        <p className="text-gray-600 mb-6">
          Discover our most popular products that are loved by many.
        </p>
        <div className="grid place-content-center">
          <Link
            href={"/Search?query=Best"}
            className="group relative flex items-center justify-center gap-[10px] px-6 py-3  text-white font-semibold rounded-full overflow-hidden"
          >
            <span>See All Collection</span>
            <LuArrowRightCircle />
            <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#10e89c,#0593f7,#10e89c)] -z-10 group-hover:translate-x-[-50%] duration-200"></div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {bestproducts.map((item, i) => (
          <div
            key={i}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
          >
            <img
              className="w-full h-64 object-contain p-[10px]"
              src={item.image}
              alt={item.name}
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2 truncate">
                {item.name}
              </h4>
              <Rating rating={item.stars} className="mb-2" />
              <div className="text-xl font-bold text-gray-800">
                {item.price}
              </div>{" "}
              {/* Subtle price styling */}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#c1d0e4] to-transparent rounded-lg z-[-1]"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bestselling;
