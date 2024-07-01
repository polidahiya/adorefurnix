import React from "react";
import Productcard from "../_components/Productcard";

function page({ params }) {
  console.log(params.Category);
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px] p-[20px]">
        {new Array(10).fill(null).map((item, i) => {
          return (
            <Productcard
              key={i}
              name="Solid wood tile bed"
              image="/categoriesimages/Dining.jpg"
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
