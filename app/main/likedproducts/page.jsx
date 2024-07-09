"use client";
import { getLikedProducts } from "@/app/_components/serveractions/Likedproducts";
import { Cachedproducts } from "@/app/_components/serveractions/Getcachedata";
import { likeproduct } from "@/app/_components/serveractions/Likedproducts";
import Componentloading from "@/app/_components/Componentloading";
import Productnotfound from "@/app/_components/Productnotfound";
import Productcard from "@/app/_components/Productcard";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "@/app/Context";
import Heart from "@/app/_svgs/Heart";

export default function Favouritespage() {
  const { setmessagefn } = AppContextfn();
  const [showloading, setshowloading] = useState(true);
  const [favouritesproducts, setfavouritesproducts] = useState([]);
  useEffect(() => {
    (async () => {
      const likedproducts = await getLikedProducts();
      const allproducts = await Cachedproducts();
      const filtereditems = allproducts.filter((item) =>
        likedproducts.favourites.includes(item._id)
      );
      setfavouritesproducts([...filtereditems]);
      setshowloading(false);
    })();
  }, []);

  if (favouritesproducts.length != 0) {
    return (
      <div
        className={`min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-110px)] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[20px] p-[20px]`}
      >
        {favouritesproducts.map((item, i) => {
          return (
            <div
              key={i}
              className="relative shadow-md rounded-[10px] overflow-hidden"
            >
              <Productcard
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
              />
              {/* like button */}
              <button
                className="absolute right-[10px] top-[10px] bg-white rounded-full p-[3px] "
                title="Add to favourites"
                onClick={async () => {
                  let res = await likeproduct(item._id, true);
                  if (res.message == "Removed from favourites") {
                    setfavouritesproducts((pre) => {
                      const filteredArray = pre.filter(
                        (pro) => pro._id != item._id
                      );
                      return filteredArray;
                    });
                  }
                  setmessagefn(res?.message);
                }}
              >
                <Heart
                  styles={`h-[25px]  w-[25px]  translate-y-[1px] fill-red-500 stroke-none`}
                />
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-110px)]">
        {showloading ? <Componentloading /> : <Productnotfound />}
      </div>
    );
  }
}
