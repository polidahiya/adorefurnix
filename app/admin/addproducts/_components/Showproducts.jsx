"use client";
import React, { useEffect, useState } from "react";
import { categorylist } from "@/app/commondata";
import { Getliveproducts } from "../Getliveproducts";
import { Deleteproduct } from "../Serveraction";
import { AppContextfn } from "@/app/Context";

function Showproducts() {
  const [categorystate, setcategorystate] = useState({
    category: "Living Room",
    subcat: "Sofa sets",
  });
  const {
    setaddproduct,
    setupdateproduct,
    setdeletedimages,
    adminproductrefresher,
    setmessagefn,
  } = AppContextfn();

  const [products, setproducts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await Getliveproducts(categorystate);
      if (res?.message) {
        setmessagefn(res?.message);
      } else {
        setproducts(res?.products);
      }
    })();
  }, [categorystate, adminproductrefresher]);

  return (
    <div>
      <hr />
      <h2 className="text-center mt-[30px] text-[20px] font-bold">Products</h2>
      <h2 className="text-center mt-[30px] text-[20px] font-bold">
        Select a category
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[10px] p-[20px]">
        {Object.keys(categorylist).map((item, i) => {
          return (
            <button
              key={i}
              className={`border border-slate-300 rounded-[10px] p-[10px] 
                ${
                  categorystate?.category == item
                    ? "bg-slate-600 text-white"
                    : ""
                }`}
              onClick={() => {
                setcategorystate({
                  ...categorystate,
                  category: item,
                  subcat: categorylist[item]?.subcat[0]?.name,
                });
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <h2 className="text-center mt-[30px] text-[20px] font-bold">
        Select Subcategory
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[10px] p-[20px]">
        {categorylist[categorystate?.category]?.subcat?.map((item, i) => {
          return (
            <button
              key={i}
              className={`border border-slate-300 rounded-[10px] p-[10px] ${
                categorystate?.subcat == item.name
                  ? "bg-slate-600 text-white"
                  : ""
              }`}
              onClick={() => {
                setcategorystate({ ...categorystate, subcat: item.name });
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {/* products */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px] p-[20px]">
        {products.map((item, i) => {
          const discount = Math.floor(
            (item.price / (100 - item.discount)) * 100
          );
          return (
            <div
              key={i}
              className="relative w-full shadow-[4px_4px_5px_#bababa7f] rounded-[10px] overflow-hidden"
            >
              {/* discount */}
              {item.discount != 0 && (
                <div className="absolute top-[10px] left-[10px] bg-green-600 text-white p-[5px] rounded-[5px]">
                  {item.discount}
                  {"%"} OFF
                </div>
              )}
              {/* availabe */}
              {!item.available && (
                <div
                  className={`absolute  left-[10px] bg-red-600 text-white p-[5px] rounded-[5px]
                   ${discount ? "top-[50px]" : "top-[10px]"}`}
                >
                  Out of Stock!
                </div>
              )}
              {/*  */}
              <img
                src={item.colorpalets[0].images[0]}
                alt=""
                width={300}
                height={300}
                className="aspect-[4/3] w-full object-cover object-center"
              ></img>
              <div className="p-[10px]">
                <h3 className="text-center  font-bold">{item.name}</h3>
                <div className="flex items-center gap-[10px] text-[18px]">
                  {item.discount != 0 && (
                    <span className="line-through text-slate-400">
                      ₹{discount}
                    </span>
                  )}
                  <span className="">₹{item.price}</span>
                </div>
              </div>
              {/* delete product button */}
              <button
                className="absolute top-3 right-3 aspect-square w-7 bg-red-600 text-white"
                onClick={async () => {
                  const res = await Deleteproduct(item.colorpalets, item._id);
                  setproducts(
                    products.filter((product) => item._id !== product._id)
                  );
                  if (res?.message) {
                    setmessagefn(res.message);
                  }
                }}
              >
                X
              </button>
              {/* update product button */}
              <button
                className="absolute top-[50px] right-3  bg-green-600 p-[5px] text-white"
                onClick={() => {
                  setaddproduct(item);
                  setdeletedimages([]);
                  setupdateproduct(true);
                  window.scrollTo(0, 0);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Showproducts;
