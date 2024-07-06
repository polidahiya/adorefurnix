import React from "react";
import Secondnav from "../_Components/Secondnav";
import Productcard from "@/app/_components/Productcard";
import { categorylist, filterlist } from "@/app/commondata";
import { notFound } from "next/navigation";
import { Cachedproducts } from "@/app/_components/serveractions/Getcachedata";

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
  // const allproducts = await Cachedproducts();
  // const filteredproducts = allproducts.filter(
  //   (item) => item.category == category && item.subcat == subcat
  // );
  const allproducts = await Cachedproducts();
  let pricerange = searchParams.pricerange;
  if (pricerange == undefined) {
    pricerange = 0;
  }
  const filteredproducts = allproducts.filter((item) => {
    return (
      item.category === category &&
      item.subcat == subcat &&
      (searchParams.pricerange == 0 ||
        (item.price >= filterlist[pricerange].min &&
          item.price <= filterlist[pricerange].max))
    );
  });

  return (
    <div>
      <Secondnav
        category={category}
        subcat={subcat}
        searchParams={searchParams}
      />

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

export default page;
