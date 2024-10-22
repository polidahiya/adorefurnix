"use client";
import React, { useState } from "react";
import { categorylist } from "@/app/commondata";
import { Getliveproducts } from "../Getliveproducts";
import { Deleteproduct } from "../Serveraction";
import { AppContextfn } from "@/app/Context";
import Componentloading from "@/app/_components/Componentloading";
import Productcard from "@/app/_components/Productcard";
import { MdUpload } from "react-icons/md";

function Showproducts() {
  const [categorystate, setcategorystate] = useState({
    category: "Living Room",
    subcat: "Sofa sets",
  });
  const { setaddproduct, setupdateproduct, setdeletedimages, setmessagefn } =
    AppContextfn();

  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);

  const handlecategorychange = (e) => {
    const value = e.target.value;
    setcategorystate({
      ...categorystate,
      category: value,
      subcat: categorylist[value]?.subcat[0]?.name,
    });
  };

  const handlesubcategorychange = (e) => {
    const value = e.target.value;
    setcategorystate({
      ...categorystate,
      subcat: value,
    });
  };

  const showproducts = async () => {
    setloading(true);
    const res = await Getliveproducts(categorystate);
    if (res.status == 200) {
      setproducts(res?.products);
    }

    setmessagefn(res?.message);
    setloading(false);
  };

  if (loading) return <Componentloading />;

  return (
    <div>
      <hr />
      <h2 className="text-center mt-[30px] text-[20px] font-bold">
        Show Products
      </h2>
      <div className="flex flex-col md:flex-row  items-center justify-center gap-10 mt-10 px-5">
        <div className="w-full flex gap-5 items-center">
          <label className="flex-1 text-[20px] font-bold ">Category :</label>
          <select
            className="flex-1 p-2 border border-slate-300 outline-none rounded-md"
            value={categorystate?.category}
            onChange={handlecategorychange}
          >
            {Object.keys(categorylist).map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {categorylist[categorystate?.category]?.subcat.length != 0 && (
          <div className="w-full flex gap-5 items-center">
            <label className="flex-1 text-[20px] font-bold ">
              Sub-Category :
            </label>
            <select
              className="flex-1 p-2 border border-slate-300 outline-none rounded-md"
              value={categorystate?.subcat}
              onChange={handlesubcategorychange}
            >
              {categorylist[categorystate?.category]?.subcat?.map((item, i) => (
                <option key={i} value={item?.name}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <center>
        <button
          className="bg-slate-300 rounded-md p-[5px] px-5 my-5"
          onClick={showproducts}
        >
          Show Products
        </button>
      </center>
      {/* products */}
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-[10px] md:gap-[20px] p-3 md:p-8">
        {products.map((item, i) => {
          return (
            <div
              key={i + new Date().getMilliseconds() + Math.random()} // More stable key
              className="relative h-full w-full max-w-[350px] md:min-w-[270px] shadow-md rounded-[10px]  bg-white"
            >
              <Productcard
                index={i}
                id={item._id}
                image={item.colorpalets[0]?.images[0]}
                {...item}
              />
              {/* delete product button */}
              <button
                className="absolute top-3 right-3 aspect-square w-7 bg-red-600 text-white rounded-full"
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
                className="absolute top-[50px] right-3 flex items-center gap-1 bg-green-600 p-[5px] px-5 rounded-full text-white"
                onClick={() => {
                  setaddproduct(item);
                  setdeletedimages([]);
                  setupdateproduct(true);
                  window.scrollTo(0, 0);
                }}
              >
                <MdUpload /> Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Showproducts;
