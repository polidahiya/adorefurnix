import React from "react";

function Blogimage({ image, title }) {
  return (
    <div className="relative group rounded-[2vw] aspect-square overflow-hidden cursor-pointer">
      <img
        className="w-full h-full object-cover object-center scale-[1.2] group-hover:scale-[1] duration-700"
        src={image}
        alt={title}
      />
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-[50%] pointer-events-none opacity-0 group-hover:opacity-[1] duration-300">
        <div className="text-white font-bold text-[1.5vw] translate-y-[50px] opacity-0 group-hover:opacity-[1] group-hover:translate-y-0 duration-300">
          Read more
        </div>
      </div>
      <div className="absolute left-0 top-0 bg-white rounded-br-[2vw] text-[12px] px-[15px] font-bold group-hover:translate-y-[-120%] duration-300 ">12&#47;12&#47;12</div>
    </div>
  );
}

export default Blogimage;
