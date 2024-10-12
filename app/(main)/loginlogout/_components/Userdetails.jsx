"use client";
import React, { useRef, useState } from "react";
import Checkfields from "./Checkfileds";
import { AppContextfn } from "@/app/Context";
import { signup, login } from "../Serveractions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Usersvg from "@/app/_svgs/Usersvg";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

function Userdetails() {
  const router = useRouter();

  const { redirectloginlink, setmessagefn } = AppContextfn();

  const [signupform, setsignupform] = useState(false);
  const [togglepassword, settogglepassword] = useState(true);
  const nameref = useRef(null);
  const emailref = useRef(null);
  const passwordref = useRef(null);
  const phonenumref = useRef(null);
  const addressref = useRef(null);
  const [loading, setloading] = useState(false);

  const authenticateuser = async () => {
    const filedcheckvalue = Checkfields({
      nameref,
      emailref,
      passwordref,
      phonenumref,
      addressref,
      setmessagefn,
      signupform,
    });

    if (!filedcheckvalue) return;

    setloading(true);

    const userdata = signupform
      ? {
          username: nameref.current.value,
          email: emailref.current.value,
          password: passwordref.current.value,
          phonenum: phonenumref.current.value,
          address: addressref.current.value,
        }
      : {
          email: emailref.current.value,
          password: passwordref.current.value,
        };

    const apiCall = signupform ? signup : login;

    try {
      const reply = await apiCall(userdata);
      setmessagefn(reply?.message);

      if (reply?.status === 200) {
        setTimeout(() => {
          router.replace(redirectloginlink || "/");
        }, 1000);
      }
    } catch (error) {
      setmessagefn("An error occurred. Please try again.");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="relative bg-white w-[90%] max-w-[750px] rounded-[20px] shadow-lg p-[30px]">
      <Image
        src="/minlogo.png"
        alt="rentbean.in logo image"
        className=" top-[20px] left-[30px] h-[50px] w-[50px] invert"
        width={156}
        height={60}
      ></Image>
      <center>
        <div className="relative w-fit flex items-center justify-center  text-[30px] ">
          <Usersvg styles="absolute top-[50%] left-0 translate-y-[-50%] translate-x-[-120%]  h-[30px] border border-slate-300 rounded-full fill-white" />
          {signupform ? "Sign up" : "Login"}
        </div>
      </center>
      <div className="mt-[20px] lg:grid lg:grid-cols-2 lg:gap-x-[30px] ">
        {signupform && <Inputfiels refval={nameref} type="text" lable="Name" />}
        <Inputfiels refval={emailref} type="email" lable="Email" />
        <Inputfiels
          refval={passwordref}
          type={togglepassword ? "password" : "text"}
          lable="Password"
          extraelem={
            <button
              className="absolute top-[50%] right-[10px] translate-y-[-50%] z-[11] text-[20px]"
              onClick={() => {
                settogglepassword(!togglepassword);
              }}
            >
              {togglepassword ? <IoIosEyeOff /> : <IoIosEye />}
            </button>
          }
        />
        {signupform && (
          <>
            <Inputfiels
              refval={phonenumref}
              type="number"
              lable="Mobile Number"
            />
            <Inputfiels
              refval={addressref}
              type="text"
              lable="Address"
              extrastyle="col-span-2"
            />
          </>
        )}
      </div>
      {/* login or signup button */}
      <center>
        <button
          className="relative group flex items-center justify-center gap-[10px] px-[100px] py-[5px] text-white rounded-full mt-[20px]  overflow-hidden"
          onClick={authenticateuser}
        >
          {loading && (
            <div className="h-[20px] aspect-square rounded-full  border-r-2 border-l-2 border-white animate-spin z-10"></div>
          )}
          <span className="z-10">{signupform ? "Signup" : "Login"}</span>
          <div className="absolute top-0 left-0 w-[200%] h-full bg-[linear-gradient(90deg,#10e89c,#0593f7,#10e89c)] group-hover:translate-x-[-50%] duration-200"></div>
        </button>
      </center>
      {/* form switcher */}
      <div className="text-[14px] text-center mt-[20px]">
        {signupform ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          className="text-theme cursor-pointer"
          onClick={() => {
            setsignupform(!signupform);
          }}
        >
          {signupform ? "Login" : "Signup"}
        </span>
      </div>
    </div>
  );
}

function Inputfiels({ refval, type, lable, extraelem, extrastyle }) {
  return (
    <div
      className={`relative h-[35px] w-full my-[30px] lg:my-[15px] bg-transparent ${extrastyle}`}
    >
      <input
        ref={refval}
        className="forminput absolute h-full w-full top-0 left-0 flex items-center outline-none  border-b border-b-theme box-content bg-white text-black"
        type={type}
        required
      />
      <label className="formlabel absolute h-full w-full top-0 left-0 z-10 flex items-center bg-white  pointer-events-none duration-150">
        {lable}
      </label>
      {extraelem}
    </div>
  );
}

export default Userdetails;
