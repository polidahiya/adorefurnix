import React from "react";
import Productcard from "@/app/_components/Productcard";
import { AiFillProduct } from "react-icons/ai";

function Similarproducts({ allproducts, category, subcat, productid }) {
  const similarproducts = allproducts.filter(
    (item) =>
      item.category == category &&
      item.subcat == subcat &&
      item._id != productid
  );

  return (
    <>
      {similarproducts.length > 0 && (
        <div className="bg-slate-100 px-[10px] md:px-[40px] py-[20px]">
          <h2 className="flex items-center gap-[10px] text-[22px] font-bold text-center md:text-start w-full">
            <AiFillProduct /> Similar Products
          </h2>
          <div className="flex items-center gap-[20px]  mt-[20px] max-w-full overflow-x-scroll pb-[20px]">
            {similarproducts.map((item, i) => {
              return (
                <Productcard
                  key={i}
                  index={i}
                  id={item._id}
                  image={item.colorpalets[0].images[0]}
                  {...item}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Similarproducts;
