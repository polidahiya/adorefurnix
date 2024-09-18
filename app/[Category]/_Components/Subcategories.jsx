import Link from "next/link";
import Image from "next/image";
import { categorylist } from "@/app/commondata";
import { BiSolidCategory } from "react-icons/bi";

function Subcategories({ category, subcat }) {
  return (
    <div className="bg-bg1 mt-[10px] pt-[10px] lg:mr-[10px]">
      <h2 className="text-center font-bold text-[20px] flex items-center justify-center gap-[10px]">
        <BiSolidCategory />
        <span>Sub Categories</span>
      </h2>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center place-content-center p-[10px] gap-[5px] mt-[10px]">
        {categorylist[category]?.subcat.map((itemsubcat, i) => {
          return (
            <Link
              key={i}
              href={`/${category}/${itemsubcat.name}`}
              className={`w-full md:w-[150px] flex flex-col items-center rounded-[5px] md:rounded-[10px]  ${
                subcat == itemsubcat.name &&
                "bg-theme bg-clip-text text-transparent"
              }`}
            >
              <Image
                src={itemsubcat.image}
                width={100}
                height={100}
                alt={itemsubcat.name}
                className="w-full aspect-[4/3] object-cover object-center rounded-[5px] md:rounded-[10px]"
              ></Image>
              <div className="h-full w-full  text-center p-[5px]  text-[14px] text-ellipsis whitespace-nowrap overflow-hidden">
                {itemsubcat.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Subcategories;
