import React from "react";
import { RatingStars } from "../Ratingstars";
import Link from "next/link";
import { LuArrowRightCircle } from "react-icons/lu";
import Image from "next/image";

async function Bestselling({ Cachedproducts }) {
  const allproducts = await Cachedproducts();
  const bestselling = allproducts
    .filter((item) => item.keywords.toLowerCase().includes("best seller"))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16  mt-[50px]">
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
          const pricebeforediscount = Math.floor(
            (item?.price / (100 - item.discount)) * 100
          );
          return (
            <Link
              href={`/${item.category}/${item.subcat}/${item._id}`.replace(/ /g, "_")}
              key={i}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden  cursor-pointer"
            >
              <Image
                className="w-full aspect-[4/3] object-cover object-center p-[10px]"
                src={item.colorpalets[0]?.images[0]}
                alt={item.name}
                width={400}
                height={400}
                loading="lazy"
              />
              <div className="p-4">
                <h4 className="text-[14px] md:text-[16px] font-semibold text-gray-900 mb-1 md:mb-2 truncate">
                  {item.name}
                </h4>
                <RatingStars rating={item.rating} />
                <div className="mt-[10px] flex flex-wrap items-center gap-[5px] md:gap-[10px]">
                  <span className="font-bold text-[16px] md:text-[20px]">
                    ₹{parseInt(item?.price, 10).toLocaleString("en-IN")}
                  </span>
                  {pricebeforediscount && (
                    <>
                      <span className="line-through text-[12px] md:text-[16px] text-[#878787]">
                        ₹
                        {parseInt(pricebeforediscount, 10).toLocaleString(
                          "en-IN"
                        )}
                      </span>
                      <span className="font-bold text-[12px] md:text-[16px] text-[#388e3c]">
                        {item.discount}% off
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#c1d0e4] to-transparent rounded-lg z-[-1]"></div>
              {/* best selling tag */}
              <Image
                className="absolute top-1 right-1 w-16 md:w-20 aspect-square object-contain"
                src="/images/bestsellertag.png"
                height={100}
                width={100}
                alt="best selling tag Image"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bestselling;
