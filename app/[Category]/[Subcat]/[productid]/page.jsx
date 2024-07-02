import React from "react";
import Link from "next/link";
import Imagescomp from "./Imagescomp";
import { Cachedproducts } from "@/app/_components/serveractions/Getcachedata";
import { categorylist } from "@/app/commondata";
import { notFound } from "next/navigation";
import Coloroption from "./Coloroption";
import Promices from "@/app/_components/Homepage/Promices";
import Cartsvg from "@/app/_svgs/Cartsvg";
import Productcard from "@/app/_components/Productcard";

async function page({ params, searchParams }) {
  const category = params.Category.replace(/%20/g, " ").replace(/%26/g, "&");
  const subcat = params.Subcat.replace(/%20/g, " ").replace(/%26/g, "&");
  const productid = params.productid.replace(/%20/g, " ").replace(/%26/g, "&");

  // all product
  const allproducts = await Cachedproducts();

  // not found code
  if (
    !Object.keys(categorylist).includes(category) ||
    !categorylist[category].subcat.map((item) => item.name).includes(subcat) ||
    !allproducts.map((item) => item._id).includes(productid)
  ) {
    notFound();
  }

  // filter products
  const filteredproducts = allproducts.filter(
    (item) => item._id == productid
  )[0];

  let pricebeforediscount = null;
  if (filteredproducts.discount > 0) {
    pricebeforediscount = Math.floor(
      (filteredproducts.price / (100 - filteredproducts.discount)) * 100
    );
  }

  // similar products
  const similarproducts = allproducts.filter(
    (item) =>
      item.category == category &&
      item.subcat == subcat &&
      item._id != productid
  );

  return (
    <div className=" ">
      <div className="flex items-start p-[10px]">
        <div className="w-[50%] lg:sticky lg:top-[130px]">
          {/* image component */}
          <Imagescomp
            filteredproducts={filteredproducts}
            color={searchParams?.color || 0}
          />
          <button className="flex items-center justify-center gap-[20px] w-full h-[40px] bg-[#ff9f00] text-white mt-[20px]">
            <Cartsvg styles="fill-white" /> <span>Add to Cart</span>
          </button>
        </div>
        {/* details */}
        <div className="w-[50%] p-[10px] px-[20px]">
          <div className=" flex gap-[10px] text-[#87878] text-[14px] ">
            <Link className="lg:hover:text-cyan-500" href={"/"}>
              Home
            </Link>{" "}
            {">"}
            <Link className="lg:hover:text-cyan-500" href={`/${category}`}>
              {category}
            </Link>{" "}
            {">"}
            <Link
              className="lg:hover:text-cyan-500"
              href={`/${category}/${subcat}`}
            >
              {subcat}
            </Link>{" "}
            {">"}
            <span>{filteredproducts.name}</span>
          </div>
          <h1 className="py-[10px] font-semibold">{filteredproducts.name}</h1>
          <div className="">
            <span className="font-semibold text-slate-400">Rating</span> :
            {new Array(Number(filteredproducts.rating))
              .fill(null)
              .map((star, i) => {
                return "⭐";
              })}{" "}
            <span className="p-[3px] px-[10px] bg-green-600 text-white rounded-[5px] font-semibold ">
              {filteredproducts.rating}
              {" / "}5
            </span>
          </div>
          <div className="font-bold mt-[10px]">
            <span className="text-[30px] ">₹{filteredproducts.price}</span>
            {pricebeforediscount && (
              <>
                <span className="line-through text-[#878787] ml-3">
                  {pricebeforediscount}
                </span>
                <span className="text-[#388e3c] ml-3">
                  {filteredproducts.discount}% off
                </span>
              </>
            )}
          </div>
          {/* colors */}
          <Coloroption
            filteredproducts={filteredproducts}
            color={searchParams?.color || 0}
          />
          {/* dimension */}
          <div className="flex gap-[10px] mt-[30px] font-semibold">
            <span className=" text-slate-400">Dimension :</span>
            {filteredproducts.Dimensions}
          </div>
          {/* description */}
          <div className="flex gap-[10px] mt-[30px] font-semibold">
            <span className=" text-slate-400">Description :</span>
            <div>
              {filteredproducts.desc.map((item, i) => {
                return (
                  <div key={i} className="flex items-center gap-[10px]">
                    <span className="h-[10px] aspect-square rounded-full bg-slate-300"></span>{" "}
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <Promices />
      {/* similar products */}
      <div className="bg-slate-100 px-[10px] py-[20px]">
        <h2 className="text-[22px] font-bold">Similar Products</h2>
        <div className="flex items-center gap-[20px]  mt-[20px] max-w-full overflow-x-scroll pb-[20px]">
          {similarproducts.map((item, i) => {
            return (
              <Productcard
                key={i}
                index={i}
                id={item._id}
                category={item.category}
                subcat={item.subcat}
                name={item.name}
                price={item.price}
                discount={item.discount}
                available={item.available}
                image={item.colorpalets[0].images[0]}
                rating={item.rating}
                liked={false}
                customwidth="min-w-[250px] w-[250px]"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
