"use client";
import { getordershistory } from "@/app/_components/serveractions/Getordershistory";
import Componentloading from "@/app/_components/Componentloading";
import Productnotfound from "@/app/_components/Productnotfound";
import Productcard from "@/app/_components/Productcard";
import React, { useEffect, useState } from "react";
import { AppContextfn } from "@/app/Context";
import Threedotssvg from "@/app/_svgs/Threedotssvg";

export default function Historypage() {
  const [showloading, setshowloading] = useState(true);

  const [ordershistory, setordershistory] = useState([]);
  useEffect(() => {
    (async () => {
      const orders = await getordershistory();
      setordershistory([...orders]);
      setshowloading(false);
    })();
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-[25px] md:text-[40px] italic font-serif mt-[20px]">
        Orders History
      </h2>
      {ordershistory.length != 0 ? (
        <div
          className={`min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-110px)] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[20px] p-[20px]`}
        >
          {ordershistory.map((item, i) => (
            <Historyproductcard key={i} item={item} i={i} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-110px)]">
          {showloading ? <Componentloading /> : <Productnotfound />}
        </div>
      )}
    </div>
  );
}

function Historyproductcard({ item, i }) {
  const { setmessagefn } = AppContextfn();
  const orderstages = [
    "Order Placed",
    "Order Processing",
    "Order Shipped",
    "Order Delivered",
  ];

  const [moreoptions, setmoreoptions] = useState({
    show: false,
    effect: false,
  });

  const showmoreoptions = () => {
    setmoreoptions((pre) => ({ ...pre, show: true }));
    setTimeout(() => {
      setmoreoptions((pre) => ({ ...pre, effect: true }));
    }, 100);
  };
  const hidemoreoptions = () => {
    setmoreoptions((pre) => ({ ...pre, effect: false }));
    setTimeout(() => {
      setmoreoptions((pre) => ({ ...pre, show: false }));
    }, 300);
  };
  return (
    <div className="relative shadow-md rounded-[10px] overflow-hidden">
      <Productcard
        index={i}
        id={item.productid}
        category={item.category}
        subcat={item.subcat}
        name={item.name}
        price={item.price}
        discount={item.discount}
        available={true}
        image={item.colorpalets[0].images[0]}
        rating={item.rating}
      />
      {/* more options button */}
      <div
        className="absolute right-[10px] top-[10px] bg-white rounded-full p-[3px] cursor-pointer z-10"
        onClick={() => {
          if (moreoptions.show) {
            hidemoreoptions();
          } else {
            showmoreoptions();
          }
        }}
      >
        <Threedotssvg styles="h-[25px] fill-black" />
        <div
          className={`absolute top-[calc(100%+10px)] right-0 bg-white rounded-[10px] w-[150px] shadow-md p-[5px] duration-300 ${
            moreoptions.effect
              ? "opacity-100 translate-y-0"
              : " opacity-0 translate-y-[20px]"
          }`}
        >
          <button className="w-full rounded-[5px] text-center lg:hover:bg-slate-100">
            Cancel Order
          </button>
        </div>
      </div>
      {/* hide option black screen */}
      {moreoptions.show && (
        <div
          className="fixed h-full w-full top-0 left-0"
          onClick={hidemoreoptions}
        ></div>
      )}

      {/* more details */}
      <div className="flex items-center w-full mt-[10px] px-[40px]">
        {orderstages.map((item, i) => {
          return (
            <>
              {i != 0 && <div className="h-[2px] w-full bg-theme"></div>}
              <div className="min-w-[10px] aspect-square bg-theme rounded-full"></div>
            </>
          );
        })}
      </div>
      {/*  */}
      <div className="flex items-center w-full p-[10px] text-[12px] gap-[10px]">
        {orderstages.map((item, i) => {
          return (
            <span key={i} className="text-center">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
