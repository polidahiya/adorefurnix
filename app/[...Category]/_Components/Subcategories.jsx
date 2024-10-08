import Link from "next/link";
import Image from "next/image";
import { categorylist } from "@/app/commondata";
import { BiSolidCategory } from "react-icons/bi";

function Subcategories({ category, subcat }) {
  if (categorylist[category]?.subcat.length > 0)
    return (
      <div className="bg-bg1 lg:mt-[10px] pt-[10px] lg:mr-[10px]">
        <h2 className="text-center font-bold text-[20px] items-center justify-center gap-[10px] hidden lg:flex">
          <BiSolidCategory />
          <span>Sub Categories</span>
        </h2>
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center place-content-center p-[10px] gap-[5px] mt-[10px]">
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
                  quality={50}
                  alt={itemsubcat.name}
                  className="w-full aspect-[4/3] object-cover object-center rounded-[5px] md:rounded-[10px]"
                ></Image>
                <div className="h-full w-full  text-center p-[5px]  text-[10px] md:text-[12px] lg:text-[14px] text-ellipsis whitespace-nowrap overflow-hidden">
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
