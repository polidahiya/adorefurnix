"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Usersvg from "@/app/_svgs/Usersvg";
import Link from "next/link";
import { useState } from "react";
import { Sendpassresetmail, Resetpassword } from "./Serveraction";
import { AppContextfn } from "@/app/Context";

function Page() {
  const { setmessagefn } = AppContextfn();
  const inputref = useRef(null);
  const [token, settoken] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    settoken(params.get("token"));
  }, []);

  const Submitform = async () => {
    const inputvalue = inputref.current.value;
    if (token) {
      // password check
      const minLength = 8;
      const maxLength = 100;

      if (inputvalue.length < minLength) {
        inputref.current.focus();
        setmessagefn("Password is too short ( " + minLength + " chars min )*");
        return;
      }

      if (inputvalue.length > maxLength) {
        inputref.current.focus();
        setmessagefn("Password is too big ( " + maxLength + " chars min )*");
        return;
      }
      setloading(true);
      const res = await Resetpassword(inputvalue, token);
      setmessagefn(res?.message);
      setloading(false);
    } else {
      // email check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputvalue)) {
        inputref.current.focus();
        setmessagefn("Invalid email");
        return;
      }
      setloading(true);
      const res = await Sendpassresetmail(inputvalue);
      setloading(false);
      setmessagefn(res?.message);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center py-[20px]"
      style={{
        background: "url(images/loginwallpaper.jpg) center left / cover",
        minHeight: "calc(100vh - 60px)",
      }}
    >
      <div className="relative bg-white w-[90%] max-w-[750px] rounded-[20px] shadow-lg p-[30px]">
        <Image
          src="/minlogo.png"
          alt="logo image"
          className=" top-[20px] left-[30px] h-[50px] w-[50px] invert"
          width={156}
          height={60}
        ></Image>
        <center>
          <div className="relative w-fit flex items-center justify-center  text-[30px] ">
            <Usersvg styles="absolute top-[50%] left-0 translate-y-[-50%] translate-x-[-120%]  h-[30px] border border-slate-300 rounded-full fill-white" />
            Reset Password
          </div>
        </center>
        <div className="mt-7">
          {/* email field */}
          <div
            className={`relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent`}
          >
            <input
              ref={inputref}
              className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
              type={token ? "text" : "email"}
              required
            />
            <label className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150">
              {token ? "Enter new password" : "Enter your email"}
            </label>
          </div>
        </div>
        <center>
          <button
            className="relative group flex items-center justify-center gap-[10px] px-[50px] py-[5px] text-white rounded-full mt-[20px]  overflow-hidden"
            onClick={Submitform}
          >
            {loading && (
              <div className="h-[20px] aspect-square rounded-full  border-r-2 border-l-2 border-white animate-spin z-10"></div>
            )}
            <span className="z-10">
              {token ? "Change password" : "Continue"}
            </span>
            <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#10e89c,#0593f7,#10e89c)] group-hover:translate-x-[-50%] duration-200"></div>
          </button>
        </center>
        <p className="text-[14px] text-center mt-5">
          Back to
          <Link
            href={"/loginlogout"}
            className="text-theme cursor-pointer ml-1"
            replace
          >
            login
          </Link>{" "}
          page
        </p>
      </div>
    </div>
  );
}

export default Page;
