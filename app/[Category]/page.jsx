import React from "react";
import Productcard from "../_components/Productcard";
import Secondnav from "./_Components/Secondnav";

function page({ params }) {
  const category = params.Category.replace(/%20/g, " ").replace(/%26/g, "&");

  return (
    <div>
      <Secondnav category={category} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px] p-[20px]">
        {new Array(10).fill(null).map((item, i) => {
          return (
            <Productcard
              index={i}
              key={i}
              name="Solid wood tile bed"
              image="/categoriesimages/tables.jpg"
              preprice={500}
              price={167}
              available={false}
              liked={false}
            />
          );
        })}
      </div>
    </div>
  );
}

export default page;
