"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { autologin } from "./Loginaction";
import Loginpage from "./Loginpage";
import Link from "next/link";
import Componentloading from "../_components/Componentloading";

export default function RootLayout({ children }) {
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
            <nav className="sticky top-0 flex items-center gap-[10px] md:gap-[30px]  h-[50px] shadow-md px-[10px] z-10 bg-white">
              <Link
                href="/admin/"
                className="border border-slate-300 rounded-[10px] py-[5px] px-[5px] lg:px-[20px]"
              >
                Home
              </Link>
              <Link
                href="/admin/Blogs"
                className="border border-slate-300 rounded-[10px] py-[5px] px-[5px] lg:px-[20px]"
              >
                Add Blogs
              </Link>
              <Link
                href="/admin/addproducts"
                className="border border-slate-300 rounded-[10px] py-[5px] px-[5px] lg:px-[20px]"
              >
                Add Products
              </Link>
            </nav>
            {children}
          </div>
        )}
      </>
    );
  }
}
