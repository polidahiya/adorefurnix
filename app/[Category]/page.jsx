import React from "react";
import { notFound } from "next/navigation";
import Productcard from "../_components/Productcard";
import Secondnav from "./_Components/Secondnav";
import { categorylist } from "../commondata";
import { filterlist } from "../commondata";
import { Cachedproducts } from "../_serveractions/Getcachedata";
import Productnotfound from "../_components/Productnotfound";

async function page({ params, searchParams }) {
  const category = params.Category.replace(/%20/g, " ").replace(/%26/g, "&");

  // not found code
  if (!Object.keys(categorylist).includes(category)) {
    notFound();
  }

  // get products
  const allproducts = await Cachedproducts();
  let pricerange = searchParams.pricerange;
  if (pricerange == undefined) {
    pricerange = 0;
  }
  let filteredproducts = allproducts.filter((item) => {
    return (
      item.category === category &&
      (searchParams.pricerange == 0 ||
        (item.price >= filterlist[pricerange].min &&
          item.price <= filterlist[pricerange].max))
    );
  });

  // randomize
  filteredproducts = filteredproducts.sort(() => Math.random() - 0.5);

  return (
    <div>
      <Secondnav category={category} searchParams={searchParams} />
      {filteredproducts.length != 0 ? (
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
              />
            );
          })}
        </div>
      ) : (
        <Productnotfound />
      )}
    </div>
  );
}

export default page;
