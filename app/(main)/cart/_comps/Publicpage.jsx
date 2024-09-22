"use client";
import { Placeorder } from "@/app/_serveractions/Addorder";
import { AppContextfn } from "@/app/Context";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import { Paymentfn } from "./Payment";
import Componentloading from "@/app/_components/Componentloading";
import Pricedetails from "./Pricedetails";
import Emptycart from "./Emptycart";
import Useraddress from "./Useraddress";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa6";
import Cookies from "js-cookie";

export default function Page({ userdata, token }) {
  const { cart, setcart, settoggleorderplacedmenu, setmessagefn } =
    AppContextfn();

  const [loading, setloading] = useState(false);

  let cartlength = 0;
  Object.keys(cart).forEach((item) => {
    cartlength += cart[item].quantity;
  });

  let totalprice = 0;
  let totaldiscount = 0;
  Object.keys(cart).forEach((item) => {
    const price = Number(cart[item].price);
    const beforediscount = (price / (100 - cart[item].discount)) * 100;
    const quantity = cart[item].quantity;
    totalprice += beforediscount * quantity;
    totaldiscount += (beforediscount - price) * quantity;
  });

  // place order fucntion
  const Order = () => {
    if (!token) {
      setmessagefn("Please Login");
      return;
    }

    Paymentfn(
      userdata,
      totalprice - totaldiscount,
      "INR",
      async (rzorderid, rzpaymentid) => {
        setloading(true);

        const res = await Placeorder(cart, rzorderid, rzpaymentid);
        if (res?.status == 200) {
          settoggleorderplacedmenu(true);

          Cookies.set("cart", JSON.stringify({}), {
            expires: 7,
          });
          setcart({});
        } else {
          setmessagefn(res?.message);
        }
        setloading(false);
      },
      setmessagefn
    );
  };

  // adding razorpay
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (cartlength == 0) {
    return <Emptycart />;
  }

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-[10%] z-[10]">
          <Componentloading />
        </div>
      )}

      <div className="p-[5px] md:p-[20px] flex flex-col lg:flex-row gap-[10px] bg-bg1 min-h-[calc(100vh-111px)]">
        <div className="w-full">
          <div className="h-[60px] flex items-center justify-center gap-[10px] text-[20px] font-bold font-serif italic  lg:hidden">
            Cart
            <FaOpencart />
          </div>

          {userdata && <Useraddress userdata={userdata} />}

          {/* products */}
          <div
            className={` border border-slate-300 bg-white  ${
              userdata && "mt-[10px]"
            }`}
          >
            {Object.keys(cart).map((item, i) => {
              return <Products key={i} item={item} i={i} />;
            })}

            <div className="sticky bottom-0 flex w-full gap-[10px] bg-white shadow-[0px_-2px_10px_#e1e1e1] p-[10px]">
              <button
                className="flex items-center gap-[10px] px-[20px] py-[5px] border border-slate-300 rounded-[5px] bg-theme  text-white ml-auto whitespace-nowrap"
                onClick={Order}
              >
                <IoShieldCheckmark />
                Place Order
              </button>
            </div>
          </div>
        </div>
        {/* price details */}
        <Pricedetails
          cartlength={cartlength}
          totalprice={totalprice}
          totaldiscount={totaldiscount}
        />
      </div>
    </>
  );
}
