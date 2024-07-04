import React from "react";
import { Renderproducts } from "./Publiccomps";

function page() {
  return (
    <div className="p-[20px] flex gap-[10px] bg-bg1">
      <div className="w-full">
        {/* location */}
        {/* https://api.postalpincode.in/pincode/122505 */}
        <div className="flex items-center justify-between py-[10px] pl-[20px] pr-[10px] bg-white border border-slate-300">
          <span>
            {" "}
            Deliver to: <span className="font-bold">Gurgaon - 122505</span>{" "}
          </span>
          <button className="border border-slate-300 py-[5px] px-[20px] text-cyan-500 text-[14px] font-bold">
            Change
          </button>
        </div>
        {/* products */}
        <div className=" border border-slate-300 bg-white mt-[10px] ">
          
            <Renderproducts />
        
          <div className="sticky bottom-0 flex justify-end w-full  bg-white shadow-[0px_-2px_10px_#e1e1e1] p-[10px]">
            <button className="flex items-center gap-[10px] px-[40px] py-[10px] border border-slate-300 rounded-[5px] bg-theme text-white">
              <div className="h-[30px] aspect-square rounded-full  border-r-2 border-l-2 border-white animate-spin"></div>
              Place Order
            </button>
          </div>
        </div>
      </div>
      {/* price details */}
      <div className=" min-w-[400px] ">
        <div className="sticky top-[132px] w-full">
          <div className=" w-full bg-white border border-slate-300 ">
            <h2 className="text-[20px] font-bold px-[20px] py-[15px]">
              Order Summary
            </h2>
            <hr />
            <div className="flex flex-col gap-[20px] p-[20px]">
              <div className="flex items-center justify-between  ">
                <span>
                  Price {"("}1 tiem
                  {")"}
                </span>
                <span>₹{parseInt("29000", 10).toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between  ">
                <span>Discount</span>
                <span> - ₹{parseInt("29000", 10).toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between  ">
                <span>Delivery Charges</span>
                <span>
                  <span className="line-through">
                    ₹{parseInt("40", 10).toLocaleString("en-IN")}
                  </span>
                  <span className="text-green-600"> Free</span>
                </span>
              </div>
              <hr className="" />
              <div className="flex items-center justify-between  font-bold">
                <span>Total Amount</span>
                <span> ₹{parseInt("29000", 10).toLocaleString("en-IN")}</span>
              </div>
              <hr className="" />
              <p className=" text-green-500 font-bold text-center">
                You will save{" "}
                <span>₹{parseInt("29000", 10).toLocaleString("en-IN")}</span> on
                this order
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] mt-[30px] px-[10px]">
            <Secureicon />
            <span>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </span>
          </div>
        </div>
      </div>
    </div>
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

export default page;
