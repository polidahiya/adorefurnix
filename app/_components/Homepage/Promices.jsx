import React from "react";
import Deliverysvg from "@/app/_svgs/Deliverysvg";
import Paymentsvg from "@/app/_svgs/Paymentsvg";
import Qualitysvg from "@/app/_svgs/Qualitysvg";

function Promices() {
  const services = [
    {
      image: <Paymentsvg styles="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" />,
      heading: "Flexible payment",
      para: "This is a test paragraph",
    },
    {
      image: <Deliverysvg styles="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" />,
      heading: "Hassle free delivery",
      para: "This is a test paragraph",
    },
    {
      image: <Qualitysvg styles="h-[40px] w-[40px] md:h-[80px] md:w-[80px]" />,
      heading: "Quality assured",
      para: "This is a test paragraph",
    },
  ];
  return (
    <div className="h-[200px] flex items-center justify-evenly ">
      {services.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center gap-[10px]"
          >
            {item.image}
            <div className="flex flex-col justify-between items-center md:items-start py-[5px]">
              <h2 className="text-[12px] md:text-[25px] font-bold italic font-serif">
                {item.heading}
              </h2>
              <p className="text-[8px] md:text-[16px] font-semibold text-slate-500">
                {item.para}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Promices;
