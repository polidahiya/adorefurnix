import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Products({ cart, setcart }) {
  return (
    <>
      {Object.keys(cart).map((item, i) => {
        const color = item.split(",")[1];
        const product = cart[item];

        let pricebeforediscount = null;
        if (product.discount > 0) {
          pricebeforediscount = Math.floor(
            (product.price / (100 - product.discount)) * 100
          );
        }
        return (
          <div key={i} className="flex flex-col gap-[20px] w-full p-[20px]">
            {i != 0 && <hr />}
            <div className="flex gap-[20px] h-[150px]">
              <Link
                href={`/${product.category}/${product.subcat}/${product._id}?color=${color}`}
                className="h-full aspect-square border border-slate-300"
              >
                <Image
                  src={product.colorpalets[product.selectedcolor].images[0]}
                  alt={product.name}
                  height={200}
                  width={200}
                  className="h-full w-full object-contain object-center"
                />
              </Link>
              <div className="flex flex-col h-full w-full ">
                <h2 className="font-bold text-[18px] text-ellipsis overflow-hidden whitespace-nowrap">
                  {product.name}
                </h2>
                <p className=" font-bold text-gray-500">
                  By :{" "}
                  <span className="bg-theme bg-clip-text text-transparent">
                    AdoreFurnix
                  </span>
                </p>
                <p className="font-bold flex gap-[10px] items-baseline mt-[10px]">
                  {pricebeforediscount && (
                    <span className="text-gray-500 line-through">
                      ₹
                      {parseInt(
                        pricebeforediscount * product.quantity,
                        10
                      ).toLocaleString("en-IN")}
                    </span>
                  )}
                  <span className="text-[20px] text-black">
                    ₹
                    {parseInt(
                      product.price * product.quantity,
                      10
                    ).toLocaleString("en-IN")}
                  </span>
                  {pricebeforediscount && (
                    <span className="text-[14px] text-green-500 font-semibold">
                      {product.discount + "%"} OFF
                    </span>
                  )}
                </p>
                <div className="flex gap-[20px] mt-auto">
                  <div className="flex items-center gap-[5px] h-[30px]">
                    <button
                      className="h-full aspect-square rounded-[5px] border border-slate-300"
                      onClick={() => {
                        if (product.quantity <= 1) {
                          return;
                        }
                        setcart((pre) => ({
                          ...pre,
                          [item]: {
                            ...product,
                            quantity: product.quantity - 1,
                          },
                        }));
                      }}
                    >
                      -
                    </button>
                    <span className="h-full flex items-center justify-center px-[20px] border border-slate-300 rounded-[5px]">
                      {product.quantity}
                    </span>
                    <button
                      className="h-full aspect-square rounded-[5px] border border-slate-300"
                      onClick={() => {
                        if (product.quantity >= 10) {
                          return;
                        }
                        setcart((pre) => ({
                          ...pre,
                          [item]: {
                            ...product,
                            quantity: product.quantity + 1,
                          },
                        }));
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button className="h-full border border-slate-300 px-[20px] rounded-full">
                    Save for Later
                  </button>
                  <button
                    className="h-full border border-slate-300 px-[20px] rounded-full"
                    onClick={() => {
                      const newcart = { ...cart };
                      delete newcart[item];

                      setcart(newcart);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
