import React from "react";

function Collage() {
  const collage = [
    {
      image:
        "https://www.decorpot.com/images/500618969Living-Room-Furniture-Essentials_Main.jpg",
      title: "Living room",
    },
    {
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/NZ/VW/LE/183238162/modern-l-shape-kitchen.jpg",
      title: "Pta nhi",
    },
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/living-room-ideas-hbx060122cover-001-1657042925.jpg?crop=1xw:1xh;center,top&resize=980:*",
      title: "ye bda kmra lgra h",
    },
  ];

  return (
    <div className="px-[10px] md:px-[200px] mt-[80px]">
      <h2 className="text-center font-bold text-[25px] md:text-[40px] italic font-serif">This is a heading</h2>
      <p className="text-center font-bold text-gray-700">
        This is a para this is a para
      </p>
      <div className="grid grid-cols-2 gap-[20px] mt-[30px]">
        <div className="relative group rounded-[2vw] aspect-[4/2] overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover object-center scale-[1.2] group-hover:scale-[1] duration-700"
            src={collage[0].image}
            alt={collage[0].title}
          />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-[50%] pointer-events-none opacity-0 group-hover:opacity-[1] duration-300">
            <div className="text-white font-bold text-[2.5vw] translate-y-[50px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 duration-300">
              {collage[0].title}
            </div>
          </div>
        </div>
        <div className="relative group rounded-[2vw]  row-span-2 overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover object-center scale-[1.2] group-hover:scale-[1] duration-700"
            src={collage[1].image}
            alt={collage[1].title}
          />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-[50%] pointer-events-none opacity-0 group-hover:opacity-[1] duration-300">
            <div className="text-white font-bold text-[2.5vw] translate-y-[50px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 duration-300">
              {collage[1].title}
            </div>
          </div>
        </div>
        <div className="relative group rounded-[2vw] aspect-[4/2] overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover object-center scale-[1.2] group-hover:scale-[1] duration-700"
            src={collage[2].image}
            alt={collage[2].title}
          />
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-[50%] pointer-events-none opacity-0 group-hover:opacity-[1] duration-300">
            <div className="text-white font-bold text-[2.5vw] translate-y-[50px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 duration-300">
              {collage[2].title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collage;
