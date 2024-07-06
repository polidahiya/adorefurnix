import React from "react";
import { notFound } from "next/navigation";
import Productcard from "../_components/Productcard";
import Secondnav from "./_Components/Secondnav";
import { categorylist } from "../commondata";
import { filterlist } from "../commondata";
import { Cachedproducts } from "../_components/serveractions/Getcachedata";

async function page({ params, searchParams }) {
  const category = params.Category.replace(/%20/g, " ").replace(/%26/g, "&");

  // not found code
  if (!Object.keys(categorylist).includes(category)) {
    notFound();
  }

  // get products
  const filteredproducts = await Manageproducts(
    category,
    searchParams.pricerange
  );

  return (
    <div>
      <Secondnav category={category} searchParams={searchParams} />

      <div
        className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[20px] p-[20px]`}
      >
        {filteredproducts.map((item, i) => {
          return (
            <Productcard
              key={i + new Date().getMilliseconds()}
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
            />
          );
        })}
      </div>
    </div>
  );
}

let cachedproducts = null;
let lastproductfetchtime = null;

async function Manageproducts(category, pricerange) {
  const allproducts = await Cachedproducts();
  if (pricerange == undefined) {
    pricerange = 0;
  }
  // filter
  const filteredproducts = allproducts.filter((item) => {
    return (
      item.category === category &&
      (pricerange == 0 ||
        (item.price >= filterlist[pricerange].min &&
          item.price <= filterlist[pricerange].max))
    );
  });

  // rendomize
  const currentTime = new Date().getTime();
  const cachetime = 10 * 60 * 1000;
  if (
    !cachedproducts ||
    !lastproductfetchtime ||
    currentTime - lastproductfetchtime >= cachetime
  ) {
    filteredproducts.sort(() => Math.random() - 0.5);
    lastproductfetchtime = currentTime;
  }

  return filteredproducts;
}

export default page;
