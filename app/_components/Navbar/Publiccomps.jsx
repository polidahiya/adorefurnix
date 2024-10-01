"use client";
import React from "react";
import { AppContextfn } from "@/app/Context";
import Searchbox from "../Searchbox";
import Usersvg from "@/app/_svgs/Usersvg";
import Link from "next/link";
import Navorderssvg from "@/app/_svgs/Navorderssvg";
import Heart from "@/app/_svgs/Heart";
import Updateusersvg from "@/app/_svgs/Updateusersvg";
import Logoutsvg from "@/app/_svgs/Logoutsvg";
import { logout } from "@/app/(main)/loginlogout/Serveractions";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";

export const Cartproductcount = () => {
  const { cart } = AppContextfn();
  let cartlength = 0;
  Object.keys(cart).forEach((item) => {
    cartlength += cart[item].quantity;
  });

  if (Object.keys(cart).length > 0) {
    return (
      <div className="absolute top-0 right-0 h-[15px] aspect-square bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center ">
        {cartlength}
      </div>
    );
  }
};

export const Showmobilecategorymenubutton = () => {
  const { showcat, setshowcat, setshowsearch } = AppContextfn();
  return (
    <button
      onClick={() => {
        setshowcat((pre) => !pre);
        setshowsearch(false);
      }}
      className="lg:hidden h-[calc(100%-4px)] aspect-square flex flex-col justify-center items-center z-40"
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          showcat ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          showcat ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          showcat ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export const Centralnav = ({ productsname }) => {
  const { showsearch } = AppContextfn();
  return (
    <div
      className={`absolute top-[calc(100%+20px)] md:static w-full h-full lg:min-w-[500px] md:block z-40 ${
        showsearch ? "block" : "hidden"
      }`}
    >
      {/* search bar */}
      <Searchbox productsname={productsname} />
    </div>
  );
};

export const Showsearchbutton = () => {
  const { setshowsearch, searchinputref, setshowcat } = AppContextfn();
  return (
    <button
      className="h-full aspect-square  flex items-center justify-center md:hidden "
      onClick={() => {
        setshowsearch((pre) => !pre);
        setshowcat(false);
        setTimeout(() => {
          searchinputref.current.focus();
        }, 100);
      }}
    >
      <FiSearch className="h-full text-[25px] text-white aspect-square " />
    </button>
  );
};

export const Logedinusermenu = ({ token, userdata }) => {
  const router = useRouter();
  const {
    toggleusermenu,
    settoggleusermenu,
    setmessagefn,
    setredirectloginlink,
  } = AppContextfn();

  const showmenu = () => {
    settoggleusermenu((pre) => ({ ...pre, show: true }));
    setTimeout(() => {
      settoggleusermenu((pre) => ({ ...pre, effect: true }));
    }, 100);
  };

  const hidemenu = () => {
    settoggleusermenu((pre) => ({ ...pre, effect: false }));
    setTimeout(() => {
      settoggleusermenu((pre) => ({ ...pre, show: false }));
    }, 300);
  };

  const parsedUserData = userdata ? JSON.parse(userdata) : null;

  if (!token) {
    return (
      <button
        onClick={() => {
          const link = new URL(window.location.href);
          setredirectloginlink(link.pathname);
        }}
      >
        <Link
          href="/loginlogout"
          className="flex items-center justify-center text-white h-[30px] px-[10px] md:px-[20px] rounded-full bg-theme"
        >
          Login
        </Link>
      </button>
    );
  }
  
  return (
    <>
      {/* User menu button */}
      <button className="relative h-full aspect-square z-30" onClick={showmenu}>
        <Usersvg styles="h-full aspect-square fill-white stroke-white p-[4px]" />
        {/* Menu */}
        {toggleusermenu.show && (
          <div
            className={`absolute top-[calc(100%+10px)] right-0 w-[250px] bg-white border border-slate-300 rounded-[10px] p-[10px] shadow-lg duration-300 z-30 ${
              toggleusermenu.effect
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[20px]"
            }`}
          >
            <center>
              <Usersvg styles="h-[30px] border border-slate-300 rounded-full mt-[20px] aspect-square fill-white" />
            </center>
            <div className="text-center mt-[5px]">
              {parsedUserData?.username || "User Name"}
            </div>
            <div className="text-center text-[12px] text-cyan-500">
              {parsedUserData?.email || "User Email"}
            </div>
            <div
              className="flex flex-col gap-[2px] w-full mt-[30px]"
              onClick={() => {
                setTimeout(hidemenu, 100);
              }}
            >
              <Link
                href={`/orderdetails`}
                className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
              >
                <Navorderssvg styles="h-[25px]" />
                Orders Detail
              </Link>
              <hr />
              <Link
                href={`/likedproducts`}
                className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
              >
                <Heart styles="h-[25px] w-[25px] fill-red-500" />
                Liked Products
              </Link>
              <hr />
              <Link
                href={`/updateuserdetails`}
                className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
              >
                <Updateusersvg styles="h-[25px]" />
                Update User Details
              </Link>
              <hr />
              <div
                className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
                onClick={async () => {
                  const res = await logout();
                  setmessagefn(res?.message);
                  if (res.status === 200) router.push("/");
                }}
              >
                <Logoutsvg styles="h-[25px]" />
                Logout
              </div>
            </div>
          </div>
        )}
      </button>
      {/* Overlay to close menu */}
      {toggleusermenu.show && (
        <button
          className="fixed top-0 left-0 h-screen w-screen cursor-default"
          onClick={hidemenu}
        ></button>
      )}
    </>
  );
};

export const Exitblackscreen = () => {
  const { showcat, showsearch, setshowsearch, setshowcat } = AppContextfn();
  if (showcat || showsearch) {
    return (
      <div
        className="block lg:hidden fixed top-0 left-0 bg-black opacity-40 h-screen w-screen z-30"
        onClick={() => {
          setshowcat(false);
          setshowsearch(false);
        }}
      ></div>
    );
  }
};

// backbutton
export function Mobilebackbutton() {
  const { showsearch } = AppContextfn();
  const router = useRouter();

  if (!showsearch)
    return (
      <button
        className="absolute bottom-0 left-[10px] translate-y-[calc(100%+10px)] h-[40px] aspect-square bg-theme rounded-full text-[20px] text-white grid place-content-center lg:hidden"
        onClick={() => {
          router.back();
        }}
      >
        <IoMdArrowRoundBack />
      </button>
    );
}
