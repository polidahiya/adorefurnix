import Link from "next/link";
import Image from "next/image";
import { categorylist } from "@/app/commondata";

function Subcategories({ category, subcat }) {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] place-items-center place-content-center p-[10px] gap-[5px] mt-[20px]">
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
  );
}

export default Subcategories;
