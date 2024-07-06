import React from "react";
import Productcard from "@/app/_components/Productcard";
import { Cachedproducts } from "@/app/_components/serveractions/Getcachedata";
import Productnotfound from "@/app/_components/Productnotfound";

async function page({ searchParams }) {
  const words = searchParams?.query;

  let allproducts = await Cachedproducts();

  words.split(" ").forEach((word, i) => {
    if (word.trim() !== "") {
      allproducts = allproducts.filter((product) => {
        const nameMatch = product?.name
          ?.toLowerCase()
          .includes(word.toLowerCase());

        const descMatch = product?.desc?.some((descItem) =>
          descItem.toLowerCase().includes(word.toLowerCase())
        );

        const keywordsMatch = product?.keywords
          ?.toLowerCase()
          .includes(word.toLowerCase());

        const categoryMatch = product?.category
          ?.toLowerCase()
          .includes(word.toLowerCase());

        const subcategoryMatch = product?.subcat
          ?.toLowerCase()
          .includes(word.toLowerCase());

        return (
          nameMatch ||
          descMatch ||
          keywordsMatch ||
          categoryMatch ||
          subcategoryMatch
        );
      });
    }
  });

  // sorting so that name comes first..
  allproducts.sort((a, b) => {
    const nameA = a?.name?.toLowerCase();
    const nameB = b?.name?.toLowerCase();
    if (
      nameA.includes(words.toLowerCase()) &&
      !nameB.includes(words.toLowerCase())
    ) {
      return -1;
    } else if (
      !nameA.includes(words.toLowerCase()) &&
      nameB.includes(words.toLowerCase())
    ) {
      return 1;
    } else {
      return 0;
    }
  });
  if (allproducts.length != 0) {
    return (
      <div
        className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[20px] p-[20px]`}
      >
        {allproducts.map((item, i) => {
          return (
            <Productcard
              key={i}
              index={i}
              id={item._id}
              category={item.category}
              subcat={item.subcat}
              name={item.name}
              price={item.price}
              discount={item.discount}
              available={item.available}
              image={item.colorpalets[0].images[0]}
              rating={item.rating}
              liked={false}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="h-[calc(100vh-120px)] flex items-center justify-center">
        <Productnotfound />
      </div>
    );
  }
}

export default page;
