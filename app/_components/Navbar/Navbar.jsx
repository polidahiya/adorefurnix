"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Nextimage from "@/app/_components/Nextimage";
import Navcategories from "./Navcategories";
import Animatingmobilenemubutton from "./_comps/Animatingmobilenemubutton";
import Logedinusermenu from "./_comps/Logedinusermenu";
import { FaCartShopping } from "react-icons/fa6";
import { AppContextfn } from "@/app/Context";
import { FiSearch } from "react-icons/fi";
import Searchbox from "../Searchbox";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaOpencart } from "react-icons/fa6";

function Navbar({ params, productsname, token, userdata }) {
  const router = useRouter();
  const slug = params?.Category;
  const category =
    slug && slug[0] ? decodeURIComponent(slug[0]).replace(/-/g, " ") : null;

  const { showsearch, setshowsearch, showcat, setshowcat, searchinputref } =
    AppContextfn();

  useEffect(() => {
    const hidemenu2 = () => {
      setshowcat(false);
      setshowsearch(false);
    };
    window.addEventListener("popstate", hidemenu2);
    return () => {
      window.removeEventListener("popstate", hidemenu2);
    };
  }, []);

  return (
    <nav className="sticky bg-graygradient top-0 left-0 w-full p-[10px] lg:px-[40px] z-40">
      <div className="relative flex h-[40px] items-center justify-between ">
        {/* firstcomp */}
        <div className="flex items-center gap-0 md:gap-[10px] w-full h-full">
          <Animatingmobilenemubutton setshowsearch={setshowsearch} />
          {/* search button */}
          <button
            className="h-full aspect-square  flex items-center justify-center md:hidden "
            onClick={() => {
              history.pushState(null, "", "");
              setshowsearch(true);
              setTimeout(() => {
                searchinputref.current.focus();
              }, 100);
            }}
          >
            <FiSearch className="h-full text-[25px] text-white aspect-square " />
          </button>
          {/* logo */}
          <Link
            href="/"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30px] md:h-full md:static md:flex  md:translate-x-0 md:translate-y-0  md:w-fit "
          >
            <Nextimage
              className="w-auto h-full "
              src="/logo3.png"
              alt="adorefurnix logo"
              height={50}
              width={200}
            ></Nextimage>
          </Link>
        </div>
        {/* searchbar */}
        <div
          className={`absolute top-[calc(100%+20px)] md:static w-full h-full lg:min-w-[500px] md:block lg:z-20 ${
            showsearch ? "block z-40" : "hidden"
          }`}
        >
          <Searchbox productsname={productsname} />
        </div>

        {/* third comp */}
        <div className="w-full h-full flex items-center justify-end gap-[5px] md:gap-[10px]">
          {/* cart */}
          <Cartlink />

          {/* loged in user menu */}
          <Logedinusermenu userdata={userdata} token={token} />
        </div>
        {/* exit back screen */}
        {(showcat || showsearch) && (
          <div
            className="block lg:hidden fixed top-0 left-0 bg-black opacity-40 h-screen w-screen z-30"
            onClick={() => {
              window.history.back();
            }}
          ></div>
        )}
      </div>
      {/* categories */}
      <Navcategories category={category} />

      {/* backbutton */}
      {!showsearch && (
        <button
          className="absolute bottom-0 left-[10px] translate-y-[calc(100%+10px)] h-[40px] aspect-square bg-theme rounded-full text-[20px] text-white grid place-content-center lg:hidden"
          onClick={() => {
            router.back();
          }}
        >
          <IoMdArrowRoundBack />
        </button>
      )}
    </nav>
  );
}

export const Cartlink = () => {
  const { cart } = AppContextfn();

  let cartlength = 0;
  Object.keys(cart).forEach((item) => {
    cartlength += cart[item].quantity;
  });

  return (
    <div className="group relative  h-full aspect-square z-20">
      <Link
        href="/cart"
        className="h-full w-full flex items-center justify-center"
      >
        <FaCartShopping className="text-[25px] text-white" />
      </Link>
      {Object.keys(cart).length > 0 && (
        <div className="absolute top-0 right-0 h-[15px] aspect-square bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center ">
          {cartlength}
        </div>
      )}
      {/* cart peak */}
      <div className="absolute h-3 w-full hidden lg:group-hover:block">
        <div className="absolute top-full right-0  w-96 translate-x-[50px] rounded-lg bg-white flex  flex-col items-center  p-3 shadow-md">
          <span className="absolute top-0 right-[65px] -translate-y-1/2 rotate-45 w-2 aspect-square bg-white"></span>
          {Object.keys(cart).length > 0 ? (
            <>
              <div className="w-full flex flex-col gap-3 max-h-80  overflow-y-scroll hidescroll">
                {Object.values(cart).map((item, i) => {
                  const priceBeforeDiscount =
                    item.discount > 0
                      ? Math.floor((item.price / (100 - item.discount)) * 100)
                      : null;
                  return (
                    <Link
                      key={i}
                      href={`/${item.category}/${item.subcat}/${item._id}?color=${item?.selectedcolor}`.replace(
                        / /g,
                        "-"
                      )}
                      className="flex gap-2"
                    >
                      <Nextimage
                        className="min-w-32 w-32 aspect-[4/3] rounded-sm object-cover bg-bg1"
                        src={item?.colorpalets[item?.selectedcolor]?.images[0]}
                        alt={item?.name}
                        width={300}
                        height={300}
                        loading="lazy"
                      ></Nextimage>
                      <div className="flex flex-col text-xs">
                        <h3 className="line-clamp-2">{item.name}</h3>
                        {/* price */}
                        <p className="font-bold flex gap-[10px] items-baseline mt-1">
                          {priceBeforeDiscount && (
                            <span className="text-gray-500 line-through">
                              ₹
                              {(
                                priceBeforeDiscount * item.quantity
                              ).toLocaleString("en-IN")}
                            </span>
                          )}
                          {priceBeforeDiscount && (
                            <span className="text-green-500 font-semibold">
                              {item.discount}% OFF
                            </span>
                          )}
                        </p>
                        <p className="text-black">
                          ₹
                          {(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>
                        <div className="flex gap-10 mt-auto">
                          <div>
                            <span className="text-slate-400">Color : </span>
                            <span
                              className="inline-block h-2 aspect-square rounded-full"
                              style={{
                                backgroundColor:
                                  item?.colorpalets[item?.selectedcolor]?.color,
                              }}
                            ></span>
                          </div>
                          <div>
                            <span className="text-slate-400">Qty : </span>
                            <span>{item?.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/cart"
                className="bg-theme flex items-center justify-center gap-3 w-fit px-5 py-1 rounded-full text-white text-sm font-semibold mt-3"
              >
                Go to Cart <FaOpencart />
              </Link>
            </>
          ) : (
            <div className="flex items-center px-5">
              <img
                src="/no-cart.png"
                alt="Empty cart image"
                height={100}
                width={100}
                className="w-[100px]"
              ></img>
              <p className="text-[14px] text-center">
                Your Cart is Empty, Add Some Products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
