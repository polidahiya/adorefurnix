"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Coloroption({ filteredproducts, color }) {
  return (
    <div className="flex gap-[50px] mt-[30px]">
      <span className="font-semibold text-slate-400 whitespace-nowrap">
        Color :
      </span>
      <div className="flex gap-[10px] overflow-x-scroll flex-wrap p-[20px]">
        {filteredproducts.colorpalets.map((item, i) => {
          return (
            <Link
              href={`/${filteredproducts.category}/${filteredproducts.subcat}/${filteredproducts._id}?color=${i}`}
              key={i}
              className={`relative p-[5px] flex flex-col items-center  cursor-pointer shadow-[0px_0px_5px_#bababa7f] rounded-[10px]
                ${color == i ? "outline outline-cyan-500" : ""}`}
            >
              <Comp image={item.images[0]} />
              <p className="text-center text-[12px]">{item?.name}</p>
              <div
                className={`absolute top-[5px] right-[5px] w-[20px] aspect-square rounded-full`}
                style={{ backgroundColor: item?.color }}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Comp({ image }) {
  const [safeimage, setsafeimage] = useState(image);
  return (
    <Image
      src={safeimage}
      className="h-[100px] min-w-[100px] object-contain object-center rounded-[5px]"
      alt="sdjfjds"
      height={100}
      width={100}
      onError={() => {
        setsafeimage("/default-fallback-image.png");
      }}
    ></Image>
  );
}

export default Coloroption;
