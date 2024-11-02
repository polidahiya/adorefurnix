import React from "react";
import Link from "next/link";
import { LuArrowRightCircle } from "react-icons/lu";
import Productcard from "../Productcard";

async function Bestselling({ products }) {
  const bestselling = products
    .filter((item) => item.keywords.toLowerCase().includes("best seller"))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-4xl font-bold  mb-2 font-serif italic">
          Best Selling Products
        </h3>
        <p className="text-gray-600 mb-6 italic">
          Discover our most popular products that are loved by many.
        </p>
        <div className="relative grid place-content-center z-20">
          <Link
            href={"/Search?query=Best_Seller"}
            className="relative group flex items-center justify-center gap-[10px] px-6 py-3  text-white font-semibold rounded-full overflow-hidden"
          >
            <span>See All Collection</span>
            <LuArrowRightCircle />
            <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#10e89c,#0593f7,#10e89c)] -z-10 group-hover:translate-x-[-50%] duration-200"></div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2 md:gap-6">
        {bestselling?.map((item, i) => {
          return (
            <Productcard
              key={i + new Date().getMilliseconds() + Math.random()} // More stable key
              index={i}
              id={item._id}
              image={item.colorpalets[0]?.images[0]}
              {...item}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Bestselling;
