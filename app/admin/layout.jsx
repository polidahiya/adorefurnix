"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { autologin } from "./Loginaction";
import Loginpage from "./Loginpage";
import Link from "next/link";
import Image from "next/image";
import Componentloading from "../_components/Componentloading";
import { refreshsitenow } from "../_serveractions/Getcachedata";
import { AppContextfn } from "../Context";
import Refreshsvg from "../_svgs/Refreshsvg";

export default function RootLayout({ children }) {
  const { setmessagefn } = AppContextfn();
  const [showlogin, setshowlogin] = useState(true);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    (async () => {
      let res = await autologin();

      if (res.message == "Login successfull") {
        setshowlogin(false);
      }
      setloading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Componentloading />
      </div>
    );
  } else {
    return (
      <>
        {showlogin ? (
          <Loginpage setshowlogin={setshowlogin} />
        ) : (
          <div>
            <nav className="sticky top-0 flex items-center gap-[10px] md:gap-[30px]  h-[50px] shadow-md px-[10px] md:px-[40px] z-20 bg-graygradient">
              <Link href="/">
                <Image
                  src="/logo3.png"
                  alt="logo"
                  height={40}
                  width={150}
                ></Image>
              </Link>
              <Link
                href="/admin/"
                className="bg-white rounded-[10px] py-[5px] px-[5px] lg:px-[20px]"
              >
                Orders
              </Link>
              <Link
                href="/admin/Blogs"
                className="bg-white rounded-[10px] py-[5px] px-[5px] lg:px-[20px]"
              >
                Add Blogs
              </Link>
              <Link
                href="/admin/addproducts"
                className="bg-white rounded-[10px] py-[5px] px-[5px] lg:px-[20px]"
              >
                Add Products
              </Link>
              <button
                className="bg-white rounded-[10px] p-[5px]  ml-auto"
                onClick={async () => {
                  const res = await refreshsitenow();
                  setmessagefn(res?.message);
                }}
                title="Refresh site Data Now"
              >
                <Refreshsvg styles="h-[25px]" />
              </button>
            </nav>
            {children}
          </div>
        )}
      </>
    );
  }
}
