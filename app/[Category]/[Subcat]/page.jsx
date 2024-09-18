import React from "react";
import Secondnav from "../_Components/Secondnav";
import Productcard from "@/app/_components/Productcard";
import { categorylist, filterlist } from "@/app/commondata";
import { notFound } from "next/navigation";
import { Cachedproducts } from "@/app/_serveractions/Getcachedata";
import Productnotfound from "@/app/_components/Productnotfound";
import Subcategories from "../_Components/Subcategories";
import { sortfn } from "../_Components/sort";

async function page({ params, searchParams }) {
  const category = params.Category.replace(/%20/g, " ").replace(/%26/g, "&");
  const subcat = params.Subcat.replace(/%20/g, " ").replace(/%26/g, "&");

  // not found code
  if (
    !Object.keys(categorylist).includes(category) ||
    !categorylist[category].subcat.map((item) => item.name).includes(subcat)
  ) {
    notFound();
  }

  // get products
  const allproducts = await Cachedproducts();

  let pricerange = searchParams.pricerange;
  if (pricerange == undefined) pricerange = 0;

  // filter products
  const filteredproducts = allproducts.filter((item) => {
    return (
      item.category === category &&
      item.subcat == subcat &&
      (searchParams.pricerange == 0 ||
        (item.price >= filterlist[pricerange].min &&
          item.price <= filterlist[pricerange].max))
    );
  });

  // sort products
  let sort = searchParams.sort;
  if (sort == undefined) sort = 0;
  const sortedproducts = sortfn(filteredproducts, sort);

  return (
    <div className="flex flex-col lg:flex-row">
      <Secondnav
        category={category}
        subcat={subcat}
        searchParams={searchParams}
      />
      <div className="w-full">
        <Subcategories category={category} subcat={subcat} />
        {sortedproducts.length != 0 ? (
          <div
            className={`w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[20px] p-[20px]`}
          >
            {sortedproducts.map((item, i) => {
              return (
                <Productcard
                  key={i + new Date().getMilliseconds() + Math.random()}
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
                />
              );
            })}
          </div>
        ) : (
          <Productnotfound />
        )}
      </div>
    </div>
  );
}

export default page;
