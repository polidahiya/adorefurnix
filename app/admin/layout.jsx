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
import { BiRefresh } from "react-icons/bi";

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
            <nav className="sticky top-0 flex items-center gap-[5px] md:gap-[10px]  h-[50px] shadow-md p-[7px] px-[10px] md:px-[40px] z-20 bg-graygradient">
              <Link href="/">
                <Image
                  src="/logo3.png"
                  alt="logo"
                  height={40}
                  width={150}
                ></Image>
              </Link>
              <Link
              className="h-full rounded-[5px] px-[10px] bg-white grid place-content-center "
                href="/admin/"
              >
                Orders
              </Link>
              <Link
              className="h-full rounded-[5px] px-[10px] bg-white grid place-content-center "
                href="/admin/Blogs"
              >
                Add Blogs
              </Link>
              <Link
              className="h-full rounded-[5px] px-[10px] bg-white grid place-content-center "
                href="/admin/addproducts"
              >
                Add Products
              </Link>
              <Link
              className="h-full rounded-[5px] px-[10px] bg-white grid place-content-center "
                href="/admin/contactmessages"
              >
                Contact messsages
              </Link>
              {/* refresh site page */}
              <button
                className="h-full aspect-square bg-white rounded-[5px]  ml-auto grid place-content-center"
                onClick={async () => {
                  const res = await refreshsitenow();
                  setmessagefn(res?.message);
                }}
                title="Refresh site Data Now"
              >
                <BiRefresh />
              </button>
            </nav>
            {children}
          </div>
        )}
      </>
    );
  }
}
