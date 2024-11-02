import React from "react";
import Link from "next/link";
import Imagescomp from "./_comps/Imagescomp";
import { Cachedproducts } from "@/app/_serveractions/Getcachedata";
import { categorylist } from "@/app/commondata";
import { notFound } from "next/navigation";
import Coloroption from "./_comps/Coloroption";
import Promices from "@/app/_components/Homepage/Promices";
import { Addtocartbuttons } from "./_comps/Publiccomps";
import Rating from "@/app/_components/Ratingstars";
import { cookies } from "next/headers";
import ProductCare from "./_comps/Productcare";
import Similarproducts from "./_comps/Similarproducts";
import { RxChevronRight } from "react-icons/rx";

async function Productpage({ category, subcat, productid, color }) {
  const token = cookies()?.get("next-auth.session-token")?.value;
  const allproducts = await Cachedproducts();

  // Validate category, subcategory, and product existence
  if (
    !categorylist[category] ||
    !categorylist[category].subcat.some((item) => item.name === subcat) ||
    !allproducts.some((item) => item._id === productid)
  ) {
    notFound();
  }

  const filteredProduct = allproducts.find((item) => item._id === productid);
  const priceBeforeDiscount =
    filteredProduct.discount > 0
      ? Math.floor(
          (filteredProduct.price / (100 - filteredProduct.discount)) * 100
        )
      : null;

  return (
    <article>
      <header className="flex flex-col lg:flex-row items-start p-[10px]">
        <div className="w-full lg:w-[50%] lg:sticky lg:top-[130px]">
          <Imagescomp
            filteredproducts={filteredProduct}
            color={color}
            token={token}
          />
        </div>
        <section className="w-full lg:w-[50%] p-[10px] px-[20px]">
          <Breadcrumbs
            category={category}
            subcat={subcat}
            productName={filteredProduct.name}
          />

          <h1
            className="text-[20px] md:text-[25px] py-[10px] font-semibold"
            itemProp="name"
          >
            {filteredProduct.name}
          </h1>
          <Rating rating={filteredProduct.rating} />

          <PriceDisplay
            filteredProduct={filteredProduct}
            priceBeforeDiscount={priceBeforeDiscount}
          />

          <Coloroption filteredproducts={filteredProduct} color={color} />

          <Dimensions dimensions={filteredProduct.Dimensions} />

          <Description description={filteredProduct.desc} />

          <Addtocartbuttons filteredproducts={filteredProduct} color={color} />
        </section>
      </header>

      <ProductCare />

      <Similarproducts
        allproducts={allproducts}
        category={category}
        subcat={subcat}
        productid={productid}
      />
      <Promices />
    </article>
  );
}

const Breadcrumbs = ({ category, subcat, productName }) => (
  <nav className="sticky top-[60px] lg:top-[110px] pl-8 lg:pl-0 py-[20px] lg:py-0 bg-white flex items-center gap-[3px] text-[#87878] text-[14px] z-20 whitespace-nowrap cursor-pointer">
    <Link className="lg:hover:text-cyan-500" href="/">
      Home
    </Link>
    <RxChevronRight className="min-w-3" />
    <Link
      className="lg:hover:text-cyan-500"
      href={`/${category}`.replace(/ /g, "_")}
    >
      {category}
    </Link>
    <RxChevronRight className="min-w-3" />
    <Link
      className="lg:hover:text-cyan-500"
      href={`/${category}/${subcat}`.replace(/ /g, "_")}
    >
      {subcat}
    </Link>
    <RxChevronRight className="min-w-3" />
    <span className="text-ellipsis overflow-hidden">{productName}</span>
  </nav>
);

const PriceDisplay = ({ filteredProduct, priceBeforeDiscount }) => (
  <div className="font-bold mt-[10px]">
    <span
      className="text-[30px]"
      itemProp="offers"
      itemScope
      itemType="http://schema.org/Offer"
    >
      ₹{parseInt(filteredProduct.price, 10).toLocaleString("en-IN")}
    </span>
    {priceBeforeDiscount && (
      <>
        <span
          className="line-through text-[#878787] ml-3"
          itemProp="priceBeforeDiscount"
        >
          {parseInt(priceBeforeDiscount, 10).toLocaleString("en-IN")}
        </span>
        <span
          className="text-[#388e3c] ml-3"
          itemProp="discount"
          itemScope
          itemType="http://schema.org/Discount"
        >
          {filteredProduct.discount}% Off
        </span>
      </>
    )}
  </div>
);

const Dimensions = ({ dimensions }) => (
  <div className="flex gap-[10px] mt-[30px] font-semibold">
    <span className="text-slate-400 whitespace-nowrap">Dimension:</span>
    {dimensions || <span className="text-red-500">Not Available{" *"}</span>}
  </div>
);

const Description = ({ description }) =>
  description?.length > 0 && (
    <div className="flex flex-col md:flex-row gap-[10px] mt-[30px] font-semibold">
      <span className="text-slate-400 whitespace-nowrap">Description:</span>
      <div>
        {description.map((item, index) => (
          <div key={index} className="flex items-start gap-[10px] pl-5 md:pl-0">
            <span className="h-[10px] aspect-square rounded-full bg-slate-300 mt-2"></span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );

export default Productpage;
