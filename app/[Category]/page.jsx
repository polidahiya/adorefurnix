import React from "react";
import { notFound } from "next/navigation";
import Productcard from "../_components/Productcard";
import Secondnav from "./_Components/Secondnav";
import { categorylist } from "../commondata";
import { Cachedproducts } from "../_components/serveractions/Getcachedata";

async function page({ params }) {
  const category = params.Category.replace(/%20/g, " ").replace(/%26/g, "&");

  // not found code
  if (!Object.keys(categorylist).includes(category)) {
    notFound();
  }

  // get products
  const allproducts = await Cachedproducts();
  const filteredproducts = allproducts.filter(
    (item) => item.category == category
  );

  return (
    <div>
      <Secondnav category={category} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px] p-[20px]">
        {filteredproducts.map((item, i) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default page;
