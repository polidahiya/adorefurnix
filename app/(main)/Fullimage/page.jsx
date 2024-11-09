import React from "react";
import Image from "next/image";
import { Cachedproducts } from "@/app/_serveractions/Getcachedata";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

async function page({ searchParams }) {
  const { pid, index, color } = searchParams;
  const allproducts = await Cachedproducts();
  const product = allproducts.filter((item) => item?._id == pid)[0];
  const images = product?.colorpalets[color]?.images;

  return (
    <div className="min-h-screen h-screen">
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
        <div className="absolute top-0 left-0 px-5 py-2  w-full flex items-center gap-2 text-sm font-bold text-white bg-[linear-gradient(90deg,black,transparent)]">
          <Link
            href={`/${product?.category}/${product?.subcat}/${product?._id}?color=${color}`.replace(
              / /g,
              "_"
            )}
            className="text-xl p-2 box-content rounded-full lg:hover:bg-white  lg:hover:bg-opacity-20"
            replace
          >
            <IoArrowBackOutline />
          </Link>
          <h1>{product?.name}</h1>
        </div>
        <Image
          src={images[index]}
          alt={product?.name}
          width={2000}
          height={2000}
          className="h-full w-full object-contain"
          quality={100}
          loading="lazy"
        ></Image>
        <div className="w-full flex items-center justify-center flex-wrap gap-2 absolute bottom-5 left-1/2 -translate-x-1/2">
          {images.map((image, i) => (
            <Link
              key={i}
              href={`/Fullimage?pid=${pid}&color=${color}&index=${i}`.replace(
                / /g,
                "_"
              )}
              replace
            >
              <Image
                src={image}
                alt={product?.name}
                height={100}
                width={100}
                quality={0}
                loading="lazy"
                className="min-w-12 w-12 aspect-square border border-slate-300"
              ></Image>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
