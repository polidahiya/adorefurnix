import React from "react";
import Link from "next/link";

function Comp1({ comp1products }) {
  console.log(comp1products);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 md:gap-5 px-2 md:px-10">
        {new Array(3).fill(null).map((_, i) => (
          <Link key={i} href="/" className="relative block">
            <img
              src="https://joybird2.imgix.net/configurations/pid_657/-CF436-W03/657-CF436-W03-soto-chair-milo-dove-t1-2_t.png"
              alt=""
              className="relative z-10"
            />
            <div className="relative z-10 p-4">
              <h3 className="text-xl font-semibold tracking-tight">
                Adore Geometry Tv Cabinet Unit in Solid Wood
              </h3>
              <p className="mt-1">₹1,99,999</p>
            </div>

            <div className="absolute h-1/2 w-full bottom-0 left-0 bg-gray-50 rounded-3xl shadow-sm shadow-gray-300"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Comp1;
