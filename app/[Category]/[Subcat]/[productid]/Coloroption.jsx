import React from "react";
import Image from "next/image";
import Link from "next/link";

function Coloroption({ filteredproducts, color }) {
  return (
    <div className="flex gap-[50px] mt-[30px]">
      <span className="font-semibold text-slate-400">Color :</span>
      <div className="flex gap-[10px]">
        {filteredproducts.colorpalets.map((item, i) => {
          return (
            <Link
              href={`/${filteredproducts.category}/${filteredproducts.subcat}/${filteredproducts._id}?color=${i}`}
              key={i}
              className={`relative p-[5px] border-[2px]  cursor-pointer
                ${color == i ? "border-cyan-500" : "border-slate-300"}`}
            >
              <Image
                src={item.images[0]}
                className="h-[100px] aspect-square  object-contain object-center "
                alt="sdjfjds"
                height={100}
                width={100}
              ></Image>
              <p className="text-center">{item.name}</p>
              <div
                className={`absolute top-[5px] right-[5px] w-[20px] aspect-square rounded-full`}
                style={{ backgroundColor: item.color }}
              ></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Coloroption;
