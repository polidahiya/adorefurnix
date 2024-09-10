"use client";
import { Placeorder } from "@/app/_serveractions/Addorder";
import Ordersplacednotif from "./Ordersplacednotif";
import { AppContextfn } from "@/app/Context";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import Image from "next/image";
import Link from "next/link";
import { Paymentfn } from "./Payment";
import Componentloading from "@/app/_components/Componentloading";

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

  return (
    <>
      <Ordersplacednotif />
      {loading && (
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black bg-opacity-[10%] z-[10]">
          <Componentloading />
        </div>
      )}

      {cartlength != 0 ? (
        <div className="p-[5px] md:p-[20px] flex flex-col lg:flex-row gap-[10px] bg-bg1 min-h-[calc(100vh-111px)]">
          <div className="w-full">
            <div className="flex items-center gap-[10px] bg-white border border-slate-300 p-[10px]">
              <span>Payment Mode : </span>
              <button
                className="border border-slate-300 px-[20px] py-[5px] rounded-[5px] opacity-75 cursor-not-allowed"
                onClick={() => {
                  setmessagefn("Current unavailable");
                }}
              >
                Upi
              </button>
              <button className="border border-slate-300 px-[20px] py-[5px] rounded-[5px] text-theme">
                Cash On Delivery
              </button>
            </div>
            {/* products */}
            <div className=" border border-slate-300 bg-white mt-[10px]">
              {Object.keys(cart).map((item, i) => {
                return (
                  <Products
                    key={i}
                    cart={cart}
                    setcart={setcart}
                    item={item}
                    i={i}
                  />
                );
              })}

              <div className="sticky bottom-0 flex w-full gap-[10px] bg-white shadow-[0px_-2px_10px_#e1e1e1] p-[10px]">
                {userdata && (
                  <Link
                    href="/updateuserdetails"
                    className="w-full flex items-center px-[20px] border border-slate-300 rounded-[5px] whitespace-nowrap overflow-hidden text-ellipsis text-slate-400"
                  >
                    Address : {userdata?.address}
                  </Link>
                )}
                <button
                  className="flex items-center gap-[10px] px-[40px] py-[10px] border border-slate-300 rounded-[5px] bg-theme  text-white ml-auto whitespace-nowrap"
                  onClick={() => {
                    if (!token) {
                      setmessagefn("Please Login");
                      return;
                    }

                    Paymentfn(
                      userdata,
                      totalprice - totaldiscount,
                      "INR",
                      async () => {
                        setloading(true);

                        const res = await Placeorder(cart);
                        if (res?.message == "Order Placed") {
                          settoggleorderplacedmenu(true);
                          setcart({});
                        } else {
                          setmessagefn(res?.message);
                        }
                        setloading(false);
                      },
                      setmessagefn
                    );
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          {/* price details */}
          <div className=" md:min-w-[400px] ">
            <div className="sticky top-[132px] w-full">
              <div className=" w-full bg-white border border-slate-300 ">
                <h2 className="text-[20px] font-bold px-[20px] py-[15px]">
                  Order Summary
                </h2>
                <hr />
                <div className="flex flex-col gap-[20px] p-[20px]">
                  <div className="flex items-center justify-between  ">
                    <span>
                      Price {"("}
                      {cartlength} {cartlength == 1 ? "item" : "items"}
                      {")"}
                    </span>
                    <span>
                      ₹{parseInt(totalprice, 10).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between  ">
                    <span>Discount</span>
                    <span>
                      {" "}
                      - ₹{parseInt(totaldiscount, 10).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between  ">
                    <span>Delivery Charges</span>
                    <span>
                      <span className="line-through">
                        ₹{parseInt(40 * cartlength, 10).toLocaleString("en-IN")}
                      </span>
                      <span className="text-green-600"> Free</span>
                    </span>
                  </div>
                  <hr className="" />
                  <div className="flex items-center justify-between  font-bold">
                    <span>Total Amount</span>
                    <span>
                      {" "}
                      ₹
                      {parseInt(totalprice - totaldiscount, 10).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </div>
                  <hr className="" />
                  <p className=" text-green-500 font-bold text-center">
                    You will save{" "}
                    <span>
                      ₹
                      {parseInt(
                        totaldiscount + cartlength * 40,
                        10
                      ).toLocaleString("en-IN")}
                    </span>{" "}
                    on this order
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] mt-[30px] pb-[30px] md:pb-0 px-[10px]">
                <Secureicon />
                <span>
                  Safe and Secure Payments. Easy returns. 100% Authentic
                  products.
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-111px)] p-[20px]">
          <Image
            src="/no-cart.png"
            alt="Empty cart image"
            height={300}
            width={300}
          ></Image>
          <p className="mt-[30px] font-bold text-[20px] text-center">
            Your Cart is Empty, Add Some Products.
          </p>
          <Link
            href="/"
            className="py-[10px] px-[50px] bg-theme text-white mt-[20px] rounded-full"
          >
            Home
          </Link>
        </div>
      )}
    </>
  );
}

function Secureicon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      className="h-[55px] aspect-square"
      data-name="Flat Line"
      viewBox="0 0 24 24"
    >
      <g strokeWidth="1.008">
        <path
          fill="#c7c7c7"
          d="M12 21l.88-.38a11 11 0 006.63-9.26l.43-5.52a1 1 0 00-.76-1L12 3 4.82 4.8a1 1 0 00-.76 1l.43 5.52a11 11 0 006.63 9.26z"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 11L11 13 15 9"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21l.88-.38a11 11 0 006.63-9.26l.43-5.52a1 1 0 00-.76-1L12 3 4.82 4.8a1 1 0 00-.76 1l.43 5.52a11 11 0 006.63 9.26z"
          data-name="primary"
        ></path>
      </g>
    </svg>
  );
}
