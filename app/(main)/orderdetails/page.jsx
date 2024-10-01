"use client";
import {
  getordershistory,
  Cancelorder,
} from "@/app/_serveractions/Getordershistory";
import Componentloading from "@/app/_components/Componentloading";
import Productnotfound from "@/app/_components/Productnotfound";
import Productcard from "@/app/_components/Productcard";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LiaExclamationTriangleSolid } from "react-icons/lia";
import { IoHelpCircleOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { orderstages } from "@/app/commondata";
import { AppContextfn } from "@/app/Context";
import Link from "next/link";

export default function Historypage() {
  const [showloading, setshowloading] = useState(true);
  const [ordershistory, setordershistory] = useState([]);

  useEffect(() => {
    (async () => {
      const orders = await getordershistory();
      setordershistory(orders);
      setshowloading(false);
    })();
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-[25px] md:text-[30px] italic font-serif mt-[20px]">
        Orders History
      </h2>
      {ordershistory.length ? (
        <div className="min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-110px)] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[20px] p-[20px]">
          {ordershistory.map((item, i) => (
            <Historyproductcard
              key={i}
              item={item}
              setordershistory={setordershistory}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-110px)]">
          {showloading ? <Componentloading /> : <Productnotfound />}
        </div>
      )}
      {/* cancle confirmation message */}
    </div>
  );
}

const Historyproductcard = ({ item, setordershistory }) => {
  const { setmessagefn } = AppContextfn();
  const [showconfirmation, setshowconfirmation] = useState(false);
  const [moreoptions, setmoreoptions] = useState({
    show: false,
    effect: false,
  });

  const toggleMoreOptions = () => {
    setmoreoptions((prev) => ({ ...prev, show: !prev.show }));
    setTimeout(() => {
      setmoreoptions((prev) => ({ ...prev, effect: prev.show }));
    }, 100);
  };

  const handleCancelOrder = async () => {
    const res = await Cancelorder(item._id);
    if (res?.message === "Order Canceled") {
      setordershistory((prev) =>
        prev.filter((order) => order._id !== item._id)
      );
    }
    setmessagefn(res?.message);
  };

  return (
    <div className="relative shadow-md rounded-[10px] overflow-hidden">
      <Productcard
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

      {item.status < 3 && (
        <div
          className="absolute right-[10px] top-[10px] p-[5px] aspect-square bg-white rounded-full cursor-pointer z-10"
          onClick={toggleMoreOptions}
        >
          <BiDotsHorizontalRounded />
          <div
            className={`absolute top-[calc(100%+10px)] right-0 bg-white rounded-[10px] w-[150px] shadow-md p-[5px] duration-300 ${
              moreoptions.effect
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[20px]"
            }`}
          >
            <button
              className="w-full rounded-[5px] text-center lg:hover:bg-slate-100"
              onClick={() => setshowconfirmation(true)}
            >
              Cancel Order
            </button>
          </div>
        </div>
      )}

      {moreoptions.show && (
        <div
          className="fixed h-full w-full top-0 left-0"
          onClick={toggleMoreOptions}
        ></div>
      )}
      {showconfirmation && (
        <Cancleorderconfirmation
          confirmfn={handleCancelOrder}
          setshowconfirmation={setshowconfirmation}
        />
      )}
      <OrderStatus item={item} />
    </div>
  );
};

const OrderStatus = ({ item }) => {
  return (
    <>
      <div className="flex items-center w-full mt-[10px] px-[40px]">
        {orderstages.map((_, i) => (
          <div key={i} className={`flex items-center ${i !== 0 && "w-full"}`}>
            {i !== 0 && (
              <div
                className={`h-[2px] w-full ${
                  item.status >= i ? "bg-theme" : "bg-slate-300"
                }`}
              ></div>
            )}
            <div
              className={`min-w-[10px] aspect-square rounded-full ${
                item.status >= i ? "bg-theme" : "bg-slate-300"
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex items-center w-full p-[10px] text-[10px] gap-[10px]">
        {orderstages.map((stage, i) => (
          <span key={i} className="text-center">
            {stage}
          </span>
        ))}
      </div>
    </>
  );
};

const Cancleorderconfirmation = ({ confirmfn, setshowconfirmation }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-black bg-opacity-30 z-20 flex items-center justify-center">
      <div className="w-[90%] max-w-[600px] bg-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 text-yellow-600 mb-4">
          <p className="text-lg font-semibold text-center">
            Canceling the order at this stage may result in a 5% deduction from
            your refund.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <Link
            href="/Contact"
            className="border border-slate-300 rounded-md px-4 py-1 text-slate-500 hover:bg-slate-50 flex items-center justify-center gap-1"
          >
            <IoHelpCircleOutline className="text-[20px]" /> Need Help
          </Link>
          <button
            className="bg-yellow-500 text-white rounded-md px-4 py-1 hover:bg-yellow-400 flex items-center justify-center gap-1"
            onClick={confirmfn}
          >
            <LiaExclamationTriangleSolid className="text-[20px] text-white " />
            Confirm Cancellation
          </button>
          <button
            className="border border-slate-300 rounded-md px-4 py-1 text-slate-500 hover:bg-slate-50"
            onClick={() => setshowconfirmation(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
