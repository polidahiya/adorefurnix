import React from "react";
import Image from "next/image";
import Link from "next/link";

function Roundcategories() {
  const list = [
    {
      name: "Sofa",
      image: "/circledimages/sofa.webp",
      link: "/Living_Room/Sofa_sets",
    },
    {
      name: "Bed",
      image: "/circledimages/bed.webp",
      link: "/Search?query=Bed",
    },
    {
      name: "Chairs",
      image: "/circledimages/chairs.webp",
      link: "/Search?query=chairs",
    },
    { name: "Dining", image: "/circledimages/dining.webp", link: "/Dining" },
    {
      name: "Tv Unit",
      image: "/circledimages/tvunit.webp",
      link: "/Storage/Tv_and_Entertainment_Unit",
    },
    {
      name: "Chester",
      image: "/circledimages/chester.webp",
      link: "/Bedroom/Chest_of_Drawers",
    },
    {
      name: "Sofa Cum Bed",
      image: "/circledimages/sofacumbed.webp",
      link: "/Living_Room/Sofa_cum_bed",
    },
    {
      name: "Bar Unit",
      image: "/circledimages/barunit.webp",
      link: "/Bar_Furniture",
    },
    {
      name: "Bookshelves",
      image: "/circledimages/bookshelves.webp",
      link: "/Storage/Book_Shelf",
    },
    {
      name: "Tables",
      image: "/circledimages/studytable.webp",
      link: "/Tables",
    },
    {
      name: "Wardrobes",
      image: "/circledimages/wardrobes.webp",
      link: "/Bedroom/Wardrobe",
    },
  ];

  return (
    <div className="relative">
      <div className="flex items-center gap-5 w-full overflow-x-scroll hidescroll px-3 md:px-10">
        {list.map((item, i) => (
          <Link key={i} href={item?.link} className="min-w-28 md:min-w-44">
            <Image
              src={item?.image}
              alt={item?.image}
              className=""
              width={175}
              height={150}
              quality={100}
              loading="lazy"
            ></Image>

            <p className="text-center font-semibold mt-2 text-[14px] md:text-[16px]">
              {item?.name}
            </p>
          </Link>
        ))}
      </div>
      {/* gradient */}
      <div className="absolute inset-0 pointer-events-none fadingscrolleffect"></div>
    </div>
  );
}

export default Roundcategories;
