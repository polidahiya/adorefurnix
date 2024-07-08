"use client";
import React, { useEffect } from "react";
import { AppContextfn } from "@/app/Context";
import Menusvg from "@/app/_svgs/Menusvg";
import Searchbox from "../Searchbox";
import Searchsvg from "@/app/_svgs/Searchsvg";
import Usersvg from "@/app/_svgs/Usersvg";
import Link from "next/link";
import Navorderssvg from "@/app/_svgs/Navorderssvg";
import Heart from "@/app/_svgs/Heart";
import Updateusersvg from "@/app/_svgs/Updateusersvg";
import Logoutsvg from "@/app/_svgs/Logoutsvg";
import { logout } from "@/app/main/loginlogout/Serveractions";
import { useRouter } from "next/navigation";

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
  const { setshowcat, setshowsearch } = AppContextfn();
  return (
    <button
      className="lg:hidden h-full"
      onClick={() => {
        setshowcat((pre) => !pre);
        setshowsearch(false);
      }}
    >
      <Menusvg styles="h-[80%] aspect-square" />
    </button>
  );
};

export const Centralnav = ({ productsname }) => {
  const { showsearch } = AppContextfn();
  return (
    <div
      className={`absolute top-[calc(100%+10px)] md:static w-full h-full lg:min-w-[500px] md:block ${
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
      <Searchsvg styles="stroke-white h-[70%] aspect-square" />
    </button>
  );
};

export const Logedinusermenu = ({ userdata }) => {
  const router = useRouter();
  const { toggleusermenu, settoggleusermenu } = AppContextfn();

  return (
    <>
      {/* usermenu svg */}
      <button
        className="relative h-full aspect-square z-20"
        onClick={() => {
          settoggleusermenu((pre) => ({ ...pre, show: true }));
          setTimeout(() => {
            settoggleusermenu((pre) => ({ ...pre, effect: true }));
          }, 100);
        }}
      >
        <Usersvg styles="h-full aspect-square fill-white stroke-white p-[4px]" />
      </button>
      {/* cancle button */}
      {toggleusermenu.show && (
        <button
          className="fixed top-0 left-0 h-screen w-screen cursor-default"
          onClick={() => {
            settoggleusermenu((pre) => ({ ...pre, effect: false }));
            setTimeout(() => {
              settoggleusermenu((pre) => ({ ...pre, show: false }));
            }, 300);
          }}
        ></button>
      )}
      {/* menu */}
      {toggleusermenu.show && (
        <div
          className={`absolute top-[60px] lg:top-[50px] right-0 lg:right-[-10px]  w-[250px]  bg-white border border-slate-300 rounded-[10px] p-[10px] shadow-lg duration-300 ${
            toggleusermenu.effect
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[20px]"
          }`}
        >
          <center>
            <Usersvg styles="h-[30px] border border-slate-300   mt-[20px] aspect-square fill-white" />
          </center>
          <div className="text-center ">{JSON.parse(userdata).username}</div>
          <div className="text-center text-[12px] text-cyan-500 mt-[5px]">
            {JSON.parse(userdata).email}
          </div>
          <div
            className="flex flex-col gap-[2px] w-full mt-[30px]"
            onClick={() => {
              settoggleusermenu((pre) => ({ ...pre, show: false }));
            }}
          >
            <Link
              href={`/main/orderdetails`}
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
            >
              <Navorderssvg styles="h-[25px]" />
              Orders Detail
            </Link>
            <hr />
            <Link
              href={`/main/likedproducts`}
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
            >
              <Heart styles="h-[25px] w-[25px] fill-red-500 " />
              Liked Products
            </Link>
            <hr />
            <Link
              href={`/main/updateuserdetails`}
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
            >
              <Updateusersvg styles="h-[25px]" />
              Update User Details
            </Link>
            <hr />
            <div
              className="p-[5px] flex items-center gap-[10px] lg:hover:bg-slate-100 cursor-pointer"
              onClick={async () => {
                let res = await logout();
                // setnotifictionarr([
                //   ...notifictionarr,
                //   {
                //     id: new Date() + new Date().getMilliseconds(),
                //     content: res?.message,
                //   },
                // ]);
                router.push("/");
              }}
            >
              <Logoutsvg styles="h-[25px]" />
              Logout
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Exitblackscreen = () => {
  const { showcat, showsearch, setshowsearch, setshowcat } = AppContextfn();
  if (showcat || showsearch) {
    return (
      <div
        className="block lg:hidden fixed top-0 left-0 h-screen w-screen z-[-1]"
        onClick={() => {
          setshowcat(false);
          setshowsearch(false);
        }}
      ></div>
    );
  }
};
