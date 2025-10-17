import React from "react";
import Link from "next/link";

function Comp1({ comp1products }) {
  console.log(comp1products);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 md:gap-5 px-2 md:px-10">
        {comp1products.map((item, i) => (
          <Link key={i} href={"/"} className="relative block">
            <img
              src={item.colorpalets[0]?.images[0]}
              alt={item?.name}
              className="relative z-10"
            />
            <div className="relative z-10 p-4">
              <h3 className="text-xl font-semibold tracking-tight">
                {item?.name}
              </h3>
              <p className="mt-1">₹{item?.price}</p>
            </div>

            <div className="absolute h-1/2 w-full bottom-0 left-0 bg-gray-50 rounded-3xl shadow-sm shadow-gray-300"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Comp1;
