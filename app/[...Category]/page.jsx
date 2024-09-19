import React from "react";
import { notFound } from "next/navigation";
import Productcard from "../_components/Productcard";
import Secondnav from "./_Components/Secondnav";
import { categorylist } from "../commondata";
import { Cachedproducts } from "../_serveractions/Getcachedata";
import Productnotfound from "../_components/Productnotfound";
import Subcategories from "./_Components/Subcategories";
import { sortProducts, filterProducts } from "./_Components/sortandfilter";
import Productpage from "../_productpage/Productpage";

async function page({ params, searchParams }) {
  const { Category: slug } = params;

  const category = slug && slug[0] ? decodeURIComponent(slug[0]) : null;
  const subcat = slug && slug[1] ? decodeURIComponent(slug[1]) : null;
  const productid = slug && slug[2] ? decodeURIComponent(slug[2]) : null;

  if (productid)
    return (
      <Productpage category={category} subcat={subcat} productid={productid}  color={searchParams?.color || 0}/>
    );

  // Validate category and subcategory
  validateCategoryAndSubcategory(category, subcat);

  // Get products
  const allproducts = await Cachedproducts();
  const pricerange = searchParams.pricerange || 0;

  // Filter products
  const filteredProducts = filterProducts(
    allproducts,
    category,
    subcat,
    pricerange
  );
  const sortedProducts = sortProducts(filteredProducts, searchParams.sort || 0);

  return (
    <div className="flex flex-col lg:flex-row">
      <Secondnav
        category={category}
        subcat={subcat}
        searchParams={searchParams}
      />
      <div className="w-full">
        <Subcategories category={category} subcat={subcat} />
        {sortedProducts.length > 0 ? (
          <ProductGrid products={sortedProducts} />
        ) : (
          <Productnotfound />
        )}
      </div>
    </div>
  );
}

function validateCategoryAndSubcategory(category, subcat) {
  if (!category || !Object.keys(categorylist).includes(category)) {
    notFound();
  }

  if (
    subcat &&
    !categorylist[category].subcat.some((item) => item.name === subcat)
  ) {
    notFound();
  }
}

function ProductGrid({ products }) {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[10px] md:gap-[20px] p-[10px] md:p-[20px]">
      {products.map((item, i) => (
        <Productcard
          key={i + new Date().getMilliseconds() + Math.random()} // More stable key
          index={i}
          id={item._id}
          image={item.colorpalets[0]?.images[0]}
          {...item}
        />
      ))}
    </div>
  );
}

export default page;
